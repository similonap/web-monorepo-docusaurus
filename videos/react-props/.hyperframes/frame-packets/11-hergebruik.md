# Frame packet: 11-hergebruik

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 11 — Eén component, allerlei badges

- scene: App.tsx with three Badge usages with label and colour; the scherm card shows three strips: Nieuw (green), Uitverkocht (red), Promo (blue).
- voiceover: "Nu kan je met één Badge-component allerlei badges maken: nieuw in het groen, uitverkocht in het rood, en promo in het blauw."
- duration: 8.7s
- transition_in: push-slide
- status: outline
- src: compositions/frames/11-hergebruik.html
- type: feature_showcase
- persuasion: Payoff
- beat: satisfaction

narrativeRole: Payoff: the same component produces different badges.
keyMessage: One Badge, any label, any allowed colour.

- blueprint: compose
- focal: the scherm card filling with three coloured strips
- roles: code surface (left, App.tsx, 28px/44px) = foreground · scherm card (right; may grow taller to y ≈ 600 for three strips) = foreground subject · coral = a small coral ✱ next to the single word `Badge` in a mono note `1 component · 3 badges` under the scherm card = the one voltage
- sfx: typing @3.6, typing @4.96, typing @6.72, pop @7.52

Compose: 60/40.
Code (App.tsx):
```
const App = () => {
  return (
    <>
      <Badge label="Nieuw" color="green" />
      <Badge label="Uitverkocht" color="red" />
      <Badge label="Promo" color="blue" />
    </>
  );
}
```
Scene 1 (0.0–3.5s): kicker `✱ HERGEBRUIK`; code surface with lines 1–3 and 7–9; empty scherm card. On "Badge-component" (0.96s) the mono note `1 component` appears under the scherm card.
Scene 2 (3.5–8.7s): on "nieuw in het groen" (3.6s / 4.16s) line 4 types on and the green "Nieuw" strip slides into the scherm card at 4.16s; on "uitverkocht in het rood" (4.96s / 5.84s) line 5 + red strip at 5.84s; on "promo in het blauw" (6.72s / 7.52s) line 6 + blue strip at 7.52s; at 7.52s the note completes to `1 component · 3 badges` with the coral ✱ (pop). Hold.
