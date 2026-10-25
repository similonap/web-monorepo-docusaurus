---
format: 1920x1080
duration: 280s
mode: autonomous
message: "Een dubbelpunt in het pad maakt een URL parameter die je met useParams leest (altijd een string); query parameters lees en schrijf je met useSearchParams; bewaar filters en sortering in de URL en ze overleven een herlaadbeurt, zijn deelbaar en de terugknop werkt erop."
arc: how-to-process
audience: "Studenten webframeworks die React Router basics en useState kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Direct predecessor: `../react-router` (same series, read its frames in `../react-router/compositions/frames/`, e.g. `03-provider.html` / `08-link.html` for a code frame with the scherm card, `01-hook.html` for the hook and the cursor, `11-verschil.html` for comparison cards, `14-samenvatting.html` for the recap). Style **TS light**. Source of truth: `frame.md`. Reference frame: `../react-usefetch/compositions/frames/02-fetch.html`: copy its whole `<style>` block (font-faces, `:root` `--ts-*` tokens and every `ts-*` class) **verbatim**, its `typeLine` / `washOn` / `washOff` helpers, and its structure (white `ts-bg` clip on track 0, `ts-stage` clip on track 1, one paused GSAP timeline registered on `window.__timelines["<composition-id>"]`, `tl.set({}, {}, DUR)` at the end). Font paths `assets/fonts/...` exactly like the siblings. For a cursor click copy the oversized-cursor usage from `../react-router/compositions/frames/08-link.html` (inline SVG cursor, dip + ripple, park the cursor aside after a click so it does not cover what changes).
- **Ground:** white `#FFFFFF`. **Colour roles:** ink `#1E293B`, `#475569` secondary, `#94A3B8` muted; panels `#F1F5F9`, hairlines `#E2E8F0`. **One accent: TypeScript blue `#3178C6`** (dark `#235A97`, tint `#EAF2FB`, wash `rgba(49,120,198,0.12)`). Red `#D14343` only thin and sparing for what goes wrong; never a red and a blue key moment at the same time.
- **Type:** Inter for everything that is not code; JetBrains Mono for code, chips, URLs. Hero Inter 700 ~110-160px, tracking -0.035em. Statements Inter 500/700 36-64px. Readable text ≥ 27px except small mono tags / UI text inside the demo card (18-22px).
- **Kicker** at (80, 84): 28×4 blue bar + Inter 600 22px uppercase blue, tracking 0.14em, in at t ≈ 0.1-0.2.
- **Code surface** (left, x 80, width 1060, top 170, bottom ≤ 890): light panel, title bar with file name, status bar, line numbers, JetBrains Mono 26px / 38px (24px / 35px when the frame says so). Type-on with a stepping caret (`typeLine`). Highlight = blue wash; key part = 2px blue box radius 6 (`ts-mark`); wrong part = 2px red box (`ts-mark--wrong`). Lines marked "static" are present from the start. Syntax colours per frame.md. Comments `#94A3B8`.
- **Code style (course TypeScript, React Router 8 data mode):** arrow components, 2-space indent, imports from `"react-router"`.
- **The example data (English, keep exact):** `Keyboard` 49.99 (id 1), `Mouse` 24.99 (id 2), `Monitor` 189 (id 3), `Mouse pad` 9.99 (id 4), `Webcam` 59.5 (id 5), `Headset` 79 (id 6). Prices are shown as `€ 49.99`, `€ 189.00`, `€ 59.50`, `€ 79.00`.
- **URL rendering (everywhere):** JetBrains Mono; `localhost:5173` in `#94A3B8`, the path in ink `#1E293B`, the query string (from `?` on) in `#235A97`. A URL change: old text slides up 12px and fades, new comes in from 12px below (0.25s power2.out), or types on per character where the frame says "types".
- **Standalone URL bar:** white, 1px hairline, radius 10, height 52, padding 0 20px, mono 22px, URL rendering as above. Large variant (frames 1, 6): height 88, radius 12, mono 44-52px.
- **The demo shop (scherm card). Keep it pixel-identical across frames.**
  - **Standard position:** right column x 1236-1840 (604 wide), y 200-636 (436 high). White, 1px `#E2E8F0`, radius 12, overflow hidden, box-sizing border-box. Label `scherm` (Inter 600 20px uppercase `#64748B`, tracking 0.12em) above it at y 166.
  - **List variant** (route `/products`), rows top to bottom:
    1. **Address row** height 44, fill `#F8FAFC`, bottom hairline, padding-left 18, mono 18px, URL rendering as above.
    2. **Controls row** height 72, padding 16px 20px, bottom hairline, gap 12: a search input (230×40, 1px hairline, radius 6, padding 0 12px, Inter 18px; placeholder `Search a product...` in `#94A3B8`, typed text ink; a 2px blue border while focused), a sort select (110×40, same box, text `Name` or `Price`, Inter 18px ink, a small chevron drawn with two 2px `#94A3B8` borders at the right), an order select (150×40, `Ascending` or `Descending`).
    3. **List** 6 rows of height 46, padding 0 20px, hairline between rows: product name Inter 500 20px ink at the left, price JetBrains Mono 18px `#475569` at the right. Default order (sort name, asc): Headset, Keyboard, Monitor, Mouse, Mouse pad, Webcam. Filtered lists simply have fewer rows (rows below stay empty white). A list change: rows cross-fade (0.25s) to the new order / content.
    4. **Shortcuts row** height 44 (the remaining space at the bottom), top hairline, fill `#F8FAFC`, padding 0 20px, Inter 18px `#475569`: `Shortcuts:` followed by a link `Cheapest first` (`#3178C6`, 1px underline).
  - **Link variant** of the list (frame 3 only): the product names are links (`#3178C6`, 1px underline); the controls row shows only the search input, empty.
  - **Detail variant** (route `/products/:id`): address row, then a white body with padding 28px: a small label (Inter 600 16px uppercase `#94A3B8`, tracking 0.12em, e.g. `ProductDetail`), below it a heading Inter 700 36px ink (e.g. `Product 2`), and where the frame says so a line Inter 400 22px `#475569`. Error state: the body shows a `<p>` text Inter 500 24px ink with a 4px `#D14343` left bar (e.g. `Invalid product id`).
