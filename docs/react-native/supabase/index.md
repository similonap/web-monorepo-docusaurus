---
sidebar_position: 11
---

# Supabase: login en data

In dit stappenplan bouwen we een kleine dierentuin-app met [Supabase](https://supabase.com/) als backend. De gebruiker logt in met een e-mailadres en een wachtwoord, ziet een lijst met dieren uit een tabel en kan een dier liken. Meer moet de app niet kunnen.

Het belangrijkste is niet de dierentuin, maar het **patroon** erachter. We steken alle code die met Supabase praat in twee contexts:

- een `AuthContext` die bijhoudt wie er ingelogd is en functies aanbiedt om in te loggen, te registreren en uit te loggen;
- een `DataContext` die de rijen uit één tabel ophaalt en de likes van de gebruiker bijhoudt.

De schermen gebruiken enkel `useContext` en weten niet dat er een Supabase achter zit. Wil je later recepten, boeken of concerten tonen in plaats van dieren, dan pas je enkel de tabel en de interface aan. Hoe dat gaat, zie je in [Het patroon hergebruiken](#het-patroon-hergebruiken).

:::info Voorkennis
We bouwen verder op [Context](../../react/child-parent/context.md), [Expo Router](../expo-router/index.md), [Controlled components](../controlled-components/index.md) en [AsyncStorage](../async-storage/index.md). Lees die eerst als ze nog niet vertrouwd zijn.
:::

## Wat gaan we bouwen?

De app heeft drie schermen:

- **Login**: twee invoervelden en een knop om in te loggen of te registreren.
- **Dierentuin**: een lijst van alle dieren, met een hartje en het aantal likes per dier.
- **Detail**: één dier in het groot, met hetzelfde hartje.

Op het einde ziet je project er zo uit:

```
.env.local
src/
├── app/
│   ├── _layout.tsx        Providers + welke schermen zichtbaar zijn
│   ├── login.tsx          Inloggen en registreren
│   ├── index.tsx          Lijst van dieren
│   └── [id].tsx           Detail van één dier
├── components/
│   └── LikeButton.tsx     Hartje, leest alles uit de DataContext
├── context/
│   ├── AuthContext.tsx    Wie is er ingelogd?
│   └── DataContext.tsx    Rijen uit de tabel + likes
├── lib/
│   └── supabase.ts        De Supabase client
└── types.ts               De interface van één rij
```

## Stap 1: Supabase-project aanmaken

1. Maak een gratis account aan op [supabase.com](https://supabase.com/) en klik op **New project**.
2. Geef het project een naam (bv. `dierentuin`), kies een databasewachtwoord en de regio **Central EU (Frankfurt)**. Het wachtwoord heb je in deze app niet nodig, maar bewaar het toch.
3. Wacht tot het project klaar is. Dat duurt een minuutje.

### E-mailbevestiging uitzetten

Standaard stuurt Supabase na het registreren een bevestigingsmail en kan je pas inloggen nadat je op de link geklikt hebt. Om te testen is dat onhandig. Zet het daarom uit:

**Authentication** → **Sign In / Providers**. Zet bovenaan de pagina, in het blok **User Signups**, de optie **Confirm email** uit en klik op **Save changes**. Je vindt deze optie dus niet in het venster dat opent als je op de provider **Email** klikt.

:::warning
Zonder e-mailbevestiging kan iedereen een account aanmaken met een verzonnen e-mailadres. Voor een schoolproject is dat geen probleem, voor een echte app wel.
:::

## Stap 2: Tabellen aanmaken

Open in het dashboard de **SQL Editor**, plak onderstaande code en klik op **Run**.

```sql
-- De dieren
create table animals (
  id bigint generated always as identity primary key,
  name text not null,
  species text not null,
  emoji text not null
);

-- Wie heeft wat geliket?
create table likes (
  user_id uuid not null references auth.users on delete cascade,
  item_id bigint not null references animals on delete cascade,
  primary key (user_id, item_id)
);

-- Wat voorbeelddata
insert into animals (name, species, emoji) values
  ('Simba', 'Leeuw', '🦁'),
  ('Dumbo', 'Olifant', '🐘'),
  ('Gerrit', 'Giraf', '🦒'),
  ('Pingu', 'Pinguïn', '🐧'),
  ('Kaa', 'Slang', '🐍'),
  ('Marty', 'Zebra', '🦓');
```

Een paar dingen om op te letten:

- De tabel `likes` koppelt een gebruiker (`user_id`) aan een dier (`item_id`). De primary key bestaat uit die twee kolommen samen, dus een gebruiker kan hetzelfde dier maar één keer liken.
- `auth.users` is de tabel waarin Supabase zelf de gebruikers bijhoudt. Die hoef je niet aan te maken.
- We noemen de kolom bewust `item_id` en niet `animal_id`. Zo blijft de code in de app dezelfde als je later iets anders dan dieren toont.

### Row Level Security

Je app praat rechtstreeks met de database. Iedereen die je app heeft, heeft dus ook de sleutel om met je database te praten. Daarom zet je **Row Level Security** (RLS) aan: zonder policy mag niemand iets lezen of schrijven. Met policies bepaal je daarna wie wat mag.

Voer ook deze code uit in de SQL Editor:

```sql
alter table animals enable row level security;
alter table likes enable row level security;

-- Ingelogde gebruikers mogen alle dieren zien
create policy "Dieren lezen" on animals
  for select to authenticated using (true);

-- Ingelogde gebruikers mogen alle likes zien (om te tellen)
create policy "Likes lezen" on likes
  for select to authenticated using (true);

-- Je mag enkel een like toevoegen op je eigen naam
create policy "Zelf liken" on likes
  for insert to authenticated with check ((select auth.uid()) = user_id);

-- Je mag enkel je eigen like verwijderen
create policy "Zelf unliken" on likes
  for delete to authenticated using ((select auth.uid()) = user_id);
```

`auth.uid()` is het id van de gebruiker die de query uitvoert. Probeert iemand een like toe te voegen met het id van iemand anders, dan weigert de database dat.

Kijk in **Table Editor** of beide tabellen er staan en of `animals` zes rijen heeft.

## Stap 3: Expo-project en installatie

Maak een nieuw project aan zoals beschreven in [Nieuwe app aanmaken](../expo/index.md#nieuwe-app-aanmaken): kies **Latest** en voer daarna `npm run reset-project` uit.

```bash
npx create-expo-app@latest dierentuin
cd dierentuin
npm run reset-project
```

Installeer daarna de Supabase library, AsyncStorage en de icoontjes voor het hartje:

```bash
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @expo/vector-icons
```

### Sleutels in een `.env.local`-bestand

Supabase heeft twee gegevens nodig: de URL van je project en de **publishable key**. Supabase zet ze voor je klaar:

1. Klik in het dashboard bovenaan op de groene knop **Connect**.
2. Kies **Framework** (Use a client library) en selecteer bij **Framework** de optie **Expo React Native**.
3. Onder **Add files** staat een tabblad `.env.local`. Kopieer de inhoud met het kopieerknopje.

Maak in de root van je project (naast `package.json`) een bestand `.env.local` en plak de inhoud erin. Het ziet er zo uit:

```bash title=".env.local"
EXPO_PUBLIC_SUPABASE_URL=https://jouwproject.supabase.co
EXPO_PUBLIC_SUPABASE_KEY=sb_publishable_...
```

De andere tabbladen in dat venster (`utils/supabase.ts` en `App.tsx`) heb je niet nodig: die code schrijven we in de volgende stappen zelf.

Variabelen die beginnen met `EXPO_PUBLIC_` zet Expo mee in je app. Herstart `npx expo start` nadat je het bestand aangemaakt of aangepast hebt.

:::warning Enkel de publishable key
De publishable key (`sb_publishable_...`) mag in je app staan: ze geeft enkel toegang tot wat je RLS-policies toelaten. Je vindt ze ook onder **Project Settings** → **API Keys**, in het tabblad **Publishable and secret API keys**. Gebruik **nooit** de secret key (`sb_secret_...`) of je databasewachtwoord in je app. De oude sleutels in het tabblad **Legacy anon, service_role API keys** heb je niet nodig.

Een nieuw Expo-project negeert `.env.local` al in `.gitignore`, dus je sleutels komen niet op GitHub terecht.
:::

## Stap 4: De Supabase client

We maken één Supabase client aan die de hele app gebruikt.

```ts title="src/lib/supabase.ts"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { AppState } from "react-native";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Ververs de login enkel als de app op de voorgrond staat
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
```

- `storage: AsyncStorage` zorgt ervoor dat de login bewaard wordt op de telefoon. Sluit je de app en open je ze opnieuw, dan ben je nog steeds ingelogd.
- `detectSessionInUrl: false`: op een telefoon is er geen URL in een adresbalk waaruit Supabase een login kan halen.
- Een login (sessie) is maar een uur geldig. Supabase vernieuwt ze automatisch, maar dat heeft enkel zin als de app open staat. Daarvoor dient de `AppState`-listener.

Dit bestand pas je nooit meer aan, ook niet als je het patroon hergebruikt.

## Stap 5: De AuthContext

De `AuthContext` houdt de huidige **sessie** bij. Een sessie is het bewijs dat iemand ingelogd is: ze bevat onder andere de gebruiker (`session.user`) met zijn `id` en `email`. Is er geen sessie (`null`), dan is niemand ingelogd.

```tsx title="src/context/AuthContext.tsx"
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

interface IAuthContext {
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<string | null>;
  signUp: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
  session: null,
  loading: true,
  signIn: async () => null,
  signUp: async () => null,
  signOut: async () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error ? error.message : null;
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return error.message;
    if (!data.session) return "Bevestig eerst je e-mailadres via de mail die je kreeg.";
    return null;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session: session, loading: loading, signIn: signIn, signUp: signUp, signOut: signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
```

Wat gebeurt hier?

- `onAuthStateChange` registreert een functie die Supabase oproept telkens de login verandert: bij het opstarten (met de bewaarde sessie uit AsyncStorage, of `null`), bij inloggen, bij uitloggen en bij het vernieuwen van de sessie. We zetten de nieuwe sessie telkens in de state. Zo hoeven `signIn` en `signOut` zelf geen `setSession` te doen.
- `loading` staat op `true` tot Supabase de eerste keer laat weten of er al iemand ingelogd is. Zo tonen we niet heel even het loginscherm aan iemand die al ingelogd is.
- `signIn` en `signUp` geven een foutmelding terug als string, of `null` als alles goed ging. Zo kan het loginscherm de fout eenvoudig tonen.
- In de cleanup-functie van `useEffect` stoppen we met luisteren.

## Stap 6: De DataContext

De `DataContext` haalt de rijen uit één tabel op, houdt de likes bij en biedt een functie aan om te liken. Eerst beschrijven we hoe één rij uit de tabel eruitziet:

```ts title="src/types.ts"
export interface Animal {
  id: number;
  name: string;
  species: string;
  emoji: string;
}
```

De properties komen overeen met de kolommen van de tabel `animals`. Dan de context zelf:

```tsx title="src/context/DataContext.tsx" {5-7}
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "../lib/supabase";
import { AuthContext } from "./AuthContext";

// Enkel deze twee regels pas je aan voor een ander onderwerp
import type { Animal as Item } from "../types";
const ITEM_TABLE = "animals";

interface Like {
  user_id: string;
  item_id: number;
}

interface IDataContext {
  items: Item[];
  loading: boolean;
  error: string | null;
  reload: () => void;
  isLiked: (id: number) => boolean;
  likeCount: (id: number) => number;
  toggleLike: (id: number) => Promise<void>;
}

export const DataContext = createContext<IDataContext>({
  items: [],
  loading: false,
  error: null,
  reload: () => {},
  isLiked: () => false,
  likeCount: () => 0,
  toggleLike: async () => {},
});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const { session } = useContext(AuthContext);
  const userId = session?.user.id;

  const [items, setItems] = useState<Item[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    // Niemand ingelogd: niets tonen
    if (!userId) {
      setItems([]);
      setLikes([]);
      return;
    }

    let cancel = false;
    const loadData = async () => {
      setLoading(true);
      setError(null);

      const itemsResult = await supabase.from(ITEM_TABLE).select("*").order("name");
      const likesResult = await supabase.from("likes").select("user_id, item_id");
      if (cancel) return;

      if (itemsResult.error) {
        setError(itemsResult.error.message);
      } else if (likesResult.error) {
        setError(likesResult.error.message);
      } else {
        setItems(itemsResult.data);
        setLikes(likesResult.data);
      }
      setLoading(false);
    };
    loadData();

    return () => {
      cancel = true;
    };
  }, [userId, trigger]);

  const reload = () => {
    setTrigger((trigger) => trigger + 1);
  };

  const isLiked = (id: number) => {
    return likes.some((like) => like.item_id === id && like.user_id === userId);
  };

  const likeCount = (id: number) => {
    return likes.filter((like) => like.item_id === id).length;
  };

  const toggleLike = async (id: number) => {
    if (!userId) return;

    if (isLiked(id)) {
      setLikes((likes) => likes.filter((like) => !(like.item_id === id && like.user_id === userId)));
      const { error } = await supabase.from("likes").delete().eq("item_id", id).eq("user_id", userId);
      if (error) {
        setError(error.message);
        reload();
      }
    } else {
      setLikes((likes) => [...likes, { user_id: userId, item_id: id }]);
      const { error } = await supabase.from("likes").insert({ user_id: userId, item_id: id });
      if (error) {
        setError(error.message);
        reload();
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        items: items,
        loading: loading,
        error: error,
        reload: reload,
        isLiked: isLiked,
        likeCount: likeCount,
        toggleLike: toggleLike,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
```

Dit is hetzelfde patroon als de `DataProvider` uit [Context](../../react/child-parent/context.md#data-context), maar met Supabase in plaats van `fetch`:

- **Ophalen**: `supabase.from("animals").select("*")` haalt alle rijen op, `.order("name")` sorteert ze op naam. Je krijgt een object terug met `data` (de rijen) of `error` (wat er misging). Supabase gooit dus geen exception: je moet zelf `error` controleren.
- **Afhankelijk van de login**: de `DataProvider` gebruikt zelf de `AuthContext`. De `useEffect` hangt af van `userId`: logt iemand in, dan wordt de data opgehaald. Logt iemand uit, dan maken we de lijsten leeg. Logt er daarna iemand anders in, dan zie je meteen diens likes.
- **Herladen**: `reload` verhoogt `trigger`. Omdat `trigger` in de dependency array staat, voert React de `useEffect` opnieuw uit.
- **Likes**: we halen alle likes op en tellen in de app. `isLiked` kijkt of er een like is van de huidige gebruiker, `likeCount` telt alle likes voor een rij. Voor een kleine app is dat prima.
- **Liken**: `toggleLike` past eerst de state aan en stuurt pas daarna de wijziging naar Supabase. Zo kleurt het hartje meteen, zonder te wachten op het netwerk. Dit heet een *optimistic update*. Gaat er toch iets mis, dan tonen we de fout en halen we alles opnieuw op, zodat het scherm weer klopt met de database.

:::tip Waarom `Animal as Item`?
De context gebruikt overal het neutrale woord `Item` en de constante `ITEM_TABLE`. Daardoor staat het woord "animal" maar op twee plaatsen in dit bestand. Dat maakt hergebruiken eenvoudig.
:::

## Stap 7: Providers en beschermde schermen

In de root layout zetten we de twee providers rond de hele app. De `DataProvider` staat binnen de `AuthProvider`, want hij heeft de `AuthContext` nodig.

Daarnaast bepalen we welke schermen zichtbaar zijn. Daarvoor gebruiken we `Stack.Protected`: de schermen erin bestaan enkel als `guard` `true` is. Wie niet ingelogd is, kan enkel naar `login`. Wie ingelogd is, kan enkel naar de lijst en het detail. Verandert de sessie, dan stuurt Expo Router de gebruiker automatisch naar een scherm dat wel toegelaten is.

```tsx title="src/app/_layout.tsx"
import { Stack } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator, Button, View } from "react-native";
import AuthProvider, { AuthContext } from "../context/AuthContext";
import DataProvider from "../context/DataContext";

const RootNavigator = () => {
  const { session, loading, signOut } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Protected guard={session === null}>
        <Stack.Screen name="login" options={{ title: "Inloggen" }} />
      </Stack.Protected>

      <Stack.Protected guard={session !== null}>
        <Stack.Screen
          name="index"
          options={{
            title: "Dierentuin",
            headerRight: () => <Button title="Uitloggen" onPress={signOut} />,
          }}
        />
        <Stack.Screen name="[id]" options={{ title: "Detail" }} />
      </Stack.Protected>
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <RootNavigator />
      </DataProvider>
    </AuthProvider>
  );
};

export default RootLayout;
```

`RootNavigator` is een apart component. Dat moet: `useContext(AuthContext)` werkt enkel in een component dat **binnen** de `AuthProvider` staat. In `RootLayout` zelf zou je de default waarde van de context krijgen.

## Stap 8: Het loginscherm

Het loginscherm is een gewoon formulier met [controlled components](../controlled-components/index.md). Het enige wat het van Supabase weet, zijn de functies `signIn` en `signUp` uit de context.

```tsx title="src/app/login.tsx"
import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { signIn, signUp } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<boolean>(false);

  const onSignIn = async () => {
    setBusy(true);
    setError(await signIn(email, password));
    setBusy(false);
  };

  const onSignUp = async () => {
    setBusy(true);
    setError(await signUp(email, password));
    setBusy(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mailadres"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Wachtwoord (minstens 6 tekens)"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Inloggen" onPress={onSignIn} disabled={busy} />
      <Button title="Registreren" onPress={onSignUp} disabled={busy} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
  error: {
    color: "red",
  },
});

export default Login;
```

Merk op dat we na een geslaagde login nergens naartoe navigeren. Dat hoeft niet: de `AuthContext` krijgt een nieuwe sessie, `guard` verandert in de layout en Expo Router toont vanzelf het scherm `index`.

## Stap 9: Een herbruikbare LikeButton

Het hartje komt op twee schermen voor. We maken er een apart component van dat enkel het `id` krijgt en alles zelf uit de `DataContext` haalt.

```tsx title="src/components/LikeButton.tsx"
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { DataContext } from "../context/DataContext";

const LikeButton = ({ id }: { id: number }) => {
  const { isLiked, likeCount, toggleLike } = useContext(DataContext);
  const liked = isLiked(id);

  return (
    <Pressable style={styles.button} onPress={() => toggleLike(id)}>
      <FontAwesome name={liked ? "heart" : "heart-o"} size={24} color={liked ? "crimson" : "gray"} />
      <Text>{likeCount(id)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 8,
  },
});

export default LikeButton;
```

## Stap 10: De lijst met dieren

```tsx title="src/app/index.tsx"
import { Link } from "expo-router";
import { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import LikeButton from "../components/LikeButton";
import { DataContext } from "../context/DataContext";

const Index = () => {
  const { items, loading, error, reload } = useContext(DataContext);

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        refreshing={loading}
        onRefresh={reload}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Link href={{ pathname: "/[id]", params: { id: item.id } }} asChild>
              <Pressable style={styles.info}>
                <Text style={styles.emoji}>{item.emoji}</Text>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text>{item.species}</Text>
                </View>
              </Pressable>
            </Link>
            <LikeButton id={item.id} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  emoji: {
    fontSize: 36,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    padding: 16,
  },
});

export default Index;
```

- `refreshing` en `onRefresh` geven je gratis *pull to refresh*: trek de lijst naar beneden en `reload` wordt opgeroepen.
- Dit scherm bevat geen enkele regel Supabase-code. Het krijgt de data uit de context, net zoals de `PostList` in het Context-hoofdstuk.

## Stap 11: Het detailscherm

```tsx title="src/app/[id].tsx"
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import LikeButton from "../components/LikeButton";
import { DataContext } from "../context/DataContext";

const Detail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { items } = useContext(DataContext);

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <Text>Niet gevonden.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.species}</Text>
      <LikeButton id={item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  emoji: {
    fontSize: 120,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default Detail;
```

Het detailscherm haalt niets op: het zoekt het dier in de `items` die al in de context zitten. Like je hier een dier en ga je terug, dan staat het hartje in de lijst ook al gekleurd. Beide schermen lezen dezelfde state.

## Stap 12: Testen

1. Start de app met `npx expo start` en open ze in Expo Go.
2. Vul een e-mailadres en een wachtwoord van minstens 6 tekens in en klik op **Registreren**. Je komt meteen in de dierentuin.
3. Like een paar dieren. Kijk in het Supabase-dashboard bij **Table Editor** → `likes`: daar staan nu rijen met jouw `user_id`.
4. Sluit de app volledig en open ze opnieuw. Je bent nog steeds ingelogd en je likes staan er nog.
5. Log uit en registreer een tweede account. Je ziet de likes van de eerste gebruiker in de tellers, maar je hartjes zijn leeg.

### Loopt er iets mis?

| Probleem | Waarschijnlijke oorzaak |
| --- | --- |
| `supabaseUrl is required` | Het `.env.local`-bestand staat niet in de root, de namen kloppen niet of je hebt `npx expo start` niet herstart. |
| De lijst is leeg, zonder foutmelding | RLS staat aan maar de policy `Dieren lezen` ontbreekt, of de tabel is leeg. |
| `new row violates row-level security policy` bij liken | De insert-policy ontbreekt of de `user_id` is niet die van de ingelogde gebruiker. |
| `Email not confirmed` bij inloggen | **Confirm email** staat nog aan (zie stap 1). |
| `Invalid login credentials` | Verkeerd wachtwoord, of het account bestaat nog niet: klik eerst op **Registreren**. |
| `relation "public.animals" does not exist` | De SQL uit stap 2 is niet (volledig) uitgevoerd, of de tabelnaam in `ITEM_TABLE` klopt niet. |

## Het patroon hergebruiken

Stel dat je in plaats van een dierentuin een receptenapp wil maken. Wat moet je aanpassen?

| Onderdeel | Aanpassen? |
| --- | --- |
| `src/lib/supabase.ts` | Nee |
| `src/context/AuthContext.tsx` | Nee |
| `src/app/_layout.tsx` en `src/app/login.tsx` | Nee (hooguit de titels) |
| `src/components/LikeButton.tsx` | Nee |
| SQL: tabel `animals` | Ja, wordt bv. `recipes` met eigen kolommen |
| SQL: tabel `likes` | Enkel `references animals` wordt `references recipes` |
| `src/types.ts` | Ja, een interface `Recipe` met de kolommen van je tabel |
| `src/context/DataContext.tsx` | Enkel de twee regels bovenaan |
| `src/app/index.tsx` en `src/app/[id].tsx` | Ja, de properties die je toont (`item.title` in plaats van `item.name`, ...) |

Concreet ziet dat er zo uit:

```sql
create table recipes (
  id bigint generated always as identity primary key,
  title text not null,
  minutes int not null
);

create table likes (
  user_id uuid not null references auth.users on delete cascade,
  item_id bigint not null references recipes on delete cascade,
  primary key (user_id, item_id)
);
```

Vergeet niet RLS aan te zetten en de policies opnieuw aan te maken, nu met `recipes` in plaats van `animals`.

```ts title="src/types.ts"
export interface Recipe {
  id: number;
  title: string;
  minutes: number;
}
```

```tsx title="src/context/DataContext.tsx"
// Enkel deze twee regels pas je aan voor een ander onderwerp
import type { Recipe as Item } from "../types";
const ITEM_TABLE = "recipes";
```

De rest van de `DataContext`, de `AuthContext`, de layout, het loginscherm en de `LikeButton` blijven exact hetzelfde.

### Uitbreiden

Wil je meer doen dan lezen en liken, dan voeg je een functie toe aan de `DataContext` en aan de interface `IDataContext`, net zoals `createPost` in het Context-hoofdstuk. Bijvoorbeeld een rij toevoegen:

```tsx
const addItem = async (item: Omit<Item, "id">) => {
  const { data, error } = await supabase.from(ITEM_TABLE).insert(item).select().single();
  if (error) {
    setError(error.message);
    return;
  }
  setItems((items) => [...items, data]);
};
```

Vergeet dan ook de bijhorende policy niet (`for insert to authenticated with check (true)`), anders weigert RLS de insert.

Andere bewerkingen volgen hetzelfde patroon:

| Bewerking | Supabase |
| --- | --- |
| Alles ophalen | `supabase.from(ITEM_TABLE).select("*")` |
| Filteren | `.select("*").eq("species", "Leeuw")` |
| Toevoegen | `.insert({ ... })` |
| Aanpassen | `.update({ name: "Nala" }).eq("id", id)` |
| Verwijderen | `.delete().eq("id", id)` |

## Meer informatie

- [Supabase JavaScript reference](https://supabase.com/docs/reference/javascript/introduction)
- [Expo-gids voor Supabase](https://docs.expo.dev/guides/using-supabase/)
- [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Protected routes in Expo Router](https://docs.expo.dev/router/advanced/protected/)
