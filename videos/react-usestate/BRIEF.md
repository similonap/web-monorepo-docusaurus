---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "State is de waarde die je component onthoudt: pas je ze aan met setState, dan rendert React je component opnieuw."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die componenten, props en event handlers kennen"
length: 180s
angle: how-to
style_preset: code-editorial
---

## Intent

A lesson clip for the course, accompanying the useState section
(`web-monorepo-docusaurus/docs/react/state/index.md`). Third clip in the series
after `react-array-state` and `react-useeffect`: same style (code-editorial
frame.md, cream/ink/coral, navy code surface), same voice, same captions skin.

Story (requested by the teacher, verbatim order):

1. Show a component with a simple button with a counter as its value. Clicking
   the button must raise the counter.
2. So we need to keep that value somewhere and be able to change it. When the
   value changes, every element that shows it must update too. That means the
   component function has to be called again with the new value.
3. That value is called **state**. When state changes, the function is called
   again: in React we call that **re-rendering**. The counter on screen updates.
4. Then: calling `setCount(count + 1)` twice without the callback form raises the
   counter by 1, not 2; explain why (`count` is the value of *this* render, it
   does not change until the next render) and show `setCount(c => c + 1)`.
5. Second example: an input field and a `<p>` showing the state value. Usually
   you set both `value` and `onChange`: a two-way binding between state and
   input. Typing updates the `<p>` without you doing anything for it.
6. Then a separate button that clears the field: it sets the state to `""`.
   You want the input to follow, which is why you also need `value`
   (controlled component).

## Customizations

- Style identical to react-useeffect / react-array-state (copied frame.md, fonts, sfx, caption skin).
- Voice: ElevenLabs eleven_v4, voice "Andie" (8OezxDDjGa2d9W45o5Qs), stability 0.5 (user choice).
- Code follows the course's TypeScript style (`useState<number>(0)`, `useState<string>('')`, arrow components).
- Captions on; no music bed (same as siblings).
