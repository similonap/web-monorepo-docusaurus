---
format: 1920x1080
duration: 153s
mode: autonomous
message: "Met props geef je data door aan een component, zodat je één component kan hergebruiken in plaats van code te kopiëren."
arc: how-to-process
audience: "Studenten webframeworks die JSX en eenvoudige componenten kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Fourth clip in the series after `react-array-state`, `react-useeffect` and `react-usestate`. Same design system (`frame.md`, Code editorial), same layout grammar, same voice. When in doubt, look at how `../react-usestate/compositions/frames/*.html` (especially `02-teller.html`, `06-renderen.html`, `14-samenvatting.html`) solved it and do the same (code surface, kickers, chips, scherm card, cursor, type-on helper).
- **Palette (frame.md, by role):** cream ground `#FAF9F5` on every frame (tile `#EFE9DE` / `#ECE3D4` for content cards); ink `#141413` for all text; warm navy `#181715` (bars `#252320`) ONLY on code surfaces (syntax: coral `#CC785C` keywords, amber `#E8A55A` function/component names and numbers, teal `#5DB8A6` strings, cream@60% dim for types, JSX tag brackets and comments); **coral = the one voltage per frame**: in problem frames it marks *what goes wrong* (the copied code, the duplicate component, `'banaan'`), in solution frames the fix itself (`Badge`, `label`, `= 'green'`). Never two coral moments in one frame.
- **Badge colours on screen.** The rendered badges inside the `scherm` card are the only coloured fills in the film. They stand for CSS `green` / `red` / `blue`, but use these toned versions so they sit in the palette: green `#3F7D4E`, red `#B04A3C`, blue `#3B5F8F`; text white `#FFFFFF`, Inter 500 ~30px. Honest to the code (a plain `div` is a block element): each badge is a full-width strip inside the scherm card's inner padding (left/right 28px), height ~58px, radius 0 (no border-radius in the code!), text left with ~10px inner padding, strips stacked with 14px gap. A badge with an invalid colour (`'banaan'`) renders as a strip with NO background: white text on the cream tile, barely visible.
- **Type by role:** EB Garamond for the frame's single statement and hero words; Inter for labels and UI; JetBrains Mono kickers (coral ✱, uppercase, tracking 0.16em, at (80, 92)) and all code, chips and tags.
- **Recurring visual system:**
  - **Code surface** (left, x 80, width 1060): navy panel, title bar with file name (`App.tsx` / `Badge.tsx`), status strip, line numbers, JetBrains Mono. Default 28px / line-height 44px; frames with 13+ lines use 26px / 38px and may start at top 170 with height up to 720 (bottom ≤ 890). Code types on with a caret stepping per character (copy the `typeLine` helper from `../react-usestate/compositions/frames/02-teller.html`). Highlight = amber wash `rgba(232,165,90,0.24)`; the wrong code = coral rough box (drawn SVG path) or coral underline.
  - **`scherm` card** (right column, x 1236, width 604, label `scherm` mono uppercase at y 180, card y 232 to ~540): tile card standing for the browser output; inside, the rendered badge strips. Same position in every frame that shows output.
  - **mini `App.tsx` panel** (right column, under the scherm card, x 1236, width 604, top ~580): a small navy code panel (title bar 44px, no status strip, JetBrains Mono 24–26px / 38px) showing just the JSX where Badge is used. Used in frames 5, 9, 10, 12.
  - **Chips**: tile chips with hairline + mono label (e.g. `props`, `label: "Nieuw"`, `color: 'green'`), pop in with `pop`.
  - **Cursor**: the oversized-cursor component (`compositions/components/oversized-cursor.html`) only where something is copied/pasted (frame 3).
- **Motion grammar:** smooth long-tail `power3.out` settles, no bounce/overshoot/elastic; code arrives via type-on with caret; every reveal is cued to its spoken word (times below are seconds from the frame start = voice start, taken from `audio_meta.json`). Holds are still. Scenes fade out 0.5s `power2.inOut` (handled by the index transitions).
- **Layout:** kicker top-left at (80, 92); code surface left (x 80, ~1060 wide, top ~180); right column x ≈ 1236–1840. Nothing important below y ≈ 900 (caption band).
- **Negative list:** no real browser chrome / VS Code activity bars, no gradients, glow, bokeh, purple/blue UI accents (the blue badge strip is content, not chrome), no breathing/drift/camera push, no front-loading (code, chips and UI never appear before the VO names them), no `Math.random` / `Date.now`, no em-dashes in visible text.
- **Captions:** on (separate captions composition); everything important stays in the top ~83%.

## Frame 1 — Drie badges, één keer code

