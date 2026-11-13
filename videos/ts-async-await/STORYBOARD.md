---
format: 1920x1080
duration: 220s
mode: autonomous
message: "Met async en await schrijf je promise-code zonder te nesten: await wacht op een promise en geeft de waarde, alleen de async functie pauzeert en het programma loopt verder. Een async functie geeft altijd een promise terug; wie await gebruikt moet async zijn, en wie de waarde nodig heeft moet ook awaiten."
arc: how-to-process
audience: "Studenten webontwikkeling die promises, then/catch en Promise.all kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series as `../ts-promises` and `../ts-promise-all`. **Everything in the "Video direction" section of `../ts-promises/STORYBOARD.md` applies** (reference frame `../react-usefetch/compositions/frames/02-fetch.html`, TS LIGHT block, the **PROMISE CLIP** CSS block which you copy verbatim from that file, console card, state chip, code style, motion, negative list). Read it first. Built frames of the siblings show how it was solved: e.g. `../ts-promises/compositions/frames/04-then.html` (code + console + state chip), `../ts-promises/compositions/frames/09-catch.html` (24px rows, error line), `../ts-promise-all/compositions/frames/01-hook.html` (timeline lanes), `../ts-promise-all/compositions/frames/04-tegelijk.html` (wide timeline card), `../ts-promises/compositions/frames/11-samenvatting.html` (recap).
- **Course page:** `docs/nodejs-+-typescript/asynchroon-programmeren/async-await.md`.
- **The analogy (the thread of the film): a pick-up buzzer in a snack bar.** You order at the counter (`toog`) and get a buzzer (`zoemer`) right away: the promise that your food will come. You can only eat when the buzzer goes off, so *you* wait. Your friends (`vrienden`) don't have to wait: they keep talking. Third case: your friends politely wait for you before the conversation goes on. Mapping: **toog = `orderPizza()`** (returns a promise right away = the buzzer), **jij = `eat()`** (the async function that awaits the food), **vrienden = the rest of the program** (in case 3 the async function `talk()`). Drawn **only** with the series' kit: timeline rows (`.pc-tl`) with the role labels `jij`, `toog`, `vrienden` (Inter 600 24px ink, not mono, because they are roles), bars, ghost bars (`.pc-bar--ghost` = waiting), short Inter 500 labels inside bars, a state chip for the buzzer, and role chips (`.ts-chip` with an Inter key like `toog` and a mono value like `orderPizza()`). No illustrations, people, food, icons or emoji.
- **The buzzer code** (frames 4-7). Frame 4 shows `orderPizza` in full and then folds it; frames 5-7 keep it folded on row 1:
  ```ts
  function orderPizza(): Promise<string> {
      console.log("Toog: hier is je zoemer");
      return new Promise<string>((resolve) => {
          setTimeout(() => resolve("pizza"), 1000);
      });
  }
  ```
  folded: `function orderPizza(): Promise<string> { ⋯ }`. The three cases: case 1 `function eat()` without await (you "eat" `[object Promise]`); case 2 `async function eat()` with `const food = await orderPizza();` and `eat(); console.log("Mijn vrienden praten verder");` after it; case 3 the friends wait: `async function talk() { await eat(); console.log("Mijn vrienden praten verder"); }` and `talk();`. All three verified with tsc 7 + node; outputs exactly as in the frames.
- **Frames 4 → 5 → 6 → 7 are joined by cuts**: each frame starts on the exact end state of the previous one (same code panel, rows, chips, console). Build them together.
- **`multiply`** is the course function of `../ts-promises` (resolves `number1 * number2` after 1 second; the Catch version rejects with `new Error("Result is greater than 10")` when the result is > 10).
- **"Paused" marker:** a `.ts-tag` pill `gepauzeerd` placed right after the `await` row's text, and that row gets a dashed 2px `#94A3B8` left bar inside the code panel (x = panel left + 6, row height). No amber, no new colours.
- **TypeScript errors** are shown in an error card: label `typescript` (`.ts-label`) above a `.pc-console` card whose single `.pc-out--error` line wraps (white-space normal, line-height 1.35, mono 20px): `error TS1308: 'await' expressions are only allowed within async functions and at the top levels of modules.` The error card appears with opacity + x −8 → 0 (0.3s).
- **Code panel** 26px / 38px, x 80, top 170, width 1060, height 720 (keep the outline identical between frames) unless the frame says 24px / 36px with width 1160 (then the right column starts at x 1280, width 560).

## Frame 1 — Hook: de ophaalzoemer

