---
workflow: faceless-explainer
flow: automation
storyboard: no
message: "FlatList toont lange lijsten: je geeft data, renderItem en keyExtractor mee; hij scrolt vanzelf en rendert enkel wat zichtbaar is. ListFooterComponent toont iets onderaan."
destination: website
aspect: 1920x1080
language: nl
audience: "Studenten webframeworks die lijsten met map en de ScrollView kennen"
length: 60s
angle: how-to
style_preset: ts-light
---

## Intent

Kennisclip (geen samenvatting) bij `docs/react-native/lists-and-keys/flatlist.md`
("FlatList"). Sibling van `../react-native-pressable`: codevlak links, telefoon rechts.

Verhaal (volgorde van de cursuspagina):

1. Hook: een lange lijst; enkel de zichtbare rijen worden gerenderd; het kernwoord `FlatList`.
2. `data={persons}` met de interface `Person` (id, name, age).
3. `renderItem={({item}) => <PersonComponent item={item}/>}`.
4. `keyExtractor={item => item.id.toString()}`.
5. Het kleurenvoorbeeld met FlatList: `data={colors}`, een View van 200 hoog, `keyExtractor={item => item}`.
6. `ListFooterComponent={<ActivityIndicator …/>}` onderaan de lijst.
