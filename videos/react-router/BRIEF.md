---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Met createBrowserRouter koppel je URL's aan componenten; een layout met een Outlet geeft elke pagina dezelfde structuur; navigeren doe je met Link en NavLink (niet met <a href>); een *-route en een errorElement vangen ontbrekende pagina's en fouten op."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die componenten, props, useState en useEffect kennen, maar nog niet met React Router gewerkt hebben"
length: 190s
angle: how-to
style_preset: ts-light
---

## Intent

A lesson clip for the course, accompanying `docs/react/routing/index.md` (sections "Voorbeeld",
"Geneste routes en Outlet", "Index routes", "Links", "Ontbrekende pagina's en fouten afhandelen").
URL parameters and query parameters are explicitly left out: the teacher explains those in a
separate video. Same series and style as `react-context`, `react-datacontext`, `react-usefetch`
(TS light, same voice, same captions skin).

Story (requested by the teacher, in this order):

1. Hook: you click a link, the URL and the page change, the app does not reload: client-side
   routing with React Router.
2. `createBrowserRouter` with an array of route objects (`path` + `element`).
3. `RouterProvider` (from `react-router/dom`) in App; create the router outside the component.
4. Problem: every page wants the same header, navigation and footer.
5. A layout component (`Root`) with header, nav, footer and an `Outlet`.
6. `Root` on `/` with `children`; relative child paths; the index route.
7. `<a href>`: a new request, the whole app reloads, state is lost.
8. `Link to`: no request, only the Outlet changes, state stays.
9. `NavLink`: like `Link`, but knows whether it is active and gets the `active` class.
10. `className` with a function that receives `{ isActive }`.
11. Side by side: `<a href>` vs `Link` vs `NavLink` (and `<a href>` only for external links).
12. Missing pages: a child route with `path: "*"` and `PageNotFound` inside the layout.
13. `errorElement` with `useRouteError` and `isRouteErrorResponse`.
14. Recap, with a pointer to the next video about URL parameters.

## Customizations

- Own example instead of the course's `Page1` / `Page2` (speakable paths): pages `Home`, `About`,
  `Contact` on `/`, `/about`, `/contact`. The rest follows the course example (`Root` with
  header, nav, `Outlet`, footer; `index: true`; imports from `react-router`, `RouterProvider` from
  `react-router/dom`, React Router 8, data mode).
- Style identical to the siblings (copied frame.md, fonts, sfx, caption skin, code-typing /
  code-highlight blocks, oversized-cursor).
- Voice: ElevenLabs eleven_v4, voice "Andie" (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the
  `elevenlabs` CLI.
- Captions on; no music bed.