- id: 01-hook
- duration: 16.31s
- transition_in: cut
- sfx: pop@1.0, pop@1.76, pop@3.6, pop@6.56, pop@8.32, pop@9.56, whoosh-short@13.6, pop@14.0, pop@14.88
- voiceover: "In een snackbar bestel je aan de toog, en je krijgt meteen een zoemer: de belofte dat je eten komt. Eten kan je pas als de zoemer gaat. Maar je vrienden hoeven daar niet op te wachten: die praten gewoon verder. Zo werken async en await."
- focal: you order, get a buzzer, wait, eat; the counter makes the food; your friends keep talking.
- base: the current `compositions/frames/01-hook.html` (rows `lector` / `student` / `les`) has the right card and hero layout: rebuild it with the rows and times below.
- layout: timeline card (white `.ts-card`) x 80, top 190, width 1760, height 430; labels column x 120 (Inter 600 24px); track x 420-1780; rows (56 high) at top 250 (`jij`), 346 (`toog`), 442 (`vrienden`); muted `tijd` caption + thin `.pc-arrow` at top 560. Hero below the card: `async` and `await` (`.ts-hero`, 150px) at left 80, top 680 (60px gap), a blue bar under each word (30px below). Buzzer chip (`.pc-state`, key `zoemer`, value `pending` → `fulfilled: "pizza"`) at x 1420, top 700.
  - `jij` row: A `bestelt` 0-12%, ghost B `wacht op de zoemer` 12-60%, C `eet` 62-80%.
  - `toog` row: one bar `maakt de pizza` 12-60% (text later `zoemer gaat`).
  - `vrienden` row: one bar 0-100% with text `praten verder` (fills linearly).
  Bar labels inside the bars, Inter 500 22px.
- shots:
  - 0.0-1.7: kicker `async / await`; the card fades in empty at 0.2. "bestel" (1.00): `jij` label + A fills 1.0-1.6.
  - 1.7-6.5: "toog" (1.76): `toog` label + its bar appear; the bar fills 2.36-8.32. "zoemer" (3.60): the buzzer chip pops in (`pending`). "belofte" (4.56): hold.
  - 6.5-9.5: "Eten kan je pas" (6.56): ghost B appears with its label. "gaat" (8.32): the toog bar text swaps to `zoemer gaat`; the buzzer chip swaps to `fulfilled: "pizza"` (blue look); C appears and fills 8.4-8.9.
  - 9.5-13.5: "vrienden" (9.56): `vrienden` label + bar appear; the bar fills linearly from 0% at 9.56 to 100% at 12.4; its text `praten verder` at 11.72. "gewoon" (12.08): `ts-mark` around the `vrienden` row, off 13.4.
  - 13.5-end: "async" (14.00): hero `async` lands (y 24 → 0, 0.6s), bar at 14.2. "await" (14.88): hero `await`, bar at 15.1. Hold.

## Frame 2 — Het probleem: callback hell

- id: 02-callback-hell
- duration: 14.39s
- transition_in: blur-crossfade
- sfx: typing@2.88, typing@4.52, typing@5.72, pop@10.48, pop@12.08
- voiceover: "Eerst het probleem. Wil je met multiply eerst twee maal twee doen, dan maal vijf en dan maal tien, dan nest je de then's in elkaar. Elke stap zit een niveau dieper. Dat noemen we callback hell."
- focal: the staircase of nested `then`s.
- code (status `index.ts · callback hell`), final:
  ```
  1  multiply(2, 2).then((result) => {
  2      multiply(result, 5).then((result) => {
  3          multiply(result, 10).then((result) => {
  4              console.log(result);
  5          });
  6      });
  7  });
  ```
  Rows appear per level (each level types its opening row at 0.02s/char and its closing row appears with it): level 1 = rows 1 and 7 at 2.88; level 2 = rows 2 and 6 at 4.52; level 3 = rows 3, 4, 5 at 5.72.
- right column: statement `callback hell` (Inter 700 64px ink, tracking -0.02em) at x 1236, top 300, with a blue underline under it; above it a small label `het probleem` (`.ts-label`) at top 260.
- shots:
  - 0.0-2.8: kicker `Het probleem`. "multiply" (1.84): code panel present (empty rows).
  - 2.8-6.8: the three levels type in (see above). "maal vijf" (4.52), "maal tien" (5.72): wash on `5` and `10` as they appear (off 6.7).
  - 6.8-11.2: "nest" (7.12): wash on the three `.then(` (off 8.9). "niveau dieper" (10.19-10.48): three thin blue vertical guides (2px, 30% opacity) appear at the indentation steps of rows 2-6 (x of column 4, 8, 12), drawn top → bottom (scaleY 0 → 1, 0.4s, staggered 0.1s) from 9.6.
  - 11.2-end: "callback hell" (12.08): label + statement fade up; underline wipes at 12.4. Hold.

