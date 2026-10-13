---
format: 1920x1080
duration: 205s
mode: autonomous
message: "In de Todo App blijft de lijst in App; InputView stuurt een nieuwe todo naar boven via onAddTodo(todo), en TodoItem meldt via onDelete() dat hij weg moet, waarna App met de index filtert."
arc: how-to-process
audience: "Studenten webframeworks die props, useState, lijsten en een eerste callback-prop kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series as `react-child-parent` (direct predecessor: read its frames in `../react-child-parent/compositions/frames/` for the closest look, e.g. `02-square.html` for a code frame, `12-de-klik.html` for a flow diagram, `13-samenvatting.html` for the summary), `react-usefetch`, `react-usestate`, `react-useeffect`, `react-array-state`, `react-props`. Style **TS light**. Source of truth: `frame.md`. Reference frame: `../react-usefetch/compositions/frames/02-fetch.html`: copy its whole `<style>` block (font-faces, `:root` `--ts-*` tokens and every `ts-*` class) **verbatim**, its `typeLine` / `washOn` / `washOff` helpers, and its structure (white `ts-bg` clip on track 0, `ts-stage` clip on track 1, one paused GSAP timeline registered on `window.__timelines["<composition-id>"]`, `tl.set({}, {}, DUR)` at the end). For a cursor click copy how `../react-usefetch/compositions/frames/09-vernieuwen.html` uses the oversized cursor; for diagrams look at `../react-usefetch/compositions/frames/01-hook.html` and `14-samenvatting.html`.
- **Ground:** white `#FFFFFF` full-duration background clip. **Colour roles:** ink `#1E293B` text, `#475569` secondary, `#94A3B8` muted; panels `#F1F5F9`, hairlines `#E2E8F0`. **One accent: TypeScript blue `#3178C6`** (dark `#235A97`, tint `#EAF2FB`, wash `rgba(49,120,198,0.12)`). Red `#D14343` only thin and sparing for what goes wrong; never a red and a blue key moment at the same time.
- **Type:** Inter for everything that is not code; JetBrains Mono for code, chips, tags. Hero word Inter 700 ~168px, tracking -0.035em. Statements Inter 500/700 48-64px. Readable text ≥ 27px.
- **Kicker** at (80, 84): 28×4 blue bar + Inter 600 22px uppercase blue, tracking 0.14em. Reveal: bar scaleX 0→1 (0.35s), text fades/slides 8px (0.4s), at t ≈ 0.1-0.2.
- **Code surface** (left, x 80, width 1060, top 170, height ≤ 720, bottom ≤ 890): light panel, title bar with file name (`App.tsx` / `InputView.tsx` / `TodoItem.tsx`), status bar, line numbers, JetBrains Mono 26px / 38px. Code types on with a caret stepping per character (`typeLine`). Highlight = blue wash; the fix / key line = 2px blue box radius 6 (`ts-mark`); the wrong line = 2px red box (`ts-mark--wrong`). Lines that already existed in an earlier frame are present from the start (static HTML), only new code types on. A removed line: red strike + fade to 35% + collapse its row height to 0 (0.4s, power2.inOut) so later rows slide up.
- **The Todo App (the running example).** Drawn simply inside the `scherm` card (label `scherm` at (1236, 186), card x 1236, y 232, 604 wide; height may grow to ~340 when needed, never below y 580 if a chip row sits under it): a heading `Todo List` (Inter 700 28px ink), an input field (white, 1px `#E2E8F0`, radius 6, height 52, Inter 24px ink text, a 2px blue caret while typing, placeholder none) next to an `Add Todo` button (`ts-btn`, height 52), then the list: `ts-li` rows (blue dot + text, Inter 24px) with on the right of each row a small neutral `Delete` button (white, 1px hairline, radius 6, Inter 500 18px `#475569`, height 36, padding 0 14px). Todo texts, always in this order: `Was ophangen`, `Hond uitlaten`, `Melk kopen` (the one that gets added). Typing into the field: characters appear one by one (deterministic, per char 0.05-0.08s). Adding: the new row slides in (y 10→0, opacity). Deleting: the row fades out and collapses its height (0.4s power2.inOut), the rows below slide up.
- **Component outlines:** to show "this part is a component", draw a thin outline (1px `#94A3B8`, radius 10, 8px around the part) with a tiny mono label (18px, `#64748B`, on a white background patch on the top edge) like `InputView`, `TodoItem`, `App`.
- **Chips** (`ts-chip`): mono 24px; per-square value chips may be smaller (mono 22px, height 44). State chip label like `selected` / `selectedIndex` via `ts-chip-key`. Value change: old value slides up and out, new one slides in from below (0.25s each, overflow hidden on the value span). New / key chip = `ts-chip--new` (blue tint + blue border). Unwanted = `ts-chip--unwanted` (red 2px border).
- **Diagrams** (component tree): nodes are `#F1F5F9` panels with hairline, radius 12, label `App` / `Square` in JetBrains Mono 26px 500 ink; connectors 2px `#94A3B8` lines (SVG), small solid arrowheads; the key node or line turns blue. A travelling "event" dot: 14px blue circle moving along a connector (power2.inOut, 0.6-0.8s).
- **Cursor**: `compositions/components/oversized-cursor.html` (copy the markup/usage pattern from the usefetch frame 09). Moves in with power3.out (~0.5s), click = scale 0.96 → 1 dip (0.15s) + blue 20% ripple circle on the target expanding and fading (0.45s). The worker does NOT place sfx (the orchestrator adds sfx from the `sfx:` line in index.html).
- **Motion:** calm `power3.out` settles, small offsets (10-20px), no bounce / overshoot / elastic, holds stand still. Every reveal on the spoken word that names it (times below are seconds from frame start = voice start). Never show something before the voice names it. Scenes fade out via the index transitions; the frame itself does not fade out.
- **Layout:** kicker (80, 84); code surface left; right column x 1236-1840; nothing important below y ≈ 880 (caption band 900-1080).
- **Negative list:** no logos, decorative shapes, coloured blocks behind text, gradients, glow, heavy shadows, dark code surfaces, serif fonts, real browser / VS Code chrome, em-dashes in visible text, `Math.random` / `Date.now`, breathing / drift / camera push.
- **Code style (course TypeScript):** arrow components, 2-space indent, `interface InputViewProps` / `interface TodoItemProps`, destructured props `({ onAddTodo }: InputViewProps)`, `useState<string[]>([])`, `useState<string>("")`, `onAddTodo: (todo: string) => void`, `onDelete: () => void`. Code panels with 17+ rows use JetBrains Mono 24px / 35px. A fold marker `⋯` (`#94A3B8`) stands for code shown in an earlier frame.
- **Node labels in diagrams** are component names in JetBrains Mono: `App`, `InputView`, `TodoItem`.

