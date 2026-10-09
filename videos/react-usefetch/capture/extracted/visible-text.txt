---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Een fetch in een useEffect heeft loading, error en cleanup nodig; stop je dat in een custom hook useFetch<T>, dan schrijf je die logica maar één keer."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die useState, useEffect en fetch kennen"
length: 200s
angle: how-to
style_preset: code-editorial
---

## Intent

A lesson clip for the course, accompanying the custom hooks section
(`web-monorepo-docusaurus/docs/react/hooks/custom-hooks.md`, `### useFetch hook`).
Fifth clip in the series after `react-array-state`, `react-useeffect`, `react-usestate`
and `react-props`: same style (code-editorial frame.md, cream/ink/coral, navy code
surface), same voice, same captions skin.

Story (requested by the teacher, verbatim order):

1. Start simple: call an API with `fetch`. The example uses
   `https://jsonplaceholder.typicode.com/posts`. A `useEffect` with a fetch in it; the
   result goes into a state with the posts.
2. We also want a loading state: `setLoading` like in the course, and a spinner that is
   rendered conditionally.
3. What if something goes wrong? Add a `try/catch` and handle the non-200 responses
   (`if (!response.ok) throw new Error(...)`). `setLoading(false)` moves to the `finally`.
4. An error state stores the error object. If error is not null, show the error.
5. Done? No: there is no cleanup. We need a mechanism to cancel. For simplicity a
   boolean (`cancelled`); in reality you would use an `AbortController`, but we do not
   use it here, the boolean covers the essence. `cancelled` is set in the cleanup
   function; the state is not updated when the flag is set.
6. A refresh button: how do you make a useEffect run again? Put a state in the
   dependency array. E.g. a `trigger` state toggled between true and false is enough;
   you can also keep a counter if you want to know how often you refreshed.
7. Now we also want to fetch users: start over? Of course not: custom hooks. Make
   `useFetch.ts` with a generic type `T` for the expected return type, move the code
   from `App.tsx` into it, and return the essentials: `loading`, `data`, `error` and
   `refetch`, so we can use our own `useFetch` hook.

## Customizations

- Style identical to the siblings (copied frame.md, fonts, sfx, caption skin).
- Voice: ElevenLabs eleven_v4, voice "Andie" (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the `elevenlabs` CLI.
- Code follows the course snippets (custom-hooks.md `useFetch`, useEffect.md fetch + cleanup):
  `useState<boolean>(false)`, `const fetchData = async () => {...}`, `let cancelled: boolean = false`,
  `if (cancelled) return;`, `setError(err as Error)`, `useState<number>(0)` trigger with
  `refetch = () => setTrigger(trigger => trigger + 1)`, `useFetch<T>(url: string): FetchState<T>`.
- Captions on; no music bed (same as siblings).
