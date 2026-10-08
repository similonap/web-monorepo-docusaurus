# Frame packet: 06-renderen

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 6 — Opnieuw renderen

- scene: The Counter code now uses useState and `onClick={() => setCount(count + 1)}`. A render cycle on the right: click → `setCount(1)` → React stores state `count: 1` → `Counter()` runs again (render #2) → useState returns 1 → button shows 1. The word "renderen" is the hero beat.
- voiceover: "Klik je op de knop, dan roep je setCount op, met count plus één. React onthoudt de nieuwe waarde, en roept je functie opnieuw op. Dat noemen we opnieuw renderen. Deze keer geeft useState één terug, en je knop toont één."
- duration: 18.20s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-renderen.html
- type: feature_showcase
- persuasion: Causal chain, step by step
- beat: "aha"

narrativeRole: Walks one click through the whole cycle and gives it its name: re-rendering.
keyMessage: setCount stores the new value and React re-renders: the function runs again and useState returns the new value.

- blueprint: compose
- focal: the code surface with the line-by-line flow + the scherm card and state chip on the right
- roles: code surface (left ~58%) = foreground subject · scherm card with button + state chip `count: 0` + render tag (right column) = foreground secondary · amber line highlight = the "now executing" pointer · coral = the word tag `render #2` (the one voltage: the re-render)
- sfx: click, pop

Compose: 60/40 code left, scherm + state chip right (continuity with frames 2–3).
Code (Counter.tsx):
```
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```
Scene 1 (0.0–4.9s): kicker `✱ RENDEREN`; code on screen; right: scherm card with button `0`, state chip `state  count: 0`, render tag `render #1` dim on the card edge. On "Klik" (0.0s) cursor glides to the scherm button and clicks on "knop" (0.59s); on "setCount" (1.94s) `setCount(count + 1)` gets an amber wash; on "count plus één" (3.37s) a mono floating label `0 + 1 = 1` appears above the code line.
Scene 2 (4.9–9.8s): on "React onthoudt de nieuwe waarde" (5.31s / 7.18s) the state chip value flips `0 → 1` (pulse); on "roept je functie opnieuw op" (8.05s) the amber line highlight scans the component top to bottom (0.18s per line, from line 1).
Scene 3 (9.8–12.5s): on "Dat noemen we opnieuw renderen" (9.9s / 11.45s) the render tag flips to coral `render #2` and pulses; a large EB Garamond word "renderen" fades in over the lower right (x ≈ 1200, y ≈ 760, size ~90px) on 11.45s.
Scene 4 (12.5–18.2s): on "useState" (14.16s) the amber highlight sits on line 2 and a mono tag `→ 1` appears to the right of `useState<number>(0)`; on "je knop toont één" (16.27s / 17.12s) the scherm button numeral flips 0→1. Hold.
