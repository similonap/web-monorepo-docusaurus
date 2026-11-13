---
format: 1920x1080
duration: 189s
mode: autonomous
message: "Met fetch vraag je data op bij een server, in twee stappen: await fetch geeft een Response, await response.json() geeft de data die je met een interface beschrijft. De catch vangt enkel netwerkfouten: controleer response.ok. Meerdere requests laat je tegelijk lopen met Promise.all."
arc: how-to-process
audience: "Studenten webontwikkeling die promises, Promise.all en async/await kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Same series as `../ts-promises`, `../ts-promise-all` and `../ts-async-await`. **Everything in the "Video direction" section of `../ts-promises/STORYBOARD.md` applies** (reference frame `../react-usefetch/compositions/frames/02-fetch.html`, the TS LIGHT block, the **PROMISE CLIP** CSS block which you copy verbatim, console card, state chip, code style, motion, negative list). Read it first. The most recent built sibling is the best model for structure and helpers: `../ts-async-await/compositions/frames/14-try-catch.html` (code + chips + console; copy its whole `<style>` block up to and including the PROMISE CLIP block **verbatim**, and its `typeLine` / `washOn` / `washOff` helpers), `../ts-async-await/compositions/frames/06-geval-2.html` (`gepauzeerd` tag, row swaps, cut continuity), `../ts-async-await/compositions/frames/15-promise-all.html` (wide code panel on top, timeline card below), `../ts-promise-all/compositions/frames/04-tegelijk.html` (timeline rows, bars, clock), `../ts-async-await/compositions/frames/01-hook.html` (hero word with blue bar), `../ts-async-await/compositions/frames/16-samenvatting.html` (recap).
- **Course page:** `docs/nodejs-+-typescript/asynchroon-programmeren/fetch.md`. The code on screen is the code of that page (IIFE, single-quoted URL, `catch (error: any)`), so a student recognises it and can copy it from the paused video. All code was run with tsc 7 + node against the real API; the console output below is the real output. Do not change code or output.
- **The thread of the film: `jouw programma` ⇄ `server`.** A request travels from the program to the server, a response travels back. This picture returns in frames 1, 3, 4, 7, 8 and 9, always drawn with the **NET CLIP** kit below (cards, thin wires, pill-shaped packets). No illustrations, icons, emoji, clouds, globes or device drawings.
- **Composition contract** (HyperFrames): the file is one `<template>` holding `<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>`, one `<style>`, the `#root` div (`data-composition-id="<frame id>" data-width="1920" data-height="1080" data-duration="<DUR>"`) and one `<script>`. Inside `#root`: a white `ts-bg clip` on track 0 and a `ts-stage clip` on track 1, both `data-start="0" data-duration="<DUR>"`. One paused GSAP timeline registered as `window.__timelines["<frame id>"]`, ending with `tl.set({}, {}, DUR)`. Everything visible is a function of timeline time: no `Date.now()`, `Math.random()`, timers, network, `repeat: -1`. Never tween `display` / `visibility`; animate `opacity` and transforms (not `left` / `top` / `width` / `height`). No CSS `transform` on an element GSAP transforms. Asset paths root-relative (`assets/fonts/...`). Ids are prefixed per frame (`f03-...`); line-number spans keep the class `ts-ln` (the player uses it to copy code without line numbers). Do not add `data-hf-id` attributes.
- **Timing:** all times are seconds from the frame start (= voice start). Every reveal lands on the spoken word that names it; never show something before the voice names it. The frame itself does not fade out (the root does the transitions). No sfx inside frames (`sfx:` lines are read by `build.py`).
- **Colour discipline:** TS blue is the only accent. Red `#D14343` only thin and sparing for what goes wrong (rejected, `404`, `ok: false`, error output, the wrong-mark), and never a red and a blue key moment at the same instant: fade blue marks and washes out before red appears.
- **Type:** Inter for all non-code text, JetBrains Mono for code, chips, packets and console output. Readable text ≥ 27px except mono chips / console / packets (20-24px). No em-dashes in visible text. Dutch UI text, English code.

### Layouts

- **Layout W1 (wide, 26px)** for frames 3, 4, 5, 6 and 10: code panel x 80, top 170, width 1760, height 312 (5 rows of 38px; `.ts-code` 26px / 38px exactly as in the sibling). File name `index.ts`. One mono char = 15.6px; text starts at x 76 inside the panel.
- **Layout W2 (wide, 24px)** for frames 7, 8, 9: code panel x 80, top 170, width 1760, height 482 (10 rows of 36px). Override in the frame's own rules: `.ts-code { font-size: 24px; line-height: 36px; }`, `.ts-row { height: 36px; }`, caret height 25px; `FS = 24` in the helpers. One mono char = 14.4px.
- **Layout T (24px + timeline)** for frames 11 and 12: code panel x 80, top 170, width 1160, height 626 (14 rows of 36px, same overrides as W2); right column x 1280-1840.
- Nothing below y 880 (caption band).

### NET CLIP block (copy verbatim after the PROMISE CLIP block)

