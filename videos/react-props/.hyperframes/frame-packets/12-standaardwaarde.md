# Frame packet: 12-standaardwaarde

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 12 — Een standaardwaarde

- scene: `color` becomes optional (`color?: Color;`) and gets a default in the destructuring: `({ label, color = 'green' }: BadgeProps)`. Mini App.tsx: `<Badge label="Nieuw" />` without colour → the scherm strip is green.
- voiceover: "En als je helemaal geen kleur opgeeft? Dan wil je dat de badge gewoon groen is. Maak color optioneel met een vraagteken, en geef een standaardwaarde mee: green. Laat je color weg, dan wordt je badge groen."
- duration: 13.98s
- transition_in: crossfade
- status: outline
- src: compositions/frames/12-standaardwaarde.html
- type: feature_showcase
- persuasion: Convenience
- beat: practical

narrativeRole: Shows optional props with a default value.
keyMessage: Mark a prop optional with `?` and give it a default in the destructuring.

- blueprint: compose
- focal: `color = 'green'` in the parameter list
- roles: code surface (left, Badge.tsx, 26px/38px, 14 lines) = foreground subject · scherm card + mini App.tsx panel (right column) = supporting · coral = a wash on `= 'green'` (the fix) = the one voltage · `?` = amber wash
- sfx: typing @0.68, key-press @6.853, typing @8.56, pop @12.8

Compose: 60/40; right column: scherm card (y 232–440, one strip) + mini App.tsx panel (y ~480–620).
Code (Badge.tsx) final:
```
type Color = 'red' | 'green' | 'blue';

interface BadgeProps {
  label: string;
  color?: Color;
}

const Badge = ({ label, color = 'green' }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: color }}>
      {label}
    </div>
  );
}
```
Scene 1 (0.0–2.6s): kicker `✱ STANDAARDWAARDE`; Badge.tsx from frame 10 on screen (with `color: Color`); on "geen kleur opgeeft" (1.16s / 1.68s) the mini App.tsx panel settles with `<Badge label="Nieuw" />` and the scherm card shows a strip "Nieuw" with no background (white on tile) + mono note `color: undefined` (ink 60%).
Scene 2 (2.6–5.1s): on "gewoon groen" (3.68s / 4.08s) a dashed green outline appears around that strip (the wish).
Scene 3 (5.1–7.8s): on "color optioneel" (5.44s / 5.92s) `color` on line 5 gets an amber wash; on "vraagteken" (6.853s) a `?` types in after `color` (key-press), amber wash on the `?`; a small mono tag `optioneel` at the line's right edge.
Scene 4 (7.8–10.6s): on "standaardwaarde" (8.56s) ` = 'green'` types in after `color` on line 8 (the parameter list), coral wash on it at "green." (9.84s).
Scene 5 (10.6–13.98s): on "Laat je color weg" (10.64s / 11.44s) the `<Badge label="Nieuw" />` line in the mini panel gets an amber wash (no color attribute); on "groen" (12.8s) the strip in the scherm card fills green (fill fades in 0.4s), the dashed outline and `color: undefined` note fade out, and a mono note `color: 'green'` replaces it. Hold.
