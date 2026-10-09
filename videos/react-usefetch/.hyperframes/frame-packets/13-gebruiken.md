# Frame packet: 13-gebruiken

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 13 — Gebruiken in App

- scene: App.tsx is now short: two `useFetch` calls, one with `Post[]`, one with `User[]`, then the loading/error early returns and the JSX. Right: a small diagram, one `useFetch<T>` tile with two arrows to `posts` and `users`, and the note `1× geschreven · 2× gebruikt`.
- voiceover: "In App blijft er bijna niets over. Use fetch met Post array voor de posts, en use fetch met User array voor de users. Twee keer dezelfde logica, maar maar één keer geschreven."
- duration: 11.92s
- transition_in: crossfade
- status: outline
- src: compositions/frames/13-gebruiken.html
- type: proof
- persuasion: Show the payoff
- beat: satisfaction

narrativeRole: Shows the hook in use, twice, with different types.
keyMessage: Same logic for posts and users, written once.

- blueprint: compose
- focal: the two `useFetch` calls
- roles: code surface (left, App.tsx, 24px/35px, 16 lines) = foreground subject · right column diagram = supporting: tile `useFetch<T>` (x 1336, y 260, w 404, h 90, mono 30px), two hairline arrows down to tiles `posts · Post[]` (x 1236, y 470) and `users · User[]` (x 1556, y 470) · note `1× geschreven · 2× gebruikt` (Inter 30px, y ≈ 640) · coral = the coral underline under `1×` in the note (the payoff)
- sfx: whoosh-short @0.56, typing @2.56, pop @4.68, typing @5.6, pop @7.6, pop @10.72

Compose: 60/40.
Code (App.tsx):
```
const App = () => {
  const { data: posts, loading, error, refetch } =
    useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
  const { data: users } =
    useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <button onClick={refetch}>Vernieuwen</button>
      <ul>{posts?.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
}
```
(If line 13 is wider than the panel at 24px, shorten it to `<ul>{posts?.map(post => ( ⋯ ))}</ul>`.)
Scene 1 (0.0–2.5s): kicker `✱ IN APP`; on "In App" (0.0s / 0.24s) the code surface settles in with lines 1, 6–16 already present (no type-on) and a 4-line gap after line 1; on "bijna niets over." (1.04s / 1.88s) a mono tag `16 regels` appears in the status strip (ink 60%).
Scene 2 (2.5–8.4s): on "Use fetch met Post array" (2.56s / 3.44s / 3.76s) lines 2–3 type on fast, amber wash on `Post[]`; on "posts," (4.68s) tile `useFetch<T>` + arrow + tile `posts · Post[]` appear in the right column (pop); on "use fetch met User array" (5.6s / 6.48s / 6.88s) lines 4–5 type on, wash moves to `User[]`; on "users." (7.6s) the second arrow + tile `users · User[]` (pop).
Scene 3 (8.4–11.92s): on "Twee keer" (8.56s) both arrows pulse once (amber); on "één keer geschreven." (10.72s / 11.12s) the note `1× geschreven · 2× gebruikt` appears with the coral underline under `1×` (pop). Hold.