```css
    /* ---- NET CLIP: request / response picture of the fetch video ---- */
    /* a party (jouw programma / server): white card with a role and a mono caption */
    .nc-node { position: absolute; box-sizing: border-box; background: var(--ts-ground); border: 1px solid var(--ts-hairline); border-radius: 12px; box-shadow: var(--ts-shadow); display: flex; flex-direction: column; justify-content: center; padding: 0 26px; }
    .nc-node-role { font-family: var(--ts-sans); font-weight: 600; font-size: 27px; line-height: 1.2; color: var(--ts-ink); white-space: nowrap; }
    .nc-node-sub { font-family: var(--ts-mono); font-size: 18px; line-height: 1.2; color: var(--ts-label); margin-top: 8px; white-space: nowrap; }
    /* wire: thin line with a small solid head; request points right, response (--back) points left */
    .nc-wire { position: absolute; height: 2px; background: var(--ts-muted); transform-origin: left center; }
    .nc-wire::after { content: ""; position: absolute; right: -2px; top: -6px; border-left: 12px solid var(--ts-muted); border-top: 7px solid transparent; border-bottom: 7px solid transparent; }
    .nc-wire--back { transform-origin: right center; }
    .nc-wire--back::after { right: auto; left: -2px; border-left: none; border-right: 12px solid var(--ts-muted); }
    /* packet: the pill that travels over a wire (GSAP moves it with x) */
    .nc-packet { position: absolute; box-sizing: border-box; height: 40px; padding: 0 16px; display: inline-flex; align-items: center; background: var(--ts-blue-tint); border: 1px solid var(--ts-blue); border-radius: 999px; font-family: var(--ts-mono); font-size: 20px; font-weight: 500; color: var(--ts-blue-dark); white-space: nowrap; opacity: 0; }
    .nc-packet--error { background: var(--ts-ground); border: 2px solid var(--ts-error); color: var(--ts-error); }
    /* response card: what `await fetch(...)` gives you, one row per property */
    .nc-resp { position: absolute; box-sizing: border-box; background: var(--ts-ground); border: 1px solid var(--ts-hairline); border-radius: 12px; box-shadow: var(--ts-shadow); padding: 12px 26px; }
    .nc-resp-row { position: relative; height: 48px; display: flex; align-items: center; font-family: var(--ts-mono); font-size: 24px; color: var(--ts-ink); white-space: nowrap; }
    .nc-resp-row + .nc-resp-row { border-top: 1px solid var(--ts-hairline); }
    .nc-resp-key { flex: 0 0 130px; color: var(--ts-label); }
    .nc-resp-dim { font-family: var(--ts-sans); font-size: 22px; color: var(--ts-muted); }
```

- **Nodes.** `jouw programma` (sub `index.ts`) on the left, `server` (sub `jsonplaceholder.typicode.com`) on the right. A packet rides centred on its wire (packet top = wire top − 19). A packet "travels" = opacity 0 → 1 (0.2s) at the sender's edge, then `x` to the receiver's edge (`power2.inOut`, duration given per frame), then it fades out (0.2s) as it reaches the card. Wires are present with the nodes.
- **Lower area of W1** (frames 3 and 4; frame 5 and 6 use parts of it): node `jouw programma` left 80, top 540, width 260, height 120; node `server` left 780, top 540, width 380, height 120; request wire left 364, top 575, width 392; response wire (`nc-wire--back`) left 364, top 625, width 392. Packets travel between x 372 and x 748 minus their own width. Console: label `console` (`.ts-label`) at (80, 716), card `.pc-console` left 80, top 756, width 1080, height 100, padding 28px 26px; its lines use 22px mono (the title is 72 characters). Right column: label `response` at (1236, 520), `.nc-resp` card left 1236, top 560, width 604 (three rows: `status`, `ok`, `body`); state chip (`.ts-chip.pc-state`) left 1236, top 770.
- **Lower area of W2** (frames 7, 8, 9): node `jouw programma` left 80, top 690, width 260, height 100; node `server` left 780, top 690, width 380, height 100; request wire left 364, top 715, width 392; response wire left 364, top 765, width 392. Chips row at top 816 (first chip left 80). Right column: label `console` at (1236, 690), `.pc-console` left 1236, top 730, width 604, height 150.
- **`gepauzeerd` tag** (as in `../ts-async-await`): a `.ts-tag` pill placed right after the text of the `await` row, and a dashed 2px `#94A3B8` left bar on that row inside the code panel.
- **Promise state chip:** key in mono without uppercase (class as `.f12t-key` in the sibling), value `pending` → `fulfilled` / `rejected` with the swap motion of the series.

## Frame 1 — Hook: request en response

