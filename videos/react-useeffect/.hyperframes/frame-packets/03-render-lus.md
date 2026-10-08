# Frame packet: 03-render-lus

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-useeffect
- Design tokens: /Users/slimmii/Git/web/videos/react-useeffect/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 3 — De render-lus

- scene: A cycle diagram: `state-update` → `render` → `setInterval()` → back to state-update. During "de hele functie opnieuw uitgevoerd" a highlight scans the component body line by line (re-execution). "dus ook setInterval" — the setInterval node lights. "Er komt een tweede timer bij" — a second, coral timer chip drops into the timers list.
- voiceover: "Maar een state-update betekent: React rendert je component opnieuw. En bij die render wordt de hele functie opnieuw uitgevoerd — dus ook setInterval. Er komt een tweede timer bij."
- duration: 14.4s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-render-lus.html
- type: product_intro
- persuasion: Causal chain made visible
- beat: "uh-oh"

narrativeRole: Names the mechanism: every state update re-runs the component function, including the setInterval call.
keyMessage: Each render runs setInterval again → one more timer.

- blueprint: compose
- focal: the three-node cycle (state-update → render → setInterval())
- roles: cycle diagram (three hairline tile nodes on a circle with drawn arrows, left-centre) = foreground subject · mini code strip of the component body (navy, small) under/next to the cycle = supporting · timers list (right) = supporting · the new coral chip `timer #2` = the one voltage
- sfx: whoosh-short

Compose: left 62% = cycle + mini code, right column = timers list (same y-band as frame 2).
Scene 1 (0.0–2.3s): kicker `✱ WAT GEBEURT ER?`; timers list on the right already shows `timer #1 · 1000ms` (continuity from frame 2). On "state-update" (0.46s) node 1 `state-update` settles in (top of the cycle), with `setNumber(…)` in mono under it.
Scene 2 (2.3–5.2s): on "React rendert" (2.44s) arrow 1 draws (svg path draw) to node 2 `render` (right of cycle), which settles in; on "opnieuw" (4.18s) a `render #2` mono tag pulses on node 2.
Scene 3 (5.2–9.2s): on "bij die render" (5.66s) the mini code strip (component body, 8 lines, navy) appears beside the cycle; on "de hele functie" (6.9s) an amber line highlight scans down the lines one by one (0.22s per line) — function re-executes.
Scene 4 (9.2–11.5s): on "dus ook setInterval" (9.52s) the scan stops on the setInterval lines (coral underline); arrow 2 draws to node 3 `setInterval()` (bottom-left), which settles; arrow 3 draws back to node 1 closing the loop.
Scene 5 (11.5–14.4s): on "tweede timer" (12.3s) a coral chip `timer #2 · 1000ms` drops into the timers list below #1 (y 24→0, power3.out); its coral dot pulses once at 13.1s. Hold.
