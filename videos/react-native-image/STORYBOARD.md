# STORYBOARD — react-native-image

## Video direction

- **Series.** Sibling of `../react-native-flexbox` and the other React Native core component clips (TS light). Brief for all seven clips: `BRIEF-AGENTS.md` (code surface left, phone right, APP KIT with the app as DOM in dp). House style: `CLAUDE.md` section "Video's" and `frame.md`. Every frame copies the `<style>` block of `../react-native-flexbox/compositions/frames/03-direction.html` verbatim (TS LIGHT + FLEX KIT), then the APP KIT, then a small IMAGE KIT (`.im-box`, `.im-fill`, `.im-bounds` dashed bounds of an Image, `.im-mark` blue mark, `.im-pill` annotation, `.im-scroll` for a code surface that scrolls).
- **Layout.** `.fx-panel` at x 80, y 150, 1290 × 730, title `app/index.tsx`, status `app/index.tsx · Image`. Phone `.ph-body` at x 1494, y 150, screen 316 × 650, `.ph-app` 226 × 464 dp (× 1.4). Frame 1 is the hook without code panel.
- **Code.** Course style as on `docs/react-native/core-components/image.md`: `import {Image, StyleSheet, View} from "react-native";`, `import Constants from "expo-constants";`, `const Index = () => {…}`, `styles = StyleSheet.create({...})`, 4-space indent, one style property per line. The container is `{paddingTop: Constants.statusBarHeight}` like the Image examples on the course page (no `flex: 1`, except in frames 5-6 where the container centres the Image). Max 18 rows visible: longer code scrolls (`.fx-lns` + `.fx-lines` together, 0.6s power3.inOut) and rows that scrolled out are hidden afterwards.
- **Images.** Flat SVGs drawn for this clip in `assets/img/`: `bergen.svg` (600 × 400 landscape: sky, sun, mountains, hills), `zon.svg` (400 × 600 portrait: sunset over the sea), `profiel.svg` (400 × 400 portrait of a person). `preserveAspectRatio="none"` so `object-fit: fill` (stretch) really stretches. In code they are `.png` files (`require("./assets/bergen.png")`, `"https://example.com/zon.png"`).
- **resizeMode in the phone.** cover → `object-fit: cover`; contain → `contain`; stretch → `fill`; center → the image at its own size (60 × 90 dp for `zon.png`) centred in the box; repeat → background tile 60 × 90 dp from the top-left. The Image box gets a dashed `#94A3B8` bounds outline (annotation, like the flexbox parent outline) so the empty area of contain / center is visible.
- **Motion.** Every reveal on its word (times = seconds from frame start = voice start). Typing with a stepping caret, washes on the discussed line or value, `ts-mark` around a key token, `.im-mark` (2 dp blue outline) around an image in the phone. Calm power3 settles, no bounce, holds stand still. No sfx inside frames; the root adds them from the `sfx:` lines.

## Frame 1 — Hook

- id: 01-hook
- duration: 7.11s
- transition_in: cut
- sfx: pop@0.3, whoosh-short@1.52, pop@3.04, pop@5.32
- voiceover: "Afbeeldingen toon je met de Image component. Welke afbeelding, geef je mee met de source prop."
- code: none (hook).
- phone: a small gallery app: `bergen` full width 226 × 160 dp (cover) under the status bar, below it a row (padding 8) with `zon` and `profiel` at 101 × 134 dp.
- shots:
  - 0.0-1.5: "Afbeeldingen" (0.3): the phone fades in centred (x −707, y 20 → 0, 0.7s).
  - 1.5-3.0: "Image" (1.52): the phone slides to its standard place (0.8s power3.inOut); hero `Image` (Inter 700 168px) lands at (80, 300); kicker `React Native` at 1.7; blue hero bar wipes in at 1.88 (under the descender of the g).
  - 3.0-5.3: "Welke afbeelding" (3.04): statement `Welke afbeelding?` (Inter 500 48px, top 548) fades in; blue `.im-mark` around the big photo.
  - 5.3-end: "source prop" (5.32): chip `PROP source` (blue tint) pops in at top 648. Hold.

## Frame 2 — Uit je project

- id: 02-require
- duration: 8.79s
- transition_in: crossfade
- sfx: pop@1.04, typing@2.74, pop@5.48, pop@6.96
- voiceover: "Staat de afbeelding in je project, gebruik dan require met het pad naar het bestand. De afbeelding wordt dan mee in je app verpakt."
- code (15 rows, 16 after the insert of row 7):
  ```
  1  import {Image, StyleSheet, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Image source={require("./assets/bergen.png")}/>
  8          </View>
  9      );
  10 }
  11
  12 const styles = StyleSheet.create({
  13     container: {
  14         paddingTop: Constants.statusBarHeight,
  15     },
  16 });
  ```
  Kicker `Afbeelding uit je project`. A `.ts-mini` card `Project` inside the panel (x 900, y 338, 330 × 208) shows the tree `app/` › `assets/` › `bergen.png`, `index.tsx` (the path `./assets/bergen.png` is relative to `app/index.tsx`).
