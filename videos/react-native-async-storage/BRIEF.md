---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Met AsyncStorage bewaar je data op de telefoon, ook als de app gesloten wordt. Het is een key-value opslag zoals localStorage, maar asynchroon (await). Je bewaart enkel strings: getallen zet je om met toString/Number, objecten en arrays met JSON.stringify/JSON.parse. removeItem, clear en getAllKeys beheren de opslag, try/catch vangt fouten op, en met een loading state laad je bewaarde state veilig in."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die useState, useEffect, async/await en de React Native core components kennen"
length: 140s
angle: how-to
style_preset: ts-light
---

## Intent

Groot lesfilmpje (13 scènes, met samenvatting) bij `docs/react-native/async-storage/index.md`
("AsyncStorage"). Sibling van `../react-native-controlled-components`, `../react-native-flatlist` en de andere
React Native clips: codevlak links, telefoon rechts.

## Didactische keuzes

- **Eén beeld voor de opslag**: een tabel `ASYNCSTORAGE` met de kolommen `key` en `value` onder het codevlak.
  Elke `setItem`, `removeItem` of `clear` verandert de tabel op hetzelfde moment; elke waarde staat er als
  string (tussen aanhalingstekens), zodat zichtbaar is dat AsyncStorage enkel strings bewaart.
- **Data blijft**: in de hook en bij de state-voorbeelden sluit de app en opent ze opnieuw; de tabel blijft staan.
- **Probleem → oplossing**: een kapotte JSON-string (scène 8) en de beginwaarde `0` die de bewaarde waarde
  overschrijft (scène 11), telkens gevolgd door de oplossing (`try/catch`, `if (loading) return;`).

## Verhaal (volgorde van de cursuspagina)

1. Hook: data die blijft als je de app sluit.
2. Key-value zoals `localStorage`, maar asynchroon: `await`, een `Promise`.
3. String: `setItem`, `getItem`, `null` als de key niet bestaat.
4. Getal: enkel strings; `toString()` en `Number(value)`.
5. Object: `JSON.stringify` / `JSON.parse`; `parse` geeft `any` terug.
6. Array van objecten: ophalen, toevoegen, alles opnieuw opslaan; `[]` als er nog niets is.
7. `getAllKeys`, `removeItem`, `clear`.
8. Foutafhandeling: `try/catch`, ongeldige JSON.
9. State inladen met een eerste `useEffect`.
10. State opslaan met een tweede `useEffect`.
11. Waarom de `loading`-vlag: de `0` zou de bewaarde waarde overschrijven; `if (loading) return;`.
12. Laadtoestand: `ActivityIndicator` zolang `loading` true is.
13. Samenvatting.

## Customizations

- De code volgt de cursuspagina, met de aanpassingen van de reeks (4 spaties, geen `import React`, `return (...);`,
  geen `export default Index;` waar het niet in beeld moet). Voorbeelden worden ingekort tot de regels die de scène
  uitlegt; de rest scrolt of valt weg.
- Rood enkel voor de ongeldige JSON en de foutmelding (scène 8) en voor de overschreven waarde (scène 11).
- Stem: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI met de pijplijn
  van `tts.py`. Ondertitels aan, geen muziekbed.
