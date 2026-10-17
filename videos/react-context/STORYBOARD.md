---
format: 1920x1080
duration: 196s
mode: autonomous
message: "Context deelt de state van App rechtstreeks met de componenten die hem nodig hebben: een interface IThemeContext, React.createContext met een default, een Provider in App en useContext waar je de theme (en setTheme) nodig hebt. Geen prop drilling meer."
arc: how-to-process
audience: "Studenten webframeworks die props, useState, lifting state up en callback-props kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series as `react-todo-callbacks` (direct predecessor: read its frames in `../react-todo-callbacks/compositions/frames/` for the closest look, e.g. `02-app.html` for a code frame, `05-probleem.html` and `14-samenvatting.html` for node diagrams), `react-child-parent`, `react-usefetch`, `react-usestate`. Style **TS light**. Source of truth: `frame.md`. Reference frame: `../react-usefetch/compositions/frames/02-fetch.html`: copy its whole `<style>` block (font-faces, `:root` `--ts-*` tokens and every `ts-*` class) **verbatim**, its `typeLine` / `washOn` / `washOff` helpers, and its structure (white `ts-bg` clip on track 0, `ts-stage` clip on track 1, one paused GSAP timeline registered on `window.__timelines["<composition-id>"]`, `tl.set({}, {}, DUR)` at the end). Font paths: `../../assets/fonts/...` exactly like the siblings. For a cursor click copy how `../react-todo-callbacks/compositions/frames/01-hook.html` uses the oversized cursor.
- **Ground:** white `#FFFFFF` full-duration background clip. **Colour roles:** ink `#1E293B` text, `#475569` secondary, `#94A3B8` muted; panels `#F1F5F9`, hairlines `#E2E8F0`. **One accent: TypeScript blue `#3178C6`** (dark `#235A97`, tint `#EAF2FB`, wash `rgba(49,120,198,0.12)`). Red `#D14343` only thin and sparing for what goes wrong; never a red and a blue key moment at the same time.
- **Type:** Inter for everything that is not code; JetBrains Mono for code, chips, tags, node labels. Hero word Inter 700 ~168px, tracking -0.035em. Statements Inter 500/700 48-64px. Readable text ≥ 27px (node sublabels / connector tags may be 18-20px mono).
- **Kicker** at (80, 84): 28×4 blue bar + Inter 600 22px uppercase blue, tracking 0.14em. Reveal: bar scaleX 0→1 (0.35s), text fades/slides 8px (0.4s), at t ≈ 0.1-0.2.
- **Code surface** (left, x 80, width 1060, top 170, height ≤ 720, bottom ≤ 890): light panel, title bar with file name, status bar, line numbers, JetBrains Mono 26px / 38px (24px / 35px when a line is longer than 56 characters). Code types on with a caret stepping per character (`typeLine`). Highlight = blue wash; the key line = 2px blue box radius 6 (`ts-mark`); the wrong part = 2px red box (`ts-mark--wrong`). Lines marked "static" are present from the start (static HTML), only the other lines type on.
- **The component tree (the running example, used in many frames). Keep it pixel-identical across frames.**
  - **Full tree** (centred, used when there is no code): six nodes, each 300×80, `#F1F5F9` panel, 1px `#E2E8F0`, radius 12, label centred JetBrains Mono 26px 500 ink. Top-left corners: `App` (810, 170), `Layout` (810, 330), `Header` (520, 490), `Main` (1100, 490), `ThemeToggle` (520, 650), `Article` (1100, 650). Connectors 2px `#94A3B8` (SVG, no arrowheads): App→Layout straight down x 960 (y 250→330); Layout→Header elbow (960,410)→(960,450)→(670,450)→(670,490); Layout→Main elbow (960,450)→(1250,450)→(1250,490); Header→ThemeToggle x 670 (570→650); Main→Article x 1250 (570→650).
  - **Node states:** active / uses-theme = 2px `#3178C6` border (blue-tint `#EAF2FB` fill optional for the key node); wrong = 2px `#D14343` border; dimmed = opacity 0.35. Border changes 0.3s.
  - **State chip** `theme: "light"` (`ts-chip ts-chip--new`, mono 22px, height 44, key label `state`): it sits beside the node that owns the state, vertically centred on that node: left of a left-column node (right edge 24px left of the node, e.g. right edge at x 496 for ThemeToggle/Header), right of a centre or right-column node (left edge 24px right of the node, e.g. x 1134 for App/Layout). A chip that moves travels 0.6s `power3.inOut`.
  - **Connector tags** (props travelling down): blue-tint pill, 1px `#3178C6`, radius 999, JetBrains Mono 18px blue-dark, height 30, padding 0 12px. Fixed spots: App→Layout `theme` tag left edge at x 976, centre y 290; App→Layout `setTheme` tag right edge at x 944, centre y 290; Layout→Main `theme` tag centred at (1105, 428); Layout→Header `setTheme` tag centred at (815, 428); Main→Article `theme` tag left edge x 1266, centre y 610; Header→ThemeToggle `setTheme` tag right edge x 654, centre y 610. When a tag appears, the connector segment it sits on turns blue (2px `#3178C6`) and a 14px blue dot travels that segment top→bottom (0.6s power2.inOut).
  - **Provider zone**: a rounded rect (radius 20) with `#EAF2FB` fill at 60% and 1.5px `#3178C6` border, behind the nodes, label `ThemeContext.Provider` in JetBrains Mono 18px blue-dark on a white patch on its top edge (left at +24px). Full-tree zone: x 490-1430, y 140-760.
  - **Mini tree** (right column, used next to code): same six nodes at 200×60, mono 20px, radius 10. Top-left corners: `App` (1438, 200), `Layout` (1438, 300), `Header` (1288, 400), `Main` (1588, 400), `ThemeToggle` (1288, 500), `Article` (1588, 500). Connectors 2px `#94A3B8`: App→Layout x 1538 (260→300); Layout→Header (1538,360)→(1538,380)→(1388,380)→(1388,400); Layout→Main (1538,380)→(1688,380)→(1688,400); Header→ThemeToggle x 1388 (460→500); Main→Article x 1688 (460→500). Mini chips mono 18px height 34. Mini Provider zone: x 1268-1808, y 180-580.
