#!/usr/bin/env python3
"""Spreekt de regels uit SCRIPT.md in met de elevenlabs CLI (sequentieel) en schrijft
audio/vo-NN.mp3 + audio/vo-NN.words.json.

Geoptimaliseerde stem-pijplijn (zelfde stem, model en instellingen als de andere filmpjes):

1. Lossless opname: de CLI levert pcm_44100; de MP3 wordt maar één keer gecodeerd.
2. Meerdere takes per regel (eleven_v4 klinkt elke keer wat anders). Per take meten we:
   - terug-transcriptie met speech-to-text (uitspraak en taal),
   - toonhoogte (mediaan F0) tegenover de referentie van de reeks,
   - tempo en pauzes (uit de karaktertimings).
   De take met de laagste strafscore wint; `--pick N=K` kiest zelf (op het gehoor).
3. `[pauze X]` in SCRIPT.md wordt niet uitgesproken: de stilte op die plek wordt verlengd tot X seconden.
4. Mastering: elke regel naar -19 LUFS (mono, = -16 LUFS bij stereo-weergave) met een limiter
   op -2 dBFS, daarna één keer naar mp3_44100_128.

De takes (FLAC + timings) en het rapport staan in audio/takes/ (niet in git).

Gebruik:  python3 tts.py [N ...]           alle of enkel de opgegeven regels (bestaande takes blijven)
          python3 tts.py --takes 5 8       meer takes voor regel 8
          python3 tts.py --pick 8=2        take 2 voor regel 8 (wordt onthouden in audio/takes/picks.json)
          python3 tts.py --redo 8          takes van regel 8 weggooien en opnieuw inspreken
"""
import array, base64, difflib, json, operator, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

VOICE, MODEL, STABILITY = '8OezxDDjGa2d9W45o5Qs', 'eleven_v4', '0.5'
TAKES = 3
SR = 44100
TARGET_LUFS = -19.0     # mono; komt overeen met -16 LUFS op twee luidsprekers
LIMIT_DB = -2.0         # limiter (sample peak); na MP3-codering blijft de true peak onder -1 dBTP
REF_F0 = 135.6          # Hz, mediaan van Andie over de 27 regels van ts-async-await en ts-promises (python3 tts.py --measure)
REF_CPS = 11.7          # karakters per seconde (zonder spaties), mediaan van dezelfde filmpjes
TAKEDIR = 'audio/takes'


# ---------- script ----------
def read_script():
    lines = {}
    for m in re.finditer(r'^## Line (\d+) .*?\n(.*?)(?=^## |\Z)', open('SCRIPT.md').read(), re.S | re.M):
        lines[int(m.group(1))] = ' '.join(l.strip() for l in m.group(2).splitlines() if l.startswith('    '))
    return lines


def split_pauses(text):
    """'a b? [pauze 1.0] c' -> ('a b? c', [(index van het woord voor de pauze, seconden)])"""
    words, pauses = [], []
    for tok in re.findall(r'\[pauze [\d.]+\]|\S+', text):
        m = re.match(r'\[pauze ([\d.]+)\]', tok)
        if m: pauses.append((len(words) - 1, float(m.group(1))))
        else: words.append(tok)
    return ' '.join(words), pauses


# ---------- audio helpers ----------
def run(cmd, **kw):
    return subprocess.run(cmd, capture_output=True, **kw)


def decode(path, sr=SR):
    x = array.array('h'); x.frombytes(run(['ffmpeg', '-v', '0', '-i', path, '-ac', '1', '-ar', str(sr), '-f', 's16le', '-']).stdout)
    return x


def loudness(args, data=None):
    """(integrated LUFS, true peak dBTP) van een bestand of van ruwe PCM op stdin."""
    err = run(['ffmpeg', '-hide_banner', '-nostats'] + args + ['-af', 'ebur128=peak=true', '-f', 'null', '-'], input=data).stderr.decode()
    s = err[err.rfind('Summary:'):]
    return float(re.search(r'I:\s+(-?[\d.]+)', s).group(1)), float(re.search(r'Peak:\s+(-?[\d.]+)', s).group(1))


RAW = ['-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', '-']


