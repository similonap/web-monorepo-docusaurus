# Frame packet: 09-vernieuwen

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 9 — Vernieuwen

- scene: The scherm card shows a `Vernieuwen` button above the post list. The code shows a `trigger` state and the dependency array `[trigger]`. The cursor clicks the button; the trigger chip changes, `[trigger]` lights up, a render-tag `effect #2` pulses and the spinner flashes before the list returns.
- voiceover: "En als we een knop willen om te vernieuwen? Hoe laat je een use effect opnieuw lopen? Gewoon door een state in de dependency array te zetten. Bijvoorbeeld trigger. Verandert trigger, dan loopt het effect opnieuw."
- duration: 12.64s
- transition_in: crossfade
- status: outline
- src: compositions/frames/09-vernieuwen.html
- type: feature_showcase
- persuasion: Question, then the mechanism
- beat: new idea

narrativeRole: Shows how to rerun an effect: put a state in its dependency array.
keyMessage: Change a state that is in the dependency array, and the effect runs again.

- blueprint: compose
- focal: `[trigger]` in the dependency array
- roles: code surface (left, App.tsx, 26px/38px, 10 lines) = foreground subject · scherm card (right top) with button `Vernieuwen` + three post rows = supporting · chip `trigger: false` (right column, y ~580) = supporting · render-tag `effect #2` (right column, y ~660) = supporting · oversized cursor = supporting actor · coral = the coral underline under `trigger` inside `}, [trigger]);` (the fix)
- sfx: pop @0.88, typing @6.56, typing @9.04, click-soft @9.92, pop @11.32

Compose: 60/40.
Code (App.tsx, excerpt):
```
const [trigger, setTrigger] = useState<boolean>(false);

useEffect(() => {
  let cancelled: boolean = false;
  const fetchData = async () => { ⋯ }
  fetchData();
  return () => {
    cancelled = true;
  }
}, []);          → becomes  }, [trigger]);
```
Scene 1 (0.0–2.4s): kicker `✱ VERNIEUWEN`; code on screen without line 1 (gap reserved) and with `}, []);`; scherm card shows three post rows; on "knop" (0.88s) the `Vernieuwen` button settles in at the top of the scherm card (pop), pushing the rows down 56px.
Scene 2 (2.4–8.0s): on "use effect opnieuw lopen?" (3.28s / 3.96s) `useEffect` (line 3) gets an amber wash; on "dependency array" (6.56s / 7.2s) the `[]` on line 10 gets the amber wash.
Scene 3 (8.0–12.64s): on "Bijvoorbeeld trigger." (8.24s / 9.04s) `trigger` types into the array (`[trigger]`) with the coral underline, and line 1 types on; chip `trigger: false` pops in the right column; the cursor glides in toward the button. On "Verandert" (9.92s) the cursor clicks the button (dip + ripple, click-soft) and the chip swaps to `trigger: true`; on "trigger," (10.56s) the `[trigger]` pulses; on "loopt het effect opnieuw." (11.32s / 11.68s) render-tag `effect #2` pulses in (pop), the post rows fade to 0 and the spinner appears for 0.6s, then the rows settle back in (stagger 0.06s). Hold.
