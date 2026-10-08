# Frame packet: 14-samenvatting

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 14 — Samenvatting

- scene: Four takeaway rows (numbered, mono index + Inter text + a mono code token on the right): 1) state = wat je component onthoudt `useState` · 2) set-functie → React rendert opnieuw `setCount(…)` · 3) hangt af van vorige → callback `prev => prev + 1` · 4) inputveld → value én onChange `value + onChange`.
- voiceover: "Kort samengevat: state is wat je component onthoudt. Pas je het aan met de set-functie, dan rendert React opnieuw. Hangt de nieuwe waarde af van de vorige, gebruik een callback. En bij een inputveld zet je value én onChange."
- duration: 14.12s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/14-samenvatting.html
- type: cta
- persuasion: Recap list
- beat: warm close

narrativeRole: Recaps the four rules of the film in the order they were taught.
keyMessage: State remembers; setters re-render; use a callback for updates based on the previous value; inputs need value + onChange.

- blueprint: compose
- focal: the four-row recap list
- roles: headline "Kort samengevat" (EB Garamond) = top · four rows (hairline dividers, mono index `01`–`04`, Inter statement, mono code token right-aligned in a tile chip) = foreground subject · coral = the index spike of the row currently being spoken (moves row to row; only one coral at a time)
- sfx: pop

Compose: centred list, left x 160, right x 1760, rows y ≈ 300, 430, 560, 690.
Scene 1 (0.0–3.2s): kicker `✱ SAMENVATTING`; headline "Kort samengevat" settles on 0.22s; on "state is wat je component onthoudt" (0.91s / 2.29s) row 01 lands: `state is wat je component onthoudt` · chip `useState`.
Scene 2 (3.2–6.4s): on "Pas je het aan met de set-functie" (3.22s / 4.14s) row 02 lands: `de set-functie → React rendert opnieuw` · chip `setCount(…)`; coral spike moves to 02.
Scene 3 (6.4–10.0s): on "Hangt de nieuwe waarde af" (6.46s) row 03 lands: `hangt de nieuwe waarde af van de vorige? callback` · chip `prev => prev + 1`.
Scene 4 (10.0–14.12s): on "bij een inputveld" (10.52s / 10.79s) row 04 lands: `inputveld: value én onChange` · chip `value + onChange`; coral spike on 04; at 13.0s all rows settle to full ink and the coral spike stays on 04. Hold.
