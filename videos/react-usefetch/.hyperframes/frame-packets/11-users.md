# Frame packet: 11-users

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 11 — Ook users?

- scene: The whole App.tsx shrinks into a dim wall of code labelled `posts`. A second copy slides in beside it labelled `users`, with a coral border; on each named word a chip lands on it: `loading`, `error`, `cancelled`, `trigger`. On "Uiteraard niet." the copy fades and the hero `custom hooks` lands.
- voiceover: "Nu willen we ook users ophalen. Moeten we dan alles opnieuw schrijven? Loading, error, cancelled, trigger? Uiteraard niet. Daar zijn custom hooks heel handig voor."
- duration: 10.88s
- transition_in: blur-crossfade
- status: outline
- src: compositions/frames/11-users.html
- type: pain_point
- persuasion: The copy-paste temptation, rejected
- beat: turn

narrativeRole: Motivates the custom hook: a second fetch would duplicate everything.
keyMessage: Don't copy the fetch logic; put it in a custom hook.

- blueprint: compose
- focal: the duplicated code block, then the hero words
- roles: code block A (x 140, y 200, w 640, h 600, navy, title bar `App.tsx · posts`, ~22 lines of the full component at 15px mono, cream@70%; not meant to be read, just a recognisable wall of the code built so far) = supporting · code block B (x 860, y 200, same size, title bar `App.tsx · users`, coral 2px border) = foreground subject in Scenes 1–2 · four mono chips stacking on block B's right edge (x 1540, y 300/380/460/540): `loading`, `error`, `cancelled`, `trigger` · hero `custom hooks` (EB Garamond 400, ~150px, centred, y ≈ 470) = payoff in Scene 3 · coral = block B's border only
- sfx: whoosh-short @0.8, pop @4.24, pop @5.04, pop @5.92, pop @6.6, whoosh-short @7.28

Compose: two blocks side by side, then a centred statement.
Block A/B content (same code for both; in B every `posts`/`Post` reads `users`/`User` and the url ends with `/users`): the full App component from frames 2–9 (states posts/loading/error/trigger, the useEffect with cancelled, try/catch/finally, response.ok, cleanup, `}, [trigger]);`).
Scene 1 (0.0–4.0s): kicker `✱ OOK USERS`; block A is on screen at 0.0s (settled); on "users" (0.8s) block B slides in from the right (x +200→0, power3.out, whoosh-short) with the coral border; on "alles opnieuw schrijven?" (2.76s / 3.36s) block B's lines get a faint amber wash top to bottom (0.6s sweep).
Scene 2 (4.0–7.2s): on "Loading," (4.24s), "error," (5.04s), "cancelled," (5.92s), "trigger?" (6.6s) chip after chip pops at block B's right edge (each with a hairline pointer to the matching line in block B).
Scene 3 (7.2–10.88s): on "Uiteraard" (7.28s) block B and the chips slide out to the right and fade (0.5s, whoosh-short), block A shrinks to 70% and moves left dimmed to 40%; on "niet." (8.0s) nothing more; on "custom hooks" (9.2s / 9.6s) the hero `custom hooks` lands centred-right (y 30→0, 0.5s power3.out). Hold.