- **The demo app (scherm card)** for the running example: white card, hairline, radius 12, label `scherm` above it (label style). Inside: a header bar (height 64, bottom hairline) with `MyBlog` (Inter 700 24px) left and a small neutral toggle button right (white, 1px hairline, radius 6, height 36, padding 0 14px, Inter 500 18px `#475569`) reading `light` or `dark`; below it the article: `Context in React` (Inter 700 28px ink) and one line `Deel state zonder props.` (Inter 400 22px ink-soft). Dark theme = card ground `#1E293B`, text `#F8FAFC` / `#CBD5E1`, hairlines `#334155`, button `#0F172A` with `#CBD5E1` text; switching takes 0.5s power2.inOut.
- **Component nest (frame 1 only):** nested outline boxes (1px `#94A3B8`, radius 12, `#FFFFFF` fill, 16px padding) each with a mono 18px `#64748B` label in its top-left corner.
- **Cursor**: `compositions/components/oversized-cursor.html` (copy the markup/usage pattern from `../react-todo-callbacks/compositions/frames/01-hook.html`). Moves in with power3.out (~0.5s), click = scale 0.96 → 1 dip (0.15s) + blue 20% ripple circle on the target expanding and fading (0.45s). The worker does NOT place sfx (the orchestrator adds sfx from the `sfx:` line in index.html).
- **Motion:** calm `power3.out` settles, small offsets (10-20px), no bounce / overshoot / elastic, holds stand still. Every reveal on the spoken word that names it (times below are seconds from frame start = voice start). Never show something before the voice names it. Scenes fade out via the index transitions; the frame itself does not fade out. Elements that are "present from the start" in a frame (carried over from the previous frame) are visible at t = 0 without animation.
- **Layout:** kicker (80, 84); code surface left; right column x 1236-1840; nothing important below y ≈ 880 (caption band 900-1080).
- **Negative list:** no logos, decorative shapes, coloured blocks behind text, gradients, glow, heavy shadows, dark code surfaces, serif fonts, real browser / VS Code chrome, icons, em-dashes in visible text, `Math.random` / `Date.now`, breathing / drift / camera push.
- **Code style (course TypeScript):** arrow components, 2-space indent, `useState<string>("light")`, `React.createContext<IThemeContext>({ ... })`, `const { theme } = useContext(ThemeContext);`, `setTheme: (theme: string) => void`.

## Frame 1 — Hook: componenten in componenten

- id: 01-hook
- duration: 13.59s
- transition_in: cut
- status: outline
- voiceover: "Je app groeit. Je splitst een component op in kleinere componenten, en die weer in nog kleinere. Tot zover geen probleem. Maar waar zet je dan je state? Het antwoord heet Context."
- focal: a component nest that keeps splitting (App > Layout > Header + Main > ThemeToggle / Article), then the hero word `Context`.
- sfx: pop@0.28, pop@2.2, pop@3.64, pop@5.44, pop@9.52, whoosh-short@10.6, pop@11.68
- layout: nest centred: outer box `App` x 560-1360, y 170-730. Inside: `Layout` box (inset 40px from App, label row 40px). Inside Layout: `Header` box on top (full width, height 150) and `Main` box below (rest). Inside Header: `ThemeToggle` box on the right (220×70). Inside Main: `Article` box (inset 30px, height ~150).
- shots:
  - 0.0-1.2: kicker `Context`. "app" (0.28): the `App` box fades in (y 12→0).
  - 1.2-4.2: "splitst een component op" (1.52/2.20): `Layout` box appears inside App at 2.20 (scale 0.98→1, opacity). "kleinere componenten" (3.64): `Header` and `Main` appear inside Layout (stagger 0.12).
  - 4.2-8.0: "nog kleinere" (5.44): `ThemeToggle` inside Header and `Article` inside Main appear (stagger 0.12). "geen probleem" (7.04): hold.
  - 8.0-10.4: "waar zet je dan je state?" (8.64/9.52): a state chip `theme: "light"` (key `state`) pops in to the right of the nest at (1400, 420), with a large `?` (Inter 700 96px `#94A3B8`) right of it at x 1720.
  - 10.4-end: at 10.6 the nest + chip + `?` slide up 120px and dim to 0.3 (0.6s power3.out). "Context" (11.68): hero word `Context` (Inter 700 168px, tracking -0.035em) lands centred at y ≈ 640 (fade + y 20→0), and a 6px blue bar wipes in under it at 11.9. Hold.

