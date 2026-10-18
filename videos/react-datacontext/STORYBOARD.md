---
format: 1920x1080
duration: 248s
mode: autonomous
message: "Zet alle data en logica van de API in één DataProvider met een DataContext; elke component vraagt met useContext enkel op wat hij nodig heeft, zonder props door te geven."
arc: how-to-process
audience: "Studenten webframeworks die useState, useEffect, fetch, props en de Context API (ThemeContext) kennen"
language: nl
music: none
---

## Video direction

- **Sibling film.** Sixth clip in the series after `react-array-state`, `react-useeffect`, `react-usestate`, `react-props` and `react-usefetch`. Same design system (`frame.md`, **TS light**), same layout grammar, same voice. **Reference frame:** `../react-usefetch/compositions/frames/02-fetch.html`: copy its `<style>` block (the `--ts-*` tokens, `@font-face` block and `ts-*` classes) and its `typeLine` / type-on helper verbatim. When in doubt, look at how `../react-usefetch/compositions/frames/*.html` solved it (code surface, kicker, chips, scherm card, mini panel, cursor, diagrams in `11-users.html` / `12-usefetch.html` / `14-samenvatting.html`) and do the same.
- **Ground:** white `#FFFFFF` on a full-duration background clip layer (never on `#root`).
- **Colour roles:** ink `#1E293B` text, `#475569` secondary, `#94A3B8` muted; panels `#F1F5F9`, hairlines `#E2E8F0`. **One accent: TypeScript blue `#3178C6`** (dark `#235A97`, tint `#EAF2FB`, wash `rgba(49,120,198,0.12)`). Red `#D14343` only thin and sparing for what goes wrong (frame 2 only; frame 13 shows its contrast in muted grey, not red). Never a red and a blue key moment at the same time.
- **Type:** Inter for all non-code text (kicker, labels, statements, hero words, UI); JetBrains Mono for code and chips. Hero words Inter 700, tracking -0.035em, as written (`DataContext`), ~160px.
- **Kicker:** top-left at (80, 84): 28×4px blue bar, 14px gap, Inter 600 22px uppercase tracking 0.14em in blue. Reveal: bar grows from 0 width (0.35s), text fades/slides 8px (0.4s). Kicker text is given per frame.
- **Code surface (light):** x 80, width 1060, top 170, height up to 720 (bottom ≤ 890). Background `#F8FAFC`, 1px `#E2E8F0`, radius 12, shadow at most `0 1px 2px rgba(15,23,42,0.06)`. Title bar `#F1F5F9` + bottom hairline, file name Inter 500 20px `#475569` after a 10px blue square (radius 2). Status bar `#F1F5F9`, JetBrains Mono 18px `#94A3B8`. Line numbers `#94A3B8`. Syntax: keywords `#235A97` (`import`, `export`, `const`, `let`, `async`, `await`, `if`, `return`, `interface`, `from`), strings `#0F7B6C`, functions / component names / numbers / true / false `#9A5B13` (`useState`, `useEffect`, `fetch`, `setPosts`, `DataProvider`, `ReloadButton`, `0`, `false`), types `#3178C6` (`Post[]`, `boolean`, `number`, `string`, `React.ReactNode`, `DataContext` inside `<…>`), punctuation and JSX brackets `#64748B`, fold `⋯` `#94A3B8`. ≤ 16 lines: 26px / line-height 38px; 17–18 lines: 24px / 35px. Code types on with a caret stepping per character. Highlight = blue wash; key line = 2px blue box radius 6; wrong = 2px `#D14343` box radius 6. **Fold marker:** a line that reads `⋯` (muted, same indent as its block) stands for code from another frame; a folded block on one line reads like `export interface Post { ⋯ }`. Lines given as "already in place" at the frame start are visible from the code surface entrance, without type-on.
- **Right column:** x 1236–1840.
  - **`scherm` card:** white card, hairline, radius 12, label `scherm` above it (Inter 600 20px uppercase tracking 0.12em `#64748B`, y 180), card y 232 to ~540. Post rows Inter 24px ink with an 8px round blue dot, truncated with an ellipsis, in this order: `sunt aut facere repellat provident…`, `qui est esse`, `ea molestias quasi exercitationem…`, `eum et est occaecati`, `nesciunt quas odio`. Button = blue filled, white Inter 600 22px label `reload`, radius 6; disabled = `#F1F5F9` fill, `#94A3B8` label. Spinner: 56px ring, 5px `#E2E8F0`, 90° blue arc, round caps, rotation driven by the timeline (`ease: "none"`). Form: two input boxes (hairline, radius 6, placeholder Inter 22px muted `title` / `body`) and a small blue `Create` button.
  - **Mini panel:** light, like the code surface, title bar 40px, JetBrains Mono 22px / 34px, under the scherm card (top ~580, bottom ≤ 870).
- **Component boxes (diagrams):** `#F1F5F9` + hairline, radius 8, JetBrains Mono 24px ink label (`App`, `PostForm`, `ReloadButton`, `PostList`, `DataProvider`). The provider box is white with a 2px blue border and a small blue-tint label tab. Lines 2px `#94A3B8` with small solid arrowheads, drawn (stroke-dashoffset). Prop labels on lines = small chips. Key element blue.
- **Chips:** `#F1F5F9`, hairline, radius 8, JetBrains Mono 24px ink, optional key label Inter 600 18px uppercase `#94A3B8`. New / selected = `#EAF2FB` + blue border. Struck = line-through + 35%. Value swap: old value slides up and out, new one slides in (0.25s).
- **Render-tag:** blue-tint pill, `#235A97` JetBrains Mono 20px, radius 999 (e.g. `effect #2`).
- **Underline accents:** 6px blue bar radius 3 wiping in from the left.
- **Cursor:** the oversized-cursor component (`compositions/components/oversized-cursor.html`), ink fill with white outline, only where a button is clicked (frame 8, frame 12). Click = small dip (scale 0.96 → 1) + blue ripple at 20% on the target, with `click-soft`.
- **Motion grammar:** calm `power3.out` settles with long tails, small offsets, no bounce / overshoot / elastic. Every reveal is cued to its spoken word (times below are seconds from the frame start = voice start, from `audio_meta.json`). Holds are still (only a spinner rotates). Scenes fade out 0.5s `power2.inOut` (handled by the index transitions).
- **Layout:** kicker (80, 84); code surface left; right column x ≈ 1236–1840. Nothing important below y ≈ 900 (caption band).
- **Negative list:** no logos, no decorative shapes, no coloured blocks behind big text, no cream / coral / navy, no serif or condensed fonts, no dark code surfaces, no gradients / glow, no real browser or VS Code chrome, no breathing / drift / camera push, no front-loading (nothing appears before the VO names it), no `Math.random` / `Date.now`, no em-dashes in visible text.
- **Captions:** on (separate captions composition); everything important stays above y ≈ 900.

## Frame 1 — Drie componenten, dezelfde data