def f0_median(path):
    """Mediaan van de grondtoon (Hz) met autocorrelatie op 8 kHz; enkel stemhebbende frames."""
    sr, win, hop = 8000, 320, 240
    lo, hi = sr // 350, sr // 70
    x = decode(path, sr)
    vals = []
    for i in range(0, len(x) - win - hi, hop):
        a = x[i:i + win]
        r0 = sum(map(operator.mul, a, a))
        if r0 / win < 650 * 650: continue                  # stiller dan ongeveer -34 dBFS: geen stem
        best, lag = 0, 0
        for k in range(lo, hi):
            r = sum(map(operator.mul, a, x[i + k:i + k + win]))
            if r > best: best, lag = r, k
        if lag and best / r0 > 0.5: vals.append(sr / lag)
    vals.sort()
    return vals[len(vals) // 2] if vals else 0.0


def words_from(al):
    words, cur = [], None
    for c, s, e in zip(al['characters'], al['character_start_times_seconds'], al['character_end_times_seconds']):
        if c.isspace():
            if cur: words.append(cur); cur = None
            continue
        if cur is None: cur = {'text': '', 'start': s, 'end': e, 'vend': e}
        cur['text'] += c; cur['end'] = e
        if c.isalnum(): cur['vend'] = e      # einde van de klank: de stilte na een woord zit in het leesteken
    if cur: words.append(cur)
    return words


def norm(t):
    return re.sub(r'[^\wëéèï ]', ' ', t.lower()).split()


def timing(words):
    n = sum(len(w['text']) for w in words)
    gap = lambda a, b: round(b['start'] - a['vend'], 2)
    return dict(cps=round(n / (words[-1]['vend'] - words[0]['start']), 2), dur=round(words[-1]['end'], 2),
                sentence_pauses=[gap(a, b) for a, b in zip(words, words[1:]) if a['text'][-1] in '.?!:'],
                max_inner_gap=max([gap(a, b) for a, b in zip(words, words[1:]) if a['text'][-1] not in '.?!:,'] or [0]))


def listen(flac, text):
    """Terug-transcriptie (uitspraak, taal) en toonhoogte: traag, dus per take bewaard in report.json."""
    stt = run(['elevenlabs', 'speech-to-text', 'convert', '--model-id', 'scribe_v2', '--file', '@' + flac,
               '--language-code', 'nl', '--format', 'json'], text=True)
    heard, lang = '', ''
    if stt.returncode == 0:
        d = json.loads(stt.stdout); heard = d.get('text', ''); lang = '%s %.2f' % (d.get('language_code'), d.get('language_probability') or 0)
    expected = [w for w in norm(text) if w != 'punt']
    ratio = difflib.SequenceMatcher(None, expected, norm(heard)).ratio()
    return dict(f0=round(f0_median(flac), 1), heard=heard, lang=lang, stt_ratio=round(ratio, 3))


def penalty(m, best_ratio):
    import math
    p = (best_ratio - m['stt_ratio']) * 100                                     # verkeerd verstaan woord: zwaarst
    p += abs(12 * math.log2(m['f0'] / REF_F0)) * 2 if m['f0'] else 5            # toonhoogte weg van de reeks (halve tonen)
    p += abs(m['cps'] - REF_CPS) * 2                                            # tempo weg van de reeks
    p += sum(3 for g in m['sentence_pauses'] if g < 0.3) + sum(2 for g in m['sentence_pauses'] if g > 1.0)   # gejaagd of haperend
    p += 3 if m['max_inner_gap'] > 0.5 else 0                                   # hapering midden in een zin
    p += 0 if m['lang'].startswith('nld') else 10
    return round(p, 2)


# ---------- opnemen ----------
def record(n, k, text):
    out = run(['elevenlabs', 'text-to-speech', 'convert_with_timestamps', '--voice-id', VOICE, '--model-id', MODEL,
               '--voice-settings.stability', STABILITY, '--output-format', 'pcm_44100',
               '--text', text, '--format', 'json', '--no-extract'], text=True)
    if out.returncode: sys.exit(out.stderr or out.stdout)
    res = json.loads(out.stdout)
    base = '%s/vo-%02d-t%d' % (TAKEDIR, n, k)
    run(['ffmpeg', '-v', '0', '-y'] + RAW + [base + '.flac'], input=base64.b64decode(res['audio_base64']))
    json.dump(res['alignment'], open(base + '.json', 'w'), ensure_ascii=False)


def master(n, k, pauses):
    base = '%s/vo-%02d-t%d' % (TAKEDIR, n, k)
    words = words_from(json.load(open(base + '.json')))
    x = decode(base + '.flac')
    notes = []
    for idx, want in sorted(pauses, reverse=True):          # van achter naar voor: eerdere tijden blijven kloppen
        a, b = words[idx]['vend'], words[idx + 1]['start']
        extra = want - (b - a)
        if extra <= 0.02: notes.append('pauze na "%s" is al %.2fs' % (words[idx]['text'], b - a)); continue
        # knip op het stilste punt van de bestaande pauze (frames van 10 ms)
        fr = SR // 100
        i0, i1 = int(a * SR), max(int(b * SR) - fr, int(a * SR) + 1)
        cut = min(range(i0, i1, fr), key=lambda i: sum(map(operator.mul, x[i:i + fr], x[i:i + fr])))
        rms = (sum(map(operator.mul, x[cut:cut + fr], x[cut:cut + fr])) / fr) ** 0.5
        fade = SR // 200                                    # 5 ms uit- en infaden rond de knip
        for j in range(fade):
            g = j / fade
            x[cut - 1 - j] = int(x[cut - 1 - j] * g)
            if cut + j < len(x): x[cut + j] = int(x[cut + j] * g)
        x = x[:cut] + array.array('h', [0]) * int(extra * SR) + x[cut:]
        for w in words[idx + 1:]: w['start'] += extra; w['end'] += extra
        notes.append('pauze na "%s": %.2fs -> %.2fs (knip op %.2fs, ruis daar %.0f dBFS)' % (
            words[idx]['text'], b - a, want, cut / SR, 20 * __import__('math').log10(max(rms, 1) / 32768)))
    pcm = x.tobytes()
    mp3 = 'audio/vo-%02d.mp3' % n
    gain = TARGET_LUFS - loudness(RAW, pcm)[0]
    for _ in range(3):
        af = 'volume=%.2fdB,alimiter=limit=%.4f:attack=5:release=50:level=false' % (gain, 10 ** (LIMIT_DB / 20))
        run(['ffmpeg', '-v', '0', '-y'] + RAW + ['-af', af, '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', str(SR), '-ac', '1', mp3], input=pcm)
        I, tp = loudness(['-i', mp3])
        if abs(I - TARGET_LUFS) <= 0.15: break
        gain += TARGET_LUFS - I
    json.dump([{'id': 'w%d' % i, 'text': w['text'], 'start': round(w['start'], 3), 'end': round(w['end'], 3)} for i, w in enumerate(words)],
              open('audio/vo-%02d.words.json' % n, 'w'), indent=1, ensure_ascii=False)
    return dict(lufs=I, true_peak=tp, gain_db=round(gain, 2), dur=round(len(x) / SR, 2), notes=notes)


def main():
    args = sys.argv[1:]
    if args[:1] == ['--measure']:                           # referentie meten op bestaande vo-NN.mp3's
        for p in args[1:]:
            w = json.load(open(p.replace('.mp3', '.words.json')))
            print('%s f0 %.1f Hz  %.2f c/s' % (p, f0_median(p), sum(len(x['text']) for x in w) / (w[-1]['end'] - w[0]['start'])))
        return
    takes, redo, picks_new, todo = TAKES, False, {}, []
    i = 0
    while i < len(args):
        if args[i] == '--takes': takes = int(args[i + 1]); i += 2
        elif args[i] == '--pick': a, b = args[i + 1].split('='); picks_new[a] = int(b); i += 2
        elif args[i] == '--redo': redo = True; i += 1
        else: todo.append(int(args[i])); i += 1
    os.makedirs(TAKEDIR, exist_ok=True)
    lines = read_script()
    todo = todo or ([int(k) for k in picks_new] if picks_new else sorted(lines))
    load = lambda p, d: json.load(open(p)) if os.path.exists(p) else d
    picks = load(TAKEDIR + '/picks.json', {}); picks.update(picks_new)
    report = load(TAKEDIR + '/report.json', {})
    for n in todo:
        text, pauses = split_pauses(lines[n])
        print('line %d: %s' % (n, text), flush=True)
        if redo:
            for f in os.listdir(TAKEDIR):
                if f.startswith('vo-%02d-' % n): os.remove(os.path.join(TAKEDIR, f))
            picks.pop(str(n), None)
        old = report.get(str(n), {}).get('takes', {}) if report.get(str(n), {}).get('text') == text and not redo else {}
        ms = {}
        for k in range(1, takes + 1):
            base = '%s/vo-%02d-t%d' % (TAKEDIR, n, k)
            if not os.path.exists(base + '.flac'): record(n, k, text); old.pop(str(k), None)
            heard = {f: old[str(k)][f] for f in ('f0', 'heard', 'lang', 'stt_ratio')} if str(k) in old else listen(base + '.flac', text)
            ms[k] = dict(heard, **timing(words_from(json.load(open(base + '.json')))))
        best_ratio = max(m['stt_ratio'] for m in ms.values())
        for k, m in ms.items(): m['penalty'] = penalty(m, best_ratio)
        auto = min(ms, key=lambda k: ms[k]['penalty'])
        pick = picks.get(str(n), auto)
        for k, m in ms.items():
            print('  take %d%s  straf %5.2f | stt %.3f | f0 %5.1f Hz | %.2f c/s | zinspauzes %s | %.2fs' % (
                k, '*' if k == pick else ' ', m['penalty'], m['stt_ratio'], m['f0'], m['cps'], m['sentence_pauses'], m['dur']), flush=True)
        mst = master(n, pick, pauses)
        print('  -> take %d%s: %.1f LUFS, piek %.1f dBTP, %.2fs %s' % (pick, '' if pick == auto else ' (zelf gekozen)', mst['lufs'], mst['true_peak'], mst['dur'], '; '.join(mst['notes'])), flush=True)
        report[str(n)] = {'text': text, 'pick': pick, 'auto': auto, 'takes': {str(k): m for k, m in ms.items()}, 'master': mst}
        json.dump(report, open(TAKEDIR + '/report.json', 'w'), indent=1, ensure_ascii=False)
        json.dump(picks, open(TAKEDIR + '/picks.json', 'w'), indent=1)


main()
