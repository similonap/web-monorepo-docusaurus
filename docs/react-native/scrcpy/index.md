---
sidebar_position: 3
---

# scrcpy

Met [scrcpy](https://github.com/genymobile/scrcpy) toon je het scherm van je Android-toestel op je computer. Je kan je telefoon ook bedienen met je muis en toetsenbord. Dat is handig als je je app wil tonen aan anderen, bijvoorbeeld tijdens een les of een presentatie, of als je wil testen zonder telkens naar je telefoon te grijpen.

scrcpy werkt enkel met Android-toestellen. Een iPhone of iPad wordt niet ondersteund.

## Installatie

Volg de installatie-instructies voor jouw besturingssysteem in de [README van scrcpy](https://github.com/genymobile/scrcpy#get-the-app). Op macOS kan je scrcpy bijvoorbeeld installeren met Homebrew:

```bash
brew install scrcpy
brew install --cask android-platform-tools
```

Het tweede commando installeert `adb`, waarmee scrcpy met je telefoon praat.

## Telefoon voorbereiden

scrcpy maakt verbinding via [USB debugging](https://developer.android.com/studio/debug/dev-options#enable). Dat zet je eerst aan op je telefoon:

1. Activeer de **ontwikkelaarsopties** in de instellingen van je telefoon. Meestal doe je dat door zeven keer te tikken op het **buildnummer** (bij "Over de telefoon").
2. Zet in de ontwikkelaarsopties **USB-foutopsporing** (USB debugging) aan.
3. Verbind je telefoon met een USB-kabel met je computer en geef de toestemming die op je telefoon verschijnt.

## Gebruik

Start scrcpy in een terminal:

```bash
scrcpy
```

Er opent een venster met het scherm van je telefoon. Open je app in Expo Go zoals gewoonlijk en je ziet ze meteen op je computer.

Meer opties, zoals een draadloze verbinding of het opnemen van je scherm, vind je in de [documentatie van scrcpy](https://github.com/genymobile/scrcpy).
