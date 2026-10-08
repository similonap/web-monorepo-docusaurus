---
format: 1920x1080
duration: 188s
mode: autonomous
message: "Side effects horen in useEffect — en wat je start, ruim je op."
arc: how-to-process
audience: "Studenten webframeworks die useState en re-renders al kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** This is the second clip in the series after `react-array-state`. Same design system (`frame.md`, Code editorial), same layout grammar, same voice. When in doubt, look at how `../react-array-state/compositions/frames/*.html` solved it and do the same.
- **Palette (frame.md, by role):** cream ground on every frame (tile half-step for content cards); ink for all text; warm navy ONLY on the code surface (syntax: coral keywords, amber function names/numbers, teal strings, cream@60% dim types); **coral = the one voltage per frame** — in this film it always marks *the thing that is wrong, runs away, or leaks* (the stray `setInterval`, the extra timer, the stuck page, the timer that is never stopped). Never two corals in one frame. In the "solution" frames (6, 9) the voltage is the fix itself (`[]`, `return () => clearInterval(handle)`).
- **Type by role:** EB Garamond display/headline for the frame's single statement; Inter for labels and chrome; JetBrains Mono kickers (✱ coral spike, uppercase, e.g. `✱ ZO NIET`) and all code, timer chips, counters' units and labels.
- **The recurring visual system ("timer chips"):** a running timer is drawn as a small tile chip (hairline, radius-md, tile background) with a mono label `timer #1 · 1000ms` and a tiny tick dot that pulses once per tick. A NEW, unwanted timer gets a coral hairline + coral dot. Timer chips live in the right column in frames 2, 3, 4, 6, 8, 9 at the same scale and y-band so the viewer tracks "how many timers are running" across the film. A stopped timer is shown with its label struck through and dimmed to 35%.
- **Render ticks:** a render is a small mono tag `render` (ink, hairline pill) dropping onto a horizontal hairline "timeline" — used in frames 3, 5, 6, 7 to show "React rendered again".
- **Code surface:** same as react-array-state frame 2: navy panel with title bar (`Timer.tsx` / `App.tsx`) and status strip, JetBrains Mono 34–36px, line numbers, code types on with a stepping caret per character (code-typing mechanics), highlight = amber background wash rgba(232,165,90,0.24), the wrong line = coral rough box (svg path draw) or coral underline.
- **Motion grammar:** smooth long-tail `power3.out` settles, no bounce/overshoot; code arrives via type-on with caret; every reveal is cued to its spoken word (times below are seconds from the frame start = the voice start). Holds are still. Exponential growth in frame 4 is the one place things accelerate on purpose.
- **Layout:** kicker top-left at (80, 92); code surface left (x 80, ~1000–1060px wide, top ~190); right column x ≈ 1200–1840. Nothing important below y ≈ 900 (caption band).
- **Negative list:** no real browser chrome / VS Code activity bars (bare code surface only), no purple/blue gradients, no bokeh, no glow on content, no lazy breathing, no back-half camera push, no front-loading (code and chips never appear before the VO names them), no screensaver drift, no `Math.random` (use a seeded/deterministic pattern).
- **Captions:** on; everything important stays in the top ~83%.

## Frame 1 — Een teller die vastloopt

- scene: A tiny app card with a big counter that ticks 0 → 1 → 2 → 3 once per second. "Klinkt simpel" — calm. On "één verkeerde regel" one code line `setInterval(…)` slides in under the card with a coral underline. On "loopt je hele pagina vast" the counter races to absurd numbers and the card freezes: dims, and a coral mono chip `pagina reageert niet` lands.
- voiceover: "Een teller die elke seconde één omhoog gaat. Klinkt simpel. Maar met één verkeerde regel… loopt je hele pagina vast."
- duration: 9.68s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Curiosity + demonstration
- beat: calm → alarm

narrativeRole: Opens on a harmless-looking counter and promises that one wrong line breaks the whole page.
keyMessage: A simple timer can take down your page.

- blueprint: compose
- focal: the counter card (EB Garamond number-hero numeral inside a hairline tile card)
- roles: counter card = foreground subject (centred, ~40% of frame) · the code line `setInterval(() => …, 1000)` in a small navy code strip = supporting · coral underline + coral chip `pagina reageert niet` = the one voltage
- sfx: click-soft