- scene: Three component cards appear in a row (a form, a reload button, a post list), each labelled with its component name. A `posts` chip lands above them with three lines to each card. A question mark, then the cards slide up and dim and the hero word `DataContext` lands with a blue underline.
- voiceover: "Drie componenten: een formulier, een knop om te herladen, en een lijst met posts. Ze hebben allemaal dezelfde data nodig. Waar zet je die? Op één plek: in een data context."
- duration: 12.88s
- transition_in: cut
- status: animated
- src: compositions/frames/01-hook.html
- type: hook
- persuasion: The problem as a picture, answered by the name
- beat: calm → reveal

narrativeRole: Opens on the three components of the course example and the question the film answers.
keyMessage: Three components need the same data; the answer is one DataContext.

- blueprint: compose
- focal: the row of three component cards, then the hero word
- roles: three white cards (each 480×280, hairline, radius 12; row centred, x 160–1760 with 80px gaps, top y 360) with a mono label above each (`PostForm`, `ReloadButton`, `PostList`) = foreground subject · `posts` chip (centred, y ≈ 230) with three drawn lines down to the cards = supporting · hero word `DataContext` (Inter 700, ~160px, centred, y ≈ 640) = payoff · blue = underline under the hero word only
- sfx: pop @0.32, pop @1.64, pop @2.72, pop @4.72, pop @7.72, whoosh-short @11.92

Compose: locked static stage, white ground. No kicker.
Scene 1 (0.0–6.0s): on "componenten:" (0.32s) the three mono labels fade in (stagger 0.1s), cards still empty outlines (hairline only, opacity 0.5); on "formulier," (1.64s) card 1 fills (opacity 1) with a mini form: two inputs `title` / `body` and a blue `Create` button; on "knop" (2.72s) card 2 fills with a blue `reload` button, centred; on "herladen," (3.28s) that button does a small press (scale 0.96 → 1, blue ripple); on "lijst" (4.72s) card 3 fills with three post rows (blue dots, first three titles); on "posts." (5.2s) the rows settle in one by one (stagger 0.08s).
Scene 2 (6.0–10.0s): on "dezelfde" (7.08s) nothing yet; on "data" (7.72s) the `posts` chip pops in centred above the row and three 2px muted lines draw from the chip down to the top of each card (0.5s, stagger 0.1s); on "Waar" (8.8s) a large `?` (Inter 700, 120px, blue-dark) fades in right of the chip; on "die?" (9.4s) hold.
Scene 3 (10.0–12.88s): on "één plek:" (10.36s / 10.56s) the chip, the lines and the `?` fade out and the card row slides up by 80px and dims to 45% (0.6s power3.out); on "data" (11.92s) the hero word `DataContext` lands (y 30 → 0, 0.5s power3.out, whoosh-short); on "context." (12.16s) the blue underline wipes in beneath it (0.4s). Hold.

## Frame 2 — Alles via props

- scene: App.tsx shows the state and three components that each get props. On the right a tree diagram: App on top, three children, and each line gets its prop chips as the VO names them. "Verdeelstation": the App box gets a thin red border; a fourth dashed component appears with `?` props.
- voiceover: "De eerste reflex: we halen de posts op in App, en geven alles mee als props. Posts naar de lijst. Reload en loading naar de knop. Create post naar het formulier. Dat werkt, maar App wordt een verdeelstation, en elke nieuwe component vraagt weer nieuwe props."
- duration: 16.96s
- transition_in: crossfade
- status: animated
- src: compositions/frames/02-props.html
- type: problem
- persuasion: The familiar route first, then its cost
- beat: orientation → doubt

narrativeRole: Shows the props route the students know, and why it grows messy.
keyMessage: Passing everything as props works, but App becomes a distribution hub.

- blueprint: compose
- focal: the tree diagram with prop chips on its lines
- roles: code surface (left, App.tsx, 26px / 38px, width 900) = supporting · tree diagram (right, x 1060–1840: `App` box top centre at y ≈ 220; `PostForm`, `ReloadButton`, `PostList` boxes in a row at y ≈ 560; drawn lines from App to each) = foreground subject · prop chips on the lines (small, 20px mono) · red = thin 2px `#D14343` border on the App box in Scene 3 only (the problem); no blue key moment in this frame except the kicker
- sfx: typing @1.92, pop @5.2, pop @6.8, pop @9.12, pop @13.08, pop @14.72

Compose: code left (narrower, 900px), diagram right.
Code (App.tsx):
```
const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  ⋯ useEffect, reload, createPost

  return (
    <>
      <PostForm createPost={createPost} />
      <ReloadButton reload={reload} loading={loading} />
      <PostList posts={posts} />
    </>
  );
}
```
Scene 1 (0.0–5.0s): kicker `PROPS DOORGEVEN`; on "reflex:" (0.56s) the code surface enters with lines 1, 5, 6, 11, 12, 13 in place; on "posts" (1.92s) lines 2–4 type on; on "App," (2.72s) the `App` box appears at the top of the diagram and the three child boxes appear below it (stagger 0.1s) with their lines drawing from App (0.5s); on "props." (4.4s) lines 7–10 type on (fast, 0.6s total).
Scene 2 (5.0–11.0s): on "Posts" (5.2s) a chip `posts` pops onto the line App → PostList and line 9 gets a blue wash; on "Reload" (6.8s) chip `reload` pops onto the line App → ReloadButton, on "loading" (7.84s) chip `loading` joins it, wash moves to line 8; on "Create" (9.12s) chip `createPost` pops onto the line App → PostForm, wash moves to line 7; on "werkt," (11.44s) the wash fades.
Scene 3 (11.0–16.96s): on "verdeelstation," (13.08s) the App box gets the thin red border and its three outgoing lines thicken slightly (2 → 3px); on "nieuwe component" (14.72s / 14.96s) a fourth box (dashed hairline, label `NieuweComponent`, 60% opacity) appears to the right of the row (the row shifts left 120px to make room, 0.5s) with a dashed line from App; on "nieuwe props." (16.04s / 16.32s) a chip `?` pops onto that dashed line. Hold.

## Frame 3 — De Context API

- scene: A three-step recap across the frame: three cards numbered 1, 2, 3 with `createContext`, `Provider` and `useContext` and a tiny code line in each. Below, a small diagram: a provider box wrapping two component boxes, with short blue arrows from the components up to the provider.
- voiceover: "Met de context API kan dat eenvoudiger. Je maakt een context met create context. Je zet een provider rond je componenten. En elke component daaronder vraagt de data op met use context."
- duration: 12.88s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/03-context-api.html
- type: concept
- persuasion: Recap of a known tool before applying it
- beat: relief

narrativeRole: Reminds the three building blocks of the Context API before we apply them to data.
keyMessage: createContext, a Provider around the components, useContext below.