- **Chips:** `ts-chip` (panel `#F1F5F9`, 1px hairline, radius 8, JetBrains Mono 22px, optional key label Inter 600 16px uppercase muted). Strings in `#0F7B6C`, numbers / NaN in `#9A5B13`, `null` / `undefined` in `#235A97`. Selected = blue-tint fill + 1px blue border. Unwanted = 2px red border. Stopped = line-through + 35% opacity. Value change: old slides up and out, new slides in (0.25s).
- **Cursor**: as in `../react-router/compositions/frames/08-link.html`. Moves in with power3.out (~0.5s), click = 0.96 dip + blue 20% ripple on the target. After its last click it parks aside (outside the card) and fades out ~1s later. No sfx in frames (the root adds them).
- **Motion:** calm `power3.out` settles, small offsets (8-20px), no bounce / overshoot / elastic, holds stand still. Every reveal on the spoken word that names it (times = seconds from frame start = voice start). Never show something before the voice names it. The frame itself does not fade out (index transitions do that). "Present from the start" = visible at t = 0 without animation.
- **Layout:** kicker (80, 84); code surface left; right column x 1236-1840; nothing below y ≈ 880 (caption band 900-1080).
- **Negative list:** no logos, decorative shapes, coloured blocks behind text, gradients, glow, heavy shadows, dark code surfaces, serif fonts, real browser / VS Code chrome, icons or emoji (draw chevrons with CSS borders), em-dashes in visible text, `Math.random` / `Date.now`, breathing / drift / camera push.

## Frame 1 — Hook: wat een URL vertelt

- id: 01-hook
- duration: 20.47s
- transition_in: cut
- status: outline
- voiceover: "Een URL vertelt meer dan je denkt. Slash products slash twee: dat is het product met id twee. En slash products vraagteken sort is price toont de lijst, gesorteerd op prijs. Die stukjes lees je in React Router met use params en use search params."
- focal: two large URL bars, each with a note on what its part means; then the two hooks as hero words.
- sfx: pop@0.32, typing@2.96, pop@4.48, pop@6.4, typing@8.32, pop@10.16, pop@12.48, whoosh-short@14.32, pop@16.72, pop@17.92
- layout: two large URL bars (height 88, mono 48px), x 360-1560: bar A top y 250, bar B top y 470. Notes under each bar at 24px below its bottom, left-aligned with the highlighted part: Inter 500 30px `#475569`.
- shots:
  - 0.0-2.9: kicker `URL`. "URL" (0.32): bar A fades in empty (only `localhost:5173` muted).
  - 2.9-7.7: "Slash products slash twee" (2.96-4.48): `/products/2` types on in bar A (per character, done by 4.6). "twee" (4.48): a blue key box (`ts-mark`) around the `2`. "id twee" (6.40): note `het product met id 2` appears under the `2`.
  - 7.7-14.2: "slash products vraagteken sort is price" (8.32-10.88): bar B fades in at 8.32 and `/products?sort=price` types on (8.32-10.9); the query part is blue-dark. "vraagteken" (9.36): the `?` is typed by then; at 10.16 ("sort") a blue wash covers `?sort=price`. "gesorteerd op prijs" (12.48): note `hoe je de lijst ziet` under the query part.
  - 14.2-end: at 14.32 both bars and notes slide up 150px and dim to 0.3 (0.6s power3.out). "use params" (16.72): hero `useParams` (Inter 700 120px ink, tracking -0.035em) lands at left-centre (centred at x 640, top y ≈ 560), blue bar wipes in under it at 17.0. "use search params" (17.92): hero `useSearchParams` lands at right-centre (centred at x 1340), blue bar at 18.2. (Scale the pair so both fit 140-1780 with a 120px gap; ~110px if needed.) Hold.

## Frame 2 — Eén route met een parameter

- id: 02-route
- duration: 24.39s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Neem een webshop. Voor elk product een aparte route maken, dat lukt niet: er komen voortdurend producten bij. Daarom maak je één route met een parameter: products slash dubbelpunt id. Het dubbelpunt maakt van id een plaatshouder. Slash products slash één en slash products slash twee tonen dan dezelfde component, met andere data."
- focal: a growing stack of one-route-per-product (wrong), then one `products/:id` route; right: two URLs that hit the same component.
- sfx: pop@2.88, pop@4.32, pop@5.24, whoosh-short@7.04, typing@10.2, pop@11.12, pop@14.76, pop@17.44, pop@19.6, pop@22.4
- code (App.tsx, 10 rows, 26px):
  ```
  1  const router = createBrowserRouter([
  2    {
  3      path: "/",
  4      element: <Root />,
  5      children: [
  6        { path: "products", element: <ProductList /> },
  7        { path: "products/:id", element: <ProductDetail /> },
  8      ],
  9    },
  10 ]);
  ```
  Lines 1-6 and 8-10 static; line 7 is an empty row until it types. Status bar `App.tsx · products/:id`.
