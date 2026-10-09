# Frame packet: 08-cancelled

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 8 — Cancelled

- scene: An aside card names `AbortController` ("in de praktijk"), then we pick a boolean. `let cancelled: boolean = false;` types on, the cleanup `return () => { cancelled = true; }` fills the dashed slot, and `if (cancelled) return;` guards `setPosts`. A mini timeline shows the old fetch now stopped.
- voiceover: "We hebben dus een manier nodig om te annuleren. In de praktijk gebruik je daarvoor een abort controller. Maar om het eenvoudig te houden, nemen we een boolean: cancelled. In de cleanup functie zetten we cancelled op true. En na de fetch kijken we eerst: is cancelled true? Dan stoppen we, en passen we de state niet meer aan."
- duration: 19.92s
- transition_in: push-slide
- status: outline
- src: compositions/frames/08-cancelled.html
- type: feature_showcase
- persuasion: The simplest mechanism that works
- beat: relief

narrativeRole: Adds the cancelled flag: set in cleanup, checked before setting state.
keyMessage: Cleanup sets cancelled = true; after the fetch, `if (cancelled) return;`.

- blueprint: compose
- focal: the code surface with the three cancelled lines
- roles: code surface (left, App.tsx, 24px/35px) = foreground subject · aside tile card (right column top, x 1236, y 232, w 604, h ~150): mono label `in de praktijk`, Inter 28px `AbortController`, dims to 45% after the choice = supporting · chip `cancelled: false` → `true` (right column, y ~440) = supporting · mini timeline (right column, y 560–820): lane `fetch #1` with an end marker that is stopped by a hairline barrier labelled `if (cancelled) return;` and the late `setPosts(…)` chip struck through and dimmed to 35% = supporting · coral = the coral underline under `if (cancelled) return;` in the code (the fix)
- sfx: pop @4.92, typing @8.48, typing @10.56, pop @12.64, typing @13.92, whoosh-short @17.36

Compose: 60/40.
Code (App.tsx, excerpt, final state):
```
useEffect(() => {
  let cancelled: boolean = false;
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      ⋯
      const result: Post[] = await response.json();
      if (cancelled) return;
      setPosts(result);
    } catch (err) { ⋯ } finally { ⋯ }
  }
  fetchData();

  return () => {
    cancelled = true;
  }
}, []);
```
Start state: the code above without lines 2, 9 and 14–17 (gaps reserved; lines 14–17 region shows the dashed `cleanup?` slot from frame 7).
Scene 1 (0.0–5.9s): kicker `✱ ANNULEREN`; on "annuleren." (1.84s) the dashed slot pulses once (amber outline); on "abort controller." (4.92s / 5.2s) the aside card settles into the right column (pop).
Scene 2 (5.9–10.2s): on "eenvoudig" (6.72s) the aside card dims to 45%; on "boolean:" (8.48s) line 2 types on up to `let cancelled: boolean`; on "cancelled." (9.56s) ` = false;` completes and chip `cancelled: false` pops in the right column (y ~440).
Scene 3 (10.2–13.3s): on "cleanup functie" (10.56s / 10.96s) the dashed slot is replaced: lines 14–17 type on (`return () => {`, `cancelled = true;`, `}`) with a blank line 13 above; on "true." (12.64s) the chip value swaps to `cancelled: true` (pop).
Scene 4 (13.3–19.92s): on "na de fetch" (13.6s / 13.92s) line 8 gets an amber wash and the mini timeline appears (lane `fetch #1` already long, end marker approaching); on "is cancelled true?" (15.6s / 16.32s) line 9 `if (cancelled) return;` types on; on "stoppen" (17.36s) a hairline barrier drops at the end of the timeline lane and the coral underline draws under line 9 (whoosh-short); on "state niet meer aan." (18.84s / 19.64s) the late `setPosts(…)` chip on the lane is struck through and dims to 35%, and line 10 `setPosts(result);` dims to 50%. Hold.
