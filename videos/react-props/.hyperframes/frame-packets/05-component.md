# Frame packet: 05-component

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 5 — Maak er een component van

- scene: The div moves into its own component `Badge` (left code surface, Badge.tsx). The mini App.tsx panel shows `<Badge />` three times. The scherm card still shows the same three green strips.
- voiceover: "Dus maken we er een component van: Badge. De div staat nu op één plek. In App gebruik je gewoon drie keer Badge, en je scherm blijft hetzelfde."
- duration: 9.9s
- transition_in: push-slide
- status: outline
- src: compositions/frames/05-component.html
- type: feature_showcase
- persuasion: The fix
- beat: relief

narrativeRole: Applies DRY: one Badge component, used three times.
keyMessage: Put the div in a component once, then use `<Badge />` as often as you like.

- blueprint: compose
- focal: the Badge component on the left code surface
- roles: code surface (left, Badge.tsx, 28px/44px) = foreground subject · mini App.tsx panel (right column under the scherm card) = supporting · scherm card with three green strips = supporting (unchanged) · coral = a wash on the component name `Badge` on line 1 (the fix) = the one voltage
- sfx: typing @0.5, pop @5.48

Compose: 60/40; right column: scherm card (y 232–540) + mini App.tsx panel (y ~580–860).
Code (Badge.tsx):
```
const Badge = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Nieuw
    </div>
  );
}
```
Mini App.tsx:
```
<>
  <Badge />
  <Badge />
  <Badge />
</>
```
Scene 1 (0.0–3.0s): kicker `✱ EEN COMPONENT`; scherm card with three green strips is visible from 0.2s (continuity with frame 4); on "component" (1.32s) the code surface enters with title bar `Badge.tsx` and lines 1–7 type on fast (~0.018s/char); on "Badge" (2.24s) the name `Badge` on line 1 gets the coral wash.
Scene 2 (3.0–5.2s): on "één plek" (4.28s / 4.48s) lines 3–5 get an amber wash and a mono tag `1×` appears at the right edge of line 3.
Scene 3 (5.2–9.9s): on "In App" (5.2s / 5.48s) the mini App.tsx panel settles under the scherm card; on "drie keer Badge" (6.52s / 6.96s) its three `<Badge />` lines type on (stagger) with a small pop; on "scherm blijft hetzelfde" (8.0s / 8.56s) the three strips in the scherm card pulse once with a thin amber ring (stagger 0.1s) and a mono note `zelfde resultaat` appears under the scherm label. Hold.
