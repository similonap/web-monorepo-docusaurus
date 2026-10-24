---
format: 1920x1080
duration: 241s
mode: autonomous
message: "Met createBrowserRouter koppel je URL's aan componenten; een layout met een Outlet geeft elke pagina dezelfde structuur; navigeren doe je met Link en NavLink (niet met <a href>); een *-route en een errorElement vangen ontbrekende pagina's en fouten op."
arc: how-to-process
audience: "Studenten webframeworks die componenten, props, useState en useEffect kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series as `react-context` (closest predecessor: read its frames in `../react-context/compositions/frames/`, e.g. `10-provider.html` / `11-usecontext.html` for a code frame with a right column, `01-hook.html` for a hook, `15-samenvatting.html` for the recap), `react-datacontext`, `react-todo-callbacks`, `react-usefetch`. Style **TS light**. Source of truth: `frame.md`. Reference frame: `../react-usefetch/compositions/frames/02-fetch.html`: copy its whole `<style>` block (font-faces, `:root` `--ts-*` tokens and every `ts-*` class) **verbatim**, its `typeLine` / `washOn` / `washOff` helpers, and its structure (white `ts-bg` clip on track 0, `ts-stage` clip on track 1, one paused GSAP timeline registered on `window.__timelines["<composition-id>"]`, `tl.set({}, {}, DUR)` at the end). Font paths: `../../assets/fonts/...` exactly like the siblings. For a cursor click copy how `../react-todo-callbacks/compositions/frames/01-hook.html` uses the oversized cursor.
- **Ground:** white `#FFFFFF` full-duration background clip. **Colour roles:** ink `#1E293B` text, `#475569` secondary, `#94A3B8` muted; panels `#F1F5F9`, hairlines `#E2E8F0`. **One accent: TypeScript blue `#3178C6`** (dark `#235A97`, tint `#EAF2FB`, wash `rgba(49,120,198,0.12)`). Red `#D14343` only thin and sparing for what goes wrong; never a red and a blue key moment at the same time.
- **Type:** Inter for everything that is not code; JetBrains Mono for code, chips, tags, paths. Hero word Inter 700 ~160px, tracking -0.035em. Statements Inter 500/700 48-64px. Readable text ≥ 27px (small mono tags / addresses inside the demo card may be 18-22px).
- **Kicker** at (80, 84): 28×4 blue bar + Inter 600 22px uppercase blue, tracking 0.14em. Reveal: bar scaleX 0→1 (0.35s), text fades/slides 8px (0.4s), at t ≈ 0.1-0.2.
- **Code surface** (left, x 80, width 1060, top 170, height ≤ 720, bottom ≤ 890): light panel, title bar with file name, status bar, line numbers, JetBrains Mono 26px / 38px (24px / 35px when the frame says so). Code types on with a caret stepping per character (`typeLine`). Highlight = blue wash; the key part = 2px blue box radius 6 (`ts-mark`); the wrong part = 2px red box (`ts-mark--wrong`). Lines marked "static" are present from the start (static HTML), only the other lines type on. Syntax colours per frame.md (keywords `#235A97`, strings `#0F7B6C`, functions / components / numbers / true `#9A5B13`, types `#3178C6`, punctuation / JSX brackets `#64748B`).
- **Code style (course TypeScript, React Router 8, data mode):** arrow components, 2-space indent, `import { createBrowserRouter, Link, NavLink, Outlet } from "react-router";`, `import { RouterProvider } from "react-router/dom";`.
- **The demo app (scherm card). Keep it pixel-identical across frames.** It is the running example: a tiny site `MySite` with pages Home, About, Contact.
  - **Standard position:** right column, card x 1236-1840 (604 wide), y 210-570 (360 high). White, 1px `#E2E8F0`, radius 12, overflow hidden, shadow at most `0 1px 2px rgba(15,23,42,0.06)`. Label `scherm` (label style: Inter 600 20px uppercase `#64748B`, tracking 0.12em) above it at y 176.
  - **Rows, top to bottom (full layout variant):**
    1. **Address row** height 44, fill `#F8FAFC`, bottom hairline, padding-left 18, JetBrains Mono 18px: `localhost:5173` in `#94A3B8` immediately followed by the path in `#1E293B` (e.g. `/about`). No browser chrome (no dots, tabs or buttons). A path change: old path slides up 12px and fades out, the new one comes in from 12px below (0.25s each, power2.out).
    2. **Header** height 56, padding 0 20px, bottom hairline: `MySite` Inter 700 22px ink.
    3. **Nav** height 48, padding 0 20px, bottom hairline, three links `Home` `About` `Contact`, Inter 500 20px, gap 28. Link states: *placeholder* `#94A3B8` (before links exist in the code); *normal* `#475569`; *active* `#3178C6` with a 2px blue underline 6px below the text.
    4. **Content (the Outlet area)** height 172, padding 20px: a heading Inter 700 26px ink and below it one line Inter 400 20px `#475569`. Pages: Home = `Home` / `Welkom op MySite.`; About = `About` / `Over dit project.`; Contact = `Contact` / `Stuur ons een bericht.`; PageNotFound = `Pagina niet gevonden` / `Deze pagina bestaat niet.`; ErrorPage = `Er ging iets mis` (no second line). A page change: old content fades out (0.2s), new content fades in with y 8→0 (0.3s power3.out).
    5. **Footer** height 40, fill `#F8FAFC`, top hairline, padding-left 20, Inter 400 18px `#94A3B8`: `Footer`.
  - **Page-only variant** (no layout yet): address row + content area filling the rest of the card (height 316); same heading / line styles.
  - **Outlet marker:** a 2px dashed `#3178C6` rect inset 6px inside the content area, radius 8, plus a tag `<Outlet />` (JetBrains Mono 18px `#235A97` on a white patch, padding 0 8px) sitting on its top edge at the right (right edge 20px from the card's right edge). Draw-in: opacity 0→1 (0.3s).
  - **"Layout parts" highlight:** header, nav and footer each get a blue wash (`rgba(49,120,198,0.12)`) overlay (0.3s), or a red 2px inset outline where the frame says so.
  - **Large variant (frame 1, 4):** the same card markup, scaled as the frame describes (use a wrapper with a GSAP-set scale, never CSS transform on a tweened element).
- **Chips:** `ts-chip` (panel `#F1F5F9`, 1px hairline, radius 8, JetBrains Mono 22-24px, optional key label Inter 600 18px uppercase muted). The `state` chip `count: 3` sits under the scherm card at (1236, 610) in frames 7-8. Value change: old value slides up and out, new slides in (0.25s). Unwanted = 2px `#D14343` border; selected / kept = blue-tint fill + 1px blue border.
- **Netwerk panel (frames 7-8):** label `netwerk` (label style) at (80, 560); panel x 80, y 592, width 1060, height 200, `#F8FAFC`, 1px hairline, radius 12. Header row (height 44, bottom hairline, padding 0 24px) with column labels Inter 600 16px uppercase `#94A3B8` tracking 0.12em: `method` (x +24), `path` (x +200), `type` (x +520), `status` (x +800). Request rows height 56, JetBrains Mono 22px ink in the same columns, slide in from y 10 (0.3s).
- **Cursor**: `compositions/components/oversized-cursor.html` (copy the markup / usage pattern from `../react-todo-callbacks/compositions/frames/01-hook.html`). Moves in with power3.out (~0.5s), click = scale 0.96 → 1 dip (0.15s) + blue 20% ripple circle on the target expanding and fading (0.45s). Cursor fades out ~1s after its last click. The worker does NOT place sfx (the orchestrator adds sfx from the `sfx:` line in index.html).
- **Motion:** calm `power3.out` settles, small offsets (10-20px), no bounce / overshoot / elastic, holds stand still. Every reveal on the spoken word that names it (times below are seconds from frame start = voice start). Never show something before the voice names it. Scenes fade out via the index transitions; the frame itself does not fade out. Elements that are "present from the start" in a frame (carried over from the previous frame) are visible at t = 0 without animation.
- **Layout:** kicker (80, 84); code surface left; right column x 1236-1840; nothing important below y ≈ 880 (caption band 900-1080).
- **Negative list:** no logos, decorative shapes, coloured blocks behind text, gradients, glow, heavy shadows, dark code surfaces, serif fonts, real browser / VS Code chrome, icons or emoji, em-dashes in visible text, `Math.random` / `Date.now`, breathing / drift / camera push.

## Frame 1 — Hook: een klik, geen reload

- id: 01-hook
- duration: 13.67s
- transition_in: cut
- status: outline
- voiceover: "Je klikt op een link. De URL verandert, en je ziet een andere pagina. Maar de app laadt niet opnieuw. Dat heet client-side routing. En in React doe je dat met React Router."
- focal: the demo app, large and centred, one click on `About`; then the hero `React Router`.
- sfx: pop@0.1, click-soft@0.72, whoosh-short@1.68, pop@4.24, pop@6.56, whoosh-short@7.44, pop@8.08, pop@11.44
- layout: the demo card (full layout variant, path `/`, Home content, nav links *normal*) inside a wrapper scaled 1.25, card centred at (960, 380) (so ~755×450, x 582-1338, y 155-605).
- shots:
  - 0.0-1.4: kicker `Navigeren`. The large card fades in at 0.1 (y 12→0). The cursor enters from the lower right at 0.1 and arrives on the `About` nav link by 0.6; click at 0.72 ("link") (dip + ripple on `About`).
  - 1.4-3.8: "URL" (1.68): the address path swaps `/` → `/about`, and a blue wash covers the path text 1.68-3.4.
  - 3.8-5.0: "andere pagina" (4.24): the content swaps Home → About.
  - 5.0-7.3: "app laadt niet opnieuw" (5.80/6.56): at 6.56 a chip pops in centred under the card at (960, 644): key `netwerk`, value `0 requests` (blue-tint fill, 1px blue border). Cursor fades out at 5.8.
  - 7.3-11.3: at 7.44 card + chip slide up 120px and dim to 0.3 (0.6s power3.out). "client-side routing" (8.08): statement `client-side routing` (Inter 500 52px `#475569`, tracking -0.015em) fades in centred at y ≈ 600 (y 12→0).
  - 11.3-end: "React Router" (11.44): hero `React Router` (Inter 700 160px ink, tracking -0.035em) lands centred with its top at y ≈ 650 (fade + y 20→0), and a 6px blue bar (radius 3) wipes in under it from the left at 11.92 (width = text width). Hold.

## Frame 2 — createBrowserRouter

- id: 02-routes
- duration: 14.71s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Eerst maak je een router, met create browser router. Die krijgt een array van routes. Elke route is een object, met een path: de URL. En een element: de component die je op die URL wil zien."
- focal: `App.tsx` with the routes array; right: a route table `URL → component`.
- sfx: typing@1.92, typing@4.4, typing@5.92, pop@7.92, pop@10.24, typing@12.56, pop@12.8
- code (App.tsx, 7 rows, 26px):
  ```
  1  import { createBrowserRouter } from "react-router";
  2
  3  const router = createBrowserRouter([
  4    { path: "/", element: <Home /> },
  5    { path: "/about", element: <About /> },
  6    { path: "/contact", element: <Contact /> },
  7  ]);
  ```
  Status bar `App.tsx · createBrowserRouter`.
- right column (route table): label `routes` (label style) at (1236, 176). Two column labels (label style, 18px) at y 236: `URL` at x 1236, `component` at x 1560. Three rows at y 270, 350, 430 (height 56): a path chip (mono 24px, `ts-chip`) left at x 1236, a 2px `#94A3B8` arrow (40px, small solid head) at x 1470, a component chip right at x 1560 (`<Home />`, `<About />`, `<Contact />`, mono 24px, color `#9A5B13` for the name).
- shots:
  - 0.0-1.9: kicker `Routes`. Panel in at 0.1 (empty, line numbers only).
  - 1.9-4.3: "create browser router" (1.92): lines 1 and 3 type from 1.92 (fast); wash on `createBrowserRouter` (line 3) at 2.60.
  - 4.3-5.9: "array" (4.40): line 7 types at 4.40; wash moves to `[` (line 3) and `]` (line 7).
  - 5.9-10.2: "Elke route" (5.92): line 4 types from 5.92; "object" (6.88): wash on the whole `{ ... }` of line 4. "path" (7.92): wash moves to `path: "/"`; row 1 path chip `/` pops in. "de URL" (8.88): column label `URL` fades in.
  - 10.2-12.5: "element" (10.24): wash moves to `element: <Home />`; row 1 arrow draws and the `<Home />` chip pops in. "component" (11.52): column label `component` fades in.
  - 12.5-end: "op die URL wil zien" (12.56): lines 5 and 6 type from 12.56 (fast); rows 2 and 3 pop in at 12.80 and 13.05. Wash off at 13.2. Hold.

## Frame 3 — RouterProvider

- id: 03-provider
- duration: 15.27s
- transition_in: push-slide
- status: outline
- voiceover: "Die router geef je mee aan de router provider, in App. Let op: router provider importeer je uit react router slash dom. En maak de router buiten je component aan. Anders krijg je bij elke render een nieuwe router."
- focal: `App.tsx` with `<RouterProvider router={router} />`; right: the demo app rendering the Home route (page-only variant).
- sfx: typing@1.68, pop@3.04, typing@4.72, pop@8.32, pop@10.0, pop@12.92
- code (App.tsx, 12 rows, 26px):
  ```
  1  import { createBrowserRouter } from "react-router";
  2  import { RouterProvider } from "react-router/dom";
  3
  4  const router = createBrowserRouter([
  5    // routes
  6  ]);
  7
  8  const App = () => {
  9    return <RouterProvider router={router} />;
  10 };
  11
  12 export default App;
  ```
  Lines 1, 4, 5, 6 static. Status bar `App.tsx · RouterProvider`.
- shots:
  - 0.0-1.6: kicker `RouterProvider`. Panel in at 0.1 with the static lines. "router" (0.24): wash on `router` (line 4).
  - 1.6-3.7: "router provider" (1.68): lines 8, 9, 10, 12 type from 1.68 (fast); wash on `<RouterProvider router={router} />` at 2.20. "in App" (3.04): wash moves to `App` (line 8); the scherm card (page-only variant, path `/`, Home content) fades in at its standard position (y 12→0).
  - 3.7-8.9: "Let op" (3.76): hold. "importeer" (5.68): line 2 types from 5.68. "react router slash dom" (6.80/8.32): at 7.92 a blue key box (`ts-mark`) around `"react-router/dom"` on line 2; wash off.
  - 8.9-11.5: "buiten je component" (10.00): blue wash on lines 4-6, and a render-tag pill `buiten App` (blue-tint, 1px blue, mono 18px `#235A97`, radius 999) appears at the right of line 4 (left edge x ≈ 760, vertically centred on line 4) at 10.00.
  - 11.5-end: "bij elke render een nieuwe router" (12.48/12.92): error text under the scherm card at (1236, 610), width ≤ 604: a 4px `#D14343` left bar + Inter 500 26px ink, two lines: `Binnen App:` / `elke render een nieuwe router` (fade + x 8→0) at 12.92. Hold.

## Frame 4 — Elke pagina dezelfde rand

- id: 04-probleem
- duration: 12.87s
- transition_in: crossfade
- status: outline
- voiceover: "Maar de meeste apps hebben op elke pagina dezelfde header, dezelfde navigatie en dezelfde footer. Die wil je niet in elke pagina opnieuw schrijven. Daarvoor maak je een layout."
- focal: three page cards (Home, About, Contact) that each get the same header, nav and footer; then the word `layout`.
- sfx: pop@1.52, pop@2.96, pop@4.04, pop@5.76, pop@8.56, whoosh-short@9.92, pop@11.04
- layout: three demo cards side by side, each 480×330 (same rows as the demo card, proportionally: address 40, header 50, nav 44, content rest, footer 36; fonts ~0.9×), at x 120-600, 720-1200, 1320-1800, y 200-530. Paths `/`, `/about`, `/contact` with Home / About / Contact content. They start as the page-only variant (address + content); the header, nav (links *normal*) and footer slide in as rows (height grows from 0, 0.35s power3.out) and the content shrinks to make room.
- shots:
  - 0.0-2.9: kicker `Het probleem`. "elke pagina" (1.52): the three page-only cards fade in, stagger 0.12.
  - 2.9-6.6: "header" (2.96): the header row appears in all three (stagger 0.08). "navigatie" (4.04): the nav row in all three. "footer" (5.76): the footer row in all three.
  - 6.6-9.8: "niet in elke pagina opnieuw schrijven" (7.84/8.56): at 8.56 header, nav and footer of all three cards get a 2px `#D14343` inset outline (stagger 0.05), and at 9.04 a red mono label `3× dezelfde code` (JetBrains Mono 24px `#D14343`) appears centred under the middle card at y 570.
  - 9.8-end: "Daarvoor" (9.92): the red outlines and label fade out, the cards slide up 40px and dim to 0.35 (0.6s power3.out). "layout" (11.04): statement `layout` (Inter 700 120px ink, tracking -0.035em) lands centred with top at y ≈ 640, and a 6px blue bar wipes in under it at 11.3. Hold.

## Frame 5 — De layout: Root met Outlet

- id: 05-layout
- duration: 14.71s
- transition_in: push-slide
- status: outline
- voiceover: "Een layout is een gewone component, bijvoorbeeld Root. Daarin zet je alles wat op elke pagina terugkomt: de header, de navigatie en de footer. En op de plek waar de pagina zelf moet komen, zet je een Outlet."
- focal: `App.tsx` with the `Root` component; right: the demo card built row by row, the content area marked as the Outlet.
- sfx: typing@3.12, pop@3.12, typing@7.4, typing@8.0, typing@9.12, pop@10.8, typing@12.96, pop@12.96
- code (App.tsx, 14 rows, 26px):
  ```
  1  import { Outlet } from "react-router";
  2
  3  const Root = () => {
  4    return (
  5      <div>
  6        <header>MySite</header>
  7        <nav>{/* links */}</nav>
  8        <main>
  9          <Outlet />
  10       </main>
  11       <footer>Footer</footer>
  12     </div>
  13   );
  14 };
  ```
  Status bar `App.tsx · Root`. The comment `{/* links */}` in `#94A3B8`.
- right column: the demo card at its standard position, path `/`, built up: at first only the address row (path `/`) and an empty white body; rows get added in place (fade + y 8→0), always at their final positions.
- shots:
  - 0.0-3.1: kicker `Layout`. Panel in at 0.1 (empty). "gewone component" (1.08/1.76): hold.
  - 3.1-7.3: "Root" (3.12): lines 3, 4, 5, 12, 13, 14 type from 3.12 (fast); wash on `Root` at 3.40; the scherm label + card shell (address row with `/`, empty body) fade in at 3.12.
  - 7.3-9.9: "header" (7.40): line 6 types; the header row appears in the card. "navigatie" (8.00): line 7 types; the nav row appears with the three links in *placeholder* colour. "footer" (9.12): line 11 types; the footer row appears.
  - 9.9-12.9: "plek waar de pagina zelf moet komen" (10.32/10.80): lines 8 and 10 type from 10.32; the Outlet marker (dashed blue rect, without the tag yet) draws in the empty content area at 10.80.
  - 12.9-end: "Outlet" (12.96): line 9 types; wash + blue key box (`ts-mark`) on `<Outlet />`; the `<Outlet />` tag appears on the marker; line 1 types from 13.30. Hold.

## Frame 6 — Children en de index route

- id: 06-children
- duration: 22.47s
- transition_in: crossfade
- status: outline
- voiceover: "In de router wordt Root de route op slash, en de pagina's worden zijn children. Hun paden zijn relatief: about wordt slash about. De route met index true is de standaardpagina: die zie je op slash zelf. Surf je naar slash about, dan toont React Router eerst Root, en in de Outlet de About pagina."
- focal: the nested route config; right: a route tree (Root with three children), then the demo card showing `/about`.
- sfx: typing@1.2, pop@1.2, typing@4.56, pop@4.8, pop@9.04, pop@11.76, pop@14.24, whoosh-short@15.12, pop@18.64, pop@19.68, pop@20.32
- code (App.tsx, 11 rows, 26px):
  ```
  1  const router = createBrowserRouter([
  2    {
  3      path: "/",
  4      element: <Root />,
  5      children: [
  6        { index: true, element: <Home /> },
  7        { path: "about", element: <About /> },
  8        { path: "contact", element: <Contact /> },
  9      ],
  10   },
  11 ]);
  ```
  Lines 1 and 11 static. Status bar `App.tsx · children`.
- right column, part 1 (route tree, 0-15.1): **Root node** 300×64 at x 1388-1688, y 220-284, `#F1F5F9`, 1px hairline, radius 12, label `<Root />` mono 24px 500 (`Root` in `#9A5B13`), and a small path tag `/` (blue-tint pill, 1px blue, mono 18px `#235A97`, height 30) on its top-left edge. **Child nodes** 180×80 at y 380-460: x 1236-1416 (Home), 1448-1628 (About), 1660-1840 (Contact); two lines centred: the route key in mono 18px `#94A3B8` (`index`, `about`, `contact`) and the element mono 22px (`<Home />`, `<About />`, `<Contact />`). Connectors 2px `#94A3B8` (SVG, no arrowheads): from (1538, 284) down to y 330, across to each child's centre x (1326, 1538, 1750), down to y 380. **Full URL pills** (blue-tint pill, 1px blue, mono 20px `#235A97`, height 34) centred under each child at y 484: `/`, `/about`, `/contact`.
- right column, part 2 (15.1-end): the demo card at its standard position (full layout variant, nav *normal*).
- shots:
  - 0.0-1.1: kicker `Children`. Panel in at 0.1 with lines 1 and 11. "router" (0.32): wash on `router` (line 1).
  - 1.1-3.4: "Root" (1.20): lines 2, 3, 4, 10 type from 1.20 (fast); the Root node fades in at 1.20. "route op slash" (2.48): wash on `path: "/"`; the `/` tag appears on the Root node.
  - 3.4-5.5: "children" (4.56): lines 5, 9 and then 6, 7, 8 type from 4.56 (fast); wash on `children` at 4.56; connectors draw and the three child nodes fade in at 4.80 (stagger 0.15).
  - 5.5-9.9: "relatief" (6.48): wash on `"about"` and `"contact"` (lines 7, 8). "about" (7.60): wash only on `"about"`. "slash about" (9.04): the `/about` pill pops under the About node; the `/contact` pill follows at 9.30.
  - 9.9-15.1: "index true" (10.56/11.04): wash moves to `index: true` (line 6). "standaardpagina" (11.76): the Home node gets a 2px blue border. "slash zelf" (14.24): the `/` pill pops under the Home node.
  - 15.1-18.5: "Surf je naar slash about" (15.12): the tree fades out (0.4s) and the scherm label + demo card fade in at 15.12 with the path empty after `localhost:5173`; at 15.84 the path `/about` types on (per character, until 16.30) while the content area stays empty; wash moves to line 7.
  - 18.5-end: "eerst Root" (18.64): wash moves to line 4; header, nav and footer of the card fade in (stagger 0.08) with the layout-parts blue wash, which fades back out at 19.5. "Outlet" (19.68): the Outlet marker with its tag draws in. "About pagina" (20.32): the About content fades in inside the marker; wash moves to line 7. Hold.

## Frame 7 — Een gewone a-tag

- id: 07-a-href
- duration: 16.52s
- transition_in: push-slide
- status: outline
- voiceover: "Nu de navigatie. Je eerste reflex is misschien een gewone a-tag, met een h ref. Dat werkt, maar de browser stuurt dan een nieuw request naar de server, en laadt de hele app opnieuw. Je ziet de pagina even flitsen, en alle state is weg."
- focal: the nav with `<a href>`; a click causes a network request and a full reload of the card; the state chip resets.
- sfx: pop@0.28, typing@3.68, click-soft@6.6, pop@8.76, pop@10.64, whoosh-short@12.68, pop@15.2
- code (App.tsx, 5 rows, 26px, panel height fits the code):
  ```
  1  <nav>
  2    <a href="/">Home</a>
  3    <a href="/about">About</a>
  4    <a href="/contact">Contact</a>
  5  </nav>
  ```
  Status bar `Root · nav`.
- also: the netwerk panel (Video direction) under the code; the `state` chip `count: 3` under the scherm card.
- shots:
  - 0.0-3.6: kicker `Navigeren`. Panel in at 0.1 (empty). "navigatie" (0.28): the scherm label + demo card (full layout, path `/`, Home content, nav links in *placeholder* colour) and the `state` chip `count: 3` (key `state`) fade in.
  - 3.6-5.8: "a-tag" (3.68): lines 1-5 type from 3.68 (fast); the nav links in the card turn *normal* at 4.40. "h ref" (4.80/5.16): wash on `href="/about"` (line 3) at 5.16.
  - 5.8-7.3: "werkt" (6.08): the cursor enters and clicks `About` in the card's nav at 6.60.
  - 7.3-10.5: "browser" (7.40): the netwerk label + panel (header row only) fade in. "nieuw request" (8.76): a row slides in: `GET` / `/about` / `document` / `200`, with a 2px `#D14343` bar on its left edge. "server" (9.36): hold. Cursor fades out at 9.0.
  - 10.5-12.6: "hele app opnieuw" (10.64): the whole card gets a 2px `#D14343` outline (0.3s) and a red mono tag `hele app herladen` (JetBrains Mono 18px `#D14343`, white patch) appears on the card's top-right edge.
  - 12.6-14.6: "flitsen" (12.68): the card's header, nav, content and footer all fade to white (0.12s), the card stays blank for 0.35s, then everything rebuilds top to bottom (stagger 0.08, 0.3s each) with path `/about` and About content.
  - 14.6-end: "state" (14.72): wash on the `state` chip; "weg" (15.20): its value swaps `count: 3` → `count: 0` and the chip gets a 2px `#D14343` border. Hold.

## Frame 8 — Link

- id: 08-link
- duration: 16.31s
- transition_in: crossfade
- status: outline
- voiceover: "Gebruik daarom Link, uit React Router. In plaats van h ref schrijf je to. Klik je erop, dan is er geen request. React Router past de URL aan, en wisselt enkel wat er in de Outlet staat. De header blijft staan, en je state ook."
- focal: the nav with `<Link to>`; the same click now changes only the URL and the Outlet; the state chip keeps its value.
- sfx: typing@0.8, typing@2.08, pop@4.8, click-soft@5.9, pop@7.12, whoosh-short@9.28, pop@11.76, pop@14.48
- code (App.tsx, 7 rows, 26px):
  ```
  1  import { Link } from "react-router";
  2
  3  <nav>
  4    <Link to="/">Home</Link>
  5    <Link to="/about">About</Link>
  6    <Link to="/contact">Contact</Link>
  7  </nav>
  ```
  Lines 3 and 7 static. Status bar `Root · nav`.
- present from the start: kicker, panel with lines 3 and 7, the demo card (full layout, path `/`, Home content, nav *normal*), the `state` chip `count: 3` (neutral), the netwerk label + panel with the header row only (all at the Video direction positions, identical to frame 7).
- shots:
  - 0.0-2.0: kicker `Link`. "Link" (0.80): lines 4, 5, 6 type from 0.80 (fast).
  - 2.0-3.4: "React Router" (2.08): line 1 types; wash on `"react-router"`.
  - 3.4-5.5: "h ref" (3.48): hold. "to" (4.80): wash + blue key box (`ts-mark`) on `to="/about"` (line 5).
  - 5.5-8.0: "Klik je erop" (5.52): cursor enters and clicks `About` at 5.90. "geen request" (7.12): inside the netwerk panel, below the header row, the line `0 requests` (JetBrains Mono 22px `#235A97`) with a 2px blue bar on its left fades in, and after it `· React Router regelt het in de browser` (Inter 500 22px `#475569`).
  - 8.0-12.8: "URL" (9.28): the path swaps `/` → `/about`. "enkel" (10.96): the Outlet marker draws in. "Outlet" (11.76): the content swaps Home → About inside it. Cursor fades out at 9.0.
  - 12.8-end: "header blijft staan" (13.12): layout-parts blue wash on header, nav and footer (stays). "state" (14.48): the `state` chip gets the kept style (blue-tint fill, 1px blue border); value unchanged `count: 3`. Hold.

## Frame 9 — NavLink

- id: 09-navlink
- duration: 15.27s
- transition_in: push-slide
- status: outline
- voiceover: "Voor een navigatiebalk is er NavLink. Die werkt net als Link, maar weet ook of hij naar de huidige pagina wijst. Is dat zo, dan krijgt hij automatisch de class active. Zo geef je de actieve link een andere stijl."
- focal: `<NavLink>` in the nav; right: the rendered `<a ... class="active">` and the active link styled blue.
- sfx: pop@0.43, typing@1.76, pop@7.04, pop@9.48, pop@10.56, typing@12.32, pop@12.88
- code (App.tsx, 7 rows, 26px; panel top 170):
  ```
  1  import { NavLink } from "react-router";
  2
  3  <nav>
  4    <NavLink to="/">Home</NavLink>
  5    <NavLink to="/about">About</NavLink>
  6    <NavLink to="/contact">Contact</NavLink>
  7  </nav>
  ```
  Status bar `Root · nav`.
- second panel (CSS) under the code: mini code panel `App.css` at x 80, y 600, width 640, 4 rows mono 24px / 35px:
  ```
  1  .active {
  2    color: #3178C6;
  3    border-bottom: 2px solid;
  4  }
  ```
  (selector `.active` in `#9A5B13`, properties ink, values as strings `#0F7B6C`.)
- right column: the demo card (full layout, path `/about`, About content, nav *normal*). Under it at (1236, 610), width 604: a mini panel titled `DOM` (title bar 40px, Inter 500 18px) with one mono 22px line `<a href="/about" class="active">About</a>` (JSX punctuation colours as code).
- shots:
  - 0.0-1.7: kicker `NavLink`. Panel in at 0.1 (empty). "navigatiebalk" (0.43): the scherm label + demo card fade in; blue wash on its nav row 0.43-1.6.
  - 1.7-6.2: "NavLink" (1.76): lines 1, 3-7 type from 1.76 (fast); wash on `NavLink` (line 4) at 2.4. "net als Link" (4.08): hold.
  - 6.2-9.4: "huidige pagina" (6.64): blue wash on the card's path `/about`. "wijst" (7.04): wash on the `About` link in the card's nav.
  - 9.4-11.5: "automatisch" (9.48): the `DOM` mini panel fades in (y 10→0). "class active" (10.56): blue key box (`ts-mark`) around `class="active"` in it.
  - 11.5-end: "actieve link" (12.32): the `App.css` panel fades in and its 4 rows type from 12.32. "andere stijl" (12.88): the `About` link in the card turns *active* (blue + 2px underline) over 0.3s. Hold.

## Frame 10 — className met isActive

- id: 10-classname
- duration: 14.15s
- transition_in: crossfade
- status: outline
- voiceover: "Wil je zelf kiezen welke class hij krijgt? Geef dan een functie mee aan class name. Die functie krijgt is active, een boolean. Is die true, dan geef je de actieve stijl terug. Anders de gewone."
- focal: a `NavLink` with a `className` function; right: per link the value of `isActive` and the class it gets.
- sfx: typing@3.2, pop@6.88, pop@8.08, typing@9.28, pop@10.88, pop@12.56
- code (App.tsx, 8 rows, 26px):
  ```
  1  <NavLink
  2    to="/about"
  3    className={({ isActive }) =>
  4      isActive ? styles.activeLink : styles.link
  5    }
  6  >
  7    About
  8  </NavLink>
  ```
  Lines 1, 2, 6, 7, 8 static. Status bar `Root · NavLink`.
- right column: present from the start: the demo card (full layout, path `/about`, About content, `About` link *active*). Under it, three rows at y 610, 676, 742 (height 52, x 1236-1840): link name Inter 500 22px ink at x 1236 (`Home`, `About`, `Contact`), a chip at x 1380 (`isActive: false` / `isActive: true`, mono 20px; the `true` one blue-tint + 1px blue border), and later a result text at x 1610 in mono 20px (`→ link` muted `#475569` / `→ activeLink` `#235A97`).
- shots:
  - 0.0-3.1: kicker `className`. Panel in at 0.1 with the static lines. "zelf kiezen" (0.48): hold.
  - 3.1-6.3: "functie" (3.20): lines 3 and 5 type from 3.20; "class name" (4.64): wash on `className`.
  - 6.3-9.2: "is active" (6.88): wash + blue key box (`ts-mark`) on `{ isActive }`. "boolean" (8.08): the three rows (name + isActive chip) fade in, stagger 0.1.
  - 9.2-12.3: "true" (9.28): line 4 types from 9.28; wash moves to `styles.activeLink` at 10.88 ("actieve stijl"), and the About row's result `→ activeLink` appears.
  - 12.3-end: "Anders de gewone" (12.56): wash moves to `styles.link`; the Home and Contact rows' results `→ link` appear (stagger 0.1). Hold.

## Frame 11 — Op een rij: a, Link, NavLink

- id: 11-verschil
- duration: 18.87s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Even op een rij. Een a-tag met een h ref laadt de hele app opnieuw. Gebruik die enkel voor links naar een andere website. Link navigeert binnen je app, zonder request. En NavLink doet precies hetzelfde, maar weet bovendien of hij actief is. Ideaal voor je menu."
- focal: three comparison cards side by side, no code panel.
- sfx: pop@1.52, pop@4.16, pop@7.04, pop@8.4, pop@9.48, pop@10.92, pop@11.92, pop@13.36, pop@15.68, pop@17.08
- layout: three cards, each 540×520, at x 90-630, 690-1230, 1290-1830, y 190-710; white, 1px hairline, radius 12, padding 32. Each card: a title in JetBrains Mono 34px 500 (`<a href>`, `<Link to>`, `<NavLink to>`, JSX punctuation `#64748B`, the name `#9A5B13` for Link / NavLink, `a` in `#235A97`); a hairline under the title; then up to three statement rows (Inter 500 28px ink, line-height 1.3, 24px apart, each with a 4px left bar: neutral `#E2E8F0`, red `#D14343` or blue `#3178C6` as noted); at the card bottom an example line in JetBrains Mono 20px `#475569`: `<a href="https://react.dev">`, `<Link to="/about">`, `<NavLink to="/about">`.
- shots:
  - 0.0-1.5: kicker `Op een rij`. 
  - 1.5-8.3: "a-tag" (1.52): card 1 fades in (y 12→0) with title and example line. "hele app opnieuw" (4.16): row `herlaadt de hele app` (red bar). "andere website" (7.04): row `enkel voor externe links` (neutral bar).
  - 8.3-11.8: "Link" (8.40): card 2 fades in. "binnen je app" (9.48): row `navigeert binnen je app` (neutral bar). "zonder request" (10.92): row `geen request` (blue bar).
  - 11.8-end: "NavLink" (11.92): card 3 fades in. "precies hetzelfde" (13.36): row `alles van Link` (neutral bar). "actief" (15.68): row `weet of hij actief is` (blue bar) and card 3's border turns 2px `#3178C6`. "Ideaal voor je menu" (17.08): row `ideaal voor je menu` (neutral bar). Hold.

## Frame 12 — Ontbrekende pagina's

- id: 12-notfound
- duration: 21.43s
- transition_in: crossfade
- status: outline
- voiceover: "Wat als iemand surft naar een URL die niet bestaat? Dan toont React Router een standaard foutpagina. Niet erg gebruiksvriendelijk. Voeg daarom een child route toe, met als path een sterretje. Die matcht alles waarvoor geen betere route bestaat. Omdat het een child van Root is, staat je page not found gewoon binnen de layout."
- focal: the default error screen for `/bestaat-niet`, then a `*` child route that shows `PageNotFound` inside the layout.
- sfx: pop@0.8, typing@1.52, pop@5.76, typing@9.52, pop@11.64, pop@13.12, pop@14.8, pop@16.8, pop@18.4
- code (App.tsx, 6 rows, 26px):
  ```
  1  children: [
  2    { index: true, element: <Home /> },
  3    { path: "about", element: <About /> },
  4    { path: "contact", element: <Contact /> },
  5    { path: "*", element: <PageNotFound /> },
  6  ],
  ```
  Lines 1-4 and 6 static (line 5 is an empty row until it types). Status bar `App.tsx · children`.
- right column: the demo card at its standard position. **Default error variant**: address row, then the rest of the card white with padding 24: a 4px `#D14343` left bar block with `Unexpected Application Error!` (Inter 700 24px ink) and below it `404 Not Found` (JetBrains Mono 22px `#D14343`). Under the card at y 610-770: a match list, three rows (height 48, mono 22px): `/about` → `about`, `/contact` → `contact`, `/bestaat-niet` → `*` (path at x 1236 ink, a 2px `#94A3B8` arrow at x 1500, route key at x 1560; the `*` row in `#235A97` with a blue-tint background pill).
- shots:
  - 0.0-5.1: kicker `Niet gevonden`. Panel in at 0.1 with the static lines. "iemand surft" (0.80): the scherm label + card fade in with the address row only (path empty) and an empty white body. "URL die niet bestaat" (1.52-2.72): the path `/bestaat-niet` types on per character.
  - 5.1-8.6: "standaard foutpagina" (5.76): the default error block fades in. "Niet erg gebruiksvriendelijk" (7.48): the card gets a 2px `#D14343` outline.
  - 8.6-12.4: the red outline fades at 8.72. "child route" (9.52): line 5 types from 9.52. "sterretje" (11.64): blue key box (`ts-mark`) on `"*"`.
  - 12.4-15.6: "matcht alles" (13.12): match rows 1 and 2 fade in (stagger 0.1). "geen betere route" (14.80): row 3 (`/bestaat-niet` → `*`) fades in.
  - 15.6-end: "child van Root" (16.80): the error block fades out; the card's header, nav (*normal*) and footer fade in (stagger 0.08). "page not found" (18.40): the content `Pagina niet gevonden` / `Deze pagina bestaat niet.` fades in; wash on line 5. "layout" (19.76): layout-parts blue wash on header, nav and footer. Hold.

## Frame 13 — errorElement

- id: 13-errorelement
- duration: 22.87s
- transition_in: push-slide
- status: outline
- voiceover: "En als er iets misloopt tijdens het renderen? Dan geef je de route een error element. Dat wordt getoond in plaats van het gewone element. Met de hook use route error vraag je op wat er misging. Is route error response vertelt je of het een fout van de router is, zoals een vier nul vier. Dan toon je de status, anders een algemene melding."
- focal: `ErrorPage` with `useRouteError` and `isRouteErrorResponse`, and `errorElement` on the Root route; right: a render error in the About page replaced by the ErrorPage.
- sfx: pop@1.68, typing@2.48, pop@4.08, whoosh-short@6.08, typing@8.44, pop@11.2, typing@12.16, pop@17.2, pop@21.32
- code (App.tsx, 17 rows, **24px / 35px**):
  ```
  1  const ErrorPage = () => {
  2    const error = useRouteError();
  3
  4    if (isRouteErrorResponse(error)) {
  5      return <h1>{error.status} {error.statusText}</h1>;
  6    }
  7    return <h1>Er ging iets mis</h1>;
  8  };
  9
  10 const router = createBrowserRouter([
  11   {
  12     path: "/",
  13     element: <Root />,
  14     errorElement: <ErrorPage />,
  15     children: [/* ... */],
  16   },
  17 ]);
  ```
  Lines 10-13 and 15-17 static. Status bar `App.tsx · errorElement`.
- right column: present from the start: the demo card (full layout, path `/about`, About content, nav *normal*).
- shots:
  - 0.0-2.4: kicker `errorElement`. Panel in at 0.1 with the static lines. "renderen" (1.68): the About content area gets a 2px `#D14343` inset outline and a red mono tag `throw new Error()` (JetBrains Mono 18px `#D14343`, white patch) on its top-right edge.
  - 2.4-5.0: "error element" (2.48/4.08): line 14 types from 2.48; wash + blue key box (`ts-mark`) on `errorElement: <ErrorPage />` at 4.08.
  - 5.0-8.0: "in plaats van" (5.52/6.08): at 6.08 the whole card body below the address row (header, nav, content, footer) fades out and is replaced by the ErrorPage view: white body with only the heading `Er ging iets mis` (Inter 700 26px ink) at padding 24. The red outline and tag go with it. "gewone element" (7.04): wash moves to `element: <Root />` (line 13).
  - 8.0-12.1: "use route error" (8.44/9.68): lines 1, 2, 3, 8 type from 8.44 (fast); wash on `useRouteError()` at 9.68. "wat er misging" (11.20): under the card at (1236, 610) a chip pops in: key `error`, value `Error: …` (mono 22px).
  - 12.1-18.0: "Is route error response" (12.16): lines 4, 5, 6 type from 12.16; wash on `isRouteErrorResponse(error)` at 13.12. "vier nul vier" (17.20): under the error chip at (1236, 680) a row: chip `404` (mono 22px) + Inter 500 22px `#475569` `fout van de router`.
  - 18.0-end: "status" (19.12): wash moves to `{error.status}` (line 5). "algemene melding" (21.32): line 7 types (fast from 20.64) and wash moves to it; the `Er ging iets mis` heading in the card gets a 2px blue underline. Hold.

## Frame 14 — Samenvatting

- id: 14-samenvatting
- duration: 24.61s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Samengevat: met create browser router koppel je URL's aan componenten. Een layout met een Outlet geeft elke pagina dezelfde structuur. Navigeren doe je met Link en NavLink, niet met een a-tag. En met een sterretje en een error element vang je ontbrekende pagina's en fouten op. Hoe je parameters uit de URL haalt, zie je in een volgend filmpje."
- focal: four recap rows, then a pointer to the next video.
- sfx: pop@1.52, pop@6.56, pop@11.2, pop@13.6, pop@15.0, pop@19.92
- layout: four rows at y 190, 320, 450, 580 (each height 96, x 80-1840, bottom hairline `#E2E8F0`): left column x 80-760 holds one or two mono chips (`ts-chip`, JetBrains Mono 26px 500, 12px gap); right column x 820-1840 holds a statement Inter 500 36px ink. At y 740: label `volgende video` (label style) at x 80 and next to it at x 360 a chip `/detail/:id` (mono 26px, blue-tint, 1px blue border).
- shots:
  - 0.0-1.5: kicker `Samengevat`.
  - 1.5-5.9: "create browser router" (1.52): row 1 chip `createBrowserRouter` fades in (x 12→0). "URL's aan componenten" (3.52): statement `koppelt URL's aan componenten` fades in.
  - 5.9-9.9: "Outlet" (6.56): row 2 chip `<Outlet />`. "dezelfde structuur" (8.32): statement `een layout voor elke pagina`.
  - 9.9-14.4: "Link en NavLink" (11.20/11.84): row 3 chips `<Link>` at 11.20 and `<NavLink>` at 11.84, statement `navigeren zonder request` at 11.84. "niet met een a-tag" (13.60): a third chip `<a href>` appears in row 3 already struck through and dimmed to 35% (the stopped-chip style).
  - 14.4-19.8: "sterretje" (15.00): row 4 chip `path: "*"`; "error element" (16.00): chip `errorElement`; "ontbrekende pagina's en fouten" (16.88): statement `vangt ontbrekende pagina's en fouten op`.
  - 19.8-end: "parameters" (19.92): label `volgende video` fades in; "URL" (20.52): the `/detail/:id` chip pops in. Hold to the end.
