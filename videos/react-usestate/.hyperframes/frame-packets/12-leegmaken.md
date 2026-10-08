# Frame packet: 12-leegmaken

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 12 — Een knop om leeg te maken

- scene: A `Leegmaken` button is added (code: `<button onClick={() => setName('')}>Leegmaken</button>`). The cursor clicks it: state chip → `""`, p-line → `Je typte:` (empty)… but the input still shows "Sam". Coral rough box around the input with mono note `toont nog "Sam"`.
- voiceover: "Nu voegen we een knop toe die het veld leegmaakt. Die zet de state op een lege string. De p-tag wordt leeg… maar in het inputveld staat je tekst er nog. Het veld weet niets van je state."
- duration: 13.40s
- transition_in: push-slide
- status: outline
- src: compositions/frames/12-leegmaken.html
- type: pain_point
- persuasion: Demonstrated mismatch
- beat: puzzle

narrativeRole: Exposes the one-way binding: state can change without the input following.
keyMessage: Clearing state empties the p but not the input: the input does not read state yet.

- blueprint: compose
- focal: the input field still showing "Sam" while state is ""
- roles: code surface (left) = foreground · scherm card with input, p and the new `Leegmaken` button (right) = foreground subject · state chip = supporting · coral rough box around the input + mono `toont nog "Sam"` = the one voltage
- sfx: click

Compose: 60/40 as before.
Code (NameInput.tsx, the return part):
```
  return (
    <>
      <input type="text"
        onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName('')}>
        Leegmaken
      </button>
      <p>Je typte: {name}</p>
    </>
  );
```
Scene 1 (0.0–2.8s): kicker `✱ EN NU?`; scherm card shows input `Sam`, p `Je typte: Sam`, state chip `name: "Sam"` (continuity); on "knop toe" (0.83s / 1.1s) the button lines type on in the code and a `Leegmaken` button settles into the scherm card between input and p.
Scene 2 (2.8–5.7s): on "zet de state op een lege string" (3.52s / 4.86s) `setName('')` gets an amber wash; the cursor glides to `Leegmaken` and clicks on 5.2s (dip + ripple); state chip flips to `name: ""` at 5.4s and render tag pulses.
Scene 3 (5.7–9.9s): on "De p-tag wordt leeg" (6.48s / 7.09s) the p text after `Je typte:` slides out; on "maar in het inputveld" (8.55s) the input still shows `Sam`; on "staat je tekst er nog" (9.16s / 9.9s) a coral rough box draws around the input (svg path draw 0.5s) with the mono note `toont nog "Sam"`.
Scene 4 (9.9–13.4s): on "Het veld weet niets van je state" (10.52s / 12.31s) a dashed hairline from the state chip toward the input stops halfway with a small mono `✕` in coral-free ink. Hold.
