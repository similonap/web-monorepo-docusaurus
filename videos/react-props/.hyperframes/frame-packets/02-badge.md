# Frame packet: 02-badge

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 2 — Een eenvoudige badge

- scene: App.tsx types the App component returning one `div` with an inline style (white text, green background) and the label `Nieuw`. Right: the scherm card shows one green strip with "Nieuw".
- voiceover: "We beginnen met een eenvoudige badge. Gewoon een div, met een tekstkleur, een achtergrondkleur en een label: nieuw. Die zetten we rechtstreeks in onze App-component."
- duration: 11.1s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-badge.html
- type: setup
- persuasion: Concrete starting point
- beat: orientation

narrativeRole: Sets up the example: a badge is just a styled div, written straight into App.
keyMessage: A badge is a div with a text colour, a background colour and a label.

- blueprint: compose
- focal: the code surface typing the badge div
- roles: code surface (left, App.tsx, 28px/44px) = foreground subject · scherm card with one green strip "Nieuw" = supporting · amber washes on `color: 'white'`, `background: 'green'`, `Nieuw` as they are named · coral: none (calm setup) except the kicker spike
- sfx: typing @2.4, pop @6.96

Compose: 60/40, code left, scherm right (same as react-usestate frame 2).
Code (App.tsx):
```
const App = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Nieuw
    </div>
  );
}
```
Scene 1 (0.0–2.4s): kicker `✱ HET VOORBEELD`; on "badge" (1.6s) the code surface enters (power3.out) with title bar `App.tsx`, lines 1–2 and 6–7 already in place.
Scene 2 (2.4–7.7s): on "div" (3.12s) line 3 types on up to `<div style={{ ` and line 5 `</div>`; on "tekstkleur" (3.92s) `color: 'white',` types on and gets an amber wash; on "achtergrondkleur" (4.88s) ` background: 'green' }}>` types on, amber wash moves to it; on "label: nieuw" (6.36s / 6.96s) line 4 `Nieuw` types on (amber wash), and at 6.96s the scherm label + card fade in with one green strip "Nieuw" (pop).
Scene 3 (7.7–11.1s): on "rechtstreeks in onze App-component" (8.44s / 9.36s) washes clear and the component name `App` on line 1 gets an amber wash; a small mono tag `in App` appears at the right edge of line 1. Hold.
