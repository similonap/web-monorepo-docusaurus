# Dispatch context (shared by all frames)

- PROJECT_DIR: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usestate
- Canvas: 1920×1080
- Captions: enabled. Keep-out: every element above y ≤ 900.
- Confirmed sketch: none (autonomous run; build straight to animated).
- Style references (read-only, for matching look and mechanics): ../react-useeffect/compositions/frames/*.html (code surface, kickers, chips, render tags, stamps) and ../react-array-state/compositions/frames/02-push-fout.html (oversized cursor + click usage, code typing). Copy their CSS/markup patterns so this film looks identical. Do NOT edit anything outside compositions/frames/<your file>.
- Code-on-screen is content, not narration: real code lines in the code surface are allowed.
- Language of all visible labels: Dutch (Vlaams) as written in the storyboard; code in English/TypeScript.
- Avoid em-dashes in visible text.

## Video direction

- **Sibling film.** Third clip in the series after `react-array-state` and `react-useeffect`. Same design system (`frame.md`, Code editorial), same layout grammar, same voice. When in doubt, look at how `../react-useeffect/compositions/frames/*.html` and `../react-array-state/compositions/frames/*.html` solved it and do the same (code surface, kickers, chips, stamps, cursor).
- **Palette (frame.md, by role):** cream ground on every frame (tile half-step for content cards); ink for all text; warm navy ONLY on the code surface (syntax: coral keywords, amber function names/numbers, teal strings, cream@60% dim types); **coral = the one voltage per frame**: in this film it marks *the thing that is wrong or out of sync* (the plain variable, the screen that stays 0, the second `setCount(count + 1)` that does nothing extra, the input that still shows old text). Never two corals in one frame. In "solution" frames (5, 6, 9, 13) the voltage is the fix itself (`useState`, `prevCount => prevCount + 1`, `value={name}`).
- **Type by role:** EB Garamond display/headline for the frame's single statement and for the big counter numerals; Inter for labels and UI chrome; JetBrains Mono kickers (✱ coral spike, uppercase, e.g. `✱ ZO NIET`) and all code, chips and tags.
- **Recurring visual system:**
  - **`scherm` card** (right column): a tile card with a mono label `scherm` above it, standing in for the browser output. Inside: the rendered UI drawn plainly: a real-looking button (ink hairline, radius-md, Inter 600, the count as its label, ~44px), a `<p>` line in Inter, or an input field (hairline box, Inter, with a text caret). Same card position (x ≈ 1200–1840, y ≈ 200–520) in every frame that shows output, so the viewer always knows where to look for "what the user sees".
  - **`state` chip**: a small tile chip with mono label `state` and a value `count: 0` / `name: "Sam"`, sitting under the scherm card (y ≈ 580). This is "what React remembers". When state changes, the chip value flips (old slides up/out, new slides in, 0.25s).
  - **render tag**: mono `render #n` hairline pill (same as react-useeffect) that pulses on the scherm card's top edge whenever React re-renders.
  - **cursor**: the oversized-cursor component (`compositions/components/oversized-cursor.html`, as used in react-array-state frame 2) for every click and for clicking into the input; a click = cursor dip + a small ink ring ripple on the target.
- **Code surface:** same as the siblings: navy panel with title bar (`Counter.tsx` / `NameInput.tsx`) and status strip, JetBrains Mono 34–36px, line numbers, code types on with a stepping caret per character (code-typing mechanics), highlight = amber background wash rgba(232,165,90,0.24), the wrong line = coral rough box (svg path draw) or coral underline.
- **Motion grammar:** smooth long-tail `power3.out` settles, no bounce/overshoot; code arrives via type-on with caret; every reveal is cued to its spoken word (times below are seconds from the frame start = the voice start). Holds are still.
- **Layout:** kicker top-left at (80, 92); code surface left (x 80, ~1000–1060px wide, top ~190); right column x ≈ 1200–1840. Nothing important below y ≈ 900 (caption band).
- **Negative list:** no real browser chrome / VS Code activity bars (bare code surface only), no purple/blue gradients, no bokeh, no glow on content, no lazy breathing, no back-half camera push, no front-loading (code, chips and UI never appear before the VO names them), no screensaver drift, no `Math.random`.
- **Captions:** on; everything important stays in the top ~83%.

