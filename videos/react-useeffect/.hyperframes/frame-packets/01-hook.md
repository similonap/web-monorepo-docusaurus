# Frame packet: 01-hook

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 1 — Een teller die vastloopt

- scene: A tiny app card with a big counter that ticks 0 → 1 → 2 → 3 once per second. "Klinkt simpel" — calm. On "één verkeerde regel" one code line `setInterval(…)` slides in under the card with a coral underline. On "loopt je hele pagina vast" the counter races to absurd numbers and the card freezes: dims, and a coral mono chip `pagina reageert niet` lands.
- voiceover: "Een teller die elke seconde één omhoog gaat. Klinkt simpel. Maar met één verkeerde regel… loopt je hele pagina vast."
- duration: 9.68s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Curiosity + demonstration
- beat: calm → alarm

narrativeRole: Opens on a harmless-looking counter and promises that one wrong line breaks the whole page.
keyMessage: A simple timer can take down your page.

- blueprint: compose
- focal: the counter card (EB Garamond number-hero numeral inside a hairline tile card)
- roles: counter card = foreground subject (centred, ~40% of frame) · the code line `setInterval(() => …, 1000)` in a small navy code strip = supporting · coral underline + coral chip `pagina reageert niet` = the one voltage
- sfx: click-soft

Compose: locked static stage, centred card.
Scene 1 (0.0–1.0s): cream ground + faint hairline grid; the counter card settles in centred (power3.out); label `teller` (mono-label) above the numeral `0`.
Scene 2 (1.0–4.6s): on "elke seconde" (1.26s) the numeral steps 0→1 at 1.3s, 2 at 2.3s, 3 at 3.3s, 4 at 4.3s (each step: old digit slides up/out, new slides in, 0.25s); a tiny mono `+1` floats up on each step. "Klinkt simpel" (3.6s) — nothing else, keep it calm.
Scene 3 (4.6–6.9s): on "één verkeerde regel" (5.44s) a small navy code strip slides up beneath the card with `setInterval(() => setNumber(n => n + 1), 1000);` typed on fast; a coral underline draws under it at 6.2s.
Scene 4 (6.9–9.68s): on "loopt" (6.96s) the numeral accelerates: 5, 7, 12, 31, 96, 511, 2047, 16383… (deterministic sequence, steps get faster) ; on "vast" (8.26s) everything stops: card dims to 55% with a slight desaturate, and the coral chip `pagina reageert niet` lands top-right of the card (scale 1.15→1, 0.3s). Hold still.
