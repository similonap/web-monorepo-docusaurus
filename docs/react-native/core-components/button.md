---
sidebar_position: 6
---

import HyperframesVideo from '@site/src/components/HyperframesVideo';

# Button

<HyperframesVideo name="react-native-button" title="React Native - Button" />

De `Button` component is een component die gebruikt kan worden om een button te maken. De `Button` component is vergelijkbaar met de `button` tag in HTML.

Op beide platformen zal de button een native feel hebben en button heeft beperkte styling mogelijkheden. Zo werkt de `color` prop verschillend per platform: op iOS kleurt ze de tekst, op Android de achtergrond van de knop.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Button, View} from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <Button title="Hello World" color="green" disabled={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight }
});

export default Index;
```

## Events

Met de `onPress` prop geef je een functie mee die uitgevoerd wordt wanneer de gebruiker op de knop drukt.

```typescript expo={"dependencies":"expo-constants"}
import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    const [pressed, setPressed] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <Button
                title="Press me"
                onPress={() => {
                    setPressed(true);
                }}
            />
            <Text>{pressed ? "Pressed!" : "Nog niet ingedrukt"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight}
});

export default Index;
```
