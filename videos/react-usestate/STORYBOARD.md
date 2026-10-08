---
format: 1920x1080
duration: 190s
mode: autonomous
message: "State is de waarde die je component onthoudt: pas je ze aan met setState, dan rendert React je component opnieuw."
arc: how-to-process
audience: "Studenten webframeworks die componenten, props en event handlers kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Third clip in the series after `react-array-state` and `react-useeffect`. Same design system (`frame.md`, Code editorial), same layout grammar, same voice. When in doubt, look at how `../react-useeffect/compositions/frames/*.html` and `../react-array-state/compositions/frames/*.html` solved it and do the same (code surface, kickers, chips, stamps, cursor).
- **Palette (frame.md, by role):** cream ground on every frame (tile half-step for content cards); ink for all text; warm navy ONLY on the code surface (syntax: coral keywords, amber function names/numbers, teal strings, cream@60% dim types); **coral = the one voltage per frame**: in this film it marks *the thing that is wrong or out of sync* (the plain variable, the screen that stays 0, the second `setCount(count + 1)` that does nothing extra, the input that still shows old text). Never two corals in one frame. In "solution" frames (5, 6, 9, 13) the voltage is the fix itself (`useState`, `prevCount => prevCount + 1`, `value={name}`).
- **Type by role:** EB Garamond display/headline for the frame's single statement and for the big counter numerals; Inter for labels and UI chrome; JetBrains Mono kickers (✱ coral spike, uppercase, e.g. `✱ ZO NIET`) and all code, chips and tags.
- **Recurring visual system:**
  - **`scherm` card** (right column): a tile card with a mono label `scherm` above it, standing in for the browser output. Inside: the rendered UI drawn plainly: a real-looking button (ink hairline, radius-md, Inter 600, the count as its label, ~44px), a `<p>` line in Inter, or an input field (hairline box, Inter, with a text caret). Same card position (x ≈ 1200–1840, y ≈ 200–520) in every frame that shows output, so the viewer always knows where to look for "what the user sees".
  - **`state` chip**: a small tile chip with mono label `state` and a value `count: 0` / `name: "Sam"`, sitting under the scherm card (y ≈ 580). This is "what React remembers". When state changes, the chip value flips (old slides up/out, new slides in, 0.25s).
  - **render tag**: mono `render #n` hairline pill (same as react-useeffect) that pulses on the scherm card's top edge whenever React re-renders.
  - **cursor**: the oversized-cursor component (`compositions/components/oversized-cursor.html`, as used in react-array-state frame 2) for every click and for clicking into the input; a click = cursor dip + a small ink ring ripple on the target.
- **Code surface:** same as the siblings: navy panel with title bar (`Counter.tsx` / `NameInput.tsx`) and status strip, JetBrains Mono 34–36px, line numbers, code types on with a stepping caret per character (code-typing mechanics), highlight = amber background wash rgba(232,165,90,0.24), the wrong line = coral rough box (svg path draw) or coral underline.
- **Motion grammar:** smooth long-tail `power3.out` settles, no bounce/overshoot; code arrives via type-on with caret; every reveal is cued to its spoken word (times below are seconds from the frame start = the voice start). Holds are still.
- **Layout:** kicker top-left at (80, 92); code surface left (x 80, ~1000–1060px wide, top ~190); right column x ≈ 1200–1840. Nothing important below y ≈ 900 (caption band).
- **Negative list:** no real browser chrome / VS Code activity bars (bare code surface only), no purple/blue gradients, no bokeh, no glow on content, no lazy breathing, no back-half camera push, no front-loading (code, chips and UI never appear before the VO names them), no screensaver drift, no `Math.random`.
- **Captions:** on; everything important stays in the top ~83%.

## Frame 1 — Een knop met een getal

- scene: A single big button centred on cream, labelled `0`. The cursor clicks it: 0 → 1 → 2 → 3. "Simpel?" holds. On "het belangrijkste concept van React" the button slides left/shrinks and the word "state." lands as an EB Garamond hero word on the right.
- voiceover: "Een knop met een getal. Je klikt, en het getal gaat omhoog. Simpel? Toch heb je daarvoor het belangrijkste concept van React nodig: state."
- duration: 9.96s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Curiosity + demonstration
- beat: calm → reveal

