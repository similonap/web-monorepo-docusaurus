# Frame packet: 03-kopieren

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-props/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 3 — Kopiëren en plakken

- scene: The badge div is copied and pasted twice in App.tsx (now wrapped in a fragment `<>…</>`). The scherm card fills with three identical green "Nieuw" strips.
- voiceover: "Nu wil je diezelfde badge ook ergens anders tonen. En nog ergens anders. Dus je kopieert de div, en plakt hem erbij. En nog eens."
- duration: 9.18s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-kopieren.html
- type: pain_point
- persuasion: The plausible shortcut, demonstrated
- beat: routine

narrativeRole: Shows the copy-paste reflex: the same block appears three times.
keyMessage: Copy-paste gives you three identical badges, and three copies of the code.

- blueprint: compose
- focal: the code surface growing with pasted blocks
- roles: code surface (left, App.tsx, 26px/38px, top 170, height 720) = foreground subject · scherm card filling with strips (right) = supporting · oversized cursor + small mono chips `⌘C` / `⌘V` near the cursor = supporting actor · coral: a thin coral left-edge bar beside each pasted block (the second and third) = the one voltage (the copies)
- sfx: click-soft @5.16, whoosh-short @6.4, whoosh-short @7.6

Compose: same 60/40 layout as frame 2 (continuity).
Code (App.tsx) final state:
```
const App = () => {
  return (
    <>
      <div style={{ color: 'white', background: 'green' }}>
        Nieuw
      </div>
      <div style={{ color: 'white', background: 'green' }}>
        Nieuw
      </div>
      <div style={{ color: 'white', background: 'green' }}>
        Nieuw
      </div>
    </>
  );
}
```
Scene 1 (0.0–3.0s): kicker `✱ NOG EENS`; the frame-2 code is on screen (one div, already wrapped: lines 1–6 and 13–15, with `<>` / `</>`); scherm card shows one strip. On "ergens anders tonen" (1.68s / 2.44s) a dashed hairline empty slot appears under the first strip in the scherm card (where badge 2 should go).
Scene 2 (3.0–4.8s): on "nog ergens anders" (3.6s) a second dashed slot appears under it.
Scene 3 (4.8–7.6s): on "kopieert" (5.16s) the cursor drags a selection over lines 4–6 (amber selection wash), chip `⌘C` pops beside it; on "plakt" (6.4s) chip `⌘V`, lines 7–9 appear at once (paste, no type-on: 0.2s fade + y 8→0), the code below shifts down; at the same moment the first dashed slot in the scherm card fills with a green "Nieuw" strip; coral left-edge bar beside lines 7–9.
Scene 4 (7.6–9.18s): on "En nog eens" (7.6s / 7.96s) lines 10–12 paste in the same way, coral bar beside them, the second slot fills. Hold.
