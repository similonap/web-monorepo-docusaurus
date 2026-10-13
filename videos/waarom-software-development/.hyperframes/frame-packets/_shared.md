# Shared primitives for every frame (Creative Mode, waarom-software-development)

Copy the `<style>` block below VERBATIM at the top of your frame's `<style>` (inside `<template>`),
then add frame-specific rules with ids/classes prefixed by your frame id short code
(e.g. `f03-`). Use the `cm-*` classes for the recurring elements so all 11 frames match.
GSAP: `<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>` inside the template.
Canvas 1920×1080, all positions in px are fine (frame is always 1920 wide). Nothing load-bearing below y = 900.

```css
@font-face { font-family: "Archivo Black"; src: url("assets/fonts/archivo-black-latin-400-normal.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: block; }
@font-face { font-family: "Space Grotesk"; src: url("assets/fonts/space-grotesk-latin-400-normal.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: block; }
@font-face { font-family: "Space Grotesk"; src: url("assets/fonts/space-grotesk-latin-500-normal.woff2") format("woff2"); font-weight: 500; font-style: normal; font-display: block; }
@font-face { font-family: "Space Grotesk"; src: url("assets/fonts/space-grotesk-latin-700-normal.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: block; }
@font-face { font-family: "JetBrains Mono"; src: url("assets/fonts/JetBrains_Mono-400-normal.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: block; }
@font-face { font-family: "JetBrains Mono"; src: url("assets/fonts/JetBrains_Mono-500-normal.woff2") format("woff2"); font-weight: 500; font-style: normal; font-display: block; }
@font-face { font-family: "JetBrains Mono"; src: url("assets/fonts/jetbrains-mono-latin-700-normal.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: block; }

:root {
  --cm-cream: #EFE9D9; --cm-cream-2: #E4DCC4;
  --cm-ink: #0F0F0F; --cm-ink-2: #2A2A2A;
  --cm-green: #1F8A4C; --cm-green-dark: #136636;
  --cm-pink: #F06CA8; --cm-pink-dark: #D14E8B;
  --cm-orange: #E85A1F; --cm-yellow: #F5C518;
  --cm-border: 8px;            /* 0.4cqw @1920 = 7.7px */
  --cm-rule: 6px;
  --cm-shadow: 24px 24px 0 var(--cm-orange), 24px 24px 0 4px var(--cm-ink);  /* ONE per frame */
  --cm-display: "Archivo Black", "Arial Black", sans-serif;
  --cm-body: "Space Grotesk", Arial, sans-serif;
  --cm-mono: "JetBrains Mono", monospace;
}
/* ground: a full-duration class="clip" layer, never on #root */
.cm-bg { position: absolute; inset: 0; background: var(--cm-cream); }
/* Archivo Black: always uppercase, lh 0.92 */
.cm-display { font-family: var(--cm-display); font-weight: 400; text-transform: uppercase; line-height: 0.92; letter-spacing: -0.01em; color: var(--cm-ink); }
.cm-mono { font-family: var(--cm-mono); text-transform: uppercase; letter-spacing: 0.08em; }
/* display ramp in px @1920 */
.cm-hero { font-size: 298px; }   /* display-hero 15.5cqw, ≤3 short words */
.cm-xl   { font-size: 211px; }   /* display-xl 11cqw */
.cm-lg   { font-size: 154px; }   /* display-lg 8cqw */
.cm-head { font-size: 81px; }    /* display-head 4.2cqw */
.cm-step { font-size: 46px; }    /* marker / step-title */

/* topbar: kicker-block left, pill right, inset 64px */
.cm-topbar { position: absolute; left: 64px; right: 64px; top: 48px; height: 52px; display: flex; justify-content: space-between; align-items: center; }
.cm-kicker { background: var(--cm-ink); color: var(--cm-cream); font-family: var(--cm-mono); font-size: 22px; letter-spacing: 0.14em; text-transform: uppercase; padding: 10px 18px; }
.cm-pill { background: var(--cm-cream); border: 4px solid var(--cm-ink); border-radius: 999px; color: var(--cm-ink); font-family: var(--cm-mono); font-size: 22px; letter-spacing: 0.08em; text-transform: uppercase; padding: 8px 22px; }

/* reason number tile (frames 3-9), top-left under topbar */
.cm-num { position: absolute; left: 96px; top: 140px; width: 150px; height: 150px; border: var(--cm-border) solid var(--cm-ink); display: flex; align-items: center; justify-content: center; font-family: var(--cm-display); font-size: 92px; line-height: 1; color: var(--cm-ink); }

/* generic blocks */
.cm-card { background: var(--cm-cream); border: var(--cm-border) solid var(--cm-ink); }
.cm-card-2 { background: var(--cm-cream-2); border: var(--cm-border) solid var(--cm-ink); }
.cm-marker { background: var(--cm-pink); border: var(--cm-border) solid var(--cm-ink); box-shadow: var(--cm-shadow); padding: 18px 32px; }
.cm-badge { background: var(--cm-yellow); border: var(--cm-border) solid var(--cm-ink); font-family: var(--cm-display); text-transform: uppercase; font-size: 40px; line-height: 1; padding: 14px 22px; color: var(--cm-ink); }  /* rotate(-4deg) via GSAP rotation, not CSS transform */
.cm-stamp { border: var(--cm-border) solid var(--cm-ink); font-family: var(--cm-display); text-transform: uppercase; line-height: 0.92; color: var(--cm-ink); padding: 18px 30px; outline: 5px solid var(--cm-cream); outline-offset: -18px; } /* rotate(-6deg) via GSAP */
.cm-chip { background: var(--cm-cream); border: 5px solid var(--cm-ink); font-family: var(--cm-mono); font-size: 28px; letter-spacing: 0.06em; text-transform: uppercase; padding: 10px 18px; color: var(--cm-ink); }
```