- scene: Three badge strips stacked centre-left (Nieuw green, Uitverkocht red, Promo blue). A single mono chip `<Badge />` sits beside them with three thin hairline connectors to the strips. On "props." the hero word lands on the right.
- voiceover: "Drie badges, elk met een eigen label en een eigen kleur. Toch schrijf je de code maar één keer. Hoe? Met props."
- duration: 8.78s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: Curiosity + demonstration
- beat: calm → reveal

narrativeRole: Opens on the finished result the film builds toward, and names the concept.
keyMessage: One piece of code, many badges: that is what props give you.

- blueprint: compose
- focal: the three badge strips (each ~560px wide, 72px tall, Inter 500 34px white label)
- roles: badge strips = foreground subject (left half, x 200–760, y 300/400/500) · mono chip `<Badge />` (x 880, y ~400, tile chip with hairline) + three hairline connectors chip→strips = supporting · hero word "props." (EB Garamond 400 italic ~190px, right side x ≈ 1180, y ≈ 360) = payoff · coral = a short underline drawn under "props." only
- sfx: pop @1.32, pop @7.44

Compose: locked static stage.
Scene 1 (0.0–3.9s): cream ground. On "Drie" (0.0s) nothing yet; on "badges" (0.32s) the three strips settle in one after another (y 20→0, opacity, stagger 0.18s, power3.out); on "eigen label" (2.36s) the three labels get a thin amber underline pulse (stagger 0.1s); on "eigen kleur" (3.28s) a subtle scale 1→1.02→1 on the strips' colour fill only (0.4s, no bounce, settle).
Scene 2 (3.9–6.4s): on "code" (4.96s) the mono chip `<Badge />` lands at x 880 (pop); on "één keer" (5.44s) three hairline connectors draw from the chip to the three strips (0.5s, stagger 0.08s).
Scene 3 (6.4–8.78s): on "Hoe?" (6.48s) the strips + chip + connectors slide left as a group by ~140px and dim to 70%; on "props." (7.44s) the hero word "props." lands on the right (y 30→0, 0.5s power3.out) and a coral underline draws beneath it (0.4s). Hold still.

## Frame 2 — Een eenvoudige badge

- scene: App.tsx types the App component returning one `div` with an inline style (white text, green background) and the label `Nieuw`. Right: the scherm card shows one green strip with "Nieuw".
- voiceover: "We beginnen met een eenvoudige badge. Gewoon een div, met een tekstkleur, een achtergrondkleur en een label: nieuw. Die zetten we rechtstreeks in onze App-component."
- duration: 11.1s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-badge.html
- type: setup
- persuasion: Concrete starting point
- beat: orientation

narrativeRole: Sets up the example: a badge is just a styled div, written straight into App.
keyMessage: A badge is a div with a text colour, a background colour and a label.

- blueprint: compose
- focal: the code surface typing the badge div
- roles: code surface (left, App.tsx, 28px/44px) = foreground subject · scherm card with one green strip "Nieuw" = supporting · amber washes on `color: 'white'`, `background: 'green'`, `Nieuw` as they are named · coral: none (calm setup) except the kicker spike
- sfx: typing @2.4, pop @6.96

Compose: 60/40, code left, scherm right (same as react-usestate frame 2).
Code (App.tsx):
```
const App = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Nieuw
    </div>
  );
}
```
Scene 1 (0.0–2.4s): kicker `✱ HET VOORBEELD`; on "badge" (1.6s) the code surface enters (power3.out) with title bar `App.tsx`, lines 1–2 and 6–7 already in place.
Scene 2 (2.4–7.7s): on "div" (3.12s) line 3 types on up to `<div style={{ ` and line 5 `</div>`; on "tekstkleur" (3.92s) `color: 'white',` types on and gets an amber wash; on "achtergrondkleur" (4.88s) ` background: 'green' }}>` types on, amber wash moves to it; on "label: nieuw" (6.36s / 6.96s) line 4 `Nieuw` types on (amber wash), and at 6.96s the scherm label + card fade in with one green strip "Nieuw" (pop).
Scene 3 (7.7–11.1s): on "rechtstreeks in onze App-component" (8.44s / 9.36s) washes clear and the component name `App` on line 1 gets an amber wash; a small mono tag `in App` appears at the right edge of line 1. Hold.

## Frame 3 — Kopiëren en plakken

- scene: The badge div is copied and pasted twice in App.tsx (now wrapped in a fragment `<>…</>`). The scherm card fills with three identical green "Nieuw" strips.
- voiceover: "Nu wil je diezelfde badge ook ergens anders tonen. En nog ergens anders. Dus je kopieert de div, en plakt hem erbij. En nog eens."
- duration: 9.18s
- transition_in: crossfade
- status: animated
- src: compositions/frames/03-kopieren.html
- type: pain_point
- persuasion: The plausible shortcut, demonstrated
- beat: routine

narrativeRole: Shows the copy-paste reflex: the same block appears three times.
keyMessage: Copy-paste gives you three identical badges, and three copies of the code.

