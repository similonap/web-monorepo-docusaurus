# Frame packet: 08-waarom

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 8 — Waarom? count is een momentopname

- scene: A "render #1" snapshot card: inside it, `count = 0` is fixed (like a photo). The two setCount lines are evaluated in place: each `count + 1` resolves to `0 + 1` → `1`. Both calls send the same value 1 to React (two arrows into a queue that both say `1`). Then a "render #2" card appears where count = 1.
- voiceover: "Waarom? Count is de waarde van deze render. Die verandert niet zolang je functie loopt. Dus twee keer zeg je: setCount van nul plus één. Twee keer de waarde één. Pas bij de volgende render is count één."
- duration: 14.28s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-waarom.html
- type: product_intro
- persuasion: Mechanism made visible (substitution)
- beat: understanding

narrativeRole: Explains the cause: `count` is a constant snapshot inside one render; both calls compute 0 + 1.
keyMessage: Within one render, count is fixed, so both calls say "set to 1".

- blueprint: compose
- focal: the render #1 snapshot card with the two lines evaluated in place
- roles: snapshot card `render #1` (tile, left ~55%, with a mono header and a pinned `count = 0` badge) = foreground subject · the two code lines inside it, substituted step by step `setCount(count + 1)` → `setCount(0 + 1)` → `setCount(1)` = foreground · React queue (right: two small chips both `1`, then a result `count: 1`) = supporting · card `render #2` (smaller, right, appears last) = payoff · coral on the two identical `1` chips = the one voltage
- sfx: whoosh-short

Compose: left snapshot card, right column queue + render #2.
Scene 1 (0.0–2.8s): kicker `✱ WAAROM?`; on "Count is de waarde van deze render" (0.87s / 2.22s) the snapshot card settles with header `render #1` and a pinned amber badge `count = 0`; the two lines `setCount(count + 1);` sit inside in mono.
Scene 2 (2.8–5.1s): on "verandert niet" (3.08s) a small lock glyph (mono `🔒`-free: draw a simple hairline padlock) appears on the `count = 0` badge; on "zolang je functie loopt" (3.72s) a mono note `const: vast tijdens deze render` fades in under the card.
Scene 3 (5.1–10.9s): on "setCount van nul plus één" (6.93s / 7.72s) both lines morph: `count` → `0` (amber, 0.3s, staggered 0.25s) at 7.7s, then `0 + 1` → `1` at 8.6s; on "Twee keer de waarde één" (8.98s / 10.24s) right column: label `naar React` and two coral chips `setCount(1)` drop in one by one (8.98s, 9.7s), with an `=` between them.
Scene 4 (10.9–14.28s): on "volgende render" (11.66s) a second card `render #2` settles on the right below the chips, with its badge `count = 1`; on "count één" (12.77s / 13.12s) the badge pulses. Hold.
