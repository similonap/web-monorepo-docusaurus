# Frame packet: 14-samenvatting

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 14 — Samenvatting

- scene: A five-row summary: each row a mono chip on the left and an Inter phrase on the right: `loading` → spinner tonen, `try / catch` + `error` → fouten opvangen, `cancelled` → opruimen, `[trigger]` → opnieuw ophalen, `useFetch<T>` → overal hergebruiken. The last row is the payoff with a coral underline.
- voiceover: "Kort samengevat: toon een spinner met loading, vang fouten op met try catch en een error state, en ruim op met een cancelled vlag. Met een state in de dependency array haal je opnieuw op. En stop je dat allemaal in use fetch, dan hergebruik je het overal."
- duration: 16.16s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/14-samenvatting.html
- type: recap
- persuasion: Recap, ending on the hook
- beat: resolution

narrativeRole: Recaps the four building blocks and the hook that bundles them.
keyMessage: loading, error, cleanup, refetch: bundle them in useFetch and reuse everywhere.

- blueprint: compose
- focal: the summary list
- roles: statement `Kort samengevat` (EB Garamond 400 italic, 72px, x 160, y 170) = header · five rows (x 160–1760, rows at y 300, 400, 500, 600, 720; chip column x 160 w 360; phrase column x 580, Inter 36px ink) = foreground subject · the last row's phrase in EB Garamond 52px = payoff · coral = underline under `overal hergebruiken` only
- sfx: pop @1.96, pop @3.28, pop @6.44, pop @8.8, whoosh-short @12.92, pop @15.52

Compose: centred list on cream, no code surface (same as react-props frame 13).
Rows (chip → phrase):
1. `loading` → `spinner tonen`
2. `try / catch` · `error` → `fouten opvangen`
3. `cancelled` → `opruimen in de cleanup`
4. `[trigger]` → `opnieuw ophalen`
5. `useFetch<T>` → `overal hergebruiken`
Scene 1 (0.0–3.0s): kicker `✱ SAMENVATTING`; on "Kort samengevat:" (0.0s / 0.32s) the header settles in; on "spinner" (1.96s) row 1 settles in (chip then phrase, 0.12s apart), with a tiny 28px spinner ring drawn after the phrase (rotating).
Scene 2 (3.0–8.6s): on "vang fouten op" (3.28s) row 2; on "ruim op" (6.44s / 6.72s) row 3.
Scene 3 (8.6–12.0s): on "Met een state" (8.8s) row 4; on "dependency array" (9.92s / 10.4s) the chip `[trigger]` gets a brief amber wash.
Scene 4 (12.0–16.16s): on "allemaal" (12.92s) rows 1–4 dim to 55% and row 5 settles in a little larger (whoosh-short); on "use fetch," (13.52s / 13.92s) its chip gets an amber wash; on "overal." (15.52s) the coral underline draws under `overal hergebruiken` (0.4s, pop). Hold.