Motion conventions (energetic poster):
- Entrances: `fromTo` only. Slam: `{scale:1.25, opacity:0} → {scale:1, opacity:1, duration:0.4, ease:"power4.out"}`.
  Drop-in sticker/stamp: `{scale:1.35, rotation:<final-6>, opacity:0} → {scale:1, rotation:<final>, opacity:1, duration:0.42, ease:"back.out(1.6)"}` (back.out ONLY for badges/stamps).
  Slide-up: `{y:40, opacity:0} → {y:0, opacity:1, duration:0.45, ease:"power3.out"}`.
- Rotation via GSAP `rotation` (never a CSS `transform` on an element GSAP animates).
- Topbar + `.cm-bg` are visible from t=0 (fade topbar in 0→0.25s). Number tile slams at t=0.05.
- No exits except frame 11. No repeat:-1, no Math.random, no CSS transitions.
- End the timeline with `tl.set({}, {}, DURATION)` so its length equals the frame duration.
- Never write the narration sentence as on-screen text; only the poster copy named in the Scene lines.

# Video direction (from the storyboard, applies to every frame)

- **Design system:** `frame.md` (Creative Mode). Cream `#EFE9D9` ground on almost every frame, ink `#0F0F0F` 0.4cqw borders, Archivo Black UPPERCASE (lh 0.92) for every headline, JetBrains Mono for labels / kickers / code, Space Grotesk for the rare body line. Accents green / pink / orange / yellow, **two or three per frame, never all four**. Exactly **one hard offset shadow per frame** (orange + ink) on the featured block. Square corners; the only rounded thing is one pill chip. Rotation only at −4deg (badge) or −6deg (stamp). No gradients, no blur shadows, no glow, no emoji, no logos. Fonts ship in `assets/fonts/` (`archivo-black-latin-400-normal.woff2`, `space-grotesk-latin-{400,500,700}-normal.woff2`, `JetBrains_Mono-{400,500}-normal.woff2`, `jetbrains-mono-latin-700-normal.woff2`); `@font-face` inside each frame, paths are project-root relative (`assets/fonts/...`), exactly as in the shared block `.hyperframes/frame-packets/_shared.md`.
- **Series chrome (every frame except 11):** mono topbar at `3.3cqw` inset: left a small ink kicker-block `WAAROM SOFTWARE DEVELOPMENT`, right the pill chip with the frame's counter (`REDEN 01 / 07` … on frames 3-9, `INTRO` on 1-2, `CONCLUSIE` on 10). No footer (the caption band owns the bottom).
- **Reason number tile (frames 3-9):** a square ink-bordered accent tile with the reason number (`01`…`07`) in Archivo Black at step-num size, top-left under the topbar (≈ x 96, y 150), popping in on the spoken number ("Eén.", "Twee." …) at t≈0. Colors rotate: 01 green, 02 pink, 03 orange, 04 yellow, 05 green, 06 pink, 07 orange.
- **Motivational energy:** this is NOT a calm lesson clip. Faster, punchier entrances: `power3.out` / `power4.out` / `expo.out` settles at 0.35-0.5s, slams (scale 1.25 → 1 with a tiny rotation settle) for headline words, stamps that drop in rotated, hard-cut word swaps. Allowed: a single `back.out(1.6)` pop on badges and stamps (poster energy); everything else smooth long-tail. Holds are still (no breathing, no drift).
- **Reveal model:** every element appears on the spoken word that names it (times below are seconds from the frame start = voice start). Never show something before the voice says it. Reveals continue into the back half of every frame.
- **Rhythm:** frames 2 and 10 are big-claim plates (full-bleed accent ground: 2 orange, 10 split cream/green); frame 11 is the single green closing plate. Frame 9 lands slower and holds on its last line (the "strongest argument" beat).
- **Visible text = short poster copy**, never the narration sentence. Dutch (Flemish), no em-dashes.
- **Keep-out:** nothing load-bearing below y = 900 (caption band 900-1080).
- **Negative list:** no slideshow (front-load then freeze), no screensaver (everything floating), no rounded SaaS cards, no soft shadows, no purple/blue "AI" gradients, no robots/brain icons, no fabricated statistics or percentages.