## Frame 2 — De componentenboom

- id: 02-boom
- duration: 13.35s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Neem deze app. App bevat een Layout, met daarin een Header en een Main. In de Header zit een Theme Toggle: een knop om te wisselen tussen light en dark. En in Main staat een Article."
- focal: the full component tree, built node by node.
- sfx: pop@1.36, pop@2.44, pop@3.68, pop@4.48, pop@6.32, pop@8.88, pop@11.84
- layout: full tree (Video direction), no code.
- shots:
  - 0.0-1.3: kicker `De componentenboom`.
  - 1.3-5.2: "App" (1.36): `App` node fades in (y 10→0). "Layout" (2.44): connector App→Layout draws (0.3s) and `Layout` node fades in. "Header" (3.68): Layout→Header connector + `Header` node. "Main" (4.48): Layout→Main connector + `Main` node.
  - 5.2-10.3: "Theme Toggle" (6.32): Header→ThemeToggle connector + `ThemeToggle` node. "light en dark" (8.88): a sublabel `light / dark` (Inter 500 18px `#64748B`) appears under the ThemeToggle label inside the node (shift the label up 10px at that moment).
  - 10.3-end: "Article" (11.84): Main→Article connector + `Article` node. Hold.

## Frame 3 — State in een child

- id: 03-state-child
- duration: 12.15s
- transition_in: push-slide
- status: outline
- voiceover: "Zet je de theme state in Theme Toggle, dan werkt de knop. Maar die state is enkel bereikbaar in Theme Toggle zelf, en eventueel in zijn child components. Article kan er niet aan."
- focal: `ThemeToggle.tsx` with its own `theme` state; right: the mini tree with a reach zone around ThemeToggle.
- sfx: typing@0.2, pop@1.36, click-soft@2.8, pop@5.16, pop@8.56, pop@10.48
- code (ThemeToggle.tsx, 10 rows):
  ```
  1  const ThemeToggle = () => {
  2    const [theme, setTheme] = useState<string>("light");
  3
  4    return (
  5      <button onClick={() =>
  6        setTheme(theme === "dark" ? "light" : "dark")}>
  7        {theme}
  8      </button>
  9    );
  10 };
  ```
  Status bar `ThemeToggle · theme`.
- shots:
  - 0.0-2.2: kicker `State in een child`. Panel in at 0.1; all lines type from 0.2 (fast, per 0.012). Mini tree (all six nodes + connectors) fades in at 0.2. "theme state" (0.60): wash on line 2 `theme`. "Theme Toggle" (1.36): mini `ThemeToggle` node border blue; mini state chip `theme: "light"` (mono 18px, height 34, no key label) pops in under the mini tree at (1288, 600), with a 2px blue line up to the ThemeToggle node.
  - 2.2-3.5: "werkt de knop" (2.48/2.80): wash moves to lines 5-6; at 2.80 the chip value swaps `"light"` → `"dark"` (slide up/out, in from below, 0.25s each).
  - 3.5-9.4: "enkel bereikbaar in Theme Toggle zelf" (4.80/5.16): a reach zone (blue-tint `#EAF2FB` rounded rect radius 14, 1.5px blue border, behind the node) appears tight around the mini ThemeToggle node at 5.16 (x 1276-1500, y 488-572). "zijn child components" (8.32/8.56): a dashed ghost node `child` (160×44, 1.5px dashed `#94A3B8`, mono 16px muted) appears under ThemeToggle at (1308, 590), with a 2px `#94A3B8` connector, and the zone grows down to y 646 to include it at 8.56. At 8.32 the state chip moves to (1520, 600) (its blue line follows) so it does not collide.
  - 9.4-end: at 9.40 the zone fades to 0.4 opacity and the ThemeToggle border back to neutral. "Article kan er niet aan" (9.52/10.48): mini `Article` node gets a red 2px border at 9.52 and a small red `✕` (Inter 700 28px `#D14343`) appears to the right of it at 10.48. Hold.

## Frame 4 — State omhoog