## Frame 3 — async en await

- id: 03-async-await
- duration: 14.95s
- transition_in: crossfade
- sfx: typing@2.0, typing@4.08, pop@7.12, pop@10.28, pop@12.0, pop@13.48
- voiceover: "Met async en await schrijf je hetzelfde zonder te nesten. Zet async voor de functie. Daarin mag je await gebruiken. Await wacht tot de promise klaar is en geeft de waarde terug: hier een number."
- focal: flat code with `async function` and three `await`s; `await` gives the value (`4`, a `number`).
- code (status `index.ts · async / await`), final:
  ```
  1  async function calculate() {
  2      let result: number = await multiply(2, 2);
  3      result = await multiply(result, 5);
  4      result = await multiply(result, 10);
  5      console.log(result);
  6  }
  7
  8  calculate();
  ```
  Build: rows 2-5 type first (2.0-3.4, 0.015s/char; at that point they have no indentation: render them in a layer without the 4 leading spaces); at "Zet async" (4.08) the rows shift right by 4 columns (x +62.4px, 0.35s power3.inOut) while rows 1, 6 and 8 type in (4.08-4.9).
- right column (x 1236): the state chip `.pc-state` (key `multiply(2, 2)`, value `pending`) at top 260; a value chip (key `await geeft`, value `4` in `#9A5B13`) at top 340; a type chip (key `type`, value `number` in TS blue) at top 420.
- shots:
  - 0.0-1.9: kicker `async en await`. Code panel present.
  - 1.9-6.2: "hetzelfde zonder te nesten" (2.0): rows 2-5 type. "async" (4.40): wash on `async` in row 1 (off 6.1).
  - 6.2-8.6: "await" (7.12): wash on the three `await`s (off 8.5).
  - 8.6-end: "promise" (10.04): the state chip pops in; "klaar" (10.28): it swaps to `fulfilled`. "waarde terug" (12.00): the value chip pops in + wash on `await multiply(2, 2)` in row 2. "number" (13.48): `ts-mark` around `: number` in row 2 + the type chip pops in. Hold.

## Frame 4 — De zoemer in code

- id: 04-zoemer
- duration: 10.95s
- transition_in: push-slide
- sfx: pop@2.88, pop@5.84, whoosh-short@6.72, typing@6.8, pop@7.52
- voiceover: "Nu in code. Order pizza is de toog: die geeft meteen een promise terug, de zoemer. Eat ben jij: jij wil de pizza opeten."
- focal: `orderPizza()` returns a promise (the buzzer) right away; `eat()` is you.
- built: frames 4-7 were generated together (shared layout, code panel built from one span per character so the cuts match pixel for pixel).
- layout (shared by frames 4-7): as before. Right column x 1236: role chips `toog` → `orderPizza()` (top 200), `jij` → `eat()` (top 266), `vrienden` → `het programma` (value Inter 500 ink; top 332); state-chip slot at top 398; console label 490, card top 536, height 238 (22px console lines).
- code: start: the full `orderPizza` (rows 1-6). At "Eat" (6.72) rows 2-6 fade out and row 1 swaps to the folded version; then row 3 `function eat() {` and row 6 `}` type (6.8-7.4).
- shots:
  - 0.0-1.5: kicker `De zoemer`. Hold.
  - 1.5-6.6: "Order pizza" (1.60): wash on rows 1-6 (off 3.6). "toog" (2.88): `toog` chip. "geeft meteen een promise terug" (3.80-5.12): wash on row 3 `return new Promise<string>` and on `Promise<string>` in row 1 (off 6.5). "zoemer" (5.84): state chip in the slot (key `zoemer`, value `Promise<string>`).
  - 6.6-end: "Eat" (6.72): fold + rows 3/6. "jij" (7.52): `jij` chip. The state chip fades out at 9.4. Hold.

## Frame 5 — Geval 1: eten zonder te wachten

- id: 05-geval-1
- duration: 11.40s
- transition_in: cut
- sfx: typing@1.4, typing@2.48, pop@2.96, pop@6.2, pop@7.04
- voiceover: "Geval één: je eet meteen, zonder te wachten. Food is dan nog geen pizza, maar een promise. Je eet dus de zoemer op, en TypeScript zegt er niets van."
- focal: `Ik eet mijn [object Promise]` in the console.
- start: the exact end state of frame 4.
- code (final):
  ```
  1  function orderPizza(): Promise<string> { ⋯ }
  2
  3  function eat() {
  4      const food = orderPizza();
  5      console.log(`Ik eet mijn ${food}`);
  6  }
  7
  8  eat();
  ```