## Frame 1 — Hook: de Todo App

- id: 01-hook
- duration: 15.19s
- transition_in: cut
- status: animated
- voiceover: "Een todo app. Je typt een taak, klikt op Add Todo, en ze verschijnt in de lijst. Klik je op Delete, dan verdwijnt ze weer. Achter de schermen praten twee child components met hun parent. Telkens via een callback."
- focal: a centred, larger Todo App mock (white card, hairline, radius 12, x 560-1360, y 170-640), then two hero words.
- sfx: pop@0.16, typing@1.6, click-soft@3.4, pop@4.68, click-soft@6.7, whoosh-short@7.44, pop@10.96, pop@11.68, whoosh-short@13.0
- shots:
  - 0.0-1.4: kicker `Todo App`. "todo app" (0.16): the app card fades in centred: heading `Todo List`, input + `Add Todo`, two rows `Was ophangen`, `Hond uitlaten` each with a Delete button. Scale everything ~1.2x vs the scherm card (input 400 wide, Inter 28px).
  - 1.4-5.9: "typt een taak" (1.60): `Melk kopen` types into the input (1.60-2.60). Cursor enters at 2.4, clicks `Add Todo` at 3.4 ("Add Todo" 3.28). "verschijnt" (4.68): the input clears and a third row `Melk kopen` slides in.
  - 5.9-8.6: "Delete" (6.56): cursor moves to the Delete button of `Hond uitlaten` and clicks at 6.7; "verdwijnt" (7.44): that row fades out and collapses. Cursor fades out at 8.2.
  - 8.6-12.5: "twee child components" (10.00/10.96): a component outline labelled `InputView` draws around the input + button at 10.96, and outlines labelled `TodoItem` around each list row at 11.1 (stagger 0.08). "parent" (11.68): an outline `App` around the whole card content.
  - 12.5-end: "callback" (13.72): at 13.0 the card (with outlines) slides up 140px and dims to 0.35 (0.6s power3.out); at 13.72 two hero words land side by side centred at y ≈ 640: `onAddTodo` and `onDelete` (Inter 700 120px, tracking -0.035em, 80px gap), a 6px blue bar wipes in under each (stagger 0.15). Hold.

## Frame 2 — App en de lijst

- id: 02-app
- duration: 11.51s
- transition_in: crossfade
- status: animated
- voiceover: "We beginnen bij App. Die houdt de lijst bij in een state todos: een array van strings, standaard leeg. Met map maken we voor elke todo een list item."
- focal: `App.tsx` with `todos` state and the map; right: chip `todos` and scherm card with the list.
- sfx: typing@0.88, typing@3.32, pop@3.6, typing@7.52, pop@9.6
- code (App.tsx, 14 rows):
  ```
  1  const App = () => {
  2    const [todos, setTodos] = useState<string[]>([]);
  3
  4    return (
  5      <div>
  6        <h1>Todo List</h1>
  7        <ul>
  8          {todos.map((todo, index) => (
  9            <li key={index}>{todo}</li>
  10         ))}
  11       </ul>
  12     </div>
  13   );
  14 };
  ```
  Status bar `App · todos`.