Compose: locked static stage, centred card.
Scene 1 (0.0–1.0s): cream ground + faint hairline grid; the counter card settles in centred (power3.out); label `teller` (mono-label) above the numeral `0`.
Scene 2 (1.0–4.6s): on "elke seconde" (1.26s) the numeral steps 0→1 at 1.3s, 2 at 2.3s, 3 at 3.3s, 4 at 4.3s (each step: old digit slides up/out, new slides in, 0.25s); a tiny mono `+1` floats up on each step. "Klinkt simpel" (3.6s) — nothing else, keep it calm.
Scene 3 (4.6–6.9s): on "één verkeerde regel" (5.44s) a small navy code strip slides up beneath the card with `setInterval(() => setNumber(n => n + 1), 1000);` typed on fast; a coral underline draws under it at 6.2s.
Scene 4 (6.9–9.68s): on "loopt" (6.96s) the numeral accelerates: 5, 7, 12, 31, 96, 511, 2047, 16383… (deterministic sequence, steps get faster) ; on "vast" (8.26s) everything stops: card dims to 55% with a slight desaturate, and the coral chip `pagina reageert niet` lands top-right of the card (scale 1.15→1, 0.3s). Hold still.

## Frame 2 — setInterval in je component

- scene: Code surface types the Timer component with `setInterval` directly in the component body (not in an effect). Right column: the rendered output (`<p>` showing the number) and a "timers" list with one chip `timer #1 · 1000ms`. The timer ticks, the number goes 0 → 1. "Tot zover niets aan de hand."
- voiceover: "Stel je voor: je zet een setInterval gewoon in je component. Na een seconde tikt de timer, en die verhoogt de state. Tot zover niets aan de hand."
- duration: 11.56s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-zonder-effect.html
- type: pain_point
- persuasion: Setup of the trap (looks reasonable)
- beat: false calm

narrativeRole: Plants the wrong-but-plausible code the rest of the film dissects.
keyMessage: This is the code: setInterval straight in the component body.

- blueprint: compose
- focal: the code surface typing the Timer component
- roles: code surface (navy, left ~58%) = foreground subject · right column: `scherm` output card with the number + `timers` list with one chip = supporting · coral rough box around the `setInterval(…)` block = the one voltage (light, it is "the suspicious line")
- sfx: typing

Compose: asymmetric 60/40 — code left, screen + timers right (same as react-array-state frame 2).
Code (Timer.tsx):
```
const Timer = () => {
  const [number, setNumber] = useState(0);

  setInterval(() => {
    setNumber(number => number + 1);
  }, 1000);

  return <p>{number}</p>;
}
```
Scene 1 (0.0–1.8s): kicker `✱ ZO NIET` top-left; code surface enters (power3.out) with lines 1–2 and 9–10 already in place (component shell + useState + return).
Scene 2 (1.8–4.8s): on "setInterval" (1.92s) lines 4–6 type on (caret, ~0.025s/char) into the empty gap; on "gewoon in je component" (2.8s) a coral rough box draws around lines 4–6 (svg path draw, 0.5s) and a small mono tag `in de component body` sits at its right edge.
Scene 3 (4.8–8.9s): right column: label `scherm` + output card showing `0` (EB Garamond number) fades in at 4.9s; label `timers` + chip `timer #1 · 1000ms` at 5.2s. On "tikt de timer" (5.74s) the chip's dot pulses; on "verhoogt de state" (7.26s) the number steps 0→1 and `setNumber` on line 5 gets an amber wash.
Scene 4 (8.9–11.56s): "Tot zover niets aan de hand" (9.1s): a small ink `✓ 1 timer` mono note beneath the chip; hold still.

## Frame 3 — De render-lus

- scene: A cycle diagram: `state-update` → `render` → `setInterval()` → back to state-update. During "de hele functie opnieuw uitgevoerd" a highlight scans the component body line by line (re-execution). "dus ook setInterval" — the setInterval node lights. "Er komt een tweede timer bij" — a second, coral timer chip drops into the timers list.
- voiceover: "Maar een state-update betekent: React rendert je component opnieuw. En bij die render wordt de hele functie opnieuw uitgevoerd — dus ook setInterval. Er komt een tweede timer bij."
- duration: 14.4s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-render-lus.html
- type: product_intro
- persuasion: Causal chain made visible
- beat: "uh-oh"

