---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "In de Todo App blijft de lijst in App; InputView stuurt een nieuwe todo naar boven via onAddTodo(todo), en TodoItem meldt via onDelete() dat hij weg moet, waarna App met de index filtert."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die props, useState, lijsten en een eerste callback-prop kennen"
length: 190s
angle: how-to
style_preset: ts-light
---

## Intent

A lesson clip for the course, explaining the "Voorbeelden" section of
`web-monorepo-docusaurus/docs/react/child-parent/callbacks.md` (Todo App met InputView,
Todo App met delete functie). Follow-up of `react-child-parent` (Square / onSelect). Same
TS light style, same voice.

Story (requested by the teacher): explain how the code works, systematically, starting with
the InputView and then the delete function.

1. App holds `todos: string[]` and renders the list.
2. InputView: own `inputValue` state, controlled input with `onChange`; why that state lives
   in InputView.
3. InputView cannot change `todos`: it gets a callback prop `onAddTodo: (todo: string) => void`
   (a callback WITH a parameter).
4. `handleAdd`: trim check, `onAddTodo(inputValue)`, `setInputValue("")`.
5. App: `addTodo` with spread, passed as `onAddTodo={addTodo}`; the full add flow.
6. Delete: `TodoItem` with `todo` + `onDelete: () => void`, Delete button `onClick={onDelete}`.
7. App: `deleteTodo(index)` with `filter((_, i) => i !== index)`; in the map
   `onDelete={() => deleteTodo(index)}`, so TodoItem never needs its index; the full delete flow.
8. Summary.

## Customizations

- Style identical to the siblings (TS light). Voice: ElevenLabs eleven_v4, Andie
  (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the `elevenlabs` CLI.
- Code exactly as in the course page (callbacks.md), TypeScript style.
- Captions on; no music bed.
