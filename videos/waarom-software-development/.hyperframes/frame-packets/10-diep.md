# Frame packet: 10-diep

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/waarom-software-development
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/waarom-software-development/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 10 — Diep versus oppervlakkig

- status: animated
- src: compositions/frames/10-diep.html
- duration: 11.6s
- transition_in: crossfade
- scene: Split: links 12 weken copy-paste krijgt een "vervangbaar"-stempel, rechts echt begrip in groen met AI als versterker
- voiceover: "Dus ja: wie in twaalf weken wat leerde copy-pasten, mag zich zorgen maken. Dat vervangt AI. Maar echt begrijpen hoe software werkt? Dat maakt AI alleen maar sterker."
- blueprint: comparison-split (Adapt)
- focal: the two halves, right half wins
- roles: left half (cream-2) = supporting · right half (green) = foreground subject · VERVANGBAAR stamp · VERSTERKT arrow = payoff
- sfx: pop @0.96, key-press @2.56, click @5.28, whoosh-short @6.76, pop @9.52

Adapt: keep two equal halves from opposite wings + punctuating badges; no 3D tilt (flat poster).
Scene 1 (0.0–6.6s): topbar (pill `CONCLUSIE`). Left half panel (x 64-940, y 170-860) cream-2 with ink border slides in from the left @0.96: big `12 WEKEN` (display-lg) @1.32, mono `CTRL+C / CTRL+V` types on @2.56. @5.28 a pink stamp `VERVANGBAAR` (−6deg) slams across it, the panel dims to 60%.
Scene 2 (6.6–12.10s): right half panel (x 980-1856) green with ink border slides in from the right @6.76: cream Archivo `ECHT BEGRIP` (display-lg) @7.12, mono cream `HOE SOFTWARE WERKT` @8.00. @9.52 a tall ink-bordered yellow up-arrow grows inside the right panel with label `AI = VERSTERKER`; @10.96 the right panel gets the frame's hard offset shadow (it "wins"). Hold.

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
