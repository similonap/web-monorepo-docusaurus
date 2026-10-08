# Frame packet: 09-callback

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 9 — De callback-vorm

- scene: The two lines are rewritten to `setCount(prevCount => prevCount + 1);`. React's queue on the right now chains: `0 → 1`, `1 → 2`. The scherm button goes 0 → 2 on click. Rule card at the end: "nieuwe state hangt af van de vorige → callback".
- voiceover: "De oplossing: geef een functie mee aan setCount. React geeft je dan de meest recente waarde, prevCount, en jij geeft de nieuwe terug. Zo bouwt de tweede update verder op de eerste: nul, één, twee. Hangt je nieuwe state af van de vorige? Gebruik dan altijd een callback."
- duration: 20.04s
- transition_in: push-slide
- status: outline
- src: compositions/frames/09-callback.html
- type: feature_showcase
- persuasion: Fix + demonstration + rule
- beat: relief

narrativeRole: Gives the fix from the course (`setCount(prevCount => prevCount + 1)`) and shows it chaining.
keyMessage: Pass a function: React feeds it the latest value, so updates build on each other.

- blueprint: compose
- focal: the code surface with the two callback lines
- roles: code surface (left ~58%) = foreground subject · update chain on the right: two hairline tile steps `0 → 1` and `1 → 2` joined by an arrow = foreground secondary · scherm card (right, lower) with button = supporting · rule line (Inter, bottom-left above captions) = takeaway · coral wash on `prevCount => prevCount + 1` = the one voltage (the fix)
- sfx: typing, click, pop

Compose: 60/40; right column split: chain (upper), scherm (lower).
Code (Counter.tsx):
```
const handleClick = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};
```
Scene 1 (0.0–3.2s): kicker `✱ DE OPLOSSING`; the handler from frame 7 (`setCount(count + 1);` ×2) is on screen; on "geef een functie mee" (0.85s) the arguments `count + 1` delete back (caret, reverse type) and `prevCount => prevCount + 1` types on in both lines (line 2 at 1.0s, line 3 at 1.9s); coral wash on both arrows at 2.6s.
Scene 2 (3.2–8.6s): on "React geeft je dan de meest recente waarde" (3.27s) the right column shows label `React` and step 1 chip `prevCount = 0`; on "prevCount" (5.47s) `prevCount` in the code gets an amber wash; on "de nieuwe terug" (7.47s) step 1 resolves to `0 → 1`.
Scene 3 (8.6–13.8s): on "tweede update verder op de eerste" (9.4s / 10.7s) step 2 chip appears below with an arrow from step 1's result: `prevCount = 1` → `1 → 2`; on "nul, één, twee" (11.6s, 12.4s, 13.0s) the three numbers 0, 1, 2 light amber in sequence across the chain; the cursor clicks the scherm button at 12.2s and the numeral steps 0 → 2 (via 1, 0.2s each) landing on 13.0s.
Scene 4 (13.8–20.04s): on "Hangt je nieuwe state af van de vorige?" (13.81s) a rule line in Inter fades in bottom-left (y ≈ 820): `nieuwe state hangt af van de vorige?`; on "callback" (18.63s) it completes with `→ setX(prev => …)` in mono. Hold.