- shots:
  - 0.0-2.4: kicker swaps to `Geval 1` (0.1). "eet meteen" (1.40): rows 4-5 type (1.4-2.3).
  - 2.4-3.8: "zonder te wachten" (2.48): row 8 types (2.48-2.8); 2.96: console line 1 `Toog: hier is je zoemer`.
  - 3.8-7.0: "Food" (3.84): wash on `food` in row 4 (off 6.9). "promise" (6.20): state chip (key `food`, value `Promise { <pending> }`).
  - 7.0-end: "eet" (7.04): console line 2 `Ik eet mijn [object Promise]`; "zoemer op" (7.92): `ts-mark--wrong` around that line. "TypeScript zegt er niets van" (8.72-10.12): `.pc-note` `geen fout van TypeScript` under the console card (top 790) at 9.76. Hold.

## Frame 6 — Geval 2: jij wacht, je vrienden praten verder

- id: 06-geval-2
- duration: 14.39s
- transition_in: cut
- sfx: pop@2.0, pop@5.32, pop@6.08, pop@9.8, pop@12.24, pop@12.8
- voiceover: "Geval twee: je wacht met await tot de zoemer gaat. Eat wordt daarom async. De functie pauzeert bij de await, maar je vrienden praten gewoon verder. Een seconde later is de pizza er, en eet je."
- focal: the console order `Toog: hier is je zoemer`, `Mijn vrienden praten verder`, `Ik eet mijn pizza`.
- start: the exact end state of frame 5.
- code (final):
  ```
  1  function orderPizza(): Promise<string> { ⋯ }
  2
  3  async function eat() {
  4      const food = await orderPizza();
  5      console.log(`Ik eet mijn ${food}`);
  6  }
  7
  8  eat();
  9  console.log("Mijn vrienden praten verder");
  ```
- shots:
  - 0.0-1.9: kicker swaps to `Geval 2` (0.1). The note, the red mark, the console lines and the state chip fade out (0.3s from 0.1).
  - 1.9-4.0: "await" (2.00): row 4 swaps to `const food = await orderPizza();`; wash on `await` (off 3.9).
  - 4.0-6.0: "async" (5.32): row 3 swaps to `async function eat() {`; wash on `async` (off 6.0).
  - 6.0-10.5: "De functie" (6.08): console line 1 `Toog: hier is je zoemer`. "pauzeert" (6.56): `gepauzeerd` tag + dashed bar on row 4; state chip (key `food`, value `pending`). "vrienden" (8.72): row 9 types (8.4-9.0) and the `vrienden` chip pops in; "verder" (9.80): console line 2 `Mijn vrienden praten verder`.
  - 10.5-end: "pizza er" (12.24): state chip → `fulfilled: "pizza"` (blue look); tag + dashed bar fade out. "eet je" (12.80): console line 3 `Ik eet mijn pizza`; wash on row 5. Hold.

## Frame 7 — Geval 3: je vrienden wachten op jou

- id: 07-geval-3
- duration: 9.51s
- transition_in: cut
- sfx: whoosh-short@3.44, pop@4.64, pop@6.84, pop@7.6, pop@8.04
- voiceover: "Geval drie: je vrienden wachten beleefd op jou. Met await eat praten ze pas verder, als de pizza er is en jij gegeten hebt."
- focal: `await eat();` inside `async function talk()`; the console order `Toog…`, `Ik eet mijn pizza`, `Mijn vrienden praten verder`.
- start: the exact end state of frame 6.
- code (final):
  ```
  1  function orderPizza(): Promise<string> { ⋯ }
  2
  3  async function eat() {
  4      const food = await orderPizza();
  5      console.log(`Ik eet mijn ${food}`);
  6  }
  7
  8  async function talk() {
  9      await eat();
  10     console.log("Mijn vrienden praten verder");
  11 }
  12
  13 talk();
  ```
  The `vrienden` chip value changes to `talk()` (mono) at 3.44.
