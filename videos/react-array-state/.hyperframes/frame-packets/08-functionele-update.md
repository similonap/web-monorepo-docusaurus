# Frame packet: 08-functionele-update

## Project inputs

- Project: /Users/slimmii/Git/web/videos/react-array-state
- Design tokens: /Users/slimmii/Git/web/videos/react-array-state/frame.md
- RULES_DIR: /Users/slimmii/Git/web/.agents/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 8 — Functionele update

- scene: Code compares two lines: `setNumbers([...numbers, n])` vs `setNumbers(prev => [...prev, n])`. A fast double-click fires two updates: in the first version both read the same stale `numbers` (one item lost, coral), in the second each gets the latest `prev` (both items land).
- voiceover: "Een extra tip: geef de setter een functie. Met prev werk je altijd op de nieuwste versie van je state — ook als er snel na elkaar meerdere updates gebeuren."
- duration: 10.8s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-functionele-update.html
- type: benefit_highlight
- persuasion: Before/after + counterexample
- beat: foresight

narrativeRole: Extends the add recipe to the safer functional form and shows the concrete failure it prevents.
keyMessage: `setNumbers(prev => …)` always builds on the latest state.

- blueprint: comparison-split (Adapt)
- focal: two code cards side by side — direct value vs `prev =>`
- roles: left card `setNumbers([...numbers, n])` = foreground · right card `setNumbers(prev => [...prev, n])` = foreground · two mini strips under the cards = supporting · the lost update = the one voltage (coral)
- sfx: click-soft, pop

Adapt: keep the split-tilt two-card entry (signature) but the badges become the result strips under each card; the overshoot badge is dropped in favour of a smooth settle.
Scene 1 (0.0–2.3s): kicker `✱ EXTRA TIP`; title "Geef de setter een functie" builds on its cue (headline).
Scene 2 (2.3–5.0s): on "functie" both code cards enter from opposite wings with mirrored tilts (split-tilt-cards); on "prev" (3.4s) the right card's `prev =>` takes a highlight band.
Scene 3 (5.0–7.9s): on "nieuwste versie" a tiny `prev` arrow on the right card points at the latest strip.
Scene 4 (7.9–10.8s): on "snel na elkaar" two quick clicks fire (cursor-click-ripple ×2): left strip ends [0 1 2 **3**] — one update lost, coral; right strip ends [0 1 2 3 4] — both land; on "meerdere updates" a mono `2 updates → 1` vs `2 updates → 2` label appears; hold.

## Selected blueprint: comparison-split

# comparison-split — Comparison Split-Cards

**intent**: Two paired items of equal weight shown side-by-side with mirrored 3D "book-open" tilts — the eye reads them as a balanced comparison, then a pill badge lands at each card's inner edge to punctuate. The motion IS the symmetry: two cards arriving from opposite wings into a held spread.

**roles served**

- Key_Feature (from `comparison-split-cards`): when two complementary features / capabilities of equal weight should be presented **simultaneously, not sequentially** — an A/B, a "X + Y together," paired concepts the viewer must weigh side-by-side. Not for >2 items (use `grid-card-assemble`) or sequential steps.

**duration**: 4–6s

**shot structure** (a `[bg]` canvas carrying two faint ambient glow blooms — `[accent A]` near 30%, `[accent B]` near 70% — so each side owns a color identity across a 50% symmetry axis; equal-width cards under one shared perspective parent)

- **Scene 1 (0.0–~0.8s) — title sets the concept.** A centered `[title line]` with an `[accent keyword]` slides DOWN into place from just above (a short smooth settle). The downward arrival is deliberate: it forms a non-conflicting T-shape against the cards, which arrive from the sides next.
- **Scene 2 (~0.4–1.9s) — the split-tilt entry (signature move).** Two equal-width feature cards arrive from opposite wings — `[left card]` from the left, `[right card]` from the right ~0.2s behind — each carrying a **mirrored 3D `rotateY` tilt** (left faces right, right faces left, opening like a book) and scaling ~0.85→1 as it lands. The entry overlaps the title's tail so the whole thing reads as ONE arrival, not two beats. Each card holds `[image / label / subtitle]`; box-shadows fall **outward** from the tilt (left shadow right, right shadow left).
- **Scene 3 (~1.9–end) — badges punctuate, then hold.** A pill `[badge]` lands at each card's **inner edge** (left then right, ~0.3s apart), overlapping its card ~15% so it reads as attached, not orbiting. This is the lone overshoot in the shot — it earns the punctuation. Settles and holds.

