# Frame packet: 10-inputveld

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 10 — Tweede voorbeeld: een inputveld

- scene: New component NameInput. Code types `const [name, setName] = useState<string>('');`, the `<input onChange={…} />` (no value yet) and `<p>Je typte: {name}</p>`. Scherm card shows an empty input and an empty p. State chip `name: ""`.
- voiceover: "Tweede voorbeeld: een inputveld, en een p-tag die toont wat je typte. De tekst bewaar je in state, name, met een lege string als begin. Met onChange zet je bij elke toets de nieuwe tekst in de state."
- duration: 14.52s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/10-inputveld.html
- type: setup
- persuasion: New concrete example
- beat: fresh start

narrativeRole: Opens the second example (the course's InputView): an input and a p bound to one piece of state.
keyMessage: Keep the text in state; onChange writes every keystroke into it.

- blueprint: compose
- focal: the code surface typing NameInput
- roles: code surface (left ~58%) = foreground subject · scherm card with input field + p line (right) = supporting · state chip `name: ""` = supporting · coral: none except a small coral `nieuw voorbeeld` kicker spike (calm setup frame)
- sfx: typing

Compose: 60/40 like frames 2–9 (same positions; continuity).
Code (NameInput.tsx):
```
const NameInput = () => {
  const [name, setName] = useState<string>('');

  return (
    <>
      <input type="text"
        onChange={(e) => setName(e.target.value)} />
      <p>Je typte: {name}</p>
    </>
  );
}
```
Scene 1 (0.0–4.4s): kicker `✱ VOORBEELD 2`; on "inputveld" (1.43s) the code surface enters with the shell (lines 1, 4, 5, 9, 10, 11) and the scherm card shows an empty input field (hairline box, label `input`); on "p-tag" (2.68s) line 8 `<p>Je typte: {name}</p>` types on and the scherm card gets the line `Je typte:` (Inter).
Scene 2 (4.4–9.2s): on "in state, name" (6.0s / 6.58s) line 2 types on (`useState<string>('')`); on "lege string" (7.65s) `''` gets an amber wash; state chip `state  name: ""` appears under the scherm card at 8.0s.
Scene 3 (9.2–14.52s): on "onChange" (10.03s) lines 6–7 type on; `onChange={…}` gets an amber wash; on "bij elke toets" (11.26s) a mono note `elke toets → setName(…)` lands under the state chip. Hold.
