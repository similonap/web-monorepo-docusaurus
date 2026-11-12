---
format: 1920x1080
duration: 112s
mode: autonomous
message: "Promise.all laat promises die elkaar niet nodig hebben tegelijk lopen: je wacht zo lang als de traagste in plaats van de som. Het resultaat volgt de volgorde van de array, met map maak je de promises, en faalt er één dan faalt alles. Promise.allSettled wacht op alles en geeft per promise een status."
arc: how-to-process
audience: "Studenten webontwikkeling die promises, then en catch kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Direct predecessor: `../ts-promises` (same series). **Everything in the "Video direction" section of `../ts-promises/STORYBOARD.md` applies here too** (reference frame, TS LIGHT block, the **PROMISE CLIP** CSS block, which you copy verbatim from that file, console card, state chip, code style, motion, negative list). Read it first. Only the differences and additions are listed here.
- **Course pages:** `docs/nodejs-+-typescript/asynchroon-programmeren/promises.md` (section "Promise All"). The interactive demos `InteractivePromiseAll` / `InteractivePromiseAllSettled` on that page show the same idea as the timelines here (bars per promise on a shared time axis).
- **`multiply`** is the function of `../ts-promises`: it resolves `number1 * number2` after a delay and rejects with `new Error("Result is greater than 10")` when the result is > 10. In the timelines the durations are free per frame (the voice says so).
- **Timelines** use the PROMISE CLIP `.pc-tl` kit: per promise a row with a mono label (`2 * 2`, `multiply(4, 10)`, `/posts/1`) and a track; the bar's `left` / `width` are set in CSS per row (in % of the track) and never animated; progress = `.pc-fill` scaleX 0 → 1 (linear, over the compressed time the frame gives); when a bar is done its `.pc-bar-text` (`= 4`) fades in. A now-line `.pc-now` moves with `x` across the track (linear) in step with the fills. The axis `.pc-axis` has ticks `0 s`, `1 s`, `2 s`, `3 s`. A bar appears (opacity 0 → 1, 0.3s) when the frame says. Error bar: `.pc-bar--error` with text `reject`. A result that Promise.all throws away: the bar fades to 0.35 and gets a dashed border (`.pc-bar--ghost` look keeps the text).
- **Code panel** 26px / 38px, x 80, width 1060 unless the frame says 24px / 36px with width 1120 (then the right column starts at x 1260).

## Frame 1 — Hook: drie seconden of één

- id: 01-hook
- duration: 10.23s
- transition_in: cut
- sfx: pop@0.32, pop@1.76, whoosh-short@3.28, pop@5.04, whoosh-short@6.24, pop@8.24
- voiceover: "Drie berekeningen die elk één seconde duren. Na elkaar ben je drie seconden bezig. Met promise punt all ben je na één seconde klaar."
- focal: two timelines side by side in time: three bars one after another (3 s) and three bars together (1 s); hero `Promise.all`.
- layout: hero `Promise.all` (`.ts-hero`, 140px) at left 80, top 150 (lands at 6.24), hero bar under it. Two lanes, each a `.pc-tl` with three rows, x 380-1700 (labels column 300 wide at x 80: lane title Inter 600 28px ink + below it the row labels in mono), track from x 380 to 1700 (= 0 s to 3 s, 440 px per second):
  - lane A `Na elkaar` rows at top 400: bars `2 * 2` 0-1 s, `3 * 3` 1-2 s, `4 * 4` 2-3 s. Clock `.pc-clock` right of the lane at x 1730, top 450.
  - lane B `Promise.all` rows at top 640: the three bars all 0-1 s. Clock at x 1730, top 690.
  The row labels (`2 * 2`, `3 * 3`, `4 * 4`) sit in each lane's label column; the lane title sits above its rows (top 360 / 600).