- right column part 1 (0-7.0) **route stack**: rows of mono 22px ghost chips (each 520×48, `#F1F5F9`, hairline, radius 8) stacked from y 210, 60px apart: `{ path: "products/1" }`, `{ path: "products/2" }`, `{ path: "products/3" }`, then `products/4`, `products/5`, `products/6` written the same way.
- right column part 2 (11.1-end) **placeholder**: at y 210 a large mono 40px `products/:id` with a blue key box around `:id`, and under it at y 290 the label `plaatshouder` (Inter 500 26px `#475569`) pointing at `:id`. Then two URL rows at y 400 and 480 (height 56): standalone URL bar (x 1236, width 300, mono 22px, without `localhost:5173`) with `/products/1` / `/products/2`, a 2px `#94A3B8` arrow (40px, small solid head), a component chip `<ProductDetail />` (name `#9A5B13`), and a small data note mono 18px `#475569` at the far right: `Keyboard` / `Mouse`.
- shots:
  - 0.0-2.8: kicker `URL parameters`. Panel with static lines in at 0.1. "webshop" (0.40): hold.
  - 2.8-7.0: "aparte route" (2.88): chips 1, 2, 3 of the route stack drop in (y -8→0, fade), stagger 0.15. "lukt niet" (4.32): the stack gets a 2px `#D14343` outline (a rounded rect around all chips). "voortdurend producten bij" (5.24): chips 4, 5, 6 drop in, stagger 0.2 (the outline grows with them).
  - 7.0-12.7: "Daarom" (7.04): the stack fades out (0.4s). "parameter" (9.28): hold. "products slash dubbelpunt id" (10.20): line 7 types from 10.20; at 11.12 ("dubbelpunt") a blue key box (`ts-mark`) on `"products/:id"`; the large `products/:id` appears in the right column.
  - 12.7-16.0: "Het dubbelpunt" (13.00): blue wash on `:id` in the right-column URL. "plaatshouder" (14.76): the label `plaatshouder` fades in, with a 2px blue line from the label up to `:id`.
  - 16.0-end: "Slash products slash één" (17.44): URL row 1 with arrow and chip appears. "slash products slash twee" (19.60): URL row 2 appears. "dezelfde component" (20.80): both `<ProductDetail />` chips get the selected style (blue-tint + blue border). "andere data" (22.72): the data notes `Keyboard` and `Mouse` fade in. Hold.

## Frame 3 — useParams

- id: 03-useparams
- duration: 18.07s
- transition_in: push-slide
- status: outline
- voiceover: "Welke waarde zit er in die plaatshouder? Dat vraag je op met de hook use params. Die geeft een object met de URL parameters van de huidige pagina, en met destructuring haal je id eruit. Vanuit de lijst link je dan gewoon naar slash products slash het id van het product."
- focal: `useParams` in ProductDetail; right: the detail card for `/products/2` and the object it returns; then the list with links.
- sfx: typing@3.6, pop@4.32, pop@5.76, pop@10.8, whoosh-short@12.0, typing@12.0, click-soft@15.9
- code (App.tsx, 15 rows, **24px / 35px**):
  ```
  1  const ProductDetail = () => {
  2    const { id } = useParams();
  3
  4    return <h1>Product {id}</h1>;
  5  };
  6
  7  const ProductList = () => (
  8    <ul>
  9      {products.map((product) => (
  10       <li key={product.id}>
  11         <Link to={`/products/${product.id}`}>{product.name}</Link>
  12       </li>
  13     ))}
  14   </ul>
  15 );
  ```
  Status bar `App.tsx · useParams`. Template literal: backticks and `/products/` as string `#0F7B6C`, `${` `}` punctuation, `product.id` ink.
- right column: the demo card **detail variant** at the standard position: path `/products/2`, label `ProductDetail`, heading `Product 2`. Under the card at (1236, 670): chip row `useParams()` (mono 22px, `#9A5B13` name) + 2px `#94A3B8` arrow + chip `{ id: "2" }`; at (1236, 740) chip key `id` value `"2"` (selected style).
- shots:
  - 0.0-3.5: kicker `useParams`. Panel in at 0.1 (empty). "plaatshouder" (1.40): the scherm label + detail card fade in with path `/products/2` and an empty body; blue wash on the `2` in the path.
  - 3.5-9.3: "use params" (4.00/4.32): lines 1, 2, 4, 5 type from 3.60 (fast); wash on `useParams()` at 4.32; the card body shows label `ProductDetail` + heading `Product 2` at 4.32 (wash on the path off). "object" (5.76): the `useParams()` → `{ id: "2" }` chip row appears. "URL parameters" (7.20): hold. "huidige pagina" (8.48): hold.
  - 9.3-12.0: "destructuring" (9.76): wash moves to `{ id }` (line 2) + blue key box. "id eruit" (10.80): the `id: "2"` chip pops in; the `2` in the heading gets a 2px blue underline.
  - 12.0-end: "Vanuit de lijst" (12.00): lines 7-15 type from 12.00 (fast); the card swaps (cross-fade 0.4s) to the **link variant** with path `/products`; the two chip rows fade out. "link" (12.88): wash on `<Link to={...}>` (line 11). "slash products slash het id" (14.08-15.76): wash moves to `` `/products/${product.id}` ``; the cursor enters at 15.0 and clicks the `Mouse` link at 15.90; at 16.30 the card swaps back to the detail variant with path `/products/2` and heading `Product 2` (path slides). Cursor parks aside and fades at 17.2. Hold.

## Frame 4 — Altijd een string

- id: 04-string
- duration: 20.79s
- transition_in: crossfade
- status: outline
- voiceover: "Let op: een parameter is altijd een string. Slash products slash twee geeft de string twee, niet het getal. Heb je een getal nodig, zet het dan om met Number. En controleer het resultaat: slash products slash abc geeft not a number. Toon dan een duidelijke melding."
- focal: the string `"2"` vs the number `2`; `Number(id)` and the `NaN` check; right: detail card for `/products/2` and then `/products/abc`.
- sfx: pop@2.92, pop@6.2, pop@7.64, typing@10.76, pop@10.96, typing@12.16, typing@13.92, pop@17.12, pop@19.12
- code (App.tsx, 10 rows, 26px):
  ```
  1  const ProductDetail = () => {
  2    const { id } = useParams();
  3    const productId = Number(id);
  4
  5    if (Number.isNaN(productId)) {
  6      return <p>Invalid product id</p>;
  7    }
  8
  9    return <h1>Product {productId}</h1>;
  10 };
  ```
  Lines 1, 2, 9, 10 static (rows 3-8 empty until they type). Status bar `App.tsx · ProductDetail`.
