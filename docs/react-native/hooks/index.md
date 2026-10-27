---
sidebar_position: 6
---

# React Native Hooks

Alle hooks die je kent uit React (`useState`, `useEffect`, `useRef`, `useContext`, ...) werken ook gewoon in React Native. Daarnaast heeft React Native zelf nog een paar eigen hooks. Die geven je informatie over het toestel waarop je app draait, zoals de grootte van het scherm of de kleurinstelling van de gebruiker.

Net zoals bij `useState` zal je component automatisch opnieuw renderen als de waarde van zo'n hook verandert. Draait de gebruiker zijn telefoon, dan krijg je dus meteen de nieuwe schermgrootte binnen.

## useWindowDimensions

De `useWindowDimensions` hook geeft de afmetingen van het venster van je app terug. Je krijgt een object met de volgende waarden:
- `width`: de breedte van het venster
- `height`: de hoogte van het venster
- `scale`: de pixeldichtheid van het scherm (bv. `3` op een recente iPhone)
- `fontScale`: de tekstgrootte die de gebruiker in de instellingen van het toestel gekozen heeft

De `width` en `height` zijn uitgedrukt in dezelfde eenheden die je ook in je styles gebruikt, niet in echte pixels.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, StyleSheet, useWindowDimensions} from "react-native";

const Index = () => {
    const {width, height, scale, fontScale} = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Breedte: {width}</Text>
            <Text style={styles.text}>Hoogte: {height}</Text>
            <Text style={styles.text}>Scale: {scale}</Text>
            <Text style={styles.text}>Font scale: {fontScale}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: Constants.statusBarHeight},
    text: {fontSize: 20}
});

export default Index;
```

Maak je browservenster eens smaller en breder als je dit voorbeeld in de webpreview bekijkt. Je zal zien dat de waarden meteen aangepast worden.

:::info
Wil je de waarden zien veranderen door je telefoon te draaien, kijk dan eens in je `app.json`. Een nieuw Expo project heeft daar standaard `"orientation": "portrait"` staan, waardoor je app altijd rechtop blijft staan. Zet dit op `"default"` om beide oriëntaties toe te laten.
:::

### Responsive layout

Met `useWindowDimensions` kan je je layout laten afhangen van de grootte van het scherm. In het voorbeeld hieronder tonen we de kleuren onder elkaar op een smal scherm (een telefoon die rechtop staat) en naast elkaar op een breed scherm (een tablet of een telefoon die gedraaid is).

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, StyleSheet, useWindowDimensions} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue"];

const Index = () => {
    const {width} = useWindowDimensions();
    const isWide = width > 600;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isWide ? "Breed scherm" : "Smal scherm"}</Text>
            <View style={[styles.colors, {flexDirection: isWide ? "row" : "column"}]}>
                {colors.map(color => (
                    <View key={color} style={{flex: 1, backgroundColor: color}}/>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    title: {fontSize: 20, padding: 16},
    colors: {flex: 1}
});

export default Index;
```

Je kan ook rekenen met de breedte. Hieronder maken we een raster met vierkante tegels. Het aantal kolommen hangt af van de breedte van het scherm, en de grootte van een tegel berekenen we zo dat de kolommen precies de volledige breedte vullen.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, ScrollView, StyleSheet, useWindowDimensions} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "brown", "gray", "black", "teal"];

const Index = () => {
    const {width} = useWindowDimensions();
    const columns = width > 600 ? 4 : 2;
    const tileSize = width / columns;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.grid}>
                {colors.map(color => (
                    <View key={color} style={{width: tileSize, height: tileSize, backgroundColor: color}}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    grid: {flexDirection: "row", flexWrap: "wrap"}
});

export default Index;
```

:::note
Je zal online soms ook `Dimensions.get("window")` tegenkomen. Dat is de oudere manier om de schermgrootte op te vragen. Het nadeel is dat die waarde niet automatisch aangepast wordt als het scherm draait. Gebruik in je componenten daarom altijd `useWindowDimensions`.
:::

## useColorScheme

Op zowel Android als iOS kan de gebruiker kiezen tussen een lichte en een donkere modus (light en dark mode). Met de `useColorScheme` hook kan je opvragen welke modus de gebruiker gekozen heeft. De hook geeft `"light"` of `"dark"` terug. Verandert de gebruiker de instelling terwijl je app open staat, dan rendert je component automatisch opnieuw.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, StyleSheet, useColorScheme} from "react-native";

const Index = () => {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Je toestel staat in {colorScheme} mode</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems: "center", paddingTop: Constants.statusBarHeight},
    text: {fontSize: 20}
});

export default Index;
```

### Een thema maken

Meestal wil je niet overal in je code `colorScheme === "dark" ? ... : ...` schrijven. Het is handiger om de kleuren voor beide modi op één plaats te verzamelen in een thema. In je componenten kies je dan het juiste thema en gebruik je de kleuren daaruit.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, StyleSheet, useColorScheme} from "react-native";

interface Theme {
    background: string;
    card: string;
    text: string;
}

const lightTheme: Theme = {
    background: "#ffffff",
    card: "#eeeeee",
    text: "#000000"
};

const darkTheme: Theme = {
    background: "#121212",
    card: "#2c2c2c",
    text: "#ffffff"
};

const Index = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? darkTheme : lightTheme;

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={[styles.card, {backgroundColor: theme.card}]}>
                <Text style={[styles.title, {color: theme.text}]}>Hallo!</Text>
                <Text style={{color: theme.text}}>Deze kaart past zich aan aan de modus van je toestel.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: Constants.statusBarHeight},
    card: {padding: 16, borderRadius: 10, gap: 8},
    title: {fontSize: 24, fontWeight: "bold"}
});

export default Index;
```

Wil je het thema in je hele app gebruiken, dan kan je het in een context steken met `useContext`. Zo hoef je niet in elk component opnieuw het juiste thema te kiezen.

:::warning
In de `app.json` van je Expo project staat de instelling `userInterfaceStyle`. Staat die op `"light"` of `"dark"`, dan geeft `useColorScheme` altijd die waarde terug, wat de gebruiker ook kiest. Zet deze instelling op `"automatic"` als je de keuze van de gebruiker wil volgen.
:::

In de webpreview volgt `useColorScheme` de instelling van je browser of besturingssysteem. Zet je computer eens in dark mode om het voorbeeld te testen.
