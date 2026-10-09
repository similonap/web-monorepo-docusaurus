# Frame packet: 07-props

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 7 — Props

- scene: The hero word "props" lands. App.tsx shows two Badge usages with a `label` attribute: `<Badge label="Nieuw" />` and `<Badge label="Uitverkocht" />`. A comparison under the scherm card: HTML attribute `<img src="logo.png" />` next to `<Badge label="Nieuw" />`.
- voiceover: "We willen de Badge die we al hebben hergebruiken. React heeft daar een oplossing voor: props. Je geeft het label door aan de component, net zoals een attribuut in HTML."
- duration: 11.26s
- transition_in: push-slide
- status: outline
- src: compositions/frames/07-props.html
- type: product_intro
- persuasion: Naming the concept
- beat: clarity

narrativeRole: Names the solution, props, and shows how they are passed: like HTML attributes.
keyMessage: You pass data to a component as props, written like HTML attributes.

- blueprint: compose
- focal: the `label="…"` attributes on the Badge usages
- roles: hero word "props" (EB Garamond italic ~150px, right column top, x 1236 y ≈ 220) = statement · code surface (left, App.tsx, 28px/44px) = foreground subject · HTML comparison card (right column, y ≈ 520–760: tile card with two mono lines `<img src="logo.png" />` and `<Badge label="Nieuw" />`, the attribute names `src` and `label` aligned and amber-washed) = supporting · coral = a wash on `label="Uitverkocht"` (the prop doing the work) = the one voltage
- sfx: pop @5.36, typing @6.28

Compose: 60/40.
Code (App.tsx):
```
const App = () => {
  return (
    <>
      <Badge label="Nieuw" />
      <Badge label="Uitverkocht" />
    </>
  );
}
```
Scene 1 (0.0–3.0s): kicker `✱ PROPS`; on "Badge" (0.72s) the code surface enters with lines 1–3 and 6–8, and two lines `<Badge />` `<Badge />` (lines 4–5, no attributes yet); on "hergebruiken" (1.76s) both `Badge` names get an amber wash.
Scene 2 (3.0–6.1s): on "oplossing" (4.0s) washes clear; on "props." (5.36s) the hero word "props" lands top of the right column (y 30→0, 0.5s, power3.out).
Scene 3 (6.1–8.5s): on "geeft het label door" (6.28s / 6.64s) ` label="Nieuw"` types into line 4, then ` label="Uitverkocht"` into line 5 (teal strings); `label="Uitverkocht"` gets the coral wash at 7.84s ("component").
Scene 4 (8.5–11.26s): on "attribuut" (9.2s) the comparison card settles under the hero word with `<img src="logo.png" />`; on "HTML" (9.84s) the second line `<Badge label="Nieuw" />` lands beneath it, `src` and `label` both amber-washed and aligned. Hold.
