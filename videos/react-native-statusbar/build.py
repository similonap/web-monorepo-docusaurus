#!/usr/bin/env python3
"""Bouwt audio_meta.json, caption_groups.json, compositions/captions.html en index.html
uit audio/vo-NN.{mp3,words.json} en STORYBOARD.md (frames, transitions, sfx)."""
import json, re, subprocess, os

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)
PAD = 0.45      # stilte tussen twee regels
XF = 0.5        # overlap voor de overgang

def mp3_dur(p):
    out = subprocess.run(['afinfo', p], capture_output=True, text=True).stdout
    return float(re.search(r'estimated duration: ([\d.]+)', out).group(1))

sb = open('STORYBOARD.md').read()
frames = []
for m in re.finditer(r'^## Frame (\d+) — .*?\n(.*?)(?=^## |\Z)', sb, re.S | re.M):
    n = int(m.group(1)); body = m.group(2)
    fid = re.search(r'^- id: (\S+)', body, re.M).group(1)
    tr = re.search(r'^- transition_in: (\S+)', body, re.M).group(1)
    sfx = re.search(r'^- sfx: (.*)$', body, re.M)
    cues = []
    if sfx:
        for c in sfx.group(1).split(','):
            c = c.strip()
            if c: name, t = c.split('@'); cues.append((name.strip(), float(t)))
    frames.append(dict(n=n, id=fid, transition=tr, sfx=cues))

t = 0.0
for f in frames:
    words = json.load(open('audio/vo-%02d.words.json' % f['n']))
    d = mp3_dur('audio/vo-%02d.mp3' % f['n'])
    f['words'] = words; f['voice'] = round(d, 2)
    f['slot'] = round(max(d, words[-1]['end']) + PAD, 2)
    f['start'] = round(t, 2); t += f['slot']
    f['dur'] = round(f['slot'] + XF, 2)
frames[-1]['dur'] = round(frames[-1]['slot'] + 1.2, 2)
TOTAL = round(frames[-1]['start'] + frames[-1]['dur'], 2)

SFX_DUR = {'pop': 0.72, 'whoosh-short': 0.57, 'typing': 1.5, 'click': 0.36, 'click-soft': 0.36, 'key-press': 0.12}
meta = {'bgm': None, 'bgm_pending': False,
        'voices': [{'frame': f['n'], 'path': 'audio/vo-%02d.mp3' % f['n'], 'duration_s': f['voice'], 'words': f['words']} for f in frames],
        'sfx': [{'frame': f['n'], 'file': 'assets/sfx/%s.mp3' % s, 'offset_s': o, 'duration_s': SFX_DUR[s], 'volume': 0.35, 'source': 'host'} for f in frames for s, o in f['sfx']]}
json.dump(meta, open('audio_meta.json', 'w'), indent=1, ensure_ascii=False)

# ---- ondertitels: code-termen schrijven zoals in de code ----
# (gesproken woorden, schrijfwijze, hoofdlettergevoelig)
MERGE = [(['constants', 'punt', 'status', 'bar', 'height'], 'Constants.statusBarHeight', False),
         (['set', 'status', 'bar', 'style'], 'setStatusBarStyle', False),
         (['set', 'status', 'bar', 'hidden'], 'setStatusBarHidden', False),
         (['expo', 'status', 'bar'], 'expo-status-bar', False),
         (['padding', 'top'], 'paddingTop', False),
         (['style', 'sheet', 'punt', 'create'], 'StyleSheet.create', False),
         (['on', 'submit', 'editing'], 'onSubmitEditing', False),
         (['on', 'change', 'text'], 'onChangeText', False),
         (['on', 'long', 'press'], 'onLongPress', False),
         (['delay', 'long', 'press'], 'delayLongPress', False),
         (['secure', 'text', 'entry'], 'secureTextEntry', False),
         (['on', 'press', 'in'], 'onPressIn', False),
         (['on', 'press', 'out'], 'onPressOut', False),
         (['on', 'press'], 'onPress', False),
         (['on', 'click'], 'onClick', False),
         (['on', 'focus'], 'onFocus', False),
         (['style', 'sheet'], 'StyleSheet', False),
         (['text', 'input'], 'TextInput', False),
         (['background', 'color'], 'backgroundColor', False),
         (['border', 'width'], 'borderWidth', False),
         (['border', 'color'], 'borderColor', False),
         (['border', 'radius'], 'borderRadius', False),
         (['font', 'size'], 'fontSize', False),
         (['font', 'weight'], 'fontWeight', False),
         (['text', 'align'], 'textAlign', False),
         (['resize', 'mode'], 'resizeMode', False),
         (['keyboard', 'type'], 'keyboardType', False),
         (['display', 'flex'], 'display: flex', False),
         (['u', 'i', 'view'], 'UIView', False),
         (['u', 'r', 'i'], 'uri', False),
         (['p', 'x'], 'px', False),
         (['vijfhonderd', 'milliseconden'], '500 ms', False),
         (['status', 'bar'], 'StatusBar', False)]