narrativeRole: Opens on the tiny interactive thing the whole film builds, and names the concept it needs.
keyMessage: Even a clicking counter needs React's core concept: state.

- blueprint: compose
- focal: the big counter button (ink hairline button, EB Garamond numeral ~180px inside)
- roles: button = foreground subject (centred, ~30% of frame) · oversized cursor = supporting actor · hero word "state." (EB Garamond, ~200px, italic) = the payoff · coral = a short coral underline under "state." only
- sfx: click-soft

Compose: locked static stage, centred.
Scene 1 (0.0–1.5s): cream ground + faint hairline grid; on "knop" (0.21s) the button settles in centred (power3.out, y 24→0); on "getal" (0.86s) the numeral `0` fades in inside it.
Scene 2 (1.5–4.4s): the cursor glides in from bottom-right and clicks on "klikt" (2.12s): button dips (scale 0.96→1, 0.15s), ink ring ripple; on "omhoog" (3.68s) the numeral steps 0→1 (old digit up/out, new in, 0.25s). Two more quick clicks at 3.95s and 4.2s → 2, 3; a tiny mono `+1` floats up each time.
Scene 3 (4.4–7.4s): "Simpel?" (4.44s): hold still, cursor parks. On "Toch" (5.65s) nothing yet.
Scene 4 (7.4–11.24s): on "belangrijkste concept" (7.49s) the button + cursor slide to the left third (x ≈ 520) and scale to 0.8; on "React" (8.71s) a mono label `react` appears top-right of the empty right side; on "state." (10.01s) the hero word "state." lands on the right (y 30→0, power3.out, 0.5s) and a coral underline draws beneath it (0.4s). Hold still.

## Frame 2 — De teller-component

- scene: Code surface types the Counter component: a `<button>` with `{count}` inside and an `onClick`. Right: the scherm card shows the rendered button `0`. Under it a mono goal note `doel: klik → +1`.
- voiceover: "We beginnen met een component met één knop. In de knop staat een teller. En telkens je op de knop klikt, moet die teller één omhoog gaan."
- duration: 9.24s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-teller.html
- type: setup
- persuasion: Concrete starting point
- beat: orientation

narrativeRole: Sets the example the next five frames build on: a button showing a counter that should go up on click.
keyMessage: A button that shows a counter and should +1 on every click.

- blueprint: compose
- focal: the code surface typing the Counter shell
- roles: code surface (navy, left ~58%) = foreground subject · scherm card with the rendered button `0` (right) = supporting · amber wash on `onClick` = highlight · coral: none in this frame (calm setup) except the mono goal arrow `+1` in coral
- sfx: typing

Compose: asymmetric 60/40, code left, scherm right (same as react-useeffect frame 2).
Code (Counter.tsx):
```
const Counter = () => {
  const handleClick = () => {
    // teller + 1 ... maar hoe?
  };

  return (
    <button onClick={handleClick}>{count}</button>
  );
}
```
Scene 1 (0.0–2.4s): kicker `✱ HET VOORBEELD`; on "component" (0.78s) the code surface enters (power3.out) with title bar `Counter.tsx`; lines 1 and 9 (shell) in place.
Scene 2 (2.4–4.5s): on "In de knop" (2.45s) lines 6–8 type on (`return ( <button …>{count}</button> );`); on "teller" (3.82s) `{count}` gets an amber wash; right column: label `scherm` + the scherm card fades in with the rendered button showing `0`.
Scene 3 (4.5–9.4s): on "telkens je op de knop klikt" (4.94s) lines 2–4 type on (the empty handleClick with the comment, comment in cream@60%); `onClick={handleClick}` gets an amber wash at 5.8s; on "één omhoog gaan" (7.36s) a mono note `doel: klik → +1` lands under the scherm card with a coral `+1`. Hold.

## Frame 3 — Een gewone variabele werkt niet