- right column: present from the start: the detail card (path `/products/2`, label `ProductDetail`, heading `Product 2`). Under it, chip rows at (1236, 670) and (1236, 740): `id` and later `productId`, each a key label + value chip; type tags at the right of each value (mono 18px `#94A3B8`: `string`, `number`).
- shots:
  - 0.0-3.7: kicker `Altijd een string`. Panel in with static lines. "string" (2.92): wash on `{ id }` (line 2).
  - 3.7-8.3: "slash products slash twee" (3.80-4.96): blue wash on `/products/2` in the card's address. "de string twee" (6.20): chip row 1 pops in: key `id`, value `"2"` (string colour) + type tag `string`. "niet het getal" (7.64): a ghost chip `2` (number colour) appears to the right of it, dimmed to 35% and struck through.
  - 8.3-11.8: "Number" (10.76/10.96): line 3 types from 10.76; wash on `Number(id)`. At 10.96 chip row 2 pops in: key `productId`, value `2` (number colour) + tag `number`; the ghost chip fades out.
  - 11.8-17.8: "controleer het resultaat" (12.16): lines 5, 6, 7 type from 12.16 (fast). "slash products slash abc" (13.92-15.12): the card's path changes to `/products/abc` (types on `abc` per character after `/products/`); chip row 1 value becomes `"abc"` at 15.12. "not a number" (17.12): chip row 2 value becomes `NaN` with a 2px `#D14343` border; wash on `Number.isNaN(productId)` (line 5).
  - 17.8-end: "duidelijke melding" (19.12): the card body swaps to the error state: `Invalid product id` with the red left bar; wash moves to line 6. Hold.

## Frame 5 — Types en meerdere parameters

- id: 05-types
- duration: 18.39s
- transition_in: crossfade
- status: outline
- voiceover: "Het type van een parameter is string of undefined. Een typfout in de naam merkt TypeScript dus niet op. Geef daarom de namen mee als type argument, dan stelt je editor de juiste namen voor. Een pad kan ook meerdere parameters hebben: die komen allemaal in hetzelfde object."
- focal: the type of `id`, a typo that compiles fine, `useParams<{ id: string }>()` with an autocomplete hint; then two parameters in one object.
- sfx: typing@0.24, pop@2.56, typing@3.96, pop@6.4, typing@7.04, pop@11.04, typing@12.48, pop@16.88
- code (App.tsx, 7 rows, 26px):
  ```
  1  const { id } = useParams();
  2  const { idd } = useParams();
  3
  4  const { id } = useParams<{ id: string }>();
  5
  6  // path: "users/:userId/posts/:postId"
  7  const { userId, postId } = useParams();
  ```
  Status bar `App.tsx · useParams`.
- right column (no scherm card in this frame), rows at x 1236-1840:
  - y 200: a type hint box (white, 1px hairline, radius 8, padding 10px 16px, mono 22px, shadow at most 0 1px 2px): `const id: string | undefined` (`string` / `undefined` in `#3178C6`).
  - y 290: a chip `idd` + arrow + chip `undefined`, and a red mono 18px note `geen compilatiefout` under it at y 350 (4px `#D14343` left bar, Inter 500 22px ink instead of mono is fine).
  - y 430: an autocomplete box (white, 1px hairline, radius 8, width 240, mono 22px): a header line `useParams<{ id: string }>` muted 16px, then one suggestion row `id` with a blue-tint background and a small `string` tag right.
  - y 600: standalone URL bar `/users/5/posts/12` (without host, width 604), y 680: arrow down + chip `{ userId: "5", postId: "12" }` (keys ink, values string colour).
- shots:
  - 0.0-3.6: kicker `Types`. Panel in at 0.1 (empty). "type" (0.24): line 1 types from 0.24. "string of undefined" (1.68/2.56): the type hint box fades in at 2.56; wash on `id` in line 1.
  - 3.6-6.9: "typfout" (3.96): line 2 types from 3.96; `idd` gets a thin red underline (2px `#D14343`) at 4.64. "merkt TypeScript dus niet op" (6.40): the `idd → undefined` row and the red note appear.
  - 6.9-12.4: "type argument" (7.04/9.24): line 4 types from 7.04; at 9.24 blue key box (`ts-mark`) on `<{ id: string }>`. "juiste namen voor" (11.04): the autocomplete box fades in (y 8→0).
  - 12.4-end: "meerdere parameters" (12.48/13.92): lines 6 and 7 type from 12.48; at 13.92 the URL bar `/users/5/posts/12` appears (with `5` and `12` in blue boxes after 0.3s). "hetzelfde object" (16.88): the arrow and the object chip appear; wash on `{ userId, postId }`. Hold.

## Frame 6 — Query parameters

- id: 06-query
- duration: 25.11s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Dan de query parameters: het deel na het vraagteken. Telkens een sleutel en een waarde, gescheiden door een ampersand. Ze horen niet bij het pad: de route products matcht ook als er query parameters achter staan. Een URL parameter bepaalt welke resource je toont. Een query parameter is optioneel, en bepaalt hoe: een zoekterm, een filter of een sortering."
- focal: an annotated URL; then URL parameter vs query parameter in two cards. No code panel.
- sfx: pop@0.56, pop@3.04, pop@4.72, pop@5.6, pop@7.16, pop@9.28, pop@11.52, pop@14.88, pop@19.4, pop@21.56, pop@22.48, pop@23.36
- layout:
  - Large URL bar (height 88, mono 48px) centred, x 300-1620, top y 190: `localhost:5173/products?q=mouse&sort=price`.
  - Annotation labels under the URL at y 300-340 (Inter 500 24px `#475569`, each centred under its part, with a 2px `#94A3B8` tick up to the part): `pad` under `/products`, `sleutel` under `q` and under `sort` (one label each), `waarde` under `mouse` and `price`.
  - Route match row at y 400: a chip `{ path: "products" }` at x 300, then two small URL bars at x 760 (`/products`) and x 1180 (`/products?q=mouse`), mono 22px, each with a blue match tag `match` (blue-tint pill, mono 16px) appearing at its right edge.
  - Comparison cards at y 540-800: two cards 640×260 at x 300-940 and 980-1620 (white, hairline, radius 12, padding 28). Card A title mono 30px `/products/:id` + label `URL parameter` (label style); statement Inter 500 30px ink `welke resource je toont`. Card B title mono 30px `?sort=price` (blue-dark) + label `query parameter`; statement `optioneel: hoe je ze toont`; then three small chips in a row (mono 20px): `zoekterm`, `filter`, `sortering` (Inter 500 20px is fine).
