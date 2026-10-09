# Frame packet: 10-type-color

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 10 — Een eigen type: Color

- scene: `type Color = 'red' | 'green' | 'blue';` types on at the top of Badge.tsx and `color: string` becomes `color: Color`. In the mini App.tsx panel, `"banaan"` gets a red-squiggle-style coral underline and an error tooltip: `Type '"banaan"' is not assignable to type 'Color'.`
- voiceover: "We willen enkel red, green en blue toestaan, en dat is het. Daarom maken we een eigen type: Color, met precies die drie waarden. Geef je nu iets anders door, dan geeft TypeScript meteen een fout."
- duration: 13.74s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/10-type-color.html
- type: feature_showcase
- persuasion: Constraint as safety
- beat: resolution

narrativeRole: Restricts the colour prop with a union type so TypeScript catches invalid values.
keyMessage: A union type `'red' | 'green' | 'blue'` only allows those three values.

- blueprint: compose
- focal: the `type Color = 'red' | 'green' | 'blue';` line
- roles: code surface (left, Badge.tsx, 26px/38px since 14 lines) = foreground subject · three mono chips `'red'` `'green'` `'blue'` each with a small swatch dot in the badge colour (right column, top, y ≈ 240) = supporting · mini App.tsx panel with `color="banaan"` + error tooltip (tile card, hairline, mono 20px) = foreground in the last third · coral = the squiggle underline under `"banaan"` = the one voltage · `type Color` line = amber wash
- sfx: pop @0.96, pop @1.72, pop @2.16, typing @5.04, pop @12.56

Compose: 60/40; right column: three chips (y ≈ 240), mini App.tsx panel (y ≈ 420–600), error tooltip under it (y ≈ 620–720). No scherm card in this frame (the type check happens before anything renders).
Code (Badge.tsx) final:
```
type Color = 'red' | 'green' | 'blue';

interface BadgeProps {
  label: string;
  color: Color;
}

const Badge = ({ label, color }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: color }}>
      {label}
    </div>
  );
}
```
Scene 1 (0.0–4.5s): kicker `✱ EEN EIGEN TYPE`; Badge.tsx from frame 9 on screen (starting at line 3, lines 1–2 empty); on "red" (0.96s), "green" (1.72s), "blue" (2.16s) the three chips pop in at the top of the right column; on "dat is het" (3.56s / 3.96s) a thin hairline bracket draws under the three chips.
Scene 2 (4.5–9.3s): on "eigen type" (5.64s / 6.08s) line 1 types `type Color = 'red' | 'green' | 'blue';` (keyword coral, name amber, strings teal) and gets an amber wash; on "Color" (6.64s) `string` on line 5 retypes as `Color`; on "drie waarden" (8.28s / 8.56s) the three strings on line 1 pulse amber one after another (stagger 0.12s).
Scene 3 (9.3–13.74s): on "Geef je nu iets anders door" (9.36s / 10.48s) the mini App.tsx panel settles with `<Badge label="Promo" color="banaan" />`; on "TypeScript" (11.4s) a coral squiggle draws under `"banaan"` (0.4s); on "fout" (12.56s) the error tooltip lands under the panel: `Type '"banaan"' is not assignable to type 'Color'.` (mono, ink on tile, small ✕ marker in ink). Hold.