- blueprint: compose
- focal: the code surface growing with pasted blocks
- roles: code surface (left, App.tsx, 26px/38px, top 170, height 720) = foreground subject · scherm card filling with strips (right) = supporting · oversized cursor + small mono chips `⌘C` / `⌘V` near the cursor = supporting actor · coral: a thin coral left-edge bar beside each pasted block (the second and third) = the one voltage (the copies)
- sfx: click-soft @5.16, whoosh-short @6.4, whoosh-short @7.6

Compose: same 60/40 layout as frame 2 (continuity).
Code (App.tsx) final state:
```
const App = () => {
  return (
    <>
      <div style={{ color: 'white', background: 'green' }}>
        Nieuw
      </div>
      <div style={{ color: 'white', background: 'green' }}>
        Nieuw
      </div>
      <div style={{ color: 'white', background: 'green' }}>
        Nieuw
      </div>
    </>
  );
}
```
Scene 1 (0.0–3.0s): kicker `✱ NOG EENS`; the frame-2 code is on screen (one div, already wrapped: lines 1–6 and 13–15, with `<>` / `</>`); scherm card shows one strip. On "ergens anders tonen" (1.68s / 2.44s) a dashed hairline empty slot appears under the first strip in the scherm card (where badge 2 should go).
Scene 2 (3.0–4.8s): on "nog ergens anders" (3.6s) a second dashed slot appears under it.
Scene 3 (4.8–7.6s): on "kopieert" (5.16s) the cursor drags a selection over lines 4–6 (amber selection wash), chip `⌘C` pops beside it; on "plakt" (6.4s) chip `⌘V`, lines 7–9 appear at once (paste, no type-on: 0.2s fade + y 8→0), the code below shifts down; at the same moment the first dashed slot in the scherm card fills with a green "Nieuw" strip; coral left-edge bar beside lines 7–9.
Scene 4 (7.6–9.18s): on "En nog eens" (7.6s / 7.96s) lines 10–12 paste in the same way, coral bar beside them, the second slot fills. Hold.

## Frame 4 — Don't Repeat Yourself

- scene: The three copies light up: `'green'` three times. Changing the colour means three edits. Then the code dims and the principle lands as a statement: "Don't Repeat Yourself." with the mono tag `DRY`.
- voiceover: "Maar nu herhaal je jezelf. Wil je de kleur aanpassen, dan moet je dat op drie plaatsen doen. Daarmee overtreed je het DRY-principe: Don't Repeat Yourself."
- duration: 9.98s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/04-dry.html
- type: pain_point
- persuasion: Naming the principle
- beat: insight

narrativeRole: Names why copy-paste is a problem: one change means three edits; that breaks DRY.
keyMessage: Repeating code breaks DRY: Don't Repeat Yourself.

- blueprint: compose
- focal: the statement "Don't Repeat Yourself." (EB Garamond, right column)
- roles: code surface (left, same 15-line App.tsx as frame 3, 26px/38px) = supporting evidence · three amber washes on the three `'green'` tokens + small mono counters `1` `2` `3` beside them = supporting · statement "Don't Repeat Yourself." (EB Garamond 400, ~96px, three lines, right column x 1236, y ≈ 300–600) = foreground subject · mono kicker-like tag `DRY` above it · coral = an underline under the initials D, R, Y (drawn once, one stroke group) = the one voltage
- sfx: pop @4.2, whoosh-short @6.72

Compose: 60/40, code left, statement right.
Scene 1 (0.0–1.9s): kicker `✱ HERHALING`; code from frame 3 on screen (no coral bars now); on "herhaal je jezelf" (0.44s) the three badge blocks (lines 4–6, 7–9, 10–12) get a faint amber wash one after another (stagger 0.15s).
Scene 2 (1.9–5.5s): on "kleur aanpassen" (2.4s / 2.76s) washes clear except on the three `'green'` tokens; on "drie plaatsen" (4.2s / 4.48s) small mono counters `1`, `2`, `3` pop at the right end of lines 4, 7, 10 (stagger 0.12s).
Scene 3 (5.5–9.98s): on "overtreed" (5.96s) the code surface dims to 45%; on "DRY-principe" (6.72s) the mono tag `DRY` lands top of right column (y ≈ 230); on "Don't" (8.0s), "Repeat" (8.24s), "Yourself." (8.64s) the statement builds word by word (one per line), and the coral underline draws under the three capitals D, R, Y at 8.9s (0.4s). Hold.

## Frame 5 — Maak er een component van

- scene: The div moves into its own component `Badge` (left code surface, Badge.tsx). The mini App.tsx panel shows `<Badge />` three times. The scherm card still shows the same three green strips.
- voiceover: "Dus maken we er een component van: Badge. De div staat nu op één plek. In App gebruik je gewoon drie keer Badge, en je scherm blijft hetzelfde."
- duration: 9.9s
- transition_in: push-slide
- status: animated
- src: compositions/frames/05-component.html
- type: feature_showcase
- persuasion: The fix
- beat: relief