- id: 01-hook
- duration: 12.55s
- transition_in: cut
- sfx: pop@0.36, pop@0.96, pop@3.28, whoosh-short@5.44, whoosh-short@8.0, pop@9.0, pop@10.88
- voiceover: "De data die je programma nodig heeft, staat vaak op een server. Je stuurt een vraag, de request, en je krijgt een antwoord, de response. In TypeScript doe je dat met fetch."
- focal: a request travels to the server, a response comes back; then the hero word `fetch`.
- layout: node `jouw programma` (sub `index.ts`) left 80, top 230, width 420, height 200. Node `server` (sub `jsonplaceholder.typicode.com`) left 1420, top 230, width 420, height 200. Request wire left 524, top 290, width 872; response wire (`nc-wire--back`) left 524, top 370, width 872. Three data chips (`.ts-chip`, mono 22px, height 44: `posts`, `users`, `comments`) in a row inside the server card's lower half (top 350, starting left 1446, 10px gaps; make them fit inside the card, shrink padding if needed) and the node's role / sub text sit in the upper half (use `justify-content: flex-start; padding-top: 30px` on this node). In the programma node's lower half a chip `data` → `100 posts` (key `data`, value mono) at left 106, top 350, hidden until 9.0. Hero `fetch` (`.ts-hero`, 168px) at left 80, top 560; blue bar (`.ts-hero-bar`) under it at top 752, width = the word's width.
- shots:
  - 0.0-3.9: kicker `fetch` (0.1). "data" (0.36): the three data chips pop in (stagger 0.08s) at their place, without a card around them yet. "programma" (0.96): the `jouw programma` node fades up (y 12 → 0, 0.5s). "server" (3.28): the `server` node fades up around the chips (the chips stay above it; z-index).
  - 3.9-9.1: "vraag" (4.61): the request wire draws (scaleX 0 → 1, 0.5s). "request" (5.44): a packet with the text `request` travels from the program to the server (5.44-6.5). "antwoord" (7.16): the response wire draws (from the server side). "response" (8.00): a packet `response` travels back (8.0-9.0). At 9.0 the chip `data` / `100 posts` pops in inside the programma node (`ts-chip--new` look).
  - 9.1-end: "fetch" (10.88): the hero word lands (opacity 0 → 1, y 24 → 0, 0.6s power3.out), its bar wipes in at 11.1 (0.5s). Hold.

## Frame 2 — JSON en interface

- id: 02-json-interface
- duration: 16.31s
- transition_in: blur-crossfade
- sfx: pop@1.52, pop@4.48, pop@8.88, typing@9.76, typing@11.12, pop@12.28, typing@13.04, typing@13.92, pop@14.84
- voiceover: "Als voorbeeld vragen we een lijst van posts op. De server antwoordt met JSON: een array van objecten. Die data beschrijf je met een interface: user id en id zijn een number, title en body een string."
- focal: every JSON key gets its line in `interface Post`.
- layout: request chip (`.ts-chip`, key `GET`, value `https://jsonplaceholder.typicode.com/posts`) at left 80, top 170. JSON panel (`.ts-code-surface`, title `antwoord van de server`, status `JSON · 100 posts`) left 80, top 250, width 900, height 502 (10 rows, 26px / 38px). Interface panel (title `index.ts`, status `index.ts · interface`) left 1040, top 250, width 800, height 350 (6 rows).
- JSON rows (keys and string values `ts-str`, numbers `ts-fn`, brackets `ts-punct`, `⋯` `ts-fold`; the `…` inside the strings is part of the string):
  ```
  1  [
  2    {
  3      "userId": 1,
  4      "id": 1,
  5      "title": "sunt aut facere repellat…",
  6      "body": "quia et suscipit suscipit…"
  7    },
  8    { "userId": 1, "id": 2, ⋯ },
  9    ⋯
  10 ]
  ```
- interface rows:
  ```
  1  interface Post {
  2      userId: number;
  3      id: number;
  4      title: string;
  5      body: string;
  6  }
  ```
- shots:
  - 0.0-3.1: kicker `JSON en interface`. "lijst" (1.52): the request chip pops in. "posts" (2.08): wash on `/posts` in the chip (off 3.1).
  - 3.1-7.1: "JSON" (4.48): the JSON panel fades up (y 16 → 0, 0.5s) with all rows. "array" (5.52): wash on the `[` of row 1 and the `]` of row 10. "objecten" (6.36): a block wash behind rows 2-7 (the first object). All off at 7.1.
  - 7.1-end: "interface" (8.88): the interface panel fades up; rows 1 and 6 type (8.9-9.5). "user id" (9.76): `    userId` types on row 2 and the JSON key `"userId"` (row 3) gets a wash. "id" (11.12): `    id` types on row 3, wash on the JSON key `"id"` (row 4). "number" (12.28): `: number;` types on rows 2 and 3 at the same time (0.3s) and the JSON values `1` on rows 3 and 4 get a wash. "title" (13.04): `    title` on row 4 + wash on `"title"` (JSON row 5). "body" (13.92): `    body` on row 5 + wash on `"body"` (JSON row 6). "string" (14.84): `: string;` types on rows 4 and 5 and the two JSON string values get a wash. Washes stay. Hold.

## Frame 3 — await fetch geeft een Response

- id: 03-fetch
- duration: 14.55s
- transition_in: push-slide
- sfx: typing@0.1, typing@0.96, whoosh-short@2.28, pop@3.0, pop@4.32, whoosh-short@5.68, pop@6.92, pop@10.4, pop@12.64
- voiceover: "Fetch krijgt de URL, en geeft meteen een promise terug. Met await wacht je op het antwoord: een Response object. Daarin zie je al de statuscode, tweehonderd. Maar de inhoud is nog niet gelezen."
- focal: `await fetch(...)` gives a `Response`: the status is there, the body is not read yet.
- built together with frames 4 and 5 (same code panel and lower area; frames 3 → 4 → 5 are joined by cuts, so each starts on the exact end state of the previous one).
- layout: W1 with its lower area. Response card (`.nc-resp`, width 604) with two rows: `status` and `body`. State chip key `fetch(…)`.
- code (status `index.ts · fetch`), final state of this frame (rows 3 and 4 are empty, their line numbers are shown):
  ```
  1  (async function () {
  2      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  3
  4
  5  })();
  ```
  Row 2 is built **from the inside out** (the conceptual order: the call, then the wait, then the result). Each part types at its final column: `fetch('https://jsonplaceholder.typicode.com/posts');` (col 27) first, later `await ` (cols 21-26), later `const response = ` (cols 4-20). Keep the spans in reading order in the DOM (copying the paused code must give the normal line).
