---
sidebar_position: 10
---

# React Router

## Twee soorten routering

Het proces waarbij de **resource** die bij een uniform resource locator (**URL**) hoort wordt opgezocht, heet **routering**. Vanuit het perspectief van de eindgebruiker is routering dus een vertaling van URL's in de browserbalk naar webpagina's. Er zijn twee vormen van routering, beide met hun eigen voor- en nadelen.

### Server-side routering

De oudste (maar daarom niet "verouderde") vorm van routering is **server-side routering**. Hierbij wordt een **HTTP request** naar de server gestuurd, met daarin de te raadplegen URL. **Het is dan de taak van de server deze URL te gebruiken om een bepaalde resource op te zoeken.** Voor deze vorm van routering is niet noodzakelijk een specifiek framework vereist. Bovendien downloadt de gebruiker enkel de pagina's die hij/zij daadwerkelijk wil zien. Daar tegenover staat dat routering enkel mogelijk is zo lang de gebruiker verbonden blijft met het Internet. Ook kost het tijd om telkens een request te versturen en te wachten op een response.

### Routering in single-page applicaties

Een nieuwere vorm van routering, die we aantreffen in single-page applicaties, is **client-side routering**. Bij gebruik van client-side routering beschikt de client vanaf het opstarten van de applicatie over meerdere (applicatie)pagina's. **Gebruik van een link binnen de applicatie zorgt er dan niet voor dat er opnieuw een HTTP request plaatsvindt.** In plaats daarvan wordt door de applicatie zelf bepaald welke (applicatie)pagina moet worden getoond. Hierbij wordt géén nieuw HTML-bestand gedownload.

Omdat client-side routering geen extra netwerkverkeer vereist, kan deze vorm ook toegepast worden wanneer de gebruiker niet verbonden is met het Internet. Zo lang de opgevraagde pagina's al in de applicatie aanwezig zijn, is er geen probleem. Bovendien voelt deze vorm van routering vaak responsiever aan, omdat er niet telkens gewacht moet worden op een response van de server.

## React Router

Om client-side routering toe te passen, moet de app zelf over de nodige logica beschikken om URL's om te zetten naar pagina's. Deze logica hoef je als applicatieprogrammeur zelf niet te verzinnen. In plaats daarvan kan je gebruik maken van de bibliotheek **React Router**. Deze ondersteunt alle gebruikelijke manieren om URL's te vertalen naar pagina's.

We gebruiken de laatste versie van React Router (versie 8). React Router kan op drie manieren gebruikt worden, die de documentatie **modes** noemt:

- **Declarative mode**: je beschrijft de routes als JSX met `<BrowserRouter>`, `<Routes>` en `<Route>`.
- **Data mode**: je beschrijft de routes als een array van JavaScript-objecten met `createBrowserRouter` en geeft die door aan `<RouterProvider>`. De routeconfiguratie staat dan buiten de React componenten.
- **Framework mode**: React Router als volledig framework met een Vite-plugin, code splitting en server-side rendering.

Wij gebruiken in deze cursus **data mode**. Als je documentatie opzoekt, let er dan op dat je de documentatie van versie 8 en van data mode bekijkt. Veel tutorials online gebruiken nog oudere versies of een andere mode.

### Installatie

Omdat React Router een externe bibliotheek is, moet je deze eerst installeren. Hiervoor gebruik je in de root directory van je React project volgend commando:

```bash
npm install react-router@8
```

Ondersteuning voor TypeScript is ingebouwd, dus de types hoef je niet apart te installeren. Versie 8 vereist wel minstens **React 19.2.7** en **Node.js 22.22**.

Op het moment van schrijven is de recentste versie van React Router versie 8.4.0. Nieuwere versies die ook beginnen met het cijfer 8 zouden zonder problemen moeten werken. Daarom eindigt bovenstaand commando op `@8`.

:::warning
In oudere versies installeerde je het pakket `react-router-dom`. Dat pakket bestaat niet meer in versie 8. Kom je in een tutorial `import ... from "react-router-dom"` tegen, dan is die tutorial verouderd. Alles importeer je nu uit `react-router`, behalve `RouterProvider`: die importeer je uit `react-router/dom`.
:::

### Voorbeeld

