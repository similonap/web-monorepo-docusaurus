import HyperframesVideo from '@site/src/components/HyperframesVideo';

# Scrollable

<HyperframesVideo name="react-native-scrollview" title="React Native - ScrollView" />

Tot nu toe konden we alleen maar lijsten tonen die in de lengte van het scherm passen. Als we een lijst hebben die langer is dan het scherm, dan kunnen we deze niet tonen. We kunnen dit oplossen door een `ScrollView` te gebruiken. Een `ScrollView` is een component die een lijst kan tonen die langer is dan het scherm.

Als we bijvoorbeeld de elementen iets groter maken dan zie je direct het probleem:

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>
          {colors.map(color => (
              <View key={color} style={{height: 200, backgroundColor: color}}/>
          ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "stretch", paddingTop: Constants.statusBarHeight}
});

export default Index;
```

We kunnen hier eenvoudig een ScrollView rondzetten om dit probleem op te lossen:

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, ScrollView,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{flex: 1, alignItems: "stretch"}}>
                    {colors.map(color => (
                        <View key={color} style={{height: 200, backgroundColor: color}}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {paddingTop: Constants.statusBarHeight}
});

export default Index;
```

De `ScrollView` component heeft heel wat props. Hieronder bekijken we de belangrijkste. Meer informatie over alle props van de `ScrollView` component kan je hier vinden:
- https://reactnative.dev/docs/scrollview#props

## contentContainerStyle

Een `ScrollView` bestaat eigenlijk uit twee delen: het kader dat op het scherm staat en de inhoud die daarin scrollt. Met de `style` prop style je het kader, met de `contentContainerStyle` prop style je de inhoud.

Wil je bijvoorbeeld wat ruimte rond en tussen de elementen in de lijst, dan zet je de `padding` en de `gap` in de `contentContainerStyle`. De achtergrondkleur van het kader zetten we in de `style`.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, ScrollView, StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                {colors.map(color => (
                    <View key={color} style={{height: 200, borderRadius: 10, backgroundColor: color}}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    scrollView: {backgroundColor: "#eeeeee"},
    content: {padding: 16, gap: 16}
});

export default Index;
```

Probeer zelf eens de `padding` in de `style` te zetten in plaats van in de `contentContainerStyle`. Je zal zien dat de padding dan niet mee scrollt.

:::warning
De layout van de inhoud (`justifyContent` en `alignItems`) moet je altijd in de `contentContainerStyle` zetten. Zet je ze in de `style` prop, dan krijg je een foutmelding.
:::

Een handige truc is `flexGrow: 1` in de `contentContainerStyle`. Daarmee wordt de inhoud minstens even groot als de `ScrollView` zelf. Zo kan je inhoud centreren als die korter is dan het scherm, terwijl je toch nog kan scrollen als ze langer wordt.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, ScrollView, StyleSheet} from "react-native";

const Index = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={{fontSize: 24}}>Ik sta in het midden</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    content: {flexGrow: 1, justifyContent: "center", alignItems: "center"}
});

export default Index;
```

## horizontal

Standaard scrollt een `ScrollView` verticaal. Met de `horizontal` prop kan je horizontaal scrollen. Dit wordt vaak gebruikt voor een rij met kaartjes of categorieën.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, ScrollView, StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kleuren</Text>
            <ScrollView horizontal style={{flexGrow: 0}} contentContainerStyle={styles.content}>
                {colors.map(color => (
                    <View key={color} style={{width: 150, height: 150, borderRadius: 10, backgroundColor: color}}/>
                ))}
            </ScrollView>
            <Text style={styles.title}>Hier komt de rest van de pagina</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    title: {fontSize: 20, padding: 16},
    content: {paddingHorizontal: 16, gap: 16}
});

export default Index;
```

Een `ScrollView` neemt standaard alle beschikbare ruimte in. Met `flexGrow: 0` in de `style` zorgen we ervoor dat de horizontale `ScrollView` maar zo hoog wordt als de kaartjes, zodat er nog plaats is voor de rest van de pagina.

## showsVerticalScrollIndicator en showsHorizontalScrollIndicator

Tijdens het scrollen toont een `ScrollView` een scrollbalk. Wil je die verbergen, dan zet je `showsVerticalScrollIndicator` (bij verticaal scrollen) of `showsHorizontalScrollIndicator` (bij horizontaal scrollen) op `false`.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, ScrollView, StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {colors.map(color => (
                    <View key={color} style={{height: 200, backgroundColor: color}}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight}
});

export default Index;
```

## keyboardShouldPersistTaps

Als je een formulier met een `TextInput` in een `ScrollView` zet, dan loop je tegen een vervelend probleem aan. Terwijl het toetsenbord open staat, zal de eerste tik op een knop enkel het toetsenbord sluiten. De `onPress` van de knop wordt dan niet uitgevoerd en de gebruiker moet een tweede keer tikken.