- shots:
  - 0.0-3.2: kicker `Promise.all`. "Drie berekeningen" (0.32): lane A's three row labels + empty bars (outlines only) fade up, staggered 0.15s. "één seconde" (1.76): the axis under lane A fades in.
  - 3.2-6.0: "Na elkaar" (3.28): lane A title; the bars of lane A fill one after the other (each 0.55s: 3.4-3.95, 3.95-4.5, 4.5-5.05) with the now-line; each bar's text `= 4` / `= 9` / `= 16` on its end. "bezig" (5.04): lane A clock `3,0 s` fades in.
  - 6.0-end: "promise punt all" (6.24): hero `Promise.all` lands (y 24 → 0, 0.6s), bar wipes at 6.5; lane B title + its three outlined bars and axis fade up at 6.4. "na één seconde" (7.76-8.24): lane B's three bars fill together (7.70-8.25) with a now-line; texts on 8.25; "klaar" (8.72): lane B clock `1,0 s` fades in with a `ts-mark` around it. Hold.

## Frame 2 — Het probleem: na elkaar

- id: 02-probleem
- duration: 13.67s
- transition_in: blur-crossfade
- sfx: pop@1.76, pop@4.12, pop@6.08, pop@8.64, pop@11.84
- voiceover: "Met geneste then's start de tweede vermenigvuldiging pas als de eerste klaar is, en de derde pas na de tweede. Samen duurt dat drie seconden, terwijl de berekeningen elkaar helemaal niet nodig hebben."
- focal: the nested `then`s and a timeline where each bar waits for the previous one.
- code (status `index.ts · na elkaar`), all present:
  ```
  1  multiply(2, 2).then((result1) => {
  2      multiply(3, 3).then((result2) => {
  3          multiply(4, 4).then((result3) => {
  4              console.log([result1, result2, result3]);
  5          });
  6      });
  7  });
  ```
- right column: label `tijdlijn` (`.ts-label`) at (1236, 186); a `.pc-tl` at x 1236, top 232, width 604: labels column 130 wide (`2 * 2`, `3 * 3`, `4 * 4`), track x 1366-1840 (0-3 s); bars 0-1, 1-2, 2-3 s; axis below; a bracket over the full 0-3 s span above the rows (label `3 s`). Note `.pc-note` `elkaar niet nodig` at x 1236, top 480.
- shots:
  - 0.0-1.7: kicker `Het probleem`. "geneste then's" (0.64): wash on the three `.then(` (off 1.6).
  - 1.7-7.3: "tweede" (1.76): wash on row 2 + bar 1 appears and fills 1.76-4.12 with the now-line (the first multiply runs). "klaar" (4.12): bar 1 text `= 4`; bar 2 appears and fills 4.12-6.08 (wash moves to row 3 at 5.28 "derde"). 6.08 ("na"): bar 2 text `= 9`; bar 3 appears and fills 6.08-7.40; text `= 16` at 7.40. Washes off 7.3.
  - 7.3-end: "drie seconden" (8.64): the bracket `3 s` fades in over the three bars. "helemaal niet nodig" (11.60-12.16): the note fades up at 11.84. Hold.

## Frame 3 — Promise.all

- id: 03-promise-all
- duration: 12.39s
- transition_in: crossfade
- sfx: typing@0.05, typing@1.8, pop@2.24, pop@4.16, pop@7.88, typing@8.64, pop@10.56
- voiceover: "Promise punt all krijgt een array van promises, en geeft één nieuwe promise terug. Die is pas fulfilled als alle promises klaar zijn. De waarde is een array met alle resultaten."
- focal: three `Promise<number>` chips → one `Promise<number[]>` chip → `[4, 9, 16]`.
- code (status `index.ts · Promise.all`), final:
  ```
  1  Promise.all([multiply(2, 2), multiply(3, 3), multiply(4, 4)])
  2      .then((results: number[]) => console.log(results))
  3      .catch((error) => console.log(error.message));
  ```
  Row 1 types in two parts: `Promise.all(` (0.05-0.6) and the rest `[multiply(2, 2), multiply(3, 3), multiply(4, 4)])` (1.80-3.0, 0.025s/char). Rows 2-3 type 8.64-9.9.