Om te zien hoe je React Router gebruikt, bekijken we een voorbeeld. Dit voorbeeld heeft een aantal pagina's en een gedeelde layout die op elke pagina getoond wordt.

```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
import { createBrowserRouter, NavLink, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import styles from "./App.module.css";

const Root = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>Header</div>
            <div className={styles.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/page1">Page 1</NavLink>
                <NavLink to="/page2">Page 2</NavLink>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
            <div className={styles.footer}>Footer</div>
        </div>
    );
}

const Home = () => {
    return <div>This is the home page!</div>;
}

const Page1 = () => {
    return <div>Page 1</div>;
}

const Page2 = () => {
    return <div>Page 2</div>;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "page1",
                element: <Page1 />
            },
            {
                path: "page2",
                element: <Page2 />
            }
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;
```

Het eerste wat we moeten doen, is een router aanmaken en onze routes configureren. Dit maakt client-side routering mogelijk voor onze webapplicatie.

Dit doen we met de functie `createBrowserRouter`. Deze functie krijgt als argument een array van routes. Deze routes zijn van het type `RouteObject`. Een `RouteObject` heeft onder meer de volgende properties:

- `path`: het pad waarop de route moet reageren
- `element`: het element dat moet worden gerenderd wanneer de route actief is
- `children`: een array van `RouteObject`s die de subroutes (child routes) van de huidige route bevat
- `index`: geeft aan dat dit de standaard child route is (zie verder)
- `errorElement`: het element dat getoond wordt als er iets misloopt (zie verder)

Het object dat `createBrowserRouter` teruggeeft, geven we mee aan de `RouterProvider` component.

:::info
Merk op dat we de router **buiten** de `App` component aanmaken. Als je `createBrowserRouter` binnen een component oproept, wordt er bij elke render een nieuwe router aangemaakt. Dat is overbodig werk en kan ervoor zorgen dat de applicatie haar huidige toestand verliest.
:::

### Geneste routes en Outlet

Als je de code bekijkt, zie je dat we een `Root` component hebben gemaakt. Deze component bevat de basisstructuur van onze webapplicatie: een header, een navigatiebalk, een content gedeelte en een footer. In de navigatiebalk staan `NavLink` componenten waarmee de gebruiker tussen de verschillende pagina's kan navigeren.

De `Root` component bevat ook een `Outlet` component. Op die plaats wordt de child route gerenderd die op dat moment actief is. Surft de gebruiker naar `/page1`, dan wordt eerst `Root` gerenderd en op de plaats van `Outlet` de `Page1` component. Zo moet je de header, navigatie en footer maar één keer schrijven.

De paden van child routes zijn **relatief** ten opzichte van hun parent. De child route met `path: "page1"` onder de route met `path: "/"` komt dus overeen met de URL `/page1`. Je kan routes ook meerdere niveaus diep nesten. Elke route met children moet dan zelf een `Outlet` bevatten:

```typescript
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "admin",
                element: <AdminLayout />, // bevat zelf een <Outlet />
                children: [
                    { index: true, element: <Dashboard /> }, // /admin
                    { path: "users", element: <Users /> }     // /admin/users
                ]
            }
        ]
    }
]);
```

### Index routes

Een route met `index: true` is de **index route** van zijn parent. Ze wordt in de `Outlet` getoond wanneer de URL exact overeenkomt met het pad van de parent. In ons voorbeeld wordt `Home` dus getoond op `/`, en `Dashboard` op `/admin`. Een index route heeft zelf geen `path` en kan geen children hebben.

### Links

Om te navigeren gebruik je **geen** gewone `<a href="...">`. Een gewone link zorgt ervoor dat de browser een nieuwe HTTP request doet en de hele applicatie opnieuw inlaadt. In plaats daarvan gebruik je de `Link` component. Met de `to` property geef je aan naar welke URL de gebruiker moet navigeren wanneer hij op de link klikt.

```typescript
<Link to="/page1">Page 1</Link>
```

Net zoals bij de paden van routes kan je in `to` een **absoluut** of een **relatief** pad gebruiken:

