---
format: 1920x1080
duration: 120s
mode: autonomous
message: "State is readonly: geef React een nieuwe array, nooit een aangepaste."
arc: how-to-process
audience: "Studenten webframeworks die useState met één waarde al kennen"
language: nl
music: calm minimal focused lo-fi underscore for a coding tutorial
---

## Video direction

- **Palette (frame.md, by role):** cream ground on every frame (tile half-step for content cards); ink for all text; warm navy ONLY on the code surface (with the preset's syntax colors: coral keywords, teal strings, amber numbers); **coral = the one voltage per frame** — in this film it always marks *the thing that is wrong or changes* (the rejected box, the swapped value, the "FOUT" stamp, the lost update). Never two corals in one frame.
- **Type by role:** EB Garamond display/headline for the frame's single statement or rule; Inter for labels and chrome; JetBrains Mono kickers (✱ coral spike, uppercase, e.g. `✱ RECEPT 1/3`) and all code + array values + reference labels (`#A`, `#B`).
- **The recurring visual system ("the array strip"):** an array is drawn as a row of tile cards (hairline, radius-md), one per element, JetBrains Mono value centred, a tiny mono index under each, and a mono reference tag (`ref #A`) at the strip's left end. A new array always gets a NEW ref letter (#A → #B → #C …) — the ref tag is how the viewer sees "new array". This strip appears in frames 2, 3, 5, 6, 7, 8, 10 at the same scale and the same y-band so the recipes read as one continuous stage.
- **Recipe stage (frames 5–7):** identical composition — kicker top-left, code surface (code-typing block) upper ~40% of the frame, array strips (old above, new below) in the middle band, nothing in the caption band. Seams between them are `push-slide LEFT` so it reads as one sliding workbench.
- **Motion grammar:** smooth long-tail (`power3`) settles, no bounce/overshoot; code always arrives via **type-on with caret** (`code-typing` block / `discrete-text-sequence`); array elements move as **cluster→outward / per-item stagger** copies between strips; every reveal is cued to its spoken word (word timings in `audio/vo-NN.words.json`). Holds are still; subtle jitter at most.
- **Rhythm / held frames:** frame 4 (the rule) is the deliberate held breather before the recipes; frame 10 ends on a still recap card (the screenshot moment). Frames 2, 3 and 9 are the busiest.
- **Negative list:** no real browser chrome/VS Code activity bars (a bare code surface only), no purple/blue "AI" gradients, no bokeh, no glow on content, no lazy breathing, no back-half pan/push, no front-loading (code and strips never appear before the VO names them), no slideshow freeze, no screensaver drift, no `Math.random`.
- **Captions:** on; everything important stays in the top ~83%.

## Frame 1 — Je klikt op Add, er gebeurt niets

- scene: A tiny app — number input, Add button, a table of 0 1 2 3 4. A cursor clicks Add; the table does not change. A small coral "?" appears.
- voiceover: "Je typt een getal. Je klikt op Add. En… er gebeurt niets."
- duration: 6.88s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Pain validation + demonstration
- beat: puzzlement + recognition

narrativeRole: Opens on the bug every student has hit, so the viewer recognises the problem before any theory.
keyMessage: Adding to an array in state "doesn't work" — and you've seen this.

- blueprint: compose
- focal: the mini app card (number input + Add button + 5-row table)
- roles: mini app card = foreground subject (centred, ~50% of frame) · cream ground with faint hairline grid = background · oversized cursor = supporting actor · coral "?" = the one voltage
- sfx: click-soft

Compose (cursor-ui-demo spirit): the cursor drives the UI on a locked static stage; the "app" is a bare tile card (no browser chrome) and the payoff is that the UI does NOT answer.
Scene 1 (0.0–0.9s): cream ground + hairline grid; the app card settles in centred (power3), table shows 0 1 2 3 4 in JetBrains Mono — Centered, ~50% of frame.
Scene 2 (0.9–1.7s): on "getal" the input types `5` (type-on with caret → discrete-text-sequence).
Scene 3 (1.7–2.6s): on "klikt op Add" the oversized-cursor block glides to the Add button and clicks (cursor click + ripple → cursor-click-ripple; button press → press-release-spring).
Scene 4 (2.6–5.04s): the table does not change; on "niets" (4.3s) a small coral "?" spring-settles beside the table (spring-pop-entrance, smooth) and the frame holds still.

## Frame 2 — De fout: push

- scene: Code panel shows `const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4]);` above addClicked, then types `numbers.push(number);` inside addClicked. Next to it the array boxes: a 6th box appears in the array — but the rendered table on the side stays at five rows. Then a second line `setNumbers(numbers);` types in; still nothing. Coral "FOUT" stamps on both.
- voiceover: "De code ziet er logisch uit: numbers punt push. De array verandert wél — maar het scherm niet. Ook set numbers erachter roepen helpt niet."
- duration: 11.44s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-push-fout.html
- type: pain_point
- persuasion: Demonstration + common-belief vs reality
- beat: tension + surprise

narrativeRole: Shows the two intuitive wrong attempts from the course text, side by side with what actually happens in memory vs on screen.
keyMessage: push changes the array, but React doesn't re-render — even when you call the setter with it.

- blueprint: compose
- focal: the code surface typing the wrong handler
- roles: code surface (code-typing block, navy) = foreground subject, left 60% · array strip `ref #A` + mini rendered table = supporting, right 40% · "FOUT" stamps = the one voltage (coral)
- sfx: typing, click

Compose: asymmetric 60/40 — code left, memory vs screen right.
Scene 1 (0.0–2.0s): kicker `✱ ZO NIET` top-left; code surface enters (power3) with `const addClicked = () => {` already in place.
Scene 2 (2.0–3.4s): on "numbers.push" the line `numbers.push(number);` types on (code-typing).
Scene 3 (3.4–5.0s): on "de array verandert wél" the right-hand array strip `ref #A` [0 1 2 3 4] gains a 6th tile `5` sliding onto the end (per-item reveal); the ref tag stays `#A`.
Scene 4 (5.0–6.3s): on "het scherm niet" the mini rendered table under it still shows five rows; a hairline divider labels them `geheugen` / `scherm` (mono-label).
Scene 5 (6.3–8.6s): on "setNumbers" a second line `setNumbers(numbers);` types on beneath push.
Scene 6 (8.6–9.84s): on "helpt niet" one coral `FOUT` stamp lands over both lines (css-marker-patterns, rough box) and holds.

## Frame 3 — Waarom: dezelfde referentie

- scene: The array as one box with a label "referentie #A". Before and after push: the contents change but the label stays #A. React (an eye/compare glyph) checks `oud === nieuw` → `true` → "niets te doen". Then a second, new box labelled #B appears: `oud === nieuw` → `false` → re-render.
- voiceover: "React kijkt niet in je array. Het vergelijkt enkel: is dit dezelfde array als daarnet? Na een push is het nog altijd hetzelfde object. Dus denkt React: niets veranderd."
- duration: 13.44s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-referentie.html
- type: product_intro
- persuasion: Concretization (reference as a labelled box) + causal chain
- beat: "aha"

narrativeRole: Names the mechanism — React compares references, not contents — which explains both failures from frame 2.
keyMessage: React only re-renders when it receives a *different* array.

- blueprint: compose
- focal: the array box with its reference tag (#A), and React's comparison `oud === nieuw`
- roles: array strip with big `ref #A` tag = foreground subject (centre-left) · comparison readout in JetBrains Mono = foreground secondary (right) · second strip `ref #B` = supporting (arrives late) · coral = the `true → niets te doen` verdict only
- sfx: key-press, whoosh-short

Compose: the reference becomes the visible object; layout evolves from centred to a 2-row compare.
Scene 1 (0.0–2.2s): the array strip `ref #A` [0 1 2 3 4 5] sits centred; on "kijkt niet in je array" its values dim to ~30% (React does not look at contents) — depth-of-field-blur on the values only.
Scene 2 (2.2–5.3s): on "vergelijkt" an eye/compare glyph appears right; on "dezelfde array als daarnet" the readout builds per-word: `oud` → `===` → `nieuw` (dynamic-content-sequencing).
Scene 3 (5.3–8.8s): on "na een push" the strip shows `oud: ref #A` and `nieuw: ref #A` stacked; on "hetzelfde object" both tags highlight the same letter (keyword glow → asr-keyword-glow, ink not coral).
Scene 4 (8.8–12.0s): readout resolves to `true` and on "niets veranderd" the coral verdict `→ niets te doen` lands and holds still (the held read).

## Frame 4 — De regel

- scene: One serif line on cream: "State is readonly." Beneath, builds in: "Geef React een nieuwe array — nooit een aangepaste." The word "nieuwe" in coral.
- voiceover: "Daarom één regel: state is readonly. Je maakt altijd een nieuwe array, en die geef je aan de setter."
- duration: 9.76s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/04-regel.html
- type: branding
- persuasion: Distillation
- beat: clarity

narrativeRole: Lands the thesis early so the three recipes read as applications of one rule.
keyMessage: Always hand the setter a brand-new array.

- blueprint: kinetic-type-beats (Reproduce)
- focal: the rule sentence in EB Garamond
- roles: headline "State is readonly." = foreground subject (display, ~60% width) · sub-line = supporting · coral underline on "nieuwe" = the one voltage · cream ground with ✱ spike = background
- sfx: none

Reproduce: statement builds across two beats on a flat cream field, then holds — the deliberate breather.
Scene 1 (0.0–1.4s): ✱ coral spike mark fades + scales 0.92→1 top-centre on "één regel" (spike-mark).
Scene 2 (1.4–3.4s): "State is readonly." per-word staggered reveal in display EB Garamond, centred at y≈0.42h (dynamic-content-sequencing).
Scene 3 (3.4–5.6s): sub-line in headline size builds: "Maak altijd een nieuwe array" — on "nieuwe" (4.9s) a 1px coral rule draws under the word (svg-path-draw).
Scene 4 (5.6–7.68s): "…en geef die aan de setter." completes on its cue (7.1s); everything holds still.

## Frame 5 — Toevoegen: spread

- scene: Recipe card 1/3 "Toevoegen". Code types `setNumbers(prev => [...prev, number]);`. Visual: the old boxes 0–4 are copied one by one into a new box (#B) by the `...`, then the new number slides onto the end. Table now shows six rows.
- voiceover: "Toevoegen doe je met de spread syntax. Drie puntjes kopiëren alle oude elementen in een nieuwe array — en daarachter zet je het nieuwe getal."
- duration: 11.4s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/05-toevoegen.html
- type: feature_showcase
- persuasion: Demonstration + signposting (recipe 1 of 3)
- beat: comprehension

narrativeRole: First recipe — add — on the shared "recipe card" stage (code top, array boxes below).
keyMessage: Add = spread the old array into a new one, then append.

- blueprint: compose
- focal: the spread copy — tiles flowing from `ref #A` into a new `ref #B`
- roles: code surface (code-typing) = foreground, upper ~40% · old strip `ref #A` = supporting (middle band) · new strip `ref #B` = foreground subject (below it) · new tile `5` in coral = the one voltage · kicker `✱ RECEPT 1/3 · TOEVOEGEN` = chrome
- sfx: whoosh-short, pop

Compose on the shared recipe stage (Video direction).
Scene 1 (0.0–1.8s): kicker + title "Toevoegen" (headline, EB Garamond) top-left; old strip `ref #A` [0 1 2 3 4] already resting in the middle band (it was there in frame 2's memory view).
Scene 2 (1.8–3.1s): on "spread syntax" the code types `setNumbers(prev => [...prev, number]);` (code-typing).
Scene 3 (3.1–4.4s): on "drie puntjes" the `...` in the code takes a highlight band (code-highlight block).
Scene 4 (4.4–7.2s): on "kopiëren alle oude elementen" each tile of #A duplicates downward one-by-one into an empty strip; on "nieuwe array" (6.6s) its tag resolves `ref #B` (per-item stagger → dynamic-content-sequencing).
Scene 5 (7.2–9.52s): on "het nieuwe getal" (8.5s) a coral tile `5` slides onto the end of #B; hold.

## Frame 6 — Verwijderen: filter

- scene: Recipe card 2/3 "Verwijderen". Code types `setNumbers(prev => prev.filter((number, index) => index !== i));`. Visual: each box passes a small gate; the one at index i is rejected (coral), the rest land in a new array #C.
- voiceover: "Verwijderen? Gebruik filter. Je houdt elk element, behalve dat ene op index i. En filter geeft altijd een nieuwe array terug."
- duration: 10.92s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/06-verwijderen.html
- type: feature_showcase
- persuasion: Demonstration + progressive disclosure
- beat: momentum

narrativeRole: Second recipe on the same stage — remove — stressing that filter returns a new array for free.
keyMessage: Remove = filter, which already returns a new array.

- blueprint: compose
- focal: the filter gate — tiles passing through, one rejected
- roles: code surface = foreground, upper ~40% · strip `ref #B` (6 tiles) = supporting · the gate line = supporting · new strip `ref #C` = foreground subject · rejected tile = the one voltage (coral)
- sfx: key-press, pop

Compose on the shared recipe stage; kicker `✱ RECEPT 2/3 · VERWIJDEREN`.
Scene 1 (0.0–1.5s): kicker + title "Verwijderen"; the strip from frame 5 (`ref #B`, 0 1 2 3 4 5) rests in the middle band.
Scene 2 (1.5–3.0s): on "filter" the code types `setNumbers(prev => prev.filter((number, index) => index !== i));` (code-typing).
Scene 3 (3.0–5.3s): on "elk element" a hairline gate draws under the strip (svg-path-draw); tiles start passing down through it one-by-one.
Scene 4 (5.3–6.5s): on "index i" tile index 2 hits the gate and is rejected — it turns coral and drops/fades out; a mono `i = 2` label points at it.
Scene 5 (6.5–9.2s): on "nieuwe array" (7.7s) the survivors settle into strip `ref #C` [0 1 3 4 5]; hold.

## Frame 7 — Wijzigen: map

- scene: Recipe card 3/3 "Wijzigen". Code types `setNumbers(prev => prev.map((oldNumber, index) => index === i ? newNumber : oldNumber));`. Visual: every box flows into a new array unchanged, except box i which is swapped for the new value (coral) on the way through.
- voiceover: "Wijzigen doe je met map. Elk element gaat mee naar een nieuwe array. Alleen op index i zet je de nieuwe waarde."
- duration: 9.76s
- transition_in: push-slide LEFT
- status: animated
- src: compositions/frames/07-wijzigen.html
- type: feature_showcase
- persuasion: Demonstration + rule of three (closes the trio)
- beat: confidence

narrativeRole: Third recipe — update — completing the add/remove/update trio on one consistent stage.
keyMessage: Update = map, swapping just the one element.

- blueprint: compose
- focal: the map pass — every tile flows through, one swapped
- roles: code surface = foreground, upper ~40% · strip `ref #C` = supporting · new strip `ref #D` = foreground subject · swapped tile = the one voltage (coral)
- sfx: whoosh-short

Compose on the shared recipe stage; kicker `✱ RECEPT 3/3 · WIJZIGEN`.
Scene 1 (0.0–1.4s): kicker + title "Wijzigen"; strip `ref #C` [0 1 3 4 5] rests in the middle band.
Scene 2 (1.4–2.0s): on "map" the code types `setNumbers(prev => prev.map((oldNumber, index) =>` and continues `index === i ? newNumber : oldNumber));` (code-typing).
Scene 3 (2.0–5.0s): on "elk element gaat mee" each tile copies straight down into a new strip; on "nieuwe array" (4.2s) the tag resolves `ref #D`.
Scene 4 (5.0–7.68s): on "index i" the tile at index 1 flips (hacker-flip-3d, short) from `1` to coral `42` on "nieuwe waarde" (7.1s); hold.

## Frame 8 — Functionele update

- scene: Code compares two lines: `setNumbers([...numbers, n])` vs `setNumbers(prev => [...prev, n])`. A fast double-click fires two updates: in the first version both read the same stale `numbers` (one item lost, coral), in the second each gets the latest `prev` (both items land).
- voiceover: "Viel het je op? In elk recept geven we de setter een functie. Met prev werk je altijd op de nieuwste versie van je state — ook als er snel na elkaar meerdere updates gebeuren."
- duration: 12.8s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-functionele-update.html
- type: benefit_highlight
- persuasion: Before/after + counterexample
- beat: foresight

narrativeRole: Explains why every recipe (frames 5–7) already uses `setNumbers(prev => …)`, and shows the concrete failure it prevents.
keyMessage: `setNumbers(prev => …)` always builds on the latest state.

- blueprint: comparison-split (Adapt)
- focal: two code cards side by side — direct value vs `prev =>`
- roles: left card `setNumbers([...numbers, n])` = foreground · right card `setNumbers(prev => [...prev, n])` = foreground · two mini strips under the cards = supporting · the lost update = the one voltage (coral)
- sfx: click-soft, pop

Adapt: keep the split-tilt two-card entry (signature) but the badges become the result strips under each card; the overshoot badge is dropped in favour of a smooth settle.
Scene 1 (0.0–2.3s): kicker `✱ WAAROM PREV?`; title "Geef de setter een functie" builds on its cue (headline).
Scene 2 (2.3–5.0s): on "functie" both code cards enter from opposite wings with mirrored tilts (split-tilt-cards); on "prev" (3.4s) the right card's `prev =>` takes a highlight band.
Scene 3 (5.0–7.9s): on "nieuwste versie" a tiny `prev` arrow on the right card points at the latest strip.
Scene 4 (7.9–10.8s): on "snel na elkaar" two quick clicks fire (cursor-click-ripple ×2): left strip ends [0 1 2 **3**] — one update lost, coral; right strip ends [0 1 2 3 4] — both land; on "meerdere updates" a mono `2 updates → 1` vs `2 updates → 2` label appears; hold.

## Frame 9 — Keys: index of id?

- scene: A list of three rows with inputs (Appel, Peer, Kiwi) keyed by index 0 1 2. Delete "Appel": the keys shift (Peer becomes key 0) and the typed-in input text sticks to the wrong row (coral). Then the same list with ids (a7, b2, c9): delete works, each row keeps its own state.
- voiceover: "In de eenvoudige voorbeelden gebruiken we key is index — en dat werkt. Maar zodra je items verwijdert, schuiven de indexen op, en kan React rijen door elkaar halen. Geef dan elk item een vaste id als key."
- duration: 17.2s
- transition_in: cut
- status: animated
- src: compositions/frames/09-keys.html
- type: social_proof
- persuasion: Counterexample (here is when it breaks) + before/after
- beat: unease → resolve

narrativeRole: Caveat that ties remove (frame 6) to the course's own `key={index}` examples without contradicting them — it works there, it breaks once items move.
keyMessage: Use a stable id as key once items can be removed or reordered.

- blueprint: compose
- focal: a 3-row list with inputs whose typed text follows the wrong row
- roles: list card (rows Appel / Peer / Kiwi, each with a small text input) = foreground subject, left 60% · key labels in JetBrains Mono beside each row = supporting · the mismatched input text = the one voltage (coral) · second list (ids) = foreground in the resolution
- sfx: key-press, whoosh-short, pop

Compose: split before/after across the shot (asymmetric 60/40 → then the fixed version).
Scene 1 (0.0–3.8s): list card enters; on "key is index" mono labels `key=0 / 1 / 2` appear beside the rows; the input next to Appel shows the typed note `vers!`.
Scene 2 (3.8–5.1s): on "dat werkt" a small ink check ✓ appears (no coral).
Scene 3 (5.1–7.5s): on "items verwijdert" the Appel row is deleted (fades + collapses).
Scene 4 (7.5–11.5s): on "schuiven de indexen op" Peer's label slides `key=1 → key=0`, Kiwi `2 → 1`; on "door elkaar" the input text `vers!` is now wrongly sitting next to Peer — coral outline (css-marker-patterns) marks the mix-up.
Scene 5 (11.5–15.28s): on "vaste id" a second list on the right replays with labels `key="a7" / "b2" / "c9"`; delete Appel → `vers!` leaves with it, Peer and Kiwi keep their own inputs; hold.

## Frame 10 — Samenvatting

- scene: Callback to frame 4's rule at top. Three recipe chips assemble below: "Toevoegen → [...arr, x]", "Verwijderen → filter", "Wijzigen → map", plus a small "prev =>" and "key = id" footnote row. Ends on the coral ✱ mark.
- voiceover: "Kort samengevat: toevoegen met spread, verwijderen met filter, wijzigen met map. Altijd een nieuwe array — en React doet de rest."
- duration: 11.56s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/10-samenvatting.html
- type: cta
- persuasion: Callback + distillation + rule of three
- beat: "now I get it"

narrativeRole: Compresses the whole lesson into a recap card students can screenshot.
keyMessage: Spread, filter, map — always a new array.

- blueprint: grid-card-assemble (Adapt)
- focal: the recap card — three recipe chips under the rule
- roles: rule line (EB Garamond headline) = foreground subject top · three recipe chips (tile cards with mono code) = foreground · footnote row (`prev =>`, `key = id`) = supporting · ✱ coral spike = the one voltage
- sfx: pop

Adapt: keep the staggered assemble-and-hold; it is a 3-item triptych on cream, no camera move, ending on a still screenshot card.
Scene 1 (0.0–1.1s): callback: "State is readonly." headline settles at the top (from frame 4).
Scene 2 (1.1–2.9s): on "toevoegen met spread" chip 1 `[...arr, x]` lands left (spring-pop-entrance, smooth) — triptych.
Scene 3 (2.9–3.9s): on "verwijderen met filter" chip 2 `arr.filter(…)` lands centre.
Scene 4 (3.9–5.2s): on "wijzigen met map" chip 3 `arr.map(…)` lands right.
Scene 5 (5.2–7.5s): on "altijd een nieuwe array" the footnote row fades in beneath: `prev =>` · `key = id`.
Scene 6 (7.5–9.44s): on "React doet de rest" the coral ✱ spike mark scales 0.92→1 beside the headline; the whole card holds still to the end (final frame: gentle fade-out in the last ~0.4s).