narrativeRole: Names the mechanism: every state update re-runs the component function, including the setInterval call.
keyMessage: Each render runs setInterval again → one more timer.

- blueprint: compose
- focal: the three-node cycle (state-update → render → setInterval())
- roles: cycle diagram (three hairline tile nodes on a circle with drawn arrows, left-centre) = foreground subject · mini code strip of the component body (navy, small) under/next to the cycle = supporting · timers list (right) = supporting · the new coral chip `timer #2` = the one voltage
- sfx: whoosh-short

Compose: left 62% = cycle + mini code, right column = timers list (same y-band as frame 2).
Scene 1 (0.0–2.3s): kicker `✱ WAT GEBEURT ER?`; timers list on the right already shows `timer #1 · 1000ms` (continuity from frame 2). On "state-update" (0.46s) node 1 `state-update` settles in (top of the cycle), with `setNumber(…)` in mono under it.
Scene 2 (2.3–5.2s): on "React rendert" (2.44s) arrow 1 draws (svg path draw) to node 2 `render` (right of cycle), which settles in; on "opnieuw" (4.18s) a `render #2` mono tag pulses on node 2.
Scene 3 (5.2–9.2s): on "bij die render" (5.66s) the mini code strip (component body, 8 lines, navy) appears beside the cycle; on "de hele functie" (6.9s) an amber line highlight scans down the lines one by one (0.22s per line) — function re-executes.
Scene 4 (9.2–11.5s): on "dus ook setInterval" (9.52s) the scan stops on the setInterval lines (coral underline); arrow 2 draws to node 3 `setInterval()` (bottom-left), which settles; arrow 3 draws back to node 1 closing the loop.
Scene 5 (11.5–14.4s): on "tweede timer" (12.3s) a coral chip `timer #2 · 1000ms` drops into the timers list below #1 (y 24→0, power3.out); its coral dot pulses once at 13.1s. Hold.

## Frame 4 — Het loopt uit de hand

- scene: Exponential blow-up. A big counter "actieve timers" doubles on the spoken numbers: 1 → 2 → 4 → 8 → 16, then rushes to 1024. Next to it a grid of 32×32 tiny timer dots fills in doubling batches. The "teller" value races. On "browser loopt vast" the whole stage freezes and a coral stamp `VASTGELOPEN` lands.
- voiceover: "En elke timer veroorzaakt weer een render, en elke render weer een nieuwe timer. Twee, vier, acht, zestien… Na tien seconden lopen er meer dan duizend timers. Je teller schiet weg, en je browser loopt vast."
- duration: 18.56s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-uit-de-hand.html
- type: pain_point
- persuasion: Escalation + concrete number
- beat: tension → crash

narrativeRole: Shows the consequence in numbers: timers double every second until the browser hangs.
keyMessage: Without an effect, timers double every tick: 2, 4, 8 … 1024.

- blueprint: compose
- focal: the number-hero counter `actieve timers` (EB Garamond, very large)
- roles: number-hero counter + mono unit `timers` = foreground subject (left half) · 32×32 dot grid (1024 small tile dots, ink@15% → ink when active) = foreground secondary (right half) · small loop glyph `timer → render → timer` (mono, top) = supporting · `teller` readout (mono, small, under the counter) = supporting · coral stamp `VASTGELOPEN` = the one voltage
- sfx: none

Compose: split left/right; the grid is the visual weight.
Scene 1 (0.0–5.8s): kicker `✱ UIT DE HAND`; on "elke timer veroorzaakt weer een render" (0.34s) the mono loop line `timer → render → nieuwe timer` builds per word (tokens appear on 0.72s, 2.54s, 5.0s); counter shows `2` and 2 grid dots are lit from the start (continuity: 2 timers). `teller: 1`.
Scene 2 (5.8–10.2s): on "Twee" (6.34s) counter = 2 (pulse); "vier" (7.22s) → 4 dots lit, counter 4; "acht" (8.08s) → 8; "zestien" (8.96s) → 16 — each step the newly lit dots light as a batch (stagger 0.01s), teller readout updates 3, 7, 15, 31.
Scene 3 (10.2–13.9s): on "Na tien seconden" (10.38s) the counter rolls fast 32 → 64 → 128 → 256 → 512 → 1024 (each 0.3s), grid fills in doubling batches until all 1024 are lit at ~12.4s ("duizend"); counter lands on `1024` and holds; mono unit `timers` beside it.
Scene 4 (13.9–15.9s): on "Je teller schiet weg" (13.96s) the teller readout spins up through big numbers (deterministic: 2047, 65535, 1048575, 16777215 …) getting faster.
Scene 5 (15.9–18.56s): on "browser loopt vast" (15.96s) everything freezes at once: stage dims to 60%, grid desaturates, and at 16.9s ("vast") the coral stamp `VASTGELOPEN` lands centred (scale 1.25→1, 0.3s, slight -4° rotation, rough coral border like the FOUT stamp in react-array-state frame 2). Hold still.