Dit los je op met de `keyboardShouldPersistTaps` prop. Deze prop kan drie waarden hebben:
- `"never"`: een tik buiten de `TextInput` sluit altijd eerst het toetsenbord. Dit is de standaardwaarde.
- `"always"`: het toetsenbord blijft open en de tik wordt doorgegeven aan de knop.
- `"handled"`: de tik wordt doorgegeven aan de knop. Tik je ergens anders (niet op een knop), dan sluit het toetsenbord. Dit is meestal wat je wil.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";
import Constants from "expo-constants";
import {View, Text, TextInput, Button, ScrollView, StyleSheet} from "react-native";

const Index = () => {
    const [name, setName] = useState<string>("");
    const [names, setNames] = useState<string[]>([]);

    const addName = () => {
        setNames([...names, name]);
        setName("");
    }

    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Naam"
                    style={styles.input}
                />
                <Button title="Toevoegen" onPress={addName}/>
                {names.map((item, index) => (
                    <Text key={item + index}>{item}</Text>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    content: {padding: 16, gap: 8},
    input: {borderColor: "gray", borderWidth: 1, padding: 8}
});

export default Index;
```

:::info
Dit verschil zie je enkel op een echte telefoon (bv. in Expo Go), want in de webpreview is er geen schermtoetsenbord. Probeer het voorbeeld eens met en zonder `keyboardShouldPersistTaps="handled"`.
:::

## pagingEnabled

Met de `pagingEnabled` prop stopt de `ScrollView` niet op een willekeurige plaats, maar altijd netjes op een "pagina". Een pagina is even breed (of even hoog) als de `ScrollView` zelf. Samen met `horizontal` kan je zo een carrousel maken, zoals je die vaak ziet bij foto's of op een welkomstscherm.

We gebruiken hier de [`useWindowDimensions`](../hooks/index.md#usewindowdimensions) hook om de breedte van het scherm op te vragen. Zo is elke pagina precies even breed als het scherm.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, ScrollView, StyleSheet, useWindowDimensions} from "react-native";

interface Page {
    title: string;
    color: string;
}

const pages: Page[] = [
    {title: "Welkom", color: "red"},
    {title: "Ontdek", color: "green"},
    {title: "Start", color: "blue"}
];

const Index = () => {
    const {width} = useWindowDimensions();

    return (
        <View style={styles.container}>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{flexGrow: 0}}>
                {pages.map(page => (
                    <View key={page.title} style={[styles.page, {width: width, backgroundColor: page.color}]}>
                        <Text style={styles.pageTitle}>{page.title}</Text>
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.hint}>Swipe naar links</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    page: {height: 300, justifyContent: "center", alignItems: "center"},
    pageTitle: {fontSize: 32, color: "white"},
    hint: {padding: 16, textAlign: "center"}
});

export default Index;
```

## scrollTo en scrollToEnd

Soms wil je zelf (vanuit je code) laten scrollen, bijvoorbeeld met een knop "Terug naar boven" of om in een chat automatisch naar het laatste bericht te gaan. Daarvoor heeft de `ScrollView` twee functies:
- `scrollTo({x, y, animated})`: scrollt naar een bepaalde positie. Met `y: 0` ga je terug naar boven.
- `scrollToEnd({animated})`: scrollt helemaal naar het einde.

Dit zijn geen props maar functies van het component zelf. Om ze te kunnen oproepen hebben we een referentie naar de `ScrollView` nodig. Die maken we met de `useRef` hook, net zoals je in React een referentie naar een HTML-element maakt.

```typescript expo={"dependencies":"expo-constants"}
import React, {useRef} from "react";
import Constants from "expo-constants";
import {View, Button, ScrollView, StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    const scrollViewRef = useRef<ScrollView>(null);

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button title="Naar boven" onPress={() => scrollViewRef.current?.scrollTo({y: 0, animated: true})}/>
                <Button title="Naar beneden" onPress={() => scrollViewRef.current?.scrollToEnd({animated: true})}/>
            </View>
            <ScrollView ref={scrollViewRef}>
                {colors.map(color => (
                    <View key={color} style={{height: 200, backgroundColor: color}}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    buttons: {flexDirection: "row", justifyContent: "space-around", padding: 8}
});

export default Index;
```

Wil je dat de `ScrollView` automatisch naar beneden scrollt telkens er iets wordt toegevoegd (zoals in een chat), dan kan je `scrollToEnd` oproepen in de `onContentSizeChange` prop. Die wordt uitgevoerd telkens de grootte van de inhoud verandert:

```typescript
<ScrollView
    ref={scrollViewRef}
    onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({animated: true})}
>
    ...
</ScrollView>
```
