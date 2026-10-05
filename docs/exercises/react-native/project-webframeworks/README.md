---
sidebar_label: "Project Webframeworks"
---

import AiBadge from '@site/src/components/AiBadge';

# Project Webframeworks

## Overzicht

In dit project bouw je individueel een mobiele app in React Native met Expo. Het onderwerp kies je zelf. Zolang je app aan de technische vereisten voldoet, ben je vrij om te bouwen wat je wil.

Je app is bedoeld voor de smartphone. Ze moet werken op een echte Android- of iOS-smartphone, niet enkel in de browser. Op de verdediging demonstreer je ze op een smartphone.

Met deze opdracht werk je aan de volgende leerdoelen:
- De student maakt een mobiele app vertrekkend van een functionele analyse
- De student maakt componenten met properties, hooks en state
- De student maakt gebruik van een routing library voor een applicatie met meerdere schermen
- De student maakt componenten die met elkaar communiceren aan de hand van een gedeelde state
- De student maakt applicaties die gebruik maken van een externe backend
- De student zoekt zelfstandig documentatie op en past nieuwe Expo-functionaliteit toe

## Timing

| Datum | |
| --- | --- |
| Vrijdag 30/10/2026 | Deadline projectvoorstel. Tijdens de les krijg je feedback op je voorstel. |
| Woensdag 30/12/2026 | Deadline project. |
| Examenperiode | Mondelinge verdediging. |

## Gebruik van AI

Bij elk onderdeel van deze opdracht staat of je AI mag gebruiken:

- <AiBadge allowed /> Je mag AI-tools (ChatGPT, Claude, Copilot, Cursor, ...) gebruiken voor dit onderdeel.
- <AiBadge allowed={false} /> Je schrijft de code zelf. Documentatie, de cursus en voorbeelden uit de les mag je wel gebruiken.

Staat er geen label bij een onderdeel, dan mag je geen AI gebruiken. Twijfel je, vraag het dan vooraf aan je lector.

Ook code die je met AI hebt gemaakt, moet je op de verdediging kunnen uitleggen.

## Opdracht 1: projectvoorstel

<AiBadge allowed />

