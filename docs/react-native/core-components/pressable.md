---
sidebar_position: 7
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Pressable

<YouTubeVideo src="https://youtu.be/KyUEPtYaqtk" title="React Native - Pressable" />

Zoals we hiervoor hebben vermeld is de `Button` component beperkt in styling mogelijkheden. Het Pressable component maakt het mogelijk andere Views te gebruiken als button. 

De `Button` component zelf is opgebouwd uit `TouchableOpacity` (op iOS) en `TouchableNativeFeedback` (op Android). Dat zijn oudere componenten die je nog vaak in tutorials tegenkomt. Voor eigen knoppen raadt React Native vandaag `Pressable` aan.

```typescript expo={"dependencies":"expo-constants"}
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.pressable}
                onPress={() => setCount(count + 1)}
            >
                <Text>Press Me</Text>
            </Pressable>
            <Text>Aantal keer ingedrukt: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight},
    pressable: { backgroundColor: "red", padding: 10 }
});

export default Index;
```

Je kan de stijl van de `Pressable` laten aanpassen afhankelijk hij ingedrukt is of niet. Dit doe je door in plaats van een style object mee te geven een functie mee te geven die een style object teruggeeft. Die functie krijgt een object mee met de property `pressed`, die `true` is zolang de gebruiker de `Pressable` ingedrukt houdt.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => pressed ? styles.pressedTrue : styles.pressedFalse}
                onPress={() => console.log("Pressed!")}
            >
                <Text style={{color: "white"}}>Press Me</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight},
    pressedTrue: { backgroundColor: "red", padding: 10, borderRadius: 5},
    pressedFalse: { backgroundColor: "blue", padding: 10, borderRadius: 5}
});

export default Index;
```

## Events

Pressable heeft een aantal event handlers die je kan gebruiken:
- onPress: wordt aangeroepen wanneer de gebruiker op de button drukt.
- onPressIn: wordt aangeroepen wanneer de gebruiker op de button begint te drukken.
- onPressOut: wordt aangeroepen wanneer de gebruiker de button loslaat.
- onLongPress: wordt aangeroepen wanneer de gebruiker de button lang ingedrukt houdt. Standaard op 500ms. Kan aangepast worden met de `delayLongPress` prop.

Druk in het voorbeeld hieronder eens kort en eens lang op de knop, en bekijk in welke volgorde de events binnenkomen.

```typescript expo={"dependencies":"expo-constants"}
import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    const [events, setEvents] = useState<string[]>([]);

    const log = (event: string) => {
        setEvents(previous => [...previous, event]);
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.pressable}
                delayLongPress={1000}
                onPress={() => log("onPress")}
                onPressIn={() => log("onPressIn")}
                onPressOut={() => log("onPressOut")}
                onLongPress={() => log("onLongPress")}
            >
                <Text>Press Me</Text>
            </Pressable>
            <Text>{events.join(" → ")}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight},
    pressable: { backgroundColor: "lightblue", padding: 10, marginBottom: 10 }
});

export default Index;
