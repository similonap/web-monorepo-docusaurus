---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "State is readonly: geef React een nieuwe array, nooit een aangepaste."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die useState met één waarde al kennen"
length: 120s
angle: how-to
---

## Intent

A lesson clip for the course, accompanying the "Array als state" section
(`web-monorepo-docusaurus/docs/react/state/index.md`). How-to telling: the
`numbers.push(number)` mistake (also with `setNumbers(numbers)` afterwards) →
why it fails (state is readonly; React needs a new array to know it must re-render)
→ the three recipes: add with `[...numbers, number]`, remove with `filter`,
update with `map`. Dutch narration and on-screen text. Embedded on the course
site / YouTube, 16:9.

## Customizations

- Extra: keys — `key={index}` vs a real id. Frame it as "werkt in de eenvoudige
  voorbeelden, maar breekt wanneer je items verwijdert" (the course examples use
  `key={index}`; don't contradict them outright).
- Extra: functional update — `setNumbers(prev => [...prev, n])` and why it is
  safer for quick successive updates.
- Visual idea (inferred): code typed on screen + the array drawn as boxes; the
  mutated box changes while React "sees" the same reference, then the copy
  appears next to it.
- Captions on; Dutch voiceover; quiet music bed.

## Notes

- Code examples follow the course's TypeScript style (`useState<number[]>([0,1,2,3,4])`).
- Style preset left to the workflow (code-friendly).