**motion vocabulary**: title slide-down from above; mirrored opposite-wing card entry; static book-open `rotateY` tilt (`+tilt` left, `−tilt` right); tilt-matched outward box-shadow; inner-edge badge spring-pop; gentle phase-opposed idle float (left vs right, never synchronized) registered as subtle jitter; dual side-glow ambient.

**rule mapping**

- two cards entering from opposite wings with mirrored `rotateY` tilts + tilt-matched shadow → `split-tilt-cards` (the signature; keep the two-layer split so the entry `x`/`scale` and the idle never collide on one alias)
- title slide-down settle → `gsap-effects` (translate + opacity on a long-tail `power3`)
- inner-edge pill badge pop (the one overshoot) → `spring-pop-entrance` (overshoot register — earns the punctuation)
- phase-opposed idle float on the pair → `sine-wave-loop` (low-amplitude register — subtle jitter, NOT lazy breathing; left `sin(t)`, right `sin(t+π)` so they never conveyor-belt)
- the two faint side glows behind the cards → `ambient-glow-bloom` (un-triggered soft bloom, one per accent)

**camera modifier**: camera-static by default — the symmetry is the subject and a move would break the balance.

## Selected motion rule: cursor-click-ripple

---
name: cursor-click-ripple
description: Animated mouse cursor moves to target, clicks with scale depression and expanding ripple rings.
metadata:
  tags: cursor, click, ripple, interaction, mouse, button
---

# Cursor Click Ripple