- shots:
  - 0.0-1.3: kicker swaps to `Geval 3` (0.1). Console lines and state chip fade out; the row-5 wash goes off.
  - 1.3-3.4: "vrienden wachten" (1.76): wash on rows 8-9 of the old code (off 3.3).
  - 3.4-6.0: "Met await eat" (3.44): rows 8-13 cross-fade to the `talk()` code (0.35s); the `vrienden` chip value → `talk()`. "await" (3.68): wash on `await eat();` (row 9) (off 6.0). "praten ze pas verder" (4.64): console line 1 `Toog: hier is je zoemer`; state chip (key `food`, value `pending`).
  - 6.0-end: "er is" (6.84): state chip → `fulfilled: "pizza"`. "gegeten" (7.60): console line 2 `Ik eet mijn pizza`. "hebt" (8.04): console line 3 `Mijn vrienden praten verder`. Hold.

## Frame 8 — Een async functie geeft altijd een promise terug

- id: 08-altijd-promise
- duration: 15.51s
- transition_in: blur-crossfade
- sfx: typing@0.44, pop@6.96, whoosh-short@10.08, typing@11.68, pop@13.28
- voiceover: "Een async functie geeft altijd een promise terug, ook als je een gewone waarde teruggeeft. Get total geeft een getal terug, maar het return type is Promise van number. Zonder await krijg je dus Promise pending."
- focal: `async function getTotal(): Promise<number>` returning `result + 1`, and `Promise { <pending> }` in the console.
- code (status `index.ts · getTotal`), final:
  ```
  1  async function getTotal(): Promise<number> {
  2      const result = await multiply(2, 3);
  3      return result + 1;
  4  }
  5
  6  const total = getTotal();
  7  console.log(total);
  ```
  Row 1 first types without the return type (`async function getTotal() {`, 0.44-1.2), rows 2-4 type 1.2-2.4; at "Promise van number" (10.08) row 1 swaps to the final text (the new `: Promise<number>` gets a wash). Rows 6-7 type 11.68-12.6.
- right column (x 1236): a value chip (key `return`, value `7`) at top 260; console card label at 380, card top 426, height 106.
- shots:
  - 0.0-3.4: kicker `Altijd een promise`. Rows 1-4 type. "promise" (2.52): wash on `async` (off 3.4).
  - 3.4-9.9: "gewone waarde" (4.64): wash on `return result + 1;` (off 6.6). "getal" (7.40): the value chip pops in.
  - 9.9-11.6: "Promise van number" (10.08): row 1 swap; `ts-mark` around `Promise<number>` at 10.80.
  - 11.6-end: "Zonder await" (11.68): rows 6-7 type; wash on `getTotal()` in row 6 at 12.6. "Promise pending" (13.28): console line `Promise { <pending> }`. Hold.

## Frame 9 — Regel 1: wie await gebruikt, moet async zijn

- id: 09-regel-1
- duration: 13.19s
- transition_in: push-slide
- sfx: pop@2.56, pop@4.24, pop@8.92
- voiceover: "Welke functies moeten async worden? Regel één: gebruik je await, dan moet de functie async zijn. Vergeet je dat, dan zegt TypeScript dat await enkel mag in een async functie."
- focal: `await` in a function without `async`, and the TS1308 error.
- layout: question (`.ts-statement`, 48px ink) `Welke functies moeten async worden?` at left 80, top 170. Rule line (`.ts-statement`, 40px, `#475569`, with a 4px blue left bar) `Regel 1: wie await gebruikt, moet async zijn` at left 80, top 250. Code panel x 80, top 340, width 1060, height 280 (status `index.ts · regel 1`). Error card (label `typescript` at 1236, 356; card x 1236, top 402, width 604, height 150).
- code (present from 2.56):
  ```
  1  function calculate() {
  2      const result = await multiply(2, 2);
  3      console.log(result);
  4  }
  ```
- shots:
  - 0.0-2.5: kicker `Regel 1`. "Welke functies" (0.0): the question fades up (0.5s).
  - 2.5-7.2: "Regel één" (2.56): the rule line fades up + the code panel fades up. "await" (4.24): wash on `await` (off 6.9). "async zijn" (6.16): a blue `ts-mark` around the word `function` in row 1 (where `async` belongs), off at 7.2.
  - 7.2-end: "Vergeet je dat" (7.28): `ts-mark--wrong` (red) around `await` in row 2. "TypeScript" (8.92): the error card (TS1308 text, see direction). Hold.

## Frame 10 — Regel 2: async kruipt omhoog

