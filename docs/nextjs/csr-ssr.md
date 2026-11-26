# Server Components

Tot nu toe hebben we gebruik gemaakt van client-side rendering (CSR) om onze React applicaties te maken. Dit betekent dat de volledige applicatie in de browser wordt geladen en daar gerenderd wordt. Dit is een goede manier om applicaties te maken, maar het heeft ook enkele nadelen. Een van de nadelen is dat de eerste keer dat de applicatie geladen wordt, er een lege pagina getoond wordt terwijl de JavaScript code gedownload en uitgevoerd wordt. Dit kan ervoor zorgen dat de gebruiker een tijdje naar een lege pagina moet kijken voordat de applicatie getoond wordt. Dit is niet ideaal voor de gebruikerservaring.

Sinds React 19 is het mogelijk om server components te gebruiken. Dit zijn componenten die op de server gerenderd worden en als HTML naar de browser gestuurd worden. Dit zorgt ervoor dat de gebruiker meteen een volledige pagina te zien krijgt zonder dat hij moet wachten tot de JavaScript code gedownload en uitgevoerd is. Dit zorgt voor een betere gebruikerservaring.

## Client Components

Voor we in detail treden over server components, is het belangrijk om eerst te begrijpen wat client components zijn. Client components zijn componenten die in de browser gerenderd worden. Dit is de standaard manier om React componenten te maken. In een client component kan je state en effects gebruiken om interactiviteit toe te voegen aan je applicatie. Dit zijn dus de componenten die we tot nu toe altijd gebruikt hebben in onze React applicaties.

Ook belangrijk is dat Next.js standaard alle componenten als server components behandelt. Dit betekent dat als je een nieuw component aanmaakt, dit standaard een server component is. Wil je een client component maken, dan moet je bovenaan het bestand `use client` zetten. Dit is nodig omdat client components state en effects kunnen gebruiken en server components niet.

```typescript
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter => counter + 1)}>{counter}</button>
    </div>
  );
}

export default Home;
```

Dit zal een fout geven omdat we state gebruiken in een server component. Om dit op te lossen moeten we bovenaan het bestand `use client` zetten.

```typescript
"use client"
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter(counter => counter + 1)}>{counter}</button>
        </div>
    );
}
export default Home;
```

Dit wil zeggen dat alles van het onderdeel React.js dat we tot nu toe geleerd hebben, nog steeds geldig is. We kunnen nog steeds state en effects gebruiken in onze componenten. We moeten alleen bovenaan het bestand `use client` zetten om aan te geven dat het een client component is.

Over het algemeen is de regel dat je een component een client component maakt als je een van de volgende dingen wil doen:
- State gebruiken met `useState`
- Side effects gebruiken met `useEffect`
- Event handlers gebruiken zoals `onClick`, `onChange`, ...
- Browser-only APIs gebruiken zoals `localStorage`, `document`, `window`, ...
- Externe libraries gebruiken die niet op de server werken, zoals `react-router`, `leaflet`, ...

## Server Components

Zoals al eerder vermeld, zijn server components componenten die op de server gerenderd worden. Dit is nuttig voor componenten als je: 

- Data wil ophalen van een server of database
- Componenten wil maken die geen state of effects nodig hebben
- De hoeveelheid JavaScript die naar de browser gestuurd wordt wil verminderen
- De First Contentful Paint (FCP) wil verbeteren. Dit is de tijd die het duurt voordat de gebruiker iets op het scherm ziet.

By default zijn Next.js applicaties gebaseerd op React Server Components. Het ophalen van data met Server Components is een relatief nieuwe aanpak en er zijn een paar voordelen aan het gebruik ervan:
- Server Components ondersteunen JavaScript Promises, wat een oplossing biedt voor asynchrone taken zoals het ophalen van data. Je kan de async/await syntax gebruiken zonder dat je useEffect, useState of andere data fetching libraries nodig hebt.
- Server Components draaien op de server, dus je kan zware data fetches en logica op de server houden en alleen het resultaat naar de client sturen.
- Omdat Server Components op de server draaien, kan je rechtstreeks de database bevragen zonder een extra API laag. Dit bespaart je het schrijven en onderhouden van extra code.


### Data Fetching in Server Components