narrativeRole: Applies DRY: one Badge component, used three times.
keyMessage: Put the div in a component once, then use `<Badge />` as often as you like.

- blueprint: compose
- focal: the Badge component on the left code surface
- roles: code surface (left, Badge.tsx, 28px/44px) = foreground subject · mini App.tsx panel (right column under the scherm card) = supporting · scherm card with three green strips = supporting (unchanged) · coral = a wash on the component name `Badge` on line 1 (the fix) = the one voltage
- sfx: typing @0.5, pop @5.48

Compose: 60/40; right column: scherm card (y 232–540) + mini App.tsx panel (y ~580–860).
Code (Badge.tsx):
```
const Badge = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Nieuw
    </div>
  );
}
```
Mini App.tsx:
```
<>
  <Badge />
  <Badge />
  <Badge />
</>
```
Scene 1 (0.0–3.0s): kicker `✱ EEN COMPONENT`; scherm card with three green strips is visible from 0.2s (continuity with frame 4); on "component" (1.32s) the code surface enters with title bar `Badge.tsx` and lines 1–7 type on fast (~0.018s/char); on "Badge" (2.24s) the name `Badge` on line 1 gets the coral wash.
Scene 2 (3.0–5.2s): on "één plek" (4.28s / 4.48s) lines 3–5 get an amber wash and a mono tag `1×` appears at the right edge of line 3.
Scene 3 (5.2–9.9s): on "In App" (5.2s / 5.48s) the mini App.tsx panel settles under the scherm card; on "drie keer Badge" (6.52s / 6.96s) its three `<Badge />` lines type on (stagger) with a small pop; on "scherm blijft hetzelfde" (8.0s / 8.56s) the three strips in the scherm card pulse once with a thin amber ring (stagger 0.1s) and a mono note `zelfde resultaat` appears under the scherm label. Hold.

## Frame 6 — Een ander label?

- scene: Request: a badge with label "Uitverkocht". The scherm card shows a dashed empty strip labelled "Uitverkocht". The tempting answer types on: a second component `UitverkochtBadge` that is a near-copy of Badge. On "Liever niet" it gets a coral rough box and is struck through.
- voiceover: "Klaar? Nee. Nu komt de vraag om dezelfde badge te tonen, maar met een ander label: uitverkocht. Maak je dan een nieuwe component? Liever niet. Dan kopieer je opnieuw bijna alles."
- duration: 13.34s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-ander-label.html
- type: pain_point
- persuasion: The plausible wrong answer, rejected
- beat: twist

narrativeRole: Introduces the new requirement and shows why a second component is the wrong reflex.
keyMessage: A new component per label would be copy-paste all over again.

- blueprint: compose
- focal: the duplicated `UitverkochtBadge` component and its coral rough box
- roles: code surface (left, Badge.tsx, 26px/38px, top 170, height 720) with Badge (lines 1–7) and the near-copy (lines 9–15) = foreground subject · scherm card (right) with one green "Nieuw" strip and a dashed outline strip "Uitverkocht" (ink 40%) = supporting · mono note `bijna alles is hetzelfde` = supporting · coral rough box around lines 9–15 + strike line = the one voltage
- sfx: pop @6.2, typing @7.9, whoosh-short @9.6

Compose: 60/40.
Code (Badge.tsx) final:
```
const Badge = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Nieuw
    </div>
  );
}

const UitverkochtBadge = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Uitverkocht
    </div>
  );
}
```
Scene 1 (0.0–1.9s): kicker `✱ NIEUWE VRAAG`; Badge component (lines 1–7) on screen, scherm card with one green "Nieuw" strip. On "Klaar?" (0.0s) a mono chip `klaar?` appears top of right column; on "Nee." (0.96s) it gets a thin ink strike-through.
Scene 2 (1.9–7.2s): on "vraag" (2.4s) chip disappears; on "ander label" (5.04s / 5.36s) a dashed hairline strip appears in the scherm card under "Nieuw"; on "uitverkocht" (6.2s) the label "Uitverkocht" fades into the dashed strip in ink 40% (pop).
Scene 3 (7.2–9.2s): on "nieuwe component?" (7.92s / 8.16s) lines 9–15 type on fast (~0.014s/char), with `UitverkochtBadge` in amber and `Uitverkocht` on line 12 amber-washed.
Scene 4 (9.2–13.34s): on "Liever niet." (9.2s / 9.6s) a coral rough box draws around lines 9–15 (0.5s) and the block dims to 50%; on "kopieer je opnieuw bijna alles" (10.4s / 11.56s) lines 10–11 and 13–15 get a faint amber wash next to the identical lines 2–3 and 5–7 (showing they are the same), and a mono note `bijna alles is hetzelfde` appears under the scherm card. Hold.

