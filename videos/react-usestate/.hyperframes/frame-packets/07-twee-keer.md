# Frame packet: 07-twee-keer

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 7 — Twee keer setCount

- scene: The onClick handler now calls `setCount(count + 1);` twice. Expectation card: `verwacht: +2`. Cursor clicks: button goes 0 → 1, not 2. Coral stamp `+1` on the result vs crossed-out `+2`.
- voiceover: "Wat als je twee keer setCount oproept, met count plus één? Je verwacht dat de teller per twee omhoog gaat. Maar je klikt… en hij gaat maar per één."
- duration: 9.88s
- transition_in: push-slide
- status: outline
- src: compositions/frames/07-twee-keer.html
- type: pain_point
- persuasion: Expectation vs reality
- beat: surprise

narrativeRole: Sets up the classic stale-state trap from the course ("setState met callback").
keyMessage: Two `setCount(count + 1)` calls still add only 1.

- blueprint: compose
- focal: the scherm button result (1) against the expectation (2)
- roles: code surface (left) with the two setCount lines = foreground · expectation chip `verwacht: 2` (right, above scherm) = supporting · scherm button = foreground subject in the second half · coral: the result tag `werkelijk: 1` + strike-through on `verwacht: 2` = the one voltage
- sfx: click

Compose: 60/40 as before.
Code (Counter.tsx):
```
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```
Scene 1 (0.0–3.9s): kicker `✱ OPGELET`; code enters with lines 1–4, 7–9 in place; on "twee keer setCount" (0.53s / 1.02s) line 5 types on, then line 6 types on (0.4s each); on "count plus één" (2.39s) both lines get an amber wash.
Scene 2 (3.9–6.4s): right: scherm card with button `0` already visible from 0.3s; on "Je verwacht" (4.05s) an expectation chip `verwacht: 2` lands above the card; on "per twee" (5.06s) it pulses.
Scene 3 (6.4–9.88s): on "klikt" (6.98s) the cursor clicks the scherm button (dip + ripple); at 7.7s the numeral flips 0→1; on "maar per één" (8.19s) a coral strike-through draws over `verwacht: 2` and a coral chip `werkelijk: 1` lands next to the button (scale 1.15→1). Hold.
