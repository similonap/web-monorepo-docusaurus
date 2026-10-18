---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Zet alle data en logica van de API in één DataProvider met een DataContext; elke component vraagt met useContext enkel op wat hij nodig heeft, zonder props door te geven."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die useState, useEffect, fetch, props en de Context API (ThemeContext) kennen"
length: 248s
angle: how-to
style_preset: ts-light
---

## Intent

A lesson clip for the course, accompanying the Data Context section
(`docs/react/child-parent/context.md`, `## Data Context`) and the full example
`codesandbox/react-context` (`providers/DataProvider.tsx`, `components/ReloadButton.tsx`,
`components/PostList.tsx`, `components/PostForm.tsx`).
Sixth clip in the series after `react-array-state`, `react-useeffect`, `react-usestate`,
`react-props` and `react-usefetch`: same style (TS light frame.md: white, slate, TypeScript blue, light
code surface), same voice, same captions skin.

Story:

1. Hook: PostForm, ReloadButton and PostList all need the same posts. Where do you put that data?
2. The reflex: fetch in App and pass everything as props. App becomes a distribution hub.
3. Short recap of the Context API: createContext, Provider, useContext.
4. One separate file `DataProvider.tsx`; the `Post` interface.
5. The `DataContext` interface (posts, loading, reload) and `createContext` with a default value.
6. The `DataProvider` component with `children`, states posts / loading / trigger.
7. The `useEffect` with `loadData` (setLoading, setPosts([]), fetch, json, cancelled, cleanup).
8. `reload = () => setTrigger(trigger + 1)`; trigger in the dependency array.
9. `return <DataContext.Provider value={{...}}>{children}</DataContext.Provider>`.
10. `App` only wraps `ReloadButton` and `PostList` in `<DataProvider>`.
11. `ReloadButton` and `PostList` use `useContext(DataContext)` for exactly what they need.
12. `createPost` added to the context, POST request, `PostForm` uses it.
13. useFetch vs DataContext: useFetch is reusable logic (every call has its own state and its own fetch); a context shares one state. useFetch = how you fetch, context = how you share.
14. Combining them: DataProvider calls `useFetch<Post[]>(url)` and passes `data ?? []`, `loading`, `refetch` as posts / loading / reload.
15. Recap.

## Customizations

- Style identical to the siblings (copied frame.md, fonts, sfx, caption skin, code-typing / code-highlight blocks, oversized-cursor).
- Voice: ElevenLabs eleven_v4, voice "Andie" (8OezxDDjGa2d9W45o5Qs), stability 0.5, via the `elevenlabs` CLI.
- Code follows the course sandbox `react-context/src/providers/DataProvider.tsx`, except that
  `if (cancelled) return;` is placed before `setPosts(json)` (in the sandbox it sits after it, which
  defeats the guard).
- Captions on; no music bed (same as siblings).