- id: 04-omhoog
- duration: 14.47s
- transition_in: crossfade
- status: outline
- voiceover: "Wil Article de theme ook gebruiken, dan moet de state hoger. Naar Header. Naar Layout. Elke keer dat meer componenten de state nodig hebben, schuift hij een niveau op. Tot hij helemaal bovenaan staat, in App."
- focal: the full tree with the state chip climbing level by level.
- sfx: pop@0.32, whoosh-short@4.0, whoosh-short@4.96, pop@7.56, whoosh-short@11.28, pop@13.12
- layout: full tree, all nodes present from the start. State chip present from the start left of `ThemeToggle` (right edge x 496, centred y 690).
- shots:
  - 0.0-3.9: kicker `State omhoog`. "Article" (0.32): `Article` node border blue. "theme ook gebruiken" (0.96): a small mono 18px blue-dark note `theme nodig` appears under the Article node at y 744.
  - 3.9-6.1: "Naar Header" (4.00/4.24): chip travels from ThemeToggle to the left of `Header` (right edge x 496, centre y 530). "Naar Layout" (4.96/5.20): chip travels to the right of `Layout` (left edge x 1134, centre y 370).
  - 6.1-10.7: "meer componenten de state nodig hebben" (7.56/8.48): `ThemeToggle` node also gets a blue border at 7.56 and the same note `theme nodig` under it (y 744). Hold.
  - 10.7-end: "helemaal bovenaan" (11.28/11.76): chip travels to the right of `App` (left edge x 1134, centre y 210). "in App" (13.12): `App` node border blue + blue-tint fill. Hold.

## Frame 5 — Props naar beneden

- id: 05-props
- duration: 12.15s
- transition_in: crossfade
- status: outline
- voiceover: "Hoe raakt de theme dan terug bij Article? Via props. App geeft hem aan Layout, Layout geeft hem aan Main, en Main geeft hem aan Article. Dat noemen we prop drilling."
- focal: the `theme` prop travelling down the tree, connector by connector.
- sfx: pop@2.8, whoosh-short@4.08, whoosh-short@6.04, whoosh-short@8.0, pop@10.24
- layout: full tree; present from the start: state chip right of App (as end of frame 4), App node blue border, Article node blue border (no notes).
- shots:
  - 0.0-3.7: kicker `Prop drilling`. "Article?" (1.44) and "Via props" (2.80): hold still until the first hop.
  - 3.7-5.5: "App geeft hem aan Layout" (4.08/4.72): App→Layout connector turns blue, a dot travels down, `theme` tag appears at its fixed spot at 4.72.
  - 5.5-7.3: "Layout geeft hem aan Main" (6.04/6.64): Layout→Main connector blue + dot + `theme` tag at 6.64.
  - 7.3-9.5: "Main geeft hem aan Article" (8.00/8.64): Main→Article connector blue + dot + `theme` tag at 8.64.
  - 9.5-end: "prop drilling" (10.24/10.56): statement `prop drilling` (Inter 700 72px ink, tracking -0.025em) fades in at (80, 230) (left region, x 80-480 fits two lines: `prop` / `drilling`, line-height 1.0), a 6px blue bar wipes under it at 10.56. Hold.

## Frame 6 — Enkel doorgeven

- id: 06-doorgeven
- duration: 9.83s
- transition_in: crossfade
- status: outline
- voiceover: "Kijk naar Layout en Main. Die doen zelf niets met de theme. Toch moeten ze hem als prop ontvangen, enkel om hem door te geven aan hun children."
- focal: Layout and Main marked as mere pass-throughs; a small `Main.tsx` snippet shows the received and passed-on prop.
- sfx: pop@0.64, pop@1.44, pop@2.96, typing@4.24, pop@5.64, pop@7.52
- layout: full tree with the frame 5 end state present from the start (chip at App, three blue connectors + `theme` tags, App and Article blue borders), but WITHOUT the `prop drilling` statement. Compact code panel `Main.tsx` at x 80, y 150, width 700, height ≤ 300, mono 22px / 32px, in the empty space left of the tree (tree nodes start at x 520 from y 490, App/Layout at x 810): the panel must end at y ≤ 470 and x ≤ 790.
- code (Main.tsx, 3 rows, mono 22px):
  ```
  1  const Main = ({ theme }: MainProps) => {
  2    return <Article theme={theme} />;
  3  };
  ```
- shots:
  - 0.0-2.2: kicker `Enkel doorgeven`. "Layout" (0.64): `Layout` node border ink 2px `#1E293B`. "Main" (1.44): `Main` node border ink.
  - 2.2-4.2: "doen zelf niets met de theme" (2.96): at 2.80 the blue connectors/tags and App/Article borders fade to neutral/0.5 (tags stay, at 0.5 opacity); at 2.96 Layout and Main borders turn red 2px; a small red mono 18px note `gebruikt theme niet` appears beside each: Layout's note right of Layout at x 1134, centre y 370 (the state chip right of App sits at y 210, no collision); Main's note right of Main at x 1424, centre y 530.
  - 4.2-end: code panel fades in at 4.24 and its 3 lines type (4.24-5.4). "als prop ontvangen" (5.28/5.64): red wrong-mark box on `{ theme }` in line 1 at 5.64. "door te geven" (7.16/7.52): red wrong-mark box on `theme={theme}` in line 2 at 7.52 (the first mark stays). Hold.

## Frame 7 — En de callbacks?