Tegen 30/10 bezorg je een kort document (1 à 2 pagina's, wireframes niet meegerekend) waarin je beschrijft wat je gaat bouwen:

- [ ] Wat doet je app en voor wie is ze bedoeld?
- [ ] Welke schermen zijn er en hoe navigeer je ertussen? Voeg een wireframe toe van elk scherm. Een foto van een schets op papier is goed genoeg.
- [ ] Welke Expo-features gebruik je en waarvoor dienen ze in je app?
- [ ] Welke data bewaar je in Supabase en welke in AsyncStorage?
- [ ] Waar komt elke technische vereiste uit opdracht 2 terug in je app?

Tijdens de les van 30/10 bespreken we je voorstel. Is je project te klein of te groot, dan sturen we het daar bij.

## Opdracht 2: implementatie

Je app moet werken op een smartphone en voldoen aan de volgende vereisten.

### Routing

<AiBadge allowed={false} />

- [ ] Je gebruikt Expo Router om tussen schermen te navigeren.
- [ ] Je app bevat minstens 4 schermen.
- [ ] Je gebruikt minstens één dynamische route (bv. `app/items/[id].tsx`) of geeft parameters door tussen schermen.

### Lijsten

<AiBadge allowed={false} />

- [ ] Je toont data met een `FlatList`.

### State, hooks en context

<AiBadge allowed={false} />

- [ ] Je beheert state met `useState` en gebruikt `useEffect` waar dat zinvol is.
- [ ] Je gebruikt Context om state te delen tussen schermen of componenten.
- [ ] Je app is opgedeeld in componenten die via props en callbacks met elkaar communiceren.

### AsyncStorage

<AiBadge allowed={false} />

- [ ] Je bewaart data lokaal met AsyncStorage, bijvoorbeeld instellingen, favorieten of de laatst bekeken items.
- [ ] De opgeslagen data wordt terug ingeladen als de app opstart.

### Expo-features

<AiBadge allowed={false} />

- [ ] Je gebruikt 2 à 3 Expo-features die niet in de les behandeld zijn. Kies uit de [lijst hieronder](#expo-features) of stel zelf iets voor in je projectvoorstel.
- [ ] Elke feature heeft een echte functie in je app. Een knop die enkel de feature uittest, telt niet.
- [ ] Je vraagt de nodige permissies aan en vangt op wat er gebeurt als de gebruiker ze weigert.

### Backend

<AiBadge allowed label="AI toegestaan voor de verbinding met Supabase" />

- [ ] Je app gebruikt een eenvoudige backend. We raden [Supabase](https://supabase.com/) aan met de library [`@supabase/supabase-js`](https://supabase.com/docs/reference/javascript/introduction). Zie ook de [Expo-gids voor Supabase](https://docs.expo.dev/guides/using-supabase/).
- [ ] Je haalt data op uit je backend en je schrijft er ook data naar weg.

Je mag AI gebruiken om Supabase op te zetten en voor de code die de verbinding legt: de client aanmaken, tabellen en policies instellen en de functies die de queries uitvoeren. Alles daarbuiten schrijf je zelf, dus ook de componenten, de state en het tonen van de data.

Over deze code krijg je op de verdediging geen diepgaande vragen. Je moet wel de flow kunnen uitleggen: waar wordt de data opgehaald, hoe komt ze in je state terecht en hoe verschijnt ze op het scherm?

### Styling

<AiBadge allowed />

- [ ] Je app ziet er verzorgd uit en is gebruiksvriendelijk.
- [ ] Je mag AI gebruiken voor de styling: StyleSheets, kleuren, layout, NativeWind-classes, ...

### Clean code

<AiBadge allowed={false} />

- [ ] Je code is opgedeeld in verschillende componenten en bestanden.
- [ ] Je gebruikt TypeScript met interfaces voor je data.
- [ ] Je gebruikt duidelijke namen en volgt coding guidelines, bv. de [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html).

## Expo-features

De features in de tabel zijn groot genoeg om mee te tellen. Camera en Location zijn in de cursus behandeld en tellen niet mee, maar je mag ze wel gebruiken.

| Feature | Package | Voorbeeld | Werkt in Expo Go |
| --- | --- | --- | --- |
| [Maps](https://docs.expo.dev/versions/latest/sdk/map-view/) | `react-native-maps` | Plaatsen tonen op een kaart met markers, een route tekenen | Ja |
| [Pedometer](https://docs.expo.dev/versions/latest/sdk/pedometer/) | `expo-sensors` | Stappenteller met dagdoelen en historiek | Ja |
| [Accelerometer](https://docs.expo.dev/versions/latest/sdk/accelerometer/), [Gyroscope](https://docs.expo.dev/versions/latest/sdk/gyroscope/) | `expo-sensors` | Schudden om te herladen, een spel dat je bestuurt door je gsm te kantelen | Ja |
| [Magnetometer](https://docs.expo.dev/versions/latest/sdk/magnetometer/) | `expo-sensors` | Kompas | Ja |
| [Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) | `expo-notifications` | Herinneringen inplannen | Lokale notificaties wel, push niet |
| [FileSystem](https://docs.expo.dev/versions/latest/sdk/filesystem/) | `expo-file-system` | Bestanden downloaden voor offline gebruik, data exporteren | Ja |
| [ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) | `expo-image-picker` | Een foto toevoegen aan een item of profiel | Ja |
| [Audio](https://docs.expo.dev/versions/latest/sdk/audio/) | `expo-audio` | Spraakmemo's opnemen en afspelen | Ja |
| [Video](https://docs.expo.dev/versions/latest/sdk/video/) | `expo-video` | Video's afspelen | Ja |
| [Speech](https://docs.expo.dev/versions/latest/sdk/speech/) | `expo-speech` | Een recept of instructies laten voorlezen | Ja |
| [LocalAuthentication](https://docs.expo.dev/versions/latest/sdk/local-authentication/) | `expo-local-authentication` | Een deel van de app vergrendelen met vingerafdruk of Face ID | Face ID niet op iOS |
| [Contacts](https://docs.expo.dev/versions/latest/sdk/contacts/) | `expo-contacts` | Kosten verdelen met je contacten | Ja |
| [Calendar](https://docs.expo.dev/versions/latest/sdk/calendar/) | `expo-calendar` | Deadlines toevoegen aan de agenda van het toestel | Ja |
| [MediaLibrary](https://docs.expo.dev/versions/latest/sdk/media-library/) | `expo-media-library` | Foto's uit de galerij tonen of erin opslaan | Beperkt op Android |
| [DocumentPicker](https://docs.expo.dev/versions/latest/sdk/document-picker/), [Sharing](https://docs.expo.dev/versions/latest/sdk/sharing/) | `expo-document-picker`, `expo-sharing` | Een bestand importeren, een resultaat delen | Ja |
| [Print](https://docs.expo.dev/versions/latest/sdk/print/) | `expo-print` | Een PDF maken van een lijst of rapport | Ja |
| [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) | `expo-sqlite` | Een lokale databank voor grotere hoeveelheden data | Ja |

Kleinere packages zoals `expo-haptics`, `expo-clipboard`, `expo-battery` of `expo-brightness` mag je gebruiken, maar ze tellen niet mee. Wil je een feature gebruiken die niet in de tabel staat, vermeld het dan in je projectvoorstel.

:::tip
Test de features die je kiest zo snel mogelijk op je eigen toestel. Wat niet volledig in Expo Go werkt, heeft een [development build](https://docs.expo.dev/develop/development-builds/introduction/) nodig. Dat vraagt extra werk.
:::

## Mondelinge verdediging

Op de verdediging demonstreer je je app en beantwoord je vragen over je code. Je moet het volgende kunnen uitleggen:

- [ ] State: welke state heb je, waar staat ze en waarom daar?
- [ ] Context: welke data deel je via context en hoe komt die bij je componenten?
- [ ] Hooks: hoe en waarom gebruik je `useState`, `useEffect`, `useContext` en eventuele eigen hooks?
- [ ] Communicatie tussen componenten: hoe gaan data en events van de ene component naar de andere?
- [ ] Routing: hoe is je `app`-map opgebouwd, hoe navigeer je en hoe geef je parameters door?
- [ ] Event handling: wat gebeurt er als de gebruiker op een knop drukt of tekst invult?
- [ ] AsyncStorage: wat bewaar je, wanneer schrijf je het weg en wanneer laad je het in?
- [ ] Expo-features: hoe werken ze, welke permissies vraag je en wat heb je ervoor geconfigureerd?
- [ ] Configuratie: hoe is je project opgezet (`app.json`, packages, ...)?
- [ ] Supabase: de flow van de data, van de backend tot op het scherm.
- [ ] Het geheel: hoe werkt alles samen? Je kan een actie van de gebruiker volgen doorheen je hele app.

Code die je indient maar niet kan uitleggen, beschouwen we als niet door jou geschreven.
