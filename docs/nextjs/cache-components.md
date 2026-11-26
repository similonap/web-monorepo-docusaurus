# Extra: data cachen

In de vorige hoofdstukken werd alle data bij elke request opnieuw opgehaald. Dat komt omdat we ons project aangemaakt hebben met **Cache Components**: Next.js cachet niets, tenzij je daar zelf om vraagt. Zo zie je altijd de meest recente data en hoef je niet na te denken over verouderde data.

Soms is het wel zinvol om data te cachen. Denk aan een lijst van landen, de producten in een webshop of de blogposts op een website. Die veranderen zelden, dus waarom zou je bij elke bezoeker opnieuw de API of de database bevragen? Gecachete data kan Next.js bovendien al op voorhand in de pagina zetten, waardoor de gebruiker geen loading indicator meer ziet.

## use cache

Je cachet een functie door `"use cache"` als eerste regel in de functie te zetten. Met `cacheLife` geef je aan hoe lang de data in de cache mag blijven. De `User` interface is dezelfde als in het hoofdstuk over server components.

```typescript
import { cacheLife } from "next/cache";
import { User } from "@/types";

const fetchUsers = async () => {
    "use cache";
    cacheLife("hours");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await response.json();
    return data;
}

const Home = async () => {
    const users = await fetchUsers();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            {users.map(user => (
                <div key={user.id} className="mb-4 p-4 border border-gray-200 rounded">{user.name}</div>
            ))}
        </div>
    );
}

export default Home;
```

De eerste keer wordt de data opgehaald, daarna komt ze uit de cache. Na ongeveer een uur haalt Next.js de data op de achtergrond opnieuw op. Omdat de data nu gecachet is, kan Next.js deze pagina volledig op voorhand klaarzetten. Een `loading.tsx` is hier dus niet meer nodig.

`cacheLife` kent een aantal vaste profielen: `"seconds"`, `"minutes"`, `"hours"`, `"days"`, `"weeks"` en `"max"`. Laat je `cacheLife` weg, dan gebruikt Next.js een standaardprofiel van ongeveer een kwartier.

Je kan `"use cache"` ook bovenaan een (async) server component zetten. Dan wordt het volledige component gecachet.

### Regels voor use cache

- **Geen `cookies()`, `headers()` of `searchParams` in een gecachete functie.** Die zijn voor elke gebruiker anders. Lees ze buiten de functie uit en geef de waarde mee als argument. Elke combinatie van argumenten krijgt zijn eigen plaats in de cache.

  ```typescript
  const getProduct = async (id: string) => {
      "use cache";
      // ...
  }

  const ProductPage = async (props: PageProps<"/products/[id]">) => {
      const { id } = await props.params;
      const product = await getProduct(id);
      // ...
  }
  ```

- **Argumenten en returnwaarden moeten omgezet kunnen worden naar data**: strings, getallen, booleans, arrays, gewone objecten, `Date`, ... Een MongoDB document met een `ObjectId` als `_id` lukt niet. Zet zo'n document eerst om naar een gewoon object.
- **Geen `await connection()`** in een gecachete functie. Die regel betekent net "pas bij een request uitvoeren". Bij een databasefunctie vervang je `await connection()` dus door `"use cache"`.

## De cache leegmaken na een wijziging

Wat als de data wel verandert? Stel dat we de todo's uit het hoofdstuk over formulieren cachen. Na het toevoegen van een todo wil je de nieuwe todo uiteraard meteen zien.

Hiervoor geef je de gecachete data een label (een **tag**) met `cacheTag`:

```typescript
import { cacheTag } from "next/cache";

export const getTodos = async (): Promise<Todo[]> => {
    "use cache";
    cacheTag("todos");

    const todos = await todosCollection.find().toArray();
    return todos.map(todo => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
    }));
}
```

In de server action maak je die tag ongeldig met `updateTag`:

```typescript
"use server";

import { updateTag } from "next/cache";
import { addTodo } from "@/database";

export const addTodoAction = async (formData: FormData): Promise<void> => {
    const title = formData.get("title")?.toString();
    if (!title) {
        return;
    }
    await addTodo(title);
    updateTag("todos");
}
```

`updateTag` gooit alle data met de tag `todos` uit de cache en zorgt ervoor dat de gebruiker die het formulier verstuurde meteen de nieuwe lijst ziet. Een `revalidatePath` is hier niet meer nodig.

Je zal ook `revalidateTag("todos", "max")` tegenkomen. Die markeert de data als verouderd, maar toont nog even de oude data terwijl Next.js op de achtergrond de nieuwe ophaalt. Dat is handig als de data niet door de gebruiker zelf aangepast wordt, bijvoorbeeld vanuit een ander systeem. In een server action na een formulier gebruik je `updateTag`.

## Samengevat

| Wat wil je? | Hoe? |
| --- | --- |
| Data bij elke request opnieuw ophalen | Niets doen (standaard), met `loading.tsx` of `Suspense` voor de laadtijd |
| Data uit een database bij elke request | `await connection()` bovenaan de functie |
| Data cachen | `"use cache"` + `cacheLife(...)` |
| Gecachete data vernieuwen na een formulier | `cacheTag(...)` in de functie, `updateTag(...)` in de server action |
