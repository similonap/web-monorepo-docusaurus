# Frame packet: 05-fout

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/waarom-software-development
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/waarom-software-development/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 5 — Reden 3: iemand moet zien dat het fout is

- status: animated
- src: compositions/frames/05-fout.html
- duration: 18.08s
- transition_in: blur-crossfade
- scene: Een codeblok krijgt eerst een "ziet er perfect uit"-stempel, dan "fout"; drie regels worden aangeduid; slotkop over reviewen en begrijpen
- voiceover: "Drie. AI schrijft code die er perfect uitziet. En toch fout is. Een tikje onveilig, een tikje traag, of fout in dat ene randgeval. Hoe meer code AI schrijft, hoe meer we mensen nodig hebben die dat zien. En je kan niet reviewen wat je niet begrijpt."
- blueprint: compose
- focal: the code card with its stamp
- roles: number tile 03 (orange) = supporting · code card = foreground subject · three issue tags = supporting · closing headline = payoff
- sfx: pop @0.0, typing @1.28, pop @2.84, click @4.48, pop @5.96, pop @7.28, pop @9.60, whoosh-short @10.77, click @15.48

Scene 1 (0.0–4.0s): cream ground, topbar (pill `REDEN 03 / 07`). Orange number tile `03` @0.0. A cream-2 ink-bordered code card (x 96-1140, y ≈ 270-760) with a mono title bar `ai-suggestie.js`; JetBrains Mono 26px code types on @1.28 (quick, ~1.4s total, line by line):
```js
async function getUser(id) {
  const rows = await db.query(
    "SELECT * FROM users WHERE id=" + id);
  for (const u of rows)
    for (const o of allOrders) match(u, o);
  return rows[0].name;
}
```
Syntax colors from ink + accents only: keywords ink bold, strings green-dark, functions orange. @2.84 a green rotated stamp `ZIET ER PERFECT UIT ✓` (−6deg) drops on the card's top-right.
Scene 2 (4.0–10.7s): @4.48 the stamp flips (rotateY swap) into a pink stamp `FOUT` (same spot). Then three issue tags slam in at the right edge of their lines, each an ink-bordered chip with a pink left bar and the line getting a thin pink underline: line 3 `ONVEILIG` @5.96, line 5 `TRAAG` @7.28, line 6 `RANDGEVAL` @9.60.
Scene 3 (10.7–15.4s): right column (x 1240-1824): two vertical bars grow side by side, labeled in mono: `AI-CODE` grows tall @11.20; `MENSEN DIE HET ZIEN` grows equally tall @13.36 (no numbers, just bars). Small mono caption `NODIG` under the second bar @13.80.
Scene 4 (15.4–18.58s): headline across the top-right replacing the bars' area top (or a band above the code card): `JE KAN NIET REVIEWEN` @15.48 / `WAT JE NIET BEGRIJPT` @16.96, display-head, second line in an orange block with the frame's hard shadow. Hold.
