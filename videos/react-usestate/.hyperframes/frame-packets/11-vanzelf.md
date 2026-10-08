# Frame packet: 11-vanzelf

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 11 — De p-tag volgt vanzelf

- scene: The cursor clicks into the input and "Sam" is typed letter by letter. Each keystroke: state chip updates (`"S"`, `"Sa"`, `"Sam"`), a render tag pulses, and the p-line updates `Je typte: Sam`. Then the arrow "p-tag leest de state" from chip to p.
- voiceover: "Typ je iets, dan rendert React opnieuw, en de p-tag toont meteen je tekst. Daar moest je zelf niets voor doen: de p-tag leest gewoon de state."
- duration: 9.40s
- transition_in: crossfade
- status: outline
- src: compositions/frames/11-vanzelf.html
- type: feature_showcase
- persuasion: Live demonstration
- beat: delight

narrativeRole: Shows the payoff of state: everything that reads it updates on its own.
keyMessage: Typing → setName → re-render → the p shows the text, with no extra code.

- blueprint: compose
- focal: the scherm card: input + p updating per keystroke
- roles: scherm card (now larger, centre-right) = foreground subject · state chip = supporting · code surface (left, dimmed to 60% except line 8 `<p>…{name}</p>`) = context · render tag = rhythm · amber arrow from state chip to p = the takeaway · coral: none needed; use coral only for the mono `0 regels extra` badge (the one voltage)
- sfx: key-press

Compose: same 60/40, code dimmed.
Scene 1 (0.0–2.3s): kicker `✱ VANZELF`; code dims to 60%; on "Typ je iets" (0.0–0.4s) the cursor clicks into the input (caret appears); keystrokes S (0.5s), a (0.8s), m (1.1s): input text grows, state chip value flips per key (`"S"` → `"Sa"` → `"Sam"`), render tag pulses per key `render #2/#3/#4`.
Scene 2 (2.3–4.5s): on "de p-tag toont meteen je tekst" (2.56s / 3.83s) the p-line `Je typte: Sam` gets an amber ring; note: the p updated per key already in Scene 1 (in sync with each render), this is the emphasis.
Scene 3 (4.5–9.4s): on "zelf niets voor doen" (5.18s / 5.52s) a coral mono badge `0 regels extra` lands next to the p; on "leest gewoon de state" (7.39s / 8.31s) an amber arrow draws from the state chip to the p line, and line 8 in the code (`{name}`) gets an amber wash. Hold.
