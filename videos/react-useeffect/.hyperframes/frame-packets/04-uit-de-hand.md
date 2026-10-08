# Frame packet: 04-uit-de-hand

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 4 — Het loopt uit de hand

- scene: Exponential blow-up. A big counter "actieve timers" doubles on the spoken numbers: 1 → 2 → 4 → 8 → 16, then rushes to 1024. Next to it a grid of 32×32 tiny timer dots fills in doubling batches. The "teller" value races. On "browser loopt vast" the whole stage freezes and a coral stamp `VASTGELOPEN` lands.
- voiceover: "En elke timer veroorzaakt weer een render, en elke render weer een nieuwe timer. Twee, vier, acht, zestien… Na tien seconden lopen er meer dan duizend timers. Je teller schiet weg, en je browser loopt vast."
- duration: 18.56s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-uit-de-hand.html
- type: pain_point
- persuasion: Escalation + concrete number
- beat: tension → crash

narrativeRole: Shows the consequence in numbers: timers double every second until the browser hangs.
keyMessage: Without an effect, timers double every tick: 2, 4, 8 … 1024.

- blueprint: compose
- focal: the number-hero counter `actieve timers` (EB Garamond, very large)
- roles: number-hero counter + mono unit `timers` = foreground subject (left half) · 32×32 dot grid (1024 small tile dots, ink@15% → ink when active) = foreground secondary (right half) · small loop glyph `timer → render → timer` (mono, top) = supporting · `teller` readout (mono, small, under the counter) = supporting · coral stamp `VASTGELOPEN` = the one voltage
- sfx: none

Compose: split left/right; the grid is the visual weight.
Scene 1 (0.0–5.8s): kicker `✱ UIT DE HAND`; on "elke timer veroorzaakt weer een render" (0.34s) the mono loop line `timer → render → nieuwe timer` builds per word (tokens appear on 0.72s, 2.54s, 5.0s); counter shows `2` and 2 grid dots are lit from the start (continuity: 2 timers). `teller: 1`.
Scene 2 (5.8–10.2s): on "Twee" (6.34s) counter = 2 (pulse); "vier" (7.22s) → 4 dots lit, counter 4; "acht" (8.08s) → 8; "zestien" (8.96s) → 16 — each step the newly lit dots light as a batch (stagger 0.01s), teller readout updates 3, 7, 15, 31.
Scene 3 (10.2–13.9s): on "Na tien seconden" (10.38s) the counter rolls fast 32 → 64 → 128 → 256 → 512 → 1024 (each 0.3s), grid fills in doubling batches until all 1024 are lit at ~12.4s ("duizend"); counter lands on `1024` and holds; mono unit `timers` beside it.
Scene 4 (13.9–15.9s): on "Je teller schiet weg" (13.96s) the teller readout spins up through big numbers (deterministic: 2047, 65535, 1048575, 16777215 …) getting faster.
Scene 5 (15.9–18.56s): on "browser loopt vast" (15.96s) everything freezes at once: stage dims to 60%, grid desaturates, and at 16.9s ("vast") the coral stamp `VASTGELOPEN` lands centred (scale 1.25→1, 0.3s, slight -4° rotation, rough coral border like the FOUT stamp in react-array-state frame 2). Hold still.
