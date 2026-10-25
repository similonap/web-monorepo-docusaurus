---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "In React Native is elke View een flex container: flexDirection kiest de main axis (standaard column), justifyContent verdeelt de kinderen over de main axis, alignItems lijnt ze uit op de cross axis, flex verdeelt de ruimte, flexWrap maakt nieuwe regels en position absolute haalt een element uit de flow."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die net met React Native en Expo begonnen zijn (View, inline styles) en flexbox van CSS misschien al eens gezien hebben"
length: 210s
angle: how-to
style_preset: ts-light
---

## Intent

A lesson clip for the course, accompanying `docs/react-native/flexbox/index.md`
(the page with the interactive flexbox editors). Same series and style as the React clips
(TS light, same voice, same captions skin).

Teacher's request: show everything in a **smartphone next to the code**. Every frame that
explains a property has the code surface on the left and a phone on the right that shows
the result, with the main and cross axis drawn in the phone (like the interactive editor
on the course page).

Story (follows the order of the course page):

1. Hook: three boxes on a phone; every View is a flex container.
2. Two axes: main axis and cross axis; in React Native the main axis is vertical by
   default (`column`), on the web it is `row`.
3. `flexDirection: "row"`: the boxes go next to each other, the axes turn; `row-reverse`
   and `column-reverse` reverse the order.
4. `flex: 1` on the parent: the dashed outline shows the parent View; without flex it is
   only as large as its children, with `flex: 1` it fills the screen.
5. `flex` on the children: 1, 2 and 3 share the main axis (6 parts).
6. `justifyContent`: flex-start, center, flex-end, space-between, space-around, space-evenly.
7. `justifyContent` always follows the main axis: same rule, `flexDirection: "row"`.
8. `alignItems` on the cross axis; default `stretch` (only without a fixed cross size).
9. Centering: `justifyContent` + `alignItems` both `center`.
10. `alignSelf` overrides `alignItems` for one child.
11. `flexWrap`: without wrap the boxes run off the screen (React Native does not shrink
    them, `flexShrink` is 0); `wrap` makes new lines; `alignContent` for the lines.
12. `position: "absolute"` with `top` / `left` / `right` / `bottom`, relative to the parent;
    the other children move up as if it is not there.
13. Recap + pointer to the examples on the course page.

## Customizations

- Code follows the course's React Native style (as in the interactive editor):
  `import {View} from "react-native";`, `const Index = () => { return ( ... ) }`,
  4-space indent, inline styles `style={{flex: 1, flexDirection: "row"}}`, self-closing
  children `<View style={{...}}/>`.
- Box colours: `"lightblue"`, `"skyblue"`, `"steelblue"` instead of the course's
  red / green / blue, so the phone stays in the TS-blue palette (red is reserved for what
  goes wrong). Boxes are 80 × 80.
- Phone: light device (panel `#F1F5F9` body with hairline, white screen), speaker and home
  bar in the bezel, like the phone frame of the interactive editor. The layout inside is
  computed by the browser with React Native's flex defaults (column, flexShrink 0,
  alignContent flex-start), so what the phone shows is what React Native does.
- Voice: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the
  `elevenlabs` CLI. Property names are written split in the voice text ("flex direction",
  "justify content"); captions restore the code spelling (see `build.py`).
- Captions on; no music bed.
