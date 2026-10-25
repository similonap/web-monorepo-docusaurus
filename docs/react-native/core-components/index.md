---
sidebar_position: 4
---

# Core Components

Zoals we al gezien hebben kan er in React Native geen gebruik gemaakt worden van HTML elementen. In plaats daarvan gebruiken we React Native componenten, de zogenaamde core components. Je schrijft ze in JSX, maar React Native zet ze om naar echte **native UI-elementen** van het platform. Een `View` wordt bijvoorbeeld een `UIView` op iOS en een `android.view.View` op Android. Daarom voelt een React Native app aan als een echte native app en niet als een website.

Veel core components zijn wel *vergelijkbaar* met een HTML element (een `View` met een `div`, een `TextInput` met een `input`), maar ze hebben een andere naam en werken soms anders. In deze sectie gaan we de meest gebruikte componenten bekijken.

## View

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

## StyleSheet

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

## Text

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

### Text nesting

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

### Geen overerving van stijlen

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

## Image

Een Image is een react component om verschillende types van afbeeldingen te laten zien:
- Afbeeldingen van het internet
- Static image resources
- Afbeeldingen van local storage (zoals fotos van de camera)

### Static image resources

De afbeeldingen komen mee in je project directory staan bij de source bestanden. Je kan deze afbeeldingen gebruiken door de `require` functie te gebruiken. 

```typescript
<Image source={require("./bunny.jpg")}/>
```

### Afbeeldingen van het internet

Je kan ook afbeeldingen van het internet gebruiken. Dit doe je door de `uri` property te gebruiken. Images van het internet moeten altijd een width en een height style hebben.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    image: { width: 100, height: 100 }
});

export default Index;
```

### Styling

Een `Image` is geen `View`, maar ondersteunt wel veel van dezelfde style properties (zoals `width`, `height`, `margin`, `borderRadius` en `borderWidth`). Je kan een afbeelding dus op dezelfde manier stylen.

Meer informatie over de styling props van het `Image` component kan je hier vinden:
- https://reactnative.dev/docs/image-style-props

### Resize mode

De `resizeMode` property kan je gebruiken om de manier waarop een image wordt weergegeven in het geval dat de afmetingen van de image niet overeenkomen met de afmetingen van de `Image` component.

De volgende waarden zijn mogelijk:
- `cover` (standaard) - De afbeelding vult de volledige `Image` component, met behoud van de aspect ratio. Wat buiten het vlak valt, wordt weggeknipt.
- `contain` - De afbeelding wordt zo groot mogelijk gemaakt, maar past volledig in de `Image` component. Er wordt rekening gehouden met de aspect ratio, dus de afbeelding wordt niet uitgerekt.
- `repeat` - De afbeelding wordt herhaald tot de `Image` component gevuld is.
- `center` - De afbeelding wordt gecentreerd en niet vergroot. Is ze groter dan de `Image` component, dan wordt ze wel verkleind (met behoud van de aspect ratio).
- `stretch` - De afbeelding wordt zo groot mogelijk gemaakt. Er wordt geen rekening gehouden met de aspect ratio van de afbeelding. De afbeelding wordt uitgerekt.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Constants from "expo-constants";

const Index = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingTop: Constants.statusBarHeight },
    image: { width: 150, height: 200, resizeMode: "center" }
});

export default Index;
```

## TextInput

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

## Button

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

## Pressable

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

## Handling events

Zoals we al bij de pressable hebben gezien, kan je events afhandelen door een functie mee te geven aan de `onPress` prop. 

Net zoals in React.js worden events in camelCase geschreven. Een belangrijk verschil: in React Native bestaat er geen `onClick`. Op een touchscreen klik je niet, je drukt. Daarom heet het event `onPress`.

:::info Alert en de previews
In veel voorbeelden en tutorials zie je `Alert.alert("Pressed!")` om te tonen dat een event werkt. Op je telefoon toont dat een native dialoogvenster. In de browser doet `Alert.alert` echter **niets**, en de previews op deze pagina draaien in de browser. Daarom tonen we het resultaat hieronder met state op het scherm of met `console.log`.
:::

### Button

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

### TextInput

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

### Pressable

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
```