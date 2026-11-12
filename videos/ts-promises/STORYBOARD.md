---
format: 1920x1080
duration: 130s
mode: autonomous
message: "Een promise is een waarde die pas later beschikbaar is. Je maakt er een met new Promise, vervult ze met resolve of laat ze mislukken met reject; met then gebruik je de waarde en met catch vang je de fout op."
arc: how-to-process
audience: "Studenten webontwikkeling die TypeScript basics kennen en met asynchroon programmeren in Node.js beginnen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series and style as `../react-usefetch`, `../react-router-params` (TS light). Follow the "Video's" section of the repo `CLAUDE.md` and `frame.md`. Reference frame: `../react-usefetch/compositions/frames/02-fetch.html`: copy its whole `<style>` block (font-faces, `:root` `--ts-*` tokens and every `ts-*` rule) **verbatim**, then the **PROMISE CLIP** block below verbatim, then the frame's own `#fNNx-*` rules. Copy its `typeLine` / `washOn` / `washOff` helpers and its structure (white `ts-bg` clip on track 0, `ts-stage` clip on track 1, one paused GSAP timeline registered on `window.__timelines["<composition-id>"]`, `tl.set({}, {}, DUR)` at the end, `DUR` = the frame duration below). For a recap frame look at `../react-router-params/compositions/frames/14-samenvatting.html`; for a hook at `../react-router-params/compositions/frames/01-hook.html`.
- **Course page:** `docs/nodejs-+-typescript/asynchroon-programmeren/promises.md`. Node.js program, no browser: the right column shows a **console card** (program output) instead of the `scherm` card, plus a **promise state chip**.
- **Ground** white. **Colour roles** as frame.md: ink `#1E293B`, `#475569`, `#94A3B8`; panels `#F1F5F9`, hairlines `#E2E8F0`; one accent TS blue `#3178C6` (dark `#235A97`, tint `#EAF2FB`, wash `rgba(49,120,198,0.12)`). Red `#D14343` only thin and sparing for what goes wrong (rejected state, error output); never a red and a blue key moment at the same instant.
- **Type:** Inter for all non-code text, JetBrains Mono for code, chips and console output. Readable text ≥ 27px except mono chips / console / timestamps (20-24px).
- **Kicker** at (80, 84), in at t ≈ 0.1-0.2 (bar grows 0.35s, text 0.4s).
- **Code surface** left: x 80, top 170, width 1060, height ≤ 720 (bottom ≤ 890), file name `index.ts` in the title bar, status bar text given per frame. JetBrains Mono 26px / 38px rows (`.ts-code` as in 02-fetch). **Frames 6-9 (the long `multiply` signature) use 24px / 36px rows and a panel width of 1120 (x 80-1200); their right column starts at x 1260.** Type-on with a stepping caret (`typeLine`, ~0.03s/char unless the frame says otherwise). Highlight = blue wash; key part = `ts-mark` (2px blue box radius 6); wrong part = `ts-mark--wrong`. "Present" rows are visible at t = 0 without animation. A row change "swap" = old text slides up 10px and fades (0.25s), new text comes in from 10px below (0.25s power2.out). Line numbers keep the `ts-ln` class.
- **Code style (course TypeScript):** 4-space indent, `new Promise<number>((resolve, reject) => {`, `setTimeout(() => {`, `}, 1000);`, double-quoted strings, semicolons. Syntax classes: `ts-kw` (`const function return new if else import from`), `ts-str` strings, `ts-fn` function names / numbers (`multiply`, `setTimeout`, `then`, `catch`, `log`, `readFile`, `2`, `1000`), `ts-type` types (`Promise`, `number`, `string`, `Error`), `ts-punct` for `( ) { } [ ] < > => ; , .`. Comments none.
- **Right column** x 1236-1840 (1260-1840 in frames 6-9). Nothing below y 880.
- **Motion:** calm `power3.out` settles, small offsets (8-20px), no bounce / overshoot / elastic, holds stand still (a spinner may rotate). Every reveal on the spoken word that names it (times below = seconds from the frame start = voice start). Never show something before the voice names it. The frame itself does not fade out (the root crossfades). No sfx inside frames (`sfx:` lines are read by `build.py`).
- **Negative list:** no logos, decorative shapes, coloured blocks behind text, gradients, glow, heavy shadows, dark code surfaces, serif fonts, real terminal / browser / VS Code chrome, icons or emoji (draw arrows and ticks with CSS borders), em-dashes in visible text, `Math.random` / `Date.now`, breathing / drift / camera push.