- shots:
  - 0.0-3.2: kicker `De parent: App`. Panel in at 0.2. "App" (0.88): lines 1, 4, 5, 6, 12, 13, 14 type (shell), wash on `App`.
  - 3.2-7.2: "state todos" (3.32/3.60): line 2 types; wash `todos` at 3.60; right chip at (1236, 580): key `state` + `todos: []` at 3.60. "array van strings" (4.80): wash moves to `string[]`. "leeg" (6.48): wash moves to `([])`.
  - 7.2-end: "map" (7.52): lines 7-11 type (per 0.014); wash on `todos.map` at 8.0. "list item" (9.60): wash on line 9 `<li key={index}>{todo}</li>`; scherm label + card fade in at 9.60 with heading `Todo List` and two rows `Was ophangen`, `Hond uitlaten` (NO input, NO Delete buttons yet), and the chip value swaps to `["Was ophangen", "Hond uitlaten"]` (use mono 22px so it fits in 604px). Hold.

## Frame 3 — InputView

- id: 03-inputview
- duration: 13.83s
- transition_in: push-slide
- status: animated
- voiceover: "Het invoerveld zetten we in een eigen component: InputView. Die heeft zijn eigen state: input value. Het input veld toont die waarde, en bij elke on change zetten we de nieuwe tekst in de state."
- focal: `InputView.tsx`, a controlled input; right: scherm input that the viewer sees being typed into, synced with chip `inputValue`.
- sfx: typing@2.0, typing@5.16, pop@5.88, typing@7.2, typing@10.0, typing@11.3
- code (InputView.tsx, 11 rows):
  ```
  1  const InputView = () => {
  2    const [inputValue, setInputValue] = useState<string>("");
  3
  4    return (
  5      <div>
  6        <input type="text" value={inputValue}
  7          onChange={(e) => setInputValue(e.target.value)} />
  8        <button>Add Todo</button>
  9      </div>
  10   );
  11 };
  ```
  Status bar `InputView · inputValue`.
- shots:
  - 0.0-4.0: kicker `Een eigen component`. "eigen component: InputView" (2.00/3.12): lines 1, 4, 5, 8, 9, 10, 11 type (shell) from 2.0; wash on `InputView` at 3.12. Scherm label + card (height ~150: just the input field + `Add Todo` button, inside an outline labelled `InputView`) fade in at 3.12.
  - 4.0-6.9: "eigen state: input value" (5.16/5.88): line 2 types from 5.16; wash on `inputValue` at 5.88; chip at (1236, 440): key `state` + `inputValue: ""` at 5.88.
  - 6.9-9.9: "input veld toont die waarde" (7.20/8.56): line 6 types from 7.20; wash on `value={inputValue}` at 8.56.
  - 9.9-end: "on change" (10.00): line 7 types (per 0.012); wash on `onChange` at 10.24. "nieuwe tekst in de state" (11.32-12.44): `Melk` types into the scherm input char by char at 11.32, 11.52, 11.72, 11.92 and the chip value follows each char (`"M"`, `"Me"`, `"Mel"`, `"Melk"`, simple text swap per char). Hold.

## Frame 4 — Waarom in InputView?

- id: 04-waarom
- duration: 12.39s
- transition_in: crossfade
- status: animated
- voiceover: "Waarom staat input value in InputView, en niet in App? Omdat enkel InputView moet weten wat je aan het typen bent. App heeft pas iets nodig als de todo echt toegevoegd wordt."
- focal: a two-node diagram (App above, InputView below) next to a statement.
- sfx: pop@0.92, pop@3.52, pop@4.64, pop@10.4
- layout: no code. Left (x 80-1000): statement. Right: App node x 1200, y 190, 560×170 (label `App`, chip `todos` inside); InputView node x 1200, y 520, 560×230 (label `InputView`, a small input showing `Melk k` + caret, chip `inputValue: "Melk k"` under it); connector between them 2px `#94A3B8`.
- shots:
  - 0.0-3.4: kicker `Waar staat de state?`. "input value in InputView" (0.92/2.16): InputView node fades in at 0.92 with its chip (ts-chip--new at 2.16). "niet in App?" (3.52): App node fades in above with its `todos` chip, connector draws.
  - 3.4-7.9: "enkel InputView moet weten wat je aan het typen bent" (4.24-7.20): statement Inter 500 56px ink at (80, 300) in two lines `Enkel InputView moet` / `weten wat je typt.` fades in at 4.24; 6px blue underline wipes under `Enkel InputView` at 4.64.
  - 7.9-end: "App heeft pas iets nodig" (7.92): second statement Inter 400 32px ink-soft at (80, 470): `App heeft pas iets nodig als de todo echt toegevoegd wordt.` (max-width 860, wraps to 2 lines) at 7.92. "toegevoegd" (10.40): the `todos` chip in App gets a blue outline (ts-chip--new). Hold.

## Frame 5 — Het probleem

