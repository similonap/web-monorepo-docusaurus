---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Een dubbelpunt in het pad maakt een URL parameter die je met useParams leest (altijd een string); query parameters lees en schrijf je met useSearchParams; bewaar filters en sortering in de URL en ze overleven een herlaadbeurt, zijn deelbaar en de terugknop werkt erop."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die React Router basics kennen (createBrowserRouter, layout met Outlet, Link en NavLink) en useState"
length: 240s
angle: how-to
style_preset: ts-light
---

## Intent

A lesson clip for the course, accompanying `docs/react/routing/index.md`, sections
"URL parameters", "Query parameters" and "De URL als state". Follow-up of `react-router`
(which ended with a pointer to this video). Same series and style (TS light, same voice,
same captions skin, same demo-card look).

Story (requested by the teacher, in this order):

1. Hook: a URL carries information: `/products/2` (which product) and `/products?sort=price`
   (how you see the list). `useParams` and `useSearchParams`.
2. URL parameters: one route `products/:id` instead of a route per product.
3. `useParams` and destructuring `{ id }`; linking from the list to `/products/${product.id}`.
4. A parameter is always a string: `Number(id)` and a `Number.isNaN` check.
5. Type `string | undefined`, `useParams<{ id: string }>()`, more than one parameter.
6. Query parameters: the part after `?`, key=value pairs with `&`, not part of the path;
   URL parameter (which resource) vs query parameter (optional, how).
7. `useSearchParams`, `searchParams.get()` returns a string or `null`, default value.
8. `setSearchParams`: an object replaces everything, a function keeps the rest.
9. The URL as state: useState state is lost on reload; in the URL: reload, share, back button.
10. The course example `ProductList`: no useState, read `q`, `sort`, `order` from the URL.
11. Distrust the URL: `?sort=banana` falls back to a default, typed `SortField` / `SortOrder`.
12. `updateParam`: copy previous params, delete defaults, `replace` while typing.
13. `visibleProducts` derived during render; demo: type, sort, back button, `Link to="?sort=price"`.
14. Recap.

## Customizations

- Example data in English (teacher's request): the course's product list with English
  names: `Keyboard`, `Mouse`, `Monitor`, `Mouse pad`, `Webcam`, `Headset` (same ids and prices).
  The demo app's UI text is English too (`Search a product...`, `Name` / `Price`,
  `Ascending` / `Descending`, `Clear filters`). Voice-over stays Flemish Dutch.
- Routes: `products` (ProductList) and `products/:id` (ProductDetail) as children of `Root`,
  instead of the course's `detail/:id` and `/`, so both kinds of parameters live on `/products`.
- Code otherwise follows the course (React Router 8, data mode, `useParams`,
  `useSearchParams`, `updateParam` with `{ replace: key === "q" }`).
- Style identical to the siblings. Voice: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs),
  stability 0.5, via the `elevenlabs` CLI. Compound code names are written split in the
  voice text ("Nav Link"-lesson), captions show the code spelling.
- Captions on; no music bed.