- shots:
  - 0.0-1.9: kicker `await fetch`. Rows 1 and 5 present; the two nodes and both wires fade up at 0.2. "Fetch" (0.0): `fetch(` types (0.1-0.3). "URL" (0.96): the string `'https://jsonplaceholder.typicode.com/posts'` and `);` type (0.96-1.7, 0.016s/char) with a wash on the string (off 1.9).
  - 1.9-4.0: "meteen" (2.28): the packet `GET /posts` leaves the program and travels to the server (2.28-3.5). "promise" (3.00): the state chip pops in (`pending`).
  - 4.0-6.5: "await" (4.32): `await ` types in (4.32-4.5) with a wash (off 6.4). "wacht" (5.04): the `gepauzeerd` tag + dashed bar on row 2. "antwoord" (5.68): the packet `200 OK` travels back to the program (5.68-6.8).
  - 6.5-8.1: "Response" (6.92): the state chip swaps to `fulfilled` (blue look); the tag and dashed bar fade out; `const response = ` types in (6.92-7.3); the label `response` and the response card fade up with the keys `status` and `body` and no values yet.
  - 8.1-end: "Daarin" (8.24): wash on `response` in row 2 (off 9.2). "tweehonderd" (10.40): the value `200` lands in the `status` row, with a `ts-mark` around that row (off 11.3). "nog niet" (12.64): the value `nog niet gelezen` (`.nc-resp-dim`) lands in the `body` row. Hold.

## Frame 4 — await response.json() geeft de data

- id: 04-json
- duration: 15.27s
- transition_in: cut
- sfx: typing@1.44, pop@3.6, pop@5.12, pop@8.88, pop@9.92, typing@11.24, typing@12.64, typing@13.76, pop@14.3
- voiceover: "De inhoud lees je met response punt json. Die leest de body, en zet de JSON om naar objecten. Ook dat duurt even, dus ook json geeft een promise terug. Vandaar de tweede await. Nu pas heb je de posts."
- focal: reading the body takes time too, so a second `await`; then the posts are there.
- start: the exact end state of frame 3.
- code, final state:
  ```
  1  (async function () {
  2      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  3      const posts: Post[] = await response.json();
  4      console.log(posts[0].title);
  5  })();
  ```
  Row 3 is also built from the inside out: `response.json();` (col 32) first, then `await ` (cols 26-31), then `const posts: Post[] = ` (cols 4-25).
- console line (22px mono): `sunt aut facere repellat provident occaecati excepturi optio reprehenderit`
- shots:
  - 0.0-3.3: the kicker text swaps to `response.json()` (0.1); the state chip of frame 3 fades out (0.3). "inhoud" (0.24): `ts-mark` around the `body` row of the response card (off 3.3). "response punt json" (1.44): `response.json();` types on row 3 (1.44-2.2) with a wash (off 3.3).
  - 3.3-6.7: "leest" (3.60): the `body` value swaps to `wordt gelezen` and a 3px blue progress line starts to fill along the bottom of the `body` row (scaleX 0 → 1, linear, 3.6 → 9.9). "JSON" (5.12): a `.pc-note` under the card (left 1236, top 700): `JSON-tekst → objecten`.
  - 6.7-10.5: "ook json" (8.88): a state chip pops in (left 1236, top 770; key `response.json()`, value `pending`). "terug" (9.92): the progress line is full and fades; the `body` value swaps to `gelezen`; the chip swaps to `fulfilled` (blue look).
  - 10.5-12.5: "tweede" (11.24): `await ` types on row 3 (11.24-11.4). "await" (11.60): a `ts-mark` around each of the two `await`s (rows 2 and 3), off at 12.5.
  - 12.5-end: "Nu pas" (12.64): `const posts: Post[] = ` types (12.64-13.2). "posts" (13.76): row 4 types (13.76-14.3); the label `console` and the console card fade up at 13.76 and the title line appears at 14.3. Hold.

## Frame 5 — TypeScript gelooft je op je woord

- id: 05-type
- duration: 14.39s
- transition_in: cut
- sfx: pop@2.24, pop@4.08, pop@7.6, pop@9.2, pop@10.08, pop@11.52, pop@12.4
- voiceover: "Let wel op: json geeft any terug. Met Post array vertel jij aan TypeScript wat je verwacht, en TypeScript gelooft je op je woord. Klopt je interface niet, dan krijg je geen fout, maar undefined."
- focal: a wrong interface gives `undefined`, and TypeScript says nothing.
- start: the exact end state of frame 4.
- layout: code panel and console as before. New in the lower area: chip A (left 80, top 520; mono key `response.json()`, value `Promise<any>`), chip B (left 80, top 582; key `jij zegt`, value `Post[]`), note 1 (`.pc-note`, left 80, top 648): `TypeScript controleert dit niet`. Mini panel (`.ts-mini`, title `interface Post`) left 1236, top 520, width 604, height 280, rows: `interface Post {` / `    userId: number;` / `    id: number;` / `    titel: string;` / `    body: string;` / `}`. Note 2 (`.pc-note`, left 1236, top 824): `geen fout van TypeScript`.
- shots:
  - 0.0-1.2: the kicker text swaps to `TypeScript gelooft je` (0.1). The nodes, wires, response card + label, the note and the state chip fade out (0.4s from 0.1). The console keeps its title line.
  - 1.2-3.3: "json" (1.28): wash on `response.json()` in row 3 (off 3.3). "any" (2.24): chip A pops in.
  - 3.3-9.1: "Post array" (3.60): `ts-mark` around `Post[]` in row 3 (off 6.8); "array" (4.08): chip B pops in. "gelooft" (7.60): note 1 fades up.
  - 9.1-end: "Klopt" (9.20): the mini panel fades up. "niet" (10.08): a `ts-mark--wrong` around `titel` in the mini panel; row 4 of the code swaps to `    console.log(posts[0].titel);`; the title line in the console fades out (0.3s). "fout" (11.52): note 2 fades up. "undefined" (12.40): the console line `undefined` appears, with a `ts-mark--wrong` around it at 12.9. No blue at that moment. Hold.