- shots:
  - 0.0-2.0: kicker `Query parameters`. "query parameters" (0.56): the URL bar fades in with the full URL.
  - 2.0-8.0: "na het vraagteken" (3.04): blue wash on `?q=mouse&sort=price` and a blue key box on `?`. "sleutel" (4.72): `sleutel` labels under `q` and `sort`. "waarde" (5.60): `waarde` labels under `mouse` and `price`. "ampersand" (7.16): a blue key box on `&` (the `?` box fades).
  - 8.0-14.0: "niet bij het pad" (9.28): the `&` box fades; `pad` label under `/products`, the path gets a 2px ink underline. "de route products" (10.40): the route chip appears. "matcht ook" (11.52): the two small URL bars appear with their `match` tags (stagger 0.2).
  - 14.0-17.8: "URL parameter" (14.88): card A fades in (title + label). "welke resource" (16.08): its statement fades in.
  - 17.8-end: "query parameter is optioneel" (19.40): card B fades in with title, label and statement. "zoekterm" (21.56), "filter" (22.48), "sortering" (23.36): the three chips pop in one by one. Hold.

## Frame 7 — useSearchParams

- id: 07-searchparams
- duration: 20.23s
- transition_in: push-slide
- status: outline
- voiceover: "Query parameters lees je met use search params. Net als bij use state krijg je een array met twee elementen: de huidige waarden, en een functie om ze aan te passen. Search params punt get geeft een waarde als string, of null als ze ontbreekt. Voorzie dus altijd een standaardwaarde."
- focal: the `useSearchParams` tuple next to the familiar `useState` tuple; `get` returning a string or `null`; a default with `??`.
- sfx: typing@2.0, pop@4.56, pop@8.12, pop@9.84, typing@11.6, pop@14.28, pop@15.28, typing@16.88, pop@18.24
- code (App.tsx, 5 rows, 26px):
  ```
  1  const [searchParams, setSearchParams] = useSearchParams();
  2
  3  const search = searchParams.get("q");
  4
  5  const sort = searchParams.get("sort") ?? "name";
  ```
  Status bar `App.tsx · useSearchParams`.