## Frame 7 — Props

- scene: The hero word "props" lands. App.tsx shows two Badge usages with a `label` attribute: `<Badge label="Nieuw" />` and `<Badge label="Uitverkocht" />`. A comparison under the scherm card: HTML attribute `<img src="logo.png" />` next to `<Badge label="Nieuw" />`.
- voiceover: "We willen de Badge die we al hebben hergebruiken. React heeft daar een oplossing voor: props. Je geeft het label door aan de component, net zoals een attribuut in HTML."
- duration: 11.26s
- transition_in: push-slide
- status: animated
- src: compositions/frames/07-props.html
- type: product_intro
- persuasion: Naming the concept
- beat: clarity

narrativeRole: Names the solution, props, and shows how they are passed: like HTML attributes.
keyMessage: You pass data to a component as props, written like HTML attributes.

- blueprint: compose
- focal: the `label="…"` attributes on the Badge usages
- roles: hero word "props" (EB Garamond italic ~150px, right column top, x 1236 y ≈ 220) = statement · code surface (left, App.tsx, 28px/44px) = foreground subject · HTML comparison card (right column, y ≈ 520–760: tile card with two mono lines `<img src="logo.png" />` and `<Badge label="Nieuw" />`, the attribute names `src` and `label` aligned and amber-washed) = supporting · coral = a wash on `label="Uitverkocht"` (the prop doing the work) = the one voltage
- sfx: pop @5.36, typing @6.28

Compose: 60/40.
Code (App.tsx):
```
const App = () => {
  return (
    <>
      <Badge label="Nieuw" />
      <Badge label="Uitverkocht" />
    </>
  );
}
```
Scene 1 (0.0–3.0s): kicker `✱ PROPS`; on "Badge" (0.72s) the code surface enters with lines 1–3 and 6–8, and two lines `<Badge />` `<Badge />` (lines 4–5, no attributes yet); on "hergebruiken" (1.76s) both `Badge` names get an amber wash.
Scene 2 (3.0–6.1s): on "oplossing" (4.0s) washes clear; on "props." (5.36s) the hero word "props" lands top of the right column (y 30→0, 0.5s, power3.out).
Scene 3 (6.1–8.5s): on "geeft het label door" (6.28s / 6.64s) ` label="Nieuw"` types into line 4, then ` label="Uitverkocht"` into line 5 (teal strings); `label="Uitverkocht"` gets the coral wash at 7.84s ("component").
Scene 4 (8.5–11.26s): on "attribuut" (9.2s) the comparison card settles under the hero word with `<img src="logo.png" />`; on "HTML" (9.84s) the second line `<Badge label="Nieuw" />` lands beneath it, `src` and `label` both amber-washed and aligned. Hold.

## Frame 8 — Props ontvangen

- scene: Badge.tsx gets `interface BadgeProps { label: string; }`, the parameter `({ label }: BadgeProps)`, and `{label}` replaces the hard-coded `Nieuw` inside the div. Right: scherm card shows two strips "Nieuw" and "Uitverkocht", then a third "Promo" appears to prove "eender welk label".
- voiceover: "In Badge beschrijf je met een interface welke props je verwacht: label, van het type string. Je haalt label uit de props, en zet het tussen accolades in de div. Nu werkt Badge met eender welk label."
- duration: 13.66s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-props-ontvangen.html
- type: feature_showcase
- persuasion: Anatomy, step by step
- beat: "aha"

narrativeRole: Shows the receiving side: an interface for the props, destructuring, and `{label}` in the JSX.
keyMessage: Describe the props with an interface, destructure `label`, and use `{label}` in the JSX.

- blueprint: compose
- focal: the Badge.tsx code surface
- roles: code surface (left, Badge.tsx, 28px/44px) = foreground subject · scherm card (right) with strips = supporting · a mono chip `props` → `{ label: "Uitverkocht" }` under the scherm card = supporting · coral = a wash on `{label}` inside the div (the fix) = the one voltage
- sfx: typing @1.6, typing @6.4, pop @10.56, pop @11.8

