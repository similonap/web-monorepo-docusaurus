# Frame packet: 06-error

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 6 — Error state

- scene: A third state types on: `error`, of type `Error | null`. In the catch: `setError(err as Error)`. The mini panel adds `{error && <p>Error: {error.message}</p>}` and the scherm card shows the error message.
- voiceover: "De fout zelf willen we ook bijhouden. Dus maken we een error state, van het type Error of null. In de catch zetten we het error object. En is error niet null, dan tonen we de foutmelding."
- duration: 12.48s
- transition_in: crossfade
- status: outline
- src: compositions/frames/06-error.html
- type: feature_showcase
- persuasion: Completing the pattern
- beat: build

narrativeRole: Stores the error object in state and renders it.
keyMessage: error is Error or null; when it is not null, show it.

- blueprint: compose
- focal: the `error` state line and `setError(err as Error)`
- roles: code surface (left, App.tsx, 26px/38px) = foreground subject · chip `error: null` → `error: Error` (right column, under the scherm label) = supporting · scherm card showing the error message = supporting · mini App.tsx panel = supporting · coral = none in code; the one coral moment is a 3px coral left border on the rendered error `<p>` in the scherm card (what goes wrong, shown)
- sfx: typing @3.52, typing @7.08, pop @8.04, pop @11.76

Compose: 60/40, code left, scherm card + mini panel right.
Code (App.tsx, excerpt):
```
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<Error | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      ⋯
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }
  fetchData();
}, []);
```
Mini App.tsx (JSX):
```
{loading && <Spinner />}
{error && <p>Error: {error.message}</p>}
<ul>{posts.map( ⋯ )}</ul>
```
Scene 1 (0.0–2.5s): kicker `✱ ERROR STATE`; code on screen without lines 3 and 10 (empty gaps reserved); scherm card empty; on "fout" (0.32s) the empty `catch (err) {` block gets a faint amber wash; on "bijhouden." (1.72s) nothing new (hold).
Scene 2 (2.5–6.6s): on "error state," (3.52s / 3.84s) line 3 types on up to `useState<` ; on "type Error of null." (4.72s / 5.12s / 5.92s) `Error | null>(null);` types on with an amber wash on `Error | null`; a chip `error: null` pops in the right column (x 1236, y 196).
Scene 3 (6.6–9.0s): on "catch" (7.08s) line 10 `setError(err as Error);` types on; on "error object." (8.04s / 8.24s) the chip value swaps to `error: Error`.
Scene 4 (9.0–12.48s): on "niet null," (10.0s / 10.32s) the mini App.tsx panel settles in with amber wash on line 2; on "foutmelding." (11.76s) the scherm card shows `Error: Something went wrong fetching data` (Inter 24px, two lines) with the 3px coral left border (pop). Hold.
