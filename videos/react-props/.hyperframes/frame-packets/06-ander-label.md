# Frame packet: 06-ander-label

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 6 — Een ander label?

- scene: Request: a badge with label "Uitverkocht". The scherm card shows a dashed empty strip labelled "Uitverkocht". The tempting answer types on: a second component `UitverkochtBadge` that is a near-copy of Badge. On "Liever niet" it gets a coral rough box and is struck through.
- voiceover: "Klaar? Nee. Nu komt de vraag om dezelfde badge te tonen, maar met een ander label: uitverkocht. Maak je dan een nieuwe component? Liever niet. Dan kopieer je opnieuw bijna alles."
- duration: 13.34s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-ander-label.html
- type: pain_point
- persuasion: The plausible wrong answer, rejected
- beat: twist

narrativeRole: Introduces the new requirement and shows why a second component is the wrong reflex.
keyMessage: A new component per label would be copy-paste all over again.

- blueprint: compose
- focal: the duplicated `UitverkochtBadge` component and its coral rough box
- roles: code surface (left, Badge.tsx, 26px/38px, top 170, height 720) with Badge (lines 1–7) and the near-copy (lines 9–15) = foreground subject · scherm card (right) with one green "Nieuw" strip and a dashed outline strip "Uitverkocht" (ink 40%) = supporting · mono note `bijna alles is hetzelfde` = supporting · coral rough box around lines 9–15 + strike line = the one voltage
- sfx: pop @6.2, typing @7.9, whoosh-short @9.6

Compose: 60/40.
Code (Badge.tsx) final:
```
const Badge = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Nieuw
    </div>
  );
}

const UitverkochtBadge = () => {
  return (
    <div style={{ color: 'white', background: 'green' }}>
      Uitverkocht
    </div>
  );
}
```
Scene 1 (0.0–1.9s): kicker `✱ NIEUWE VRAAG`; Badge component (lines 1–7) on screen, scherm card with one green "Nieuw" strip. On "Klaar?" (0.0s) a mono chip `klaar?` appears top of right column; on "Nee." (0.96s) it gets a thin ink strike-through.
Scene 2 (1.9–7.2s): on "vraag" (2.4s) chip disappears; on "ander label" (5.04s / 5.36s) a dashed hairline strip appears in the scherm card under "Nieuw"; on "uitverkocht" (6.2s) the label "Uitverkocht" fades into the dashed strip in ink 40% (pop).
Scene 3 (7.2–9.2s): on "nieuwe component?" (7.92s / 8.16s) lines 9–15 type on fast (~0.014s/char), with `UitverkochtBadge` in amber and `Uitverkocht` on line 12 amber-washed.
Scene 4 (9.2–13.34s): on "Liever niet." (9.2s / 9.6s) a coral rough box draws around lines 9–15 (0.5s) and the block dims to 50%; on "kopieer je opnieuw bijna alles" (10.4s / 11.56s) lines 10–11 and 13–15 get a faint amber wash next to the identical lines 2–3 and 5–7 (showing they are the same), and a mono note `bijna alles is hetzelfde` appears under the scherm card. Hold.
