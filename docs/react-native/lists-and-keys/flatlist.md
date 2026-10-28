import HyperframesVideo from '@site/src/components/HyperframesVideo';

# FlatList

<HyperframesVideo name="react-native-flatlist" title="React Native - FlatList" />

Een andere manier om een lijst te maken is door gebruik te maken van de `FlatList` component. Deze component heeft een aantal voordelen ten opzichte van de map functie. De `FlatList` component is een native component en zal dus sneller zijn dan een lijst die gemaakt wordt met de map functie. Daarnaast zal de `FlatList` component alleen de elementen renderen die op het scherm zichtbaar zijn. Dit is handig als je een lijst hebt met veel elementen. 

FlatList is automatisch scrollable dus hoeft niet in een `ScrollView` gezet te worden.

De `FlatList` component heeft een aantal props die we moeten meegeven. De `data` prop is de lijst die we willen tonen. De `renderItem` prop is een functie die een item uit de lijst zal renderen. De `keyExtractor` prop is een functie die een key zal teruggeven voor een item uit de lijst. 

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, FlatList,StyleSheet} from "react-native";

interface Person {
    id: number;
    name: string;
    age: number;
}

const persons : Person[] = [
    {id: 1, name: "Andie", age: 25},
    {id: 2, name: "Sven", age: 24},
    {id: 3, name: "Dirk", age: 27},
    {id: 4, name: "Lotte", age: 22},
]

const PersonComponent = ({item} : {item: Person}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{flex: 1}}>{item.name}</Text>
            <Text style={{flex: 1}}>{item.age}</Text>
        </View>
    )
}

const Index = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={persons}
                renderItem={({item}) => <PersonComponent item={item}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection: "column", paddingTop: Constants.statusBarHeight}
});

export default Index;
```

We herdoen ook nog het voorbeeld van de kleuren maar dan met het `FlatList` component.

```typescript expo={"dependencies":"expo-constants"}
import React from "react";
import Constants from "expo-constants";
import {View, Text, FlatList,StyleSheet} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>       
            <FlatList
                data={colors}
                renderItem={({item}) => (
                    <View style={{height: 200, backgroundColor: item}}/>
                )}
                keyExtractor={item => item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default Index;
```

## ListFooterComponent

De `FlatList` component heeft ook een `ListFooterComponent` prop. Deze prop kan je gebruiken om een component te tonen onderaan de lijst. Dit kan bijvoorbeeld handig zijn om een knop te tonen om meer items te laden. Of om een loading indicator te tonen.

```typescript expo={"dependencies":"expo-constants"}
import React, {useState} from "react";
import Constants from "expo-constants";
import {View, Text, FlatList,StyleSheet, ActivityIndicator} from "react-native";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const Index = () => {
    return (
        <View style={styles.container}>       
            <FlatList
                data={colors}
                renderItem={({item}) => (
                    <View style={{height: 200, backgroundColor: item}}/>
                )}
                keyExtractor={item => item}
                ListFooterComponent={<ActivityIndicator animating={true} style={{margin: 10}}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection: "column", alignItems: "stretch", flex: 1, paddingTop: Constants.statusBarHeight}
});

export default Index;
```
