---
sidebar_position: 10
---

import HyperframesVideo from '@site/src/components/HyperframesVideo';

# AsyncStorage

<HyperframesVideo name="react-native-async-storage" title="React Native - AsyncStorage" />

AsyncStorage is een manier om data op te slaan op de telefoon. Het is een eenvoudige key-value opslag: je bewaart een waarde onder een naam (de key) en haalt ze later met diezelfde naam terug op. Dit is zeer gelijkaardig aan de `localStorage` in een web browser.

Dit geeft het voordeel dat je data kan opslaan die je wil bijhouden als je de applicatie sluit.

Er is wel één groot verschil met `localStorage`: AsyncStorage is **asynchroon**. Elke functie geeft een `Promise` terug, dus je moet telkens `await` gebruiken (in een `async` functie) om op het resultaat te wachten.

## Installatie

Om AsyncStorage te gebruiken moeten we eerst de `@react-native-async-storage/async-storage` library installeren:

```bash
npx expo install @react-native-async-storage/async-storage
```

## Opslaan/uitlezen van een string

Om een string op te slaan in AsyncStorage gebruiken we de `setItem` functie. Deze functie heeft twee parameters: de key en de value. De key is een string die we gebruiken om de value later terug op te halen. De value is de string die we willen opslaan.

Met de `getItem` functie halen we de waarde terug op. Bestaat de key nog niet, dan krijg je `null` terug.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  await AsyncStorage.setItem("name", "John Doe");
};

const getData = async () => {
  const value: string | null = await AsyncStorage.getItem("name");
  if (value !== null) {
    Alert.alert(value);
  } else {
    Alert.alert("No Data found");
  }
};

const Index = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Load Data" onPress={getData} />
    </View>
  );
};

export default Index;
```

## Opslaan/uitlezen van een getal

AsyncStorage kan enkel strings opslaan. Wil je een getal opslaan, dan moet je de waarde eerst omzetten naar een string. Dit kan je doen met de `toString` methode. Om een getal terug te halen uit AsyncStorage moet je de string terug omzetten naar een getal. Dit kan je doen met de `Number` functie.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  const randomNumber: number = Math.floor(Math.random() * 100);
  await AsyncStorage.setItem("randomNumber", randomNumber.toString());
};

const getData = async () => {
  const value: string | null = await AsyncStorage.getItem("randomNumber");
  if (value !== null) {
    const randomNumber: number = Number(value);
    Alert.alert(`The number is ${randomNumber}`);
  } else {
    Alert.alert("No Data found");
  }
};

const Index = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Load Data" onPress={getData} />
    </View>
  );
};

export default Index;
```

## Opslaan/uitlezen van een object

Om een object op te slaan in AsyncStorage moet je eerst het object omzetten naar een string. Dit kan je doen met de `JSON.stringify` functie. Om een object terug te halen uit AsyncStorage moet je de string terug omzetten naar een object. Dit kan je doen met de `JSON.parse` functie.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Student {
  name: string;
  age: number;
}

const storeData = async () => {
  const student: Student = {
    name: "John Doe",
    age: Math.floor(Math.random() * 10) + 18
  };
  await AsyncStorage.setItem("randomStudent", JSON.stringify(student));
};

const getData = async () => {
  const value: string | null = await AsyncStorage.getItem("randomStudent");
  if (value !== null) {
    const student: Student = JSON.parse(value);
    Alert.alert(`${student.name} is ${student.age} years old`);
  } else {
    Alert.alert("No Data found");
  }
};

const Index = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Load Data" onPress={getData} />
    </View>
  );
};

export default Index;
```

:::info
`JSON.parse` geeft een waarde van het type `any` terug. Door ze in een variabele van het type `Student` te steken, zeggen we aan TypeScript wat erin zit. TypeScript controleert dat niet: sla je onder dezelfde key iets anders op, dan merk je dat pas als je app crasht.
:::

## Opslaan/uitlezen van een array van objecten

Een array van objecten sla je op dezelfde manier op als een enkel object: met `JSON.stringify` en `JSON.parse`. Wil je een element toevoegen, dan haal je eerst de bestaande array op, voeg je het nieuwe element toe en sla je de volledige array opnieuw op. AsyncStorage kan een element niet rechtstreeks aan een opgeslagen array toevoegen.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Student {
  name: string;
  age: number;
}

const getStudents = async (): Promise<Student[]> => {
  const value: string | null = await AsyncStorage.getItem("students");
  if (value !== null) {
    return JSON.parse(value);
  }
  return [];
};

const addStudent = async () => {
  const students: Student[] = await getStudents();
  const student: Student = {
    name: `Student ${students.length + 1}`,
    age: Math.floor(Math.random() * 10) + 18
  };
  await AsyncStorage.setItem("students", JSON.stringify([...students, student]));
};

const showStudents = async () => {
  const students: Student[] = await getStudents();
  if (students.length > 0) {
    Alert.alert(students.map(student => `${student.name} (${student.age})`).join("\n"));
  } else {
    Alert.alert("No students found");
  }
};

const Index = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Add Student" onPress={addStudent} />
      <Button title="Show Students" onPress={showStudents} />
    </View>
  );
};

export default Index;
```

Als er nog niets opgeslagen is, geeft `getStudents` een lege array terug. Zo hoeft de rest van de code geen rekening te houden met `null`.