- id: 07-callbacks
- duration: 12.15s
- transition_in: crossfade
- status: outline
- voiceover: "En wil Theme Toggle de theme aanpassen? Dan moet ook de callback set theme door heel de structuur: van App naar Layout, naar Header, tot bij de knop. Dit is onhoudbaar."
- focal: a second prop, `setTheme`, drilling down the other branch; the tree gets crowded.
- sfx: pop@0.52, pop@3.68, whoosh-short@6.32, whoosh-short@7.56, whoosh-short@8.4, pop@10.2
- layout: full tree; present from the start: state chip right of App, the three `theme` tags + their connectors in neutral `#94A3B8` with tags at 0.5 opacity (no red marks, no notes, no code).
- shots:
  - 0.0-2.3: kicker `En callbacks?`. "Theme Toggle" (0.52): `ThemeToggle` node border blue. "aanpassen" (1.56): hold.
  - 2.3-5.9: "callback set theme" (3.28/3.68): a second chip `setTheme` (ts-chip--new, key `callback`) pops in right of App, under the state chip: move the state chip up to centre y 186 and place `setTheme` at centre y 236 (both left edge x 1134; stack gap 6px) at 3.68.
  - 5.9-9.4: "van App naar Layout" (6.32/6.88): `setTheme` tag on App→Layout (left side fixed spot), segment blue, dot. "naar Header" (7.76): Layout→Header elbow blue + `setTheme` tag (815, 428) + dot. "tot bij de knop" (8.40/8.88): Header→ThemeToggle blue + `setTheme` tag + dot at 8.88.
  - 9.4-end: at 9.64 all blue goes neutral (tags stay at full opacity in neutral style: `#F1F5F9` fill, 1px `#94A3B8`, ink-soft text). "onhoudbaar" (10.20): `Layout`, `Header` and `Main` borders turn red 2px; statement `Dit is onhoudbaar.` (Inter 700 56px ink, two lines `Dit is` / `onhoudbaar.`) at (80, 230). Hold.

## Frame 8 — Het idee

- id: 08-idee
- duration: 11.83s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Wat als we de state van het hoogste component rechtstreeks konden doorgeven, enkel aan de componenten die hem nodig hebben? Zonder alle tussenliggende props. Dat kan, met Context."
- focal: the tags clear away and two direct blue arcs run from App to ThemeToggle and Article; then the hero word `Context`.
- sfx: pop@1.52, whoosh-short@2.56, whoosh-short@4.4, pop@7.44, whoosh-short@9.4, pop@10.24
- layout: full tree; present from the start: the frame 7 end state minus the statement (all five tags neutral, Layout/Header/Main red borders, chips `theme` and `setTheme` right of App).
- shots:
  - 0.0-2.4: kicker `Het idee`. "hoogste component" (1.52): App node border blue + tint.
  - 2.4-4.3: "rechtstreeks" (2.56): all five tags fade out (0.4s, stagger 0.05), connectors back to neutral, red borders back to neutral.
  - 4.3-6.6: "enkel aan de componenten die hem nodig hebben" (4.40/5.88): two blue 2.5px SVG arcs draw (stroke-dashoffset, 0.8s power2.inOut) with small solid blue arrowheads: left arc from App's left edge (810, 210) bowing out to x ≈ 400 and ending at ThemeToggle's left edge (520, 690); right arc from App's bottom-right corner (1100, 250) (the chips sit right of App), bowing out to x ≈ 1520 and ending at Article's right edge (1400, 690). Left arc at 4.40, right arc at 4.70. ThemeToggle and Article borders blue at 5.88.
  - 6.6-9.3: "Zonder alle tussenliggende props" (6.72/7.44): `Layout`, `Header`, `Main` dim to 0.35 at 7.44.
  - 9.3-end: at 9.40 the whole tree (with arcs and chips) scales to 0.92 and dims to 0.25 (0.6s power3.out). "Context" (10.24): hero `Context` (Inter 700 168px) centred at y ≈ 470 with 6px blue bar wipe under it at 10.44. Hold.

## Frame 9 — Interface en createContext

- id: 09-createcontext
- duration: 14.23s
- transition_in: push-slide
- status: outline
- voiceover: "Eerst beschrijven we in een interface wat we willen delen: I Theme Context, met een property theme van het type string. Met React punt create context maken we de Theme Context, met als default waarde light."
- focal: `ThemeContext.tsx`: the interface, then `React.createContext` with the default; right: a type card and a context card.
- sfx: typing@1.28, pop@3.36, typing@4.96, typing@7.52, pop@10.16, pop@12.64
- code (ThemeContext.tsx, 9 rows, mono 24px / 35px):
  ```
  1  import React from "react";
  2
  3  interface IThemeContext {
  4    theme: string;
  5  }
  6
  7  export const ThemeContext = React.createContext<IThemeContext>({
  8    theme: "light",
  9  });
  ```
  Line 1 static. Status bar `ThemeContext.tsx`.
