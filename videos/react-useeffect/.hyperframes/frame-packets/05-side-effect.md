# Frame packet: 05-side-effect

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 5 — Een side effect

- scene: Headline "setInterval is een side effect." Then the course's Greet example: three lines annotated — `const message = …` → label `output`; `document.title = …` → label `side effect` (coral); `return <div>…` → `output`. Example chips: timer, fetch, document.title. Then "geen controle over hoe vaak React rendert": render tags drop onto a timeline at irregular intervals.
- voiceover: "Het probleem: setInterval is een side effect. Code die niets bijdraagt aan wat je component toont — een timer, een fetch, de titel van je pagina aanpassen. En je hebt geen controle over hoe vaak React rendert."
- duration: 16.4s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/05-side-effect.html
- type: product_intro
- persuasion: Naming + classification
- beat: clarity

narrativeRole: Gives the problem its name (side effect) using the course's own definition and Greet example.
keyMessage: A side effect is code that doesn't contribute to the output — and render count is not yours to control.

- blueprint: compose
- focal: the headline "setInterval is een side effect." (EB Garamond headline) then the annotated Greet code
- roles: headline = foreground subject (top) · Greet code surface (navy, left) with margin labels `output` / `side effect` = foreground · example chips (timer · fetch · document.title) = supporting (right) · render timeline (bottom band, above captions) = supporting · coral label `side effect` on the document.title line = the one voltage
- sfx: key-press

Code (Greet.tsx):
```
const Greet = ({ name }: GreetProps) => {
  const message = `Hello, ${name}!`;
  document.title = `Greetings to ${name}`;
  return <div>{message}</div>;
}
```
Scene 1 (0.0–4.2s): kicker `✱ SIDE EFFECTS`; on "setInterval is een side effect" (1.56s) the headline builds per word in EB Garamond at top (y≈170), "side effect" in italic.
Scene 2 (4.2–7.5s): on "Code die niets bijdraagt" (4.28s) the Greet code surface enters below the headline (left, ~1000px); at 5.2s margin label `output` (ink, mono) appears beside lines 2 and 4; at 6.3s ("toont") line 3 gets the coral label `side effect` + coral left bar.
Scene 3 (7.5–11.4s): right column: chips land one by one on their words — `setInterval` / timer (7.82s), `fetch()` (8.58s), `document.title` (9.22s); tile chips, mono.
Scene 4 (11.4–16.4s): on "geen controle" (12.42s) a hairline timeline draws across the lower band (y≈800); `render` tags drop onto it at irregular deterministic positions (12.8, 13.2, 13.9, 14.1, 14.9, 15.3s) on "hoe vaak React rendert". Hold.
