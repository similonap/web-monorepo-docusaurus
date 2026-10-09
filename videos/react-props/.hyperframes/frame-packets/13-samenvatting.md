# Frame packet: 13-samenvatting

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 13 — Samenvatting

- scene: Four takeaway rows (mono index + Inter statement + mono code chip right): 01 herhaal je code? maak er een component van `<Badge />` · 02 props geven data door `label="Nieuw"` · 03 een eigen type beperkt wat mag `'red' | 'green' | 'blue'` · 04 een standaardwaarde maakt een prop optioneel `color = 'green'`.
- voiceover: "Kort samengevat: herhaal je code, maak er een component van. Met props geef je data door, zodat je die component kan hergebruiken. Met een eigen type beperk je wat mag, en met een standaardwaarde mag een prop wegblijven."
- duration: 15.88s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/13-samenvatting.html
- type: cta
- persuasion: Recap list
- beat: warm close

narrativeRole: Recaps the four steps of the film in the order they were taught.
keyMessage: Component against repetition; props to pass data; a type to restrict; a default to make a prop optional.

- blueprint: compose
- focal: the four-row recap list
- roles: headline "Kort samengevat" (EB Garamond) = top · four rows (hairline dividers, mono index `01`–`04`, Inter statement ~34px, mono code token right-aligned in a tile chip) = foreground subject · coral = the index spike of the row currently being spoken (moves row to row; only one coral at a time)
- sfx: pop @1.44, pop @4.6, pop @8.88, pop @11.48

Compose: copy the layout of `../react-usestate/compositions/frames/14-samenvatting.html`: centred list, left x 160, right x 1760, rows y ≈ 300, 430, 560, 690.
Scene 1 (0.0–4.5s): kicker `✱ SAMENVATTING`; headline "Kort samengevat" settles at 0.2s; on "herhaal je code" (1.44s) row 01 lands: `herhaal je code? maak er een component van` · chip `<Badge />`.
Scene 2 (4.5–8.8s): on "Met props" (4.6s / 4.92s) row 02 lands: `props geven data door aan een component` · chip `label="Nieuw"`; coral spike moves to 02.
Scene 3 (8.8–11.4s): on "eigen type" (9.24s / 9.6s) row 03 lands: `een eigen type beperkt wat mag` · chip `'red' | 'green' | 'blue'`.
Scene 4 (11.4–15.88s): on "standaardwaarde" (12.16s) row 04 lands: `een standaardwaarde: de prop mag wegblijven` · chip `color = 'green'`; coral spike on 04; at 14.2s all rows settle to full ink. Hold.
