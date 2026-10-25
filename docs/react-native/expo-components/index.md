---
sidebar_position: 6
---

# Expo Components

De [core components](../core-components/index.md) komen rechtstreeks uit React Native. Daarnaast biedt Expo zelf een hele reeks componenten en API's aan, de zogenaamde **Expo SDK**. Daarmee spreek je onderdelen van je toestel aan die React Native niet standaard voorziet, zoals de statusbalk, de camera of je locatie.

Een Expo component installeer je met `npx expo install`, gevolgd door de naam van het package:

```bash
npx expo install expo-status-bar
```

Gebruik hiervoor `npx expo install` en niet `npm install`. Expo kiest dan automatisch de versie die past bij de Expo SDK van je project.

In deze sectie bekijken we:

- [StatusBar](./status-bar.md): de balk bovenaan je scherm met de klok, de batterij en het netwerk.
