---
sidebar_position: 1
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# StatusBar

<YouTubeVideo src="https://youtu.be/Zo63P9LnpbQ" title="React Native - StatusBar" />

De statusbalk is de balk helemaal bovenaan je scherm, met de klok, het batterijniveau en het netwerk. Die balk hoort bij het besturingssysteem en niet bij je app, maar je kan wel instellen hoe hij eruitziet. Daarvoor gebruik je de `StatusBar` component uit het package `expo-status-bar`.

## Installatie

In een nieuw Expo-project zit `expo-status-bar` meestal al bij de dependencies. Is dat niet zo, dan installeer je het met:

```bash
npx expo install expo-status-bar
```

## Gebruik

De `StatusBar` component tekent zelf niets op je scherm. Je zet hem ergens in je JSX, en hij past de statusbalk van het toestel aan. Een goede plek is `src/app/_layout.tsx`, zodat de instelling geldt voor alle schermen van je app:

```tsx
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}

export default RootLayout;
```

De lege tags `<>` en `</>` zijn een fragment: een component mag maar één element teruggeven, en zo kan je er toch twee naast elkaar zetten.

## De `style` prop

Met de `style` prop kies je de kleur van de tekst en de iconen in de statusbalk:

- `auto` (standaard): donkere tekst als het toestel in light mode staat, lichte tekst in dark mode.
- `dark`: altijd donkere tekst. Gebruik dit op een lichte achtergrond.
- `light`: altijd lichte tekst. Gebruik dit op een donkere achtergrond.
- `inverted`: het omgekeerde van `auto`.

Let op: deze `style` prop heeft niets te maken met de `style` prop van een `View`. Je geeft hier geen stylesheet mee, maar een van de vier waarden hierboven.

Heeft je app een donkere achtergrond, dan is de standaard donkere tekst in light mode onleesbaar. Zet `style` dan op `light`:

```tsx
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const Index = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>Een donker scherm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1E293B",
  },
  text: { color: "white", fontSize: 20 },
});

export default Index;
```

:::info Geen preview
De statusbalk bestaat enkel op een telefoon of tablet. In de browser heeft `StatusBar` geen effect, daarom staat er bij de voorbeelden op deze pagina geen preview. Probeer ze uit in Expo Go.
:::

## Achtergrondkleur van de statusbalk

Je app loopt door tot helemaal bovenaan het scherm, ook achter de statusbalk. De statusbalk zelf is doorzichtig. De kleur die je erachter ziet, is dus gewoon de achtergrond van je eigen scherm. Wil je een rode statusbalk, dan geef je je scherm een rode achtergrond.

Omdat je app achter de statusbalk doorloopt, kan je inhoud eronder verdwijnen. Daarom gebruiken we in de voorbeelden `paddingTop: Constants.statusBarHeight`: zo begint je inhoud pas onder de statusbalk.

## De statusbalk verbergen

Met de `hidden` prop verberg je de statusbalk, bijvoorbeeld voor een spel of een foto op volledig scherm. Met `animated` verdwijnt hij met een animatie in plaats van in één keer:

```tsx
<StatusBar hidden={true} animated={true} />
```

## Per scherm een andere statusbalk

Zet je een `StatusBar` in meerdere schermen, dan geldt de instelling van het scherm dat het laatst getoond werd. Zo kan je bijvoorbeeld in je layout `style="dark"` zetten en enkel op een donker scherm `style="light"`.

Wil je de statusbalk aanpassen vanuit een functie, bijvoorbeeld wanneer de gebruiker op een knop drukt, dan gebruik je `setStatusBarStyle` en `setStatusBarHidden`:

```tsx
import { Button, View } from "react-native";
import { setStatusBarHidden, setStatusBarStyle } from "expo-status-bar";

const Index = () => {
  return (
    <View>
      <Button title="Lichte tekst" onPress={() => setStatusBarStyle("light")} />
      <Button title="Verberg" onPress={() => setStatusBarHidden(true, "fade")} />
    </View>
  );
}

export default Index;
```

## Meer informatie

- https://docs.expo.dev/versions/latest/sdk/status-bar/