- shots:
  - 0.0-3.3: kicker `Context aanmaken`. Panel in at 0.1. "interface" (1.28): lines 3 and 5 type from 1.28; wash on `interface` at 1.40.
  - 3.3-7.4: "I Theme Context" (3.36/3.92): wash moves to `IThemeContext`; right type card at (1236, 220), width 604: title row `interface IThemeContext` (mono 22px 500, keyword colours) + hairline, appears at 3.36. "property theme" (4.96/5.60): line 4 types from 4.96; wash on `theme` at 5.60; the type card gets its row `theme: string` (mono 22px) at 5.60. "string" (6.64): wash moves to `string`.
  - 7.4-11.5: "React punt create context" (7.76/8.48): lines 7 and 9 type from 7.52 (line 7 per 0.014); wash on `React.createContext` at 8.48. "Theme Context" (10.16/10.48): wash moves to `ThemeContext` on line 7; right context card at (1236, 470), width 604: blue-tint card, 1.5px blue border, radius 12, title `ThemeContext` (mono 24px 500 blue-dark) appears at 10.16, with a hairline arrow-less 2px `#94A3B8` line linking it up to the type card (label mono 16px muted `<IThemeContext>` beside the line).
  - 11.5-end: "default waarde light" (11.60/12.64): line 8 types from 11.60; inside the context card a row: key label `default` (Inter 600 16px uppercase muted) + chip `{ theme: "light" }` (mono 22px) at 12.64; wash on `"light"` at 12.64. Hold.

## Frame 10 — De Provider in App

- id: 10-provider
- duration: 16.79s
- transition_in: crossfade
- status: outline
- voiceover: "In App, ons hoofdcomponent, zetten we een Theme Context Provider. Zijn value koppelt theme aan de state van App. Alle child components zetten we erin. Zo heeft elk component binnen de Provider toegang tot de theme, zelfs de children van de children."
- focal: `App.tsx` with the Provider wrapping `<Layout />`; right: the mini tree inside a growing Provider zone.
- sfx: typing@0.24, typing@2.88, pop@3.6, pop@7.2, typing@8.16, whoosh-short@9.44, pop@12.4, pop@15.12
- code (App.tsx, 9 rows):
  ```
  1  const App = () => {
  2    const [theme, setTheme] = useState<string>("light");
  3
  4    return (
  5      <ThemeContext.Provider value={{ theme: theme }}>
  6        <Layout />
  7      </ThemeContext.Provider>
  8    );
  9  };
  ```
  Status bar `App · ThemeContext.Provider`.
- shots:
  - 0.0-2.8: kicker `De Provider`. Panel in at 0.1. "App" (0.24): lines 1, 2, 3, 4, 8, 9 type from 0.24 (fast); mini tree fades in at 0.24 with the mini `App` node border blue.
  - 2.8-4.5: "Theme Context Provider" (2.88/3.60): lines 5 and 7 type from 2.88; wash on `ThemeContext.Provider` (line 5) at 3.60; the mini Provider zone appears tight around the mini App node only (x 1424-1652, y 186-274) with its label at 3.60.
  - 4.5-7.8: "value" (5.04): wash moves to `value={{ theme: theme }}`. "state van App" (6.48/7.20): wash on `theme` in line 2 at 6.48; a compact mini state chip `theme: "light"` (mono 18px, no key label) pops in left of the mini App node, right edge x 1418, centre y 230, at 7.20.
  - 7.8-10.0: "Alle child components zetten we erin" (8.16/9.44): line 6 types at 8.16 (wash on `<Layout />` at 8.48); at 9.44 the zone grows (0.6s power3.inOut) to the full mini zone x 1268-1808, y 180-580 (move the chip to below the zone at (1268, 600) during the grow).
  - 10.0-end: "toegang tot de theme" (12.40/13.20): all six mini nodes get a 2px blue border, stagger 0.08 from App down, at 12.40. "zelfs de children van de children" (14.32/15.12): the `ThemeToggle` and `Article` mini nodes get a blue-tint fill at 15.12. Hold.

## Frame 11 — useContext

- id: 11-usecontext
- duration: 14.87s
- transition_in: push-slide
- status: outline
- voiceover: "Hoe gebruikt een component die theme? In Article roepen we use context aan, met Theme Context als argument. Met object destructuring halen we de theme eruit. Elk component dat de theme nodig heeft, doet hetzelfde."
- focal: `Article.tsx` reading the theme with `useContext`; right: the demo article and the `theme` chip.
- sfx: typing@2.72, typing@3.92, pop@5.92, pop@8.48, pop@9.6, pop@10.8, pop@12.92
- code (Article.tsx, 9 rows):
  ```
  1  const Article = () => {
  2    const { theme } = useContext(ThemeContext);
  3
  4    return (
  5      <article className={theme}>
  6        <h2>Context in React</h2>
  7      </article>
  8    );
  9  };
  ```
  Status bar `Article · useContext`.
