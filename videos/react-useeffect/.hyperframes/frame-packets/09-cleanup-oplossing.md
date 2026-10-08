# Frame packet: 09-cleanup-oplossing

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 9 — Cleanup: clearInterval

- scene: The same code gains `return () => { clearInterval(handle); };`. Right: a vertical sequence: `effect (1000ms)` → `cleanup ✕` → `effect (500ms)` → `cleanup ✕` → `effect (200ms)`; then `unmount → cleanup`. Timers list ends with only one live chip; old ones struck through.
- voiceover: "De oplossing: geef vanuit je effect een cleanup-functie terug. Daarin roep je clearInterval op, met de handle van je timer. React voert die cleanup uit vóór het effect opnieuw loopt, en wanneer je component verdwijnt. Zo loopt er altijd maar één timer."
- duration: 19.96s
- transition_in: push-slide
- status: outline
- src: compositions/frames/09-cleanup-oplossing.html
- type: feature_showcase
- persuasion: Solution + sequence diagram
- beat: resolution

narrativeRole: Fixes the leak with the course's cleanup pattern and shows when React calls the cleanup.
keyMessage: Return a cleanup; React runs it before the next effect and on unmount.

- blueprint: compose
- focal: the cleanup lines typed into the effect (`return () => { clearInterval(handle); };`)
- roles: code surface (navy, left ~56%) = foreground subject · sequence diagram (right, vertical stack of hairline pills: effect / cleanup) = foreground secondary · timers list (right bottom) = supporting · coral wash on the new return/clearInterval lines = the one voltage (the fix)
- sfx: key-press, pop

Code (Timer.tsx):
```
useEffect(() => {
  let handle = setInterval(() => {
    setNumber(number => number + 1);
  }, interval);

  return () => {
    clearInterval(handle);
  };
}, [interval]);
```
Scene 1 (0.0–5.0s): kicker `✱ CLEANUP`; code surface shows the frame-8 effect (lines 1–4 + `}, [interval]);`); on "cleanup-functie" (2.98s) the closing line moves down and lines `return () => {` and `};` type on (caret); coral wash on them.
Scene 2 (5.0–9.9s): on "clearInterval" (6.16s) `clearInterval(handle);` types on between; on "handle" (8.14s) both `handle` tokens (line 2 and line 7) get an amber wash and a thin hairline connector between them.
Scene 3 (9.9–16.4s): right: sequence stack builds top-down: `effect · 1000ms` at 10.0s; on "cleanup" (11.12s) `cleanup · clearInterval ✕` pill; on "vóór het effect opnieuw loopt" (12.12s) `effect · 500ms`, then `cleanup ✕` at 12.9s, `effect · 200ms` at 13.4s; on "wanneer je component verdwijnt" (14.22s) `unmount → cleanup ✕` at the bottom (dimmed ink tag).
Scene 4 (16.4–19.96s): on "altijd maar één timer" (17.3s) the timers list (below/next to the stack) shows `timer #1 · 1000ms` and `timer #2 · 500ms` struck through at 35%, and `timer #3 · 200ms` live with pulsing dot; mono note `✓ 1 timer actief`. Hold.