- id: 10-regel-2
- duration: 17.03s
- transition_in: crossfade
- sfx: typing@1.6, pop@6.32, typing@10.72, pop@12.88, pop@14.08, pop@15.44
- voiceover: "Regel twee: heb je de waarde van een async functie nodig, dan moet je ook awaiten. Dat zag je in geval drie: wie op jouw eten wacht, moet zelf ook async zijn. Zo kruipt async omhoog: van get total, naar print report, tot in main."
- focal: the chain `getTotal` → `printReport` → `main`, each `async`.
- base: the current `compositions/frames/10-regel-2.html`: same layout and code, retime it to the times below and change the note text.
- code: as before (24px / 36px, 16 rows `getTotal` / `printReport` / `main` / `main();`).
- right column: the note `.pc-note` now reads `Wie op jouw eten wacht,` / `moet zelf ook async zijn.` (top 200, shown 6.32-10.4). Chain chips as before (`getTotal()` top 640, `printReport()` 520, `main()` 400, up-arrows).
- shots:
  - 0.0-5.6: kicker `Regel 2`. "waarde" (1.64): rows 6-9 type (1.6-3.0). "awaiten" (4.64): wash on `await getTotal()` (off 6.2).
  - 5.6-10.6: "geval drie" (6.32): the note fades up; out at 10.4.
  - 10.6-end: "kruipt" (10.96): rows 11-16 type (10.72-12.3). "get total" (12.88): chip `getTotal()` + wash on row 1 `async`. "print report" (14.08): arrow + chip `printReport()` + wash on row 6 `async`. "main" (15.44): arrow + chip `main()` + wash on row 11 `async`. Washes stay.

## Frame 11 — Een vergeten await

- id: 11-vergeten
- duration: 12.71s
- transition_in: blur-crossfade
- sfx: pop@2.48, pop@4.96, pop@7.44, pop@9.04
- voiceover: "Vergeet je ergens een await, dan helpt TypeScript je meestal: je rekent dan met een promise in plaats van met een getal. En multiply zelf hoeft niet async te zijn, want het gebruikt geen await."
- focal: `total * 2` on a `Promise<number>` (TS2362), then `function multiply` without `async`.
- code (24px / 36px, panel x 80, width 1160, height 720; status `index.ts · vergeten await`; right column x 1280, width 560):
  ```
  1  async function printReport(): Promise<void> {
  2      const total = getTotal(); // await vergeten
  3      console.log(total * 2);
  4  }
  5
  6  function multiply(number1: number, number2: number): Promise<number> {
  7      return new Promise<number>((resolve, reject) => { ⋯ });
  8  }
  ```
  Rows 1-4 present (comment in `#94A3B8`); rows 6-8 fade in at 7.44.
- right column: error card (label `typescript` at 1280, 186; card top 232, height 150) with `error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.`; a type chip (key `total`, value `Promise<number>`) at top 430; a note `.pc-note` `geen await, dus geen async` at top 560 (appears at 11.2).
- shots:
  - 0.0-2.4: kicker `Vergeten await`. "await" (0.96): wash on `getTotal()` in row 2 (off 2.3).
  - 2.4-7.1: "TypeScript" (2.48): `ts-mark--wrong` around `total * 2` + the error card. "promise" (4.96): the type chip pops in. "getal" (6.36): hold.
  - 7.1-end: "multiply" (7.44): rows 6-8 fade in (the error card and `ts-mark--wrong` fade out at 7.44). "niet async" (8.76-9.04): blue `ts-mark` around `function multiply` (row 6). "geen await" (11.20): the note fades up. Hold.

## Frame 12 — Opgelet met forEach

- id: 12-foreach
- duration: 14.55s
- transition_in: push-slide
- sfx: pop@2.72, pop@7.6, pop@8.0, pop@8.2, pop@8.4, whoosh-short@10.08, pop@11.92, pop@12.2, pop@12.48, pop@13.04
- voiceover: "Opgelet met for each. Een async callback maakt enkel die callback async, en for each wacht er niet op. Klaar verschijnt dan eerst. Gebruik een for of lus: daarin wacht await wel echt."
- focal: `Klaar!` printed first with `forEach`; the right order with `for...of`.
- code (status `index.ts · forEach`), version A present at t = 0:
  ```
  1  async function printSquares() {
  2      const numbers: number[] = [2, 3, 4];
  3      numbers.forEach(async (n) => {
  4          const square = await multiply(n, n);
  5          console.log(square);
  6      });
  7      console.log("Klaar!");
  8  }
  ```
  Version B (rows 3 and 6 swap at 10.08): row 3 `    for (const n of numbers) {`, row 6 `    }`.
