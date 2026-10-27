---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Met een ScrollView kan je inhoud tonen die langer is dan het scherm; contentContainerStyle, horizontal, keyboardShouldPersistTaps, pagingEnabled en scrollTo/scrollToEnd sturen hoe hij scrollt."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die lijsten met map kunnen maken in React Native"
length: 75s
angle: how-to
style_preset: ts-light
---

## Intent

Kennisclip (geen samenvatting) bij `docs/react-native/lists-and-keys/scrollview.md`
("Scrollable"). Sibling van `../react-native-pressable`: codevlak links, telefoon rechts.

Verhaal (volgorde van de cursuspagina):

1. Hook: zeven Views van 200 hoog vallen van het scherm; het kernwoord `ScrollView`.
2. De ScrollView rond de inhoud zetten; scrollen met de vinger.
3. `style` (kader) versus `contentContainerStyle` (inhoud, `padding` en `gap`).
4. `horizontal`, `flexGrow: 0` en `showsHorizontalScrollIndicator={false}`.
5. `keyboardShouldPersistTaps="handled"`: de eerste tik op de knop werkt meteen.
6. `pagingEnabled`: een carrousel met pagina's even breed als het scherm.
7. `useRef<ScrollView>(null)`, `scrollTo({y: 0, animated: true})` en `scrollToEnd`.