- blueprint: compose
- focal: the three step cards
- roles: three cards (each 520×220, panel `#F1F5F9`, hairline, radius 12; row x 120–1800, top y 220) each with a blue step number (Inter 700 40px), a title (JetBrains Mono 30px ink) and one code line (JetBrains Mono 22px, syntax colours) = foreground subject · diagram below (y 520–860, centred): provider box (white, 2px blue border, tab label `Provider`, 760×300) containing two component boxes (`ComponentA`, `ComponentB`) = supporting · blue = the active card's border (moves card to card)
- sfx: pop @3.96, pop @6.92, pop @9.36, whoosh-short @11.84

Compose: three cards in a row, diagram centred below.
Card texts: 1 `createContext` / `const DataContext = React.createContext(⋯);` · 2 `Provider` / `<DataContext.Provider value={⋯}>` · 3 `useContext` / `const { ⋯ } = useContext(DataContext);`
Scene 1 (0.0–3.2s): kicker `CONTEXT API`; on "context API" (0.56s / 0.96s) the three cards fade in as empty panels with their numbers 1, 2, 3 only (stagger 0.12s); on "eenvoudiger." (2.08s) hold.
Scene 2 (3.2–8.5s): on "context" (3.96s) card 1 gets its title + code line and a 2px blue border; on "create context." (4.64s / 5.2s) the code line gets a blue wash; on "provider" (6.92s) the blue border moves to card 2, title + code line appear; on "rond" (7.24s) the provider box draws below (border wipes on, 0.6s); on "componenten." (7.8s) the two component boxes settle inside it (stagger 0.1s).
Scene 3 (8.5–12.88s): on "component" (9.36s) the blue border moves to card 3, title + code line appear; on "vraagt" (10.4s) a short blue arrow draws from each component box up to the provider box's tab (0.5s, stagger 0.1s); on "use context." (11.84s / 12.16s) the `useContext` title in card 3 gets the blue underline wipe. Hold.

## Frame 4 — Eén bestand: DataProvider.tsx

- scene: A new file `DataProvider.tsx` opens. The import and a `url` constant type on, then the `Post` interface field by field. On the right a JSON card shows one post from JSON placeholder, and each field lights up as it is named.
- voiceover: "Alles wat met de data van de API te maken heeft, zetten we in één apart bestand: data provider punt tsx. We beginnen met de interface Post: een user id, een id, een titel en een body. Zo ziet één post van JSON placeholder eruit."
- duration: 17.44s
- transition_in: crossfade
- status: animated
- src: compositions/frames/04-bestand.html
- type: setup
- persuasion: Concrete starting point
- beat: orientation

narrativeRole: Opens the one file that will hold everything about the data, and the Post type.
keyMessage: One file, DataProvider.tsx; a Post has userId, id, title and body.

- blueprint: compose
- focal: the code surface with the Post interface
- roles: code surface (left, DataProvider.tsx, 26px / 38px) = foreground subject · file chip `providers/DataProvider.tsx` (right column top, y ≈ 230, blue-tint + blue border) = supporting · JSON card (right column, y 320–720, panel, JetBrains Mono 22px, label `GET /posts[0]` above it) = supporting · blue = the file chip on "bestand", then washes
- sfx: pop @4.28, typing @1.48, typing @8.84, pop @14.92

Compose: 60/40, code left, right column file chip + JSON card.
Code (DataProvider.tsx):
```
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```
JSON card:
```
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere…",
  "body": "quia et suscipit…"
}
```
Scene 1 (0.0–7.6s): kicker `DATAPROVIDER.TSX`; on "Alles" (0.0s) nothing; on "data" (0.96s) the code surface enters, empty, title bar `DataProvider.tsx`; on "API" (1.48s) line 1 types on, then line 3 (the url, string in teal-green); on "bestand:" (4.28s) the file chip `providers/DataProvider.tsx` pops in at the right column top; on "data provider punt tsx." (5.28s – 6.4s) the title bar file name gets a blue underline wipe.
Scene 2 (7.6–14.2s): on "interface Post:" (8.84s / 9.28s) lines 5 and 10 type on (`export interface Post {` / `}`); on "user id," (10.32s) line 6 types on, wash on it; on "id," (11.52s) line 7, wash moves; on "titel" (12.56s) line 8; on "body." (13.6s) line 9.
Scene 3 (14.2–17.44s): on "één post" (14.92s / 15.2s) the label `GET /posts[0]` and the JSON card settle in on the right (0.5s); on "JSON placeholder" (15.76s / 16.24s) the four keys in the JSON card and the four field names in the code get a light blue wash together (0.3s). Hold.

## Frame 5 — De DataContext

- scene: Under the folded Post interface, the `DataContext` interface types on (posts, loading, reload), then `React.createContext<DataContext>({ … })` with the default values. On the right a "default" card lists the three default values; on the last sentence a note appears: only used without a provider.
- voiceover: "Dan beschrijven we wat onze context aanbiedt: de posts, een boolean loading, en een functie reload. Met create context maken we de data context, met een default waarde: een lege lijst, loading false, en een lege functie. Die default gebruikt React alleen als er geen provider boven staat."
- duration: 19.28s
- transition_in: crossfade
- status: animated
- src: compositions/frames/05-context.html
- type: feature_showcase
- persuasion: Type first, then the value
- beat: build

narrativeRole: Defines what the context offers and creates it with a default value.
keyMessage: interface DataContext + createContext with a default that is only used without a provider.

- blueprint: compose
- focal: the code surface
- roles: code surface (left, DataProvider.tsx, 26px / 38px) = foreground subject · `default` card (right column, y 232–560, panel, label `DEFAULT` above, three rows: `posts: []`, `loading: false`, `reload: () => {}` as chips) = supporting · note card (right column, y 600–760, white, hairline, Inter 500 26px: `Alleen gebruikt als er geen Provider boven staat.`) = supporting · blue = 2px blue box around the `createContext` lines (12–16) on "create context"
- sfx: typing @1.44, typing @7.36, pop @11.92, pop @12.84, pop @14.48, pop @15.76

Compose: 60/40.
Code (DataProvider.tsx, excerpt):
```
import React, { useEffect, useState } from "react";
const url = ⋯;
export interface Post { ⋯ }

export interface DataContext {
  posts: Post[];
  loading: boolean;
  reload: () => void;
}

export const DataContext = React.createContext<DataContext>({
  posts: [],
  loading: false,
  reload: () => {}
});
```
(Line 10 is the longest line: keep 26px only if it fits in the surface with line numbers; otherwise use 24px / 35px for the whole frame.)
Scene 1 (0.0–7.0s): kicker `DE CONTEXT`; the code surface enters at 0.0s with lines 1–3 in place (folded, muted except line 1); on "context" (1.44s) lines 5 and 9 type on; on "posts," (3.16s) line 6, wash; on "boolean loading," (4.04s / 4.32s) line 7, wash moves; on "functie reload." (5.52s / 6.08s) line 8, wash moves, then fades.
Scene 2 (7.0–15.2s): on "create context" (7.36s / 8.04s) lines 11 and 15 type on; on "data context," (9.04s / 9.28s) the blue box draws around lines 11–15; on "default waarde:" (10.56s / 10.84s) the `DEFAULT` label and empty card appear on the right; on "lege lijst," (11.72s / 11.92s) line 12 types on and chip `posts: []` pops into the card; on "loading false," (12.84s / 13.24s) line 13 + chip `loading: false`; on "lege functie." (14.16s / 14.48s) line 14 + chip `reload: () => {}`.
Scene 3 (15.2–19.28s): on "default" (15.76s) the card gets a blue-tint background; on "geen provider" (17.72s / 18.2s) the note card settles in below it (y 10 → 0). Hold.