An animated cursor moves to a target element, performs a click with visual depression, and emits expanding ripple rings from the click point. Three sequential phases on one timeline: **move** (eased translation to the target's center) → **click** (scale depression on cursor + target together, yoyo back) → **ripple** (1–3 staggered rings expand and fade from the click point). This is a _point event at one location_ — a sustained hold across space is [cursor-drag.md](cursor-drag.md).

## Recipe

```html
<button class="target-button">{ctaLabel}</button>
<div class="cursor"><!-- arrow SVG, positioned at the entry corner --></div>
<!-- Rings live in DOM from t=0 at the click-target CENTER, scale 0 + opacity 0 -->
<div class="ripple ripple-1"></div>
<div class="ripple ripple-2"></div>
<div class="ripple ripple-3"></div>
```

```css
.ripple {
  position: absolute;
  left: 50%;
  top: 50%; /* click-target center */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid {rippleColor};
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  pointer-events: none;
}
```

```js
// Phase 1 — Move: eased, not linear
tl.to(".cursor", { x: TARGET_X, y: TARGET_Y, duration: MOVE_DUR, ease: MOVE_EASE }, 0);

// Phase 2 — Click: cursor + target depress together, then return
tl.to(
  ".cursor",
  { scale: CURSOR_PRESS_SCALE, duration: PRESS_DUR, ease: "power2.in", yoyo: true, repeat: 1 },
  CLICK_AT,
);
tl.to(
  ".target-button",
  { scale: TARGET_PRESS_SCALE, duration: PRESS_DUR, ease: "power2.in", yoyo: true, repeat: 1 },
  CLICK_AT,
);

// Phase 3 — Ripple burst, N rings staggered from the click point
tl.set([".ripple-1", ".ripple-2", ".ripple-3"], { opacity: 1 }, RIPPLE_AT);
tl.to(
  [".ripple-1", ".ripple-2", ".ripple-3"],
  {
    scale: RIPPLE_SCALE,
    opacity: 0,
    duration: RIPPLE_DUR,
    ease: RIPPLE_EASE,
    stagger: RIPPLE_STAGGER,
    immediateRender: false, // holds scale 0 / opacity 0 until the click moment
  },
  RIPPLE_AT,
);
```

## Variations

- **Single ring** — one `.ripple`, no stagger; more elegant when the rest of the scene is busy.
- **Keyframed attack-decay** — a `keyframes` block ramps opacity 0 → peak → 0 across the duration; a clearer "energy radiates and dissipates" envelope.
- **Multi-ring expanding pulse** — 3 rings at 0.08 s stagger when the click is the scene's climactic moment.

## Values

| token                       | range                       | notes                                                                                                                                  |
| --------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| MOVE_DUR                    | 0.4–1.0 s                   | short darts; long reads as a "considered click." Must end before CLICK_AT or it reads as a misclick                                    |
| MOVE_EASE                   | discrete choice             | `power2.inOut` calm · `power3.out` decisive · `back.out(1.2–1.4)` settles onto the button with a tiny recoil (higher reads cartoonish) |
| CLICK_AT                    | `MOVE_DUR + 0–0.3 s`        | zero pause reads as autopilot; >0.3 s reads as hesitation                                                                              |
| PRESS_DUR                   | 0.06–0.12 s (half; yoyo ×2) | short crisp, long mushy; must finish before the next phase needs normal scale                                                          |
| CURSOR / TARGET_PRESS_SCALE | 0.80–0.90 / 0.92–0.97       | cursor compresses MORE than the target — the cursor is the actor, the target the recipient                                             |
| RIPPLE_AT                   | `CLICK_AT + 0–0.08 s`       | simultaneous feels causal; slight delay feels acoustic                                                                                 |
| RIPPLE_DUR                  | 0.5–1.0 s                   | sharp ping vs soft sonar; must complete before anything that needs the ring gone                                                       |
| RIPPLE_SCALE                | 3–6                         | 3 stays near the click site; if the ring would exit the frame before fading, lower it                                                  |
| RIPPLE_STAGGER              | 0.06–0.12 s (or 0)          | below ~0.06 s reads as one thick ring; above ~0.12 s as separate events                                                                |
| RIPPLE_EASE                 | discrete choice             | `power2.out` standard ping · `power3.out` sharper attack · `expo.out` strong distant pulse                                             |
| TARGET_X / TARGET_Y         | layout-derived              | must match the target's visual centroid — a 4 px miss reads as missing the button                                                      |

Reference values: `../examples/cta-orbit-collapse.html` — 0.5 s move on `back.out(1.3)`, click +0.2 s, press 0.08 s at 0.85/0.95, single ring to 5× over 0.7 s `power2.out`.

## Critical Constraints

- **Move before click** — trigger the click only after the move tween settles; clicking mid-motion reads as unintentional.
- **Rings live in DOM from t=0** at the click-target center with `scale: 0` + `opacity: 0` — never conditionally rendered; `immediateRender: false` on the expand so they hold invisible until the trigger.
- **Ripple from the click point** — the button's visual center, not any element's bounding-box origin.
- **Synchronized depression** — cursor + target depress at the same position with the same duration, and both yoyo back.
- **Cursor above all content** (high z-index) for the whole sequence; `pointer-events: none` on cursor + ripples.

## See also

`orbit-3d-entry` (click as the pivot that collapses orbiters) · `center-outward-expansion` (click triggers an outward burst) · `press-release-spring` (stronger physical feel on the target) · `scale-swap-transition` (the button's post-click state change).

## Selected motion rule: split-tilt-cards

---
name: split-tilt-cards
description: Two cards side-by-side with opposing Y-rotation creating a symmetric 3D split-screen layout for comparisons or feature pairs.
metadata:
  tags: 3d, cards, split, tilt, comparison, symmetric, layout
---

# Split Tilt Cards

Two cards side-by-side with opposing `rotateY` (left `+TILT`, right `−TILT`) — a symmetric "book-open" 3D split for comparisons, before/after, feature pairs. Each card slides in from its own side (reinforcing "they came from their own worlds and met here"), then the pair idles in counter-phase.

## How It Works

`perspective` on the scene root (REQUIRED — without it `rotateY` flattens to a 2D layout) and `transform-style: preserve-3d` on the stage and both cards. Entry starts each card off-axis with `TILT + TILT_OVERSHOOT`, settling to `TILT` — a pivot-into-place. Idle is a gentle counter-phase y-bob (the two yoyo tweens run in opposite directions); copy fades up during the cards' settle, not after.

## Recipe

```html
<!-- inside a standard scene clip (hyperframes-core) -->
<div class="split-stage">
  <div class="card card-left">
    <div class="card-eyebrow">{leftEyebrow}</div>
    <div class="card-headline">{leftHeadline}</div>
    <div class="card-body">{leftBody}</div>
  </div>
  <div class="card card-right">…</div>
</div>
```

```css
.scene-root {
  display: grid;
  place-items: center;
  perspective: SCENE_PERSPECTIVE; /* REQUIRED */
}
.split-stage {
  display: flex;
  gap: STAGE_GAP;
  transform-style: preserve-3d;
}
.card {
  width: CARD_WIDTH;
  transform-style: preserve-3d;
  will-change: transform;
}
/* Shadow falls WITH the facing direction: left card faces right → shadow right. */
.card-left {
  box-shadow: -CARD_SHADOW_OFFSET CARD_SHADOW_DROP CARD_SHADOW_BLUR {shadowColor};
}
.card-right {
  box-shadow: CARD_SHADOW_OFFSET CARD_SHADOW_DROP CARD_SHADOW_BLUR {shadowColor};
}
```

```js
// Entry — from outside, opposing tilts settle with a small pivot
tl.fromTo(
  ".card-left",
  { x: -ENTRY_SLIDE_DIST, rotateY: TILT + TILT_OVERSHOOT, opacity: 0 },
  { x: 0, rotateY: TILT, opacity: 1, duration: ENTRY_DUR, ease: "power3.out" },
  LEFT_AT,
);
tl.fromTo(
  ".card-right",
  { x: ENTRY_SLIDE_DIST, rotateY: -TILT - TILT_OVERSHOOT, opacity: 0 },
  { x: 0, rotateY: -TILT, opacity: 1, duration: ENTRY_DUR, ease: "power3.out" },
  RIGHT_AT,
);

// Counter-phase idle bob — opposite signs = alive; synchronized = conveyor belt
tl.to(
  ".card-left",
  { y: -FLOAT_AMP, duration: FLOAT_DURATION / 2, ease: "sine.inOut", yoyo: true, repeat: 1 },
  IDLE_START,
);
tl.to(
  ".card-right",
  { y: FLOAT_AMP, duration: FLOAT_DURATION / 2, ease: "sine.inOut", yoyo: true, repeat: 1 },
  IDLE_START,
);

// Copy fades up during the settle
tl.from(
  ".card-eyebrow, .card-headline, .card-body",
  { opacity: 0, y: COPY_RISE, stagger: COPY_STAGGER, duration: COPY_DUR, ease: "power2.out" },
  COPY_REVEAL_AT,
);
```

## Variations

- **Badges / floating labels**: position them on the PARENT, never inside a card — inside they inherit the `rotateY` and tilt off-axis.
- **3+ cards**: center card stays flat (`rotateY: 0`), outer two tilt inward — "old way / nothing / our way."
- **Zoom-through**: a separate camera tween scaling `.split-stage` reads as the viewer crossing the gap between the tilted pair.

## Values

| token             | range                            | notes                                                   |
| ----------------- | -------------------------------- | ------------------------------------------------------- |
| SCENE_PERSPECTIVE | 1000–2400px                      | lower exaggerates the tilt; higher reads near-isometric |
| TILT              | 10–18°                           | < 10 reads almost flat; > 18 folds shut and copy blurs  |
| TILT_OVERSHOOT    | 4–12°                            | the pivot-into-place feel                               |
| STAGE_GAP         | 40–120px (~0.06–0.15×CARD_WIDTH) | small = fused pair; large = compared-but-separate       |
| CARD_WIDTH        | 480–820px @1920                  | `2×CARD_WIDTH + STAGE_GAP ≤ 0.95×stage` at full tilt    |
| ENTRY_SLIDE_DIST  | 200–500px (~0.3–0.6×CARD_WIDTH)  |                                                         |
| ENTRY_DUR         | 0.6–1.2s                         |                                                         |
| RIGHT_AT          | LEFT_AT + 0–0.3s                 | zero feels mechanical; large fragments the pair         |
| FLOAT_AMP         | 3–8px                            | subtle is the point                                     |
| FLOAT_DURATION    | 1.6–3.2s round trip              | breathing cadence; IDLE_START ≥ entry end               |
| COPY_REVEAL_AT    | during the entry tail            | copy popping in after cards are idle reads disconnected |

## Critical Constraints

- **`perspective` on the scene root is REQUIRED**; `preserve-3d` on the stage AND each card.
- **Shadow direction matches tilt** — left card faces right → shadow falls right (and mirrored). Wrong sign reads as broken 3D.
- **Counter-phase idle** — the two bobs run with opposite signs at the same position.
- **Badges outside the card divs** (they'd inherit the rotation).
- **Body copy ≤ 2 lines per card** — tilted long paragraphs collapse into perspective blur.
- **Symmetric weight** — same width, same vertical center, similar line counts; asymmetry breaks the comparison metaphor.

## See also

`card-morph-anchor` (the pair can morph into one unified shape afterward) · `counting-dynamic-scale` (numbers as each side's headline) · `sine-wave-loop` (the idle form).
