# Frame packet: 03-gewone-variabele

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 3 — Een gewone variabele werkt niet

- scene: The code gets `let count = 0;` and `count = count + 1;` in the handler. The cursor clicks the button in the scherm card. A small `geheugen` readout beside the code shows `count = 1`, but the scherm card keeps showing `0`. Coral FOUT-style mismatch: `scherm: 0` vs `count: 1`.
- voiceover: "We moeten die waarde dus ergens bijhouden, en kunnen aanpassen. Met een gewone variabele lukt dat niet. Je klikt, de variabele wordt één… maar op je scherm blijft de teller gewoon op nul staan."
- duration: 12.12s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-gewone-variabele.html
- type: pain_point
- persuasion: The plausible wrong attempt, demonstrated
- beat: letdown

narrativeRole: Shows why a plain variable is not enough: the value changes but the screen does not (the course's "DEZE CODE IS FOUT" attempt).
keyMessage: Changing a plain variable does not update the screen.

- blueprint: compose
- focal: the mismatch between the variable's value (1) and the screen (0)
- roles: code surface (left) = foreground · scherm card with button `0` (right) = foreground subject in the second half · mono readout `count = 1` (small tile chip labelled `variabele`, under the scherm card) = supporting · coral rough box around the scherm button + coral `≠` between chip and card = the one voltage
- sfx: click

Compose: same 60/40 layout as frame 2 (continuity).
Code (Counter.tsx):
```
const Counter = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
  };

  return (
    <button onClick={handleClick}>{count}</button>
  );
}
```
Scene 1 (0.0–3.3s): kicker `✱ ZO NIET`; code from frame 2 is on screen; on "bijhouden" (1.44s) line 2 `let count = 0;` types on (lines below shift down, power3.out); on "aanpassen" (2.62s) line 5 `count = count + 1;` replaces the comment (type-on).
Scene 2 (3.3–6.0s): on "gewone variabele" (3.98s) `let count = 0;` gets an amber wash and a small mono tag `gewone variabele` at its right edge.
Scene 3 (6.0–8.8s): on "klikt" (6.36s) the cursor clicks the scherm button (dip + ripple); on "de variabele wordt één" (7.17s) a chip `variabele  count = 1` appears under the scherm card, its value stepping 0→1 at 8.0s.
Scene 4 (8.8–12.12s): on "maar op je scherm" (8.83s) the scherm button gets a coral rough box (svg path draw 0.5s); on "nul staan" (10.72s) a coral `≠` sits between the chip and the button and a mono note `scherm toont nog 0` appears. The button visibly stays `0`. Hold.
