# Frame packet: 10-data-ophalen

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 10 — Data ophalen

- scene: The course's API example: useEffect with an inner `async` fetchFunction and `[]`. A ghost line `useEffect(async () => …)` gets struck through with a coral ✕. Right: an API card `worldtimeapi.org` returns JSON that drops into a small rendered list.
- voiceover: "Je gebruikt useEffect ook om data op te halen uit een API — één keer, met een lege array. Let op: de callback zelf mag niet async zijn. Dus maak je binnenin een async functie, en roep je die meteen op."
- duration: 17.16s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/10-data-ophalen.html
- type: feature_showcase
- persuasion: Practical recipe + common mistake
- beat: application

narrativeRole: The most common real-world use of useEffect from the course: fetching from an API once.
keyMessage: Fetch in an effect with []; the callback itself can't be async — wrap an async function inside.

- blueprint: compose
- focal: the code surface with the fetch effect
- roles: code surface (navy, left ~58%) = foreground subject · API card (tile, mono URL `GET /api/timezone/Europe/Brussels`) + JSON response + rendered `<ul>` (right) = supporting · ghost wrong line with coral ✕ = the one voltage
- sfx: whoosh-short

Code (App.tsx):
```
useEffect(() => {
  const fetchFunction = async () => {
    let result = await fetch("https://worldtimeapi.org/…");
    let json: TimezoneInfo = await result.json();
    setTimezoneInfo(json);
  };
  fetchFunction();
}, []);
```
Scene 1 (0.0–4.4s): kicker `✱ IN DE PRAKTIJK`; on "useEffect" (0.8s) code surface enters with `useEffect(() => {` and `}, []);`; on "data op te halen uit een API" (2.32s) right column API card fades in: `GET worldtimeapi.org/api/timezone/Europe/Brussels`.
Scene 2 (4.4–7.2s): on "één keer, met een lege array" (4.66s / 5.94s) `[]` gets an amber wash and a mono tag `1× bij mount`.
Scene 3 (7.2–11.3s): on "Let op" (7.38s) a ghost line above the panel `useEffect(async () => { … })` appears in dimmed mono; on "niet async" (9.84s) it is struck through in coral with a coral ✕ (the one voltage).
Scene 4 (11.3–17.16s): on "binnenin een async functie" (12.5s) lines 2–6 type on (caret, ~0.02s/char) with `async` amber-washed; on "roep je die meteen op" (14.64s) line 7 `fetchFunction();` types on; at 15.6s the API card emits a JSON snippet (`{ "timezone": "Europe/Brussels", "datetime": "…" }`) that slides down into a small rendered list card `TimeZone: Europe/Brussels`. Hold.
