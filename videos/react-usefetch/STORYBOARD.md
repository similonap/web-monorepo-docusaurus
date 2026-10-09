---
format: 1920x1080
duration: 200s
mode: autonomous
message: "Een fetch in een useEffect heeft loading, error en cleanup nodig; stop je dat in een custom hook useFetch<T>, dan schrijf je die logica maar één keer."
arc: how-to-process
audience: "Studenten webframeworks die useState, useEffect en fetch kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Fifth clip in the series after `react-array-state`, `react-useeffect`, `react-usestate` and `react-props`. Same design system (`frame.md`, Code editorial), same layout grammar, same voice. When in doubt, look at how `../react-props/compositions/frames/*.html` (especially `02-badge.html`, `05-component.html`, `13-samenvatting.html`) and `../react-usestate/compositions/frames/*.html` (`02-teller.html`, `06-renderen.html`) solved it and do the same (code surface, kickers, chips, scherm card, mini panel, cursor, type-on helper).
- **Palette (frame.md, by role):** cream ground `#FAF9F5` on every frame (tile `#EFE9DE` / `#ECE3D4` for content cards); ink `#141413` for all text; warm navy `#181715` (bars `#252320`) ONLY on code surfaces (syntax: coral `#CC785C` keywords (`const`, `let`, `async`, `await`, `try`, `catch`, `finally`, `if`, `return`, `throw`, `new`, `export`, `function`, `interface`), amber `#E8A55A` function / component names and numbers (`useEffect`, `fetch`, `setPosts`, `Spinner`, `0`), teal `#5DB8A6` strings (the URLs, the error message), cream@60% dim for types (`Post[]`, `boolean`, `Error | null`, `T`), JSX tag brackets and comments); **coral = the one voltage per frame**: in problem frames it marks *what goes wrong* (the skipped `setLoading(false)`, the missing cleanup, the late `setPosts`, the duplicated code), in solution frames the fix itself (`finally`, `if (cancelled) return;`, `<T>`). Never two coral moments in one frame.
- **Type by role:** EB Garamond for the frame's single statement and hero words; Inter for labels and UI; JetBrains Mono kickers (coral ✱, uppercase, tracking 0.16em, at (80, 92)) and all code, chips and tags.
- **Recurring visual system:**
  - **Code surface** (left, x 80, width 1060, top 170, height up to 720, bottom ≤ 890): navy panel, title bar with file name (`App.tsx` / `useFetch.ts`), status strip, line numbers, JetBrains Mono. Frames with ≤ 16 lines use 26px / line-height 38px; frames with 17–18 lines use 24px / 35px. Code types on with a caret stepping per character (copy the `typeLine` helper from `../react-props/compositions/frames/02-badge.html`). Highlight = amber wash `rgba(232,165,90,0.24)`; the wrong code = coral rough box (drawn SVG path) or coral underline. **Fold marker:** a line that reads `⋯` (cream@40%, same indent as its block) stands for code shown in an earlier frame; a folded block on one line reads like `} catch (err) { ⋯ } finally { ⋯ }`.
  - **`scherm` card** (right column, x 1236, width 604, label `scherm` mono uppercase at y 180, card y 232 to ~540): tile card standing for the browser output. Content drawn simply in Inter 22–24px ink: a list of post titles as `<li>` rows (bullet dot + title, truncated with an ellipsis), in this order: `sunt aut facere repellat provident…`, `qui est esse`, `ea molestias quasi exercitationem…`, `eum et est occaecati`, `nesciunt quas odio`. The **spinner** is a 56px ring (4px stroke, ink 15%) with a 90° ink arc that rotates (deterministic: rotation driven by the timeline, e.g. `rotation: 360 * n` over a fixed duration with `ease: "none"`), centred in the card. The **error message** is a `<p>` in Inter 24px ink: `Error: Something went wrong fetching data`. A **button** is a small tile button with hairline, radius 6px, Inter 500 22px label `Vernieuwen`, top-left of the card content.
  - **mini `App.tsx` panel** (right column, under the scherm card, x 1236, width 604, top ~580, bottom ≤ 870): a small navy code panel (title bar 44px, no status strip, JetBrains Mono 22px / 34px) showing just the JSX. Used in frames 2, 3, 6.
  - **Chips**: tile chips with hairline + mono label (e.g. `loading: true`, `cancelled: false`, `trigger: 0`), pop in with `pop`. Value change: old value slides up and out, new one slides in (0.25s).
  - **Render-tag**: mono pill (e.g. `effect #2`) that pulses when the effect runs again.
  - **Cursor**: the oversized-cursor component (`compositions/components/oversized-cursor.html`) only where a button is clicked (frames 9, 10). Click = small dip (scale 0.96 → 1) + ink ripple on the target, with `click-soft`.
- **Motion grammar:** smooth long-tail `power3.out` settles, no bounce/overshoot/elastic; code arrives via type-on with caret; every reveal is cued to its spoken word (times below are seconds from the frame start = voice start, taken from `audio_meta.json`). Holds are still (only the spinner rotates while it is shown). Scenes fade out 0.5s `power2.inOut` (handled by the index transitions).
- **Layout:** kicker top-left at (80, 92); code surface left (x 80, ~1060 wide, top ~170); right column x ≈ 1236–1840. Nothing important below y ≈ 900 (caption band).
- **Negative list:** no real browser chrome / VS Code activity bars, no gradients, glow, bokeh, purple/blue accents, no breathing/drift/camera push, no front-loading (code, chips and UI never appear before the VO names them), no `Math.random` / `Date.now`, no em-dashes in visible text.
- **Captions:** on (separate captions composition); everything important stays in the top ~83%.

## Frame 1 — Posts, spinner, fout, knop