- right column (x 1236): three state chips stacked at top 200, 266, 332 (key `promise`, value `pending`, 22px chips); a short vertical arrow down (x 1400, 400-450, pointing down); a big chip at top 466: key `Promise.all`, value `pending` (later `[4, 9, 16]`). Console card label at 586, card top 632, height 106 (one line).
- shots:
  - 0.0-1.7: kicker `Promise.all`. "Promise punt all" (0.0-0.64): `Promise.all(` types; wash on it (off 1.6).
  - 1.7-5.2: "array van promises" (1.80-2.24): the array types; 2.24: the three small chips pop in, staggered 0.12s; wash on the array (off 3.4). "één nieuwe promise" (3.52-4.16): the arrow draws (scaleY 0 → 1) at 3.6; the big chip pops in at 4.16.
  - 5.2-8.5: "fulfilled" (5.96): nothing yet. "alle promises klaar" (6.92-7.60): the three small chips swap to `fulfilled` (blue look) at 6.92, 7.12, 7.32. "zijn" (7.88): the big chip swaps to `fulfilled` (blue look).
  - 8.5-end: "De waarde" (8.64): rows 2-3 type. "array" (9.76): wash on `(results: number[])`. "resultaten" (10.56): console line `[4, 9, 16]` and the big chip value swaps to `[4, 9, 16]`. Hold.

## Frame 4 — Ze lopen tegelijk

- id: 04-tegelijk
- duration: 12.39s
- transition_in: push-slide
- sfx: pop@2.24, pop@4.4, pop@6.28, pop@10.56
- voiceover: "Op het moment dat je de array maakt, starten de drie timers al. Ze lopen tegelijk. Je wacht dus niet de som van alle wachttijden, maar zo lang als de traagste promise: één seconde."
- focal: one wide timeline: three bars filling at the same time; a ghost of the sequential version behind them.
- layout: code panel short: x 80, top 170, width 1760, height 170 (title bar + one row + status `index.ts · tegelijk`): row 1 present: `Promise.all([multiply(2, 2), multiply(3, 3), multiply(4, 4)])`. Timeline card (`.ts-card`, white) x 80, top 380, width 1760, height 470, padding 40: a `.pc-tl` with labels column 260 (`multiply(2, 2)` …, mono 22px), track x 380-1700 inside the page (0-3 s, 440 px per second), three rows at top 440, 500, 560; axis below (top 620); clock `.pc-clock` at x 1720, top 470.
  - Real bars: 0-1 s each. Ghost bars (`.pc-bar--ghost`, sequential: 0-1, 1-2, 2-3 s) in the same rows, behind the real bars (lower z-index), hidden until 6.28.
- shots:
  - 0.0-2.2: kicker `Tegelijk`. "array" (1.24): wash on `[multiply(2, 2), multiply(3, 3), multiply(4, 4)]` (off 2.2); the timeline card fades up at 1.4 with its labels, axis and the three outlined real bars.
  - 2.2-5.3: "starten" (2.24): the three bars fill together, linear 2.24-4.40, with the now-line (0 → 1 s) and the clock counting `0,0 s` → `1,0 s` (update the text in an onUpdate; deterministic). "tegelijk" (4.40): texts `= 4`, `= 9`, `= 16` fade in together.
  - 5.3-9.1: "som" (6.28): the ghost bars fade in (opacity 0 → 1, 0.4s) and a bracket over 0-3 s with label `som: 3 s` appears above the rows. Hold.
  - 9.1-end: "traagste" (9.20): a bracket over 0-1 s with label `traagste: 1 s` (blue line instead of muted) appears; the `som` bracket dims to 0.4. "één seconde" (10.56): `ts-mark` around the clock `1,0 s`. Hold.

## Frame 5 — De volgorde blijft

