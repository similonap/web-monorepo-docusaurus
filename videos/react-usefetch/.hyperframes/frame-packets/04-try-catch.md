# Frame packet: 04-try-catch

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 4 — Try catch en response.ok

- scene: The body of `fetchData` is wrapped in `try { … } catch (err) { }`. Then the check `if (!response.ok) { throw new Error(...) }` types on. Right column: two status chips `404` / `500` show that fetch does not throw on them.
- voiceover: "En wat als er iets misloopt? We zetten de fetch in een try catch. Maar let op: bij een vierhonderdvier of een vijfhonderd gooit fetch zelf geen fout. Daarom kijken we naar response punt ok. Is die false, dan gooien we zelf een error."
- duration: 15.36s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-try-catch.html
- type: feature_showcase
- persuasion: The trap, then the guard
- beat: build

narrativeRole: Handles errors: try/catch plus throwing on non-2xx responses.
keyMessage: fetch does not throw on 404/500; check `response.ok` and throw yourself.

- blueprint: compose
- focal: the `if (!response.ok)` block
- roles: code surface (left, App.tsx, 24px/35px) = foreground subject · right column: a small "response" diagram = supporting: a tile card `response` (x 1236, y 232, w 604) listing three rows (mono 26px): `200  ok: true`, `404  ok: false`, `500  ok: false` · mono note `fetch gooit geen fout` · coral = the coral rough box around `if (!response.ok) {` … `}` (lines 6–8), the fix
- sfx: typing @2.0, pop @5.52, pop @6.72, typing @10.88, typing @13.76

Compose: 60/40, code left, response card right.
Code (App.tsx, excerpt):
```
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong fetching data");
      }
      const result: Post[] = await response.json();
      setPosts(result);
      setLoading(false);
    } catch (err) {

    }
  }
  fetchData();
}, []);
```
Scene 1 (0.0–4.2s): kicker `✱ FOUTEN`; the effect from frame 3 on screen without try/catch and without lines 6–8 (lines 4, 5, 9–11 sit at their final indent; gaps for lines 3, 6–8, 12–14 are reserved but empty); on "misloopt?" (1.04s) line 5 (`await fetch(url)`) gets a faint amber wash; on "try catch." (3.2s / 3.52s) lines 3 (`try {`) and 12–14 (`} catch (err) {`, empty line, `}`) type on and the body lines 4–11 get a thin amber left bar showing they are inside the try.
Scene 2 (4.2–9.8s): on "let op:" (4.44s) the response card + label `response` fade into the right column with only its header; on "vierhonderdvier" (5.52s) row `404  ok: false` slides in (pop); on "vijfhonderd" (6.72s) row `500  ok: false`; on "geen fout." (8.72s / 9.04s) the mono note `fetch gooit geen fout` appears under the card (ink 60%), and the row `200  ok: true` appears above the two others in ink 60% for contrast.
Scene 3 (9.8–15.36s): on "response punt ok." (10.88s / 11.76s) line 6 `if (!response.ok) {` types on and line 8 `}`; the `ok: false` values in the card get an amber wash; on "false," (12.96s) the coral rough box draws around lines 6–8 (0.5s); on "gooien we zelf een error." (14.0s / 14.96s) line 7 `throw new Error("Something went wrong fetching data");` types on fast (~0.012s/char). Hold.