- scene: Four small tile cards appear in a row, each a mini "scherm": a list of posts, a spinner, an error message, a Vernieuwen button. On "use fetch." they slide up and dim and the hero word `useFetch` lands below with a coral underline.
- voiceover: "Posts ophalen van een API. Met een spinner terwijl je wacht, een foutmelding als het misloopt, en een knop om te vernieuwen. We bouwen het stap voor stap, tot onze eigen hook: use fetch."
- duration: 12.4s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: The finished result, shown first
- beat: calm → reveal

narrativeRole: Opens on everything the film will build, and names the goal.
keyMessage: Fetching data properly means posts, a spinner, an error and a refresh; we end with our own hook.

- blueprint: compose
- focal: the row of four mini scherm cards, then the hero word
- roles: four tile cards (each 380×240, radius 12, hairline, mono label above each: `posts`, `loading`, `error`, `refetch`; row centred, x 140–1780 with 40px gaps, top y 300) = foreground subject · hero word `useFetch` (EB Garamond 400, ~170px, centred, y ≈ 640) = payoff · coral = underline drawn under the hero word only
- sfx: pop @0.48, pop @2.68, pop @4.48, pop @6.64, whoosh-short @11.44

Compose: locked static stage, cream ground.
Scene 1 (0.0–2.2s): on "Posts" (0.0s) nothing; on "ophalen" (0.48s) card 1 settles in (y 20→0, opacity, power3.out) showing three post `<li>` rows; on "API." (1.32s) a mono tag `GET /posts` appears above the row, centred (y ≈ 230), ink 60%.
Scene 2 (2.2–8.0s): on "spinner" (2.68s) card 2 settles in with the rotating spinner ring; on "foutmelding" (4.48s) card 3 with `Error: Something went wrong` (Inter 22px, wraps on two lines); on "knop" (6.64s) card 4 with the `Vernieuwen` button and two post rows under it; on "vernieuwen." (7.2s) the button in card 4 does a small press (scale 0.96 → 1, ink ripple).
Scene 3 (8.0–12.4s): on "stap voor stap" (8.8s / 9.32s) small mono step numbers `1` `2` `3` `4` fade in at the top-left corner of each card (stagger 0.12s); on "eigen hook:" (10.4s / 10.8s) the whole row slides up by 60px and dims to 55% (0.6s power3.out) and the `GET /posts` tag fades out; on "use" (11.44s) the hero word `useFetch` lands (y 30→0, 0.5s power3.out, whoosh-short); on "fetch." (11.76s) the coral underline draws beneath it (0.4s). Hold.

## Frame 2 — Een eenvoudige fetch

- scene: App.tsx types on: a `url` constant, a `posts` state, and a `useEffect` with an async `fetchData` that fetches, reads the JSON and calls `setPosts`. The mini panel shows the JSX that maps the posts; the scherm card fills with post titles.
- voiceover: "We beginnen eenvoudig. In App maken we een state posts. In een use effect roepen we fetch aan, met de url van JSON placeholder. Het resultaat zetten we met set posts in de state, en de posts verschijnen op het scherm."
- duration: 14.4s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-fetch.html
- type: setup
- persuasion: Concrete starting point
- beat: orientation

narrativeRole: Sets up the baseline: a fetch inside a useEffect that stores the posts in state.
keyMessage: useEffect + fetch + setPosts: the posts appear.

- blueprint: compose
- focal: the code surface typing the effect
- roles: code surface (left, App.tsx, 26px/38px) = foreground subject · scherm card (right, top) with post list = supporting · mini App.tsx panel (right, bottom) with the JSX = supporting · amber washes as each part is named · coral: none in the code (calm setup); the one coral moment is the kicker ✱
- sfx: typing @1.84, typing @4.56, typing @9.6, pop @12.92

Compose: 60/40, code left, right column scherm card + mini panel.
Code (App.tsx):
```
const url = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result: Post[] = await response.json();
      setPosts(result);
    }
    fetchData();
  }, []);

  return ( ⋯ );
}
```
Mini App.tsx (JSX):
```
<ul>
  {posts.map(post => (
    <li key={post.id}>{post.title}</li>
  ))}
</ul>
```
Scene 1 (0.0–4.2s): kicker `✱ DE BASIS`; on "eenvoudig." (0.64s) the code surface enters (power3.out) with title bar `App.tsx`, lines 3, 15, 16 already in place (`const App = () => {`, `  return ( ⋯ );`, `}`); on "App" (1.84s) `App` on line 3 gets an amber wash; on "state posts." (2.8s / 3.28s) line 4 types on, wash moves to `posts`.
Scene 2 (4.2–9.2s): on "use effect" (4.56s) lines 6 and 13 type on (`useEffect(() => {` / `}, []);`), then lines 7, 11, 12 (`const fetchData = async () => {`, `}`, `fetchData();`); on "fetch" (5.76s) line 8 types on with amber wash on `fetch(url)`; on "url" (6.96s) line 1 types on at the top (the URL string in teal), amber wash on the URL; on "JSON placeholder." (7.76s / 8.24s) the amber wash stays on the URL (no extra tag).
Scene 3 (9.2–14.4s): on "resultaat" (9.6s) line 9 types on; on "set posts" (10.72s / 11.04s) line 10 types on with amber wash on `setPosts(result)`; on "posts verschijnen" (12.92s / 13.2s) the scherm label + card fade in and the five post rows settle in one after another (stagger 0.08s, pop), and the mini App.tsx panel settles under it with the JSX (no type-on, 0.4s fade + y 10→0). Hold.

## Frame 3 — Loading

- scene: The scherm card is empty at first ("de gebruiker ziet niets"). A `loading` state is added; `setLoading(true)` before the fetch and `setLoading(false)` after. In the mini panel `{loading && <Spinner />}` appears, and the scherm card shows the spinner.
- voiceover: "Maar zo'n fetch duurt even. En ondertussen ziet de gebruiker niets. Daarom voegen we een loading state toe. Voor de fetch zetten we loading op true, erna op false. En zolang loading true is, tonen we een spinner."
- duration: 14.24s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-loading.html
- type: feature_showcase
- persuasion: Gap, then fix
- beat: build