## Frame 5 — Een side effect

- scene: Headline "setInterval is een side effect." Then the course's Greet example: three lines annotated — `const message = …` → label `output`; `document.title = …` → label `side effect` (coral); `return <div>…` → `output`. Example chips: timer, fetch, document.title. Then "geen controle over hoe vaak React rendert": render tags drop onto a timeline at irregular intervals.
- voiceover: "Het probleem: setInterval is een side effect. Code die niets bijdraagt aan wat je component toont — een timer, een fetch, de titel van je pagina aanpassen. En je hebt geen controle over hoe vaak React rendert."
- duration: 16.4s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/05-side-effect.html
- type: product_intro
- persuasion: Naming + classification
- beat: clarity

narrativeRole: Gives the problem its name (side effect) using the course's own definition and Greet example.
keyMessage: A side effect is code that doesn't contribute to the output — and render count is not yours to control.

- blueprint: compose
- focal: the headline "setInterval is een side effect." (EB Garamond headline) then the annotated Greet code
- roles: headline = foreground subject (top) · Greet code surface (navy, left) with margin labels `output` / `side effect` = foreground · example chips (timer · fetch · document.title) = supporting (right) · render timeline (bottom band, above captions) = supporting · coral label `side effect` on the document.title line = the one voltage
- sfx: key-press

Code (Greet.tsx):
```
const Greet = ({ name }: GreetProps) => {
  const message = `Hello, ${name}!`;
  document.title = `Greetings to ${name}`;
  return <div>{message}</div>;
}
```
Scene 1 (0.0–4.2s): kicker `✱ SIDE EFFECTS`; on "setInterval is een side effect" (1.56s) the headline builds per word in EB Garamond at top (y≈170), "side effect" in italic.
Scene 2 (4.2–7.5s): on "Code die niets bijdraagt" (4.28s) the Greet code surface enters below the headline (left, ~1000px); at 5.2s margin label `output` (ink, mono) appears beside lines 2 and 4; at 6.3s ("toont") line 3 gets the coral label `side effect` + coral left bar.
Scene 3 (7.5–11.4s): right column: chips land one by one on their words — `setInterval` / timer (7.82s), `fetch()` (8.58s), `document.title` (9.22s); tile chips, mono.
Scene 4 (11.4–16.4s): on "geen controle" (12.42s) a hairline timeline draws across the lower band (y≈800); `render` tags drop onto it at irregular deterministic positions (12.8, 13.2, 13.9, 14.1, 14.9, 15.3s) on "hoe vaak React rendert". Hold.

## Frame 6 — De oplossing: useEffect

- scene: The setInterval code is wrapped in `useEffect(() => { … }, [])`. Right: a render timeline where `render` tags keep landing, an `effect` marker runs only after the first render, and the timers list stays at exactly one chip `timer #1`.
- voiceover: "Daarvoor is er useEffect. Je geeft een functie mee, en React voert die uit ná het renderen — los van de render zelf. Met een lege array als tweede argument: maar één keer. Eén timer, hoe vaak er ook gerenderd wordt."
- duration: 17.36s
- transition_in: push-slide
- status: animated
- src: compositions/frames/06-useeffect.html
- type: feature_showcase
- persuasion: Solution reveal + demonstration
- beat: relief

narrativeRole: Introduces useEffect as the fix and shows the render count no longer matters.
keyMessage: useEffect runs after render; with [] only once → one timer.

- blueprint: compose
- focal: the code surface: setInterval now wrapped in useEffect with `[]`
- roles: code surface (navy, left ~58%) = foreground subject · render timeline + `effect` marker (right, upper) = foreground secondary · timers list with ONE chip (right, lower) = supporting · coral highlight on `[]` = the one voltage
- sfx: typing, pop

