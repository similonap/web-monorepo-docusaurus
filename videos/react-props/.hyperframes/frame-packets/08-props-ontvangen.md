# Frame packet: 08-props-ontvangen

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 8 — Props ontvangen

- scene: Badge.tsx gets `interface BadgeProps { label: string; }`, the parameter `({ label }: BadgeProps)`, and `{label}` replaces the hard-coded `Nieuw` inside the div. Right: scherm card shows two strips "Nieuw" and "Uitverkocht", then a third "Promo" appears to prove "eender welk label".
- voiceover: "In Badge beschrijf je met een interface welke props je verwacht: label, van het type string. Je haalt label uit de props, en zet het tussen accolades in de div. Nu werkt Badge met eender welk label."
- duration: 13.66s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-props-ontvangen.html
- type: feature_showcase
- persuasion: Anatomy, step by step
- beat: "aha"

narrativeRole: Shows the receiving side: an interface for the props, destructuring, and `{label}` in the JSX.
keyMessage: Describe the props with an interface, destructure `label`, and use `{label}` in the JSX.

- blueprint: compose
- focal: the Badge.tsx code surface
- roles: code surface (left, Badge.tsx, 28px/44px) = foreground subject · scherm card (right) with strips = supporting · a mono chip `props` → `{ label: "Uitverkocht" }` under the scherm card = supporting · coral = a wash on `{label}` inside the div (the fix) = the one voltage
- sfx: typing @1.6, typing @6.4, pop @11.24

Compose: 60/40.
Code (Badge.tsx) final:
```
interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      {label}
    </div>
  );
}
```
Scene 1 (0.0–4.1s): kicker `✱ PROPS ONTVANGEN`; the Badge component from frame 5 is on screen (as lines 5–11, with `Nieuw` on line 8 and `()` as parameter), lines 1–4 empty; scherm card shows one green "Nieuw" strip. On "interface" (1.6s) lines 1 and 3 type on (`interface BadgeProps {` / `}`); on "props je verwacht" (2.72s) `BadgeProps` gets an amber wash.
Scene 2 (4.1–6.2s): on "label" (4.16s) line 2 types `  label` and on "string" (5.44s) `: string;` (dim type colour), amber wash on the line.
Scene 3 (6.2–10.5s): on "haalt label uit de props" (6.4s / 6.72s) the `()` on line 5 retypes as `({ label }: BadgeProps)` (old text fades out, new types on); on "tussen accolades" (8.44s / 8.72s) `Nieuw` on line 8 is replaced by `{label}` (type-on), coral wash on `{label}` at 9.68s ("div"); a mono chip `props: { label: "Uitverkocht" }` lands under the scherm card at 7.64s ("props").
Scene 4 (10.5–13.66s): on "Nu werkt Badge" (10.56s) a second strip "Uitverkocht" (green) slides into the scherm card; on "eender welk label" (11.8s / 12.6s) a third strip "Promo" (green) slides in. Hold.