- `to="/page1"` begint met een `/` en is absoluut: de link gaat altijd naar `/page1`, ongeacht op welke pagina je staat.
- `to="users"` begint niet met een `/` en is relatief ten opzichte van de route waarin de link staat. Staat deze link in een component van de route `/admin`, dan gaat ze naar `/admin/users`.
- `to=".."` gaat één route niveau omhoog.

Een tweede manier om links te maken is de `NavLink` component. Deze component werkt hetzelfde als de `Link` component, maar weet bovendien of de link naar de huidige pagina wijst. Dat is handig voor navigatiebalken. Wanneer de link actief is, krijgt het `<a>` element automatisch een `active` class. Die class kan je gebruiken om de link te stylen:

```css
.active {
    color: red;
}
```

Je kan ook een functie meegeven aan de `className` property. Deze functie krijgt een object met een `isActive` property, een boolean die aangeeft of de link actief is of niet.

```typescript
<NavLink className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>
```

Een `NavLink` is standaard ook actief op alle pagina's die "onder" haar pad liggen. Een `NavLink` naar `/admin` is dus ook actief op `/admin/users`. Wil je dat de link enkel actief is bij een exacte match, dan voeg je de `end` property toe:

```typescript
<NavLink to="/admin" end>Dashboard</NavLink>
```

Een `NavLink` naar `/` is een uitzondering: die is enkel actief op `/` zelf, ook zonder `end`.

### Ontbrekende pagina's en fouten afhandelen

Als de gebruiker een URL gebruikt die niet naar een geldige pagina leidt, toont React Router een standaard foutpagina. Dat is niet gebruiksvriendelijk. Het is beter een pagina te voorzien die de gebruiker op de hoogte stelt dat het ingevoerde adres niet bestaat. Dit kan je doen door een route met een **wildcard** (`*`) te voorzien. Als je een component `PageNotFound` hebt, kan je de volgende child route toevoegen:

```typescript
{
    path: "*",
    element: <PageNotFound />
}
```

Omdat deze route zo algemeen is, zal ze enkel matchen wanneer er geen betere match gevonden wordt. Omdat het een child route van `Root` is, wordt `PageNotFound` gewoon binnen de layout getoond, met header en navigatie.

Daarnaast kan je aan een route een `errorElement` meegeven. Dit element wordt getoond in plaats van `element` wanneer er geen route gevonden wordt of wanneer er tijdens het renderen van die route (of een van haar children) een fout optreedt. Met de `useRouteError` hook kan je opvragen wat er misgegaan is:

```typescript
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return <h1>{error.status} {error.statusText}</h1>;
    }
    return <h1>Er ging iets mis</h1>;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            // ...
        ]
    }
]);
```

### URL parameters

Tot nu toe hebben we altijd routes gebruikt die exacte paden voorstellen. Soms wil je ook aan de hand van de URL bepaalde parameters meegeven. Dat kan bijvoorbeeld een ID zijn: een uniek stukje informatie dat verwijst naar één specifieke user, één bestelling, één event op de kalender,... Als deze zaken voortdurend worden toegevoegd aan het systeem, is het niet mogelijk een route per user, per bestelling of per event te voorzien. Het is echter wel mogelijk een pad zoals `/detail/:id` te gebruiken, waarbij `:id` een **parameter** is: een algemene plaatshouder in de URL waaraan een concrete waarde gegeven kan worden. Zo kan bijvoorbeeld `/detail/1` of `/detail/2` gebruikt worden, waarbij in beide gevallen dezelfde component wordt gerenderd, maar met andere data.

Om dit te laten werken, moet de applicatie de precieze waarde kunnen opvragen die de parameter heeft gekregen. Dit kan met de **`useParams`** hook. Deze geeft je de URL parameters van de huidige pagina.

```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
import { createBrowserRouter, Link, NavLink, Outlet, useParams } from "react-router";
import { RouterProvider } from "react-router/dom";
import styles from "./App.module.css";
//hide-start
const Root = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>Header</div>
            <div className={styles.nav}>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
            <div className={styles.footer}>Footer</div>
        </div>
    );
}
//hide-end
const Home = () => {
    return (
        <ul>
            <li><Link to="/detail/1">Detail 1</Link></li>
            <li><Link to="/detail/2">Detail 2</Link></li>
            <li><Link to="/detail/3">Detail 3</Link></li>
        </ul>
    );
}

const Detail = () => {
    const { id } = useParams();

    return <div>Detail {id}</div>;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "detail/:id",
                element: <Detail />
            }
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;
```

