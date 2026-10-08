# Frame packet: 13-dubbele-binding

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 13 — value + onChange: dubbele binding

- scene: Add `value={name}` to the input. Then the click on Leegmaken empties the input too. A two-way diagram: input ⇄ state: top arrow "typen → onChange → setName", bottom arrow "state → value → veld". Term card: "controlled component".
- voiceover: "Daarom zet je ook value gelijk aan name. Nu toont het veld altijd wat er in de state zit. Value en onChange samen geven een dubbele binding: typen past de state aan, en de state past het veld aan. Dat noemen we een controlled component."
- duration: 17.72s
- transition_in: crossfade
- status: outline
- src: compositions/frames/13-dubbele-binding.html
- type: feature_showcase
- persuasion: Fix + model + term
- beat: resolution

narrativeRole: Resolves the problem with `value={name}` and names the two-way binding / controlled component.
keyMessage: value + onChange = two-way binding: the input always shows state.

- blueprint: compose
- focal: first the `value={name}` line; second half the two-way loop diagram input ⇄ state
- roles: code surface (left, first half; slides left and narrows in the second half) = foreground · scherm card (input + Leegmaken + p) = supporting · two-way diagram (two nodes `input` and `state` with an upper arrow `onChange` and a lower arrow `value`) = foreground subject in the second half · coral wash on `value={name}` = the one voltage (the fix) · term "controlled component" (EB Garamond italic) = takeaway
- sfx: typing, click, pop

Compose: first half 60/40 as before; second half the diagram takes the right 50% (scherm card shrinks into the `input` node position).
Code (NameInput.tsx, input part):
```
      <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />
```
Scene 1 (0.0–3.0s): kicker `✱ DE OPLOSSING`; code from frame 12 on screen; on "value gelijk aan name" (0.88s / 2.19s) line `value={name}` types on between `<input type="text"` and `onChange`, lines shift down; coral wash on it at 2.2s.
Scene 2 (3.0–6.3s): on "Nu toont het veld altijd" (3.09s) the scherm demo replays: input `Sam`, cursor clicks `Leegmaken` at 3.9s → state chip `""` → at 4.3s the input empties too (text slides out) and the p empties; on "wat er in de state zit" (5.65s) an amber ring on the empty input + mono note `veld = state`.
Scene 3 (6.3–14.5s): on "Value en onChange samen" (6.39s / 7.44s) the two-way diagram builds on the right: node `input` (left) and node `state` (right); on "dubbele binding" (9.24s) both arrows draw: upper arrow `onChange → setName` (input → state) and lower arrow `value={name}` (state → input); on "typen past de state aan" (10.62s) a small amber dot travels the upper arrow; on "de state past het veld aan" (12.67s / 13.68s) it travels the lower arrow back.
Scene 4 (14.5–17.72s): on "controlled component" (15.66s / 16.3s) the term "controlled component" lands in EB Garamond italic under the diagram (y ≈ 760) with a mono label `term` above it. Hold.
