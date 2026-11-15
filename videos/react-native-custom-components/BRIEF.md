---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Net zoals in React maak je in React Native eigen componenten en geef je informatie door met props. Je kan een volledig style object als prop meegeven (StyleProp<ViewStyle>), een optionele prop een standaardwaarde geven, en met een style array combineer je een standaard style met de style uit de prop: de laatste style wint."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die React-componenten en props kennen en de React Native core components (View, StyleSheet) gezien hebben"
length: 60s
angle: how-to
style_preset: ts-light
---

## Intent

Kennisclip (geen samenvatting) bij `docs/react-native/custom-components/index.md` ("Custom Components").
Sibling van `../react-native-flatlist` en de andere React Native kennisclips: codevlak links, telefoon rechts.

Vraag van de docent: een lesfilmpje over custom components, in dezelfde stijl en met dezelfde stem als de
andere filmpjes, bij de leerstof geplaatst.

## Verhaal (volgorde van de cursuspagina)

1. Hook: eigen componenten, net zoals in React; de app opgesplitst in kleine, herbruikbare stukjes (`<Box/>`).
2. Properties: `interface BoxProps {color, size}`, `const Box = ({color, size}: BoxProps) => ...`, drie keer `<Box/>`.
3. Styles doorgeven als props: `boxStyle: StyleProp<ViewStyle>` en `style={boxStyle}`.
4. Default styles: `boxStyle?` met een standaardwaarde; drie keer `<Box/>` zonder props.
5. Style array: `style={[DefaultBoxStyle.box, boxStyle]}`.
6. De laatste style wint: enkel `backgroundColor` meegeven; breedte en hoogte blijven.

## Customizations

- Kleuren: de cursus gebruikt red/green/blue. Rood is in deze reeks voor fouten, dus de clip gebruikt blauwtinten
  (`steelblue`, `skyblue`, `powderblue`), zoals de clips over lijsten en ScrollView.
- De code van de cursuspagina mist de import van `StyleProp` en `ViewStyle`; de video importeert ze wel
  (`import {View, StyleSheet, StyleProp, ViewStyle} from "react-native";`), zodat de code compileert.
- Stem: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI met de pijplijn
  van `tts.py` (zie `../ts-fetch/REVIEW.md`). Ondertitels aan, geen muziekbed.