- id: 05-probleem
- duration: 12.15s
- transition_in: crossfade
- status: animated
- voiceover: "Maar daar zit het probleem. De lijst met todos staat in App. InputView kan die state niet aanpassen. Hij moet dus aan App kunnen laten weten: hier is een nieuwe todo."
- focal: same two-node diagram, centred, with a failed upward arrow.
- sfx: pop@2.32, whoosh-short@4.72, pop@6.24, pop@9.64
- layout: App node x 610, y 180, 700×170 with chip `todos: string[]`; InputView node x 610, y 560, 700×220 with input `Melk kopen` + `Add Todo` button. Down connector between them (2px `#94A3B8`).
- shots:
  - 0.0-2.2: kicker `Het probleem`. Diagram fades in at 0.2.
  - 2.2-4.6: "lijst met todos staat in App" (2.32/4.00): blue wash on the App chip at 2.32; App node border blue at 4.00.
  - 4.6-7.4: "InputView kan die state niet aanpassen" (4.72/6.56): at 4.72 the blue fades back to neutral; an upward arrow (2px) draws from InputView toward App, 80px right of the connector, at 4.72 and stops 40px short of App; at 6.24 it turns red `#D14343` and a small red cross appears at its tip.
  - 7.4-end: "laten weten: hier is een nieuwe todo" (8.88-10.72): the red arrow fades to 0 at 8.6; a ts-tag (blue-tint pill) `hier is een nieuwe todo: "Melk kopen"` pops to the right of the InputView node top edge at 9.64 (place it at x 1340, y 560; must stay ≤ 1840). Hold.

## Frame 6 — onAddTodo

- id: 06-onaddtodo
- duration: 13.67s
- transition_in: blur-crossfade
- status: animated
- voiceover: "Daarvoor krijgt InputView een callback als prop: on add todo. Het type is een functie die een todo van het type string krijgt, en niets teruggeeft. Deze callback heeft dus wel een parameter."
- focal: `InputView.tsx` gains `interface InputViewProps { onAddTodo: (todo: string) => void; }`.
- sfx: typing@3.32, pop@3.92, pop@6.4, pop@10.56, pop@12.08
- code (InputView.tsx): START (4 rows, static): `const InputView = () => {` / `  const [inputValue, setInputValue] = useState<string>("");` / `  ⋯` / `};`. END (8 rows):
  ```
  1  interface InputViewProps {
  2    onAddTodo: (todo: string) => void;
  3  }
  4
  5  const InputView = ({ onAddTodo }: InputViewProps) => {
  6    const [inputValue, setInputValue] = useState<string>("");
  7    ⋯
  8  };
  ```
  Panel height ~460 (fits 8 rows).
- right column: label `props` (ts-label) at (1236, 186).
- shots:
  - 0.0-3.2: kicker `Een callback als prop`. Panel at 0.2 with START. "callback als prop" (1.76/2.56): 4 new rows grow at the top (2.6, 0.4s).
  - 3.2-5.5: "on add todo" (3.32): lines 1-3 type; wash on `onAddTodo` at 3.92; at 3.92 `{ onAddTodo }: InputViewProps` types into line 5 replacing `()` → `({ onAddTodo }: InputViewProps)`. Right chip at (1236, 232) `onAddTodo: (todo: string) => void` (ts-chip--new) at 3.92.
  - 5.5-9.8: "functie die een todo van het type string krijgt" (5.76/7.64): wash on `(todo: string)` at 6.40. "niets teruggeeft" (8.76): wash moves to `void` at 9.04.
  - 9.8-end: "wel een parameter" (10.08-12.08): comparison under the chip: at 10.56 a muted chip `onSelect: () => void` at (1236, 330) with a tiny label `vorige video: Square` above it (Inter 600 18px uppercase muted; label at (1236, 316), chip at (1236, 340)); at 12.08 a 4px blue underline wipes under `todo: string` inside the onAddTodo chip, and Inter 500 30px ink `Deze callback krijgt een waarde mee.` at (1236, 440) (max-width 604, may wrap). Hold.

## Frame 7 — handleAdd

- id: 07-handleadd
- duration: 17.51s
- transition_in: crossfade
- status: animated
- voiceover: "Klik je op de knop, dan loopt handle add. Eerst kijken we of de invoer niet leeg is: trim haalt de spaties weg. Is er tekst, dan roepen we on add todo aan, met de input value. En daarna maken we het invoerveld weer leeg met set input value."
- focal: the `handleAdd` function in `InputView.tsx` (24px / 35px, 17 rows).
- sfx: click-soft@0.5, typing@0.64, typing@1.76, typing@4.24, pop@6.16, typing@8.96, typing@13.68, whoosh-short@15.92
- code (InputView.tsx, final, 17 rows):
  ```
  1  const InputView = ({ onAddTodo }: InputViewProps) => {
  2    const [inputValue, setInputValue] = useState<string>("");
  3
  4    const handleAdd = () => {
  5      if (inputValue.trim() !== "") {
  6        onAddTodo(inputValue);
  7        setInputValue("");
  8      }
  9    };
  10
  11   return (
  12     <div>
  13       <input ⋯ />
  14       <button onClick={handleAdd}>Add Todo</button>
  15     </div>
  16   );
  17 };
  ```
  Rows 1, 2, 3, 11-17 present from the start (row 14 starts as `      <button>Add Todo</button>`), rows 4-10 start at height 0 and grow at 1.6. Status bar `InputView · handleAdd`.