### PROMISE CLIP block (copy verbatim after the TS LIGHT block)

```css
    /* ---- PROMISE CLIP: shared helpers of the promise videos ---- */
    /* console card: program output (Node), same place and look as the scherm card */
    .pc-console { position: absolute; box-sizing: border-box; background: var(--ts-ground); border: 1px solid var(--ts-hairline); border-radius: 12px; box-shadow: var(--ts-shadow); padding: 18px 26px; overflow: hidden; }
    .pc-out { position: relative; height: 44px; display: flex; align-items: center; font-family: var(--ts-mono); font-size: 24px; font-weight: 400; color: var(--ts-ink); white-space: nowrap; opacity: 0; }
    .pc-out::before { content: ">"; color: var(--ts-muted); margin-right: 16px; }
    .pc-out--error { border-left: 4px solid var(--ts-error); padding-left: 14px; }
    .pc-out--error::before { content: none; }
    .pc-out--old { color: var(--ts-muted); }
    .pc-stamp { margin-left: auto; padding-left: 20px; font-family: var(--ts-mono); font-size: 18px; color: var(--ts-muted); }
    /* promise state chip: key PROMISE + value (pending / fulfilled / rejected) */
    .pc-state .pc-val { display: inline-block; }
    .pc-val--pending { color: var(--ts-ink-soft); }
    .pc-val--fulfilled { color: var(--ts-blue-dark); }
    .pc-val--rejected { color: var(--ts-error); }
    /* small note next to a chip / under a card */
    .pc-note { position: absolute; font-family: var(--ts-sans); font-weight: 500; font-size: 27px; line-height: 1.3; color: var(--ts-ink-soft); white-space: nowrap; opacity: 0; }
    /* timeline: one row per promise (label | track with a bar), axis below */
    .pc-tl { position: absolute; }
    .pc-tl-row { position: relative; height: 56px; }
    .pc-tl-label { position: absolute; left: 0; top: 0; height: 56px; display: flex; align-items: center; font-family: var(--ts-mono); font-size: 22px; color: var(--ts-ink); white-space: nowrap; }
    .pc-tl-track { position: absolute; top: 10px; height: 36px; right: 0; background: var(--ts-panel); border-radius: 8px; }
    .pc-bar { position: absolute; top: 0; bottom: 0; left: 0; box-sizing: border-box; border: 2px solid var(--ts-blue); border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; opacity: 0; }
    .pc-fill { position: absolute; left: 0; top: 0; bottom: 0; width: 100%; background: var(--ts-wash); transform-origin: left center; transform: scaleX(0); }
    .pc-bar-text { position: relative; font-family: var(--ts-mono); font-size: 20px; font-weight: 500; color: var(--ts-blue-dark); white-space: nowrap; opacity: 0; }
    .pc-bar--error { border-color: var(--ts-error); }
    .pc-bar--error .pc-fill { background: rgba(209, 67, 67, 0.10); }
    .pc-bar--error .pc-bar-text { color: var(--ts-error); }
    .pc-bar--ghost { border-style: dashed; border-color: var(--ts-muted); }
    .pc-bar--ghost .pc-fill { background: transparent; }
    .pc-now { position: absolute; top: -6px; bottom: -6px; width: 2px; margin-left: -1px; background: var(--ts-blue); opacity: 0; }
    .pc-axis { position: relative; height: 28px; }
    .pc-tick { position: absolute; top: 4px; font-family: var(--ts-mono); font-size: 18px; color: var(--ts-muted); transform: translateX(-50%); white-space: nowrap; }
    .pc-clock { position: absolute; font-family: var(--ts-mono); font-size: 30px; font-weight: 500; color: var(--ts-blue-dark); white-space: nowrap; }
    /* bracket over a span of the axis: thin muted line with end ticks + label above */
    .pc-bracket { position: absolute; height: 12px; box-sizing: border-box; border: 2px solid var(--ts-muted); border-bottom: none; border-radius: 4px 4px 0 0; opacity: 0; }
    .pc-bracket-label { position: absolute; left: 50%; bottom: 18px; transform: translateX(-50%); font-family: var(--ts-mono); font-size: 22px; color: var(--ts-ink-soft); white-space: nowrap; }
    /* arrow: a line (2px muted) with a small solid head drawn with borders */
    .pc-arrow { position: absolute; height: 2px; background: var(--ts-muted); transform-origin: left center; }
    .pc-arrow::after { content: ""; position: absolute; right: -2px; top: -6px; border-left: 12px solid var(--ts-muted); border-top: 7px solid transparent; border-bottom: 7px solid transparent; }
```

