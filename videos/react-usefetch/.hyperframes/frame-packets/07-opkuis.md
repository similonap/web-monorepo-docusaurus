# Frame packet: 07-opkuis

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 7 — Klaar? Nee hoor.

- scene: The code is dimmed and shows `}, []);` with no cleanup: a dashed empty slot where `return () => { … }` should be. Right: a two-lane timeline: the component lane ends ("unmount"), the fetch lane keeps running and lands later with `setPosts(…)` in coral.
- voiceover: "Klaar? Nee hoor. Er is nog een belangrijk probleem: we ruimen niets op. Verdwijnt de component, of loopt het effect opnieuw, dan loopt de oude fetch gewoon verder. En komt die later binnen, dan zet hij toch nog de state."
- duration: 14.16s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/07-opkuis.html
- type: pain_point
- persuasion: The hidden problem, made visible
- beat: twist

narrativeRole: Names the missing cleanup: an old fetch can still set state.
keyMessage: Without cleanup the old fetch keeps running and still sets the state.

- blueprint: compose
- focal: the timeline with the late `setPosts(…)` landing
- roles: compact code surface (left, x 80, width 760, top 220, App.tsx, 24px/35px, 9 lines) = supporting · dashed empty slot (hairline ink 30%, dashed, radius 6) inside the code where the cleanup should be, mono label `cleanup?` = supporting · timeline (right, x 920–1840, y 260–720) = foreground subject: lane 1 `component` (tile bar, Inter label), lane 2 `fetch #1` (tile bar), time axis hairline · coral = the landing marker + chip `setPosts(…)` at the end of lane 2 (what goes wrong)
- sfx: pop @0.88, whoosh-short @5.6, whoosh-short @8.72, pop @12.64

Compose: 40/60, compact code left, timeline right.
Code (App.tsx, excerpt):
```
useEffect(() => {
  const fetchData = async () => {
    ⋯
    setPosts(result);
    ⋯
  }
  fetchData();
                                 ← dashed slot "cleanup?"
}, []);
```
Scene 1 (0.0–3.8s): kicker `✱ OPKUIS`; on "Klaar?" (0.0s) a statement `Klaar?` in EB Garamond 120px appears centred; on "Nee hoor." (0.88s / 1.16s) an italic `Nee hoor.` appears beside it (pop); on "probleem:" (3.04s) the statement fades out (0.4s) and the compact code surface settles in on the left.
Scene 2 (3.8–5.5s): on "ruimen niets op." (4.04s / 4.88s) the dashed slot opens between `fetchData();` and `}, []);` (height grows 0→70px, power3.out) with the mono label `cleanup?` in ink 50%.
Scene 3 (5.5–11.0s): the timeline axis is already drawn at 3.8s with lanes 1 and 2 starting at the left (lane 1 full-width bar `component` growing from 0 at 3.8s; lane 2 `fetch #1` bar growing at the same speed). On "Verdwijnt de component," (5.6s / 6.44s) lane 1 stops: a vertical hairline marker with mono tag `unmount` drops at its end, and the lane-1 bar dims to 35%; on "loopt het effect opnieuw," (7.2s / 7.96s) a second mono tag `of: effect opnieuw` stacks under `unmount`; on "oude fetch gewoon verder." (9.24s / 9.92s / 10.32s) lane 2 keeps growing past the marker (ease "none") with mono tag `nog bezig…`.
Scene 4 (11.0–14.16s): on "later binnen," (11.72s / 11.96s) lane 2's bar reaches its end and a small down arrow drops from it; on "zet hij" (12.64s) the coral landing marker + chip `setPosts(…)` pop at the end of lane 2 (pop); on "state." (13.72s) `setPosts(result);` in the code gets a coral underline (same coral moment, linked). Hold.