- id: 05-volgorde
- duration: 12.55s
- transition_in: crossfade
- sfx: whoosh-short@1.76, pop@2.8, pop@3.37, pop@3.96, pop@5.04, pop@5.36, pop@8.4
- voiceover: "Duurt de eerste vermenigvuldiging drie seconden, dan is die als laatste klaar. Toch staat vier op de eerste plaats. Het resultaat volgt de volgorde van de array, niet wie eerst klaar is."
- focal: bar 1 is the slowest (3 s) and finishes last, yet `4` is the first element of `[4, 9, 16]`.
- layout: no code panel. Timeline card (white `.ts-card`) x 80, top 190, width 1760, height 420: `.pc-tl` with labels column (`multiply(2, 2)`, `multiply(3, 3)`, `multiply(4, 4)`), track x 380-1700 (0-3 s), rows at top 250, 320, 390 (row height 56 + 14 gap); axis below; clock at x 1720. Durations: row 1 starts as 0-1 s and grows to 0-3 s; row 2 0-1 s; row 3 0-2 s. Result block below the card: label `resultaat` (`.ts-label`) at (80, 650); then three big mono cells (`.ts-chip` 34px, 120 × 72 each, 16px gap) at x 80, top 690: `4`, `9`, `16` inside `[` `,` `]` brackets drawn as mono text 40px `#64748B`; index tags `[0]`, `[1]`, `[2]` (mono 18px muted) under each cell (top 772).
- shots:
  - 0.0-1.7: kicker `Volgorde`. "eerste vermenigvuldiging" (0.48-0.80): the card fades up with the three outlined bars (row 1 at 1 s).
  - 1.7-4.7: "drie seconden" (1.76): row 1's bar grows to 3 s (animate its `scaleX` from 1/3 → 1 with transform-origin left, 0.5s power3.inOut: the bar is authored at full 3 s width and starts at scaleX 0.3333; its text is a separate element placed at the bar centre after the grow). 2.20-3.96: all three fill together (linear, now-line 0 → 3 s over 2.20-3.96 → 0.587s per second): row 2 done 2.79 (text `= 9` + tag `1e`), row 3 done 3.37 (`= 16`, `2e`), row 1 done 3.96 (`= 4`, `3e`). Tags `.ts-tag` 18px at the right end of each bar, outside it.
  - 4.7-7.1: "vier" (5.36): the result block appears (5.04 label + brackets, cells pop in left to right 5.04-5.30); `ts-mark` around the `4` cell at 5.36 and a thin muted connector line from row 1's tag `3e` down to the `4` cell (draw 0.4s).
  - 7.1-end: "volgorde van de array" (8.40-9.20): the index tags `[0] [1] [2]` fade in under the cells and matching tags `[0] [1] [2]` appear left of the row labels (x 330). "niet wie eerst klaar is" (9.92-11.16): the `1e` / `2e` / `3e` tags dim to 0.35 at 10.48. Hold.

## Frame 6 — Promises maken met map

- id: 06-map
- duration: 11.83s
- transition_in: blur-crossfade
- sfx: typing@0.3, pop@1.04, typing@2.4, pop@5.68, typing@6.72, pop@10.24
- voiceover: "Heb je een array met gegevens, dan maak je de promises met map. Map geeft een array van promises. Promise punt all maakt daar één promise van, met een array van getallen."
- focal: `numbers.map((n) => multiply(n, n))` and the three types `number[]` → `Promise<number>[]` → `number[]`.
- code (status `index.ts · map`), final:
  ```
  1  const numbers: number[] = [2, 3, 4, 5];
  2
  3  const promises: Promise<number>[] =
  4      numbers.map((n) => multiply(n, n));
  5
  6  Promise.all(promises)
  7      .then((results: number[]) => console.log(results));
  ```