- **Console card:** label `console` (`.ts-label`) at (1236, 186), card `.pc-console` at x 1236, top 232, width 604, height per frame (default 230). Output lines `.pc-out` (44px apart), each optionally with a timestamp `.pc-stamp` (`0,0 s`, `1,0 s`) at the right. A line appears: opacity 0 → 1 and x −8 → 0 (0.3s power3.out). Error output adds `.pc-out--error`.
- **Promise state chip:** `.ts-chip.pc-state` with a `.ts-chip-key` `promise` and a `.pc-val` value. `pending` (class `pc-val--pending`), `fulfilled` (`pc-val--fulfilled`, the chip also gets the `ts-chip--new` look: tween background to `#EAF2FB` and border to `#3178C6`), `rejected` (`pc-val--rejected`, border tween to 2px `#D14343`). Value change = swap (old up/out, new in from below, 0.25s).
- **The "1 second" of a timer** is shown compressed where the frame says so (e.g. a fill over 0.8s); timestamps in the console show the real program time (`0,0 s`, `1,0 s`).

## Frame 1 — Hook: een belofte

- id: 01-hook
- duration: 13.35s
- transition_in: cut
- sfx: pop@0.32, pop@2.08, whoosh-short@2.2, pop@8.24, whoosh-short@9.0, pop@11.84
- voiceover: "Je programma vraagt data op aan een server. Dat duurt even, en je wil niet dat alles stilvalt tot het antwoord er is. Daarom krijg je meteen een promise terug: een belofte dat de waarde later komt."
- focal: a program asking a server for data and getting a promise back at once; then the hero word `Promise`.
- layout: two cards in the upper half: card A `programma` (label above it, `.ts-label`) at x 300, top 230, 520 × 220; card B `server` at x 1100, top 230, 520 × 220. Request arrow `.pc-arrow` from A's right edge (x 820, y 310) to B's left edge (x 1100). Answer arrow (y 390) from B back to A (pointing left: rotate 180°). Hero `Promise` (`.ts-hero`, 168px) at left 300, top 560; hero bar under it; statement right of the hero at left 1000, top 600 (`.ts-statement` 48px, `#475569`, two lines: `een belofte:` / `de waarde komt later`).
- card A content: mono 26px `fetch(url)` at its top-left (padding 28). Card B content: a `.ts-spinner` centred.
- shots:
  - 0.0-2.0: kicker `Promises` (0.1). "programma" (0.32): card A + its label fade up (y 16 → 0, 0.5s).
  - 2.0-5.1: "server" (2.08): card B + label fade up; the request arrow draws in (scaleX 0 → 1, 0.45s from 2.2). "duurt even" (2.96): the spinner appears in B and rotates steadily until 11.44.
  - 5.1-8.2: "stilvalt" (5.20): inside card A, under `fetch(url)`, a chip `wachten...` (`.ts-chip`, 22px) fades in; at "antwoord" (6.20) it gets the struck look (`ts-chip--struck`: line-through, opacity 0.35): your program does not stand still.
  - 8.2-10.1: "meteen" (8.24): the struck chip fades out and in its place a chip `.pc-state` pops in (scale 0.96 → 1, 0.3s): key `promise`, value `pending`. "promise" (9.00): hero `Promise` lands (opacity, y 24 → 0, 0.6s); the hero bar wipes in at 9.3.
  - 10.1-end: "belofte" (10.16): statement line 1 fades up; "later" (11.44) line 2 fades up. "later" (11.44): the spinner fades out, the answer arrow draws from B to A (0.45s); "komt" (11.84): the state chip value swaps to `fulfilled` (blue look). Hold.