def norm(w): return re.sub(r'[^\wëéèï]', '', w.lower())
def strip(w): return re.sub(r'[^\wëéèï]', '', w)
def merge(words):
    out, i = [], 0
    while i < len(words):
        for seq, rep, cs in MERGE:
            span = words[i:i + len(seq)]
            # geen leesteken binnen de reeks: "string, of null" is geen `string | null`
            if [(strip if cs else norm)(w['text']) for w in span] == seq and not any(re.search(r'[,.:;?!]$', w['text']) for w in span[:-1]):
                last = words[i + len(seq) - 1]
                trail = re.search(r'[^\w]*$', last['text']).group(0)
                out.append({'text': rep + trail, 'start': words[i]['start'], 'end': last['end']})
                i += len(seq); break
        else:
            out.append(dict(words[i])); i += 1
    return out

groups = []
# uitspraak-spelling per frame terug naar de code (bv. "toe" ingesproken voor Link `to`)
FIX = {}
for f in frames:
    ws = [{'text': FIX.get((f['n'], w['text']), w['text']), 'start': round(f['start'] + w['start'], 3), 'end': round(f['start'] + w['end'], 3)} for w in merge(f['words'])]
    sents, cur = [], []
    for i, w in enumerate(ws):
        cur.append(w)
        nxt = ws[i + 1] if i + 1 < len(ws) else None
        if nxt is None or w['text'][-1] in '.?!' or (w['text'][-1] == ':' and len(cur) >= 3):
            sents.append(cur); cur = []
    for sent in sents:
        L = lambda xs: sum(len(x['text']) + 1 for x in xs)
        n = -(-L(sent) // 36)
        target = L(sent) / n
        chunks, cur = [], []
        for j, w in enumerate(sent):
            cur.append(w)
            rest = sent[j + 1:]
            if not rest: break
            if len(chunks) < n - 1 and (L(cur) >= target or (w['text'][-1] == ',' and L(cur) >= target * 0.6)) and len(rest) >= 2:
                chunks.append(cur); cur = []
        chunks.append(cur)
        for c in chunks:
            g = len(groups)
            groups.append({'id': 'caption-group-%d' % g, 'frame': f['n'], 'start': c[0]['start'], 'end': c[-1]['end'],
                           'text': ' '.join(x['text'] for x in c),
                           'words': [{'id': 'caption-word-%d-%d' % (g, j), 'text': x['text'], 'start': x['start'], 'end': x['end']} for j, x in enumerate(c)]})
json.dump({'total_duration_s': TOTAL, 'width': 1920, 'height': 1080, 'groups': groups}, open('caption_groups.json', 'w'), indent=1, ensure_ascii=False)

cap = open('../react-child-parent/compositions/captions.html').read()
cap = re.sub(r'var GROUPS = .*?;\n', lambda m: 'var GROUPS = ' + json.dumps(groups, ensure_ascii=False) + ';\n', cap, count=1)
cap = re.sub(r'var DURATION = [\d.]+;', 'var DURATION = %s;' % TOTAL, cap)
cap = re.sub(r'(id="captions-root"[^>]*data-duration=")[\d.]+"', lambda m: m.group(1) + '%s"' % TOTAL, cap)
cap = re.sub(r' data-hf-id="[^"]*"', '', cap)
open('compositions/captions.html', 'w').write(cap)

# ---- index.html ----
def trans(a, b, kind, at):
    A, B = '#el-' + a, '#el-' + b
    if kind == 'push-slide':
        return ['tl.to("%s", { x: -1920, duration: 0.5, ease: "power3.inOut" }, %s);' % (A, at),
                'tl.fromTo("%s", { x: 1920, opacity: 1 }, { x: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }, %s);' % (B, at)]
    if kind == 'blur-crossfade':
        return ['tl.to("%s", { filter: "blur(10px)", scale: 1.03, opacity: 0, duration: 0.6, ease: "power2.inOut" }, %s);' % (A, at),
                'tl.fromTo("%s", { filter: "blur(10px)", scale: 0.97, opacity: 0 }, { filter: "blur(0px)", scale: 1, opacity: 1, duration: 0.6, ease: "power2.inOut" }, %s);' % (B, at)]
    if kind == 'cut':
        return ['tl.set("%s", { opacity: 0 }, %s);' % (A, at)]
    return ['tl.to("%s", { opacity: 0, duration: 0.5, ease: "power2.inOut" }, %s);' % (A, at),
            'tl.fromTo("%s", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.inOut" }, %s);' % (B, at)]

body, js, k = [], [], 0
for i, f in enumerate(frames):
    body.append('      <div id="el-%s" class="scene" data-composition-id="%s" data-composition-src="compositions/frames/%s.html" data-start="%s" data-duration="%s" data-track-index="%d"></div>' % (f['id'], f['id'], f['id'], f['start'], f['dur'], i % 2))
    body.append('      <audio id="el-%s-voice" src="audio/vo-%02d.mp3" data-start="%s" data-duration="%s" data-track-index="10" data-volume="1"></audio>\n' % (f['id'], f['n'], f['start'], f['voice']))
    if i:
        p = frames[i - 1]
        js += trans(p['id'], f['id'], f['transition'], f['start'])
        js.append('tl.addLabel("hf:transition:%s:%s:%s", %s);' % (p['id'], f['id'], f['transition'], f['start']))
body.append('      <!-- captions -->')
body.append('      <div id="el-captions" data-track-kind="captions" class="scene" data-composition-id="captions" data-composition-src="compositions/captions.html" data-start="0" data-duration="%s" data-track-index="2"></div>\n' % TOTAL)
body.append('      <!-- SFX -->')
for f in frames:
    for s, o in f['sfx']:
        body.append('      <audio id="el-sfx-%d" src="assets/sfx/%s.mp3" data-start="%s" data-duration="%s" data-track-index="%d" data-volume="0.35"></audio>' % (k, s, round(f['start'] + o, 2), SFX_DUR[s], 20 + k)); k += 1

head = open('../react-child-parent/index.html').read().split('<body>')[0]
html = head + '''<body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="%s" data-width="1920" data-height="1080">
%s
    </div>

    <script>
      window.__timelines = window.__timelines || {};
      window.__timelines["main"] = gsap.timeline({ paused: true });
      // ── frame transitions ──
      (function () { var tl = window.__timelines["main"];
        %s
        tl.to({}, { duration: %s }, 0); // full-span anchor
      })();
    </script>
  </body>
</html>
''' % (TOTAL, '\n'.join(body), '\n        '.join(js), TOTAL)
open('index.html', 'w').write(html)

for f in frames:
    print('%02d %-16s start %7.2f  slot %5.2f  dur %5.2f  voice %5.2f' % (f['n'], f['id'], f['start'], f['slot'], f['dur'], f['voice']))
print('TOTAL', TOTAL, 'groups', len(groups))
