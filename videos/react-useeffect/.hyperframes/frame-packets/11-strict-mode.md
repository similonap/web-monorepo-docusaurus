# Frame packet: 11-strict-mode

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 11 — Strict Mode

- scene: A console panel shows `effect gestart` twice in development. `<StrictMode><App /></StrictMode>` snippet. Sequence: mount → effect → cleanup → effect (label `alleen in development`). A toggle `StrictMode` stays ON; final check "ruim netjes op".
- voiceover: "Zie je in development je effect toch twee keer lopen? Dat is Strict Mode. React test zo of je cleanup klopt. Zet het dus niet af — ruim gewoon netjes op."
- duration: 13.24s
- transition_in: crossfade
- status: outline
- src: compositions/frames/11-strict-mode.html
- type: product_intro
- persuasion: Myth-busting reassurance
- beat: reassurance

narrativeRole: Explains the course's "advanced" note: effects running twice in development is Strict Mode testing your cleanup.
keyMessage: Effect runs twice in dev = Strict Mode checking your cleanup. Keep it on.

- blueprint: compose
- focal: the console panel with two identical log lines
- roles: console panel (navy, left) = foreground subject · `<StrictMode>` snippet + sequence `mount → effect → cleanup → effect` (right) = supporting · toggle (tile pill, ON) = supporting · coral = the second `effect gestart` log line (the surprise) only
- sfx: none

Scene 1 (0.0–3.8s): kicker `✱ STRICT MODE`; console panel (title bar `Console`) enters; on "development" (0.74s) first log `▸ effect gestart`; on "twee keer" (2.58s) the second identical log lands with a coral left bar and mono `×2` badge.
Scene 2 (3.8–6.4s): on "Strict Mode" (4.48s) the right column shows the snippet `<StrictMode>\n  <App />\n</StrictMode>` in a small navy strip (StrictMode amber).
Scene 3 (6.4–8.9s): on "test zo of je cleanup klopt" (6.8s) a horizontal sequence builds under the snippet: `effect` → `cleanup` → `effect` (hairline pills + drawn arrows) with a mono note `alleen in development`.
Scene 4 (8.9–13.24s): on "Zet het dus niet af" (9.0s) a toggle `StrictMode` appears ON; a small mono `✕ uitzetten` hint fades in then is dismissed (fades out) at 10.4s; on "ruim gewoon netjes op" (10.94s) an ink check `✓ cleanup` lands on the `cleanup` pill. Hold.
