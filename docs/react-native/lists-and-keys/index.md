---
sidebar_position: 6
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Lijsten met map

<YouTubeVideo src="https://youtu.be/R22NixoQvsY" title="React Native - Lijsten met map" />

Net zoals in React.js kunnen we ook in React Native lijsten maken. We kunnen dit doen door een array te maken en deze te mappen naar een component. We moeten wel een key meegeven aan elk element in de lijst. Deze key moet uniek zijn voor elk element in de lijst.

## Lijsten met for lus

We kunnen een lijst maken door een for lus te gebruiken. We kunnen dan een array maken en deze opvullen met een for lus. We kunnen dan deze array mappen naar een component. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const Index = () => {
    const names = ["Andie","Lotte","Liene","Hanna"];
    let nameTexts : JSX.Element[] = [];

    for (let name of names) {
        nameTexts.push(<Text key={name}>{name}</Text>);
    }

    return (
        <View style={styles.container}>
            {nameTexts}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default Index;
```

:::note
Dit is niet hoe we lijsten maken in React Native. We gebruiken hiervoor de `map` functie. Zie volgende stuk
:::

## De map functie

De map functie is zeer handig om een lijst te maken. We kunnen een lijst maken door een array te maken en elk element te mappen naar een component. We moeten wel een key meegeven aan elk element in de lijst. Deze key moet uniek zijn voor elk element in de lijst. Dit gebeurt op dezelfde manier als in React.js.

Hieronder een voorbeeld dat een lijst van kleuren naar gekleurde views mapt. We gebruiken de kleurnamen hier als key maar let goed op dat dit niet altijd de beste keuze is. In dit geval is het wel ok omdat de kleuren uniek zijn.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>
            {colors.map(color => (
                <View key={color} style={{flex:1 , backgroundColor: color}}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default Index;
```

Je moet uiteraard niet altijd mappen naar views. Je kan ook mappen naar andere componenten. Hieronder een voorbeeld dat een lijst van kleuren naar `Text` componenten mapt.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>
            {colors.map(color => (
                <Text key={color} style={{flex:1 , backgroundColor: color, textAlign:"center"}}>{color}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default Index;
```

Een extra voorbeeld:
We kunnen een woord opsplitsen naar een array van letters en deze dan apart tonen. We gebruiken hier de `split` functie om een string te splitsen naar een array van letters. We gebruiken de index van het element om de fontSize te bepalen. We gebruiken een combinatie van de letter en de index als key.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const Index = () => {
    const word = "Hello";
    return (
        <View style={styles.container}>
            {word.split("").map((letter, index) => (
                <Text key={letter + index} style={{flex:1 , fontSize: 20 + index * 10, textAlign:"center"}}>{letter}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection: "row", paddingTop: Constants.statusBarHeight}
});

export default Index;
```
