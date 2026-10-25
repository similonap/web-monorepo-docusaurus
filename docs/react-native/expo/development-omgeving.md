---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Development omgeving

Terwijl je ontwikkelt, moet je app ergens draaien zodat je ziet wat je maakt. Daarvoor heb je een paar opties. Je kiest er één, of je combineert ze.

| Optie | Waar draait je app? | Wat installeer je? | Werkt op |
| --- | --- | --- | --- |
| [Expo Go op je telefoon](#expo-go-op-je-eigen-telefoon) | Je eigen Android-toestel of iPhone | De Expo Go app | Windows, macOS, Linux |
| [Android Emulator](#android-emulator-android-studio) | Een virtueel Android-toestel op je computer | Android Studio | Windows, macOS, Linux |
| [iOS Simulator](#ios-simulator-xcode) | Een virtuele iPhone op je computer | Xcode | Enkel macOS |
| [scrcpy](#scrcpy-je-telefoon-bedienen-vanaf-je-computer) | Je eigen Android-toestel, bediend vanaf je computer | scrcpy en `adb` | Windows, macOS, Linux |

:::tip Twijfel je?
Begin met **Expo Go op je eigen telefoon**. Dat vraagt het minste installatiewerk en je ziet meteen hoe je app aanvoelt op een echt toestel.
:::

Welke optie je ook kiest, je start je app altijd met `npx expo start` (zie [De app starten](./index.md#de-app-starten)).

## Expo Go op je eigen telefoon

Je installeert de Expo Go app op je telefoon of tablet en scant de QR code die `npx expo start` toont. Je app draait dan op een echt toestel, met echte touch, camera en sensoren.

- Hoe je dit doet, zie je stap voor stap op de pagina [Expo](./index.md#op-je-telefoon-of-tablet).
- Expo Go downloaden: [expo.dev/go](https://expo.dev/go)
- Officiële uitleg: [Expo Go op een fysiek toestel](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical&mode=expo-go)

Je computer en je telefoon moeten wel op hetzelfde netwerk zitten. Lukt dat niet, gebruik dan een [tunnel](./index.md#geen-verbinding-met-je-telefoon-tunnel).

## Android Emulator (Android Studio)

De Android Emulator is een virtueel Android-toestel dat in een venster op je computer draait. Hij zit ingebakken in **Android Studio**, dus die moet je eerst installeren. Daarna maak je in Android Studio een virtueel toestel aan (via de **Device Manager**).

Druk je daarna op `a` in de terminal waar `npx expo start` draait, dan opent je app in de emulator.

- Android Studio downloaden: [developer.android.com/studio](https://developer.android.com/studio)
- Stap voor stap installeren en een emulator aanmaken: [Android Studio Emulator in de Expo-documentatie](https://docs.expo.dev/workflow/android-studio-emulator/)

:::info
Android Studio en de emulator vragen veel schijfruimte en geheugen. Op een oudere of trage laptop werk je vaak vlotter met je eigen telefoon.
:::

## iOS Simulator (Xcode)

De iOS Simulator is een virtuele iPhone of iPad op je computer. Hij zit in **Xcode** en werkt dus **enkel op een Mac**.

Druk op `i` in de terminal waar `npx expo start` draait om je app in de simulator te openen.

- Xcode downloaden: [Xcode in de Mac App Store](https://apps.apple.com/app/xcode/id497799835)
- Stap voor stap installeren en de simulator instellen: [iOS Simulator in de Expo-documentatie](https://docs.expo.dev/workflow/ios-simulator/)

## scrcpy: je telefoon bedienen vanaf je computer

Met [scrcpy](https://github.com/Genymobile/scrcpy) (van Genymobile, de makers van Genymotion) toon je het scherm van je Android-toestel in een venster op je computer. Je kan je telefoon ook bedienen met je muis en toetsenbord. Je app draait dus op je echte telefoon, maar je hoeft er niet telkens naar te grijpen. Handig tijdens het ontwikkelen of om je app te tonen tijdens een les of presentatie.

scrcpy werkt enkel met Android-toestellen. Een iPhone of iPad wordt niet ondersteund.

### scrcpy installeren

<Tabs groupId="os">
<TabItem value="windows" label="Windows" default>

De makkelijkste manier is via **winget**, dat standaard in Windows 10 en 11 zit. Open een terminal (PowerShell of de Terminal-app) en voer uit:

```bash
winget install --exact Genymobile.scrcpy
```

winget installeert meteen ook `adb`, het programma waarmee scrcpy met je telefoon praat. Sluit daarna je terminal en open een nieuwe, zodat het commando `scrcpy` gevonden wordt.

Werkt winget niet? Download dan het zip-bestand `scrcpy-win64-…zip` bij de [laatste release van scrcpy](https://github.com/Genymobile/scrcpy/releases/latest) en pak het uit, bijvoorbeeld naar `C:\scrcpy`. Daarin zit `adb` al. Je start scrcpy dan door te dubbelklikken op `scrcpy.exe`, of door te dubbelklikken op `open_a_terminal_here.bat` en daar `scrcpy` te typen.

Meer uitleg: [scrcpy op Windows](https://github.com/Genymobile/scrcpy/blob/master/doc/windows.md).

</TabItem>
<TabItem value="macos" label="macOS">

Installeer scrcpy en `adb` met [Homebrew](https://brew.sh):

```bash
brew install scrcpy
brew install --cask android-platform-tools
```

Het tweede commando installeert `adb`, waarmee scrcpy met je telefoon praat. Meer uitleg: [scrcpy op macOS](https://github.com/Genymobile/scrcpy/blob/master/doc/macos.md).

</TabItem>
<TabItem value="linux" label="Linux">

Volg de instructies in [scrcpy op Linux](https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md). De versie in de pakketbeheerder van je distributie is vaak verouderd, daarom raadt scrcpy het installatiescript aan.

</TabItem>
</Tabs>

### Je telefoon verbinden

1. Zet **USB-foutopsporing** (USB debugging) aan op je telefoon: [ontwikkelaarsopties en USB debugging inschakelen](https://developer.android.com/studio/debug/dev-options#enable). Meestal tik je daarvoor zeven keer op het **buildnummer** (bij "Over de telefoon" of "Software-informatie").
2. Verbind je telefoon met een USB-kabel met je computer. Er verschijnt een melding "USB-foutopsporing toestaan?": tik op **Toestaan** (vink eventueel "Altijd toestaan vanaf deze computer" aan).
3. Start scrcpy in een terminal:

   ```bash
   scrcpy
   ```

4. Er opent een venster met het scherm van je telefoon. Open je app zoals gewoonlijk in Expo Go. Je ziet en bedient ze nu vanaf je computer.

:::tip Ziet scrcpy je telefoon niet? (Windows)
- Gebruik een kabel die data doorgeeft, niet enkel een oplaadkabel, en zet de USB-modus op je telefoon eventueel op **Bestandsoverdracht**.
- Sommige toestellen (bv. Samsung) hebben op Windows een eigen USB-driver nodig: zie [OEM USB-drivers](https://developer.android.com/studio/run/oem-usb) of de [Samsung Android USB Driver](https://developer.samsung.com/android-usb-driver).
- Kreeg je de melding "USB-foutopsporing toestaan?" niet te zien, trek de kabel dan uit en steek hem opnieuw in.
:::

Liever zonder kabel? Zie [draadloos verbinden](https://github.com/Genymobile/scrcpy/blob/master/doc/connection.md#tcpip-wireless) in de documentatie van scrcpy.