## Frame 6 — Hetzelfde met then

- id: 06-then
- duration: 11.27s
- transition_in: crossfade
- sfx: typing@3.04, pop@4.08, typing@5.2, pop@6.56, pop@8.61, pop@9.76
- voiceover: "Fetch geeft een promise terug, dus het kan ook met then. Twee stappen, dus twee then's: de eerste leest de json, de tweede krijgt de posts."
- focal: two steps, so two `then`s.
- layout: W1 code panel (status `index.ts · then`). Lower area: step card 1 (`.ts-card`, left 80, top 540, width 520, height 150) with a label `stap 1` (`.ts-label`, inside at 26, 24) and a mono line (24px, at 26, 78): `response.json()`; step card 2 (left 640, top 540, width 520, height 150) with label `stap 2` and mono line `posts: Post[]`; a `.pc-arrow` (width 24) centred in the gap between the cards. Console (label at 80, 716; card left 80, top 756, width 1080, height 100, 22px line). Right column: label `met await` at (1236, 520) and a mini panel (`.ts-mini`, title `index.ts`, left 1236, top 560, width 604, height 150, mono 20px rows): `const response = await fetch(⋯);` / `const posts: Post[] = await response.json();`.
- code, final:
  ```
  1  fetch('https://jsonplaceholder.typicode.com/posts')
  2      .then((response) => response.json())
  3      .then((posts: Post[]) => {
  4          console.log(posts[0].title);
  5      });
  ```
- shots:
  - 0.0-3.0: kicker `Met then`. Row 1 present, the `met await` label + mini panel present (what the student just saw). "promise" (1.08): wash on row 1 (off 2.9).
  - 3.0-6.3: "then" (3.04): row 2 types (3.04-3.7). "stappen" (4.08): the two step cards fade up with their labels only (no mono line yet). "twee then's" (5.20): rows 3-5 type (5.2-6.2); wash on the two `.then` tokens at 5.52 (off 6.4).
  - 6.3-end: "eerste" (6.56): `ts-mark` around row 2's text; the mono line of step card 1 appears. "tweede" (8.61): the mark moves to row 3's text (fade out / in); the mono line of step card 2 appears and the arrow draws. "posts" (9.76): the console title line appears; the mark fades at 10.4. Hold.

## Frame 7 — Geen antwoord: de promise wordt rejected

- id: 07-geen-antwoord
- duration: 12.39s
- transition_in: blur-crossfade
- sfx: pop@2.32, whoosh-short@3.44, pop@5.28, pop@6.0, pop@8.28, whoosh-short@10.0, typing@10.0, pop@10.72
- voiceover: "En als het misgaat? Is de server onbereikbaar, dan komt er geen antwoord. De promise wordt rejected, en await gooit een fout. Die vang je op met try en catch."
- focal: no answer → rejected → `try` / `catch`.
- built together with frames 8 and 9 (frames 7 → 8 → 9 are joined by cuts).
- layout: W2 with its lower area. Chips row at top 816: state chip (key `fetch(…)`) at left 80.
- code (status `index.ts · fouten`). Version A (t = 0), rows 1-5 of the 10-row panel:
  ```
  1  (async function () {
  2      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  3      const posts: Post[] = await response.json();
  4      console.log(posts[0].title);
  5  })();
  ```
  Version B (from 10.0):
  ```
  1  (async function () {
  2      try {
  3          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  4          const posts: Post[] = await response.json();
  5          console.log(posts[0].title);
  6      } catch (error: any) {
  7          console.log(error);
  8      }
  9  })();
  ```
  A → B: the three body rows move one row down and four columns to the right (y +36, x +57.6, 0.4s power3.inOut), `})();` moves from row 5 to row 9, and the new rows 2, 6, 7 and 8 fade in (10.2-10.6). Line numbers 6-9 appear with them.
