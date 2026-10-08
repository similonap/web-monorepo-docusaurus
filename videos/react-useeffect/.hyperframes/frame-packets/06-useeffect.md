# Frame packet: 06-useeffect

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 6 — De oplossing: useEffect

- scene: The setInterval code is wrapped in `useEffect(() => { … }, [])`. Right: a render timeline where `render` tags keep landing, an `effect` marker runs only after the first render, and the timers list stays at exactly one chip `timer #1`.
- voiceover: "Daarvoor is er useEffect. Je geeft een functie mee, en React voert die uit ná het renderen — los van de render zelf. Met een lege array als tweede argument: maar één keer. Eén timer, hoe vaak er ook gerenderd wordt."
- duration: 17.36s
- transition_in: push-slide
- status: outline
- src: compositions/frames/06-useeffect.html
- type: feature_showcase
- persuasion: Solution reveal + demonstration
- beat: relief

narrativeRole: Introduces useEffect as the fix and shows the render count no longer matters.
keyMessage: useEffect runs after render; with [] only once → one timer.

- blueprint: compose
- focal: the code surface: setInterval now wrapped in useEffect with `[]`
- roles: code surface (navy, left ~58%) = foreground subject · render timeline + `effect` marker (right, upper) = foreground secondary · timers list with ONE chip (right, lower) = supporting · coral highlight on `[]` = the one voltage
- sfx: typing, pop

Code (Timer.tsx):
```
const Timer = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNumber(number => number + 1);
    }, 1000);
  }, []);

  return <p>{number}</p>;
}
```
Scene 1 (0.0–2.5s): kicker `✱ DE OPLOSSING`; code surface shows the frame-2 code (setInterval block in the body); on "useEffect" (1.14s) the setInterval block indents and the wrapper lines `useEffect(() => {` / `}, []);` type on around it (lines shift down, power3.out); `[]` initially plain.
Scene 2 (2.5–9.6s): right column: label `tijdlijn`; on "React voert die uit" (4.34s) a hairline timeline draws; `render` tag drops at 5.0s; on "ná het renderen" (5.92s) an `effect` marker (amber pill) appears just right of the first render with a small arrow `na`; on "los van de render zelf" (7.44s) a dashed hairline separates render row from effect row.
Scene 3 (9.6–13.6s): on "lege array" (10.12s) `[]` in the code gets the coral wash + coral underline; mono tag `tweede argument` points to it at 11.2s; on "maar één keer" (12.82s) the effect marker gets a mono `1×` badge.
Scene 4 (13.6–17.36s): on "Eén timer" (13.88s) timers list shows `timer #1 · 1000ms` alone; on "hoe vaak er ook gerenderd wordt" (14.74s) four more `render` tags drop onto the timeline (14.8, 15.2, 15.6, 16.0s) while the effect row stays empty and the timers list stays at one chip with mono note `✓ 1 timer`. Hold.