In de voorbeelden op deze pagina importeren we de types uit `@/types`. Maak daarvoor een bestand `types.ts` aan in de root van je project (naast de `app` directory). De alias `@/` verwijst naar die root. We beginnen met een `User` interface voor de users van [JSONPlaceholder](https://jsonplaceholder.typicode.com/users). Een user heeft nog meer velden (zoals `address` en `company`), maar je hoeft enkel de velden op te nemen die je gebruikt:

```typescript title="types.ts"
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}
```

Stel je hebt het volgende client component dat data ophaalt van een API:

```typescript
"use client"
import { useState, useEffect } from "react";
import { User } from "@/types";

const Home = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data : User[] = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    },[]);

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {
          users.map(user => (
            <div key={user.id} className="mb-4 p-4 border border-gray-200 rounded">{user.name}</div>))
        }
      </div>
    )
}

export default Home;
```

Hier maken we gebruik van `useState` en `useEffect` om data op te halen van een API. Dit is de standaard manier om data op te halen in een React applicatie. Het nadeel hiervan is dat de browser eerst alle JavaScript moet downloaden en uitvoeren, en pas daarna het request naar de API kan versturen. Tot dan ziet de gebruiker een lege lijst.

Het alternatief in Next.js is om een server component te maken dat de data ophaalt. Dit kan je doen door het `use client` statement weg te laten. In een server component kan je namelijk gewoon `async` functies gebruiken om data op te halen.

```typescript
import { User } from "@/types";

const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data : User[] = await response.json();
    return data;
}

const Home = async() => {
    const users = await fetchUsers();

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        {
          users.map(user => (
            <div key={user.id} className="mb-4 p-4 border border-gray-200 rounded">{user.name}</div>))
        }
      </div>
    )
}

export default Home;
```

Je ziet hier dat het component `Home` nu een `async` functie is. Dit is mogelijk omdat het een server component is. We kunnen dus gewoon `await` gebruiken om de data op te halen. De data wordt op de server opgehaald en komt mee met de HTML naar de browser. Er is geen `useEffect`, geen extra request vanuit de browser en geen state nodig.

Opgelet: dit is alleen mogelijk in server components. In client components kan je geen `async` functies gebruiken voor het component zelf.

### loading.tsx

Als je dit voorbeeld zo uitprobeert in een nieuw Next.js project, krijg je de volgende foutmelding:

```
Next.js encountered uncached data during prerendering.
```

Next.js probeert van elke pagina zo veel mogelijk op voorhand klaar te zetten, zodat de gebruiker meteen iets te zien krijgt. Deze pagina kan echter niets tonen voordat de API geantwoord heeft. Next.js verwacht dat je aangeeft wat er in de tussentijd op het scherm moet staan.

De eenvoudigste oplossing is een `loading.tsx` bestand in dezelfde directory als de pagina (hier dus `app/loading.tsx`). Next.js toont dit component meteen en vervangt het door de pagina zodra de data binnen is.

```typescript
const Loading = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
    )
}
export default Loading;
```

Een `loading.tsx` geldt voor de pagina in die directory en voor alle pagina's in de subdirectories, tenzij die hun eigen `loading.tsx` hebben. Vuistregel: maak je een `async` pagina die data ophaalt, zet er dan een `loading.tsx` naast.

Achter de schermen zet Next.js je pagina in een React `Suspense` component met `loading.tsx` als fallback. In de volgende sectie zie je hoe je dat zelf doet als je meer controle wil.

### Suspense

Als je meer controle wilt over wat er moet gebeuren als een component nog data aan het fetchen is, dan kan je gebruik maken van React's `Suspense` component. Hiermee kan je een fallback tonen voor één deel van de pagina, terwijl de rest van de pagina al zichtbaar is.

Neem opnieuw de lijst van users. Met `loading.tsx` ziet de gebruiker enkel "Loading..." tot de API geantwoord heeft. Zelfs de titel `User List` verschijnt pas daarna, terwijl die helemaal geen data nodig heeft. Daarom verplaatsen we het ophalen van de data naar een apart component `UserList`:

```typescript title="components/UserList.tsx"
import { User } from "@/types";

const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data : User[] = await response.json();
    return data;
}

const UserList = async() => {
    const users = await fetchUsers();

    return (
      <div>
        {
          users.map(user => (
            <div key={user.id} className="mb-4 p-4 border border-gray-200 rounded">{user.name}</div>))
        }
      </div>
    )
}

export default UserList;
```

De pagina zelf is nu geen `async` functie meer. Ze toont de titel meteen en zet `UserList` in een `Suspense` component:

```typescript title="app/page.tsx"
import { Suspense } from "react";
import UserList from "@/components/UserList";

const Home = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <Suspense fallback={<p>Loading users...</p>}>
          <UserList />
        </Suspense>
      </div>
    )
}

export default Home;
```

Een `loading.tsx` is nu niet meer nodig: de `Suspense` rond `UserList` vertelt Next.js al wat er op het scherm moet staan terwijl de data laadt. De titel (en bijvoorbeeld ook een navigatiebalk of een zoekveld) staat meteen op het scherm, enkel de lijst moet nog laden.

Je kan ook meerdere `Suspense` componenten op één pagina gebruiken. Elk deel laadt dan onafhankelijk van de andere. Stel dat we een `Todo` component hebben dat data ophaalt van een API aan de hand van een prop `id`. Voeg eerst een interface voor een todo toe aan `types.ts`. We noemen ze `TodoItem`, zodat de naam niet botst met het component `Todo`:

```typescript title="types.ts"
export interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
```

```typescript title="components/Todo.tsx"
import { TodoItem } from "@/types";

const fetchTodo = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

    if (!response.ok) {
        throw new Error('Failed to fetch todo');
    }
    const data : TodoItem = await response.json();
    return data;
}

const Todo = async ({ id }: { id: string }) => {
    const todo = await fetchTodo(id);

    return (
        <div className="p-4 border border-gray-200 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Todo Item</h2>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
        </div>
    );
}

export default Todo;
```

Let op dat we een vertraging van 2 seconden simuleren om het laden duidelijk te maken. We kunnen dit component nu gebruiken in een andere server component en `Suspense` gebruiken om een fallback te tonen terwijl de data aan het laden is. Gebruiken we het eerst zonder `Suspense`, dan krijgen we dezelfde foutmelding als hierboven. Met enkel een `loading.tsx` zou de hele pagina wachten tot alle todo's geladen zijn voordat er iets getoond wordt.

```typescript
import Todo from "@/components/Todo";

const TodosPage = () => {
    return (
        <div>
            <Todo id="1" />
            <Todo id="2" />
            <Todo id="3" />
        </div>
    );
}

export default TodosPage;
```

Om dit op te lossen kunnen we `Suspense` gebruiken:

```typescript
import { Suspense } from "react";
import Todo from "@/components/Todo";

const TodosPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading todo 1...</div>}>
                <Todo id="1" />
            </Suspense>
            <Suspense fallback={<div>Loading todo 2...</div>}>
                <Todo id="2" />
            </Suspense>
            <Suspense fallback={<div>Loading todo 3...</div>}>
                <Todo id="3" />
            </Suspense>
        </div>
    );
} 
export default TodosPage;
```

Nu zal elke `Todo` component zijn eigen loading indicator tonen terwijl de data aan het laden is. Dit zorgt voor een betere gebruikerservaring omdat de gebruiker meteen ziet dat er iets aan het gebeuren is. Vaak wordt er een skeleton loader gebruikt in plaats van een simpele tekst. Een skeleton is een grijze placeholder die de vorm van de content nabootst. Dit geeft de gebruiker een beter idee van wat er gaat komen. Je kan deze mee in de component zelf zetten en exporteren:

```typescript
export const TodoSkeleton = () => {
    return (
        <div className="p-4 border border-gray-200 rounded shadow-sm animate-pulse">
            <h2 className="text-xl font-semibold mb-2 bg-gray-300 h-6 w-1/3 rounded"></h2>
            <p className="bg-gray-300 h-4 w-1/4 rounded mb-2"></p>
            <p className="bg-gray-300 h-4 w-3/4 rounded mb-2"></p>
            <p className="bg-gray-300 h-4 w-1/2 rounded"></p>
        </div>
    )
}
```

Dan kan je deze gebruiken als fallback in `Suspense`:

```typescript
import { Suspense } from "react";
import Todo, { TodoSkeleton } from "@/components/Todo";

const TodosPage = () => {
    return (
        <div>
            <Suspense fallback={<TodoSkeleton />}>
                <Todo id="1" />
            </Suspense>
            <Suspense fallback={<TodoSkeleton />}>
                <Todo id="2" />
            </Suspense>
            <Suspense fallback={<TodoSkeleton />}>
                <Todo id="3" />
            </Suspense>
        </div>
    );
}
export default TodosPage;
```

### Combineren van Server en Client Components

Het is perfect mogelijk om server en client components te combineren in een Next.js applicatie. Een goede vuistregel is om zoveel mogelijk server components te gebruiken en alleen client components te maken als het echt nodig is. Dit zorgt ervoor dat je applicatie snel laadt en dat de hoeveelheid JavaScript die naar de browser gestuurd wordt minimaal is.

We bouwen verder op de lijst van users uit de sectie over `Suspense`. `UserList` is een server component dat de data ophaalt. In plaats van elke user zelf te tonen, geeft het elke user door aan een client component `UserCard`:

```typescript title="components/UserList.tsx"
import { User } from "@/types";
import UserCard from "@/components/UserCard";

const fetchUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data : User[] = await response.json();
    return data;
}

const UserList = async() => {
    const users = await fetchUsers();

    return (
      <div>
        {
          users.map(user => (
            <UserCard key={user.id} user={user} />))
        }
      </div>
    )
}

export default UserList;
```

De pagina `app/page.tsx` blijft dezelfde: de titel staat meteen op het scherm en `UserList` staat in een `Suspense`.

met als `UserCard`:

```typescript title="components/UserCard.tsx"
"use client"

import { User } from "@/types";

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className="mb-4 p-4 border border-gray-200 rounded">
            {user.name}
        </div>
    )
}

export default UserCard;
```

Op dit moment is het uiteraard niet nodig om deze component als client component te maken, maar stel dat je toch interactiviteit wil toevoegen, dan is dit perfect mogelijk. Zonder interactie mag je de "use client" regel weglaten en wordt het een server component.

Bijvoorbeeld als we de user card klikbaar willen maken met een `onClick` event handler en willen aanduiden dat deze geselecteerd is:

```typescript title="components/UserCard.tsx"
"use client"

import { User } from "@/types";
import { useState } from "react";

interface UserCardProps {
    user: User
}

const UserCard = ({user} : UserCardProps) => {
    const [selected, setSelected] = useState(false);

    return (
        <div className={`mb-4 p-4 border ${selected ? "border-blue-500 bg-blue-50" : "border-gray-200"} rounded cursor-pointer`} onClick={() => setSelected(selected => !selected)}>{ user.name }</div>
    )
}

export default UserCard;
```

`UserList` blijft een server component dat de data ophaalt en `UserCard` is een client component dat de interactiviteit afhandelt. Een server component mag dus gewoon client components renderen en er data aan doorgeven via props.

## Error Boundaries

In React kan je gebruik maken van Error Boundaries om fouten op te vangen in je componenten. Dit is vooral handig in combinatie met server components en Suspense, omdat je zo fouten kan afhandelen die optreden tijdens het laden van data. 

In Next.js kan je een `error.tsx` bestand maken in een directory om een error boundary te definiëren voor alle componenten in die directory. Je plaatst deze file in dezelfde directory als waar je de error boundary wil toepassen. Let op dat dit component een client component moet zijn, dus je moet bovenaan het bestand `use client` zetten.

```typescript
"use client"; // Error components must be Client Components

import { useEffect } from "react";

interface ErrorProps {
    error: unknown;
    retry: () => void;
}

const ErrorPage = ({ error, retry }: ErrorProps) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => retry()}>Try again</button>
        </div>
    );
}

export default ErrorPage;
```

Je krijgt hier een `error` en een `retry` functie als props. De `error` bevat de fout die opgetreden is. Het type is `unknown` omdat je in JavaScript eender wat kan gooien, niet enkel `Error` objecten. Wil je de foutmelding tonen, controleer dan eerst met `error instanceof Error`.

De `retry` functie haalt de data opnieuw op van de server en probeert het component opnieuw te renderen. Dit is vooral handig in combinatie met Suspense, omdat je zo de gebruiker de mogelijkheid kan geven om het opnieuw te proberen als er een fout optreedt tijdens het laden van data.

:::warning
In productie toont Next.js niet de echte foutmelding van een fout die op de server gegooid werd, maar een algemene boodschap. Zo lekken er geen gevoelige gegevens (zoals een database-URL) naar de browser. Gebruik `error.tsx` dus voor onverwachte fouten, niet om de gebruiker te vertellen wat er mis is met de ingevulde gegevens. Hoe je dat wel doet, zie je in het hoofdstuk over formulieren.
:::

## Use case: MongoDB

Een veelvoorkomende use case voor server components is het ophalen van data uit een database. We hebben in de vorige cursus gezien dat we een backend server zoals Express.js nodig hebben als we data uit een database willen ophalen. In Next.js is dit niet nodig omdat we server components kunnen gebruiken om direct data uit een database op te halen. Dit kan bijvoorbeeld met MongoDB. 

Installeer eerst de MongoDB driver:

```bash
npm install mongodb
```

### .env.local

De connection string van je database hoort niet in je code: er staat een wachtwoord in. Maak daarom in de root van je project (naast de `app` directory) een bestand `.env.local` aan:

```bash title=".env.local"
MONGODB_URI=mongodb+srv://<gebruiker>:<wachtwoord>@<cluster>.mongodb.net/
```

Vervang de waarde door de connection string van je eigen database (bijvoorbeeld uit MongoDB Atlas, of `mongodb://localhost:27017` voor een lokale database). Next.js leest dit bestand automatisch in bij het opstarten. Je kan de waarde dan in je code opvragen met `process.env.MONGODB_URI`.

- In een nieuw Next.js project staat `.env*` al in `.gitignore`. Je wachtwoord komt dus niet in git terecht.
- Pas je `.env.local` aan terwijl de development server draait, herstart dan `npm run dev`.
- Variabelen in `.env.local` zijn enkel beschikbaar op de server. Enkel variabelen die beginnen met `NEXT_PUBLIC_` komen ook in de browser terecht. Geef je database-URL dus nooit zo'n naam.

### Database functies

We halen jokes op van een API en slaan ze op in MongoDB. Een joke ziet er zo uit:

```json
{ "id": 1, "type": "general", "setup": "What did the fish say when it hit the wall?", "punchline": "Dam." }
```

Voeg daarvoor een `Joke` interface toe aan `types.ts`:

```typescript title="types.ts"
export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}
```

Het `_id` veld dat MongoDB zelf toevoegt, hoef je niet op te nemen. De MongoDB driver voegt dat zelf toe aan het type van wat je terugkrijgt.

Maak dan een bestand `database.ts` aan in de root van je project. Het handelt de connectie met MongoDB af:

```typescript title="database.ts"
import { Collection, MongoClient } from "mongodb";
import { connection } from "next/server";
import { Joke } from "@/types";

const client = new MongoClient(process.env.MONGODB_URI!);

export const jokesCollection: Collection<Joke> = client.db("jokes").collection<Joke>("joke");

export const getJokes = async() => {
    await connection();

    if (await jokesCollection.countDocuments() === 0) {
        const response = await fetch("https://sampleapis.assimilate.be/jokes/goodJokes");
        const json : Joke[] = await response.json();
        await jokesCollection.insertMany(json);
    }

    const jokes = await jokesCollection.find().toArray();

    return jokes;
}
```

Merk de regel `await connection()` bovenaan `getJokes` op. Bij een `fetch` weet Next.js automatisch dat er data opgehaald wordt die pas bij een request gekend is. Bij een database package zoals `mongodb` weet Next.js dat niet. Met `await connection()` zeg je: alles wat hierna komt, gebeurt pas wanneer een gebruiker de pagina opvraagt. Laat je deze regel weg, dan krijg je een foutmelding zoals `Next.js encountered the unstable value new Date() while prerendering` (de MongoDB driver gebruikt intern `new Date()`).

Vuistregel: elke databasefunctie die je in een component gebruikt om data op te halen, begint met `await connection()`.

### Jokes tonen met Suspense

Ook een database query is data die opgehaald moet worden. Net zoals bij de lijst van users zetten we het ophalen van de data daarom in een apart component `JokeList`. In hetzelfde bestand maken we een skeleton dat de vorm van de lijst nabootst:

```typescript title="components/JokeList.tsx"
import { getJokes } from "@/database";

const JokeList = async() => {
    const jokes = await getJokes();

    return (
        <ul className="space-y-4">
            {jokes.map((joke) => (
                <li key={joke.id} className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">{joke.setup}</h2>
                    <p className="mt-2 text-gray-700">{joke.punchline}</p>
                </li>
            ))}
        </ul>
    )
}

export const JokeListSkeleton = () => {
    return (
        <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="border p-4 rounded shadow animate-pulse">
                    <div className="bg-gray-300 h-6 w-2/3 rounded"></div>
                    <div className="bg-gray-300 h-4 w-1/3 rounded mt-2"></div>
                </li>
            ))}
        </ul>
    )
}

export default JokeList;
```

De pagina zelf is geen `async` functie. Ze toont de titel meteen en zet `JokeList` in een `Suspense` met de skeleton als fallback:

```typescript title="app/jokes/page.tsx"
import { Suspense } from "react";
import JokeList, { JokeListSkeleton } from "@/components/JokeList";

const JokesPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Jokes Page</h1>
            <Suspense fallback={<JokeListSkeleton />}>
                <JokeList />
            </Suspense>
        </div>
    )
}

export default JokesPage;
```

Laat je de `Suspense` weg (en staat er geen `loading.tsx` naast de pagina), dan krijg je dezelfde foutmelding als bij het `fetch` voorbeeld. Wil je de skeleton beter zien? Voeg dan tijdelijk een vertraging toe in `getJokes`, zoals bij het `Todo` voorbeeld: `await new Promise(resolve => setTimeout(resolve, 2000));`.