- shots:
  - 0.0-1.5: kicker `Geen antwoord`. Code version A, the nodes and wires present (fade up at 0.2).
  - 1.5-5.0: "onbereikbaar" (2.32): the server node goes down: its border becomes dashed `#94A3B8`, the role text dims to `#94A3B8`, the sub text swaps to `onbereikbaar` in `#D14343` (0.3s). "dan komt" (3.44): the packet `GET /posts` leaves the program, travels 70% of the wire (3.44-4.3) and fades out there at 4.36 ("antwoord"); the response wire dims to 30%.
  - 5.0-8.9: "promise" (5.28): the state chip pops in (`pending`). "rejected" (6.00): it swaps to `rejected` (red border). "await" (7.20): a thin red underline (2px `#D14343`) under `await fetch(…)` in row 2. "fout" (8.28): the label `console` + the console card fade up at 8.0 and the error line `TypeError: fetch failed` (`.pc-out--error`) appears at 8.28.
  - 8.9-end: "try" (10.00): the red underline fades out at 9.8; code A → B; wash on `try {` (row 2). "catch" (10.72): wash on rows 6-8; in the console the error line is replaced by a normal output line `TypeError: fetch failed` (`.pc-out` with the `>` prefix: it is now caught and logged). Washes stay. Hold.

## Frame 8 — Een 404 komt niet in de catch

- id: 08-404
- duration: 17.95s
- transition_in: cut
- sfx: pop@1.64, typing@4.44, whoosh-short@5.44, whoosh-short@7.12, pop@7.52, pop@9.08, pop@10.28, pop@11.44, pop@13.04, pop@16.48
- voiceover: "Maar wat als de server wel antwoordt, met een foutcode? Post honderddrieëntwintig bestaat niet: je krijgt een vier nul vier. Kom je nu in de catch? Nee. Fetch faalt enkel als er geen antwoord komt. Je programma loopt gewoon verder, zonder data."
- focal: a 404 is an answer: the promise is fulfilled, the catch is skipped, the program goes on without data. Between "catch?" (ends 9.6) and "Nee." (10.28) the voice leaves a second of thinking time: hold still.
- start: the exact end state of frame 7.
- code, final state (the URL, row 4 and row 5 change):
  ```
  1  (async function () {
  2      try {
  3          const response = await fetch('https://jsonplaceholder.typicode.com/posts/123');
  4          const post: Post = await response.json();
  5          console.log(post.title);
  6      } catch (error: any) {
  7          console.log(error);
  8      }
  9  })();
  ```
- layout: chips row at top 816: chip `status` (key `status`, value `404` in `#D14343`) at left 80; state chip (key `fetch(…)`, value `fulfilled`, neutral look, no blue fill) to its right (16px gap); a `.pc-note` to the right of the chips (top 826): `een 404 is ook een antwoord`. A question note (`.pc-note`) right of the catch rows, vertically centred on row 7, left 560: `kom je hier?`.
- shots:
  - 0.0-1.5: the kicker text swaps to `Een 404` (0.1). The console line, the state chip and the washes of frame 7 fade out (0.4s from 0.1).
  - 1.5-4.0: "wel" (1.64): the server node comes back (solid hairline border, ink role text, sub `jsonplaceholder.typicode.com`), the response wire back to full.
  - 4.0-8.2: "honderddrieëntwintig" (4.44): `/123` types into the URL of row 3 (the rest of the row moves along) with a wash on `/posts/123` (off 6.4); rows 4 and 5 swap to the `post` versions. "bestaat" (5.44): the packet `GET /posts/123` travels to the server (5.44-6.4). "vier nul vier" (7.12): the packet `404 Not Found` (`nc-packet--error`) travels back (7.12-8.0); the chip `status` / `404` pops in at 7.52.
  - 8.2-10.2: "Kom je nu" (8.32): a blue `ts-mark` around rows 6-8 (the catch block) at 8.8; "catch?" (9.08): the question note `kom je hier?` fades up. Hold through the thinking time.
  - 10.2-13.9: "Nee." (10.28): the mark and the question note fade out; rows 6-8 dim to 35%. "faalt enkel" (11.44): the state chip pops in (`fulfilled`). "antwoord" (13.04): the note `een 404 is ook een antwoord` fades up.
  - 13.9-end: "loopt" (14.64): wash on row 4; "verder" (15.32): the wash moves to row 5 (row 4 off). Wash off at 16.0. "data" (16.48): the console line `undefined` appears, with a `ts-mark--wrong` around it at 16.8. Hold.

## Frame 9 — Controleer response.ok

- id: 09-ok
- duration: 16.63s
- transition_in: cut
- sfx: whoosh-short@2.0, typing@2.32, pop@3.12, pop@4.48, pop@8.08, typing@8.8, pop@9.9, pop@11.52, pop@14.8
- voiceover: "Controleer het antwoord daarom zelf. Response punt ok is enkel true bij een statuscode die met een twee begint. Is ok false, gooi dan zelf een error. Nu kom je wel in de catch. De code zelf vind je in response punt status."
- focal: the new row `if (!response.ok) throw new Error(...)` (the fix), and `Error: 404` from the catch.
- start: the exact end state of frame 8.
- code, final state:
  ```
  1  (async function () {
  2      try {
  3          const response = await fetch('https://jsonplaceholder.typicode.com/posts/123');
  4          if (!response.ok) throw new Error(response.status.toString());
  5          const post: Post = await response.json();
  6          console.log(post.title);
  7      } catch (error: any) {
  8          console.log(error);
  9      }
  10 })();
  ```