## Frame 2 — Aanmaken met new Promise

- id: 02-aanmaken
- duration: 13.19s
- transition_in: blur-crossfade
- sfx: typing@1.6, typing@3.44, pop@5.92, pop@6.72, whoosh-short@8.16, pop@11.52
- voiceover: "Een promise maak je met new Promise. Je geeft een functie mee met twee parameters: resolve en reject. Tussen de punthaken zet je het type van de waarde. Hier is dat een number."
- focal: `new Promise<number>((resolve, reject) => { ... })`.
- code (status `index.ts · new Promise`), final:
  ```
  1  const promise = new Promise<number>((resolve, reject) => {
  2
  3  });
  ```
  Row 1 is built in three steps (keep two layers of row 1 and fade-swap between them):
  - step A (typed 1.60-2.40): `const promise = new Promise(`
  - step B (typed 3.44-4.30, continues the same row): `(resolve, reject) => {` and row 3 `});` types right after (4.3-4.5). Row 1 now reads `const promise = new Promise((resolve, reject) => {`.
  - step C (8.16): row 1 swaps to the final text with `<number>` (the new `<number>` gets a wash on arrival).
- right column: chips at x 1236: `resolve` chip (mono, key label `functie`) at top 260; `reject` chip at top 340; a type chip (key `type`, value `number`) at top 470.
- shots:
  - 0.0-1.5: kicker `Aanmaken`, code panel present (empty rows, line numbers 1-3).
  - 1.6-2.8: "new Promise" (1.60-1.92): step A types; wash on `new Promise` at 2.0 (off 2.8).
  - 2.8-7.6: "functie" (3.44): step B types. "resolve" (5.92): wash on `resolve` + the `resolve` chip pops in. "reject" (6.72): wash on `reject` + the `reject` chip pops in. Washes off at 7.5.
  - 7.6-end: "punthaken" (8.16): step C swap; wash on `<number>`. "type" (9.40): `ts-mark` around `<number>`. "number" (11.52): the type chip pops in (value `number` in TS blue). Hold.

## Frame 3 — Resolve na een seconde

- id: 03-resolve
- duration: 12.71s
- transition_in: crossfade
- sfx: typing@0.15, pop@1.8, typing@3.68, pop@7.12, pop@9.6, pop@11.2
- voiceover: "Met set timeout wachten we één seconde. Daarna roepen we resolve op met twee maal twee. Tot dan is de promise pending. Vanaf dat moment is ze fulfilled, met de waarde vier."
- focal: `resolve(2 * 2)` after one second; the state chip goes from pending to fulfilled.
- code (status `index.ts · resolve`), rows 1 and 5 present:
  ```
  1  const promise = new Promise<number>((resolve, reject) => {
  2      setTimeout(() => {
  3          resolve(2 * 2);
  4      }, 1000);
  5  });
  ```
  At t = 0 rows 2-4 are empty (row 5 sits at row 5 already).
