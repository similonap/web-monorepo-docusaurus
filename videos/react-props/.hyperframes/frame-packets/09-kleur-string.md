# Frame packet: 09-kleur-string

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 9 — Een kleur als string

- scene: A second prop `color: string` is added; the div uses `background: color`. The mini App.tsx panel shows `<Badge label="Promo" color="banaan" />`. The scherm card's Promo strip has no background at all: white text barely visible on the tile. Coral on `"banaan"`.
- voiceover: "Volgende vraag: ook een andere kleur. Eenvoudig, we voegen een tweede prop toe: color. Je zou er een string van kunnen maken. Maar een string is te open: niets houdt je tegen om banaan door te geven."
- duration: 13.82s
- transition_in: crossfade
- status: outline
- src: compositions/frames/09-kleur-string.html
- type: pain_point
- persuasion: The easy answer that is too loose
- beat: wry

narrativeRole: Adds the colour prop and shows why `string` is too open.
keyMessage: A `string` accepts anything, also nonsense like `"banaan"`.

- blueprint: compose
- focal: the scherm card's broken (invisible) badge next to `color="banaan"`
- roles: code surface (left, Badge.tsx, 28px/44px) = foreground subject in the first half · mini App.tsx panel (right column, under the scherm card) = foreground in the second half · scherm card = supporting · coral = a wash + underline on `"banaan"` in the mini panel = the one voltage
- sfx: typing @3.84, typing @11.12, pop @11.68

Compose: 60/40; right column: scherm card + mini App.tsx panel.
Code (Badge.tsx) final:
```
interface BadgeProps {
  label: string;
  color: string;
}

const Badge = ({ label, color }: BadgeProps) => {
  return (
    <div style={{ color: 'white', background: color }}>
      {label}
    </div>
  );
}
```
Mini App.tsx (final):
```
<Badge label="Nieuw" color="green" />
<Badge label="Promo" color="banaan" />
```
Scene 1 (0.0–2.7s): kicker `✱ EEN KLEUR`; Badge.tsx from frame 8 on screen (label only, 11 lines); scherm card with one green "Nieuw" strip. On "andere kleur" (1.68s / 1.92s) the strip's fill gets a thin amber ring.
Scene 2 (2.7–6.3s): on "tweede prop" (4.32s / 4.64s) a new line 3 opens (lines below shift down, power3.out) and types `  color`; on "color." (5.52s) `{ label }` on line 6 retypes as `{ label, color }` and `'green'` on line 8 retypes as `color` (amber wash on both).
Scene 3 (6.3–8.3s): on "string" (6.96s) `: string;` types after `color` on line 3, amber wash.
Scene 4 (8.3–13.82s): on "te open" (9.52s / 9.76s) the mini App.tsx panel settles under the scherm card with line 1 `<Badge label="Nieuw" color="green" />`; on "niets houdt je tegen" (10.52s) line 2 types `<Badge label="Promo" color="banaan" />` (starting 11.12s); on "banaan" (11.68s) `"banaan"` gets the coral wash + underline and a second strip appears in the scherm card: "Promo" with NO background (white text on tile, nearly invisible) plus a mono note `geen geldige kleur` (ink 60%) beside it at 12.56s. Hold.