- layout: chips row: `status` / `404` stays at left 80; chip `ok` (key `ok`, value `false` in `#D14343`) to its right; a rule note (`.pc-note`) to the right of the chips: `enkel true bij 200 tot 299`.
- shots:
  - 0.0-1.9: the kicker text swaps to `response.ok` (0.1). The console line + red mark, the note and the state chip of frame 8 fade out (0.4s from 0.1); rows 6-8 back to full opacity.
  - 1.9-7.2: at 2.0 the rows from row 4 on move one row down (y +36, 0.4s power3.inOut; line number 10 appears). "Response punt ok" (2.32): `if (!response.ok)` types on the new row 4 (2.32-3.2). "ok" (3.12): the chip `ok` / `false` pops in. "true" (4.48): the rule note fades up.
  - 7.2-10.3: "false" (8.08): a `ts-mark--wrong` around the `ok` chip (off 8.7). "gooi" (8.80): ` throw new Error(response.status.toString());` types on row 4 (8.8-9.7). "error" (9.76): at 9.9 a blue `ts-mark` box around the whole text of row 4 (the fix), off at 12.2.
  - 10.3-12.2: "wel" (11.08): wash on rows 7-9 (the catch block). "catch" (11.52): the console line `Error: 404` appears (`.pc-out`, plain: caught and logged).
  - 12.2-end: "response" (13.76): wash on `response.status` in row 4. "status" (14.80): a blue `ts-mark` around the `status` chip. Hold.

## Frame 10 — getPost: de drie stappen in een functie

- id: 10-getpost
- duration: 11.11s
- transition_in: push-slide
- sfx: pop@1.12, typing@3.28, pop@6.53, pop@7.64, pop@8.36, pop@9.44
- voiceover: "Heb je meer dan één request nodig, maak dan een functie get post, die één post ophaalt. Je herkent de drie stappen: fetch, controleren, en json."
- focal: `getPost(id)` = fetch, check, json.
- layout: W1 code panel (status `index.ts · getPost`). Lower area: five request chips (`.ts-chip`, mono 22px: `/posts/1` … `/posts/5`) in a row at top 540 from left 80 (16px gaps). Three step chips at top 640 from left 80 (20px gaps): key `stap 1` value `fetch`, key `stap 2` value `controleren` (value in Inter 500), key `stap 3` value `json`.
- code, final:
  ```
  1  async function getPost(id: number): Promise<Post> {
  2      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  3      if (!response.ok) throw new Error(response.status.toString());
  4      return response.json();
  5  }
  ```
  (the template literal is `ts-str`, `${id}` inside it in ink with `ts-punct` braces.)
- shots:
  - 0.0-2.2: kicker `getPost`. The panel is present with empty rows. "request" (1.12): the five request chips pop in one after the other (stagger 0.1s).
  - 2.2-5.8: "get post" (3.28): rows 1 and 5 type (3.28-4.2). "één post" (4.48): wash on `(id: number): Promise<Post>` (off 5.8).
  - 5.8-end: "drie" (6.53): rows 2, 3 and 4 fade in at 35% opacity. "fetch" (7.64): row 2 to full opacity with a wash, step chip 1 pops in, and a `ts-mark` around `${id}` (off 8.3). "controleren" (8.36): row 3 to full with a wash (row 2's wash off), step chip 2. "json" (9.44): row 4 to full with a wash (row 3's off), step chip 3. Last wash off at 10.4. Hold.

## Frame 11 — Na elkaar: elke request wacht op de vorige

- id: 11-na-elkaar
- duration: 13.27s
- transition_in: crossfade
- sfx: typing@0.52, typing@3.72, pop@5.64, pop@6.72, pop@7.22, pop@7.72, pop@8.22, pop@8.72, pop@11.52
- voiceover: "Wil je post één tot en met vijf, dan denk je misschien aan een for lus met await. Dat werkt, maar elke request wacht op de vorige. Vijf keer tweehonderd milliseconden is één seconde."
- focal: five bars one after the other: `≈ 1000 ms`.
- built together with frame 12 (joined by a cut).
- layout: T. Timeline card (`.ts-card`) left 1280, top 170, width 560, height 310: five rows (44px apart, first at top 34) with the labels `/posts/1` … `/posts/5` (mono 20px, left 24) and a track from x 150 to x 536 inside the card (386px = 1000 ms; 200 ms = 77.2px); an axis under the rows with the ticks `0`, `200`, `400`, `600`, `800`, `1000` (`.pc-tick`, 16px) and the unit `ms` under the label column; a now-line (`.pc-now`) over the rows. Clock (`.pc-clock`) at left 1304, top 510.
- code (status `index.ts · na elkaar`), final:
  ```
  1  async function getPost(id: number): Promise<Post> { ⋯ }
  2
  3  (async function () {
  4      try {
  5          const ids: number[] = [1, 2, 3, 4, 5];
  6          for (const id of ids) {
  7              const post: Post = await getPost(id);
  8              console.log(post.title);
  9          }
  10     } catch (error: any) {
  11         console.log(error);
  12     }
  13 })();
  ```
- shots:
  - 0.0-2.2: kicker `Na elkaar`. Rows 1, 3, 4 and 10-13 present. "post één tot en met vijf" (0.52): row 5 types (0.52-1.4).
  - 2.2-5.3: "for lus" (3.72): rows 6-9 type (3.72-4.9, 0.014s/char). "await" (4.40): wash on `await` in row 7 as soon as it is typed (off 5.3).
  - 5.3-9.0: "werkt" (5.64): the timeline card fades up with labels, empty tracks and axis. "elke" (6.72): the bars fill one after the other: bar n sits at (n−1)·200 … n·200 ms on row n and fills over 0.5s starting at 6.72 + (n−1)·0.5 (so 6.72 … 9.22); the now-line moves along.
  - 9.0-end: "tweehonderd" (9.68): the text `200` appears inside each bar (mono 18px). "seconde" (11.52): the clock `≈ 1000 ms` appears. Hold.