Compose: 60/40.
Code (Badge.tsx) final:
```
interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      {label}
    </div>
  );
}
```
Scene 1 (0.0–4.1s): kicker `✱ PROPS ONTVANGEN`; the Badge component from frame 5 is on screen (as lines 5–11, with `Nieuw` on line 8 and `()` as parameter), lines 1–4 empty; scherm card shows one green "Nieuw" strip. On "interface" (1.6s) lines 1 and 3 type on (`interface BadgeProps {` / `}`); on "props je verwacht" (2.72s) `BadgeProps` gets an amber wash.
Scene 2 (4.1–6.2s): on "label" (4.16s) line 2 types `  label` and on "string" (5.44s) `: string;` (dim type colour), amber wash on the line.
Scene 3 (6.2–10.5s): on "haalt label uit de props" (6.4s / 6.72s) the `()` on line 5 retypes as `({ label }: BadgeProps)` (old text fades out, new types on); on "tussen accolades" (8.44s / 8.72s) `Nieuw` on line 8 is replaced by `{label}` (type-on), coral wash on `{label}` at 9.68s ("div"); a mono chip `props: { label: "Uitverkocht" }` lands under the scherm card at 7.64s ("props").
Scene 4 (10.5–13.66s): on "Nu werkt Badge" (10.56s) a second strip "Uitverkocht" (green) slides into the scherm card; on "eender welk label" (11.8s / 12.6s) a third strip "Promo" (green) slides in. Hold.

## Frame 9 — Een kleur als string

- scene: A second prop `color: string` is added; the div uses `background: color`. The mini App.tsx panel shows `<Badge label="Promo" color="banaan" />`. The scherm card's Promo strip has no background at all: white text barely visible on the tile. Coral on `"banaan"`.
- voiceover: "Volgende vraag: ook een andere kleur. Eenvoudig, we voegen een tweede prop toe: color. Je zou er een string van kunnen maken. Maar een string is te open: niets houdt je tegen om banaan door te geven."
- duration: 13.82s
- transition_in: crossfade
- status: animated
- src: compositions/frames/09-kleur-string.html
- type: pain_point
- persuasion: The easy answer that is too loose
- beat: wry

narrativeRole: Adds the colour prop and shows why `string` is too open.
keyMessage: A `string` accepts anything, also nonsense like `"banaan"`.

- blueprint: compose
- focal: the scherm card's broken (invisible) badge next to `color="banaan"`
- roles: code surface (left, Badge.tsx, 28px/44px) = foreground subject in the first half · mini App.tsx panel (right column, under the scherm card) = foreground in the second half · scherm card = supporting · coral = a wash + underline on `"banaan"` in the mini panel = the one voltage
- sfx: typing @3.84, typing @11.12, pop @11.68

Compose: 60/40; right column: scherm card + mini App.tsx panel.
Code (Badge.tsx) final:
```
interface BadgeProps {
  label: string;
  color: string;
}

const Badge = ({ label, color }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: color }}>
      {label}
    </div>
  );
}
```
Mini App.tsx (final):
```
<Badge label="Nieuw" color="green" />
<Badge label="Promo" color="banaan" />
```
Scene 1 (0.0–2.7s): kicker `✱ EEN KLEUR`; Badge.tsx from frame 8 on screen (label only, 11 lines); scherm card with one green "Nieuw" strip. On "andere kleur" (1.68s / 1.92s) the strip's fill gets a thin amber ring.
Scene 2 (2.7–6.3s): on "tweede prop" (4.32s / 4.64s) a new line 3 opens (lines below shift down, power3.out) and types `  color`; on "color." (5.52s) `{ label }` on line 6 retypes as `{ label, color }` and `'green'` on line 8 retypes as `color` (amber wash on both).
Scene 3 (6.3–8.3s): on "string" (6.96s) `: string;` types after `color` on line 3, amber wash.
Scene 4 (8.3–13.82s): on "te open" (9.52s / 9.76s) the mini App.tsx panel settles under the scherm card with line 1 `<Badge label="Nieuw" color="green" />`; on "niets houdt je tegen" (10.52s) line 2 types `<Badge label="Promo" color="banaan" />` (starting 11.12s); on "banaan" (11.68s) `"banaan"` gets the coral wash + underline and a second strip appears in the scherm card: "Promo" with NO background (white text on tile, nearly invisible) plus a mono note `geen geldige kleur` (ink 60%) beside it at 12.56s. Hold.

## Frame 10 — Een eigen type: Color

- scene: `type Color = 'red' | 'green' | 'blue';` types on at the top of Badge.tsx and `color: string` becomes `color: Color`. In the mini App.tsx panel, `"banaan"` gets a red-squiggle-style coral underline and an error tooltip: `Type '"banaan"' is not assignable to type 'Color'.`
- voiceover: "We willen enkel red, green en blue toestaan, en dat is het. Daarom maken we een eigen type: Color, met precies die drie waarden. Geef je nu iets anders door, dan geeft TypeScript meteen een fout."
- duration: 13.74s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/10-type-color.html
- type: feature_showcase
- persuasion: Constraint as safety
- beat: resolution

narrativeRole: Restricts the colour prop with a union type so TypeScript catches invalid values.
keyMessage: A union type `'red' | 'green' | 'blue'` only allows those three values.