## Frame 6 — De DataProvider component

- scene: The `DataProvider` component types on with its `children` prop. On the right a provider box with a dashed "children" slot; component boxes slide into the slot. Then three state lines type on and three state chips pop in.
- voiceover: "Nu de data provider zelf. Dat is een gewone component, met één prop: children. Daarin zitten straks alle componenten die we erin stoppen. In de provider maken we drie states: posts, loading, en een trigger, een getal dat begint bij nul."
- duration: 16.16s
- transition_in: crossfade
- status: animated
- src: compositions/frames/06-provider.html
- type: feature_showcase
- persuasion: A plain component, demystified
- beat: build

narrativeRole: Introduces the DataProvider as a normal component with children and its three states.
keyMessage: DataProvider is a component with a children prop and states posts, loading, trigger.

- blueprint: compose
- focal: the `children` prop, then the states
- roles: code surface (left, DataProvider.tsx, 26px / 38px) = foreground subject · provider diagram (right column, y 232–560: white box with 2px blue border, tab `DataProvider`, inside a dashed rounded slot labelled `children` in Inter 600 18px uppercase muted) = supporting · state chips (right column, y ≈ 620, row: key label `STATE` and chips `posts: []`, `loading: false`, `trigger: 0`) = supporting · blue = the wash / underline on `children` in Scene 1
- sfx: typing @0.88, pop @4.96, whoosh-short @7.12, typing @10.64, pop @11.6, pop @12.48, pop @13.88

Compose: 60/40.
Code (DataProvider.tsx, excerpt):
```
export interface DataContext { ⋯ }
export const DataContext = ⋯;

export const DataProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<number>(0);

  ⋯
}
```
Scene 1 (0.0–5.6s): kicker `DE PROVIDER`; the code surface enters at 0.0s with lines 1–2 in place (muted); on "data provider" (0.56s / 0.88s) lines 4, 6 and 12 type on (`export const DataProvider = ({ children }: {`, `}) => {`, `}`); on "gewone component," (2.56s / 2.96s) `DataProvider` gets a wash; on "prop:" (4.08s) line 5 types on; on "children." (4.96s) blue wash + underline on both `children` (lines 4 and 5), and the provider diagram appears on the right with its empty dashed slot.
Scene 2 (5.6–9.0s): on "componenten" (7.12s) two component boxes (`ReloadButton`, `PostList`) slide into the slot from the right (x 40 → 0, stagger 0.12s, whoosh-short); on "stoppen." (8.28s) hold.
Scene 3 (9.0–16.16s): on "drie states:" (10.4s / 10.64s) the `STATE` key label appears under the diagram; on "posts," (11.6s) line 7 types on and chip `posts: []` pops; on "loading," (12.48s) line 8 + chip `loading: false`; on "trigger," (13.88s) line 9 + chip `trigger: 0`; on "nul." (15.68s) the `0` in line 9 and the chip get a wash. Hold. Line 11 (`  ⋯`) appears with line 9.

## Frame 7 — Data laden in useEffect

- scene: Inside the provider, the `useEffect` types on step by step: `let cancelled`, `loadData` with `setLoading(true)`, `setPosts([])`, the fetch, the JSON, `if (cancelled) return;`, `setPosts(json)`, `setLoading(false)`, and the cleanup. On the right the scherm card shows the spinner while loading and fills with posts; a `loading` chip and a `cancelled` chip follow along.
- voiceover: "In een use effect laden we de data. We zetten loading op true en maken de lijst leeg. Dan fetchen we de posts en lezen we de JSON. Is cancelled intussen true, dan stoppen we. Anders zetten we de posts, en loading weer op false. In de cleanup zetten we cancelled op true, zoals je al kent."
- duration: 18.24s
- transition_in: push-slide
- status: animated
- src: compositions/frames/07-laden.html
- type: feature_showcase
- persuasion: Familiar pattern, now in the provider
- beat: build

narrativeRole: Shows how the provider loads the posts, with loading state and the cancelled cleanup.
keyMessage: loading true, empty list, fetch, guard with cancelled, set posts, loading false; cleanup sets cancelled.

- blueprint: compose
- focal: the effect code
- roles: code surface (left, DataProvider.tsx, 24px / 35px, 17 lines) = foreground subject · scherm card (right top) = supporting · chips row (right column, y ≈ 600): `loading: false`, `cancelled: false` = supporting · blue = 2px blue box around `if (cancelled) return;` (line 10) on "stoppen"
- sfx: typing @0.32, typing @3.0, pop @3.44, typing @6.16, typing @9.2, pop @12.72, pop @14.08, typing @15.2, pop @16.72

Compose: 60/40.
Code (DataProvider.tsx, excerpt):
```
export const DataProvider = ({ children }: ⋯) => {
  ⋯ states: posts, loading, trigger

  useEffect(() => {
    let cancelled = false;
    const loadData = async () => {
      setLoading(true);
      setPosts([]);
      const response = await fetch(url);
      const json: Post[] = await response.json();
      if (cancelled) return;
      setPosts(json);
      setLoading(false);
    }
    loadData();
    return () => { cancelled = true; }
  }, [trigger]);
```
Scene 1 (0.0–5.6s): kicker `DATA LADEN`; the code surface enters at 0.0s with lines 1–2 in place (muted); on "use effect" (0.32s / 0.76s) lines 4 and 17 type on (`useEffect(() => {` / `}, [trigger]);`) and lines 6, 14, 15 (`const loadData = async () => {`, `}`, `loadData();`); on "loading" (3.0s) line 7 types on; on "true" (3.44s) chip `loading` swaps false → true, the scherm card appears with the spinner (rotating); on "lijst leeg." (4.56s / 4.96s) line 8 types on.
Scene 2 (5.6–11.6s): on "fetchen" (6.16s) line 9 types on, wash on `fetch(url)`; on "JSON." (8.24s) line 10 types on; on "cancelled" (9.2s) line 5 types on (`let cancelled = false;`) and chip `cancelled: false` pops; on "true," (10.28s) line 11 types on; on "stoppen" (10.88s) the blue box draws around line 11.
Scene 3 (11.6–18.24s): on "posts," (12.72s) line 12 types on, the spinner fades and the five post rows settle in (stagger 0.08s); on "false." (14.08s) line 13 types on, chip `loading` swaps true → false; on "cleanup" (15.2s) line 16 types on (`return () => { cancelled = true; }`), wash on it; on "true," (16.72s) chip `cancelled` swaps false → true and gets a blue-tint background. Hold.