- right column: a timer chip at x 1236, top 260: `.ts-chip` with key `setTimeout`, value `1000 ms`, and under it (top 330) a thin progress track (604 × 8, `#F1F5F9`, radius 4) with a blue fill (scaleX 0 → 1). The state chip `.pc-state` at top 420. A value chip (key `waarde`, value `4` in `#9A5B13`) at top 500.
- shots:
  - 0.0-2.3: kicker `Resolve`. "set timeout" (0.11): rows 2 and 4 type (0.15-1.3, `setTimeout(() => {` then `}, 1000);`). "één seconde" (1.80): wash on `1000` + the timer chip pops in with its empty track.
  - 2.3-6.3: "resolve" (3.68): row 3 types `resolve(2 * 2);` (3.68-4.2). "twee maal twee" (4.88): wash on `2 * 2` (off 6.2).
  - 6.3-9.5: "promise" (7.12): the state chip pops in with value `pending`. "pending" (7.60): the timer track fills over 1.8s (7.6-9.4, linear).
  - 9.5-end: "fulfilled" (9.60): wash on row 3; the state chip swaps to `fulfilled` (blue look). "vier" (11.20): the value chip pops in. Hold.

## Frame 4 — De waarde gebruiken met then

- id: 04-then
- duration: 13.27s
- transition_in: push-slide
- sfx: typing@2.24, pop@6.84, pop@7.0, pop@9.28
- voiceover: "Om die waarde te gebruiken, roep je then op. De functie die je meegeeft, wordt pas uitgevoerd als de promise klaar is. Result is dan een number: het type dat je bij het aanmaken opgaf."
- focal: `promise.then((result: number) => { console.log(result); })` and the `4` in the console.
- code (status `index.ts · then`), rows 1-5 present (as the end of frame 3), rows 7-9 typed:
  ```
  1  const promise = new Promise<number>((resolve, reject) => {
  2      setTimeout(() => {
  3          resolve(2 * 2);
  4      }, 1000);
  5  });
  6
  7  promise.then((result: number) => {
  8      console.log(result);
  9  });
  ```
- right column: console card (label at 186, card top 232, height 150, one output line); the state chip `.pc-state` at x 1236, top 430, present at t = 0 with value `pending`.
- shots:
  - 0.0-3.4: kicker `Then`. "then" (2.24): rows 7-9 type (2.24-3.5); wash on `then` at 2.4 (off 3.3).
  - 3.4-7.9: "functie" (3.68): wash on `(result: number) => {` and row 8 (off 7.3). "klaar" (6.84): the state chip swaps to `fulfilled`. 7.00: console line `4` with stamp `1,0 s` appears.
  - 7.9-end: "Result" (8.00): wash on both `result`s (rows 7 and 8). "number" (9.28): `ts-mark` around `number` in row 7. "aanmaken" (11.12): wash on `<number>` in row 1 (the link between the two). Hold.

## Frame 5 — Je programma wacht niet

- id: 05-asynchroon
- duration: 12.39s
- transition_in: crossfade
- sfx: typing@2.4, pop@5.48, pop@10.36
- voiceover: "Let op de volgorde. Zet je een console log onder de then, dan verschijnt die tekst eerst. Je programma wacht niet op de promise. De then komt pas een seconde later aan de beurt."
- focal: the console order: `Na de then` first, `4` one second later.
- code (status `index.ts · volgorde`), rows 1-9 present (as the end of frame 4), row 11 typed:
  ```
  11 console.log("Na de then");
  ```
- right column: console card (label 186, card top 232, height 194, two output lines); state chip at x 1236, top 470, value `pending` (present).
- shots:
  - 0.0-2.3: kicker `Asynchroon`. "volgorde" (0.56): nothing moves (hold, code readable).
  - 2.3-5.4: "console log" (2.40): row 11 types (2.4-3.3). "onder de then" (3.04-3.52): wash on row 11 and on the `then` of row 7 (off 5.3).
  - 5.4-9.6: "eerst" (5.48): console line 1 `Na de then` with stamp `0,0 s`. "wacht niet" (6.84): wash on row 11 again (it ran right away; off 8.4). "promise" (7.92): the state chip gets a thin blue `ts-mark` (still `pending`; the mark goes at 9.4).
  - 9.6-end: "later" (10.36): console line 2 `4` with stamp `1,0 s`; the state chip swaps to `fulfilled`; wash on rows 7-9 (off 11.8). Hold.