Er zijn een aantal dingen waar je op moet letten bij `useParams`:

- De waarde van een parameter is **altijd een string**. De URL `/detail/1` geeft dus `"1"` en niet `1`. Heb je een getal nodig, dan moet je het zelf omzetten met `Number(id)`. Controleer daarbij of het resultaat wel een geldig getal is: `/detail/abc` geeft `NaN`.
- Het type van elke parameter is `string | undefined`. Het object dat je terugkrijgt, staat je toe om het even welke key op te vragen. Er treedt dus geen compilatiefout op als je een parameter opvraagt die niet in het pad voorkomt (of als je een typfout maakt in de naam). Je krijgt gewoon `undefined` terug. Je kan de namen van de parameters wel meegeven als type argument, zodat je editor de juiste namen voorstelt:

```typescript
const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id);

    if (Number.isNaN(productId)) {
        return <p>Ongeldig id</p>;
    }
    return <p>Product {productId}</p>;
}
```

Een pad kan ook meerdere parameters bevatten. Met de route `users/:userId/posts/:postId` geeft de URL `/users/5/posts/12` het object `{ userId: "5", postId: "12" }` terug.

### Query parameters

Naast het pad kan een URL ook **query parameters** (ook wel **search parameters** genoemd) bevatten. Dat is het deel na het vraagteken, met `key=value` paren gescheiden door `&`:

```
/products?q=muis&sort=price&order=desc
```

Query parameters maken geen deel uit van het pad. Je hoeft ze dus **niet** op te nemen in de `path` van je route: de route `products` matcht zowel `/products` als `/products?q=muis`.

Wanneer gebruik je nu een URL parameter en wanneer een query parameter?

- Een **URL parameter** gebruik je voor iets dat **bepaalt welke resource** je toont: het id van een product, een gebruikersnaam,... Zonder die waarde heeft de pagina geen betekenis.
- Een **query parameter** gebruik je voor iets dat **optioneel** is en bepaalt **hoe** je de resource toont: een zoekterm, een filter, de sortering, het paginanummer,... De pagina werkt ook zonder.

Om query parameters te lezen en aan te passen gebruik je de **`useSearchParams`** hook. Net zoals `useState` geeft deze hook een array met twee elementen terug: de huidige waarden en een functie om ze aan te passen.

```typescript
const [searchParams, setSearchParams] = useSearchParams();
```

`searchParams` is een [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) object, het standaard object van de browser om query parameters voor te stellen. De belangrijkste methodes zijn:

- `searchParams.get("q")`: geeft de waarde van `q` terug als string, of `null` als de parameter niet in de URL staat.
- `searchParams.has("q")`: geeft aan of de parameter aanwezig is.
- `searchParams.getAll("tag")`: geeft alle waarden terug als een parameter meerdere keren voorkomt (`?tag=a&tag=b`).

Ook hier zijn alle waarden strings. Een paginanummer moet je dus zelf omzetten, en je voorziet best een standaardwaarde voor als de parameter ontbreekt:

```typescript
const page = Number(searchParams.get("page") ?? "1");
```

Met `setSearchParams` pas je de query parameters aan. Dat zorgt voor een navigatie: de URL in de adresbalk verandert en de component wordt opnieuw gerenderd met de nieuwe waarden. Je kan een object meegeven met alle nieuwe parameters:

```typescript
setSearchParams({ q: "react", page: "2" }); // ?q=react&page=2
```

Let op: hiermee vervang je **alle** query parameters. Parameters die niet in het object staan, verdwijnen uit de URL. Wil je één parameter aanpassen en de andere behouden, dan geef je een functie mee. Die krijgt de huidige parameters en geeft de nieuwe terug:

```typescript
setSearchParams((prev) => {
    const next = new URLSearchParams(prev);
    next.set("page", "2");
    return next;
});
```

Net zoals bij een `Link` voegt elke aanroep van `setSearchParams` een nieuwe stap toe aan de geschiedenis van de browser. Wil je de huidige stap vervangen in plaats van een nieuwe toe te voegen, dan geef je als tweede argument `{ replace: true }` mee.