narrativeRole: Adds the loading state and the conditionally rendered spinner.
keyMessage: setLoading(true) before, setLoading(false) after; while loading, show a spinner.

- blueprint: compose
- focal: the `loading` lines in the code and the spinner in the scherm card
- roles: code surface (left, App.tsx, 26px/38px) = foreground subject · scherm card (right top) = supporting · mini App.tsx panel (right bottom) = supporting · chip `loading` (inside the scherm card's top-right corner, small) = supporting · coral = a thin coral underline under the empty scherm card's caption `niets…` in Scene 1 (the problem), nothing coral after that
- sfx: typing @5.84, typing @7.6, typing @10.0, pop @13.6

Compose: 60/40 like frame 2.
Code (App.tsx, excerpt):
```
const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const result: Post[] = await response.json();
      setPosts(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  return ( ⋯ );
```
Mini App.tsx (JSX):
```
{loading && <Spinner />}
<ul>
  {posts.map(post => ( ⋯ ))}
</ul>
```
Scene 1 (0.0–4.6s): kicker `✱ LADEN`; code from frame 2 on screen (lines 1, 2, 5, 6, 8–10, 12–14, 16 present; lines 3, 7, 11 are empty gaps of one line height so later lines can be inserted without reflow); scherm card visible but EMPTY; on "duurt even." (1.12s / 1.52s) a thin hairline progress bar under the scherm label grows slowly from 0 to 60% (ease "none", until 4.6s), with a mono tag `fetch…` beside it; on "ziet de gebruiker niets." (3.04s / 3.84s) an Inter 24px caption `niets…` in ink 40% appears centred in the empty card with the coral underline drawing under it (0.4s).
Scene 2 (4.6–11.2s): on "loading state" (5.84s / 6.24s) the caption, coral underline, progress bar and tag fade out and line 3 types on (amber wash on `loading`); on "Voor de fetch" (7.28s / 7.6s) line 7 `setLoading(true);` types on; on "true," (9.04s) a chip `loading: true` pops in the right column under the scherm label (x 1236, y 196, small); on "erna" (10.0s) line 11 `setLoading(false);` types on; on "false." (10.56s) the chip value swaps to `loading: false`.
Scene 3 (11.2–14.24s): on "zolang loading true is," (11.52s / 12.32s) the chip swaps back to `loading: true`, and the mini App.tsx panel settles in with its JSX, amber wash on `{loading && <Spinner />}`; on "spinner." (13.6s) the spinner ring appears centred in the scherm card and rotates for the rest of the frame (pop). Hold.

## Frame 4 — Try catch en response.ok

- scene: The body of `fetchData` is wrapped in `try { … } catch (err) { }`. Then the check `if (!response.ok) { throw new Error(...) }` types on. Right column: two status chips `404` / `500` show that fetch does not throw on them.
- voiceover: "En wat als er iets misloopt? We zetten de fetch in een try catch. Maar let op: bij een vierhonderdvier of een vijfhonderd gooit fetch zelf geen fout. Daarom kijken we naar response punt ok. Is die false, dan gooien we zelf een error."
- duration: 15.36s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-try-catch.html
- type: feature_showcase
- persuasion: The trap, then the guard
- beat: build

narrativeRole: Handles errors: try/catch plus throwing on non-2xx responses.
keyMessage: fetch does not throw on 404/500; check `response.ok` and throw yourself.

- blueprint: compose
- focal: the `if (!response.ok)` block
- roles: code surface (left, App.tsx, 24px/35px) = foreground subject · right column: a small "response" diagram = supporting: a tile card `response` (x 1236, y 232, w 604) listing three rows (mono 26px): `200  ok: true`, `404  ok: false`, `500  ok: false` · mono note `fetch gooit geen fout` · coral = the coral rough box around `if (!response.ok) {` … `}` (lines 6–8), the fix
- sfx: typing @3.2, pop @5.52, pop @6.72, typing @10.88, typing @13.76

Compose: 60/40, code left, response card right.
Code (App.tsx, excerpt):
```
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong fetching data");
      }
      const result: Post[] = await response.json();
      setPosts(result);
      setLoading(false);
    } catch (err) {

    }
  }
  fetchData();
}, []);
```
Scene 1 (0.0–4.2s): kicker `✱ FOUTEN`; the effect from frame 3 on screen without try/catch and without lines 6–8 (lines 4, 5, 9–11 sit at their final indent; gaps for lines 3, 6–8, 12–14 are reserved but empty); on "misloopt?" (1.04s) line 5 (`await fetch(url)`) gets a faint amber wash; on "try catch." (3.2s / 3.52s) lines 3 (`try {`) and 12–14 (`} catch (err) {`, empty line, `}`) type on and the body lines 4–11 get a thin amber left bar showing they are inside the try.
Scene 2 (4.2–9.8s): on "let op:" (4.44s) the response card + label `response` fade into the right column with only its header; on "vierhonderdvier" (5.52s) row `404  ok: false` slides in (pop); on "vijfhonderd" (6.72s) row `500  ok: false`; on "geen fout." (8.72s / 9.04s) the mono note `fetch gooit geen fout` appears under the card (ink 60%), and the row `200  ok: true` appears above the two others in ink 60% for contrast.
Scene 3 (9.8–15.36s): on "response punt ok." (10.88s / 11.76s) line 6 `if (!response.ok) {` types on and line 8 `}`; the `ok: false` values in the card get an amber wash; on "false," (12.96s) the coral rough box draws around lines 6–8 (0.5s); on "gooien we zelf een error." (14.0s / 14.96s) line 7 `throw new Error("Something went wrong fetching data");` types on fast (~0.012s/char). Hold.

## Frame 5 — Finally

- scene: An error jumps from the `throw` straight to `catch`: an arrow skips `setLoading(false)`, which gets the coral box, and the scherm card's spinner keeps turning. Then the line moves into a new `finally` block.
- voiceover: "Maar loopt het mis, dan springen we meteen naar de catch. Set loading false wordt overgeslagen, en de spinner blijft draaien. Daarom verhuist set loading naar de finally. Die loopt altijd, of het nu lukt of niet."
- duration: 13.6s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-finally.html
- type: pain_point
- persuasion: Show the bug, then move one line
- beat: twist → fix

narrativeRole: Shows why setLoading(false) belongs in finally.
keyMessage: finally always runs, success or error.

- blueprint: compose
- focal: the `setLoading(false)` line and its move into `finally`
- roles: code surface (left, App.tsx, 24px/35px) = foreground subject · jump arrow (ink, 2px, drawn SVG path in the gutter right of the code, from line 7 `throw` down to line 12 `catch`) = supporting · scherm card (right) with the spinner = supporting · two small mono chips `lukt ✓` and `mislukt ✗` under the scherm card = supporting · coral = rough box around the skipped `setLoading(false)` (Scene 1–2); when it moves, the coral goes away (one coral moment)
- sfx: whoosh-short @1.6, whoosh-short @8.4, pop @11.44, pop @12.96

Compose: 60/40.
Code (App.tsx, excerpt, final state):
```
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong fetching data");
      }
      const result: Post[] = await response.json();
      setPosts(result);
    } catch (err) {

    } finally {
      setLoading(false);
    }
  }
  fetchData();
}, []);
```
Start state: same as frame 4's end state (line 11 `setLoading(false);` inside the try, after `setPosts(result);`; no finally; total 17 lines).
Scene 1 (0.0–3.4s): kicker `✱ FINALLY`; scherm card right with the spinner turning; on "loopt het mis," (0.4s / 0.8s) line 7 (`throw ...`) gets an amber wash; on "springen" (1.6s) the jump arrow draws from line 7 down past lines 8–11 to `catch` (line 12) (0.6s, whoosh-short); on "catch." (2.92s) `catch (err)` gets an amber wash.
Scene 2 (3.4–7.9s): on "Set loading false" (3.6s / 4.32s) line 11 `setLoading(false);` gets the coral rough box; on "overgeslagen," (4.96s) it dims to 40%; on "spinner blijft draaien." (6.16s / 7.04s) a mono note `loading: true` appears under the scherm card (the spinner keeps turning).
Scene 3 (7.9–13.6s): on "verhuist" (8.4s) the coral box fades, line 11 lifts out and slides down (FLIP, 0.6s power3.out) while `} finally {` and `}` type in after the catch block and the line lands inside finally (lines reflow to the final state above), whoosh-short; on "finally." (9.92s) `finally` gets an amber wash; on "altijd," (11.44s) the arrow fades and chip `lukt ✓` pops under the scherm card with a thin hairline connector to the finally block's right edge; on "niet." (13.2s) chip `mislukt ✗` pops next to it with its own connector to the same spot (pop at 12.96). Hold.

## Frame 6 — Error state

- scene: A third state types on: `error`, of type `Error | null`. In the catch: `setError(err as Error)`. The mini panel adds `{error && <p>Error: {error.message}</p>}` and the scherm card shows the error message.
- voiceover: "De fout zelf willen we ook bijhouden. Dus maken we een error state, van het type Error of null. In de catch zetten we het error object. En is error niet null, dan tonen we de foutmelding."
- duration: 12.48s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-error.html
- type: feature_showcase
- persuasion: Completing the pattern
- beat: build

narrativeRole: Stores the error object in state and renders it.
keyMessage: error is Error or null; when it is not null, show it.

- blueprint: compose
- focal: the `error` state line and `setError(err as Error)`
- roles: code surface (left, App.tsx, 26px/38px) = foreground subject · chip `error: null` → `error: Error` (right column, under the scherm label) = supporting · scherm card showing the error message = supporting · mini App.tsx panel = supporting · coral = none in code; the one coral moment is a 3px coral left border on the rendered error `<p>` in the scherm card (what goes wrong, shown)
- sfx: typing @3.52, typing @7.08, pop @8.04, pop @11.76

Compose: 60/40, code left, scherm card + mini panel right.
Code (App.tsx, excerpt):
```
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<Error | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      ⋯
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }
  fetchData();
}, []);
```
Mini App.tsx (JSX):
```
{loading && <Spinner />}
{error && <p>Error: {error.message}</p>}
<ul>{posts.map( ⋯ )}</ul>
```
Scene 1 (0.0–2.5s): kicker `✱ ERROR STATE`; code on screen without lines 3 and 10 (empty gaps reserved); scherm card empty; on "fout" (0.32s) the empty `catch (err) {` block gets a faint amber wash; on "bijhouden." (1.72s) nothing new (hold).
Scene 2 (2.5–6.6s): on "error state," (3.52s / 3.84s) line 3 types on up to `useState<` ; on "type Error of null." (4.72s / 5.12s / 5.92s) `Error | null>(null);` types on with an amber wash on `Error | null`; a chip `error: null` pops in the right column (x 1236, y 196).
Scene 3 (6.6–9.0s): on "catch" (7.08s) line 10 `setError(err as Error);` types on; on "error object." (8.04s / 8.24s) the chip value swaps to `error: Error`.
Scene 4 (9.0–12.48s): on "niet null," (10.0s / 10.32s) the mini App.tsx panel settles in with amber wash on line 2; on "foutmelding." (11.76s) the scherm card shows `Error: Something went wrong fetching data` (Inter 24px, two lines) with the 3px coral left border (pop). Hold.

## Frame 7 — Klaar? Nee hoor.

- scene: The code is dimmed and shows `}, []);` with no cleanup: a dashed empty slot where `return () => { … }` should be. Right: a two-lane timeline: the component lane ends ("unmount"), the fetch lane keeps running and lands later with `setPosts(…)` in coral.
- voiceover: "Klaar? Nee hoor. Er is nog een belangrijk probleem: we ruimen niets op. Verdwijnt de component, of loopt het effect opnieuw, dan loopt de oude fetch gewoon verder. En komt die later binnen, dan zet hij toch nog de state."
- duration: 14.16s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/07-opkuis.html
- type: pain_point
- persuasion: The hidden problem, made visible
- beat: twist

narrativeRole: Names the missing cleanup: an old fetch can still set state.
keyMessage: Without cleanup the old fetch keeps running and still sets the state.

- blueprint: compose
- focal: the timeline with the late `setPosts(…)` landing
- roles: compact code surface (left, x 80, width 760, top 220, App.tsx, 24px/35px, 9 lines) = supporting · dashed empty slot (hairline ink 30%, dashed, radius 6) inside the code where the cleanup should be, mono label `cleanup?` = supporting · timeline (right, x 920–1840, y 260–720) = foreground subject: lane 1 `component` (tile bar, Inter label), lane 2 `fetch #1` (tile bar), time axis hairline · coral = the landing marker + chip `setPosts(…)` at the end of lane 2 (what goes wrong)
- sfx: pop @0.88, whoosh-short @5.6, whoosh-short @8.72, pop @12.64

Compose: 40/60, compact code left, timeline right.
Code (App.tsx, excerpt):
```
useEffect(() => {
  const fetchData = async () => {
    ⋯
    setPosts(result);
    ⋯
  }
  fetchData();
                                 ← dashed slot "cleanup?"
}, []);
```
Scene 1 (0.0–3.8s): kicker `✱ OPKUIS`; on "Klaar?" (0.0s) a statement `Klaar?` in EB Garamond 120px appears centred; on "Nee hoor." (0.88s / 1.16s) an italic `Nee hoor.` appears beside it (pop); on "probleem:" (3.04s) the statement fades out (0.4s) and the compact code surface settles in on the left.
Scene 2 (3.8–5.5s): on "ruimen niets op." (4.04s / 4.88s) the dashed slot opens between `fetchData();` and `}, []);` (height grows 0→70px, power3.out) with the mono label `cleanup?` in ink 50%.
Scene 3 (5.5–11.0s): the timeline axis is already drawn at 3.8s with lanes 1 and 2 starting at the left (lane 1 full-width bar `component` growing from 0 at 3.8s; lane 2 `fetch #1` bar growing at the same speed). On "Verdwijnt de component," (5.6s / 6.44s) lane 1 stops: a vertical hairline marker with mono tag `unmount` drops at its end, and the lane-1 bar dims to 35%; on "loopt het effect opnieuw," (7.2s / 7.96s) a second mono tag `of: effect opnieuw` stacks under `unmount`; on "oude fetch gewoon verder." (9.24s / 9.92s / 10.32s) lane 2 keeps growing past the marker (ease "none") with mono tag `nog bezig…`.
Scene 4 (11.0–14.16s): on "later binnen," (11.72s / 11.96s) lane 2's bar reaches its end and a small down arrow drops from it; on "zet hij" (12.64s) the coral landing marker + chip `setPosts(…)` pop at the end of lane 2 (pop); on "state." (13.72s) `setPosts(result);` in the code gets a coral underline (same coral moment, linked). Hold.

## Frame 8 — Cancelled

- scene: An aside card names `AbortController` ("in de praktijk"), then we pick a boolean. `let cancelled: boolean = false;` types on, the cleanup `return () => { cancelled = true; }` fills the dashed slot, and `if (cancelled) return;` guards `setPosts`. A mini timeline shows the old fetch now stopped.
- voiceover: "We hebben dus een manier nodig om te annuleren. In de praktijk gebruik je daarvoor een abort controller. Maar om het eenvoudig te houden, nemen we een boolean: cancelled. In de cleanup functie zetten we cancelled op true. En na de fetch kijken we eerst: is cancelled true? Dan stoppen we, en passen we de state niet meer aan."
- duration: 19.92s
- transition_in: push-slide
- status: animated
- src: compositions/frames/08-cancelled.html
- type: feature_showcase
- persuasion: The simplest mechanism that works
- beat: relief

narrativeRole: Adds the cancelled flag: set in cleanup, checked before setting state.
keyMessage: Cleanup sets cancelled = true; after the fetch, `if (cancelled) return;`.

- blueprint: compose
- focal: the code surface with the three cancelled lines
- roles: code surface (left, App.tsx, 24px/35px) = foreground subject · aside tile card (right column top, x 1236, y 232, w 604, h ~150): mono label `in de praktijk`, Inter 28px `AbortController`, dims to 45% after the choice = supporting · chip `cancelled: false` → `true` (right column, y ~440) = supporting · mini timeline (right column, y 560–820): lane `fetch #1` with an end marker that is stopped by a hairline barrier labelled `if (cancelled) return;` and the late `setPosts(…)` chip struck through and dimmed to 35% = supporting · coral = the coral underline under `if (cancelled) return;` in the code (the fix)
- sfx: pop @4.92, typing @8.48, typing @10.56, pop @12.64, typing @13.92, whoosh-short @17.36

Compose: 60/40.
Code (App.tsx, excerpt, final state):
```
useEffect(() => {
  let cancelled: boolean = false;
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      ⋯
      const result: Post[] = await response.json();
      if (cancelled) return;
      setPosts(result);
    } catch (err) { ⋯ } finally { ⋯ }
  }
  fetchData();

  return () => {
    cancelled = true;
  }
}, []);
```
Start state: the code above without lines 2, 9 and 14–17 (gaps reserved; lines 14–17 region shows the dashed `cleanup?` slot from frame 7).
Scene 1 (0.0–5.9s): kicker `✱ ANNULEREN`; on "annuleren." (1.84s) the dashed slot pulses once (amber outline); on "abort controller." (4.92s / 5.2s) the aside card settles into the right column (pop).
Scene 2 (5.9–10.2s): on "eenvoudig" (6.72s) the aside card dims to 45%; on "boolean:" (8.48s) line 2 types on up to `let cancelled: boolean`; on "cancelled." (9.56s) ` = false;` completes and chip `cancelled: false` pops in the right column (y ~440).
Scene 3 (10.2–13.3s): on "cleanup functie" (10.56s / 10.96s) the dashed slot is replaced: lines 14–17 type on (`return () => {`, `cancelled = true;`, `}`) with a blank line 13 above; on "true." (12.64s) the chip value swaps to `cancelled: true` (pop).
Scene 4 (13.3–19.92s): on "na de fetch" (13.6s / 13.92s) line 8 gets an amber wash and the mini timeline appears (lane `fetch #1` already long, end marker approaching); on "is cancelled true?" (15.6s / 16.32s) line 9 `if (cancelled) return;` types on; on "stoppen" (17.36s) a hairline barrier drops at the end of the timeline lane and the coral underline draws under line 9 (whoosh-short); on "state niet meer aan." (18.84s / 19.64s) the late `setPosts(…)` chip on the lane is struck through and dims to 35%, and line 10 `setPosts(result);` dims to 50%. Hold.

## Frame 9 — Vernieuwen

- scene: The scherm card shows a `Vernieuwen` button above the post list. The code shows a `trigger` state and the dependency array `[trigger]`. The cursor clicks the button; the trigger chip changes, `[trigger]` lights up, a render-tag `effect #2` pulses and the spinner flashes before the list returns.
- voiceover: "En als we een knop willen om te vernieuwen? Hoe laat je een use effect opnieuw lopen? Gewoon door een state in de dependency array te zetten. Bijvoorbeeld trigger. Verandert trigger, dan loopt het effect opnieuw."
- duration: 12.64s
- transition_in: crossfade
- status: animated
- src: compositions/frames/09-vernieuwen.html
- type: feature_showcase
- persuasion: Question, then the mechanism
- beat: new idea

narrativeRole: Shows how to rerun an effect: put a state in its dependency array.
keyMessage: Change a state that is in the dependency array, and the effect runs again.

- blueprint: compose
- focal: `[trigger]` in the dependency array
- roles: code surface (left, App.tsx, 26px/38px, 10 lines) = foreground subject · scherm card (right top) with button `Vernieuwen` + three post rows = supporting · chip `trigger: false` (right column, y ~580) = supporting · render-tag `effect #2` (right column, y ~660) = supporting · oversized cursor = supporting actor · coral = the coral underline under `trigger` inside `}, [trigger]);` (the fix)
- sfx: pop @0.88, typing @6.56, typing @9.04, click-soft @9.92, pop @11.32

Compose: 60/40.
Code (App.tsx, excerpt):
```
const [trigger, setTrigger] = useState<boolean>(false);

useEffect(() => {
  let cancelled: boolean = false;
  const fetchData = async () => { ⋯ }
  fetchData();
  return () => {
    cancelled = true;
  }
}, []);          → becomes  }, [trigger]);
```
Scene 1 (0.0–2.4s): kicker `✱ VERNIEUWEN`; code on screen without line 1 (gap reserved) and with `}, []);`; scherm card shows three post rows; on "knop" (0.88s) the `Vernieuwen` button settles in at the top of the scherm card (pop), pushing the rows down 56px.
Scene 2 (2.4–8.0s): on "use effect opnieuw lopen?" (3.28s / 3.96s) `useEffect` (line 3) gets an amber wash; on "dependency array" (6.56s / 7.2s) the `[]` on line 10 gets the amber wash.
Scene 3 (8.0–12.64s): on "Bijvoorbeeld trigger." (8.24s / 9.04s) `trigger` types into the array (`[trigger]`) with the coral underline, and line 1 types on; chip `trigger: false` pops in the right column; the cursor glides in toward the button. On "Verandert" (9.92s) the cursor clicks the button (dip + ripple, click-soft) and the chip swaps to `trigger: true`; on "trigger," (10.56s) the `[trigger]` pulses; on "loopt het effect opnieuw." (11.32s / 11.68s) render-tag `effect #2` pulses in (pop), the post rows fade to 0 and the spinner appears for 0.6s, then the rows settle back in (stagger 0.06s). Hold.

## Frame 10 — Boolean of teller

- scene: Two stacked code panels compare the two options. Top: `useState<boolean>(false)` with `setTrigger(!trigger)`, a chip flipping true/false. Bottom: `useState<number>(0)` with `refetch = () => setTrigger(trigger => trigger + 1)`, a chip counting 0, 1, 2, 3 and a note `3× vernieuwd`.
- voiceover: "Trigger kan een boolean zijn, die je bij elke klik omdraait van true naar false. Dat is genoeg. Maar je kan ook een teller nemen. Dan weet je meteen hoeveel keer je al vernieuwd hebt."
- duration: 11.28s
- transition_in: crossfade
- status: animated
- src: compositions/frames/10-teller.html
- type: comparison
- persuasion: Two valid options, side by side
- beat: nuance

narrativeRole: Boolean toggle versus counter for the trigger; the course uses the counter.
keyMessage: A boolean toggle is enough; a counter also tells you how often you refreshed.

- blueprint: compose
- focal: the two panels and their chips
- roles: panel A (left, x 80, y 190, w 1060, h ~250, navy, title bar `boolean`, 26px/38px) = foreground subject (Scenes 1–2) · panel B (left, x 80, y 490, w 1060, h ~290, title bar `teller`) = foreground subject (Scene 3) · chip A `trigger: false` (right column, aligned to panel A centre) · chip B `trigger: 0` (right column, aligned to panel B centre) + mono note `3× vernieuwd` · small `Vernieuwen` button beside each chip (x ~1600) with the cursor clicking · coral = a coral underline under the mono note `3× vernieuwd` (the counter's extra) only
- sfx: typing @0.8, click-soft @2.56, click-soft @3.84, typing @7.44, click-soft @8.56, click-soft @9.0, click-soft @9.44, pop @10.4

Compose: two stacked panels left, chips + buttons right.
Panel A (boolean):
```
const [trigger, setTrigger] = useState<boolean>(false);

<button onClick={() => setTrigger(!trigger)}>Vernieuwen</button>
```
Panel B (teller):
```
const [trigger, setTrigger] = useState<number>(0);
const refetch = () => setTrigger(trigger => trigger + 1);

<button onClick={refetch}>Vernieuwen</button>
```
Scene 1 (0.0–5.0s): kicker `✱ BOOLEAN OF TELLER`; on "Trigger" (0.0s) panel A settles in; on "boolean" (0.8s) its line 1 types on (amber wash on `boolean`); on "klik" (2.56s) line 3 types on fast, and the cursor clicks button A → chip A swaps to `trigger: true` (click-soft); on "true naar false." (3.84s / 4.32s) a second click → chip A swaps to `trigger: false`.
Scene 2 (5.0–6.3s): on "genoeg." (5.52s) a small mono tag `✓ genoeg` appears beside chip A (ink 60%).
Scene 3 (6.3–11.28s): on "teller" (7.44s) panel A dims to 55% and panel B settles in, its lines type on fast (~0.014s/char), amber wash on `number` and `trigger + 1`; chip B `trigger: 0` pops; on "meteen" (9.0s) the cursor clicks button B three times (8.56s, 9.0s, 9.44s), chip B counts `1`, `2`, `3` (value slides); on "vernieuwd hebt." (10.4s / 10.84s) the note `3× vernieuwd` appears under chip B with the coral underline (pop). Hold.

## Frame 11 — Ook users?

- scene: The whole App.tsx shrinks into a dim wall of code labelled `posts`. A second copy slides in beside it labelled `users`, with a coral border; on each named word a chip lands on it: `loading`, `error`, `cancelled`, `trigger`. On "Uiteraard niet." the copy fades and the hero `custom hooks` lands.
- voiceover: "Nu willen we ook users ophalen. Moeten we dan alles opnieuw schrijven? Loading, error, cancelled, trigger? Uiteraard niet. Daar zijn custom hooks heel handig voor."
- duration: 10.88s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/11-users.html
- type: pain_point
- persuasion: The copy-paste temptation, rejected
- beat: turn

narrativeRole: Motivates the custom hook: a second fetch would duplicate everything.
keyMessage: Don't copy the fetch logic; put it in a custom hook.

- blueprint: compose
- focal: the duplicated code block, then the hero words
- roles: code block A (x 140, y 200, w 640, h 600, navy, title bar `App.tsx · posts`, ~22 lines of the full component at 15px mono, cream@70%; not meant to be read, just a recognisable wall of the code built so far) = supporting · code block B (x 860, y 200, same size, title bar `App.tsx · users`, coral 2px border) = foreground subject in Scenes 1–2 · four mono chips stacking on block B's right edge (x 1540, y 300/380/460/540): `loading`, `error`, `cancelled`, `trigger` · hero `custom hooks` (EB Garamond 400, ~150px, centred, y ≈ 470) = payoff in Scene 3 · coral = block B's border only
- sfx: whoosh-short @0.8, pop @4.24, pop @5.04, pop @5.92, pop @6.6, whoosh-short @7.28

Compose: two blocks side by side, then a centred statement.
Block A/B content (same code for both; in B every `posts`/`Post` reads `users`/`User` and the url ends with `/users`): the full App component from frames 2–9 (states posts/loading/error/trigger, the useEffect with cancelled, try/catch/finally, response.ok, cleanup, `}, [trigger]);`).
Scene 1 (0.0–4.0s): kicker `✱ OOK USERS`; block A is on screen at 0.0s (settled); on "users" (0.8s) block B slides in from the right (x +200→0, power3.out, whoosh-short) with the coral border; on "alles opnieuw schrijven?" (2.76s / 3.36s) block B's lines get a faint amber wash top to bottom (0.6s sweep).
Scene 2 (4.0–7.2s): on "Loading," (4.24s), "error," (5.04s), "cancelled," (5.92s), "trigger?" (6.6s) chip after chip pops at block B's right edge (each with a hairline pointer to the matching line in block B).
Scene 3 (7.2–10.88s): on "Uiteraard" (7.28s) block B and the chips slide out to the right and fade (0.5s, whoosh-short), block A shrinks to 70% and moves left dimmed to 40%; on "niet." (8.0s) nothing more; on "custom hooks" (9.2s / 9.6s) the hero `custom hooks` lands centred-right (y 30→0, 0.5s power3.out). Hold.

## Frame 12 — useFetch.ts

- scene: A new file `useFetch.ts`. The function signature types on with a generic `<T>` (coral). The state lines and the effect move in from App, with `posts` renamed to `data`. The `FetchState<T>` interface and the return line appear and their four fields light up one by one.
- voiceover: "We maken een nieuw bestand: use fetch punt ts. De functie use fetch krijgt een url, en een generiek type T. Daarmee zeg je welk type data je terug verwacht. We verplaatsen alle code uit App naar deze hook, en geven het belangrijkste terug: data, loading, error en refetch."
- duration: 19.92s
- transition_in: push-slide
- status: animated
- src: compositions/frames/12-usefetch.html
- type: feature_showcase
- persuasion: The fix, built line by line
- beat: payoff

narrativeRole: Builds the custom hook with a generic type and the essential return values.
keyMessage: `useFetch<T>(url)` holds all the logic and returns data, loading, error and refetch.

- blueprint: compose
- focal: the code surface `useFetch.ts`
- roles: code surface (left, useFetch.ts, 24px/35px, 18 lines) = foreground subject · right column: chip `T = Post[]` (Scene 2) and a vertical list of four return chips `data: T | null`, `loading: boolean`, `error: Error | null`, `refetch: () => void` (Scene 4) = supporting · coral = a coral wash on `<T>` in the function signature (the fix)
- sfx: whoosh-short @1.76, typing @4.0, pop @6.88, whoosh-short @11.84, typing @15.2, pop @16.84, pop @17.44, pop @18.36, pop @19.12

Compose: 60/40.
Code (useFetch.ts):
```
interface FetchState<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
  refetch: () => void;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<number>(0);
  const refetch = () => setTrigger(trigger => trigger + 1);

  useEffect(() => { ⋯ }, [trigger, url]);

  return { data, loading, error, refetch };
}
```
Scene 1 (0.0–3.6s): kicker `✱ CUSTOM HOOK`; on "nieuw bestand:" (0.68s / 0.92s) the empty code surface settles in; on "use fetch punt ts." (1.76s / 2.8s) its title bar types `useFetch.ts` (whoosh-short at 1.76).
Scene 2 (3.6–11.3s): on "functie" (4.0s) line 8 types on up to `export function useFetch`; on "url," (5.76s) `(url: string)` types on; on "generiek type T." (6.88s / 7.36s / 7.84s) `<T>` is inserted after `useFetch` with the coral wash (pop) and ` {` + line 18 `}` complete the function (` : FetchState<T>` is NOT yet typed: leave a 0-width gap that opens in Scene 4); on "welk type data" (9.44s / 10.0s) chip `T = Post[]` pops in the right column (y ~260) with a mono note `bv.` before it (ink 50%).
Scene 3 (11.3–15.0s): on "verplaatsen" (11.84s) lines 9–15 slide in from the left edge (x −80→0, opacity, stagger 0.06s, whoosh-short) as already-written code (no type-on); amber wash on `data`/`setData` (line 10) and `T` in `useState<T | null>` for 0.8s; on "deze hook," (13.76s / 14.08s) a mono tag `uit App.tsx` appears beside line 15 then fades.
Scene 4 (15.0–19.92s): on "belangrijkste terug:" (15.2s / 15.92s) line 17 `return { data, loading, error, refetch };` types on, lines 1–6 (the interface) settle in from above (opacity, y −10→0) and `: FetchState<T>` opens in the signature; on "data," (16.84s), "loading," (17.44s), "error" (18.36s), "refetch." (19.12s) the matching word in line 17 gets an amber wash and the matching return chip pops in the right column (y 380/460/540/620). Hold.

## Frame 13 — Gebruiken in App

- scene: App.tsx is now short: two `useFetch` calls, one with `Post[]`, one with `User[]`, then the loading/error early returns and the JSX. Right: a small diagram, one `useFetch<T>` tile with two arrows to `posts` and `users`, and the note `1× geschreven · 2× gebruikt`.
- voiceover: "In App blijft er bijna niets over. Use fetch met Post array voor de posts, en use fetch met User array voor de users. Twee keer dezelfde logica, maar maar één keer geschreven."
- duration: 11.92s
- transition_in: crossfade
- status: animated
- src: compositions/frames/13-gebruiken.html
- type: proof
- persuasion: Show the payoff
- beat: satisfaction

narrativeRole: Shows the hook in use, twice, with different types.
keyMessage: Same logic for posts and users, written once.

- blueprint: compose
- focal: the two `useFetch` calls
- roles: code surface (left, App.tsx, 24px/35px, 16 lines) = foreground subject · right column diagram = supporting: tile `useFetch<T>` (x 1336, y 260, w 404, h 90, mono 30px), two hairline arrows down to tiles `posts · Post[]` (x 1236, y 470) and `users · User[]` (x 1556, y 470) · note `1× geschreven · 2× gebruikt` (Inter 30px, y ≈ 640) · coral = the coral underline under `1×` in the note (the payoff)
- sfx: whoosh-short @0.56, typing @2.56, pop @4.68, typing @5.6, pop @7.6, pop @10.72

Compose: 60/40.
Code (App.tsx):
```
const App = () => {
  const { data: posts, loading, error, refetch } =
    useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
  const { data: users } =
    useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <button onClick={refetch}>Vernieuwen</button>
      <ul>{posts?.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
}
```
(If line 13 is wider than the panel at 24px, shorten it to `<ul>{posts?.map(post => ( ⋯ ))}</ul>`.)
Scene 1 (0.0–2.5s): kicker `✱ IN APP`; on "In App" (0.0s / 0.24s) the code surface settles in with lines 1, 6–16 already present (no type-on) and a 4-line gap after line 1; on "bijna niets over." (1.04s / 1.88s) a mono tag `16 regels` appears in the status strip (ink 60%).
Scene 2 (2.5–8.4s): on "Use fetch met Post array" (2.56s / 3.44s / 3.76s) lines 2–3 type on fast, amber wash on `Post[]`; on "posts," (4.68s) tile `useFetch<T>` + arrow + tile `posts · Post[]` appear in the right column (pop); on "use fetch met User array" (5.6s / 6.48s / 6.88s) lines 4–5 type on, wash moves to `User[]`; on "users." (7.6s) the second arrow + tile `users · User[]` (pop).
Scene 3 (8.4–11.92s): on "Twee keer" (8.56s) both arrows pulse once (amber); on "één keer geschreven." (10.72s / 11.12s) the note `1× geschreven · 2× gebruikt` appears with the coral underline under `1×` (pop). Hold.

## Frame 14 — Samenvatting

- scene: A five-row summary: each row a mono chip on the left and an Inter phrase on the right: `loading` → spinner tonen, `try / catch` + `error` → fouten opvangen, `cancelled` → opruimen, `[trigger]` → opnieuw ophalen, `useFetch<T>` → overal hergebruiken. The last row is the payoff with a coral underline.
- voiceover: "Kort samengevat: toon een spinner met loading, vang fouten op met try catch en een error state, en ruim op met een cancelled vlag. Met een state in de dependency array haal je opnieuw op. En stop je dat allemaal in use fetch, dan hergebruik je het overal."
- duration: 16.16s
- transition_in: blur-crossfade
- status: animated
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