- right column:
  - y 200: standalone URL bar (width 604) `localhost:5173/products?q=mouse`.
  - y 290: mini panel `vergelijk` (code mini panel like the reference's right-column mini panel, title bar 40px with label `vergelijk`), one mono 20px line `const [count, setCount] = useState(0);`.
  - y 430 and 510: result rows: chip `get("q")` + arrow + chip `"mouse"` (string colour); chip `get("sort")` + arrow + chip `null` (`#235A97`).
  - y 610: row: chip `?? "name"` + arrow + chip `"name"` (selected style).
- shots:
  - 0.0-3.8: kicker `useSearchParams`. Panel in (empty) and URL bar fade in at 0.1. "use search params" (2.00/2.48): line 1 types from 2.00; wash on `useSearchParams()` at 3.08.
  - 3.8-11.5: "use state" (4.56): the `vergelijk` mini panel fades in. "array met twee elementen" (6.12/6.96): wash on `[searchParams, setSearchParams]` and a wash on `[count, setCount]` in the mini panel at the same time. "huidige waarden" (8.12): wash only on `searchParams` (and `count`). "functie" (9.84): wash only on `setSearchParams` (and `setCount`).
  - 11.5-16.8: "Search params punt get" (11.60/12.64): line 3 types from 11.60. "als string" (14.28): row `get("q")` → `"mouse"` appears; wash on `?q=mouse` in the URL bar. "of null als ze ontbreekt" (15.28/15.92): row `get("sort")` → `null` appears.
  - 16.8-end: "standaardwaarde" (16.88/18.24): line 5 types from 16.88; at 18.24 wash on `?? "name"` and the `?? "name"` → `"name"` row appears. Hold.

## Frame 8 — setSearchParams

- id: 08-setsearchparams
- duration: 19.43s
- transition_in: crossfade
- status: outline
- voiceover: "Met set search params pas je ze aan: de URL verandert, en de component rendert opnieuw. Geef je een object mee, dan vervang je alle parameters. Wil je er één aanpassen en de rest behouden? Geef dan een functie mee. Die kopieert de vorige parameters, en zet enkel die ene waarde."
- focal: two ways to call `setSearchParams` and what each does to `?q=mouse`.
- sfx: pop@0.24, pop@2.8, pop@5.2, typing@6.48, pop@8.88, typing@12.8, pop@15.84, pop@17.84
- code (App.tsx, 9 rows, 26px):
  ```
  1  // vervangt alle parameters
  2  setSearchParams({ sort: "price" });
  3
  4  // past er één aan, behoudt de rest
  5  setSearchParams((prev) => {
  6    const next = new URLSearchParams(prev);
  7    next.set("sort", "price");
  8    return next;
  9  });
  ```
  Status bar `App.tsx · setSearchParams`.
- right column:
  - y 200: standalone URL bar (width 604) `localhost:5173/products?q=mouse`; a render-tag pill `render #2` (blue-tint, 1px blue, mono 18px `#235A97`, radius 999) appears under it at (1236, 270) when named.
  - y 360: row A: label `object` (label style) above; then URL text `?q=mouse` (mono 24px) + arrow + `?sort=price` (mono 24px), and under it a red mono 18px note `q=mouse is weg` (4px red left bar).
  - y 560: row B: label `functie` above; then `?q=mouse` + arrow + `?q=mouse&sort=price`, with `q=mouse` in a blue-tint highlight and a mono 18px `#235A97` note `q=mouse blijft`.
- shots:
  - 0.0-6.4: kicker `setSearchParams`. Panel (empty) and URL bar fade in at 0.1. "set search params" (0.24): hold. "URL verandert" (2.80/3.44): a blue wash pulses on the URL bar's query part (on at 2.80, off at 4.2). "rendert opnieuw" (5.20/5.60): the `render #2` pill pops in.
  - 6.4-9.9: "object" (7.08): lines 1-2 type from 6.48 (fast); wash on `{ sort: "price" }` at 7.08. "alle parameters" (8.88): row A appears (label, `?q=mouse`, arrow, `?sort=price`) and its red note fades in at 9.2.
  - 9.9-14.5: "de rest behouden" (11.80/12.00): hold. "functie" (13.44): lines 4-9 type from 12.80 (fast); wash on `(prev) =>` at 13.44.
  - 14.5-end: "kopieert de vorige parameters" (14.72/15.84): wash moves to `new URLSearchParams(prev)` (line 6) at 14.72; row B appears at 15.84 with `?q=mouse` → (arrow). "die ene waarde" (17.84): wash moves to `next.set("sort", "price")`; row B's result `?q=mouse&sort=price` and the blue note appear. Hold.

## Frame 9 — De URL als state

- id: 09-url-state
- duration: 21.19s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Tot nu toe hielden we een zoekterm of een sortering bij met use state. Maar herlaad de pagina, en alles is weg. Zet die state in de query parameters, en je krijgt drie dingen gratis. Herladen behoudt je filters. Je kan de URL delen of bookmarken. En de terugknop van de browser werkt op je filters."
- focal: the shop with `useState` losing its filter on reload; then the same filter in the URL and three benefits.
- sfx: typing@0.4, pop@3.36, whoosh-short@5.76, pop@7.12, pop@9.12, pop@11.4, pop@12.08, pop@15.16, pop@17.48
- left column, part 1 (0-11.4): mini code panel `ProductList.tsx` at x 80, y 170, width 1060, 2 rows mono 26px:
  ```
  1  const [search, setSearch] = useState<string>("");
  2  const [sort, setSort] = useState<string>("name");
  ```
- left column, part 2 (11.4-end): three benefit rows at x 80-1140, y 420 / 560 / 700, each 110 high: a title Inter 700 40px ink (`Herladen`, `Delen of bookmarken`, `Terugknop`) with a 4px blue left bar, and under it Inter 400 26px `#475569` (`behoudt je filters`, `wie de link opent, ziet hetzelfde`, `werkt op je filters`).
- right column: the demo card **list variant** at the standard position. Start state (present when it fades in): path `/products`, input shows `mouse` (typed text), sort `Price`, order `Ascending`, list filtered: `Mouse pad € 9.99`, `Mouse € 24.99`.
- shots:
  - 0.0-4.4: kicker `De URL als state`. "zoekterm of een sortering" (1.40/2.32): the mini panel fades in at 0.4 and its 2 rows type from 0.4 (fast); the scherm card fades in at 1.40. "use state" (3.36): wash on `useState` in both rows.
  - 4.4-7.7: "herlaad de pagina" (4.96/5.76): at 5.76 the card body (controls, list, shortcuts) fades to white (0.12s), stays blank 0.3s, then rebuilds in the default state: empty input (placeholder), `Name`, `Ascending`, full list of 6. "alles is weg" (7.12): the card gets a 2px `#D14343` outline and a red mono tag `filters weg` on its top-right edge.
  - 7.7-12.0: "in de query parameters" (8.88/9.12): the red outline and tag fade; the path changes to `/products?q=mouse&sort=price` (query blue-dark), and the card shows `mouse`, `Price`, the filtered list again. The mini code panel fades to 0.35 and gets a line-through on both rows at 9.12. "drie dingen gratis" (11.40): the mini panel fades out.
  - 12.0-end: "Herladen behoudt je filters" (12.08): benefit row 1 fades in (x -8→0); at 12.80 the card body flashes once (blank 0.3s) and comes back with the same filters. "delen of bookmarken" (15.16): benefit row 2 fades in; the card's address row gets a blue wash (15.16-16.6). "terugknop" (17.48): benefit row 3 fades in. Hold.

## Frame 10 — Lezen uit de URL

- id: 10-lezen
- duration: 19.43s
- transition_in: push-slide
- status: outline
- voiceover: "Neem deze productlijst. Er staat nergens een use state. De zoekterm, het sorteerveld en de volgorde lezen we rechtstreeks uit de URL. De URL is de enige bron van waarheid. Kopieer die waarden dus niet naar een aparte state, want dan heb je twee bronnen die uit elkaar kunnen lopen."
- focal: the course's `ProductList` reading `q`, `sort` and `order` from `searchParams`; right: the shop showing exactly what the URL says.
- sfx: typing@0.64, pop@3.32, pop@4.16, pop@5.24, pop@6.4, pop@8.56, pop@11.36, pop@14.8, pop@16.48
- code (ProductList.tsx, 9 rows, 26px):
  ```
  1  const ProductList = () => {
  2    const [searchParams, setSearchParams] = useSearchParams();
  3
  4    const search = searchParams.get("q") ?? "";
  5    const sort: SortField =
  6      searchParams.get("sort") === "price" ? "price" : "name";
  7    const order: SortOrder =
  8      searchParams.get("order") === "desc" ? "desc" : "asc";
  9    // ...
  ```
  Status bar `ProductList.tsx · searchParams`.
- right column: the demo card list variant: path `/products?q=mouse&sort=price&order=desc`, input `mouse`, `Price`, `Descending`, list `Mouse € 24.99`, `Mouse pad € 9.99`. Under the card: y 670 a statement row (4px blue left bar, Inter 600 26px ink) `de URL is de enige bron van waarheid`; y 740 a ghost code chip (mono 20px) `const [search, setSearch] = useState(…)` with a red line-through, dimmed to 50%, and a red mono 18px tag `twee bronnen` right of it.
- shots:
  - 0.0-3.9: kicker `Lezen uit de URL`. Panel in at 0.1. "productlijst" (0.64): lines 1, 2, 9 type from 0.64 (fast); the scherm label + card fade in at 0.64. "nergens een use state" (2.88/3.32): blue wash on `useSearchParams()` (line 2) at 3.32.
  - 3.9-9.4: "zoekterm" (4.16): line 4 types; wash on `searchParams.get("q")`, and the card's search input gets a blue border. "sorteerveld" (5.24): lines 5-6 type; wash moves there; the sort select gets the blue border (input border back to neutral). "volgorde" (6.40): lines 7-8 type; wash moves; the order select gets the blue border. "uit de URL" (8.56): all three borders neutral; blue wash on the card's query part `?q=mouse&sort=price&order=desc`.
  - 9.4-12.2: "enige bron van waarheid" (10.60/11.36): the statement row fades in at 11.36.
  - 12.2-end: "aparte state" (14.80): the ghost chip fades in (with the line-through drawn left to right over 0.3s). "twee bronnen" (16.48): the red `twee bronnen` tag appears. Hold.

## Frame 11 — Wantrouw de URL

- id: 11-wantrouw
- duration: 16.07s
- transition_in: crossfade
- status: outline
- voiceover: "Wantrouw wel wat er in de URL staat. Iedereen kan zelf sort is banana typen. Daarom controleren we de waarde, en vallen we anders terug op een standaard. Zo krijgen sort en order meteen een correct type, in plaats van string of null."
- focal: `?sort=banana` typed by hand; the check falls back to `"name"`; the union types.
- sfx: typing@3.92, pop@5.0, pop@6.24, pop@9.12, typing@10.64, pop@12.88, pop@14.56
- code (ProductList.tsx, 7 rows, 26px):
  ```
  1  type SortField = "name" | "price";
  2  type SortOrder = "asc" | "desc";
  3
  4  const sort: SortField =
  5    searchParams.get("sort") === "price" ? "price" : "name";
  6  const order: SortOrder =
  7    searchParams.get("order") === "desc" ? "desc" : "asc";
  ```
  Lines 4-7 static; lines 1-2 empty until they type. Status bar `ProductList.tsx · SortField`.
- right column: present from the start: the demo card list variant with path `/products`, empty input, `Name`, `Ascending`, the full list (default order). Under the card at (1236, 670): chip key `sort` value `"name"`; at (1236, 740): two chips side by side: `SortField` (type colour `#3178C6`) and a ghost `string | null` (struck through, 35%).
- shots:
  - 0.0-3.8: kicker `Wantrouw de URL`. "URL" (1.44): blue wash on the card's address row (1.44-3.0).
  - 3.8-5.7: "sort is banana" (3.92-5.00): `?sort=banana` types on after `/products` in the address row (per character, done by 4.9); at 5.00 the word `banana` gets a 2px red underline.
  - 5.7-9.9: "controleren" (6.24): wash on `=== "price"` (line 5). "terug op een standaard" (8.44/9.12): wash moves to `: "name"`; at 9.12 the `sort: "name"` chip pops in (selected style) and the sort select in the card pulses a blue border (on 9.12, off 10.0).
  - 9.9-end: "sort en order" (10.64/11.40): lines 1 and 2 type from 10.64; wash on `SortField` / `SortOrder` (lines 4 and 6). "correct type" (12.88): the `SortField` chip appears. "string of null" (13.84/14.56): the ghost `string | null` chip appears at 14.56. Hold.

## Frame 12 — updateParam

- id: 12-updateparam
- duration: 20.63s
- transition_in: push-slide
- status: outline
- voiceover: "Aanpassen gebeurt in update param. We kopiëren de vorige parameters, zodat de sortering blijft staan als je een zoekterm typt. Is de waarde gelijk aan de standaard, dan verwijderen we ze: zo blijft de URL proper. En voor de zoekterm gebruiken we replace. Anders wordt elke letter een aparte stap in de geschiedenis."
- focal: the course's `updateParam`: copy, delete defaults, `replace` for the search term; right: the URL reacting and a browser history with and without `replace`.
- sfx: typing@1.48, typing@2.8, typing@5.92, typing@8.08, pop@11.04, pop@12.64, typing@14.04, pop@15.2, pop@16.24
- code (ProductList.tsx, 13 rows, **24px / 35px**):
  ```
  1  const updateParam = (
  2    key: string, value: string, defaultValue: string
  3  ) => {
  4    setSearchParams((prev) => {
  5      const next = new URLSearchParams(prev);
  6      if (value === defaultValue) {
  7        next.delete(key);
  8      } else {
  9        next.set(key, value);
  10     }
  11     return next;
  12   }, { replace: key === "q" });
  13 };
  ```
  Status bar `ProductList.tsx · updateParam`.
- right column:
  - y 200: standalone URL bar (width 604, mono 20px) starting at `localhost:5173/products?sort=price`.
  - y 300-760: a `geschiedenis` panel (label style title `geschiedenis` at y 300; two columns below, each 290 wide, x 1236 and 1550): column titles mono 18px `zonder replace` (`#94A3B8`) and `met replace` (`#235A97`); entries are small mono 18px rows (height 40, panel fill, hairline, radius 6, 8px apart) stacked from y 380.
- shots:
  - 0.0-2.7: kicker `updateParam`. Panel (empty) and URL bar fade in at 0.1. "update param" (1.48): lines 1, 2, 3, 13 type from 1.48 (fast); wash on `updateParam`.
  - 2.7-8.0: "kopiëren de vorige parameters" (2.80/3.76): lines 4, 5, 11 type from 2.80; wash on `new URLSearchParams(prev)` at 3.76. "sortering blijft staan als je een zoekterm typt" (5.12/6.84/7.28): line 9 (`next.set(key, value);`) types at 5.92; at 7.28 the URL becomes `localhost:5173/products?sort=price&q=mouse`, with `sort=price` blue-tint highlighted (kept).
  - 8.0-13.4: "gelijk aan de standaard" (8.76/9.52): lines 6, 7, 8 and 10 type from 8.08 (fast; line 9 already stands between them); wash on `value === defaultValue` at 9.52. "verwijderen we ze" (10.40/11.04): wash on `next.delete(key)`; at 11.04 the `sort=price&` part slides out of the URL (as if the user picked `Name`, the default): URL `localhost:5173/products?q=mouse`. "proper" (12.64): a small blue mono tag `proper` under the URL bar at (1236, 262).
  - 13.4-end: "replace" (14.04/15.20): line 12 types from 14.04; at 15.20 wash + blue key box on `{ replace: key === "q" }`, the history panel fades in and the `met replace` column shows one entry `?q=mouse` (blue-tint, blue border). "elke letter een aparte stap" (16.24-18.72): the `zonder replace` column fills one entry at a time: `?q=m` (16.24), `?q=mo` (16.64), `?q=mou` (17.04), `?q=mous` (17.44), `?q=mouse` (17.84); at 18.72 that column gets a 2px `#D14343` outline. Hold.

## Frame 13 — In actie

- id: 13-actie
- duration: 20.71s
- transition_in: crossfade
- status: outline
- voiceover: "De zichtbare lijst is geen state: we berekenen ze bij elke render, uit de producten en de parameters. Typ mouse, sorteer op prijs, aflopend, en de URL groeit mee. Druk op terug, en de vorige sortering staat er weer. Zelfs een gewone Link naar vraagteken sort is price werkt meteen."
- focal: `visibleProducts` derived during render; the live demo in the shop: type, sort, back, shortcut link.
- sfx: typing@0.24, pop@4.64, click-soft@6.96, typing@7.28, click-soft@8.48, click-soft@9.4, pop@10.64, click-soft@12.56, typing@15.44, click-soft@18.08
- code (ProductList.tsx, 11 rows, **24px / 35px**):
  ```
  1  const visibleProducts = products
  2    .filter((product) =>
  3      product.name.toLowerCase().includes(search.toLowerCase()))
  4    .sort((a, b) => {
  5      const result = sort === "name"
  6        ? a.name.localeCompare(b.name)
  7        : a.price - b.price;
  8      return order === "asc" ? result : -result;
  9    });
  10
  11 <Link to="?sort=price">Cheapest first</Link>
  ```
  Status bar `ProductList.tsx · visibleProducts`.
- right column: the demo card list variant at the standard position, start: path `/products`, empty input, `Name`, `Ascending`, full list. Under the card at (1236, 670): a small neutral button `terug` (white, 1px hairline, radius 6, height 40, padding 0 16px, Inter 500 18px `#475569`), standing for the browser's back button.
- demo states (path / input / sort / order / list):
  - A (start): `/products` / empty / Name / Ascending / Headset, Keyboard, Monitor, Mouse, Mouse pad, Webcam.
  - B (7.28-8.0, typing): `/products?q=mouse` / `mouse` / Name / Ascending / Mouse € 24.99, Mouse pad € 9.99.
  - C (8.48): `/products?q=mouse&sort=price` / Price / Mouse pad € 9.99, Mouse € 24.99.
  - D (9.40): `/products?q=mouse&sort=price&order=desc` / Descending / Mouse € 24.99, Mouse pad € 9.99.
  - E (12.56, back): back to C.
  - F (18.08, shortcut): `/products?sort=price` / empty / Price / Ascending / Mouse pad € 9.99, Mouse € 24.99, Keyboard € 49.99, Webcam € 59.50, Headset € 79.00, Monitor € 189.00.
- shots:
  - 0.0-6.9: kicker `In actie`. Panel in (empty) and card at 0.1. "zichtbare lijst" (0.24): lines 1-9 type from 0.24 (fast, done by ~3.5); wash on `visibleProducts` at 0.72. "bij elke render" (3.60/4.12): hold. "uit de producten en de parameters" (4.88/5.76): wash on `search`, `sort`, `order` tokens (lines 3, 5, 8) at 5.76; wash off at 6.8.
  - 6.9-12.1: "Typ mouse" (6.96): cursor clicks the search input at 6.96; `mouse` types into it 7.28-7.9 (per character); the path becomes `/products?q=mouse` at 7.9 and the list goes to state B. "sorteer op prijs" (8.48): click on the sort select, text `Price`, state C. "aflopend" (9.40): click on the order select, text `Descending`, state D. Cursor parks aside at 9.8. "de URL groeit mee" (10.64): blue wash on the card's query part (10.64-11.9).
  - 12.1-15.4: "Druk op terug" (12.16/12.56): cursor moves to the `terug` button and clicks at 12.56; state E (order select back to `Ascending`, URL loses `&order=desc`). "vorige sortering" (13.76): the sort/order selects pulse a blue border (on 13.76, off 14.8).
  - 15.4-end: "Link" (15.44/16.36): line 11 types from 15.44; wash on `<Link to="?sort=price">` at 16.36; the `Cheapest first` link in the card gets a blue wash. "vraagteken sort is price" (16.96-18.08): cursor moves to `Cheapest first` and clicks at 18.08; state F. "werkt meteen" (18.72): hold. Cursor parks and fades at 19.6. Hold.

## Frame 14 — Samenvatting

- id: 14-samenvatting
- duration: 22.13s
- transition_in: blur-crossfade
- status: outline
- voiceover: "Samengevat: een dubbelpunt in het pad maakt een URL parameter, en use params geeft je de waarde, altijd als string. Query parameters lees en schrijf je met use search params. En bewaar je filters in de URL, dan overleven ze een herlaadbeurt, kan je ze delen, en werkt de terugknop."
- focal: three recap rows like the series' recap frames.
- sfx: pop@1.36, pop@5.36, pop@8.44, pop@9.12, pop@11.84, pop@14.32, pop@16.72, pop@18.2, pop@19.72
- layout: copy the recap look of `../react-router/compositions/frames/14-samenvatting.html`: rows at y 190, 340, 490 (each height 120, x 80-1840, bottom hairline): left column x 80-760 one or two mono chips (JetBrains Mono 26px 500, 12px gap); right column x 820-1840 a statement Inter 500 36px ink. Row 3 additionally has three small chips under its statement (mono 20px, selected style): `herladen`, `delen`, `terugknop`.
- shots:
  - 0.0-1.3: kicker `Samengevat`.
  - 1.3-9.0: "dubbelpunt in het pad" (1.36): row 1 chip `products/:id`. "use params" (5.36): chip `useParams()`. "altijd als string" (8.44): statement `URL parameter: welke resource, altijd een string`.
  - 9.0-13.4: "Query parameters" (9.12): row 2 chip `?q=mouse&sort=price`. "use search params" (11.84): chip `useSearchParams()` and statement `query parameters lezen en schrijven`.
  - 13.4-end: "filters in de URL" (14.32): row 3 chip `URL = state` and statement `filters bewaard in de URL`. "herlaadbeurt" (16.72): chip `herladen`. "delen" (18.20): chip `delen`. "terugknop" (19.72): chip `terugknop`. Hold to the end.