## Verwijderen en keys opvragen

AsyncStorage heeft nog een paar handige functies:

- `removeItem(key)` verwijdert de waarde onder één key.
- `clear()` verwijdert alles wat je app in AsyncStorage bewaard heeft.
- `getAllKeys()` geeft een array terug met alle keys die je app gebruikt.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async () => {
  await AsyncStorage.setItem("name", "John Doe");
  await AsyncStorage.setItem("age", "21");
};

const showKeys = async () => {
  const keys = await AsyncStorage.getAllKeys();
  if (keys.length > 0) {
    Alert.alert(`Keys: ${keys.join(", ")}`);
  } else {
    Alert.alert("No keys found");
  }
};

const removeName = async () => {
  await AsyncStorage.removeItem("name");
};

const clearAll = async () => {
  await AsyncStorage.clear();
};

const Index = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Show Keys" onPress={showKeys} />
      <Button title="Remove Name" onPress={removeName} />
      <Button title="Clear All" onPress={clearAll} />
    </View>
  );
};

export default Index;
```

Druk op "Store Data" en daarna op "Show Keys": je ziet `name` en `age`. Na "Remove Name" blijft enkel `age` over, en na "Clear All" is alles weg.

## Foutafhandeling

Het opslaan of uitlezen kan mislukken, bijvoorbeeld als de opslag van het toestel vol is. Ook `JSON.parse` kan een fout gooien als de opgeslagen string geen geldige JSON is. Omdat we met `await` werken, vangen we die fouten op met een `try/catch` blok. Anders krijgt de gebruiker een crash of een onduidelijke foutmelding.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React from "react";

import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Student {
  name: string;
  age: number;
}

const storeData = async () => {
  try {
    const student: Student = { name: "John Doe", age: 21 };
    await AsyncStorage.setItem("student", JSON.stringify(student));
  } catch (error) {
    Alert.alert("Error", "The student could not be saved");
  }
};

const storeInvalidData = async () => {
  try {
    await AsyncStorage.setItem("student", "this is not JSON");
  } catch (error) {
    Alert.alert("Error", "The student could not be saved");
  }
};

const getData = async () => {
  try {
    const value: string | null = await AsyncStorage.getItem("student");
    if (value !== null) {
      const student: Student = JSON.parse(value);
      Alert.alert(`${student.name} is ${student.age} years old`);
    } else {
      Alert.alert("No Data found");
    }
  } catch (error) {
    Alert.alert("Error", "The student could not be loaded");
  }
};

const Index = () => {
  return (
    <View>
      <Text>AsyncStorage</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Store Invalid Data" onPress={storeInvalidData} />
      <Button title="Load Data" onPress={getData} />
    </View>
  );
};

export default Index;
```

Druk op "Store Invalid Data" en daarna op "Load Data". `JSON.parse` gooit dan een fout, die we opvangen in het `catch` blok.

## State in AsyncStorage

We kunnen ook de state van een component opslaan in AsyncStorage. Dit kan handig zijn als we de state willen bijhouden als de gebruiker de applicatie sluit. We moeten er dan voor zorgen dat de state bij het opstarten ingeladen wordt, en dat elke wijziging in state ook opgeslagen wordt in AsyncStorage.

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [counter, setCounter] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const value: string | null = await AsyncStorage.getItem("counter");
        if (value !== null) {
          setCounter(Number(value));
        }
      } catch (error) {
        Alert.alert("Error", "The counter could not be loaded");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    const storeData = async () => {
      try {
        await AsyncStorage.setItem("counter", counter.toString());
      } catch (error) {
        Alert.alert("Error", "The counter could not be saved");
      }
    };
    storeData();
  }, [counter, loading]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  return (
    <View>
      <Text>AsyncStorage</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

export default Index;
```

We gebruiken hier twee `useEffect` hooks en een extra state `loading`.

De eerste `useEffect` hook wordt uitgevoerd als het component voor het eerst geladen wordt. In deze `useEffect` hook halen we de waarde van `counter` op uit AsyncStorage. Als er een waarde gevonden wordt dan zetten we deze waarde in de state van het component. Als er geen waarde gevonden wordt dan blijft de state op 0 staan. In het `finally` blok zetten we `loading` op `false`, ook als het inladen mislukt is.

De tweede `useEffect` hook wordt uitgevoerd als de state van `counter` verandert. In deze `useEffect` hook slaan we de nieuwe waarde van `counter` op in AsyncStorage. Dat doen we pas als het inladen klaar is. Zonder die controle zou de tweede `useEffect` bij de eerste render meteen de beginwaarde `0` opslaan, terwijl de eerste `useEffect` de bewaarde waarde nog aan het ophalen is. Dan loop je het risico dat de bewaarde waarde overschreven wordt.

### Laadtoestand

Het ophalen uit AsyncStorage duurt even. Zolang `loading` op `true` staat, tonen we een `ActivityIndicator` in plaats van de teller. Zo ziet de gebruiker niet eerst kort `Counter: 0` verschijnen, dat daarna verspringt naar de bewaarde waarde. Er kan ook niemand op "Increment" drukken voordat de bewaarde waarde ingeladen is.

## Meer informatie

Voor meer informatie over de `AsyncStorage` package kan je de [documentatie](https://docs.expo.dev/versions/latest/sdk/async-storage/) raadplegen.
