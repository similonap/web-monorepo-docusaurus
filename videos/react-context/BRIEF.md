---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Context deelt de state van App rechtstreeks met de componenten die hem nodig hebben: een interface IThemeContext, React.createContext met een default, een Provider in App en useContext waar je de theme (en setTheme) nodig hebt. Geen prop drilling meer."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die props, useState, lifting state up en callback-props kennen"
length: 180s
angle: how-to
style_preset: ts-light
---

## Intent

A lesson clip for the course, explaining `web-monorepo-docusaurus/docs/react/child-parent/context.md`
(secties "Delen van data via context" en "Functies in context"). Follow-up of
`react-child-parent` and `react-todo-callbacks`. Same TS light style, same voice.

Story (requested by the teacher, in this order):

1. You split a component into smaller components, and those again into smaller ones. No problem,
   but where do you put the state?
2. State in a child component: its reach is limited to that component and its children.
3. To share it with siblings or components elsewhere, the state moves up, and up, every time more
   components need it, until it sits at the top in App.
4. It reaches the children again through props, through the whole tree: components that do not use
   the prop still have to receive it just to pass it on (prop drilling).
5. Children that want to change the state need callbacks passed through that whole structure too.
   This is unsustainable.
6. What if we could pass the state of the top component only to the components that need it,
   without props through every level? That is Context.
7. Define an interface `IThemeContext` with `theme: string`; create `ThemeContext` with
   `React.createContext` and default `light`.
8. In App put a `ThemeContext.Provider`, its value bound to App's `theme` state, all children inside.
   Every component inside the provider has access, even children of children.
9. Components use `useContext(ThemeContext)` and destructure `{ theme }`. Every component that needs
   the theme does this; components that do nothing with the theme simply do not, they stay
   independent of the theme state.
10. To make it changeable from children, put the setter `setTheme` in the context, typed
    `(theme: string) => void`, and get it out of the context the same way.

## Customizations

- Own, more realistic example instead of the course's ComponentA-D (teacher's choice): the tree
  `App > Layout > Header > ThemeToggle` and `Layout > Main > Article`. `Article` uses `theme`,
  `ThemeToggle` uses `theme` + `setTheme`; `Layout`, `Header`, `Main` do nothing with the theme.
- Style identical to the siblings (TS light). Voice: ElevenLabs eleven_v4, Andie
  (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the `elevenlabs` CLI.
- Code in the course TypeScript style (`React.createContext<IThemeContext>({ theme: "light" })`).
- Captions on; no music bed.
