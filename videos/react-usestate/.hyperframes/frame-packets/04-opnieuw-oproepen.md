# Frame packet: 04-opnieuw-oproepen

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 4 — De functie opnieuw oproepen

- scene: The component is drawn as a function machine: `Counter()` → returns JSX → screen. On "Verandert de waarde" two places on the screen show the count (the button and a `<p>Je klikte 0 keer</p>`). On "opnieuw oproepen, met de nieuwe waarde" the machine runs again: `Counter()` call #2 with value 1 → both places update to 1.
- voiceover: "Wat je op je scherm ziet, is wat je component-functie teruggeeft. Verandert de waarde, dan moet alles wat die waarde toont mee veranderen. React moet je functie dus opnieuw oproepen, met de nieuwe waarde."
- duration: 12.20s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/04-opnieuw-oproepen.html
- type: product_intro
- persuasion: Mental model made visible
- beat: insight

narrativeRole: Builds the mental model: the screen is the function's return value, so new values need a new call.
keyMessage: To show a new value, React must call your component function again.

- blueprint: compose
- focal: the function-call pipeline `Counter()` → JSX → scherm
- roles: pipeline of three hairline tile nodes left→right (mono `Counter()` · mono JSX snippet `<button>{count}</button>` · the scherm card) joined by drawn arrows = foreground subject · two value spots on the scherm card (button + p) = supporting · amber = the value flowing through · coral = the call counter `oproep #2` badge (the one voltage: "again")
- sfx: whoosh-short

Compose: horizontal pipeline across the upper 2/3, centred vertically ~y 420.
Scene 1 (0.0–3.3s): kicker `✱ HOE REACT TEKENT`; on "op je scherm ziet" (0.52s) the scherm card (right) settles with the button `0`; on "component-functie" (1.65s) node 1 `Counter()` settles left; on "teruggeeft" (2.45s) arrow draws to node 2 (JSX snippet) and arrow 2 to the scherm card; a small amber dot `0` travels along the arrows (1.0s).
Scene 2 (3.3–7.6s): on "Verandert de waarde" (3.38s) node 1 shows a mono argument line `count: 0 → 1?`; on "alles wat die waarde toont" (5.33s) a `<p>Je klikte 0 keer</p>` line appears in the scherm card under the button, and both value spots get a thin amber ring (stagger 0.15s) on "toont" (6.24s).
Scene 3 (7.6–12.2s): on "React moet je functie" (7.67s) node 1 pulses and a coral badge `oproep #2` attaches to it; on "opnieuw oproepen" (9.33s) the amber dot, now `1`, travels the pipeline again; on "nieuwe waarde" (10.69s) both spots on the scherm card flip 0→1 together (slide up/in, 0.25s). Hold.