- right column: scherm card (label at 186, card 232, height ~150) with the input showing `Melk kopen` and the `Add Todo` button, present from 0.2. Chip `inputValue: "Melk kopen"` at (1236, 420) from 0.2.
- shots:
  - 0.0-1.6: kicker `handleAdd`. Cursor clicks `Add Todo` in the scherm at 0.5 (ripple). "knop" (0.64): ` onClick={handleAdd}` types into row 14 after `<button`.
  - 1.6-3.0: "handle add" (1.76): rows 4-10 grow (1.6, 0.4s); lines 4 and 9 type from 1.76; wash on `handleAdd` at 2.24.
  - 3.0-7.6: "niet leeg" (4.24): lines 5 and 8 type; "trim" (5.92): wash on `.trim()` in line 5; at 6.16 a small demo at (1236, 520) in mono 22px: `"  ".trim()  →  ""` (ink, arrow ink-soft) fades in.
  - 7.6-12.4: "onAddTodo aan, met de input value" (8.96/11.44): line 6 types from 8.96; wash on `onAddTodo(inputValue)` at 10.56; the demo fades out at 8.8.
  - 12.4-end: "invoerveld weer leeg met set input value" (13.68/15.20): line 7 types from 15.20; at 15.92 the scherm input text clears (fade) and the chip value swaps to `""`; blue `ts-mark` box around `setInputValue("")` at 15.92. Hold.

## Frame 8 — addTodo in App

- id: 08-addtodo
- duration: 15.35s
- transition_in: push-slide
- status: animated
- voiceover: "In App schrijven we de functie add todo. Die krijgt de nieuwe todo binnen, en maakt met de spread operator een nieuwe array: alle oude todos, plus de nieuwe. Die functie geven we aan InputView mee als on add todo."
- focal: `addTodo` with the spread in `App.tsx`; right: the old + new array built as chips.
- sfx: typing@1.84, pop@4.16, typing@5.68, pop@8.24, pop@9.68, typing@11.76, pop@13.76
- code (App.tsx, final 15 rows):
  ```
  1  const App = () => {
  2    const [todos, setTodos] = useState<string[]>([]);
  3
  4    const addTodo = (todo: string) => {
  5      setTodos([...todos, todo]);
  6    };
  7
  8    return (
  9      <div>
  10       <h1>Todo List</h1>
  11       <InputView onAddTodo={addTodo} />
  12       <ul>⋯</ul>
  13     </div>
  14   );
  15 };
  ```
  Rows 1, 2, 3, 8, 9, 10, 12-15 present; rows 4-7 grow at 1.6, row 11 grows at 11.5. Status bar `App · addTodo`.
- right column: label `nieuwe array` (ts-label) at (1236, 186) appears at 6.88.
- shots:
  - 0.0-3.0: kicker `addTodo in App`. "functie add todo" (1.84/2.24): rows grow at 1.6; lines 4 and 6 type from 1.84; wash `addTodo` at 2.24.
  - 3.0-5.6: "nieuwe todo binnen" (4.16/4.40): wash on `todo: string` at 4.16.
  - 5.6-10.4: "spread operator" (5.68): line 5 types; wash on `...todos` at 6.08. "nieuwe array" (6.88): label + an open bracket `[` (mono 40px muted) at (1236, 232). "alle oude todos" (8.24): chips `"Was ophangen"` and `"Hond uitlaten"` stacked at (1276, 232) and (1276, 300). "plus de nieuwe" (9.68): chip `"Melk kopen"` (ts-chip--new) at (1276, 368), closing bracket `]` after it at 9.9; wash moves to `todo` (the last one in `[...todos, todo]`) at 9.68.
  - 10.4-end: "geven we aan InputView mee als on add todo" (11.76/13.76): line 11 types from 11.76 (`<InputView onAddTodo={addTodo} />`); blue `ts-mark` box around `onAddTodo={addTodo}` at 13.76. Hold.

## Frame 9 — Toevoegen, stap voor stap