## Frame 6 — Promise als return type

- id: 06-return-type
- duration: 11.99s
- transition_in: blur-crossfade
- sfx: whoosh-short@3.04, typing@3.1, pop@9.52
- voiceover: "Meestal maak je zelf geen promise, maar roep je een functie op die er een teruggeeft. Multiply vermenigvuldigt twee getallen en heeft als return type Promise van number."
- focal: `function multiply(number1: number, number2: number): Promise<number> {`.
- code (24px / 36px, panel x 80, width 1120; status `index.ts · multiply`), final:
  ```
  1  function multiply(number1: number, number2: number): Promise<number> {
  2      return new Promise<number>((resolve, reject) => {
  3          setTimeout(() => {
  4              resolve(number1 * number2);
  5          }, 1000);
  6      });
  7  };
  ```
  Start state (t = 0): the promise of the previous frames sits on rows 2-6 at its old indentation: row 2 `const promise = new Promise<number>((resolve, reject) => {`, row 3 `    setTimeout(() => {`, row 4 `        resolve(2 * 2);`, row 5 `    }, 1000);`, row 6 `});`; rows 1 and 7 empty.
- right column (x 1260): a return-type chip (key `return type`, value `Promise<number>` with `Promise` and `number` in TS blue) at top 260.
- shots:
  - 0.0-3.0: kicker `Return type`. "geen promise" (1.24-1.68): nothing new; the promise code is readable.
  - 3.0-5.3: "functie" (3.04): rows 2-6 swap to their final text (indented one level, `return new Promise`, `resolve(2 * 2)` stays for now) and rows 1 and 7 type in (3.1-4.6, row 1 at 0.02s/char). "teruggeeft" (4.16): wash on `return` in row 2 (off 5.2).
  - 5.3-8.7: "Multiply" (5.36): wash on `multiply(number1: number, number2: number)` (off 8.6). "twee getallen" (7.12-7.36): row 4 swaps `resolve(2 * 2);` → `resolve(number1 * number2);`.
  - 8.7-end: "return type" (8.76): wash on `: Promise<number>`. "Promise van number" (9.52): `ts-mark` around `Promise<number>` in row 1 + the return-type chip pops in. Hold.

## Frame 7 — Meteen loggen: pending

- id: 07-pending
- duration: 11.03s
- transition_in: crossfade
- sfx: typing@0.05, pop@2.48, pop@4.68, typing@6.4, pop@7.0, whoosh-short@8.64
- voiceover: "Log je het resultaat meteen, dan zie je Promise pending: de waarde is er nog niet. Gebruik dus then. Dat kan ook rechtstreeks op de aanroep van multiply."
- focal: `Promise { <pending> }` in the console, then `multiply(2, 2).then(...)`.
- code (24px / 36px, panel x 80 width 1120; status `index.ts · multiply`): row 1 present, folded: `function multiply(number1: number, number2: number): Promise<number> { ⋯ }` (`⋯` in `ts-fold`). Rows from 3:
  - version A (typed 0.05-1.0):
    ```
    3  const result = multiply(2, 2);
    4  console.log(result);
    ```
  - version B (at "then" 6.40: row 4 swaps, rows 5-6 type 6.5-7.2):
    ```
    3  const result = multiply(2, 2);
    4  result.then((result) => {
    5      console.log(result);
    6  });
    ```
  - version C (at "aanroep" 8.64: rows 3-6 cross-fade, 0.35s, to):
    ```
    3  multiply(2, 2).then((result) => {
    4      console.log(result);
    5  });
    ```
