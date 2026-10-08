---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Side effects horen in useEffect — en wat je start, ruim je op."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die useState en re-renders al kennen"
length: 180s
angle: how-to
style_preset: code-editorial
---

## Intent

A lesson clip for the course, accompanying the useEffect section
(`web-monorepo-docusaurus/docs/react/hooks/useEffect.md`). Sibling of the
`react-array-state` clip: same style (code-editorial frame.md, cream/ink/coral,
navy code surface), same voice (ElevenLabs "Andie"), same
captions skin.

Story (requested by the teacher): start with `setInterval` written directly in
the component body (outside an effect) → show how it spirals out of control:
every tick updates state → re-render → a new `setInterval` → timers double
(2, 4, 8, … >1000) → the browser hangs. Then offer `useEffect` as the solution.
Then the rest of the course material: dependency array (none / [] / [deps]),
cleanup — explicitly show what goes wrong when the interval is NOT cleared
(slider changes `interval`, old timers keep running) and fix it with
`return () => clearInterval(handle)` — fetching from an API (async inner
function), Strict Mode, recap.

## Customizations

- Style identical to react-array-state (copied frame.md, fonts, sfx, caption skin).
- Voice: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5.
- Code follows the course's TypeScript style (`useState(0)`, `setNumber(number => number + 1)`).
- Captions on; no music bed (same as react-array-state).