- id: 09-flow-add
- duration: 18.31s
- transition_in: crossfade
- status: animated
- voiceover: "Wat gebeurt er dus? Je typt melk kopen, en klikt op Add Todo. Handle add roept on add todo aan, met melk kopen. Dat is eigenlijk add todo uit App. App zet de nieuwe array in de state, rendert opnieuw, en de todo verschijnt in de lijst."
- focal: the add round trip in a diagram: InputView sends `"Melk kopen"` up, App re-renders the list.
- sfx: typing@2.0, click-soft@3.95, pop@5.04, whoosh-short@6.52, pop@10.16, pop@13.64, pop@14.72, pop@16.04
- layout: App node x 520, y 160, 880×200: label `App`; inside a chip `todos` with value `["Was ophangen", "Hond uitlaten"]` (mono 20px) and, right of it, room for a line `addTodo("Melk kopen")`. InputView node x 160, y 520, 700×240: label `InputView`, input field + `Add Todo` button. List node x 1060, y 520, 700×280: label `ul` (mono, muted) with rows `Was ophangen`, `Hond uitlaten` (Inter 24px, blue dots, no Delete buttons). Connectors: App → InputView (labelled `onAddTodo` mono 18px muted) and App → list (labelled `todos.map`), 2px `#94A3B8`.
- shots:
  - 0.0-1.9: kicker `Een todo toevoegen`. Diagram fades in at 0.2.
  - 1.9-4.9: "typt melk kopen" (2.00/2.48): `Melk kopen` types into the input from 2.0 (per 0.06). Cursor enters at 3.2, clicks `Add Todo` at 3.95 ("Add Todo" 3.84).
  - 4.9-8.9: "Handle add" (5.04): ts-tag `handleAdd()` pops above the InputView node top-right at 5.04. "roept on add todo aan, met melk kopen" (6.28/8.08): ts-tag `onAddTodo("Melk kopen")` pops at 6.28 next to the connector; a blue 14px dot travels UP the App→InputView connector at 6.52 (0.7s). The input clears at 8.4.
  - 8.9-11.8: "Dat is eigenlijk add todo uit App" (9.56/10.16): inside App the line `addTodo("Melk kopen")` (mono 22px, blue wash) fades in at 10.16; App node border blue at 11.20.
  - 11.8-15.0: "nieuwe array in de state" (12.60/13.64): chip value swaps to `[..., "Melk kopen"]` at 13.64 (ts-chip--new). "rendert opnieuw" (14.24/14.72): render-tag `render #2` (ts-tag) on App's top-right edge at 14.72. App border back to hairline at 14.8.
  - 15.0-end: "verschijnt in de lijst" (16.04): a blue dot travels DOWN the App→list connector at 15.4 (0.6s); the row `Melk kopen` slides into the list at 16.04. Hold.

## Frame 10 — TodoItem

- id: 10-todoitem
- duration: 15.99s
- transition_in: blur-crossfade
- status: animated
- voiceover: "Nu de delete functie. Elk list item wordt een eigen component: TodoItem. Die krijgt twee props: de todo zelf, om te tonen, en on delete, een functie zonder parameters. De Delete knop roept on delete aan."
- focal: `TodoItem.tsx` with `todo` and `onDelete` props.
- sfx: pop@0.4, pop@4.56, typing@6.4, typing@7.28, typing@9.68, typing@12.96, pop@14.28
- code (TodoItem.tsx, 12 rows):
  ```
  1  interface TodoItemProps {
  2    todo: string;
  3    onDelete: () => void;
  4  }
  5
  6  const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  7    return (
  8      <li>
  9        {todo} <button onClick={onDelete}>Delete</button>
  10     </li>
  11   );
  12 };
  ```
  Status bar `TodoItem · props`.
- right column: scherm card (label 186, card 232, height ~250) with heading `Todo List` and three rows `Was ophangen`, `Hond uitlaten`, `Melk kopen`, each with a Delete button.
- shots:
  - 0.0-2.0: kicker `De delete functie`. "delete functie" (0.40): scherm card fades in at 0.40 (rows + Delete buttons).
  - 2.0-6.0: "Elk list item" (2.16/2.40): rows get a light blue wash, one by one (stagger 0.1) at 2.16, fading back at 3.4. "TodoItem" (4.56): component outlines labelled `TodoItem` around each row (stagger 0.08); code panel fades in at 4.4 and lines 7, 8, 10, 11, 12 type (shell) from 4.56.
  - 6.0-9.2: "twee props" (6.12/6.40): lines 1, 4 type at 6.40 and line 6 types right after; "de todo zelf" (7.28): line 2 types, wash `todo: string` at 7.60. "om te tonen" (8.48): `{todo}` types into line 9 with wash.
  - 9.2-12.7: "on delete" (9.68/10.08): line 3 types from 9.68, wash `onDelete`; "zonder parameters" (11.36/11.68): wash moves to `() => void`.
  - 12.7-end: "Delete knop" (12.96): ` <button onClick={onDelete}>Delete</button>` types into line 9 after `{todo}`; at 14.28 blue `ts-mark` box around `onClick={onDelete}`; in the scherm the Delete buttons get a 2px blue outline at 14.28 (stagger 0.06). Hold.

## Frame 11 — deleteTodo met filter

- id: 11-deletetodo
- duration: 15.43s
- transition_in: push-slide
- status: animated
- voiceover: "In App komt de functie delete todo. Die krijgt een index, en filtert de array. We houden elke todo waarvan de index niet gelijk is aan de index die we willen verwijderen. Het resultaat is een nieuwe array, zonder die ene todo."
- focal: `deleteTodo` with `filter((_, i) => i !== index)`; right: a visual filter over the array with `index = 1`.
- sfx: typing@1.52, pop@3.52, typing@4.32, pop@7.92, pop@8.2, pop@8.48, whoosh-short@12.04
- code (App.tsx, 11 rows):
  ```
  1  const App = () => {
  2    const [todos, setTodos] = useState<string[]>([]);
  3
  4    const addTodo = (todo: string) => { ⋯ };
  5
  6    const deleteTodo = (index: number) => {
  7      setTodos(todos.filter((_, i) => i !== index));
  8    };
  9
  10   return ( ⋯ );
  11 };
  ```
  Rows 1-5, 9-11 present; rows 6-8 (+ the empty row 9) grow at 1.4. Status bar `App · deleteTodo`.