- right column (x 1260, width 580): console card (label 186, card top 232, height 150); a note `.pc-note` `de waarde is er nog niet` at top 410.
- shots:
  - 0.0-2.4: kicker `Pending`. Version A types (0.05-1.0). "meteen" (1.04): wash on row 4 (off 2.3).
  - 2.4-5.4: "Promise pending" (2.48): console line `Promise { <pending> }` (no stamp). "nog niet" (4.68): the note fades up.
  - 5.4-8.5: "then" (6.40): version B; the console line gets `.pc-out--old` (muted) and the note fades out; 7.00: a second console line `4` with stamp `1,0 s`.
  - 8.5-end: "aanroep" (8.64): version C; wash on `multiply(2, 2).then` (row 3). "multiply" (9.28): `ts-mark` around `multiply(2, 2)`. Hold.

## Frame 8 — Reject met een error

- id: 08-reject
- duration: 9.03s
- transition_in: push-slide
- sfx: typing@2.0, typing@4.24, pop@7.52
- voiceover: "Loopt er iets mis, dan roep je reject op, met een error. Hier geven we een fout als het resultaat groter is dan tien."
- focal: `reject(new Error("Result is greater than 10"))` inside `if (number1 * number2 > 10)`.
- code (24px / 36px, panel x 80 width 1120; status `index.ts · reject`), final:
  ```
  1  function multiply(number1: number, number2: number): Promise<number> {
  2      return new Promise<number>((resolve, reject) => {
  3          setTimeout(() => {
  4              if (number1 * number2 > 10) {
  5                  reject(new Error("Result is greater than 10"));
  6              } else {
  7                  resolve(number1 * number2);
  8              }
  9          }, 1000);
  10     });
  11 };
  ```
  Start state: the 7-row version of frame 6 (resolve on row 4 at 12 spaces). At 1.28 ("dan roep je") rows 5-11 slide into their final rows (resolve moves to row 7 at 16 spaces, `}, 1000);` etc. move down; 0.4s power3.inOut); rows 4, 5, 6, 8 are empty then.
- right column (x 1260): a chip (key `reject`, value `Error`, `Error` in TS blue) at top 260, a chip (key `fout als`, value `> 10`) at top 340.
- shots:
  - 0.0-1.9: kicker `Reject`. "mis" (0.64): nothing yet; hold.
  - 1.9-4.2: 1.28: the rows open (see above). "reject" (2.00): row 5 types `reject(new Error("Result is greater than 10"));` (2.0-3.3, 0.02s/char); wash on `reject` at 2.1. "error" (3.36): wash on `new Error(...)` + the reject chip pops in (washes off 4.1).
  - 4.2-end: "Hier" (4.24): rows 4, 6, 8 type (`if (number1 * number2 > 10) {`, `} else {`, `}`; 4.24-5.4). "groter dan tien" (6.48-7.52): wash on `number1 * number2 > 10`; "tien" (7.52): `ts-mark` around `> 10` + the second chip pops in. Hold.

## Frame 9 — Catch vangt de fout op

- id: 09-catch
- duration: 12.47s
- transition_in: crossfade
- sfx: pop@0.4, typing@3.28, pop@9.52
- voiceover: "Bij een reject wordt then overgeslagen. Met catch vang je de fout op en lees je de boodschap. Multiply van vier en tien geeft dus: result is greater than ten."
- focal: `.catch((error) => console.log(error.message))` and the error line in the console.
- code (24px / 36px, panel x 80 width 1120; status `index.ts · catch`): row 1 folded as in frame 7. Rows 3-4 present, row 5 typed:
  ```
  3  multiply(4, 10)
  4      .then((result) => console.log(result))
  5      .catch((error) => console.log(error.message));
  ```
