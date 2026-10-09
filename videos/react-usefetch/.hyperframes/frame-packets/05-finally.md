# Frame packet: 05-finally

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 5 — Finally

- scene: An error jumps from the `throw` straight to `catch`: an arrow skips `setLoading(false)`, which gets the coral box, and the scherm card's spinner keeps turning. Then the line moves into a new `finally` block.
- voiceover: "Maar loopt het mis, dan springen we meteen naar de catch. Set loading false wordt overgeslagen, en de spinner blijft draaien. Daarom verhuist set loading naar de finally. Die loopt altijd, of het nu lukt of niet."
- duration: 13.6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/05-finally.html
- type: pain_point
- persuasion: Show the bug, then move one line
- beat: twist → fix

narrativeRole: Shows why setLoading(false) belongs in finally.
keyMessage: finally always runs, success or error.

- blueprint: compose
- focal: the `setLoading(false)` line and its move into `finally`
- roles: code surface (left, App.tsx, 24px/35px) = foreground subject · jump arrow (ink, 2px, drawn SVG path in the gutter right of the code, from line 7 `throw` down to line 12 `catch`) = supporting · scherm card (right) with the spinner = supporting · two small mono chips `lukt ✓` and `mislukt ✗` under the scherm card = supporting · coral = rough box around the skipped `setLoading(false)` (Scene 1–2); when it moves, the coral goes away (one coral moment)
- sfx: whoosh-short @1.6, whoosh-short @8.4, pop @11.44, pop @12.96

Compose: 60/40.
Code (App.tsx, excerpt, final state):
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
    } catch (err) {

    } finally {
      setLoading(false);
    }
  }
  fetchData();
}, []);
```
Start state: same as frame 4's end state (line 11 `setLoading(false);` inside the try, after `setPosts(result);`; no finally; total 17 lines).
Scene 1 (0.0–3.4s): kicker `✱ FINALLY`; scherm card right with the spinner turning; on "loopt het mis," (0.4s / 0.8s) line 7 (`throw ...`) gets an amber wash; on "springen" (1.6s) the jump arrow draws from line 7 down past lines 8–11 to `catch` (line 12) (0.6s, whoosh-short); on "catch." (2.92s) `catch (err)` gets an amber wash.
Scene 2 (3.4–7.9s): on "Set loading false" (3.6s / 4.32s) line 11 `setLoading(false);` gets the coral rough box; on "overgeslagen," (4.96s) it dims to 40%; on "spinner blijft draaien." (6.16s / 7.04s) a mono note `loading: true` appears under the scherm card (the spinner keeps turning).
Scene 3 (7.9–13.6s): on "verhuist" (8.4s) the coral box fades, line 11 lifts out and slides down (FLIP, 0.6s power3.out) while `} finally {` and `}` type in after the catch block and the line lands inside finally (lines reflow to the final state above), whoosh-short; on "finally." (9.92s) `finally` gets an amber wash; on "altijd," (11.44s) the arrow fades and chip `lukt ✓` pops under the scherm card with a thin hairline connector to the finally block's right edge; on "niet." (13.2s) chip `mislukt ✗` pops next to it with its own connector to the same spot (pop at 12.96). Hold.