Je kan query parameters natuurlijk ook gewoon in een link zetten:

```typescript
<Link to="/products?sort=price&order=desc">Duurste producten eerst</Link>
```

### De URL als state

In de hoofdstukken over state hebben we gezien dat je met `useState` kan bijhouden wat de gebruiker in een zoekveld getypt heeft of hoe een lijst gesorteerd moet worden. Dat werkt, maar die state verdwijnt zodra de gebruiker de pagina herlaadt. De gebruiker kan ook geen link doorsturen naar "de lijst gefilterd op muis, gesorteerd op prijs".

Als je zulke state in de **query parameters** bewaart, krijg je een aantal voordelen gratis:

- **Herladen** van de pagina behoudt de filters en de sortering.
- De gebruiker kan de URL **delen** of **bookmarken**: wie de link opent, ziet exact hetzelfde.
- De **terug- en vooruitknop** van de browser werken op de filters en de sortering.

In het volgende voorbeeld houden we een zoekterm (`q`), het veld waarop gesorteerd wordt (`sort`) en de sorteervolgorde (`order`) bij in de URL. Probeer in de sandbox maar eens een zoekterm in te geven, de sortering aan te passen en daarna de terugknop van de browser te gebruiken.

```typescript codesandbox={"template": "react-router", "filename": "src/App.tsx"}
import { createBrowserRouter, Link, useSearchParams } from "react-router";
import { RouterProvider } from "react-router/dom";

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Toetsenbord", price: 49.99 },
    { id: 2, name: "Muis", price: 24.99 },
    { id: 3, name: "Monitor", price: 189 },
    { id: 4, name: "Muismat", price: 9.99 },
    { id: 5, name: "Webcam", price: 59.5 },
    { id: 6, name: "Headset", price: 79 }
];

type SortField = "name" | "price";
type SortOrder = "asc" | "desc";

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // De state lezen we rechtstreeks uit de URL
    const search = searchParams.get("q") ?? "";
    const sort: SortField = searchParams.get("sort") === "price" ? "price" : "name";
    const order: SortOrder = searchParams.get("order") === "desc" ? "desc" : "asc";

    const updateParam = (key: string, value: string, defaultValue: string) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            if (value === defaultValue) {
                next.delete(key);
            } else {
                next.set(key, value);
            }
            return next;
        }, { replace: key === "q" });
    };

    const visibleProducts = products
        .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            const result = sort === "name"
                ? a.name.localeCompare(b.name)
                : a.price - b.price;
            return order === "asc" ? result : -result;
        });

    return (
        <div>
            <input
                type="search"
                placeholder="Zoek een product..."
                value={search}
                onChange={(e) => updateParam("q", e.target.value, "")}
            />
            <select value={sort} onChange={(e) => updateParam("sort", e.target.value, "name")}>
                <option value="name">Naam</option>
                <option value="price">Prijs</option>
            </select>
            <select value={order} onChange={(e) => updateParam("order", e.target.value, "asc")}>
                <option value="asc">Oplopend</option>
                <option value="desc">Aflopend</option>
            </select>
            <button onClick={() => setSearchParams({})}>Wis filters</button>

            <ul>
                {visibleProducts.map((product) => (
                    <li key={product.id}>{product.name} (€ {product.price.toFixed(2)})</li>
                ))}
            </ul>

            <p>
                Snelkoppelingen: <Link to="?sort=price">Goedkoopste eerst</Link> | <Link to="?q=muis&sort=price&order=desc">Duurste muisartikelen</Link>
            </p>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductList />
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;
```

Er zijn een aantal belangrijke dingen om op te merken in dit voorbeeld:

