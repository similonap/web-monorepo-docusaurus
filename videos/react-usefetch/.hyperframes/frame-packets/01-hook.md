# Frame packet: 01-hook

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 1 — Posts, spinner, fout, knop

- scene: Four small tile cards appear in a row, each a mini "scherm": a list of posts, a spinner, an error message, a Vernieuwen button. On "use fetch." they slide up and dim and the hero word `useFetch` lands below with a coral underline.
- voiceover: "Posts ophalen van een API. Met een spinner terwijl je wacht, een foutmelding als het misloopt, en een knop om te vernieuwen. We bouwen het stap voor stap, tot onze eigen hook: use fetch."
- duration: 12.4s
- transition_in: cut
- status: outline
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: The finished result, shown first
- beat: calm → reveal

narrativeRole: Opens on everything the film will build, and names the goal.
keyMessage: Fetching data properly means posts, a spinner, an error and a refresh; we end with our own hook.

- blueprint: compose
- focal: the row of four mini scherm cards, then the hero word
- roles: four tile cards (each 380×240, radius 12, hairline, mono label above each: `posts`, `loading`, `error`, `refetch`; row centred, x 140–1780 with 40px gaps, top y 300) = foreground subject · hero word `useFetch` (EB Garamond 400, ~170px, centred, y ≈ 640) = payoff · coral = underline drawn under the hero word only
- sfx: pop @0.48, pop @2.68, pop @4.48, pop @6.64, whoosh-short @11.44

Compose: locked static stage, cream ground.
Scene 1 (0.0–2.2s): on "Posts" (0.0s) nothing; on "ophalen" (0.48s) card 1 settles in (y 20→0, opacity, power3.out) showing three post `<li>` rows; on "API." (1.32s) a mono tag `GET /posts` appears above the row, centred (y ≈ 230), ink 60%.
Scene 2 (2.2–8.0s): on "spinner" (2.68s) card 2 settles in with the rotating spinner ring; on "foutmelding" (4.48s) card 3 with `Error: Something went wrong` (Inter 22px, wraps on two lines); on "knop" (6.64s) card 4 with the `Vernieuwen` button and two post rows under it; on "vernieuwen." (7.2s) the button in card 4 does a small press (scale 0.96 → 1, ink ripple).
Scene 3 (8.0–12.4s): on "stap voor stap" (8.8s / 9.32s) small mono step numbers `1` `2` `3` `4` fade in at the top-left corner of each card (stagger 0.12s); on "eigen hook:" (10.4s / 10.8s) the whole row slides up by 60px and dims to 55% (0.6s power3.out) and the `GET /posts` tag fades out; on "use" (11.44s) the hero word `useFetch` lands (y 30→0, 0.5s power3.out, whoosh-short); on "fetch." (11.76s) the coral underline draws beneath it (0.4s). Hold.
