# Frame packet: 08-overal

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/waarom-software-development
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/waarom-software-development/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 8 — Reden 6: je neemt het overal mee

- status: animated
- src: compositions/frames/08-overal.html
- duration: 15.92s
- transition_in: push-slide LEFT
- scene: Een groot probleemblok splitst in kleine blokjes en wordt een systeem; je skills reizen langs drie bestemmingen; de jobtitel wisselt maar de denkwijze blijft goud
- voiceover: "Zes. Je leert grote problemen opsplitsen, denken in systemen en je aannames testen. Dat neem je overal mee: naar een AI-bedrijf, een ziekenhuis of je eigen startup. Je jobtitel kan veranderen. Je manier van denken blijft goud waard."
- blueprint: spatial-pan-stations (Adapt)
- focal: the skills block traveling past three stations
- roles: number tile 06 (pink) = supporting · problem block → 4 small blocks → connected system = foreground (scene 1) · three station cards = supporting · job title token-cycle = supporting · `GOUD WAARD` = payoff
- sfx: pop @0.0, whoosh-short @2.36, pop @5.04, whoosh-short @7.41, pop @8.24, pop @9.40, pop @10.80, key-press @12.64, click @15.08

Scene 1 (0.0–6.3s): cream ground, topbar (pill `REDEN 06 / 07`). Pink number tile `06` @0.0. Left-center: one big ink-bordered yellow square `PROBLEEM` @1.36; @2.36 it splits into a 2×2 grid of four small squares (gap opens); @3.28 thin ink lines connect the four squares into a little system diagram (label mono `SYSTEEM`); @5.04 a checkbox chip `AANNAME ✓ GETEST` ticks below.
Scene 2 (6.3–11.7s): @7.41 the diagram compresses into an ink block labeled `JOUW DENKWIJZE` (the traveler) at left; to the right, three station cards in a row (y ≈ 360-560): `AI-BEDRIJF` @8.24, `ZIEKENHUIS` @9.40, `EIGEN STARTUP` @10.80 — the traveler block slides to sit under each station as it is named.
Scene 3 (11.7–14.9s): a title strip above the stations: mono label `JOBTITEL:` with an in-place token cycle (hard-cut swaps): `DEVELOPER` @11.96 → `ARCHITECT` @12.64 → `CTO` @13.10 → `FOUNDER` @13.50.
Scene 4 (14.9–16.42s): the traveler block flips to yellow and gets a rotated badge `GOUD WAARD` (−4deg, the frame's hard shadow) @15.08. Hold.

## Selected blueprint: spatial-pan-stations

# spatial-pan-stations — Spatial Pan / Stations

**intent**: Pre-place a sequence of labeled stations on one oversized canvas, then traverse it with a single virtual camera — repeated lateral/diagonal pans that center each station in turn and reveal a callout at every stop, landing held on a final station.

**roles served**

- Hook (from hook-pan-timeline): a horizontal timeline of evenly-spaced milestones, left-panned beat by beat, each marker getting a spring-popped callout, landing on the present moment ("evolution / milestone walk leading up to us").
- Problem (from problem-camera-pan-stations): a connected web of pain "stations" linked by hand-drawn leading lines, diagonally panned station to station, ending on a tangled scribble knot ("too many disconnected steps — it's a mess").
- Product_Intro (from concept-demo-decode-pan): a two-shot strip bridged by ONE lateral pan — shot 1 holds a static phrase whose accent word 3D-flap-DECODES (the concept lands), then the camera pans across the strip (with background parallax) into shot 2, where a cursor drives a live typing demo. Pairs this pan with `cursor-ui-demo`'s focal-locked tracked typing.

**duration**: 7–10s (union of Hook 8–10s, Problem ~7s, concept-demo ~7s)

**shot structure**
One oversized flat canvas on a solid `[bg color]`; all stations/markers pre-placed in world space; `[accent color]` text + simple line-icons; one virtual `.world` camera pans ease-in-out between stops. Each station holds ~1.0s.

- Scene 1 (0.0–~1.0s): Camera opens on station 1 — `[label 1 / first step]` centered. A reveal lands on it (see variants). Camera then begins to PAN toward station 2, sliding station 1 out of frame.
- Scene 2 → Scene N-1 (~1.0s each): Camera PANS (ease-in-out) to center the next station; on arrival its `[label k]` (+ optional `[secondary label]`) is REVEALED with the role reveal. Repeat per station.
- Scene N (final, ~last beat): One last pan lands on the terminal station; the final `[callout / landing element]` reveals and HOLDS to the end. Camera goes static on the punchline.

- Variant — Hook: stations sit as evenly-spaced `[markers]` on a thin horizontal `[timeline]` (lower third); pans are LEFT-only along the single axis (timeline scrolls left). Each callout is a bordered `[callout box]` + downward triangle (offset drop-shadow) that SPRING-POPS up (scale 0→100%, bouncy overshoot, transform-origin at triangle tip) reading `[label k]`; a `[secondary label, e.g. year]` fades in and RISES above it. Some mid markers arrive as plain static text revealed by the pan alone (no box). Final scene lands on the `[present-day label]`, springs, holds.
- Variant — Problem: stations are scattered across a 2D web; pans are DIAGONAL, STEERED by `[accent color]` hand-drawn lines — each station has a rough write-on line/arrow that draws toward the next and the camera follows it (Scene 1 also draws a loop/circle around the headline's key word). Each station = a white `[line-icon]` above its `[label]`, revealed plainly by the pan (no spring box). Final scene: the accent line spirals into a dense chaotic SCRIBBLE KNOT centered on the field; camera holds static on the tangle (visual punchline).

**motion vocabulary**
repeated ease-in-out camera pans (horizontal-left for Hook, diagonal-steered for Problem) across one large static canvas; pre-placed stations sliding through frame via the pan; spring-overshoot callout pop with triangle-tip origin (Hook); rise-and-fade secondary label (Hook); plain labels/icons arriving via the pan alone; rough hand-drawn "write-on" leading lines/arrows + loop/circle key-word mark (Problem); terminal chaotic-scribble knot draw (Problem); static hold on the final station/punchline.

**rule mapping**

- camera pan / traverse across the canvas (primary) → `viewport-change` (single `.world` wrapper transform; PAN mode)
- sequencing the repeated pan beats into stops → `multi-phase-camera`
- centering each station as the pan target → `coordinate-target-zoom` (used as pan-to-target, no zoom)
- spring-overshoot callout pop, triangle-tip origin (Hook) → `spring-pop-entrance`
- rise-and-fade secondary label + plain per-station label/icon reveals via the pan → `discrete-text-sequence`
- hand-drawn leading lines / arrows / loop-circle key-word mark / terminal scribble knot (Problem) → `svg-path-draw`
- station line-icons (Problem) → `svg-icon-enrichment`
- static hold on the final station / punchline → (no motion; sustained held frame, no rule needed)

**camera modifier**: The pan IS the camera. One `.world` virtual-camera transform in PAN mode — `viewport-change` — sequenced across stops by `multi-phase-camera`, each stop targeted via `coordinate-target-zoom` (pan-to-target). No depth push-in (that distinguishes this from the cluster-push-in / dataviz-pushthrough blueprints).