- **De URL is de enige bron van waarheid.** Er staat nergens een `useState` voor de zoekterm of de sortering. We lezen de waarden telkens rechtstreeks uit `searchParams`, en het input veld en de select boxes zijn controlled components met die waarden als `value`. Kopieer de waarden uit de URL dus niet naar een aparte `useState` die je dan met een `useEffect` probeert synchroon te houden: dan heb je twee bronnen van waarheid die uit elkaar kunnen lopen.
- **De gefilterde lijst wordt berekend tijdens het renderen.** `visibleProducts` is geen state, maar wordt elke render opnieuw afgeleid uit de producten en de query parameters. Omdat `filter` een nieuwe array teruggeeft, mogen we die daarna met `sort` sorteren zonder de originele array aan te passen.
- **Wantrouw de URL.** De gebruiker kan zelf eender wat in de adresbalk typen, bijvoorbeeld `?sort=banaan`. Daarom controleren we of de waarde geldig is en vallen we anders terug op een standaardwaarde. Zo krijgen `sort` en `order` ook een correct TypeScript type in plaats van `string | null`.
- **Hou de URL proper.** Als een waarde gelijk is aan de standaardwaarde (een lege zoekterm, sorteren op naam, oplopend), verwijderen we de parameter met `delete` in plaats van bijvoorbeeld `?q=&sort=name&order=asc` in de URL te zetten.
- **Behoud de andere parameters.** Omdat we een functie meegeven aan `setSearchParams` en de vorige parameters kopiëren, blijft de sortering behouden als de gebruiker een zoekterm typt, en omgekeerd.
- **Gebruik `replace` tijdens het typen.** Zonder `{ replace: true }` zou elke toetsaanslag een nieuwe stap in de geschiedenis van de browser toevoegen. De gebruiker zou dan per letter op de terugknop moeten drukken. Voor de zoekterm vervangen we daarom de huidige stap. Een andere sortering kiezen voegt wel een nieuwe stap toe, zodat de terugknop de vorige sortering terugbrengt.
- **Links met query parameters.** De snelkoppelingen onderaan zijn gewone `Link` componenten. Omdat de component zijn state uit de URL haalt, toont hij na het klikken meteen de juiste resultaten. Een link als `?sort=price` zonder pad blijft op de huidige pagina en vervangt enkel de query parameters.

### useNavigate

Met de `Link` component navigeert de gebruiker door op een link te klikken. Soms wil je echter vanuit je code naar een andere pagina navigeren, bijvoorbeeld nadat een formulier verstuurd is of nadat de gebruiker zich heeft aangemeld. Daarvoor gebruik je de `useNavigate` hook. Deze geeft een `navigate` functie terug die je kan oproepen met de URL waarnaar je wil navigeren.

```typescript
import { useState } from "react";
import { useNavigate } from "react-router";

const AddProduct = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ... product opslaan
        navigate("/products");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Toevoegen</button>
        </form>
    );
}
```

Gebruik `useNavigate` niet als een gewone `Link` volstaat. Een `Link` is een echte link in de HTML: de gebruiker kan erop rechtsklikken, hem in een nieuw tabblad openen, en schermlezers herkennen hem als link.

Je kan aan `navigate` ook een getal meegeven om door de geschiedenis van de browser te bewegen. `navigate(-1)` doet hetzelfde als de terugknop van de browser, `navigate(1)` hetzelfde als de vooruitknop:

```typescript
<button onClick={() => navigate(-1)}>Terug</button>
```

Als tweede argument kan je opties meegeven. Met `replace: true` vervang je de huidige stap in de geschiedenis in plaats van een nieuwe toe te voegen. Dat is bijvoorbeeld handig na het aanmelden: als de gebruiker daarna op de terugknop drukt, wil je niet dat hij opnieuw op de loginpagina belandt.

```typescript
navigate("/dashboard", { replace: true });
```

### Navigate

Wil je meteen doorverwijzen tijdens het renderen, bijvoorbeeld omdat een pagina verhuisd is, dan gebruik je de `Navigate` component. Zodra deze component gerenderd wordt, navigeert hij naar de opgegeven URL.

```typescript
import { Navigate } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "products", element: <ProductList /> },
            // de oude URL /shop verwijst door naar /products
            { path: "shop", element: <Navigate to="/products" replace /> }
        ]
    }
]);
```

Roep `navigate` nooit rechtstreeks op in de body van een component. Navigeren is een side effect: in een event handler gebruik je `navigate`, en wil je doorverwijzen als gevolg van het renderen, dan gebruik je de `Navigate` component.

## Meer weten

- [React Router documentatie (data mode)](https://reactrouter.com/start/data/installation)
- [Upgraden naar versie 8](https://reactrouter.com/upgrading/v7)
