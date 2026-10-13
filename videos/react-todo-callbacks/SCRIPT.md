# SCRIPT — react-todo-callbacks

**Voice:** ElevenLabs eleven_v4 via the `elevenlabs` CLI — Andie (`8OezxDDjGa2d9W45o5Qs`) for every line
**Voice settings:** stability 0.5, output mp3_44100_128; same voice + settings for all 14 lines
**Voice direction:** Calm, friendly teacher. Clear, unhurried. Code terms in English, spoken as words (input value, on change, on add todo, handle add, set input value, add todo, delete todo, on delete).

---

## Line 1 — Hook (Frame 1)

**Delivery:** Light demo, landing on "callback".

    Een todo app. Je typt een taak, klikt op Add Todo, en ze verschijnt in de lijst. Klik je op Delete, dan verdwijnt ze weer. Achter de schermen praten twee child components met hun parent. Telkens via een callback.

## Line 2 — App (Frame 2)

**Delivery:** Setting up, matter-of-fact.

    We beginnen bij App. Die houdt de lijst bij in een state todos: een array van strings, standaard leeg. Met map maken we voor elke todo een list item.

## Line 3 — InputView (Frame 3)

**Delivery:** Walking through the code.

    Het invoerveld zetten we in een eigen component: InputView. Die heeft zijn eigen state: input value. Het input veld toont die waarde, en bij elke on change zetten we de nieuwe tekst in de state.

## Line 4 — Waarom daar (Frame 4)

**Delivery:** Question, then a calm answer.

    Waarom staat input value in InputView, en niet in App? Omdat enkel InputView moet weten wat je aan het typen bent. App heeft pas iets nodig als de todo echt toegevoegd wordt.

## Line 5 — Het probleem (Frame 5)

**Delivery:** Spotting the gap.

    Maar daar zit het probleem. De lijst met todos staat in App. InputView kan die state niet aanpassen. Hij moet dus aan App kunnen laten weten: hier is een nieuwe todo.

## Line 6 — onAddTodo (Frame 6)

**Delivery:** The solution, clear on "parameter".

    Daarvoor krijgt InputView een callback als prop: on add todo. Het type is een functie die een todo van het type string krijgt, en niets teruggeeft. Deze callback heeft dus wel een parameter.

## Line 7 — handleAdd (Frame 7)

**Delivery:** Step by step.

    Klik je op de knop, dan loopt handle add. Eerst kijken we of de invoer niet leeg is: trim haalt de spaties weg. Is er tekst, dan roepen we on add todo aan, met de input value. En daarna maken we het invoerveld weer leeg met set input value.

## Line 8 — addTodo (Frame 8)

**Delivery:** Building, even rhythm.

    In App schrijven we de functie add todo. Die krijgt de nieuwe todo binnen, en maakt met de spread operator een nieuwe array: alle oude todos, plus de nieuwe. Die functie geven we aan InputView mee als on add todo.

## Line 9 — De flow (Frame 9)

**Delivery:** Narrating a flow, satisfied at the end.

    Wat gebeurt er dus? Je typt melk kopen, en klikt op Add Todo. Handle add roept on add todo aan, met melk kopen. Dat is eigenlijk add todo uit App. App zet de nieuwe array in de state, rendert opnieuw, en de todo verschijnt in de lijst.

## Line 10 — TodoItem (Frame 10)

**Delivery:** A new part, fresh start.

    Nu de delete functie. Elk list item wordt een eigen component: TodoItem. Die krijgt twee props: de todo zelf, om te tonen, en on delete, een functie zonder parameters. De Delete knop roept on delete aan.

## Line 11 — deleteTodo (Frame 11)

**Delivery:** Explaining filter carefully.

    In App komt de functie delete todo. Die krijgt een index, en filtert de array. We houden elke todo waarvan de index niet gelijk is aan de index die we willen verwijderen. Het resultaat is een nieuwe array, zonder die ene todo.

## Line 12 — De callback in de map (Frame 12)

**Delivery:** Key insight, emphasis on "niet te kennen".

    In de map geeft App elke TodoItem zijn eigen callback mee: een arrow function die delete todo aanroept, met de index van dat item. Zo hoeft TodoItem zijn eigen index niet te kennen. Hij zegt enkel: ik wil verwijderd worden.

## Line 13 — Delete flow (Frame 13)

**Delivery:** Narrating a flow.

    Klik je bij de tweede todo op Delete, dan roept TodoItem on delete aan. Die callback roept delete todo aan, met index één. Filter maakt een nieuwe array zonder die todo, App rendert opnieuw, en de todo is weg.

## Line 14 — Samenvatting (Frame 14)

**Delivery:** Warm wrap-up.

    Kort samengevat: de lijst staat in App. InputView stuurt een waarde naar boven, met een callback met parameter. TodoItem meldt enkel dat er geklikt is, en App weet zelf welke index erbij hoort. De state blijft in de parent, en de children laten weten wat er gebeurt.
