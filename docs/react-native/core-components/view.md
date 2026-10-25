---
sidebar_position: 1
---

# View

De `View` component is het meest gebruikte component in React Native. Het is een container component die andere componenten kan bevatten. De `View` component is vergelijkbaar met de `div` tag in HTML.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

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
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Index;
```

Dezelfde app zou er in React.js als volgt uitzien:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React from "react";

const App = () => {
    return (
        <div style={styles.container}>
            <p>Hello World</p>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flex: 1,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
}

export default App;
```

Je ziet dat deze twee componenten erg veel op elkaar lijken. De `View` component is een container component die andere componenten kan bevatten. De `div` tag in HTML is ook een container component die andere elementen kan bevatten. Een belangrijk verschil is dat alle Views by default flexbox containers zijn. Je hoeft dit niet expliciet aan te geven. In React.js moet je dit wel expliciet aangeven door de `display: flex` property toe te voegen aan de `div` tag.

Let op: de standaardrichting is in React Native **`column`** (alles onder elkaar), terwijl dat op het web `row` is. Meer hierover zie je in het onderdeel [Flexbox](../flexbox/index.md).