- blueprint: compose
- focal: the `type Color = 'red' | 'green' | 'blue';` line
- roles: code surface (left, Badge.tsx, 26px/38px since 14 lines) = foreground subject · three mono chips `'red'` `'green'` `'blue'` each with a small swatch dot in the badge colour (right column, top, y ≈ 240) = supporting · mini App.tsx panel with `color="banaan"` + error tooltip (tile card, hairline, mono 20px) = foreground in the last third · coral = the squiggle underline under `"banaan"` = the one voltage · `type Color` line = amber wash
- sfx: pop @0.96, pop @1.72, pop @2.16, typing @5.04, pop @12.56

Compose: 60/40; right column: three chips (y ≈ 240), mini App.tsx panel (y ≈ 420–600), error tooltip under it (y ≈ 620–720). No scherm card in this frame (the type check happens before anything renders).
Code (Badge.tsx) final:
```
type Color = 'red' | 'green' | 'blue';

interface BadgeProps {
  label: string;
  color: Color;
}

const Badge = ({ label, color }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: color }}>
      {label}
    </div>
  );
}
```
Scene 1 (0.0–4.5s): kicker `✱ EEN EIGEN TYPE`; Badge.tsx from frame 9 on screen (starting at line 3, lines 1–2 empty); on "red" (0.96s), "green" (1.72s), "blue" (2.16s) the three chips pop in at the top of the right column; on "dat is het" (3.56s / 3.96s) a thin hairline bracket draws under the three chips.
Scene 2 (4.5–9.3s): on "eigen type" (5.64s / 6.08s) line 1 types `type Color = 'red' | 'green' | 'blue';` (keyword coral, name amber, strings teal) and gets an amber wash; on "Color" (6.64s) `string` on line 5 retypes as `Color`; on "drie waarden" (8.28s / 8.56s) the three strings on line 1 pulse amber one after another (stagger 0.12s).
Scene 3 (9.3–13.74s): on "Geef je nu iets anders door" (9.36s / 10.48s) the mini App.tsx panel settles with `<Badge label="Promo" color="banaan" />`; on "TypeScript" (11.4s) a coral squiggle draws under `"banaan"` (0.4s); on "fout" (12.56s) the error tooltip lands under the panel: `Type '"banaan"' is not assignable to type 'Color'.` (mono, ink on tile, small ✕ marker in ink). Hold.

## Frame 11 — Eén component, allerlei badges

- scene: App.tsx with three Badge usages with label and colour; the scherm card shows three strips: Nieuw (green), Uitverkocht (red), Promo (blue).
- voiceover: "Nu kan je met één Badge-component allerlei badges maken: nieuw in het groen, uitverkocht in het rood, en promo in het blauw."
- duration: 8.7s
- transition_in: push-slide
- status: animated
- src: compositions/frames/11-hergebruik.html
- type: feature_showcase
- persuasion: Payoff
- beat: satisfaction

narrativeRole: Payoff: the same component produces different badges.
keyMessage: One Badge, any label, any allowed colour.

- blueprint: compose
- focal: the scherm card filling with three coloured strips
- roles: code surface (left, App.tsx, 28px/44px) = foreground · scherm card (right; may grow taller to y ≈ 600 for three strips) = foreground subject · coral = a small coral ✱ next to the single word `Badge` in a mono note `1 component · 3 badges` under the scherm card = the one voltage
- sfx: typing @3.6, typing @4.96, typing @6.72, pop @7.52

Compose: 60/40.
Code (App.tsx):
```
const App = () => {
  return (
    <>
      <Badge label="Nieuw" color="green" />
      <Badge label="Uitverkocht" color="red" />
      <Badge label="Promo" color="blue" />
    </>
  );
}
```
Scene 1 (0.0–3.5s): kicker `✱ HERGEBRUIK`; code surface with lines 1–3 and 7–9; empty scherm card. On "Badge-component" (0.96s) the mono note `1 component` appears under the scherm card.
Scene 2 (3.5–8.7s): on "nieuw in het groen" (3.6s / 4.16s) line 4 types on and the green "Nieuw" strip slides into the scherm card at 4.16s; on "uitverkocht in het rood" (4.96s / 5.84s) line 5 + red strip at 5.84s; on "promo in het blauw" (6.72s / 7.52s) line 6 + blue strip at 7.52s; at 7.52s the note completes to `1 component · 3 badges` with the coral ✱ (pop). Hold.

## Frame 12 — Een standaardwaarde

- scene: `color` becomes optional (`color?: Color;`) and gets a default in the destructuring: `({ label, color = 'green' }: BadgeProps)`. Mini App.tsx: `<Badge label="Nieuw" />` without colour → the scherm strip is green.
- voiceover: "En als je helemaal geen kleur opgeeft? Dan wil je dat de badge gewoon groen is. Maak color optioneel met een vraagteken, en geef een standaardwaarde mee: green. Laat je color weg, dan wordt je badge groen."
- duration: 13.98s
- transition_in: crossfade
- status: animated
- src: compositions/frames/12-standaardwaarde.html
- type: feature_showcase
- persuasion: Convenience
- beat: practical