- right column (x 1236-1840): label `todos` (ts-label) at (1236, 186). Three rows at y 232 / 300 / 368: a mono 20px muted index (`0`, `1`, `2`) at x 1236, then a chip `"Was ophangen"`, `"Hond uitlaten"`, `"Melk kopen"` at x 1276. Present from 4.32.
- shots:
  - 0.0-3.4: kicker `deleteTodo in App`. "delete todo" (1.52/2.00): rows grow; lines 6 and 8 type from 1.52; wash `deleteTodo` at 2.00.
  - 3.4-5.5: "een index" (3.52): wash on `index: number`; a ts-tag `index = 1` right-aligned at the top of the column (right edge 1840, y 180). "filtert de array" (4.32): line 7 types (per 0.018); the right-column rows fade in at 4.32; wash on `filter` at 5.0.
  - 5.5-10.8: "elke todo waarvan de index niet gelijk is" (5.60-8.16): wash on `i !== index` at 7.92. Next to each chip (x ≈ 1600) a mono 20px result appears at 7.92 / 8.2 / 8.48: `0 !== 1 ✓`, `1 !== 1 ✗`, `2 !== 1 ✓` (✓ in blue, ✗ in ink-soft). At 8.48 the row `"Hond uitlaten"` dims to 0.35 with line-through (ts-chip--struck).
  - 10.8-end: "nieuwe array, zonder die ene todo" (12.04/13.84): label `nieuwe array` (ts-label) at (1236, 470) and two chips `"Was ophangen"`, `"Melk kopen"` (ts-chip--new) at (1236, 510) and (1236, 578) slide in at 12.04 (stagger 0.12). Hold.

## Frame 12 — De callback in de map

- id: 12-map-callback
- duration: 15.51s
- transition_in: crossfade
- status: animated
- voiceover: "In de map geeft App elke TodoItem zijn eigen callback mee: een arrow function die delete todo aanroept, met de index van dat item. Zo hoeft TodoItem zijn eigen index niet te kennen. Hij zegt enkel: ik wil verwijderd worden."
- focal: `onDelete={() => deleteTodo(index)}` inside the map; TodoItem only knows `todo` and `onDelete`.
- sfx: typing@1.6, typing@4.48, pop@7.2, pop@7.4, pop@7.6, pop@11.12, pop@13.12
- code (App.tsx, 14 rows):
  ```
  1  const App = () => {
  2    ⋯
  3    return (
  4      <div>
  5        <h1>Todo List</h1>
  6        <InputView onAddTodo={addTodo} />
  7        <ul>
  8          {todos.map((todo, index) => (
  9            <TodoItem key={index} todo={todo}
  10             onDelete={() => deleteTodo(index)} />
  11         ))}
  12       </ul>
  13     </div>
  14   );
  15 };
  ```
  START: row 9 reads `          <li key={index}>{todo}</li>` and row 10 has height 0. Status bar `App · onDelete`.
- right column: scherm card (label 186, card 232, height ~250) with the three rows + Delete buttons from 0.3. Under it (y 580-860) a component box (diagram node 604×200) labelled `TodoItem` with label `props` (ts-label) and chips appearing later.
- shots:
  - 0.0-1.5: kicker `Elk zijn eigen callback`. "map" (0.40): wash on `todos.map((todo, index)`.
  - 1.5-4.3: "TodoItem" (1.60): row 9 `<li ...>` deletes backwards fast and `<TodoItem key={index} todo={todo}` types; "eigen callback" (3.20): row 10 grows.
  - 4.3-8.6: "arrow function die delete todo aanroept" (4.48/6.36): row 10 types `onDelete={() => deleteTodo(index)} />` from 4.48 (per 0.025); wash on `() => deleteTodo(index)` at 6.36. "index van dat item" (7.20): small ts-tags next to each Delete button in the scherm card: `deleteTodo(0)`, `deleteTodo(1)`, `deleteTodo(2)` at 7.2 / 7.4 / 7.6 (mono 18px, placed left of the Delete button or under the row; keep inside the card).
  - 8.6-12.6: "TodoItem zijn eigen index niet te kennen" (9.36/11.52): the TodoItem box fades in at 9.36 with chips `todo` and `onDelete` (plain); at 11.12 a third muted chip `index` appears struck-through at 35% (ts-chip--struck) to show TodoItem does not get it.
  - 12.6-end: "ik wil verwijderd worden" (13.12/14.00): ts-tag `onDelete()` (ts-chip--new style tag) pops inside the TodoItem box at 13.12; the `onDelete` chip gets a blue border at 13.12. Hold.

## Frame 13 — Verwijderen, stap voor stap

