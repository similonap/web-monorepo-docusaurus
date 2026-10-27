---
sidebar_position: 8
---

# KeyboardAvoidingView

Op een telefoon schuift het toetsenbord over je app heen zodra de gebruiker in een `TextInput` tikt. Staat het invoerveld onderaan het scherm, dan verdwijnt het achter het toetsenbord en zie je niet meer wat je typt.

In het voorbeeld hieronder staat een loginformulier onderaan het scherm. Open het op je telefoon (bv. in Expo Go) en tik in een van de invoervelden: het toetsenbord bedekt het formulier.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inloggen</Text>
            <TextInput placeholder="E-mail" style={styles.input}/>
            <TextInput placeholder="Wachtwoord" secureTextEntry style={styles.input}/>
            <Button title="Inloggen" onPress={() => {}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "flex-end", padding: 16, gap: 8, paddingTop: Constants.statusBarHeight},
    title: {fontSize: 24, fontWeight: "bold"},
    input: {borderColor: "gray", borderWidth: 1, padding: 8}
});

export default Index;
```

De `KeyboardAvoidingView` component lost dit op. Het is een `View` die zichzelf aanpast zodra het toetsenbord verschijnt, zodat de inhoud erboven blijft staan.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform} from "react-native";

const Index = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text style={styles.title}>Inloggen</Text>
            <TextInput placeholder="E-mail" style={styles.input}/>
            <TextInput placeholder="Wachtwoord" secureTextEntry style={styles.input}/>
            <Button title="Inloggen" onPress={() => {}}/>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "flex-end", padding: 16, gap: 8, paddingTop: Constants.statusBarHeight},
    title: {fontSize: 24, fontWeight: "bold"},
    input: {borderColor: "gray", borderWidth: 1, padding: 8}
});

export default Index;
```

We hebben de buitenste `View` gewoon vervangen door een `KeyboardAvoidingView`. Let erop dat die `flex: 1` heeft, zodat hij het volledige scherm vult. Anders heeft hij geen ruimte om zich aan te passen.

:::info
Het effect van `KeyboardAvoidingView` zie je enkel op een echte telefoon (bv. in Expo Go). In de webpreview is er geen schermtoetsenbord, dus daar gebeurt er niets.
:::

## behavior

Met de `behavior` prop bepaal je hoe de `KeyboardAvoidingView` plaats maakt voor het toetsenbord:
- `"padding"`: voegt onderaan padding toe die even hoog is als het toetsenbord. De inhoud schuift daardoor naar boven.
- `"height"`: maakt de view zelf minder hoog.
- `"position"`: schuift de volledige view naar boven.

Welke waarde het best werkt, verschilt tussen iOS en Android. Op iOS werkt `"padding"` het best, op Android `"height"`. Daarom kiezen we de waarde op basis van `Platform.OS`. Die geeft aan op welk platform je app draait: `"ios"`, `"android"` of `"web"`.

```tsx
behavior={Platform.OS === "ios" ? "padding" : "height"}
```

## keyboardVerticalOffset

De `KeyboardAvoidingView` gaat ervan uit dat hij helemaal bovenaan het scherm begint. Staat er nog iets boven, zoals de header van een Stack Navigation in [Expo Router](../expo-router/index.md), dan klopt zijn berekening niet en blijft een deel van het formulier toch achter het toetsenbord. Met de `keyboardVerticalOffset` prop geef je op hoeveel ruimte er boven de view staat.

```tsx
<KeyboardAvoidingView
    style={{flex: 1}}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={100}
>
    ...
</KeyboardAvoidingView>
```

Hier zeggen we dat er 100 eenheden boven de view staan. Probeer zelf welke waarde past bij de header van je app.

## Lange formulieren

Past je formulier niet op het scherm als het toetsenbord open staat, dan zet je een [ScrollView](../lists-and-keys/scrollview.md) in de `KeyboardAvoidingView`. De `KeyboardAvoidingView` zorgt ervoor dat de `ScrollView` niet achter het toetsenbord verdwijnt, en met de `ScrollView` kan de gebruiker naar elk invoerveld scrollen.

Vergeet ook [`keyboardShouldPersistTaps="handled"`](../lists-and-keys/scrollview.md#keyboardshouldpersisttaps) niet op de `ScrollView`, anders moet de gebruiker twee keer op de knop tikken terwijl het toetsenbord open staat.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {Text, TextInput, Button, ScrollView, StyleSheet, KeyboardAvoidingView, Platform} from "react-native";

const fields = ["Voornaam", "Achternaam", "Straat", "Huisnummer", "Postcode", "Gemeente", "E-mail", "Telefoon"];

const Index = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
                <Text style={styles.title}>Registreren</Text>
                {fields.map(field => (
                    <TextInput key={field} placeholder={field} style={styles.input}/>
                ))}
                <Button title="Registreren" onPress={() => {}}/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: Constants.statusBarHeight},
    content: {padding: 16, gap: 16},
    title: {fontSize: 24, fontWeight: "bold"},
    input: {borderColor: "gray", borderWidth: 1, padding: 12}
});

export default Index;
```