- right column: console card (label at 1236, 186; card top 232, height 238, four lines).
- shots:
  - 0.0-2.0: kicker `Opgelet met forEach`. "for each" (0.88): wash on `numbers.forEach(` (off 1.9).
  - 2.0-7.5: "async callback" (2.72): `ts-mark` around `async (n) =>`. "wacht er niet op" (6.32-7.08): wash on row 7 (off 7.5); mark off 7.5.
  - 7.5-10.0: "Klaar" (7.60): console line `Klaar!`; then `4` (8.0), `9` (8.2), `16` (8.4). "eerst" (8.76): `ts-mark--wrong` around the `Klaar!` console line (off 9.9).
  - 10.0-end: "for of" (10.08): rows 3 and 6 swap to version B; wash on `for (const n of numbers)` (off 11.8); the four console lines fade to `.pc-out--old` look and then out (10.1-10.5), replaced by an empty console. "wacht await wel echt" (11.92-13.04): new lines `4` (11.92), `9` (12.2), `16` (12.48), `Klaar!` (13.04). Hold.

## Frame 13 — Await op het hoogste niveau

- id: 13-top-level
- duration: 16.79s
- transition_in: crossfade
- sfx: pop@4.52, pop@6.24, whoosh-short@8.24, pop@10.16, whoosh-short@12.64, pop@14.64
- voiceover: "Moet je altijd een functie maken? In een module, een bestand met een import of export, mag await ook bovenaan staan. Zonder import geeft TypeScript een fout. Zet je code dan in een async main functie, of in een async IIFE."
- focal: top-level `await` allowed in a module; TS1375 without imports; the `main()` and IIFE fixes.
- code (status `index.ts · top-level await`), three versions (cross-fade 0.35s between them, rows not typed):
  - version A (t = 0):
    ```
    1  import { readFile } from "fs/promises";
    2
    3  const text = await readFile("test.txt", "utf-8");
    4  console.log(text);
    ```
  - version B (8.24, no imports):
    ```
    1  let result: number = await multiply(2, 2);
    2  result = await multiply(result, 5);
    3  console.log(result);
    ```
  - version C (12.64):
    ```
    1  async function main() {
    2      let result: number = await multiply(2, 2);
    3      result = await multiply(result, 5);
    4      console.log(result);
    5  }
    6
    7  main();
    ```
- right column (x 1236): a chip (key `module`, value `import / export`) at top 200 (4.52); error card (label `typescript` at 300; card top 346, height 190) with `error TS1375: 'await' expressions are only allowed at the top level of a file when that file is a module, but this file has no imports or exports.` (10.16-12.64); a mini code panel (`.ts-mini`, title `IIFE`) at top 560, height 200, rows: `(async () => {` / `    let result: number = await multiply(2, 2);` / `    ⋯` / `})();` (14.64; mono 20px so the long row fits, or shorten row 2 to `    const r = await multiply(2, 2);`).
- shots:
  - 0.0-2.2: kicker `Top-level await`. "functie maken" (1.44): hold on version A.
  - 2.2-8.1: "module" (2.64): wash on row 1 (off 5.8). "import of export" (4.52): the module chip pops in. "bovenaan" (6.80): `ts-mark` around `await` in row 3 (off 8.1).
  - 8.1-12.5: "Zonder import" (8.24): version B; the module chip gets the struck look. "TypeScript" (9.40) ... "fout" (10.16): the error card; `ts-mark--wrong` around `await` in row 1.
  - 12.5-end: "async main functie" (12.64): version C; error card, red mark and module chip fade out; wash on `async function main()` and `main();` (off 14.4). "IIFE" (14.64): the mini panel fades up. Hold.

## Frame 14 — Fouten opvangen met try/catch

- id: 14-try-catch
- duration: 13.83s
- transition_in: blur-crossfade
- sfx: pop@1.44, pop@7.52, pop@10.56, pop@12.16
- voiceover: "Fouten vang je op met try en catch. Wordt een promise rejected, dan gooit await de fout. Multiply van vier en vijf geeft twintig, en dat is groter dan tien. Je komt dus in de catch."
- focal: `try { ... } catch (error: any)` and `Result is greater than 10` in the console.
- code (status `index.ts · try/catch`), all present:
  ```
  1  async function calculate() {
  2      try {
  3          let result: number = await multiply(2, 2);
  4          result = await multiply(result, 5);
  5          console.log(result);
  6      } catch (error: any) {
  7          console.log(error.message);
  8      }
  9  }
  ```
