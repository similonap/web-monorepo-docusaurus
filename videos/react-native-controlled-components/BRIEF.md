---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "Bij een controlled component zit de waarde van een invoerveld in state: value toont de state, de change handler (onChangeText, onValueChange) past hem aan. Zo beslist de state wat je ziet, ook met twee velden of als je de state zelf terugzet. Hetzelfde patroon stuurt een Button-teller, een Switch, conditioneel renderen, een ActivityIndicator en pull to refresh in een FlatList."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die useState en de React Native core components (TextInput, Button, FlatList) kennen"
length: 150s
angle: how-to
style_preset: ts-light
---

## Intent

Groot lesfilmpje (12 scènes, met samenvatting) bij `docs/react-native/controlled-components/index.md`
("Controlled Components"). Sibling van `../react-native-flatlist`, `../react-native-textinput` en de andere
React Native clips: codevlak links, telefoon rechts.

## Didactische keuzes

- **Eén kernidee**: de state is de enige bron van waarheid. Het beeld daarvoor: een `state`-chip boven de
  telefoon die bij elke toets mee verandert, en een kringloop (typen → `setText` → render → `value`).
- **Bewijs dat de state beslist**: twee velden aan één state (scène 4) en de state zelf terugzetten op `"0"`
  (scène 6): het veld volgt zonder dat de gebruiker iets doet.
- **Contrast**: een Button is geen controlled component (geen `value`), een Switch wel.
- Daarna de toepassingen van de cursuspagina, telkens met hetzelfde patroon (state → prop).

## Verhaal (volgorde van de cursuspagina)

1. Hook: controlled component; de state beslist wat er in het veld staat.
2. TextInput: `useState("")`, `value={text}`, `onChangeText={text => setText(text)}`.
3. De kringloop; `You typed: {text}`.
4. Twee TextInputs aan één state.
5. Getallen: `keyboardType="number-pad"`; niet elk Android-toetsenbord heeft enkel cijfers.
6. Een string in state, omzetten bij gebruik; geen getal → `setNumber("0")`.
7. Button: geen controlled component; teller met `onPress`.
8. Switch: `value={isEnabled}`, `onValueChange={() => setIsEnabled(previousState => !previousState)}`.
9. Conditioneel renderen met `? :` (en `&&`): lamp aan of uit.
10. ActivityIndicator: `animating={loading}`, `setLoading(true)` / `setLoading(false)` rond de fetch.
11. FlatList: `refreshing={refreshing}`, `onRefresh`; pull to refresh.
12. Samenvatting.

## Customizations

- De code volgt de cursuspagina, met de aanpassingen van de reeks (4 spaties, geen `import React`, `return (...);`).
  Inhoudelijke aanpassingen, zodat de code compileert in TypeScript:
  `isNaN(number)` op een string wordt `isNaN(Number(number))`, en de states krijgen een type
  (`useState<string>("")`). Het eerste voorbeeld laat de knop `Show Value` met `Alert.alert` weg (één ding per
  scène); een Alert komt terug in scène 6. In scène 9 staan de twee afbeeldings-URL's in constanten
  `lightOn` / `lightOff`, zodat de regels in het codevlak passen.
- De lampen in scène 9 zijn eenvoudig getekend (de cursus laadt twee SVG's van Material Design); geen externe beelden.
- De kleuren in scène 11 zijn een vaste lijst blauw- en groentinten (de cursus kiest willekeurige kleuren;
  de video moet deterministisch zijn en rood is voor fouten).
- Rood enkel voor de letters in het getallenveld en de Alert `This is not a number!` (scène 5 en 6).
- Stem: ElevenLabs eleven_v4, Andie (8OezxDDjGa2d9W45o5Qs), stability 0.5, via de `elevenlabs` CLI met de pijplijn
  van `tts.py`. Ondertitels aan, geen muziekbed.
