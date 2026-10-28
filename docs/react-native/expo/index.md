---
sidebar_position: 2
---

import ExpoQrScan from '@site/src/components/ExpoQrScan';
import HyperframesVideo from '@site/src/components/HyperframesVideo';

# Expo

<HyperframesVideo name="react-native-expo" title="React Native - Expo Setup" />

Expo is een verzameling tools bovenop React Native die het ontwikkelen van apps een stuk makkelijker maakt. Je maakt er een nieuw project mee aan, je start er een development server mee en je test je app meteen op je eigen smartphone of tablet via de Expo Go app. Zonder Expo moet je je app eerst bundelen en installeren op je toestel voor je ze kan testen, en dat is een stuk moeilijker.

Op deze pagina zet je alles klaar in deze volgorde:

1. Je installeert wat je nodig hebt: Node.js op je computer en Expo Go op je telefoon.
2. Je maakt een nieuwe app aan en ruimt de voorbeeldcode op.
3. Je start de development server en opent de app op je telefoon of in de browser.
4. Je brengt een eerste wijziging aan.

Loopt er iets mis, kijk dan bij [Problemen oplossen](#problemen-oplossen) onderaan.

## Wat heb je nodig?

### Node.js lokaal installeren

:::warning Geen dev container voor React Native
Een [dev container](../../webframeworks/tools/devcontainers.md) geeft een minder goede development experience voor mobile development. Vooral emulators en een rechtstreekse verbinding met je telefoon worden nog niet goed ondersteund.
:::

Daarom raden we in dit onderdeel aan om de laatste **LTS-versie** van Node.js lokaal op je systeem te installeren en die te gebruiken. Je kan Node.js downloaden op de [Node.js website](https://nodejs.org/en/download). Controleer daarna in een terminal of de installatie gelukt is:

```bash
node --version
```

Meer hoef je op je computer niet te installeren. De Expo-commando's voer je uit met `npx`, zo gebruik je altijd de juiste versie zonder iets globaal te installeren.

### Expo Go op je telefoon of tablet

Om je app te testen op je smartphone of tablet, installeer je de Expo Go app:

- [Expo Go in de Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
- [Expo Go in de App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS)

:::tip Andere opties
Je kan je app ook laten draaien in een Android Emulator, de iOS Simulator of via scrcpy. Zie [Development omgeving](./development-omgeving.md).
:::

### Expo account (aangeraden)

Een Expo account is niet verplicht, maar wel handig: als je op je computer en in Expo Go met hetzelfde account inlogt, verschijnen je projecten automatisch onder "Projects" in de app.

Maak een account aan op [expo.dev](https://expo.dev/signup) of via de terminal, en log daarna in:

```bash
npx expo register
npx expo login
```

:::tip Lukt inloggen niet?
Geraak je niet ingelogd via de browser, gebruik dan de `--no-browser` optie. Dan log je rechtstreeks in de terminal in met je gebruikersnaam en wachtwoord, zonder browser:

```bash
npx expo login --no-browser
```
:::

Met `npx expo whoami` kan je controleren met welk account je ingelogd bent. Log daarna ook in de Expo Go app in met hetzelfde account.

## Nieuwe app aanmaken

Een nieuwe app maak je aan met `create-expo-app`:

```bash
npx create-expo-app@latest <project-name>
```

Je hoeft geen `--template` mee te geven: de standaard template gebruikt al TypeScript en [Expo Router](../expo-router/index.md).

### De SDK-versie kiezen

Daarna vraagt `create-expo-app` welke Expo SDK-versie je wil gebruiken:

```bash
? Select an Expo SDK version: › - Use arrow-keys. Return to submit.
❯   Latest (SDK 58)
    For learning with Expo Go (SDK 57)
    Other SDK version…
```

:::warning Kies altijd "Latest"
Kies in deze cursus **altijd** de optie **Latest**. De Expo Go app uit de App Store en de Play Store ondersteunt de nieuwste SDK. Met een oudere SDK-versie kan je je app niet openen via de QR code.
:::

### Voorbeeldcode verwijderen

Een nieuw project bevat wat voorbeeldcode. Die heb je niet nodig, dus verwijder je ze. Ga eerst naar de map van je project en voer daarna het `reset-project` script uit:

```bash
cd <project-name>
npm run reset-project
```

Het script vraagt of je de bestaande bestanden wil verplaatsen naar een map `/example` in plaats van ze te verwijderen:

```bash
Do you want to move existing files to /example instead of deleting them? (Y/n):
```

Antwoord hier met **`n`**: we willen deze voorbeeldcode niet bijhouden. Je houdt een leeg project over met twee bestanden in `src/app`:

- `src/app/index.tsx`: het eerste scherm van je app. Hier begin je te programmeren.
- `src/app/_layout.tsx`: de layout rond al je schermen (zie [Expo Router](../expo-router/index.md)).

### Layout aanpassen naar `Slot`

Standaard gebruikt `_layout.tsx` een `Stack`:

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
```

Een `Stack` zet automatisch een header met de naam van het scherm (`index`) bovenaan je app. Hoe dat werkt en hoe je die header instelt, zien we pas in het onderdeel [Expo Router](../expo-router/index.md). Tot dan vervang je de `Stack` best door een `Slot`. Die toont gewoon je scherm, zonder header of navigatie errond:

```tsx
import { Slot } from "expo-router";

const RootLayout = () => {
  return <Slot />;
}

export default RootLayout;
```

Zo ziet je app er hetzelfde uit als de voorbeelden in de volgende onderdelen. Zodra we Expo Router behandelen, zetten we hier opnieuw een `Stack` (of een andere layout).

## De app starten

Start de development server vanuit de map van je project:

```bash
npx expo start
```

Dit start de Metro bundler. Metro is een server die je TypeScript-code omzet naar JavaScript en bundelt, zodat Expo Go ze kan uitvoeren. In de terminal verschijnt een QR code en een lijst met sneltoetsen, bijvoorbeeld `w` om de app in de browser te openen en `r` om de app te herladen. Met `Ctrl+C` stop je de server.

Laat deze terminal openstaan zolang je aan je app werkt. Wil je later verder werken, dan ga je opnieuw naar de map van je project en voer je opnieuw `npx expo start` uit.

### Op je telefoon of tablet

- Op een Android-toestel open je Expo Go, druk je op "Scan QR code" en scan je de QR code uit de terminal.
- Op een iPhone of iPad scan je de QR code met de standaard Camera-app. Expo Go opent dan automatisch.

Klik hieronder stap voor stap door hoe dat eruitziet. Kies eerst je toestel:

<ExpoQrScan />

Ben je ingelogd met hetzelfde Expo account, dan kan je het project ook rechtstreeks openen onder "Projects" in Expo Go.

:::warning
Zorg ervoor dat je computer en je telefoon of tablet op hetzelfde netwerk zitten. Anders kan Expo Go geen verbinding maken met de bundler. Gebruik desnoods de hotspot van je telefoon, of start Expo [via een tunnel](#geen-verbinding-met-je-telefoon-tunnel).
:::

### In de browser

Druk op `w` in de terminal waar `npx expo start` draait, of start de server meteen met:

```bash
npx expo start --web
```

De browser is handig om snel iets te controleren, maar test je app altijd ook op een echte telefoon: niet alles werkt of ziet er hetzelfde uit op het web.

## Eerste wijziging aanbrengen

Open `src/app/index.tsx`. Na `reset-project` ziet dat bestand er zo uit:

```tsx
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
```

Verander de tekst in de `Text` component naar "Hello World" en sla het bestand op. Je hoeft niets opnieuw te starten: Metro merkt de wijziging op en je app toont meteen de nieuwe tekst (Fast Refresh).

In deze cursus schrijven we componenten als arrow function. Je eerste scherm ziet er dan zo uit:

```tsx expo={}
import { Text, View, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
```

## Problemen oplossen

### Geen verbinding met je telefoon: tunnel

Op sommige netwerken (bv. het schoolnetwerk) kan Expo Go geen verbinding maken met je computer, ook al zitten ze op hetzelfde netwerk. Start Expo dan via een tunnel:

```bash
npx expo start --tunnel
```

De bundler is nu bereikbaar via een publieke url, zodat je de QR code van overal kan scannen.

De eerste keer dat je een tunnel gebruikt, vraagt Expo om het package `@expo/ngrok` te installeren:

```bash
? The package @expo/ngrok@^4.1.0 is required to use tunnels, would you like to install it globally? › (Y/n)
```

Antwoord met **`Y`**. Expo installeert dan zelf de juiste versie.

### Versies van packages passen niet bij de SDK

Krijg je een waarschuwing dat de versies van je packages niet overeenkomen met de Expo SDK van je project, zet ze dan terug gelijk met:

```bash
npx expo install --fix
```

### Expo Go opent een ouder project niet

Werkt een (ouder) project nog met een oudere SDK-versie en opent Expo Go het niet meer, upgrade het project dan naar de nieuwste versie:

```bash
npx expo install expo@latest
npx expo install --fix
```

## Samengevat

```bash
# eenmalig: nieuw project aanmaken (kies "Latest")
npx create-expo-app@latest <project-name>
cd <project-name>
npm run reset-project        # antwoord n, en zet Stack om naar Slot in _layout.tsx

# telkens je aan je app werkt
npx expo start               # of: npx expo start --tunnel
```