- shots:
  - 0.0-2.6: kicker `useContext`. Panel in at 0.1 (empty, line numbers only).
  - 2.6-5.2: "In Article" (2.72): lines 1, 3-9 type from 2.72 (fast); the scherm label + a compact card (x 1236, y 232, 604 wide, height 150; ONLY the article part of the demo app: `Context in React` + `Deel state zonder props.`, light theme) fade in at 2.72. "use context" (3.92/4.24): line 2 types from 3.92; wash on `useContext` at 4.24.
  - 5.2-7.6: "Theme Context als argument" (5.92): wash moves to `(ThemeContext)`.
  - 7.6-10.7: "object destructuring" (8.48): wash moves to `{ theme }` + blue key box (`ts-mark`) around it. "theme eruit" (9.60): chip `theme: "light"` (key `uit de context`) pops in at (1236, 430).
  - 10.7-end: "Elk component dat de theme nodig heeft" (10.80): at y 560 a label `ook in` (label style) then two small mono cards side by side (each 290×96, panel + hairline, radius 10): `Article` with a second line mono 16px muted `useContext(ThemeContext)` at 10.80, and `ThemeToggle` with the same second line at 12.92 ("doet hetzelfde"). Hold.

## Frame 12 — De rest doet niets

- id: 12-rest
- duration: 11.91s
- transition_in: crossfade
- status: outline
- voiceover: "En de componenten die niets met de theme doen, zoals Layout, Header en Main? Die doen gewoon niets. Geen extra props meer. Ze blijven volledig onafhankelijk van de theme state."
- focal: the full tree inside the Provider zone: only ThemeToggle and Article are blue; Layout, Header and Main stay plain; a tiny `Main.tsx` without props.
- sfx: pop@2.88, pop@3.6, pop@4.24, typing@6.36, pop@6.96, pop@9.12
- layout: full tree inside the full-tree Provider zone, present from the start; `ThemeToggle` and `Article` with blue border and a mono 16px blue-dark note `useContext` under each (y 744); state chip right of App. Left region code panel `Main.tsx` x 80, y 170, width 400, mono 22px (must end at y ≤ 470, x ≤ 480).
- code (Main.tsx, 3 rows, mono 22px):
  ```
  1  const Main = () => {
  2    return <Article />;
  3  };
  ```
- shots:
  - 0.0-2.8: kicker `De rest doet niets`. Hold.
  - 2.8-5.0: "Layout" (2.88): `Layout`'s label colour goes `#94A3B8` (shifting up 10px) and a small muted sublabel `geen theme` (Inter 500 16px `#94A3B8`) appears inside the node under its label. Same for "Header" (3.60) and "Main" (4.24).
  - 5.0-8.0: "Geen extra props meer" (6.36/6.96): the code panel fades in at 6.36 and its lines type; at 6.96 a blue key box on `<Article />`.
  - 8.0-end: "volledig onafhankelijk" (9.12): statement `Geen props nodig.` (Inter 500 34px ink) appears at (80, 420). Hold.

## Frame 13 — setTheme in de context

- id: 13-settheme-type
- duration: 16.52s
- transition_in: push-slide
- status: outline
- voiceover: "Wil je de theme ook aanpassen vanuit een child? Dan steek je de setter set theme mee in de context. In de interface krijgt hij als type een functie die een theme van het type string krijgt, en niets teruggeeft. De default waarde krijgt een lege functie."
- focal: `ThemeContext.tsx` growing a `setTheme` member and its default; right: the type card from frame 9 gets a second row.
- sfx: pop@1.24, typing@4.16, pop@4.72, pop@8.56, pop@12.08, typing@13.4, pop@14.96
- code (ThemeContext.tsx, 9 rows, mono 24px / 35px):
  ```
  1  interface IThemeContext {
  2    theme: string;
  3    setTheme: (theme: string) => void;
  4  }
  5
  6  export const ThemeContext = React.createContext<IThemeContext>({
  7    theme: "light",
  8    setTheme: (theme: string) => {},
  9  });
  ```
  Lines 1, 2, 4, 5, 6, 7, 9 static; lines 3 and 8 start as empty rows (height kept). Status bar `ThemeContext.tsx`.
- shots:
  - 0.0-2.9: kicker `Functies in context`. Panel present from 0.1. Right: type card (as in frame 9 at (1236, 220): `interface IThemeContext` + row `theme: string`) present from the start. "vanuit een child" (1.24/2.08): a mono chip `ThemeToggle` (key `child`) appears at (1236, 560) at 2.08.
  - 2.9-6.4: "setter set theme" (3.68/4.16): line 3 types from 4.16 (per 0.02); wash on `setTheme` at 4.72; the type card gets a second row `setTheme: (theme: string) => void` (mono 20px) at 4.72 (blue-tint background on that row).
  - 6.4-12.9: "als type een functie" (8.08/8.56): wash moves to `(theme: string) => void` at 8.56. "theme van het type string" (9.60/10.40): wash narrows to `theme: string` inside line 3 at 10.40. "niets teruggeeft" (12.08): wash moves to `void`.
  - 12.9-end: "default waarde" (13.40): line 8 types from 13.40. "lege functie" (14.96): wash on `{}` in line 8 + blue key box. Hold.