Code (Timer.tsx):
```
const Timer = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNumber(number => number + 1);
    }, 1000);
  }, []);

  return <p>{number}</p>;
}
```
Scene 1 (0.0–2.5s): kicker `✱ DE OPLOSSING`; code surface shows the frame-2 code (setInterval block in the body); on "useEffect" (1.14s) the setInterval block indents and the wrapper lines `useEffect(() => {` / `}, []);` type on around it (lines shift down, power3.out); `[]` initially plain.
Scene 2 (2.5–9.6s): right column: label `tijdlijn`; on "React voert die uit" (4.34s) a hairline timeline draws; `render` tag drops at 5.0s; on "ná het renderen" (5.92s) an `effect` marker (amber pill) appears just right of the first render with a small arrow `na`; on "los van de render zelf" (7.44s) a dashed hairline separates render row from effect row.
Scene 3 (9.6–13.6s): on "lege array" (10.12s) `[]` in the code gets the coral wash + coral underline; mono tag `tweede argument` points to it at 11.2s; on "maar één keer" (12.82s) the effect marker gets a mono `1×` badge.
Scene 4 (13.6–17.36s): on "Eén timer" (13.88s) timers list shows `timer #1 · 1000ms` alone; on "hoe vaak er ook gerenderd wordt" (14.74s) four more `render` tags drop onto the timeline (14.8, 15.2, 15.6, 16.0s) while the effect row stays empty and the timers list stays at one chip with mono note `✓ 1 timer`. Hold.

## Frame 7 — De dependency array

- scene: Triptych of three cards: (1) `useEffect(fn)` → "na elke render"; (2) `useEffect(fn, [])` → "één keer, na de eerste render"; (3) `useEffect(fn, [count])` → "telkens count verandert". Each card has a mini timeline of 5 render ticks with effect dots showing when the effect runs.
- voiceover: "Die array heet de dependency array, en die bepaalt wanneer je effect loopt. Geen array: na elke render. Een lege array: één keer, na de eerste render. En met count erin: telkens wanneer count verandert."
- duration: 16.28s
- transition_in: push-slide
- status: animated
- src: compositions/frames/07-dependency-array.html
- type: feature_showcase
- persuasion: Rule of three + comparison
- beat: comprehension

narrativeRole: Generalises: the second argument decides when an effect runs (course: geen dependencies / lege array / array van states en props).
keyMessage: none → every render · [] → once · [count] → when count changes.

- blueprint: grid-card-assemble (Adapt)
- focal: the three cards in a row
- roles: headline "De dependency array" (EB Garamond) = top · three tile cards each with mono code + Inter caption + mini render timeline = foreground · effect dots (amber) = data · coral = the `[count]` card's changed-count marks only (the "when it changes" moments)
- sfx: pop

Adapt: staggered assemble of three equal cards (each ~540px wide) at y≈300–760, then each card's timeline animates on its cue.
Scene 1 (0.0–5.5s): kicker `✱ TWEEDE ARGUMENT`; on "dependency array" (1.26s) headline "De dependency array" settles top-left; on "bepaalt wanneer je effect loopt" (3.2s) sub-line in Inter `bepaalt wanneer je effect loopt`.
Scene 2 (5.5–7.9s): on "Geen array" (5.6s) card 1 lands left: `useEffect(fn)`; its timeline shows 5 render ticks; on "na elke render" (6.6s) an amber effect dot appears after every tick (stagger 0.12s); caption `na elke render`.
Scene 3 (7.9–11.7s): on "Een lege array" (8.06s) card 2 lands centre: `useEffect(fn, [])`; on "één keer, na de eerste render" (9.36s) one amber dot after tick 1 only; ticks 2–5 get no dot; caption `1× — na de eerste render`.
Scene 4 (11.7–16.28s): on "met count erin" (11.84s) card 3 lands right: `useEffect(fn, [count])`; its ticks are labelled with count values `0 0 1 1 2`; on "telkens wanneer count verandert" (13.34s) amber dots appear only after ticks where count changed (tick 1, 3, 5) and those count values flash coral briefly; caption `als count verandert`. Hold the triptych still.

## Frame 8 — Cleanup: wat loopt er mis?

