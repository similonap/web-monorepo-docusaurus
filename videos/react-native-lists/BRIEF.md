---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "In React Native maak je een lijst door een array met map naar componenten om te zetten; elk element krijgt een unieke key."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die View, Text en StyleSheet in React Native kennen en map al gezien hebben in React"
length: 60s
angle: how-to
style_preset: ts-light
---

## Intent

Kennisclip (geen samenvatting) bij `docs/react-native/lists-and-keys/index.md`
("Lijsten met map"). Sibling van `../react-native-pressable`: codevlak links, telefoon rechts.

Verhaal (volgorde van de cursuspagina):

1. Hook: een regenboog van Views in de telefoon; het kernwoord `map`.
2. De for lus: `nameTexts.push(<Text key={name}>…)`; werkt, maar zo doen we het niet.
3. `colors.map(color => <View …/>)`: elke kleur een View met `flex: 1`.
4. De key: uniek; de kleurnamen zijn hier uniek.
5. Naar `Text` mappen in plaats van naar `View`.
6. `word.split("")` met de index voor `fontSize` en `letter + index` als key.