- phone: empty app, then `bergen` at its own size (210 × 140 dp) at the top-left under the status bar (no style: an Image from `require` gets the size of the file).
- shots:
  - 0.0-2.6: kicker, panel, phone in. "in je project" (1.04): the tree card fades in (y 10 → 0).
  - 2.6-3.9: "require" (2.64): row 7 is inserted (rows below slide down) and typed (0.018s/char); when the line is complete (~3.6) the image appears in the phone (0.3s).
  - 3.9-5.3: "pad" (3.88): wash on `"./assets/bergen.png"` and on `assets/` + `bergen.png` in the tree; off at 5.28.
  - 5.3-end: "De afbeelding" (5.48): `.im-mark` around the image. "app" (6.96): tag `mee verpakt in je app` pops in under the tree card. Hold.

## Frame 3 — Van het internet

- id: 03-uri
- duration: 10.47s
- transition_in: crossfade
- sfx: typing@1.0, pop@3.36, pop@4.76, typing@5.3, typing@6.56
- voiceover: "Een afbeelding van het internet geef je mee als object met een U R I. Zo'n afbeelding moet altijd een width en een height krijgen, anders zie je niets."
- code (18 rows at the start, 23 at the end; scrolls 5 rows at 5.04 so rows 6-23 are visible):
  ```
  1  import {Image, StyleSheet, View} from "react-native";
  2  import Constants from "expo-constants";
  3
  4  const Index = () => {
  5      return (
  6          <View style={styles.container}>
  7              <Image
  8                  style={styles.image}                          (inserted 5.2)
  9                  source={{uri: "https://example.com/zon.png"}}  (typed 1.0)
  10             />
  11         </View>
  12     );
  13 }
  14
  15 const styles = StyleSheet.create({
  16     container: {
  17         paddingTop: Constants.statusBarHeight,
  18     },
  19     image: {                                                    (inserted 5.92)
  20         width: 160,
  21         height: 240,
  22     },
  23 });
  ```
  Kicker `Afbeelding van het internet`.
- phone: empty until the Image has a width and a height; then `zon` 160 × 240 dp (cover) at the top-left under the status bar. Annotation pill `Image: 0 × 0` (mono 14 dp, blue tint) at (8, 32) dp while the Image has no size.
- shots:
  - 0.0-2.4: kicker, panel, phone in. "internet" (1.04): the source row is typed (from 1.0, 0.02s/char).
  - 2.4-4.7: "object" (2.40): wash on `{uri: "…"}`; "U R I" (3.36): `ts-mark` around `uri`; mark off 4.5, wash off 4.6. The phone stays empty.
  - 4.7-5.9: "Zo'n afbeelding" (4.76): pill `Image: 0 × 0` appears in the phone. The code scrolls 5 rows (5.04); row 8 `style={styles.image}` is inserted (5.2) and typed (5.3).
  - 5.9-7.7: "altijd" (5.92): the `image: {` / `},` block is inserted; "width" (6.56): `width: 160,` typed (still nothing visible: height is 0); "height" (7.28): `height: 240,` typed. When it is complete (~7.7) the pill fades out and the photo appears.
  - 8.4-end: "anders zie je niets" (8.48): wash on the width and height rows. Hold.

## Frame 4 — Stylen

- id: 04-style
- duration: 11.35s
- transition_in: crossfade
- sfx: typing@4.28, typing@4.94, key-press@7.12, pop@8.8
- voiceover: "Een Image style je zoals een View: met width, height, margin of border radius. Een grote border radius maakt er bijvoorbeeld een ronde profielfoto van."
- code (23 rows, 25 at the end; scrolled 6 rows from the start, 7 rows at 4.8):
  ```
  7              <Image
  8                  style={styles.image}
  9                  source={{uri: "https://example.com/profiel.png"}}
  10             />
  ...
  19     image: {
  20         width: 160,
  21         height: 160,
  22         margin: 20,          (inserted 4.2)
  23         borderRadius: 12,    (inserted 4.84; 12 -> 80 at 7.12)
  24     },
  25 });
  ```
  Kicker `Image stylen`.
