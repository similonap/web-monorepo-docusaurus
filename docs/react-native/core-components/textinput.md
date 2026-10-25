---
sidebar_position: 5
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# TextInput

<YouTubeVideo src="https://youtu.be/IEJtZvK8Xug" title="React Native - TextInput" />

De `TextInput` component is een component die gebruikt kan worden om tekst in te voeren. De `TextInput` component is vergelijkbaar met de `input` tag in HTML.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <TextInput
                secureTextEntry={false}
                autoCapitalize="characters"
                placeholder="Enter your name"
                keyboardType="default"
                style={styles.textinput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight},
    textinput: { borderColor: "red", borderWidth: 1}
});

export default Index;
```

Meer informatie over de props van het `TextInput` component kan je hier vinden:
- https://reactnative.dev/docs/textinput#props

## Events

TextInput heeft een aantal event handlers die je kan gebruiken:
- onChange: wordt aangeroepen wanneer de tekst in de input verandert. 
- onChangeText: wordt aangeroepen wanneer de tekst in de input verandert. Het verschil met onChange is dat onChangeText de nieuwe tekst als argument meekrijgt.
- onSubmitEditing: wordt aangeroepen wanneer de gebruiker op de submit-toets (Enter, "Gereed", "Zoek", ...) van het toetsenbord drukt.
- onFocus: wordt aangeroepen wanneer de gebruiker de input selecteert.
- onKeyPress: wordt aangeroepen wanneer de gebruiker een toets indrukt. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter your name"
                onChangeText={(text) => {
                    console.log(text);
                }}
                onChange={(event) => {
                    console.log(event.nativeEvent.text);
                }}
                onSubmitEditing={(event) => {
                    console.log(event.nativeEvent.text);
                }}
                onFocus={() => {
                    console.log("Focused");
                }}
                onKeyPress={(event) => {
                    console.log(event.nativeEvent.key);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight}
});

export default Index;
```
