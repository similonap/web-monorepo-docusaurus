# Frame packet: 02-fetch

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 2 — Een eenvoudige fetch

- scene: App.tsx types on: a `url` constant, a `posts` state, and a `useEffect` with an async `fetchData` that fetches, reads the JSON and calls `setPosts`. The mini panel shows the JSX that maps the posts; the scherm card fills with post titles.
- voiceover: "We beginnen eenvoudig. In App maken we een state posts. In een use effect roepen we fetch aan, met de url van JSON placeholder. Het resultaat zetten we met set posts in de state, en de posts verschijnen op het scherm."
- duration: 14.4s
- transition_in: crossfade
- status: outline
- src: compositions/frames/02-fetch.html
- type: setup
- persuasion: Concrete starting point
- beat: orientation

narrativeRole: Sets up the baseline: a fetch inside a useEffect that stores the posts in state.
keyMessage: useEffect + fetch + setPosts: the posts appear.

- blueprint: compose
- focal: the code surface typing the effect
- roles: code surface (left, App.tsx, 26px/38px) = foreground subject · scherm card (right, top) with post list = supporting · mini App.tsx panel (right, bottom) with the JSX = supporting · amber washes as each part is named · coral: none in the code (calm setup); the one coral moment is the kicker ✱
- sfx: typing @1.84, typing @4.56, typing @9.6, pop @12.92

Compose: 60/40, code left, right column scherm card + mini panel.
Code (App.tsx):
```
const url = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result: Post[] = await response.json();
      setPosts(result);
    }
    fetchData();
  }, []);

  return ( ⋯ );
}
```
Mini App.tsx (JSX):
```
<ul>
  {posts.map(post => (
    <li key={post.id}>{post.title}</li>
  ))}
</ul>
```
Scene 1 (0.0–4.2s): kicker `✱ DE BASIS`; on "eenvoudig." (0.64s) the code surface enters (power3.out) with title bar `App.tsx`, lines 3, 15, 16 already in place (`const App = () => {`, `  return ( ⋯ );`, `}`); on "App" (1.84s) `App` on line 3 gets an amber wash; on "state posts." (2.8s / 3.28s) line 4 types on, wash moves to `posts`.
Scene 2 (4.2–9.2s): on "use effect" (4.56s) lines 6 and 13 type on (`useEffect(() => {` / `}, []);`), then lines 7, 11, 12 (`const fetchData = async () => {`, `}`, `fetchData();`); on "fetch" (5.76s) line 8 types on with amber wash on `fetch(url)`; on "url" (6.96s) line 1 types on at the top (the URL string in teal), amber wash on the URL; on "JSON placeholder." (7.76s / 8.24s) the amber wash stays on the URL (no extra tag).
Scene 3 (9.2–14.4s): on "resultaat" (9.6s) line 9 types on; on "set posts" (10.72s / 11.04s) line 10 types on with amber wash on `setPosts(result)`; on "posts verschijnen" (12.92s / 13.2s) the scherm label + card fade in and the five post rows settle in one after another (stagger 0.08s, pop), and the mini App.tsx panel settles under it with the JSX (no type-on, 0.4s fade + y 10→0). Hold.