- right column (x 1236): three type chips (key = variable name, value = type in TS blue): `numbers` `number[]` at top 260; `promises` `Promise<number>[]` at top 360; `results` `number[]` at top 460. Small down arrows between them (x 1300). Console card label at 586, card top 632, height 106: line `[4, 9, 16, 25]`.
- shots:
  - 0.0-2.3: kicker `Met map`. "array met gegevens" (0.30-1.04): row 1 types (0.3-1.0); the `numbers` chip pops in at 1.04.
  - 2.3-6.6: "maak je de promises" (2.40): rows 3-4 type (2.4-3.7). "map" (3.36): wash on `numbers.map((n) => multiply(n, n))`. "array van promises" (5.24-5.68): wash on `Promise<number>[]`; the first arrow draws and the `promises` chip pops in at 5.68. Washes off 6.5.
  - 6.6-end: "Promise punt all" (6.72): rows 6-7 type (6.72-7.9). "één promise" (8.40): wash on `Promise.all(promises)`. "getallen" (10.24): the second arrow + `results` chip; console line `[4, 9, 16, 25]`. Hold.

## Frame 7 — Faalt er één, dan faalt alles

- id: 07-een-faalt
- duration: 12.07s
- transition_in: push-slide
- sfx: whoosh-short@3.0, pop@3.68, pop@6.16, pop@7.48, pop@9.52
- voiceover: "Maar promise punt all is alles of niets. Faalt één promise, dan wordt het geheel meteen rejected, en kom je in de catch. De resultaten van de andere promises ben je kwijt."
- focal: the `multiply(4, 10)` bar turns red after 1 s, Promise.all stops right there, the other two results are thrown away.
- code (status `index.ts · Promise.all`), present:
  ```
  1  Promise.all([multiply(2, 2), multiply(4, 10), multiply(3, 3)])
  2      .then((results: number[]) => console.log(results))
  3      .catch((error) => console.log(error.message));
  ```
- right column (x 1236): label `tijdlijn` at 186; `.pc-tl` at top 232: labels column 200 (`multiply(2, 2)`, `multiply(4, 10)`, `multiply(3, 3)`, mono 20px), track x 1436-1840 (0-3 s); bars: row 1 0-2 s, row 2 0-1 s (the one that rejects), row 3 0-3 s; axis. The state chip `.pc-state` (key `Promise.all`, value `pending`) at top 470. Console card label at 576, card top 622, height 106.
- shots:
  - 0.0-2.9: kicker `Als één faalt`. "alles of niets" (1.96-2.48): the timeline and state chip fade up (bars outlined).
  - 2.9-6.6: 3.00: all three bars start filling (linear, 1 s = 0.68s of video), now-line moves. "één" (3.68): row 2 reaches its end: it becomes `.pc-bar--error` with text `reject`; wash on `multiply(4, 10)` in the code is NOT used (red moment). The now-line stops at 1 s and turns red (background tween to `#D14343`). "meteen rejected" (5.52-6.16): rows 1 and 3 keep filling to their end in the background but faded to 0.35 with dashed borders (they are ignored); the state chip swaps to `rejected` (red look) at 6.16.
  - 6.6-end: "catch" (7.48): console line `Result is greater than 10` with `.pc-out--error`. "andere promises" (9.28-9.52): the texts `= 4` and `= 9` appear in the faded bars together with a small mono tag `genegeerd` (18px muted) right of each faded bar at 9.52. Hold.

## Frame 8 — Promise.allSettled

- id: 08-allsettled
- duration: 16.23s
- transition_in: crossfade
- sfx: typing@2.8, whoosh-short@5.2, pop@6.44, pop@7.36, pop@9.6, pop@9.8, pop@10.0, pop@11.16, pop@13.44
- voiceover: "Wil je toch elke uitkomst kennen, gebruik dan promise punt all settled. Die wacht tot alles klaar is en faalt nooit. Je krijgt per promise een object met een status: fulfilled met een value, of rejected met een reason."
- focal: the three result objects `{ status, value }` / `{ status, reason }`.
- code (24px / 36px, panel x 80 width 1120; status `index.ts · allSettled`), final:
  ```
  1  Promise.allSettled([multiply(2, 2), multiply(4, 10), multiply(3, 3)])
  2      .then((results) => {
  3          for (const result of results) {
  4              if (result.status === "fulfilled") {
  5                  console.log("gelukt:", result.value);
  6              } else {
  7                  console.log("mislukt:", result.reason.message);
  8              }
  9          }
  10     });
  ```
  Row 1 types at 2.80-4.2 (0.02s/char); rows 2-10 fade in as a block at 8.16 (0.4s, y 10 → 0).
