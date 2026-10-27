---
sidebar_position: 4
---

# Core Components

Zoals we al gezien hebben kan er in React Native geen gebruik gemaakt worden van HTML elementen. In plaats daarvan gebruiken we React Native componenten, de zogenaamde core components. Je schrijft ze in JSX, maar React Native zet ze om naar echte **native UI-elementen** van het platform. Een `View` wordt bijvoorbeeld een `UIView` op iOS en een `android.view.View` op Android. Daarom voelt een React Native app aan als een echte native app en niet als een website.

Veel core components zijn wel *vergelijkbaar* met een HTML element (een `View` met een `div`, een `TextInput` met een `input`), maar ze hebben een andere naam en werken soms anders. In deze sectie bekijken we de meest gebruikte componenten, elk op een eigen pagina:

- [View](./view.md): een container voor andere componenten, vergelijkbaar met een `div`.
- [StyleSheet en inline styles](./stylesheet.md): geen component, maar de manier waarop je je componenten stylet.
- [Text](./text.md): toont tekst, vergelijkbaar met een `p` of `span`.
- [Image](./image.md): toont afbeeldingen uit je project of van het internet.
- [TextInput](./textinput.md): een invoerveld, vergelijkbaar met een `input`.
- [Button](./button.md): een eenvoudige knop met een native uitzicht.
- [Pressable](./pressable.md): maakt van eender welke component een knop.
- [KeyboardAvoidingView](./keyboardavoidingview.md): zorgt dat het toetsenbord je invoervelden niet bedekt.

## Events afhandelen

Op wat de gebruiker doet (drukken, typen, ...) reageer je door een functie mee te geven aan een event prop. Welke events een component heeft, zie je telkens in de sectie **Events** op de pagina van dat component.

Net zoals in React.js worden events in camelCase geschreven. Een belangrijk verschil: in React Native bestaat er geen `onClick`. Op een touchscreen klik je niet, je drukt. Daarom heet het event `onPress`.

:::info Alert en de previews
In veel voorbeelden en tutorials zie je `Alert.alert("Pressed!")` om te tonen dat een event werkt. Op je telefoon toont dat een native dialoogvenster. In de browser doet `Alert.alert` echter **niets**, en de previews in deze cursus draaien in de browser. Daarom tonen we het resultaat met state op het scherm of met `console.log`.
:::