narrativeRole: Shows optional props with a default value.
keyMessage: Mark a prop optional with `?` and give it a default in the destructuring.

- blueprint: compose
- focal: `color = 'green'` in the parameter list
- roles: code surface (left, Badge.tsx, 26px/38px, 14 lines) = foreground subject · scherm card + mini App.tsx panel (right column) = supporting · coral = a wash on `= 'green'` (the fix) = the one voltage · `?` = amber wash
- sfx: typing @0.68, key-press @6.853, typing @8.56, pop @12.8

Compose: 60/40; right column: scherm card (y 232–440, one strip) + mini App.tsx panel (y ~480–620).
Code (Badge.tsx) final:
```
type Color = 'red' | 'green' | 'blue';

interface BadgeProps {
  label: string;
  color?: Color;
}

const Badge = ({ label, color = 'green' }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: color }}>
      {label}
    </div>
  );
}
```
Scene 1 (0.0–2.6s): kicker `✱ STANDAARDWAARDE`; Badge.tsx from frame 10 on screen (with `color: Color`); on "geen kleur opgeeft" (1.16s / 1.68s) the mini App.tsx panel settles with `<Badge label="Nieuw" />` and the scherm card shows a strip "Nieuw" with no background (white on tile) + mono note `color: undefined` (ink 60%).
Scene 2 (2.6–5.1s): on "gewoon groen" (3.68s / 4.08s) a dashed green outline appears around that strip (the wish).
Scene 3 (5.1–7.8s): on "color optioneel" (5.44s / 5.92s) `color` on line 5 gets an amber wash; on "vraagteken" (6.853s) a `?` types in after `color` (key-press), amber wash on the `?`; a small mono tag `optioneel` at the line's right edge.
Scene 4 (7.8–10.6s): on "standaardwaarde" (8.56s) ` = 'green'` types in after `color` on line 8 (the parameter list), coral wash on it at "green." (9.84s).
Scene 5 (10.6–13.98s): on "Laat je color weg" (10.64s / 11.44s) the `<Badge label="Nieuw" />` line in the mini panel gets an amber wash (no color attribute); on "groen" (12.8s) the strip in the scherm card fills green (fill fades in 0.4s), the dashed outline and `color: undefined` note fade out, and a mono note `color: 'green'` replaces it. Hold.

## Frame 13 — Samenvatting

- scene: Four takeaway rows (mono index + Inter statement + mono code chip right): 01 herhaal je code? maak er een component van `<Badge />` · 02 props geven data door `label="Nieuw"` · 03 een eigen type beperkt wat mag `'red' | 'green' | 'blue'` · 04 een standaardwaarde maakt een prop optioneel `color = 'green'`.
- voiceover: "Kort samengevat: herhaal je code, maak er een component van. Met props geef je data door, zodat je die component kan hergebruiken. Met een eigen type beperk je wat mag, en met een standaardwaarde mag een prop wegblijven."
- duration: 15.88s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/13-samenvatting.html
- type: cta
- persuasion: Recap list
- beat: warm close

narrativeRole: Recaps the four steps of the film in the order they were taught.
keyMessage: Component against repetition; props to pass data; a type to restrict; a default to make a prop optional.

- blueprint: compose
- focal: the four-row recap list
- roles: headline "Kort samengevat" (EB Garamond) = top · four rows (hairline dividers, mono index `01`–`04`, Inter statement ~34px, mono code token right-aligned in a tile chip) = foreground subject · coral = the index spike of the row currently being spoken (moves row to row; only one coral at a time)
- sfx: pop @1.44, pop @4.6, pop @8.88, pop @11.48

Compose: copy the layout of `../react-usestate/compositions/frames/14-samenvatting.html`: centred list, left x 160, right x 1760, rows y ≈ 300, 430, 560, 690.
Scene 1 (0.0–4.5s): kicker `✱ SAMENVATTING`; headline "Kort samengevat" settles at 0.2s; on "herhaal je code" (1.44s) row 01 lands: `herhaal je code? maak er een component van` · chip `<Badge />`.
Scene 2 (4.5–8.8s): on "Met props" (4.6s / 4.92s) row 02 lands: `props geven data door aan een component` · chip `label="Nieuw"`; coral spike moves to 02.
Scene 3 (8.8–11.4s): on "eigen type" (9.24s / 9.6s) row 03 lands: `een eigen type beperkt wat mag` · chip `'red' | 'green' | 'blue'`.
Scene 4 (11.4–15.88s): on "standaardwaarde" (12.16s) row 04 lands: `een standaardwaarde: de prop mag wegblijven` · chip `color = 'green'`; coral spike on 04; at 14.2s all rows settle to full ink. Hold.