- right column (x 1236): two state chips: key `multiply(2, 2)` value `fulfilled: 4` (present from 1.44, blue look) at top 200; key `multiply(4, 5)` value `pending` at top 266 (7.52). Console card label at 370, card top 416, height 106.
- shots:
  - 0.0-3.0: kicker `try/catch`. "try" (1.44): wash on `try {` (row 2) and on rows 6-8 (`catch`) at 2.36; the first chip pops in at 1.44. Washes off 3.0.
  - 3.0-6.5: "rejected" (4.08): nothing new. "gooit await de fout" (5.28): wash on `await` in row 4 (off 6.5).
  - 6.5-11.2: "vier en vijf" (7.52): the second chip pops in (`pending`). "twintig" (8.76): hold. "groter dan tien" (10.56): the second chip swaps to `rejected` (red look); row 5 gets the struck look (opacity 0.35 + line).
  - 11.2-end: "catch" (12.16): console line `Result is greater than 10` (`.pc-out--error`). No blue at that moment. Hold.

## Frame 15 — await en Promise.all

- id: 15-promise-all
- duration: 17.43s
- transition_in: crossfade
- sfx: pop@3.97, pop@4.88, pop@5.48, pop@6.08, whoosh-short@13.44, pop@15.72
- voiceover: "Awaits na elkaar wachten op elkaar. Bestel je drie pizza's na elkaar, en wacht je telkens op de zoemer, dan duurt dat drie keer zo lang. Hebben de promises elkaar niet nodig, combineer await dan met promise punt all. Dan lopen ze tegelijk."
- focal: three pizzas one after another (3 s) vs together with `Promise.all` (1 s).
- layout: code panel short: x 80, top 170, width 1760, height 230 (status `index.ts · Promise.all`). Timeline card (white `.ts-card`) x 80, top 440, width 1760, height 420: labels column (x 120, Inter 600 24px: `pizza 1`, `pizza 2`, `pizza 3`), track x 420-1700 (0-3 s, 426.67 px per second), rows at top 500, 576, 652; axis (`0 s` … `3 s`) at top 724; clock `.pc-clock` at x 1720, top 560.
- code: version A (t = 0):
  ```
  1  const a = await multiply(2, 2);
  2  const b = await multiply(3, 3);
  3  const c = await multiply(4, 4);
  ```
  version B (13.44, cross-fade 0.35s):
  ```
  1  const [a, b, c] = await Promise.all([
  2      multiply(2, 2), multiply(3, 3), multiply(4, 4),
  3  ]);
  ```
- shots:
  - 0.0-2.8: kicker `await en Promise.all`. "na elkaar" (0.56): wash on the three `await`s (off 2.8).
  - 2.8-9.4: "drie pizza's" (3.97): the timeline card fades up with labels and axis. "na elkaar" (4.88): sequential bars fill one after the other (row 1 0-1 s at 4.88-5.48, row 2 1-2 s at 5.48-6.08, row 3 2-3 s at 6.08-6.68), bar text `pizza`; now-line follows. "drie keer zo lang" (8.08-8.72): clock `3,0 s` at 8.72.
  - 9.4-13.4: "elkaar niet nodig" (10.40-11.24): hold.
  - 13.4-end: "promise punt all" (13.44): version B; wash on `Promise.all`. The sequential bars become ghosts (0.4s) and three new solid bars 0-1 s appear (15.0) and fill together 15.40-15.72 ("tegelijk"); clock swaps to `1,0 s` with a `ts-mark` at 15.72. Hold.

## Frame 16 — Samenvatting

- id: 16-samenvatting
- duration: 15.25s
- transition_in: crossfade
- sfx: pop@1.44, pop@4.72, pop@8.28, pop@11.44
- voiceover: "Samengevat: een async functie geeft altijd een promise terug. Await wacht op een promise en geeft de waarde. Wie await gebruikt, moet async zijn. En met try en catch vang je de fouten op."
- focal: four rows: code term left, meaning right.
- layout: exactly like `../ts-promises/compositions/frames/11-samenvatting.html` (copy its recap layout and motion, including the row hairlines). Kicker `Samenvatting`. Heading (`.ts-statement`, 56px) at left 80, top 190: `async en await`. Rows from top 340, 110 apart: chip x 80 (26px mono), statement x 560 (Inter 500 40px):
  1. `async function` → `geeft altijd een promise terug`
  2. `await` → `wacht op een promise en geeft de waarde`
  3. `await` in een functie → `die functie moet async zijn` (chip text `await → async`)
  4. `try { } catch { }` → `vangt de fouten op` (thin 4px red left bar on this chip; the only red)
- shots:
  - 0.0-1.4: kicker (0.1), heading fades up at 0.2.
  - 1.4-end: "async functie" (1.44): row 1; "Await" (4.72): row 2; "Wie await gebruikt" (8.28): row 3; "try" (11.44): row 4. Each row: chip and statement fade up together (0.5s, y 16 → 0). Hold to the end.
