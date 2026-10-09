# Frame packet: 12-usefetch

## Project inputs

- Project: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch
- Design tokens: /Users/slimmii/Git/web/web-monorepo-docusaurus/videos/react-usefetch/frame.md
- RULES_DIR: /Users/slimmii/.claude/skills/hyperframes-animation/rules

## Assigned storyboard block

## Frame 12 — useFetch.ts

- scene: A new file `useFetch.ts`. The function signature types on with a generic `<T>` (coral). The state lines and the effect move in from App, with `posts` renamed to `data`. The `FetchState<T>` interface and the return line appear and their four fields light up one by one.
- voiceover: "We maken een nieuw bestand: use fetch punt ts. De functie use fetch krijgt een url, en een generiek type T. Daarmee zeg je welk type data je terug verwacht. We verplaatsen alle code uit App naar deze hook, en geven het belangrijkste terug: data, loading, error en refetch."
- duration: 19.92s
- transition_in: push-slide
- status: outline
- src: compositions/frames/12-usefetch.html
- type: feature_showcase
- persuasion: The fix, built line by line
- beat: payoff

narrativeRole: Builds the custom hook with a generic type and the essential return values.
keyMessage: `useFetch<T>(url)` holds all the logic and returns data, loading, error and refetch.

- blueprint: compose
- focal: the code surface `useFetch.ts`
- roles: code surface (left, useFetch.ts, 24px/35px, 18 lines) = foreground subject · right column: chip `T = Post[]` (Scene 2) and a vertical list of four return chips `data: T | null`, `loading: boolean`, `error: Error | null`, `refetch: () => void` (Scene 4) = supporting · coral = a coral wash on `<T>` in the function signature (the fix)
- sfx: whoosh-short @1.76, typing @4.0, pop @6.88, whoosh-short @11.84, typing @15.2, pop @16.84, pop @17.44, pop @18.36, pop @19.12

Compose: 60/40.
Code (useFetch.ts):
```
interface FetchState<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
  refetch: () => void;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<number>(0);
  const refetch = () => setTrigger(trigger => trigger + 1);

  useEffect(() => { ⋯ }, [trigger, url]);

  return { data, loading, error, refetch };
}
```
Scene 1 (0.0–3.6s): kicker `✱ CUSTOM HOOK`; on "nieuw bestand:" (0.68s / 0.92s) the empty code surface settles in; on "use fetch punt ts." (1.76s / 2.8s) its title bar types `useFetch.ts` (whoosh-short at 1.76).
Scene 2 (3.6–11.3s): on "functie" (4.0s) line 8 types on up to `export function useFetch`; on "url," (5.76s) `(url: string)` types on; on "generiek type T." (6.88s / 7.36s / 7.84s) `<T>` is inserted after `useFetch` with the coral wash (pop) and ` {` + line 18 `}` complete the function (` : FetchState<T>` is NOT yet typed: leave a 0-width gap that opens in Scene 4); on "welk type data" (9.44s / 10.0s) chip `T = Post[]` pops in the right column (y ~260) with a mono note `bv.` before it (ink 50%).
Scene 3 (11.3–15.0s): on "verplaatsen" (11.84s) lines 9–15 slide in from the left edge (x −80→0, opacity, stagger 0.06s, whoosh-short) as already-written code (no type-on); amber wash on `data`/`setData` (line 10) and `T` in `useState<T | null>` for 0.8s; on "deze hook," (13.76s / 14.08s) a mono tag `uit App.tsx` appears beside line 15 then fades.
Scene 4 (15.0–19.92s): on "belangrijkste terug:" (15.2s / 15.92s) line 17 `return { data, loading, error, refetch };` types on, lines 1–6 (the interface) settle in from above (opacity, y −10→0) and `: FetchState<T>` opens in the signature; on "data," (16.84s), "loading," (17.44s), "error" (18.36s), "refetch." (19.12s) the matching word in line 17 gets an amber wash and the matching return chip pops in the right column (y 380/460/540/620). Hold.