- right column (x 1260, width 580): console card (label 186, card top 232, height 150); the state chip `.pc-state` at top 420.
- shots:
  - 0.0-3.0: kicker `Catch`. "reject" (0.40): the state chip pops in with value `rejected` (red look). "then overgeslagen" (1.36-1.84): row 4 gets the struck look (opacity 0.35 + a 2px `#94A3B8` line through the text, drawn with scaleX 0 → 1 from 1.84, 0.35s).
  - 3.0-6.5: "catch" (3.28): row 5 types (3.28-4.5). "fout" (4.32): wash on `(error)` (off 5.4). "boodschap" (5.52): wash on `error.message` (off 6.4).
  - 6.5-end: "Multiply van vier en tien" (6.56-8.16): wash on `multiply(4, 10)` (off 9.3). "result is greater than ten" (9.52): console line `Result is greater than 10` with `.pc-out--error` and stamp `1,0 s`. Hold.

## Frame 10 — Ingebouwde promises

- id: 10-ingebouwd
- duration: 12.15s
- transition_in: blur-crossfade
- sfx: typing@3.52, typing@6.64, pop@7.16, pop@7.6, pop@9.2, typing@9.84, pop@10.68
- voiceover: "Node zelf heeft ook functies die een promise teruggeven. Read file uit fs slash promises leest een bestand in. Bestaat het bestand niet, dan kom je in de catch."
- focal: `readFile("test.txt", "utf-8")` from `"fs/promises"`.
- code (26px; status `index.ts · fs/promises`), final:
  ```
  1  import { readFile } from "fs/promises";
  2
  3  readFile("test.txt", "utf-8")
  4      .then((result: string) => console.log(result))
  5      .catch((error) => console.log(error.message));
  ```
- right column: a file chip (key `bestand`, value `test.txt`) at x 1236, top 186; console card label at 276, card top 322, height 194 (two output lines).
- shots:
  - 0.0-3.4: kicker `Ingebouwd`. "promise" (2.20): nothing on screen but the empty code panel and kicker (hold).
  - 3.4-6.6: "Read file" (3.52): row 1 types (3.52-4.6). "fs slash promises" (4.88): wash on `"fs/promises"` (off 6.5).
  - 6.6-8.3: "leest" (6.64): rows 3-4 type (6.64-7.5). "bestand" (7.16): the file chip pops in. "in" (7.60): console line 1 `Hallo vanuit test.txt!`.
  - 8.3-end: "niet" (9.20): the file chip gets the struck look; console line 1 gets `.pc-out--old`. "dan kom je" (9.84): row 5 types (9.84-10.6). "catch" (10.68): console line 2 `ENOENT: no such file or directory` with `.pc-out--error` (font 20px for this line so it fits); wash on row 5 is NOT used (no blue at the red moment). Hold.

## Frame 11 — Samenvatting

- id: 11-samenvatting
- duration: 14.13s
- transition_in: crossfade
- sfx: pop@1.2, pop@4.48, pop@6.52, pop@8.56, pop@10.8
- voiceover: "Samengevat: een promise is een waarde die later komt. Met resolve vervul je ze, met reject laat je ze mislukken. Met then gebruik je de waarde, en met catch vang je de fout op."
- focal: four rows: code term left, meaning right.
- layout: like `../react-router-params/compositions/frames/14-samenvatting.html` (copy its recap layout and motion). Kicker `Samenvatting`. Heading (`.ts-statement`, 56px) at left 80, top 190: `Een promise is een waarde die later komt.` Rows from top 340, 110 apart, each: a mono chip on the left (x 80, `.ts-chip`, 26px) and a statement on the right (x 560, Inter 500 40px ink):
  1. `resolve(waarde)` → `vervult de promise`
  2. `reject(error)` → `laat ze mislukken` (chip text in ink, a thin red left bar 4px on the chip; the only red)
  3. `.then()` → `gebruikt de waarde`
  4. `.catch()` → `vangt de fout op`
- shots:
  - 0.0-4.4: kicker `Samenvatting` (0.1). "promise" (1.36): heading fades up (y 16 → 0); "later" (2.88): a blue underline wipes in under `later`.
  - 4.4-end: "resolve" (4.48): row 1; "reject" (6.52): row 2; "then" (8.56): row 3; "catch" (10.80): row 4. Each row: chip and statement fade up together (0.5s, y 16 → 0). Hold to the end.