- phone: `profiel` 160 × 160 dp (cover) under the status bar; margin 20 moves it 20 dp right and down (as an x/y transform: the lint forbids tweening margin); borderRadius 12, then 80 (a circle).
- shots:
  - 0.0-2.5: kicker, panel, phone in. "style" (0.64): wash on `style={styles.image}`, off 2.4.
  - 2.5-4.2: "width" (2.72), "height" (3.56): washes on those rows, off 4.4.
  - 4.2-4.8: "margin" (4.24): row 22 inserted and typed; the photo moves to its margin (0.4s).
  - 4.8-6.2: "border radius" (4.88): code scrolls one row, row 23 inserted and typed `borderRadius: 12,`; the corners round a little.
  - 6.2-end: "grote border radius" (6.80): wash on row 23; "radius" (7.12): `12` → `80` (swapVal) and the photo turns round (0.8s power3.inOut). "ronde profielfoto" (8.80): `ts-mark` around `borderRadius: 80,`. Hold.

## Frame 5 — resizeMode cover

- id: 05-resize
- duration: 11.99s
- transition_in: blur-crossfade
- sfx: pop@2.0, typing@3.46, typing@6.16, pop@9.16, whoosh-short@10.16
- voiceover: "Past de afbeelding niet precies in het vlak, dan beslist resize mode wat er gebeurt. Cover is de standaard: de afbeelding vult alles en wat erbuiten valt, wordt weggeknipt."
- code (23 rows, 24 after the insert; scrolled 5 rows, 6 rows at 3.3):
  ```
  7              <Image style={styles.image} source={require("./assets/zon.png")}/>
  ...
  13     container: {
  14         flex: 1,
  15         paddingTop: Constants.statusBarHeight,
  16         alignItems: "center",
  17         justifyContent: "center",
  18     },
  19     image: {
  20         width: 200,
  21         height: 150,
  22         resizeMode: "cover", // standaard     (inserted 3.36, comment 6.16)
  23     },
  24 });
  ```
  Kicker `resizeMode`. The box (200 × 150, landscape) has another ratio than `zon.png` (portrait 2:3).
- phone: the Image box centred in the screen with its dashed bounds; inside it `zon` with cover. Ghost: the full scaled image (200 × 300 dp, from 75 dp above to 75 dp below the box) behind the box, opacity 0, with its own dashed outline.
- shots:
  - 0.0-3.3: kicker, panel, phone in. "het vlak" (2.00): `.im-mark` around the box and wash on width/height; off at 3.3.
  - 3.3-5.4: "resize mode" (3.36): the code scrolls one row; row 22 inserted and typed `resizeMode: "cover",`. The phone does not change (cover is the default).
  - 5.4-7.8: "Cover" (5.44): wash on `resizeMode: "cover"`; "standaard" (6.16): ` // standaard` typed (fold colour).
  - 7.8-9.1: "vult alles" (7.88): `.im-mark` around the box again (stays).
  - 9.1-end: "wat erbuiten valt" (9.16): the ghost fades in to 0.3 with its dashed outline: the parts above and below the box are visible. "weggeknipt" (10.16): the ghost image fades out (0.7s); only its dashed outline stays. Hold.

## Frame 6 — De andere modes

- id: 06-modes
- duration: 14.53s
- transition_in: crossfade
- sfx: key-press@0.12, key-press@2.72, key-press@6.96, key-press@10.08, pop@11.84
- voiceover: "Contain toont de volledige afbeelding. Stretch rekt ze uit, zonder rekening te houden met de verhoudingen. Center zet ze onvergroot in het midden, en repeat herhaalt ze tot het vlak vol is."
- code: frame 5's code (24 rows, scrolled 6), row 22 `resizeMode: "cover",` without the comment; the value is a `.fx-val` with the variants `"cover"`, `"contain"`, `"stretch"`, `"center"`, `"repeat"`.
- phone: the same centred 200 × 150 box with dashed bounds, five stacked layers (cover, contain, stretch, center, repeat) that crossfade (0.3s) when the value changes. Marks: around the contained image (100 × 150), around the centred image (60 × 90), around the box.
- shots:
  - 0.0-2.7: "Contain" (0.0): wash on row 22 (stays) and `"cover"` → `"contain"` at 0.12, the phone follows. "volledige afbeelding" (1.04): mark around the whole contained image; off 2.5.
  - 2.7-6.9: "Stretch" (2.72): `"stretch"`; the photo is squeezed into the box (the sun becomes an ellipse). Hold through "verhoudingen".
  - 6.9-10.0: "Center" (6.96): `"center"`; the photo at its own size in the middle. "onvergroot" (8.08): mark around it; off 9.7.
  - 10.0-end: "repeat" (10.08): `"repeat"`; tiles of 60 × 90 fill the box from the top-left. "het vlak vol" (11.84): mark around the box. Hold.
