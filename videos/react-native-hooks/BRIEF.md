---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Alle React-hooks werken in React Native. Daarnaast geeft useWindowDimensions de afmetingen van het venster (width, height, scale, fontScale) en useColorScheme de keuze light of dark; verandert die waarde, dan rendert je component opnieuw. Zo maak je een responsive layout en een thema."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die useState, useEffect en flexbox in React Native kennen"
length: 60s
angle: how-to
style_preset: ts-light
---

## Intent

Kennisclip (geen samenvatting) bij `docs/react-native/hooks/index.md` ("React Native Hooks").
Sibling van `../react-native-flatlist` en de andere React Native kennisclips: codevlak links, telefoon rechts.

## Verhaal (volgorde van de cursuspagina)

1. Hook: de hooks uit React (`useState`, `useEffect`, `useRef`, `useContext`) werken ook; React Native heeft eigen hooks met info over het toestel.
2. `useWindowDimensions`: `width`, `height`, `scale`, `fontScale`.
3. Responsive layout: draaien → nieuwe render (zoals bij `useState`); `isWide = width > 600` → `flexDirection: "row"`.
4. Rekenen met de breedte: `columns = width > 600 ? 4 : 2`, `tileSize = width / columns`.
5. `useColorScheme`: `"light"` of `"dark"`; nieuwe render als de instelling verandert.
6. Een thema: `lightTheme` / `darkTheme`, `theme = colorScheme === "dark" ? darkTheme : lightTheme`.

Bewust niet in de clip: `app.json` (`orientation`, `userInterfaceStyle`) en `Dimensions.get`; die staan als
info-blokken op de cursuspagina.

## Customizations

- Kleuren van de voorbeelden: de cursus gebruikt een regenboog. Rood is in deze reeks voor fouten, dus de clip
  gebruikt blauwtinten zoals de clips over lijsten en FlatList.
- De telefoon is schematisch (226 × 464 dp). De getoonde waarden zijn die van een echte telefoon (een iPhone:
  `width: 390`, `height: 844`, `scale: 3`, `fontScale: 1`; gedraaid `844 × 390`).
- Stem: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI met de pijplijn
  van `tts.py`. Ondertitels aan, geen muziekbed.
