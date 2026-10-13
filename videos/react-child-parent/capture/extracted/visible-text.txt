---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Moeten componenten elkaar beïnvloeden, dan verhuist de state naar de parent; die geeft de waarde door als prop (selected) en het child meldt een klik terug via een callback-prop (onSelect)."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die props, useState en eenvoudige componenten kennen"
length: 180s
angle: how-to
style_preset: ts-light
---

## Intent

A lesson clip for the course, accompanying the child-parent section
(`web-monorepo-docusaurus/docs/react/child-parent/index.md`). Sibling of `react-usefetch`,
`react-usestate`, `react-useeffect`, `react-array-state` and `react-props`: same TS light
style (copied `frame.md`, fonts, sfx, caption skin), same voice.

Story (requested by the teacher, verbatim order):

1. A `Square` component. Clicking it sets a `selected` state to true, and the border of the
   square changes. The `selected` state lives in the Square itself: it, and only it, needs
   to know that it is selected.
2. Every component stands on its own: the squares have no influence on each other.
3. Now imagine only one Square may be selected at a time. That means the squares DO
   influence each other.
4. So the component that contains the squares must know which square is selected: the
   state moves to the parent. There we keep e.g. the index of the selected square.
5. There must be a way to change that state from inside the Square, because the Square
   knows nothing about its parent's state.
6. Solution: pass a callback to the component, just like a normal prop, e.g. `onSelect`.
   When someone clicks the square, the `onClick` listener calls `onSelect`. The parent
   passed it in, so the parent's callback runs, and in it we change the selected square.
7. We also tell the square whether it is selected via a new `selected` prop.
8. That way only one square can be active at a time.

## Customizations

- Style identical to the siblings (TS light: white + TypeScript blue, Inter + JetBrains Mono).
- Voice: ElevenLabs eleven_v4, voice "Andie" (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the `elevenlabs` CLI.
- Code in the course's TypeScript style: `interface SquareProps`, destructured props,
  arrow components, `useState<boolean>(false)`, `useState<number | null>(null)`,
  `onSelect: () => void`. Squares are neutral slate tiles; selected = blue border
  (`className={selected ? "square selected" : "square"}`) so the palette stays TS light.
- Captions on; no music bed.