- scene: Code: Timer with `interval` prop, `useEffect(() => { let handle = setInterval(…, interval); }, [interval]);` — no cleanup. Right: a slider (1000ms) that moves to 500ms then 200ms. Each move adds a new timer chip; old chips keep ticking. "De oude? Die wordt nooit gestopt" — old chips turn coral and keep pulsing.
- voiceover: "Maar opgelet. Stel dat de interval een prop is, die je met een slider kiest. Dan zet je interval in de dependency array. Elke keer je schuift, loopt het effect opnieuw en start er een nieuwe timer. De oude? Die wordt nooit gestopt — en blijft gewoon doortellen."
- duration: 19.16s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-cleanup-probleem.html
- type: pain_point
- persuasion: Demonstration of a hidden leak
- beat: tension

narrativeRole: Shows what goes wrong when an interval is never cleared (the course's Timer + slider example without cleanup).
keyMessage: Without cleanup, every re-run of the effect leaves the old timer running.

- blueprint: compose
- focal: the timers list growing while the slider moves
- roles: code surface (navy, left ~56%) = foreground · slider control (tile card, range track + thumb + mono value `1000ms`) right-top = supporting actor · timers list (right, below slider) = foreground subject in the second half · coral on the old, never-stopped timers = the one voltage
- sfx: click-soft

Code (Timer.tsx):
```
const Timer = ({ interval }: TimerProps) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let handle = setInterval(() => {
      setNumber(number => number + 1);
    }, interval);
  }, [interval]);

  return <p>{number}</p>;
}
```
Scene 1 (0.0–5.3s): kicker `✱ OPGELET`; code surface enters with the code (no typing needed for lines 1–3, 8–11; lines 4–7 type on at 1.5s); on "interval een prop" (2.02s) `{ interval }` gets amber wash; on "slider" (4.02s) the slider card fades in right-top showing `interval: 1000ms` (thumb at right end).
Scene 2 (5.3–8.6s): on "interval in de dependency array" (5.88s / 6.88s) `[interval]` gets the amber wash; timers list label + chip `timer #1 · 1000ms` appears at 7.0s, its dot pulsing every ~1.0s (deterministic: pulses at fixed times).
Scene 3 (8.6–13.9s): on "Elke keer je schuift" (9.5s) the slider thumb glides to `500ms`; on "loopt het effect opnieuw" (10.34s) a mono tag `effect ↻` flashes next to the code's useEffect line; on "nieuwe timer" (12.62s) chip `timer #2 · 500ms` drops in. Then at 13.2s the thumb glides to `200ms` and chip `timer #3 · 200ms` drops in at 13.6s. Each chip's dot pulses at its own rate (1.0s / 0.5s / 0.2s cadence → deterministic times).
Scene 4 (13.9–19.16s): on "De oude?" (14.22s) chips #1 and #2 get coral hairlines + coral dots; on "nooit gestopt" (15.7s) a mono coral note `nooit gestopt` appears beside them; on "blijft gewoon doortellen" (16.9s) all three dots keep pulsing together and a mono readout `3 timers actief` updates. Hold (dots keep pulsing to the end — this is deliberate, the leak is still running).

## Frame 9 — Cleanup: clearInterval

- scene: The same code gains `return () => { clearInterval(handle); };`. Right: a vertical sequence: `effect (1000ms)` → `cleanup ✕` → `effect (500ms)` → `cleanup ✕` → `effect (200ms)`; then `unmount → cleanup`. Timers list ends with only one live chip; old ones struck through.
- voiceover: "De oplossing: geef vanuit je effect een cleanup-functie terug. Daarin roep je clearInterval op, met de handle van je timer. React voert die cleanup uit vóór het effect opnieuw loopt, en wanneer je component verdwijnt. Zo loopt er altijd maar één timer."
- duration: 19.96s
- transition_in: push-slide
- status: animated
- src: compositions/frames/09-cleanup-oplossing.html
- type: feature_showcase
- persuasion: Solution + sequence diagram
- beat: resolution

narrativeRole: Fixes the leak with the course's cleanup pattern and shows when React calls the cleanup.
keyMessage: Return a cleanup; React runs it before the next effect and on unmount.

- blueprint: compose
- focal: the cleanup lines typed into the effect (`return () => { clearInterval(handle); };`)
- roles: code surface (navy, left ~56%) = foreground subject · sequence diagram (right, vertical stack of hairline pills: effect / cleanup) = foreground secondary · timers list (right bottom) = supporting · coral wash on the new return/clearInterval lines = the one voltage (the fix)
- sfx: key-press, pop

Code (Timer.tsx):
```
useEffect(() => {
  let handle = setInterval(() => {
    setNumber(number => number + 1);
  }, interval);

  return () => {
    clearInterval(handle);
  };
}, [interval]);
```
Scene 1 (0.0–5.0s): kicker `✱ CLEANUP`; code surface shows the frame-8 effect (lines 1–4 + `}, [interval]);`); on "cleanup-functie" (2.98s) the closing line moves down and lines `return () => {` and `};` type on (caret); coral wash on them.
Scene 2 (5.0–9.9s): on "clearInterval" (6.16s) `clearInterval(handle);` types on between; on "handle" (8.14s) both `handle` tokens (line 2 and line 7) get an amber wash and a thin hairline connector between them.
Scene 3 (9.9–16.4s): right: sequence stack builds top-down: `effect · 1000ms` at 10.0s; on "cleanup" (11.12s) `cleanup · clearInterval ✕` pill; on "vóór het effect opnieuw loopt" (12.12s) `effect · 500ms`, then `cleanup ✕` at 12.9s, `effect · 200ms` at 13.4s; on "wanneer je component verdwijnt" (14.22s) `unmount → cleanup ✕` at the bottom (dimmed ink tag).
Scene 4 (16.4–19.96s): on "altijd maar één timer" (17.3s) the timers list (below/next to the stack) shows `timer #1 · 1000ms` and `timer #2 · 500ms` struck through at 35%, and `timer #3 · 200ms` live with pulsing dot; mono note `✓ 1 timer actief`. Hold.

## Frame 10 — Data ophalen

- scene: The course's API example: useEffect with an inner `async` fetchFunction and `[]`. A ghost line `useEffect(async () => …)` gets struck through with a coral ✕. Right: an API card `worldtimeapi.org` returns JSON that drops into a small rendered list.
- voiceover: "Je gebruikt useEffect ook om data op te halen uit een API — één keer, met een lege array. Let op: de callback zelf mag niet async zijn. Dus maak je binnenin een async functie, en roep je die meteen op."
- duration: 17.16s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/10-data-ophalen.html
- type: feature_showcase
- persuasion: Practical recipe + common mistake
- beat: application

narrativeRole: The most common real-world use of useEffect from the course: fetching from an API once.
keyMessage: Fetch in an effect with []; the callback itself can't be async — wrap an async function inside.

- blueprint: compose
- focal: the code surface with the fetch effect
- roles: code surface (navy, left ~58%) = foreground subject · API card (tile, mono URL `GET /api/timezone/Europe/Brussels`) + JSON response + rendered `<ul>` (right) = supporting · ghost wrong line with coral ✕ = the one voltage
- sfx: whoosh-short

Code (App.tsx):
```
useEffect(() => {
  const fetchFunction = async () => {
    let result = await fetch("https://worldtimeapi.org/…");
    let json: TimezoneInfo = await result.json();
    setTimezoneInfo(json);
  };
  fetchFunction();
}, []);
```
Scene 1 (0.0–4.4s): kicker `✱ IN DE PRAKTIJK`; on "useEffect" (0.8s) code surface enters with `useEffect(() => {` and `}, []);`; on "data op te halen uit een API" (2.32s) right column API card fades in: `GET worldtimeapi.org/api/timezone/Europe/Brussels`.
Scene 2 (4.4–7.2s): on "één keer, met een lege array" (4.66s / 5.94s) `[]` gets an amber wash and a mono tag `1× bij mount`.
Scene 3 (7.2–11.3s): on "Let op" (7.38s) a ghost line above the panel `useEffect(async () => { … })` appears in dimmed mono; on "niet async" (9.84s) it is struck through in coral with a coral ✕ (the one voltage).
Scene 4 (11.3–17.16s): on "binnenin een async functie" (12.5s) lines 2–6 type on (caret, ~0.02s/char) with `async` amber-washed; on "roep je die meteen op" (14.64s) line 7 `fetchFunction();` types on; at 15.6s the API card emits a JSON snippet (`{ "timezone": "Europe/Brussels", "datetime": "…" }`) that slides down into a small rendered list card `TimeZone: Europe/Brussels`. Hold.

## Frame 11 — Strict Mode

- scene: A console panel shows `effect gestart` twice in development. `<StrictMode><App /></StrictMode>` snippet. Sequence: mount → effect → cleanup → effect (label `alleen in development`). A toggle `StrictMode` stays ON; final check "ruim netjes op".
- voiceover: "Zie je in development je effect toch twee keer lopen? Dat is Strict Mode. React test zo of je cleanup klopt. Zet het dus niet af — ruim gewoon netjes op."
- duration: 13.24s
- transition_in: crossfade
- status: animated
- src: compositions/frames/11-strict-mode.html
- type: product_intro
- persuasion: Myth-busting reassurance
- beat: reassurance

narrativeRole: Explains the course's "advanced" note: effects running twice in development is Strict Mode testing your cleanup.
keyMessage: Effect runs twice in dev = Strict Mode checking your cleanup. Keep it on.

- blueprint: compose
- focal: the console panel with two identical log lines
- roles: console panel (navy, left) = foreground subject · `<StrictMode>` snippet + sequence `mount → effect → cleanup → effect` (right) = supporting · toggle (tile pill, ON) = supporting · coral = the second `effect gestart` log line (the surprise) only
- sfx: none

Scene 1 (0.0–3.8s): kicker `✱ STRICT MODE`; console panel (title bar `Console`) enters; on "development" (0.74s) first log `▸ effect gestart`; on "twee keer" (2.58s) the second identical log lands with a coral left bar and mono `×2` badge.
Scene 2 (3.8–6.4s): on "Strict Mode" (4.48s) the right column shows the snippet `<StrictMode>\n  <App />\n</StrictMode>` in a small navy strip (StrictMode amber).
Scene 3 (6.4–8.9s): on "test zo of je cleanup klopt" (6.8s) a horizontal sequence builds under the snippet: `effect` → `cleanup` → `effect` (hairline pills + drawn arrows) with a mono note `alleen in development`.
Scene 4 (8.9–13.24s): on "Zet het dus niet af" (9.0s) a toggle `StrictMode` appears ON; a small mono `✕ uitzetten` hint fades in then is dismissed (fades out) at 10.4s; on "ruim gewoon netjes op" (10.94s) an ink check `✓ cleanup` lands on the `cleanup` pill. Hold.

## Frame 12 — Samenvatting

- scene: Recap card: headline "Wat je start, ruim je op." Three chips: `useEffect(() => …)` "side effects", `[deps]` "wanneer", `return () => clearInterval(…)` "cleanup". Ends on the coral ✱ mark.
- voiceover: "Kort samengevat: side effects horen in useEffect. De dependency array bepaalt wanneer het loopt. En wat je start, ruim je op — met een cleanup-functie."
- duration: 14.4s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/12-samenvatting.html
- type: cta
- persuasion: Callback + distillation + rule of three
- beat: "now I get it"

narrativeRole: Compresses the lesson into a screenshot-able recap card, mirroring react-array-state frame 10.
keyMessage: useEffect for side effects · deps decide when · cleanup what you start.

- blueprint: grid-card-assemble (Adapt)
- focal: the recap card — three chips under the headline
- roles: headline (EB Garamond) = foreground subject top · three tile chips (mono code + Inter label) = foreground · ✱ coral spike = the one voltage
- sfx: pop

Adapt: staggered assemble-and-hold triptych on cream, no camera move; same layout as react-array-state frame 10.
Scene 1 (0.0–1.3s): kicker `✱ SAMENGEVAT`; headline area reserved.
Scene 2 (1.3–5.3s): on "side effects horen in useEffect" (1.38s / 3.62s) chip 1 lands left: `useEffect(() => { … })` / label `side effects`.
Scene 3 (5.3–9.2s): on "De dependency array" (5.48s) chip 2 lands centre: `[ ]  ·  [count]` / label `bepaalt wanneer`.
Scene 4 (9.2–12.7s): on "wat je start, ruim je op" (9.52s) the headline "Wat je start, ruim je op." builds per word in EB Garamond above the chips; on "cleanup-functie" (12.72s) chip 3 lands right: `return () => clearInterval(handle)` / label `cleanup`.
Scene 5 (12.7–14.4s): the coral ✱ spike mark scales 0.92→1 beside the headline; everything holds still (final frame: gentle fade-out in the last ~0.4s).