## Frame 8 — Herladen met trigger

- scene: The effect is folded; `[trigger]` is highlighted, then `reload` types on. On the right the scherm card has a `reload` button and posts; the cursor clicks it, the trigger chip goes 0 → 1, an `effect #2` tag pulses, the list empties briefly and refills.
- voiceover: "Hoe laden we opnieuw? De trigger staat in de dependency array. De functie reload telt er gewoon één bij op. De trigger verandert, het effect loopt opnieuw, en de posts worden opnieuw opgehaald."
- duration: 11.92s
- transition_in: crossfade
- status: animated
- src: compositions/frames/08-herladen.html
- type: feature_showcase
- persuasion: Cause and effect, shown as a click
- beat: build → payoff

narrativeRole: Explains reload: bump the trigger in the dependency array so the effect runs again.
keyMessage: reload = setTrigger(trigger + 1); trigger changes, effect runs, posts are fetched again.

- blueprint: compose
- focal: `[trigger]` and the reload function, then the click
- roles: code surface (left, DataProvider.tsx, 26px / 38px) = foreground subject · scherm card (right top) with a blue `reload` button top-left and three post rows = supporting · chip `trigger: 0` and render-tag `effect #1` (right column, y ≈ 600) = supporting · cursor (oversized-cursor) clicks the button = supporting · blue = 2px blue box around `[trigger]` on "dependency array"
- sfx: pop @2.16, typing @4.24, click-soft @5.2, pop @7.28, pop @8.4, pop @10.4

Compose: 60/40.
Code (DataProvider.tsx, excerpt):
```
  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    ⋯
  }, [trigger]);

  const reload = () => {
    setTrigger(trigger + 1);
  }
```
Scene 1 (0.0–4.0s): kicker `HERLADEN`; the code surface enters at 0.0s with lines 1–5 in place; the scherm card is already there with the button and three post rows, chip `trigger: 0` and tag `effect #1` under it (all in place at 0.0s); on "trigger" (1.76s) `trigger` in line 1 gets a wash; on "dependency array." (3.0s / 3.52s) the blue box draws around `[trigger]` in line 5.
Scene 2 (4.0–7.0s): on "functie reload" (4.24s / 4.64s) lines 7 and 9 type on; on "telt" (5.2s) line 8 types on (`setTrigger(trigger + 1);`) with a wash, and the cursor glides in from the lower right and clicks the `reload` button (dip + ripple, click-soft) at 5.5s; on "één" (6.0s) hold.
Scene 3 (7.0–11.92s): on "trigger verandert," (7.28s / 7.52s) chip `trigger` swaps 0 → 1; on "effect loopt opnieuw," (8.4s / 9.04s) tag swaps to `effect #2` and pulses once (scale 1 → 1.06 → 1), the post rows fade out and the spinner shows; on "posts" (10.08s) the spinner fades and the rows settle in again (stagger 0.08s); on "opgehaald." (11.2s) hold. The cursor fades out at 8.0s.

## Frame 9 — De Provider teruggeven

- scene: The return of the DataProvider types on: `<DataContext.Provider value={{ … }}>` with `posts`, `reload`, `loading`, then `{children}`. On the right the provider diagram: three value chips drop into the provider box's top band, and the children slot sits below them.
- voiceover: "Tot slot geeft de data provider een data context punt provider terug. In value zetten we alles wat we willen delen: posts, reload en loading. En daartussen renderen we children."
- duration: 12.08s
- transition_in: crossfade
- status: animated
- src: compositions/frames/09-value.html
- type: feature_showcase
- persuasion: The file completes
- beat: build

narrativeRole: Finishes the provider: it returns DataContext.Provider with the shared value and the children.
keyMessage: value = everything we share; children in between.

- blueprint: compose
- focal: the `value={{ … }}` lines
- roles: code surface (left, DataProvider.tsx, 26px / 38px) = foreground subject · provider diagram (right column, y 232–760: white box, 2px blue border, tab `DataContext.Provider`; a `VALUE` band at the top for chips; a dashed `children` slot below with `ReloadButton`, `PostList`) = supporting · blue = blue box around the value block (lines 6–10) on "value"
- sfx: typing @0.64, pop @4.96, pop @7.6, pop @8.6, pop @9.2, pop @11.6

Compose: 60/40.
Code (DataProvider.tsx, excerpt):
```
export const DataProvider = ({ children }: ⋯) => {
  ⋯ states, useEffect, reload

  return (
    <DataContext.Provider value={{
      posts: posts,
      reload: reload,
      loading: loading
    }}>
      {children}
    </DataContext.Provider>
  );
}
```
Scene 1 (0.0–4.6s): kicker `VALUE EN CHILDREN`; the code surface enters at 0.0s with lines 1–2 in place (muted); on "geeft" (0.64s) lines 4, 12, 13 type on; on "data context punt provider" (2.16s – 3.28s) lines 5 and 11 type on (`<DataContext.Provider value={{` / `</DataContext.Provider>`), and the provider diagram box draws on the right with its tab; on "terug." (3.84s) hold.
Scene 2 (4.6–9.9s): on "value" (4.96s) line 9 types on (`}}>`), the `VALUE` band appears in the diagram and the blue box draws around lines 5–9; on "posts," (7.6s) line 6 types on and chip `posts` drops into the band; on "reload" (8.6s) line 7 + chip `reload`; on "loading." (9.2s) line 8 + chip `loading`.
Scene 3 (9.9–12.08s): on "daartussen" (10.16s) line 10 types on (`{children}`) with a wash; on "children." (11.6s) the dashed `children` slot in the diagram appears with the two component boxes (stagger 0.1s). Hold.

## Frame 10 — App wordt eenvoudig

- scene: App.tsx: three struck chips on the right (`useState`, `fetch`, `props`). Then the App code types on: the imports and `<DataProvider>` around `<ReloadButton />` and `<PostList />`. A blue box marks the DataProvider lines.
- voiceover: "Kijk nu naar App. Geen state, geen fetch, geen props meer. We zetten de data provider rond de reload button en de post list, en dat is alles."
- duration: 9.52s
- transition_in: push-slide
- status: animated
- src: compositions/frames/10-app.html
- type: payoff
- persuasion: Contrast with frame 2
- beat: relief

narrativeRole: Pays off frame 2: App no longer holds state, fetch or props.
keyMessage: App only wraps its components in DataProvider.

- blueprint: compose
- focal: the short App code
- roles: code surface (left, App.tsx, 26px / 38px) = foreground subject · three chips (right column, y 260–480, stacked): `useState`, `fetch`, `props`, each struck (line-through + 35%) as named = supporting · blue = 2px blue box around lines 7 and 10 (`<DataProvider>` / `</DataProvider>`) on "data provider"
- sfx: pop @1.68, pop @2.8, pop @3.44, typing @4.64, pop @9.16

