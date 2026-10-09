# Frame packet: 03-loading

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 3 — Loading

- scene: The scherm card is empty at first ("de gebruiker ziet niets"). A `loading` state is added; `setLoading(true)` before the fetch and `setLoading(false)` after. In the mini panel `{loading && <Spinner />}` appears, and the scherm card shows the spinner.
- voiceover: "Maar zo'n fetch duurt even. En ondertussen ziet de gebruiker niets. Daarom voegen we een loading state toe. Voor de fetch zetten we loading op true, erna op false. En zolang loading true is, tonen we een spinner."
- duration: 14.24s
- transition_in: crossfade
- status: outline
- src: compositions/frames/03-loading.html
- type: feature_showcase
- persuasion: Gap, then fix
- beat: build

narrativeRole: Adds the loading state and the conditionally rendered spinner.
keyMessage: setLoading(true) before, setLoading(false) after; while loading, show a spinner.

- blueprint: compose
- focal: the `loading` lines in the code and the spinner in the scherm card
- roles: code surface (left, App.tsx, 26px/38px) = foreground subject · scherm card (right top) = supporting · mini App.tsx panel (right bottom) = supporting · chip `loading` (inside the scherm card's top-right corner, small) = supporting · coral = a thin coral underline under the empty scherm card's caption `niets…` in Scene 1 (the problem), nothing coral after that
- sfx: typing @5.84, typing @7.6, typing @10.0, pop @13.6

Compose: 60/40 like frame 2.
Code (App.tsx, excerpt):
```
const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const result: Post[] = await response.json();
      setPosts(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  return ( ⋯ );
```
Mini App.tsx (JSX):
```
{loading && <Spinner />}
<ul>
  {posts.map(post => ( ⋯ ))}
</ul>
```
Scene 1 (0.0–4.6s): kicker `✱ LADEN`; code from frame 2 on screen (lines 1, 2, 5, 6, 8–10, 12–14, 16 present; lines 3, 7, 11 are empty gaps of one line height so later lines can be inserted without reflow); scherm card visible but EMPTY; on "duurt even." (1.12s / 1.52s) a thin hairline progress bar under the scherm label grows slowly from 0 to 60% (ease "none", until 4.6s), with a mono tag `fetch…` beside it; on "ziet de gebruiker niets." (3.04s / 3.84s) an Inter 24px caption `niets…` in ink 40% appears centred in the empty card with the coral underline drawing under it (0.4s).
Scene 2 (4.6–11.2s): on "loading state" (5.84s / 6.24s) the caption, coral underline, progress bar and tag fade out and line 3 types on (amber wash on `loading`); on "Voor de fetch" (7.28s / 7.6s) line 7 `setLoading(true);` types on; on "true," (9.04s) a chip `loading: true` pops in the right column under the scherm label (x 1236, y 196, small); on "erna" (10.0s) line 11 `setLoading(false);` types on; on "false." (10.56s) the chip value swaps to `loading: false`.
Scene 3 (11.2–14.24s): on "zolang loading true is," (11.52s / 12.32s) the chip swaps back to `loading: true`, and the mini App.tsx panel settles in with its JSX, amber wash on `{loading && <Spinner />}`; on "spinner." (13.6s) the spinner ring appears centred in the scherm card and rotates for the rest of the frame (pop). Hold.