## Frame 14 — setTheme gebruiken

- id: 14-settheme-use
- duration: 14.47s
- transition_in: crossfade
- status: outline
- voiceover: "In de Provider geven we set theme mee, net zoals theme. In Theme Toggle halen we allebei uit de context. Een klik op de knop roept set theme aan, en elk component dat de theme gebruikt, past zich aan."
- focal: the Provider value gains `setTheme`; then `ThemeToggle.tsx` pulls both out of the context; a click on the demo app's toggle turns the whole app dark.
- sfx: typing@1.6, pop@1.92, whoosh-short@4.56, typing@5.28, pop@6.56, click-soft@8.2, whoosh-short@9.76
- code A (App.tsx, 0-4.5s, 4 rows, mono 24px):
  ```
  1  <ThemeContext.Provider
  2    value={{ theme: theme, setTheme: setTheme }}>
  3    <Layout />
  4  </ThemeContext.Provider>
  ```
  Lines 1, 3, 4 static; line 2 starts as `  value={{ theme: theme }}>` and `, setTheme: setTheme` is inserted (typed) before ` }}>`.
- code B (ThemeToggle.tsx, from 4.56s, 10 rows):
  ```
  1  const ThemeToggle = () => {
  2    const { theme, setTheme } = useContext(ThemeContext);
  3
  4    return (
  5      <button onClick={() =>
  6        setTheme(theme === "dark" ? "light" : "dark")}>
  7        {theme}
  8      </button>
  9    );
  10 };
  ```
- shots:
  - 0.0-4.4: kicker `setTheme gebruiken`. Panel with code A present from 0.1 (title `App.tsx`). "set theme mee" (1.60/1.92): `, setTheme: setTheme` types into line 2 from 1.60; wash on `setTheme: setTheme` at 1.92. "net zoals theme" (3.12/3.44): wash moves to `theme: theme`.
  - 4.4-7.4: "In Theme Toggle" (4.56): the panel content crossfades (0.4s) to code B (title `ThemeToggle.tsx`, status `ThemeToggle · useContext`): lines 1, 3-10 appear static, line 2 types from 5.28. The scherm label + full demo app card (x 1236, y 232, 604×300, light theme, toggle reads `light`) fade in at 4.56. "allebei" (5.80): wash on `{ theme, setTheme }`. "uit de context" (6.56): wash moves to `useContext(ThemeContext)`.
  - 7.4-10.3: cursor enters at 7.30 toward the demo toggle button; "klik op de knop" (7.72/8.20): click at 8.20 (dip + ripple); wash on lines 5-6 at 8.20. "roept set theme aan" (8.96): wash narrows to `setTheme(` on line 6. At 9.76 the toggle label swaps `light` → `dark`.
  - 10.3-end: "elk component dat de theme gebruikt, past zich aan" (10.48): the demo app switches to the dark theme (header at 10.48, article at 10.63, 0.5s power2.inOut each). Cursor fades out at 11.2. Hold.

## Frame 15 — Samenvatting

- id: 15-samenvatting
- duration: 14.85s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Samengevat: een interface beschrijft wat je deelt. Create context maakt de context. De Provider bovenaan geeft de waarde mee. En use context haalt hem op, enkel waar je hem nodig hebt."
- focal: four summary rows left; the mini tree right inside the Provider zone, with two direct blue arcs to ThemeToggle and Article.
- sfx: pop@1.6, pop@3.92, pop@6.64, whoosh-short@7.36, pop@9.76, pop@11.52
- layout: left column x 80-1180: four rows at y 200 / 360 / 520 / 680: a mono 26px blue number (`1`-`4`) + statement Inter 500 38px ink + under it a mono 22px code line (ink, keyword colours) on a `#F8FAFC` hairline strip (radius 6, padding 4px 10px). Right column: mini tree (Video direction).
- shots:
  - 0.0-1.5: kicker `Samenvatting`. Mini tree fades in at 0.2 (all nodes neutral).
  - 1.5-3.8: "interface" (1.60): row 1 `Een interface beschrijft wat je deelt.` + code `interface IThemeContext { theme; setTheme }`.
  - 3.8-6.5: "Create context" (3.92): row 2 `createContext maakt de context.` + code `React.createContext<IThemeContext>(…)`.
  - 6.5-9.4: "De Provider bovenaan" (6.64/7.36): row 3 `De Provider bovenaan geeft de waarde mee.` + code `<ThemeContext.Provider value={…}>` at 6.64; the mini Provider zone grows around the mini tree at 7.36 and the mini `App` node gets a blue border.
  - 9.4-end: "use context haalt hem op" (9.76): row 4 `useContext haalt hem op, enkel waar nodig.` + code `const { theme } = useContext(ThemeContext);`. "enkel waar je hem nodig hebt" (11.52/12.44): two blue 2px arcs from mini App to mini ThemeToggle (left side, bowing to x ≈ 1250) and to mini Article (right side, bowing to x ≈ 1830) draw at 11.52; ThemeToggle and Article borders blue at 11.9. Hold until the end.