Compose: 60/40.
Code (App.tsx):
```
import { DataProvider } from "./providers/DataProvider";
import ReloadButton from "./components/ReloadButton";
import PostList from "./components/PostList";

const App = () => {
  return (
    <DataProvider>
      <ReloadButton />
      <PostList />
    </DataProvider>
  );
}
```
Scene 1 (0.0–4.4s): kicker `APP`; on "App." (0.64s) the code surface enters with title bar `App.tsx`, lines 5, 6, 11, 12 in place; on "state," (1.68s) chip `useState` pops in and is struck at once (0.3s line-through, then 35%); on "fetch," (2.8s) chip `fetch` same; on "props" (3.44s) chip `props` same.
Scene 2 (4.4–9.52s): on "zetten" (4.64s) lines 1–3 type on quickly (0.8s total); on "data provider" (5.12s / 5.52s) lines 7 and 10 type on and the blue box draws around them; on "reload button" (6.44s / 6.72s) line 8 types on; on "post list," (7.44s / 7.84s) line 9 types on; on "alles." (9.16s) a short blue underline wipes under `App` in the title bar. Hold.

## Frame 11 — useContext in de componenten

- scene: The code surface shows ReloadButton.tsx: `useContext(DataContext)` with `reload, loading`; the scherm card shows the button disabled while loading. Then the surface swaps to PostList.tsx: `useContext` with `posts` and the map; the scherm card fills the list.
- voiceover: "Elke component haalt zelf op wat hij nodig heeft. De reload button vraagt reload en loading met use context. Zolang er geladen wordt, staat de knop uit. De post list vraagt alleen de posts, en toont ze in een lijst."
- duration: 14.08s
- transition_in: crossfade
- status: animated
- src: compositions/frames/11-usecontext.html
- type: feature_showcase
- persuasion: Each component takes only what it needs
- beat: payoff

narrativeRole: Shows the consumers: useContext picks exactly the values each component needs.
keyMessage: ReloadButton takes reload and loading; PostList takes only posts.

- blueprint: compose
- focal: the `useContext(DataContext)` line in each file
- roles: code surface (left, 26px / 38px; file swaps at 10.2s from `ReloadButton.tsx` to `PostList.tsx`) = foreground subject · scherm card (right top) with the `reload` button and the post list = supporting · chip `loading` (right column, y ≈ 600) = supporting · blue = 2px blue box around the `useContext` line in each file
- sfx: typing @3.36, pop @4.64, pop @5.76, pop @8.28, whoosh-short @10.48, typing @10.64, pop @12.88

Compose: 60/40.
Code A (ReloadButton.tsx):
```
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const ReloadButton = () => {
  const { reload, loading } = useContext(DataContext);
  return (
    <button disabled={loading} onClick={() => reload()}>
      reload
    </button>
  );
}
```
Code B (PostList.tsx):
```
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const PostList = () => {
  const { posts } = useContext(DataContext);
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
}
```
Scene 1 (0.0–3.2s): kicker `USECONTEXT`; on "component" (0.32s) the code surface enters with title bar `ReloadButton.tsx`, lines 1–2 and 4 and 11 in place; on "nodig" (2.16s) the scherm card appears with the `reload` button (enabled) and three post rows.
Scene 2 (3.2–10.2s): on "reload button" (3.36s / 3.92s) line 5 types on; on "reload" (4.64s) `reload` in line 5 gets a wash; on "loading" (5.76s) the wash extends to `loading`; on "use context." (6.56s / 6.88s) the blue box draws around line 5; on "geladen" (8.28s) lines 6–10 type on quickly (0.7s), chip `loading: true` pops in, the button turns disabled (grey) and the post rows are replaced by the spinner; on "uit." (9.68s) `disabled={loading}` gets a wash.
Scene 3 (10.2–14.08s): at 10.2s the code surface content crossfades to PostList.tsx (title bar name swaps, whoosh-short), lines 1–4 and 13 in place; on "post list" (10.64s / 10.96s) line 5 types on; on "posts," (12.16s) the blue box draws around line 5 and chip `loading` swaps true → false, the button becomes enabled again; on "toont" (12.88s) lines 6–12 type on quickly (0.6s), the spinner fades and five post rows settle in (stagger 0.08s). Hold.

## Frame 12 — createPost toevoegen

- scene: `createPost` is added to the DataContext interface, then the `createPost` function types on (POST request, add the new post to the list). The mini panel shows the provider's value with `createPost` added. Then PostForm.tsx uses it: the scherm card shows the form, the cursor clicks `Create`, and a new row appears at the bottom of the list.
- voiceover: "En wil je data aanpassen? Dan voeg je een functie toe aan de context. Create post stuurt een POST request naar de API, en voegt de nieuwe post toe aan de lijst. Vergeet niet: ook create post moet in de value van de provider. Dan kan het post form hem gewoon gebruiken."
- duration: 17.28s
- transition_in: crossfade
- status: animated
- src: compositions/frames/12-createpost.html
- type: feature_showcase
- persuasion: Extend the same pattern
- beat: build → payoff

narrativeRole: Shows that the context can also offer functions that change the data.
keyMessage: Add createPost to the interface, write it in the provider, add it to value; PostForm can use it.

- blueprint: compose
- focal: the `createPost` function
- roles: code surface (left, DataProvider.tsx, 24px / 35px; swaps at 14.8s to PostForm.tsx) = foreground subject · mini panel (right column, y 232–560, title `DataProvider.tsx`, the value block) = supporting · scherm card (right column, y 600–870 in Scene 3: form with two inputs and `Create`, under it two post rows) = supporting · cursor clicks `Create` = supporting · blue = 2px blue box around `createPost: createPost` in the mini panel on "value"
- sfx: typing @2.56, typing @4.56, pop @6.12, typing @8.08, pop @11.92, whoosh-short @15.0, click-soft @16.32, pop @16.64

Compose: 60/40.
Code A (DataProvider.tsx, excerpt):
```
export interface DataContext {
  ⋯ posts, loading, reload
  createPost: (post: Post) => void;
}

  const createPost = async (post: Post) => {
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    const json = await response.json();
    setPosts([...posts, json]);
    setLoading(false);
  }
```
Mini panel (value):
```
value={{
  posts: posts,
  reload: reload,
  loading: loading,
  createPost: createPost
}}
```
Code B (PostForm.tsx, excerpt):
```
const PostForm = () => {
  const { createPost } = useContext(DataContext);
  ⋯ title, body, handleSubmit
  createPost({ userId: 1, title: title, body: body });
  ⋯
}
```
Scene 1 (0.0–4.4s): kicker `CREATEPOST`; on "data aanpassen?" (0.64s / 0.88s) the code surface enters with lines 1, 2, 4 in place; on "functie" (2.56s) line 3 types on; on "context." (3.52s) wash on line 3.
Scene 2 (4.4–10.4s): on "Create post" (4.56s / 5.16s) lines 6 and 16 type on (`const createPost = async (post: Post) => {` / `}`) and line 7; on "POST request" (6.12s / 6.32s) lines 8–12 type on, wash on `method: "POST"`; on "voegt" (8.08s) lines 13–15 type on, wash on `setPosts([...posts, json])`; on "lijst." (9.72s) hold.
Scene 3 (10.4–17.28s): on "Vergeet niet:" (10.52s / 10.96s) the mini panel settles in at the right with lines 1–4 and 6 of the value block; on "create post" (11.92s / 12.4s) line 5 `createPost: createPost` types on; on "value" (13.28s) the blue box draws around it; at 14.8s the code surface crossfades to PostForm.tsx (whoosh-short at 15.0s), all 6 lines in place, wash on line 2; on "post form" (15.6s / 15.84s) the scherm card (y 600–870) appears with the form filled (`title`: `Hallo`, `body`: `Mijn eerste post`) and two post rows; on "gewoon" (16.32s) the cursor clicks `Create` (dip + ripple, click-soft); on "gebruiken." (16.64s) a new row `Hallo` settles in at the bottom of the list with a blue-tint background. Hold.

