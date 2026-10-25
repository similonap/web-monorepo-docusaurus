---
sidebar_position: 3
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Text

<YouTubeVideo src="https://youtu.be/Uq5mmiYDKoY" title="React Native - Text" />

De `Text` component is een component die tekst kan weergeven. De `Text` component is vergelijkbaar met de `p` of `span` tag in HTML.

:::warning Alle tekst moet in een `Text` staan
In HTML mag je tekst rechtstreeks in een `div` zetten. In React Native kan dat niet: tekst die rechtstreeks in een `View` staat geeft de foutmelding `Text strings must be rendered within a <Text> component`.

```tsx
<View>Hello World</View>              // fout
<View><Text>Hello World</Text></View> // juist
```
:::

Hieronder een aantal voorbeelden van veel voorkomende style properties

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.hello}>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    hello: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: "underline",
        textAlign: "center",
        color: "red"
    }
});

export default Index;
```

Meer informatie over de styling props van het `Text` component kan je hier vinden:
- https://reactnative.dev/docs/text-style-props

## Text nesting

Het is mogelijk om een `Text` component in een andere `Text` component te nesten. De geneste `Text` neemt de stijl van de buitenste `Text` over en kan die aanvullen of overschrijven.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text>Hello<Text style={styles.world}> World</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    world: { color: "blue", fontWeight: "bold" }
});

export default Index;
```

## Geen overerving van stijlen

In CSS erven kinderen de tekststijl van hun ouder: zet je `color: red` op een `div`, dan wordt alle tekst erin rood. In React Native is dat **niet** zo. Tekststijlen worden enkel doorgegeven van een `Text` naar een geneste `Text`, nooit van een `View` naar een `Text`. Een `View` heeft zelfs geen `color` of `fontSize` property.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Deze tekst is niet rood: een View geeft geen tekststijl door.</Text>
            </View>
            <Text style={styles.red}>
                Deze tekst is rood <Text style={styles.bold}>en deze ook, maar dan vet.</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    red: { color: "red" },
    bold: { fontWeight: "bold" }
});

export default Index;
```

Wil je dezelfde tekststijl op meerdere plaatsen gebruiken? Maak dan een eigen component die een `Text` met die stijl teruggeeft (zie [Custom Components](../custom-components/index.md)).
