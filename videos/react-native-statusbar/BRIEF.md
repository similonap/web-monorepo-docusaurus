---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "De statusbalk hoort bij het toestel, maar met de StatusBar component uit expo-status-bar kies je hoe hij eruitziet: style (auto, dark, light, inverted), hidden en animated en vanuit een functie met setStatusBarStyle en setStatusBarHidden."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die met React Native en Expo begonnen zijn (View, Text, StyleSheet, Pressable)"
length: 85s
angle: how-to
style_preset: ts-light
---

## Intent

Een kennisclip bij de cursuspagina `docs/react-native/expo-components/status-bar.md`.
Zelfde reeks en stijl als de andere React Native-clips (`../react-native-pressable`,
`../react-native-stylesheet`, ...): codevlak links, telefoon rechts, TS light, dezelfde stem
en ondertitels.

Vraag van de docent: een filmpje over StatusBar, **zonder samenvatting** op het einde.

Verhaal (volgt de cursuspagina):

1. Hook: de statusbalk bovenaan (klok, batterij, netwerk) hoort bij het toestel, maar met
   `StatusBar` kies je hoe hij eruitziet.
2. Gebruik: importeren uit `expo-status-bar`, tekent zelf niets, in `app/_layout.tsx` naast
   de `Slot` zodat hij voor alle schermen geldt; de lege tags zijn een fragment.
3. De `style` prop: `dark`, `light`, `auto` (volgt light/dark mode), `inverted`.
4. Geen stijlobject zoals bij een View; een donker scherm vraagt `style="light"`.
5. Achtergrondkleur: de statusbalk is doorzichtig, de kleur is de achtergrond van je scherm;
   `paddingTop: Constants.statusBarHeight`.
6. `hidden` en `animated`.
7. Vanuit een functie: `setStatusBarStyle` en `setStatusBarHidden`.

Geen samenvatting: de clip eindigt op frame 7 (kennisclip). "Per scherm" (geen codevoorbeeld op de cursuspagina) is weggelaten om de clip kort te houden.

## Customizations

- Code in de React Native-stijl van de cursus (4 spaties, `const Index = () => { ... }`,
  StyleSheet één property per regel met trailing comma, geen `import React`).
- Rood is gereserveerd voor wat fout gaat (onleesbare statusbalk in frame 4). Achtergronden
  van de app: `#1E293B` (zoals de cursus) en `"steelblue"` als tweede kleur.
- Stem: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de
  `elevenlabs` CLI. Codenamen gesplitst ingesproken ("status bar", "set status bar style");
  de ondertitels zetten ze terug in code-spelling (zie `build.py`).
- Ondertitels aan, geen muziekbed.