## Frame 13 — useFetch of DataContext?

- scene: Two comparison cards side by side. Left `useFetch`: PostList and ReloadButton each call `useFetch` and each get their own `data` chip and their own fetch line to the API (`2× fetch`); a refetch in the button reloads only the button, the list stays as it is. Right `DataContext`: one DataProvider with one `posts` chip and one fetch line (`1× fetch`), both components underneath connected to it. Then one verdict under each card: `hoe haal je data op?` / `hoe deel je data?`.
- voiceover: "Misschien denk je nu: lijkt dit niet op use fetch? Niet helemaal. Use fetch is een custom hook: herbruikbare logica. Roepen de lijst en de knop allebei use fetch aan, dan heeft elk zijn eigen state, en worden de posts twee keer opgehaald. Een refetch in de knop herlaadt de lijst dus niet. Een data context deelt data: één state, één fetch, voor elke component onder de provider. Kort gezegd: use fetch gaat over hoe je data ophaalt, een context over hoe je data deelt."
- duration: 31.52s
- transition_in: push-slide
- status: animated
- src: compositions/frames/13-verschil.html
- type: comparison
- persuasion: Side by side, the difference is visible: own state vs shared state
- beat: question → contrast → answer

narrativeRole: Clears up the common confusion between the useFetch hook from the previous clip and a DataContext.
keyMessage: useFetch is reusable logic (every call has its own state and its own fetch); a DataContext shares one state with every component under the provider. useFetch = how you fetch, context = how you share.

