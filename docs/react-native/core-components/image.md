---
sidebar_position: 4
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Image

<YouTubeVideo src="https://youtu.be/_pWcHrrCLzk" title="React Native - Image" />

Een Image is een react component om verschillende types van afbeeldingen te laten zien:
- Afbeeldingen van het internet
- Static image resources
- Afbeeldingen van local storage (zoals fotos van de camera)

## Static image resources

De afbeeldingen komen mee in je project directory staan bij de source bestanden. Je kan deze afbeeldingen gebruiken door de `require` functie te gebruiken. 

```typescript
<Image source={require("./bunny.jpg")}/>
```

## Afbeeldingen van het internet

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

## Styling

Een `Image` is geen `View`, maar ondersteunt wel veel van dezelfde style properties (zoals `width`, `height`, `margin`, `borderRadius` en `borderWidth`). Je kan een afbeelding dus op dezelfde manier stylen.

Meer informatie over de styling props van het `Image` component kan je hier vinden:
- https://reactnative.dev/docs/image-style-props

## Resize mode

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
