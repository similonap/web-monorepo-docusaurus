#!/usr/bin/env python3
"""Spreekt de regels uit SCRIPT.md in met de elevenlabs CLI (sequentieel) en schrijft
audio/vo-NN.mp3 + audio/vo-NN.words.json. Gebruik: python3 tts.py [N ...] (standaard alle regels)."""
import base64, json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

script = open('SCRIPT.md').read()
lines = {}
for m in re.finditer(r'^## Line (\d+) .*?\n(.*?)(?=^## |\Z)', script, re.S | re.M):
    text = ' '.join(l.strip() for l in m.group(2).splitlines() if l.startswith('    '))
    lines[int(m.group(1))] = text

todo = [int(a) for a in sys.argv[1:]] or sorted(lines)
for n in todo:
    text = lines[n]
    print('line %d: %s' % (n, text), flush=True)
    out = subprocess.run(['elevenlabs', 'text-to-speech', 'convert_with_timestamps',
                          '--voice-id', '8OezxDDjGa2d9W45o5Qs', '--model-id', 'eleven_v4',
                          '--voice-settings.stability', '0.5', '--output-format', 'mp3_44100_128',
                          '--text', text, '--format', 'json'], capture_output=True, text=True)
    if out.returncode:
        sys.exit(out.stderr)
    res = json.loads(out.stdout)
    open('audio/vo-%02d.mp3' % n, 'wb').write(base64.b64decode(res['audio_base64']))
    al = res.get('normalized_alignment') if False else res['alignment']
    chars, starts, ends = al['characters'], al['character_start_times_seconds'], al['character_end_times_seconds']
    words, cur = [], None
    for c, s, e in zip(chars, starts, ends):
        if c.isspace():
            if cur: words.append(cur); cur = None
            continue
        if cur is None:
            cur = {'text': '', 'start': s, 'end': e}
        cur['text'] += c; cur['end'] = e
    if cur: words.append(cur)
    words = [{'id': 'w%d' % i, 'text': w['text'], 'start': round(w['start'], 3), 'end': round(w['end'], 3)} for i, w in enumerate(words)]
    json.dump(words, open('audio/vo-%02d.words.json' % n, 'w'), indent=1, ensure_ascii=False)
    print('  -> %d words, %.2fs' % (len(words), words[-1]['end']), flush=True)