## Frame 12 — Tegelijk met Promise.all

- id: 12-promise-all
- duration: 19.35s
- transition_in: cut
- sfx: whoosh-short@0.48, typing@1.76, pop@5.56, typing@7.2, pop@8.0, typing@10.24, pop@12.16, pop@13.4, pop@15.04, typing@15.92, pop@16.56, pop@17.2
- voiceover: "Sneller gaat het zo. Met map roep je get post op voor elke id. Alle requests vertrekken meteen: je hebt nu vijf promises, nog geen posts. Await promise punt all wacht tot ze allemaal binnen zijn. Na tweehonderd milliseconden heb je de posts, in dezelfde volgorde."
- focal: five bars at the same time: `≈ 200 ms`.
- start: the exact end state of frame 11.
- layout: as frame 11. Below the clock: chip A (left 1280, top 570; key `promises`, value `5 × pending` → `5 × fulfilled`), chip B (left 1280, top 636; key `posts`, value `Post[]`), a note (`.pc-note`, left 1280, top 710): `posts[0] hoort bij ids[0]`.
- code (status `index.ts · Promise.all`), final (14 rows):
  ```
  1  async function getPost(id: number): Promise<Post> { ⋯ }
  2
  3  (async function () {
  4      try {
  5          const ids: number[] = [1, 2, 3, 4, 5];
  6          const promises: Promise<Post>[] = ids.map((id) => getPost(id));
  7          const posts: Post[] = await Promise.all(promises);
  8          for (const post of posts) {
  9              console.log(post.title);
  10         }
  11     } catch (error: any) {
  12         console.log(error);
  13     }
  14 })();
  ```
  Rows 6 and 7 are built from the inside out: on row 6 `ids.map((id) => getPost(id));` (col 42) first, later `const promises: Promise<Post>[] = ` (cols 8-41); on row 7 `await Promise.all(promises);` (col 30) first, later `const posts: Post[] = ` (cols 8-29).
- shots:
  - 0.0-1.5: the kicker text swaps to `Promise.all` (0.1). "Sneller" (0.48): the old rows 6-9 (the loop) fade out (0.3s); the rows `} catch` … `})();` move one row down (to rows 11-14, 0.4s). "zo" (0.96): the five sequential bars become ghosts (dashed `#94A3B8` border, no fill, their `200` text and the now-line fade out); the clock dims to `#94A3B8`.
  - 1.5-5.0: "map" (1.76): `ids.map((id) => getPost(id));` types on row 6 (1.76-2.9) with a wash (off 5.0).
  - 5.0-9.9: "requests" (5.56): five new solid bars appear at 0 … 200 ms, one on each row; "vertrekken" (5.96): their fills start together and grow linearly until 13.4. "nu vijf" (7.20): `const promises: Promise<Post>[] = ` types (7.2-7.9). "promises" (8.00): a `ts-mark` around `Promise<Post>[]` (off 9.9) and chip A pops in (`5 × pending`).
  - 9.9-14.2: "Await" (10.24): `await Promise.all(promises);` types on row 7 (10.24-11.2) with a wash (off 13.9). "wacht" (12.16): the `gepauzeerd` tag + dashed bar on row 7. "binnen" (13.40): the five fills are complete; chip A swaps to `5 × fulfilled` (blue look); the tag and dashed bar fade out.
  - 14.2-end: "tweehonderd" (14.56): the clock swaps to `≈ 200 ms` (`#235A97`); "milliseconden" (15.04): a `ts-mark` around the clock. "heb je" (15.92): `const posts: Post[] = ` types (15.92-16.4). "posts" (16.56): rows 8-10 fade in and chip B pops in. "dezelfde" (17.20): the note fades up. Hold.

## Frame 13 — Samenvatting

- id: 13-samenvatting
- duration: 19.65s
- transition_in: crossfade
- sfx: pop@1.32, pop@3.6, pop@8.56, pop@13.8
- voiceover: "Samengevat: await fetch geeft een Response. Await response punt json geeft de data, die je beschrijft met een interface. Controleer response punt ok, want de catch vangt enkel netwerkfouten. En meerdere requests laat je tegelijk lopen met promise punt all."
- focal: four rows: code left, meaning right.
- layout: exactly like `../ts-async-await/compositions/frames/16-samenvatting.html` (copy its recap layout and motion, including the row hairlines). Kicker `Samenvatting`. Heading (`.ts-statement`, 56px) at left 80, top 190: `fetch`. Rows from top 340, 110 apart: chip x 80 (26px mono), statement x 620 (Inter 500 40px):
  1. `await fetch(url)` → `geeft een Response`
  2. `await response.json()` → `geeft de data, beschreven met een interface`
  3. `if (!response.ok)` → `de catch vangt enkel netwerkfouten` (thin 4px red left bar on this chip; the only red)
  4. `await Promise.all(promises)` → `meerdere requests tegelijk`
- shots:
  - 0.0-1.3: kicker (0.1), heading fades up at 0.2.
  - 1.3-end: "await fetch" (1.32): row 1; "Await response" (3.60): row 2; "Controleer" (8.56): row 3; "En meerdere" (13.80): row 4. Each row: chip and statement fade up together (0.5s, y 16 → 0). Hold to the end.