- id: 13-flow-delete
- duration: 15.51s
- transition_in: crossfade
- status: animated
- voiceover: "Klik je bij de tweede todo op Delete, dan roept TodoItem on delete aan. Die callback roept delete todo aan, met index één. Filter maakt een nieuwe array zonder die todo, App rendert opnieuw, en de todo is weg."
- focal: the delete round trip: TodoItem 1 sends `onDelete()` up, App runs `deleteTodo(1)`, the item disappears.
- sfx: click-soft@1.7, pop@3.84, whoosh-short@4.08, pop@6.24, pop@8.24, pop@11.24, pop@12.56, whoosh-short@13.84
- layout: App node x 460, y 160, 1000×210: label `App`; inside a row of three mini chips (mono 20px) `"Was ophangen"` `"Hond uitlaten"` `"Melk kopen"` with index labels 0 1 2 above them (mono 16px muted), and room for a line `deleteTodo(1)` on the right. Three TodoItem nodes 400×170 at y 560, x 160 / 760 / 1360: label `TodoItem`, the todo text (Inter 24px) and a Delete button. Connectors App → each TodoItem.
- shots:
  - 0.0-2.3: kicker `Een todo verwijderen`. Diagram in at 0.2. Cursor enters at 0.8 and clicks the Delete button of the middle TodoItem (`Hond uitlaten`) at 1.7 ("Delete" 1.60).
  - 2.3-5.0: "roept TodoItem on delete aan" (2.96/3.84): ts-tag `onDelete()` above the middle node at 3.84; a blue dot travels UP the middle connector at 4.08 (0.6s).
  - 5.0-8.8: "callback roept delete todo aan" (5.92/6.24): inside App the line `() => deleteTodo(1)` (mono 22px, blue wash) fades in at 6.24. "index één" (7.84/8.24): the `1` index label above the middle chip turns blue and the middle chip gets a blue border at 8.24.
  - 8.8-12.9: "Filter maakt een nieuwe array zonder die todo" (8.96/11.24): at 11.24 the middle mini chip strikes, fades and collapses; the third chip slides left next to the first; index labels update to 0 1. "App rendert opnieuw" (11.92/12.56): render-tag `render #3` on App's top-right edge at 12.56.
  - 12.9-end: "de todo is weg" (13.60/14.16): the middle TodoItem node and its connector fade out at 13.6 (0.4s); at 13.84 the left and right nodes slide to x 460 and 1060 (centred pair) and the connectors redraw to them (0.5s power3.inOut). Hold.

## Frame 14 — Samenvatting

- id: 14-samenvatting
- duration: 18.93s
- transition_in: blur-crossfade
- status: animated
- voiceover: "Kort samengevat: de lijst staat in App. InputView stuurt een waarde naar boven, met een callback met parameter. TodoItem meldt enkel dat er geklikt is, en App weet zelf welke index erbij hoort. De state blijft in de parent, en de children laten weten wat er gebeurt."
- focal: three summary rows left; a tree diagram right (App above, InputView and TodoItem below) with two blue upward arrows.
- sfx: pop@1.6, pop@3.2, whoosh-short@4.88, pop@5.92, pop@7.44, whoosh-short@8.24, pop@10.44, pop@13.28
- layout: left column x 80-1080: three rows at y 220 / 420 / 620: a mono 26px blue number + Inter 500 40px statement + optional second line Inter 400 28px ink-soft or a chip. Right column x 1180-1840: App node (x 1330, y 190, 360×130, chip `todos` inside), InputView node (x 1180, y 560, 300×120), TodoItem node (x 1540, y 560, 300×120); grey connectors App → each; plus two blue UP arrows (2px TS blue) from each child to App, offset 30px from the grey connectors.
- shots:
  - 0.0-1.4: kicker `Samenvatting`.
  - 1.4-3.1: "de lijst staat in App" (1.60/2.48): row 1 `De lijst staat in App.` at 1.60; App node + `todos` chip fade in at 2.48.
  - 3.1-7.3: "InputView stuurt een waarde naar boven" (3.20/4.88): row 2 `InputView stuurt een waarde naar boven` at 3.20; InputView node + connector at 3.20; the blue up arrow from InputView draws at 4.88 with label `onAddTodo(todo)` (mono 18px blue-dark) next to it. "callback met parameter" (5.92/6.40): chip `onAddTodo(todo)` (ts-chip--new) on row 2's second line at 5.92.
  - 7.3-13.0: "TodoItem meldt enkel dat er geklikt is" (7.44/9.24): row 3 `TodoItem meldt enkel een klik` at 7.44; TodoItem node + connector at 7.44; its blue up arrow draws at 8.24 with label `onDelete()`. "App weet zelf welke index erbij hoort" (10.44/12.36): row 3 second line mono 24px `() => deleteTodo(index)` with blue wash at 10.44.
  - 13.0-end: "De state blijft in de parent" (13.12/14.32): App node border turns blue at 13.28. "children laten weten wat er gebeurt" (15.12/16.64): hold still (no new element). Hold until the end.