- right column (x 1260, width 580): `.pc-tl` at top 200 (labels column 190, same three rows and durations as frame 8: 2 s, 1 s reject, 3 s; track to x 1840 = 0-3 s; axis); clock `.pc-clock` at x 1260, top 440 (shows `3,0 s` at the end). Results card (white `.ts-card`) at x 1260, top 500, width 580, height 200, padding 20: label `results` (`.ts-label`) above it at 466; three mono lines 20px, 52px apart:
  - `{ status: "fulfilled", value: 4 }` (status value in `#0F7B6C`)
  - `{ status: "rejected", reason: Error }` (`"rejected"` in `#D14343`)
  - `{ status: "fulfilled", value: 9 }`
- shots:
  - 0.0-2.7: kicker `allSettled`. "elke uitkomst" (0.80-1.12): the timeline fades up with outlined bars.
  - 2.7-4.9: "promise punt all settled" (2.80-4.08): row 1 types; wash on `allSettled` (off 4.8).
  - 4.9-8.0: "wacht tot alles klaar is" (5.20-6.44): all bars fill (5.20-6.44, linear over 3 s), row 2 turns red with `reject` at 5.61, rows 1 and 3 get `= 4` (6.03) and `= 9` (6.44); the now-line runs to the end (it does NOT stop at the reject); clock `3,0 s` at 6.44. "faalt nooit" (7.36): `ts-mark` around the clock.
  - 8.0-end: "Je krijgt" (8.16): rows 2-10 fade in. "object" (9.60): the results card fades up and its lines pop in at 9.60, 9.80, 10.00. "status" (10.44): wash on the three `status: ...` parts. "fulfilled met een value" (11.16-12.40): wash on code rows 4-5 and on lines 1 and 3 (off 13.3). "rejected met een reason" (13.44-14.64): wash on rows 6-7 and line 2 (wash stays blue; the red is only the `"rejected"` text). Hold.

## Frame 9 — Samenvatting

- id: 09-samenvatting
- duration: 15.17s
- transition_in: crossfade
- sfx: pop@1.2, pop@5.28, pop@7.76, pop@12.4
- voiceover: "Samengevat: promise punt all laat promises tegelijk lopen, en geeft de resultaten in de volgorde van de array. Faalt er één, dan faalt alles. Wil je elke uitkomst, gebruik dan all settled."
- focal: three rows: code term left, meaning right.
- layout: like `../ts-promises/compositions/frames/11-samenvatting.html` (same recap layout and motion; read it if it exists, else `../react-router-params/compositions/frames/14-samenvatting.html`). Kicker `Samenvatting`. Rows from top 230, 150 apart, each: a mono chip on the left (x 80, `.ts-chip`, 26px) and a statement on the right (x 620, Inter 500 40px ink, one or two lines):
  1. `Promise.all([...])` → `loopt tegelijk: je wacht op de traagste`
  2. `[4, 9, 16]` → `in de volgorde van de array`
  3. `.catch()` → `faalt er één, dan faalt alles` (a thin red 4px left bar on this chip; the only red)
  4. `Promise.allSettled` → `elke uitkomst, met een status`
- shots:
  - 0.0-4.8: kicker `Samenvatting` (0.1). "promise punt all" (1.20): row 1; "tegelijk" (3.28): blue underline wipes in under `tegelijk`.
  - 4.8-end: "resultaten" (5.28): row 2; "Faalt er één" (7.76): row 3; "all settled" (12.40): row 4. Each row: chip and statement fade up together (0.5s, y 16 → 0). Hold to the end.
