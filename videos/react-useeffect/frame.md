---
version: 1
name: TS light — Frame (video / frame layer)
description: >
  Calm, light video system that sits inside the course site (Docusaurus, light code blocks).
  Subtle white ground, very light slate panels with hairlines, one accent: TypeScript blue
  #3178C6. Inter for all text, JetBrains Mono for code. A light code surface (like the course's
  code blocks), soft 8px radii, almost no shadow. No logos, no decorative shapes.
unit: the frame, 1920×1080
principle: quiet and clear · white space · blue marks what matters · one focal point per frame

colors:
  ground: "#FFFFFF"          # every frame
  ground-subtle: "#F8FAFC"   # optional very faint panel / page band
  panel: "#F1F5F9"           # cards, chips (slate-100)
  hairline: "#E2E8F0"        # 1px borders (slate-200)
  ink: "#1E293B"             # all text (slate-800)
  ink-soft: "#475569"        # secondary text (slate-600)
  muted: "#94A3B8"           # line numbers, upcoming caption words, dim labels (slate-400)
  blue: "#3178C6"            # TypeScript blue: THE accent
  blue-dark: "#235A97"       # blue text on light, pressed states
  blue-tint: "#EAF2FB"       # blue wash / selected chip background
  error: "#D14343"           # ONLY for error output and the "this goes wrong" mark, used sparingly

code-surface:                # light, like the course code blocks
  background: "#F8FAFC"
  border: "1px solid #E2E8F0"
  title-bar: "#F1F5F9 with 1px #E2E8F0 bottom border; file name Inter 500 20px #475569 with a small TS-blue square (10px, radius 2) before it"
  status-bar: "#F1F5F9, 1px top border, JetBrains Mono 18px #94A3B8"
  text: "#1E293B"
  line-numbers: "#94A3B8"
  keyword: "#235A97"         # const let async await try catch finally if return throw new export function interface
  string: "#0F7B6C"          # teal-green
  function-number: "#9A5B13" # functions, component names, numbers, true/false (warm brown)
  type: "#3178C6"            # types: Post[], boolean, T, Error | null (TS blue)
  punctuation-jsx: "#64748B"
  fold-marker: "#94A3B8"
  highlight: "rgba(49,120,198,0.12)"   # blue wash
  key-mark: "2px solid #3178C6 box, radius 6px (fix / key line)"
  wrong-mark: "2px solid #D14343 box or underline, radius 6px (problem frames only)"

typography:
  fonts: "Inter 400/500/700 (assets/fonts/Inter-*-normal.woff2), JetBrains Mono 400/500 (assets/fonts/JetBrains_Mono-*-normal.woff2)"
  hero:     { fontFamily: "Inter", px: 150-180, weight: 700, tracking: "-0.035em", lineHeight: 1.0, case: "as written" }
  headline: { fontFamily: "Inter", px: 72-96, weight: 700, tracking: "-0.025em" }
  statement:{ fontFamily: "Inter", px: 48-64, weight: 500, tracking: "-0.015em" }
  body:     { fontFamily: "Inter", px: 28-34, weight: 400, lineHeight: 1.45 }
  label:    { fontFamily: "Inter", px: 20-22, weight: 600, tracking: "0.12em", upper: true, color: "#64748B" }
  kicker:   { fontFamily: "Inter", px: 22, weight: 600, tracking: "0.14em", upper: true, color: "#3178C6", mark: "a 28×4px blue bar before it" }
  code:     { fontFamily: "JetBrains Mono", px: 24-26 }
  chip:     { fontFamily: "JetBrains Mono", px: 24, weight: 500 }

shape:
  radius: { sm: 6px, md: 8px, lg: 12px }
  border: "1px solid #E2E8F0"
  shadow: "0 1px 2px rgba(15,23,42,0.06) at most; no other shadows"

layout:
  kicker: "top-left at (80, 84)"
  code-surface: "left, x 80, width ~1060, top ~170, bottom ≤ 890"
  right-column: "x 1236–1840"
  caption-band: "y 900–1080, keep empty"

components:
  scherm-card: "white card, 1px hairline, radius 12, label above it 'scherm' (label style); content Inter 24px ink; list rows with a 8px blue round dot"
  mini-panel: "small light code panel like the code surface (title bar 40px)"
  chip: "panel #F1F5F9, 1px hairline, radius 8, JetBrains Mono 24px ink; optional key label (Inter 600 18px uppercase muted); selected/new = blue-tint background + blue border; unwanted = error-red 2px border; stopped = line-through + 35% opacity"
  button-ui: "TS-blue filled button, white Inter 600 22px, radius 6"
  render-tag: "blue-tint pill, blue-dark JetBrains Mono 20px, radius 999"
  spinner: "56px ring, 5px stroke #E2E8F0, 90° #3178C6 arc, round caps"
  error-text: "Inter 500 ink with a 4px #D14343 left bar, on a #FEF2F2-free white (no pink fills)"
  hero-underline: "6px TS-blue bar, radius 3, wipes in from the left"
  diagram: "panels #F1F5F9 + hairline, lines 2px #94A3B8, arrowheads small and solid, the key element blue"

motion:
  feel: "calm: power3.out settles with long tails, small y offsets (10–20px), no bounce, holds still"
  sync: "every reveal on its spoken word (timings from audio_meta.json)"

do-not:
  - logos of any kind, decorative shapes/shards, big coloured blocks behind text
  - cream/beige, coral, AP red, serif or condensed display fonts
  - dark code surfaces
  - gradients, glow, heavy shadows
  - red anywhere except error output / the wrong-mark
  - anything important below y 900