- scene: The code gets `let count = 0;` and `count = count + 1;` in the handler. The cursor clicks the button in the scherm card. A small `geheugen` readout beside the code shows `count = 1`, but the scherm card keeps showing `0`. Coral FOUT-style mismatch: `scherm: 0` vs `count: 1`.
- voiceover: "We moeten die waarde dus ergens bijhouden, en kunnen aanpassen. Met een gewone variabele lukt dat niet. Je klikt, de variabele wordt één… maar op je scherm blijft de teller gewoon op nul staan."
- duration: 12.52s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-gewone-variabele.html
- type: pain_point
- persuasion: The plausible wrong attempt, demonstrated
- beat: letdown

narrativeRole: Shows why a plain variable is not enough: the value changes but the screen does not (the course's "DEZE CODE IS FOUT" attempt).
keyMessage: Changing a plain variable does not update the screen.

- blueprint: compose
- focal: the mismatch between the variable's value (1) and the screen (0)
- roles: code surface (left) = foreground · scherm card with button `0` (right) = foreground subject in the second half · mono readout `count = 1` (small tile chip labelled `variabele`, under the scherm card) = supporting · coral rough box around the scherm button + coral `≠` between chip and card = the one voltage
- sfx: click

Compose: same 60/40 layout as frame 2 (continuity).
Code (Counter.tsx):
```
const Counter = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
  };

  return (
    <button onClick={handleClick}>{count}</button>
  );
}
```
Scene 1 (0.0–3.3s): kicker `✱ ZO NIET`; code from frame 2 is on screen; on "bijhouden" (1.44s) line 2 `let count = 0;` types on (lines below shift down, power3.out); on "aanpassen" (2.62s) line 5 `count = count + 1;` replaces the comment (type-on).
Scene 2 (3.3–6.0s): on "gewone variabele" (3.98s) `let count = 0;` gets an amber wash and a small mono tag `gewone variabele` at its right edge.
Scene 3 (6.0–8.8s): on "klikt" (6.36s) the cursor clicks the scherm button (dip + ripple); on "de variabele wordt één" (7.17s) a chip `variabele  count = 1` appears under the scherm card, its value stepping 0→1 at 8.0s.
Scene 4 (8.8–12.12s): on "maar op je scherm" (8.83s) the scherm button gets a coral rough box (svg path draw 0.5s); on "nul staan" (10.72s) a coral `≠` sits between the chip and the button and a mono note `scherm toont nog 0` appears. The button visibly stays `0`. Hold.

## Frame 4 — De functie opnieuw oproepen

- scene: The component is drawn as a function machine: `Counter()` → returns JSX → screen. On "Verandert de waarde" two places on the screen show the count (the button and a `<p>Je klikte 0 keer</p>`). On "opnieuw oproepen, met de nieuwe waarde" the machine runs again: `Counter()` call #2 with value 1 → both places update to 1.
- voiceover: "Wat je op je scherm ziet, is wat je component-functie teruggeeft. Verandert de waarde, dan moet alles wat die waarde toont mee veranderen. React moet je functie dus opnieuw oproepen, met de nieuwe waarde."
- duration: 12.68s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/04-opnieuw-oproepen.html
- type: product_intro
- persuasion: Mental model made visible
- beat: insight

narrativeRole: Builds the mental model: the screen is the function's return value, so new values need a new call.
keyMessage: To show a new value, React must call your component function again.

- blueprint: compose
- focal: the function-call pipeline `Counter()` → JSX → scherm
- roles: pipeline of three hairline tile nodes left→right (mono `Counter()` · mono JSX snippet `<button>{count}</button>` · the scherm card) joined by drawn arrows = foreground subject · two value spots on the scherm card (button + p) = supporting · amber = the value flowing through · coral = the call counter `oproep #2` badge (the one voltage: "again")
- sfx: whoosh-short

Compose: horizontal pipeline across the upper 2/3, centred vertically ~y 420.
Scene 1 (0.0–3.3s): kicker `✱ HOE REACT TEKENT`; on "op je scherm ziet" (0.52s) the scherm card (right) settles with the button `0`; on "component-functie" (1.65s) node 1 `Counter()` settles left; on "teruggeeft" (2.45s) arrow draws to node 2 (JSX snippet) and arrow 2 to the scherm card; a small amber dot `0` travels along the arrows (1.0s).
Scene 2 (3.3–7.6s): on "Verandert de waarde" (3.38s) node 1 shows a mono argument line `count: 0 → 1?`; on "alles wat die waarde toont" (5.33s) a `<p>Je klikte 0 keer</p>` line appears in the scherm card under the button, and both value spots get a thin amber ring (stagger 0.15s) on "toont" (6.24s).
Scene 3 (7.6–12.2s): on "React moet je functie" (7.67s) node 1 pulses and a coral badge `oproep #2` attaches to it; on "opnieuw oproepen" (9.33s) the amber dot, now `1`, travels the pipeline again; on "nieuwe waarde" (10.69s) both spots on the scherm card flip 0→1 together (slide up/in, 0.25s). Hold.

## Frame 5 — Dat is state: useState

- scene: Headline "Zo'n waarde noemen we state." Then the code line `const [count, setCount] = useState<number>(0);` types on, large. Three annotations land under its parts: `count` → "huidige waarde", `setCount` → "functie om aan te passen", `0` → "beginwaarde".
- voiceover: "Zo'n waarde noemen we state. Je maakt ze met useState. Je krijgt twee dingen terug: de huidige waarde, count, en een functie om ze aan te passen, setCount. De nul is de beginwaarde."
- duration: 14.52s
- transition_in: push-slide
- status: animated
- src: compositions/frames/05-usestate.html
- type: feature_showcase
- persuasion: Naming + anatomy
- beat: clarity

narrativeRole: Names the concept and dissects the useState line (course: "De useState functie heeft als argument een initiële state…").
keyMessage: useState gives you the current value and a setter; the argument is the initial value.

- blueprint: compose
- focal: the single code line `const [count, setCount] = useState<number>(0);` on a wide navy strip
- roles: headline (EB Garamond, top) = statement · wide navy code strip (centre, ~1700px, mono ~48px) = foreground subject · three annotation brackets + Inter labels below it = supporting · coral highlight on `useState` = the one voltage (the fix being named)
- sfx: key-press, pop

Compose: centred stack: headline (y≈200), code strip (y≈430), annotations (y≈560–700).
Scene 1 (0.0–2.6s): kicker `✱ STATE`; on "noemen we state" (0.64s) headline builds per word "Zo'n waarde noemen we *state*." with "state" in italic.
Scene 2 (2.6–4.6s): on "useState" (3.1s) the code strip enters and the line types on fast (caret, ~0.02s/char) ending ~4.2s; `useState` gets a coral wash.
Scene 3 (4.6–9.9s): on "twee dingen terug" (4.78s) a bracket draws under `[count, setCount]` with a mono `[ , ]` hint; on "huidige waarde, count" (6.53s / 6.99s) bracket + label `huidige waarde` under `count` (amber wash on `count`); on "setCount" (9.76s) bracket + label `functie om aan te passen` under `setCount` (amber wash).
Scene 4 (9.9–13.72s): on "De nul" (11.24s) bracket + label `beginwaarde` under the `0`; a small mono note `<number> = type` appears dim at 12.4s under `<number>`. Hold.

## Frame 6 — Opnieuw renderen

- scene: The Counter code now uses useState and `onClick={() => setCount(count + 1)}`. A render cycle on the right: click → `setCount(1)` → React stores state `count: 1` → `Counter()` runs again (render #2) → useState returns 1 → button shows 1. The word "renderen" is the hero beat.
- voiceover: "Klik je op de knop, dan roep je setCount op, met count plus één. React onthoudt de nieuwe waarde, en roept je functie opnieuw op. Dat noemen we opnieuw renderen. Deze keer geeft useState één terug, en je knop toont één."
- duration: 15.64s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-renderen.html
- type: feature_showcase
- persuasion: Causal chain, step by step
- beat: "aha"

narrativeRole: Walks one click through the whole cycle and gives it its name: re-rendering.
keyMessage: setCount stores the new value and React re-renders: the function runs again and useState returns the new value.

- blueprint: compose
- focal: the code surface with the line-by-line flow + the scherm card and state chip on the right
- roles: code surface (left ~58%) = foreground subject · scherm card with button + state chip `count: 0` + render tag (right column) = foreground secondary · amber line highlight = the "now executing" pointer · coral = the word tag `render #2` (the one voltage: the re-render)
- sfx: click, pop

Compose: 60/40 code left, scherm + state chip right (continuity with frames 2–3).
Code (Counter.tsx):
```
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```
Scene 1 (0.0–4.9s): kicker `✱ RENDEREN`; code on screen; right: scherm card with button `0`, state chip `state  count: 0`, render tag `render #1` dim on the card edge. On "Klik" (0.0s) cursor glides to the scherm button and clicks on "knop" (0.59s); on "setCount" (1.94s) `setCount(count + 1)` gets an amber wash; on "count plus één" (3.37s) a mono floating label `0 + 1 = 1` appears above the code line.
Scene 2 (4.9–9.8s): on "React onthoudt de nieuwe waarde" (5.31s / 7.18s) the state chip value flips `0 → 1` (pulse); on "roept je functie opnieuw op" (8.05s) the amber line highlight scans the component top to bottom (0.18s per line, from line 1).
Scene 3 (9.8–12.5s): on "Dat noemen we opnieuw renderen" (9.9s / 11.45s) the render tag flips to coral `render #2` and pulses; a large EB Garamond word "renderen" fades in over the lower right (x ≈ 1200, y ≈ 760, size ~90px) on 11.45s.
Scene 4 (12.5–18.2s): on "useState" (14.16s) the amber highlight sits on line 2 and a mono tag `→ 1` appears to the right of `useState<number>(0)`; on "je knop toont één" (16.27s / 17.12s) the scherm button numeral flips 0→1. Hold.

## Frame 7 — Twee keer setCount

- scene: The onClick handler now calls `setCount(count + 1);` twice. Expectation card: `verwacht: +2`. Cursor clicks: button goes 0 → 1, not 2. Coral stamp `+1` on the result vs crossed-out `+2`.
- voiceover: "Wat als je twee keer setCount oproept, met count plus één? Je verwacht dat de teller per twee omhoog gaat. Maar je klikt… en hij gaat maar per één."
- duration: 10.84s
- transition_in: push-slide
- status: animated
- src: compositions/frames/07-twee-keer.html
- type: pain_point
- persuasion: Expectation vs reality
- beat: surprise

narrativeRole: Sets up the classic stale-state trap from the course ("setState met callback").
keyMessage: Two `setCount(count + 1)` calls still add only 1.

- blueprint: compose
- focal: the scherm button result (1) against the expectation (2)
- roles: code surface (left) with the two setCount lines = foreground · expectation chip `verwacht: 2` (right, above scherm) = supporting · scherm button = foreground subject in the second half · coral: the result tag `werkelijk: 1` + strike-through on `verwacht: 2` = the one voltage
- sfx: click

Compose: 60/40 as before.
Code (Counter.tsx):
```
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```
Scene 1 (0.0–3.9s): kicker `✱ OPGELET`; code enters with lines 1–4, 7–9 in place; on "twee keer setCount" (0.53s / 1.02s) line 5 types on, then line 6 types on (0.4s each); on "count plus één" (2.39s) both lines get an amber wash.
Scene 2 (3.9–6.4s): right: scherm card with button `0` already visible from 0.3s; on "Je verwacht" (4.05s) an expectation chip `verwacht: 2` lands above the card; on "per twee" (5.06s) it pulses.
Scene 3 (6.4–9.88s): on "klikt" (6.98s) the cursor clicks the scherm button (dip + ripple); at 7.7s the numeral flips 0→1; on "maar per één" (8.19s) a coral strike-through draws over `verwacht: 2` and a coral chip `werkelijk: 1` lands next to the button (scale 1.15→1). Hold.

## Frame 8 — Waarom? count is een momentopname

- scene: A "render #1" snapshot card: inside it, `count = 0` is fixed (like a photo). The two setCount lines are evaluated in place: each `count + 1` resolves to `0 + 1` → `1`. Both calls send the same value 1 to React (two arrows into a queue that both say `1`). Then a "render #2" card appears where count = 1.
- voiceover: "Waarom? Count is de waarde van deze render. Die verandert niet zolang je functie loopt. Dus twee keer zeg je: setCount van nul plus één. Twee keer de waarde één. Pas bij de volgende render is count één."
- duration: 15.16s
- transition_in: crossfade
- status: animated
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

## Frame 9 — De callback-vorm

- scene: The two lines are rewritten to `setCount(prevCount => prevCount + 1);`. React's queue on the right now chains: `0 → 1`, `1 → 2`. The scherm button goes 0 → 2 on click. Rule card at the end: "nieuwe state hangt af van de vorige → callback".
- voiceover: "De oplossing: geef een functie mee aan setCount. React geeft je dan de meest recente waarde, prevCount, en jij geeft de nieuwe terug. Zo bouwt de tweede update verder op de eerste: nul, één, twee. Hangt je nieuwe state af van de vorige? Gebruik dan altijd een callback."
- duration: 19.48s
- transition_in: push-slide
- status: animated
- src: compositions/frames/09-callback.html
- type: feature_showcase
- persuasion: Fix + demonstration + rule
- beat: relief

narrativeRole: Gives the fix from the course (`setCount(prevCount => prevCount + 1)`) and shows it chaining.
keyMessage: Pass a function: React feeds it the latest value, so updates build on each other.

- blueprint: compose
- focal: the code surface with the two callback lines
- roles: code surface (left ~58%) = foreground subject · update chain on the right: two hairline tile steps `0 → 1` and `1 → 2` joined by an arrow = foreground secondary · scherm card (right, lower) with button = supporting · rule line (Inter, bottom-left above captions) = takeaway · coral wash on `prevCount => prevCount + 1` = the one voltage (the fix)
- sfx: typing, click, pop

Compose: 60/40; right column split: chain (upper), scherm (lower).
Code (Counter.tsx):
```
const handleClick = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};
```
Scene 1 (0.0–3.2s): kicker `✱ DE OPLOSSING`; the handler from frame 7 (`setCount(count + 1);` ×2) is on screen; on "geef een functie mee" (0.85s) the arguments `count + 1` delete back (caret, reverse type) and `prevCount => prevCount + 1` types on in both lines (line 2 at 1.0s, line 3 at 1.9s); coral wash on both arrows at 2.6s.
Scene 2 (3.2–8.6s): on "React geeft je dan de meest recente waarde" (3.27s) the right column shows label `React` and step 1 chip `prevCount = 0`; on "prevCount" (5.47s) `prevCount` in the code gets an amber wash; on "de nieuwe terug" (7.47s) step 1 resolves to `0 → 1`.
Scene 3 (8.6–13.8s): on "tweede update verder op de eerste" (9.4s / 10.7s) step 2 chip appears below with an arrow from step 1's result: `prevCount = 1` → `1 → 2`; on "nul, één, twee" (11.6s, 12.4s, 13.0s) the three numbers 0, 1, 2 light amber in sequence across the chain; the cursor clicks the scherm button at 12.2s and the numeral steps 0 → 2 (via 1, 0.2s each) landing on 13.0s.
Scene 4 (13.8–20.04s): on "Hangt je nieuwe state af van de vorige?" (13.81s) a rule line in Inter fades in bottom-left (y ≈ 820): `nieuwe state hangt af van de vorige?`; on "callback" (18.63s) it completes with `→ setX(prev => …)` in mono. Hold.

## Frame 10 — Tweede voorbeeld: een inputveld

- scene: New component NameInput. Code types `const [name, setName] = useState<string>('');`, the `<input onChange={…} />` (no value yet) and `<p>Je typte: {name}</p>`. Scherm card shows an empty input and an empty p. State chip `name: ""`.
- voiceover: "Tweede voorbeeld: een inputveld, en een p-tag die toont wat je typte. De tekst bewaar je in state, name, met een lege string als begin. Met onChange zet je bij elke toets de nieuwe tekst in de state."
- duration: 14.36s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/10-inputveld.html
- type: setup
- persuasion: New concrete example
- beat: fresh start

narrativeRole: Opens the second example (the course's InputView): an input and a p bound to one piece of state.
keyMessage: Keep the text in state; onChange writes every keystroke into it.

- blueprint: compose
- focal: the code surface typing NameInput
- roles: code surface (left ~58%) = foreground subject · scherm card with input field + p line (right) = supporting · state chip `name: ""` = supporting · coral: none except a small coral `nieuw voorbeeld` kicker spike (calm setup frame)
- sfx: typing

Compose: 60/40 like frames 2–9 (same positions; continuity).
Code (NameInput.tsx):
```
const NameInput = () => {
  const [name, setName] = useState<string>('');

  return (
    <>
      <input type="text"
        onChange={(e) => setName(e.target.value)} />
      <p>Je typte: {name}</p>
    </>
  );
}
```
Scene 1 (0.0–4.4s): kicker `✱ VOORBEELD 2`; on "inputveld" (1.43s) the code surface enters with the shell (lines 1, 4, 5, 9, 10, 11) and the scherm card shows an empty input field (hairline box, label `input`); on "p-tag" (2.68s) line 8 `<p>Je typte: {name}</p>` types on and the scherm card gets the line `Je typte:` (Inter).
Scene 2 (4.4–9.2s): on "in state, name" (6.0s / 6.58s) line 2 types on (`useState<string>('')`); on "lege string" (7.65s) `''` gets an amber wash; state chip `state  name: ""` appears under the scherm card at 8.0s.
Scene 3 (9.2–14.52s): on "onChange" (10.03s) lines 6–7 type on; `onChange={…}` gets an amber wash; on "bij elke toets" (11.26s) a mono note `elke toets → setName(…)` lands under the state chip. Hold.

## Frame 11 — De p-tag volgt vanzelf

- scene: The cursor clicks into the input and "Sam" is typed letter by letter. Each keystroke: state chip updates (`"S"`, `"Sa"`, `"Sam"`), a render tag pulses, and the p-line updates `Je typte: Sam`. Then the arrow "p-tag leest de state" from chip to p.
- voiceover: "Typ je iets, dan rendert React opnieuw, en de p-tag toont meteen je tekst. Daar moest je zelf niets voor doen: de p-tag leest gewoon de state."
- duration: 10.12s
- transition_in: crossfade
- status: animated
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

## Frame 12 — Een knop om leeg te maken

- scene: A `Leegmaken` button is added (code: `<button onClick={() => setName('')}>Leegmaken</button>`). The cursor clicks it: state chip → `""`, p-line → `Je typte:` (empty)… but the input still shows "Sam". Coral rough box around the input with mono note `toont nog "Sam"`.
- voiceover: "Nu voegen we een knop toe die het veld leegmaakt. Die zet de state op een lege string. De p-tag wordt leeg… maar in het inputveld staat je tekst er nog. Het veld weet niets van je state."
- duration: 13.08s
- transition_in: push-slide
- status: animated
- src: compositions/frames/12-leegmaken.html
- type: pain_point
- persuasion: Demonstrated mismatch
- beat: puzzle

narrativeRole: Exposes the one-way binding: state can change without the input following.
keyMessage: Clearing state empties the p but not the input: the input does not read state yet.

- blueprint: compose
- focal: the input field still showing "Sam" while state is ""
- roles: code surface (left) = foreground · scherm card with input, p and the new `Leegmaken` button (right) = foreground subject · state chip = supporting · coral rough box around the input + mono `toont nog "Sam"` = the one voltage
- sfx: click

Compose: 60/40 as before.
Code (NameInput.tsx, the return part):
```
  return (
    <>
      <input type="text"
        onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName('')}>
        Leegmaken
      </button>
      <p>Je typte: {name}</p>
    </>
  );
```
Scene 1 (0.0–2.8s): kicker `✱ EN NU?`; scherm card shows input `Sam`, p `Je typte: Sam`, state chip `name: "Sam"` (continuity); on "knop toe" (0.83s / 1.1s) the button lines type on in the code and a `Leegmaken` button settles into the scherm card between input and p.
Scene 2 (2.8–5.7s): on "zet de state op een lege string" (3.52s / 4.86s) `setName('')` gets an amber wash; the cursor glides to `Leegmaken` and clicks on 5.2s (dip + ripple); state chip flips to `name: ""` at 5.4s and render tag pulses.
Scene 3 (5.7–9.9s): on "De p-tag wordt leeg" (6.48s / 7.09s) the p text after `Je typte:` slides out; on "maar in het inputveld" (8.55s) the input still shows `Sam`; on "staat je tekst er nog" (9.16s / 9.9s) a coral rough box draws around the input (svg path draw 0.5s) with the mono note `toont nog "Sam"`.
Scene 4 (9.9–13.4s): on "Het veld weet niets van je state" (10.52s / 12.31s) a dashed hairline from the state chip toward the input stops halfway with a small mono `✕` in coral-free ink. Hold.

## Frame 13 — value + onChange: dubbele binding

- scene: Add `value={name}` to the input. Then the click on Leegmaken empties the input too. A two-way diagram: input ⇄ state: top arrow "typen → onChange → setName", bottom arrow "state → value → veld". Term card: "controlled component".
- voiceover: "Daarom zet je ook value gelijk aan name. Nu toont het veld altijd wat er in de state zit. Value en onChange samen geven een dubbele binding: typen past de state aan, en de state past het veld aan. Dat noemen we een controlled component."
- duration: 16.76s
- transition_in: crossfade
- status: animated
- src: compositions/frames/13-dubbele-binding.html
- type: feature_showcase
- persuasion: Fix + model + term
- beat: resolution

narrativeRole: Resolves the problem with `value={name}` and names the two-way binding / controlled component.
keyMessage: value + onChange = two-way binding: the input always shows state.

- blueprint: compose
- focal: first the `value={name}` line; second half the two-way loop diagram input ⇄ state
- roles: code surface (left, first half; slides left and narrows in the second half) = foreground · scherm card (input + Leegmaken + p) = supporting · two-way diagram (two nodes `input` and `state` with an upper arrow `onChange` and a lower arrow `value`) = foreground subject in the second half · coral wash on `value={name}` = the one voltage (the fix) · term "controlled component" (EB Garamond italic) = takeaway
- sfx: typing, click, pop

Compose: first half 60/40 as before; second half the diagram takes the right 50% (scherm card shrinks into the `input` node position).
Code (NameInput.tsx, input part):
```
      <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />
```
Scene 1 (0.0–3.0s): kicker `✱ DE OPLOSSING`; code from frame 12 on screen; on "value gelijk aan name" (0.88s / 2.19s) line `value={name}` types on between `<input type="text"` and `onChange`, lines shift down; coral wash on it at 2.2s.
Scene 2 (3.0–6.3s): on "Nu toont het veld altijd" (3.09s) the scherm demo replays: input `Sam`, cursor clicks `Leegmaken` at 3.9s → state chip `""` → at 4.3s the input empties too (text slides out) and the p empties; on "wat er in de state zit" (5.65s) an amber ring on the empty input + mono note `veld = state`.
Scene 3 (6.3–14.5s): on "Value en onChange samen" (6.39s / 7.44s) the two-way diagram builds on the right: node `input` (left) and node `state` (right); on "dubbele binding" (9.24s) both arrows draw: upper arrow `onChange → setName` (input → state) and lower arrow `value={name}` (state → input); on "typen past de state aan" (10.62s) a small amber dot travels the upper arrow; on "de state past het veld aan" (12.67s / 13.68s) it travels the lower arrow back.
Scene 4 (14.5–17.72s): on "controlled component" (15.66s / 16.3s) the term "controlled component" lands in EB Garamond italic under the diagram (y ≈ 760) with a mono label `term` above it. Hold.

## Frame 14 — Samenvatting

- scene: Four takeaway rows (numbered, mono index + Inter text + a mono code token on the right): 1) state = wat je component onthoudt `useState` · 2) set-functie → React rendert opnieuw `setCount(…)` · 3) hangt af van vorige → callback `prev => prev + 1` · 4) inputveld → value én onChange `value + onChange`.
- voiceover: "Kort samengevat: state is wat je component onthoudt. Pas je het aan met de set-functie, dan rendert React opnieuw. Hangt de nieuwe waarde af van de vorige, gebruik een callback. En bij een inputveld zet je value én onChange."
- duration: 15.48s
- transition_in: blur-crossfade
- status: animated
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
