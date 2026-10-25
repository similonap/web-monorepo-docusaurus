---
sidebar_position: 2
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# StyleSheet en inline styles

<YouTubeVideo src="https://youtu.be/6HRbcnR9qGI" title="React Native - StyleSheet" />

`StyleSheet` is geen component, maar een API waarmee je je styling definieert. In React.js gebruik je hiervoor meestal CSS. In React Native schrijf je de styling in JavaScript: met `StyleSheet.create` maak je een object aan dat alle stijlen van je component bevat.

Een stylesheet kan je als volgt aanmaken:

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10
    }
});

export default Index;
```

We maken hier een vierkant aan met een rode achtergrond. De `borderWidth` property geeft aan hoe dik de rand van het vierkant moet zijn. De `borderColor` property geeft aan welke kleur de rand moet hebben. De `borderRadius` property geeft aan hoeveel de hoeken van het vierkant afgerond moeten worden. 

Merk op dat we hier gebruik maken van `Constants.statusBarHeight`. Dit is een variabele die de hoogte van de statusbalk bevat. Zo kunnen we ervoor zorgen dat de app niet onder de statusbalk komt te staan.

Je kan nog meer styling properties toevoegen aan een View. Je kan deze hier vinden: 
- https://reactnative.dev/docs/view-style-props

## Inline styles

Het is ook mogelijk rechtstreeks in de style property van een View een object mee te geven. Dit is echter niet aan te raden. Het is beter om een stylesheet aan te maken en deze te gebruiken. Je JSX blijft zo leesbaar, je kan stijlen hergebruiken en TypeScript controleert of je geldige style properties gebruikt. Het verschil in performance is verwaarloosbaar. Inline styles zijn wel handig als je snel een style wil testen.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={{paddingTop: Constants.statusBarHeight}}>
            <View style={{width: 100,height: 100, backgroundColor: "red",borderWidth: 1,borderColor: "black",borderRadius: 10}}/>
        </View>
    );
}

export default Index;
```