- blueprint: compose
- focal: the two cards, then the two verdicts
- roles: left card (x 80–920, y 170–760, white, hairline, radius 12, header `useFetch` JetBrains Mono 30px ink + sub-label `custom hook · herbruikbare logica` Inter 500 20px `#475569`) = foreground subject · right card (x 1000–1840, y 170–760, same style, header `DataContext` + sub-label `gedeelde data`) = foreground subject · inside each card: an API pill at the top (`/posts`, render-tag style but neutral `#F1F5F9`/`#475569`), two component boxes at the bottom (`PostList`, `ReloadButton`), drawn lines = supporting · verdict row (y 790–870, one under each card, Inter 600 34px ink: `hoe haal je data op?` / `hoe deel je data?`) = payoff · blue = the DataProvider box and its single fetch line in the right card (frame's key element), and the underline under `deelt` verdict
- sfx: pop @2.32, pop @3.6, pop @9.04, pop @10.48, pop @12.44, pop @14.24, click-soft @16.0, whoosh-short @19.28, pop @21.36, pop @22.28, pop @23.96, pop @27.8, pop @30.32

Compose: two equal cards, verdict row under them. Kicker `USEFETCH OF DATACONTEXT?`.
Left card inner layout: API pill `/posts` centred at y ≈ 250. Two component boxes at y ≈ 600 (PostList left at x ≈ 150–460, ReloadButton right at x ≈ 540–850). Inside / directly above each box a small chip `useFetch<Post[]>` (JetBrains Mono 20px) and a state chip `data` (key label `STATE`). Two separate muted lines run from the API pill down to each box. Badge `2× fetch` (render-tag, neutral) next to the pill.
Right card inner layout: API pill `/posts` at y ≈ 250; the provider box (white, 2px blue border, blue-tint tab `DataProvider`) at y ≈ 340–450 with one `posts` chip (key label `STATE`) inside; one blue line from the pill to the provider; badge `1× fetch` (render-tag, blue tint) next to the pill; the two component boxes at y ≈ 600 with two muted lines up to the provider labelled with the small chip `useContext`.
Scene 1 (0.0–4.8s): kicker; on "use fetch?" (2.32s / 2.64s) the left card settles in with only its header; on "Niet helemaal." (3.6s) the right card settles in with only its header.
Scene 2 (4.8–15.8s): on "custom hook:" (6.04s) the left sub-label fades in; on "herbruikbare logica." (7.0s) hold; on "lijst" (9.04s) the PostList box settles in; on "knop" (9.6s) the ReloadButton box settles in; on "use fetch" (10.48s / 10.88s) each box gets its `useFetch<Post[]>` chip (stagger 0.12s); on "eigen state," (12.44s / 12.92s) each gets its own `data` state chip (stagger 0.12s); on "twee keer opgehaald." (14.24s / 14.8s) the API pill appears and its two lines draw down to the boxes (0.5s, stagger 0.1s), the badge `2× fetch` pops in.
Scene 3 (15.8–19.0s): on "refetch" (16.0s) a small `refetch()` chip appears on the ReloadButton box, it does a small press (scale 0.96 → 1, click-soft), only its own line re-draws and its `data` chip does a value swap (old slides up, new slides in); on "herlaadt de lijst dus niet." (17.12s / 18.24s) the PostList `data` chip stays still and dims to 45% with a small muted label `niet herladen` under it.
Scene 4 (19.0–25.6s): on "data context" (19.28s / 19.72s) the right sub-label `gedeelde data` fades in (whoosh-short); on "één state," (21.36s / 21.52s) the provider box draws (border wipe 0.5s) with the `posts` chip inside; on "één fetch," (22.28s / 22.56s) the API pill appears and the single blue line draws to the provider, badge `1× fetch` pops in; on "component" (23.96s) the two component boxes settle in and their lines draw up to the provider with the `useContext` chips (stagger 0.1s); on "provider." (24.72s) hold.
Scene 5 (25.6–31.52s): on "hoe je data ophaalt," (27.8s / 28.48s) the left verdict `hoe haal je data op?` fades up under the left card; on "hoe je data deelt." (30.32s / 31.0s) the right verdict `hoe deel je data?` fades up under the right card and its blue underline wipes in under the word `deel`. Hold.

## Frame 14 — Samen gebruiken

- scene: The two tiles `useFetch` and `DataContext` meet with a `+`. Then DataProvider.tsx: the folded line with its own states / useEffect / reload is struck and collapses, and `useFetch<Post[]>(url)` types in its place. The value maps `data ?? []` to `posts` and `refetch` to `reload`. On the right a mapping panel and the two components, unchanged; closing statement `Het kan allemaal.`
- voiceover: "En het mooie is: je kan ze combineren. Niets zegt dat de fetch logica zelf in de provider moet staan. In de data provider roep je gewoon use fetch aan, met Post array en de url van de posts. Data geef je door als posts, met een lege lijst zolang er nog niets is, en refetch als reload. De provider wordt een stuk korter, en de componenten merken er niets van. Het kan dus allemaal."
- duration: 25.92s
- transition_in: crossfade
- status: animated
- src: compositions/frames/14-combineren.html
- type: feature_showcase
- persuasion: The two ideas are not rivals; one plugs into the other
- beat: reveal → build → relief

narrativeRole: Shows that the provider can use the useFetch hook to load its data instead of its own fetch logic.
keyMessage: Call useFetch inside DataProvider and pass data / loading / refetch through the value; the components do not change.

- blueprint: compose
- focal: the `useFetch<Post[]>(…)` call inside the provider
- roles: code surface (left, DataProvider.tsx, 26px / 38px) = foreground subject · two tiles (right column, y 232–330: `useFetch` chip, `+`, `DataContext` chip) = supporting · mapping panel (right column, mini panel style, y 380–600, title `value`, three rows `data ?? []  →  posts`, `loading  →  loading`, `refetch  →  reload`) = supporting · two component boxes (right column, y 640–720, `ReloadButton`, `PostList`) with a small muted label `ongewijzigd` = supporting · closing statement (right column y ≈ 790, Inter 700 44px ink `Het kan allemaal.`) with a blue underline = payoff · blue = 2px blue box around lines 4–6 (the `useFetch` call) on "use fetch"
- sfx: pop @1.84, typing @3.84, pop @5.72, typing @8.96, pop @10.48, pop @11.6, typing @13.36, pop @15.88, typing @18.32, pop @21.64, pop @22.64, whoosh-short @24.56

Compose: 60/40. Kicker `SAMEN GEBRUIKEN`.
Code (DataProvider.tsx, final state, 17 lines → 24px / 35px):
```
import { useFetch } from "../hooks/useFetch";

export const DataProvider = ({ children }: ⋯) => {
  const { data, loading, refetch } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <DataContext.Provider value={{
      posts: data ?? [],
      loading: loading,
      reload: refetch
    }}>
      {children}
    </DataContext.Provider>
  );
}
```
Before state (shown at the code surface entrance, lines in place): line 3 `export const DataProvider = ({ children }: ⋯) => {`, then `  ⋯ states, useEffect, reload` (fold, muted), then line 8 `  return ( ⋯ );` folded, and line 17 `}`.
Scene 1 (0.0–2.9s): kicker; on "mooie" (0.36s) the two tiles `useFetch` and `DataContext` appear in the right column apart; on "combineren." (1.84s) they slide together and a `+` appears between them.
Scene 2 (2.9–6.7s): on "fetch logica" (3.84s / 4.16s) the code surface enters with the before state; on "zelf in de provider" (4.64s / 5.2s) the fold line `⋯ states, useEffect, reload` gets struck (line-through + 35%); on "staan." (5.92s) it collapses (height to 0, 0.4s).
Scene 3 (6.7–13.3s): on "use fetch" (8.96s / 9.28s) line 1 (import) and lines 4–6 type on, and the blue box draws around lines 4–6; on "Post array" (10.48s / 11.0s) wash on `<Post[]>`; on "url" (11.6s) wash on the url string.
Scene 4 (13.3–20.4s): on "Data" (13.36s) the folded `return ( ⋯ );` unfolds to lines 8–16 with line 10–12 still empty, and line 10 `posts: data ?? [],` types on; the mapping panel settles in with row 1 `data ?? []  →  posts`; on "lege lijst" (15.88s / 16.08s) wash on `?? []`; on "nog niets" (16.84s) line 11 `loading: loading,` types and row 2 appears; on "refetch als reload." (18.32s / 19.36s) line 12 `reload: refetch` types on, wash, and row 3 `refetch  →  reload` appears.
Scene 5 (20.4–25.92s): on "korter," (21.64s) the blue box fades and the code surface settles (no change in size needed, just a status bar text `DataProvider · met useFetch`); on "componenten" (22.64s) the two component boxes settle in on the right with their `ongewijzigd` label (stagger 0.1s); on "Het kan dus allemaal." (24.56s / 25.32s) the closing statement lands and its blue underline wipes in. Hold.

## Frame 15 — Samenvatting

- scene: A summary diagram: the DataProvider box at the top holding chips `posts`, `loading`, `reload`, `createPost`; three component boxes below, each connected with a `useContext` line labelled with what it takes; then the small App code at the right gets a blue box and the closing statement appears.
- voiceover: "Samengevat: alle data en logica zitten op één plek, in de data provider. De componenten vragen met use context alleen wat ze nodig hebben. En App blijft lekker overzichtelijk."
- duration: 12.08s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/15-samenvatting.html
- type: summary
- persuasion: The whole picture at once
- beat: resolution

narrativeRole: Pulls the film together in one picture.
keyMessage: Data in one provider; components take what they need via useContext; App stays clean.

- blueprint: compose
- focal: the provider box with its chips
- roles: provider box (left 2/3: x 80–1240, y 200–420, white, 2px blue border, tab `DataProvider`, four chips inside) = foreground subject · three component boxes (y 620, row under the provider: `PostForm`, `ReloadButton`, `PostList`) each with a drawn line up to the provider labelled with a small chip (`createPost`, `reload, loading`, `posts`) = supporting · mini panel (right column x 1340–1840, y 200–520, `App.tsx`, the 4 JSX lines `<DataProvider>` / `<ReloadButton />` / `<PostList />` / `</DataProvider>`) = supporting · closing statement (right column under the mini panel, Inter 700 44px ink: `Eén plek voor je data.`) with a blue underline = payoff
- sfx: pop @1.72, pop @4.64, pop @6.2, pop @7.28, pop @10.28, whoosh-short @11.32

Compose: diagram left, App panel + statement right.
Scene 1 (0.0–5.6s): kicker `SAMENGEVAT`; on "data" (1.72s) the provider box draws (border wipes on, 0.6s) with its tab; on "logica" (2.16s) the four chips settle in inside it (stagger 0.1s); on "data provider." (4.64s / 4.88s) the tab `DataProvider` gets a blue-tint fill.
Scene 2 (5.6–9.9s): on "componenten" (6.2s) the three component boxes settle in (stagger 0.1s); on "use context" (7.28s / 7.6s) their three lines draw up to the provider (0.5s, stagger 0.1s); on "alleen wat" (8.24s / 8.56s) the three label chips pop onto the lines (stagger 0.12s).
Scene 3 (9.9–12.08s): on "App" (10.28s) the App.tsx mini panel settles in at the right; on "overzichtelijk." (11.32s) the closing statement lands under it and its blue underline wipes in. Hold.
