# Frame packet: 02-teller

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 2 — De teller-component

- scene: Code surface types the Counter component: a `<button>` with `{count}` inside and an `onClick`. Right: the scherm card shows the rendered button `0`. Under it a mono goal note `doel: klik → +1`.
- voiceover: "We beginnen met een component met één knop. In de knop staat een teller. En telkens je op de knop klikt, moet die teller één omhoog gaan."
- duration: 9.40s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-teller.html
- type: setup
- persuasion: Concrete starting point
- beat: orientation

narrativeRole: Sets the example the next five frames build on: a button showing a counter that should go up on click.
keyMessage: A button that shows a counter and should +1 on every click.

- blueprint: compose
- focal: the code surface typing the Counter shell
- roles: code surface (navy, left ~58%) = foreground subject · scherm card with the rendered button `0` (right) = supporting · amber wash on `onClick` = highlight · coral: none in this frame (calm setup) except the mono goal arrow `+1` in coral
- sfx: typing

Compose: asymmetric 60/40, code left, scherm right (same as react-useeffect frame 2).
Code (Counter.tsx):
```
const Counter = () => {
  const handleClick = () => {
    // teller + 1 ... maar hoe?
  };

  return (
    <button onClick={handleClick}>{count}</button>
  );
}
```
Scene 1 (0.0–2.4s): kicker `✱ HET VOORBEELD`; on "component" (0.78s) the code surface enters (power3.out) with title bar `Counter.tsx`; lines 1 and 9 (shell) in place.
Scene 2 (2.4–4.5s): on "In de knop" (2.45s) lines 6–8 type on (`return ( <button …>{count}</button> );`); on "teller" (3.82s) `{count}` gets an amber wash; right column: label `scherm` + the scherm card fades in with the rendered button showing `0`.
Scene 3 (4.5–9.4s): on "telkens je op de knop klikt" (4.94s) lines 2–4 type on (the empty handleClick with the comment, comment in cream@60%); `onClick={handleClick}` gets an amber wash at 5.8s; on "één omhoog gaan" (7.36s) a mono note `doel: klik → +1` lands under the scherm card with a coral `+1`. Hold.
