---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Met props geef je data door aan een component, zodat je één component kan hergebruiken in plaats van code te kopiëren."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die JSX en eenvoudige componenten kennen"
length: 170s
angle: how-to
style_preset: code-editorial
---

## Intent

A lesson clip for the course, accompanying the props section
(`web-monorepo-docusaurus/docs/react/componenten/props.md`). Fourth clip in the series
after `react-array-state`, `react-useeffect` and `react-usestate`: same style
(code-editorial frame.md, cream/ink/coral, navy code surface), same voice, same captions skin.

Story (requested by the teacher, verbatim order):

1. A very simple badge made with a `div`: a text color, a background color and a label.
   At first we put it straight into `App.tsx`.
2. Then we need the same badge somewhere else, and somewhere else again: copy-paste.
3. Copy-pasting breaks the DRY principle: Don't Repeat Yourself. So we make a component.
4. Done? No: now the same badge is needed with a different label. A new component? No,
   we want to reuse the current Badge and copy as little code as possible.
5. React's solution: props. We pass the label to the component, so it can be reused
   with any label.
6. Then a different color is needed: add a `color` prop. A `string` would work but is
   too open. We only want red, green and blue, so we create a type to restrict it.
7. Now Badge makes all kinds of badges with labels and colors.
8. Default values: when no color is given, the badge should be green.

## Customizations

- Style identical to react-usestate / react-useeffect / react-array-state (copied frame.md, fonts, sfx, caption skin).
- Voice: ElevenLabs eleven_v4, voice "Andie" (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the `elevenlabs` CLI.
- Code follows the course's TypeScript style: `interface BadgeProps`, destructured props
  (`({ label, color }: BadgeProps)`), arrow components, `type Color = 'red' | 'green' | 'blue'`.
- Captions on; no music bed (same as siblings).
