# Dekking van Webprogramming

Vergeleken op 17 september 2026 met de inhoudsopgave en theoriepagina’s van [BA Web Programming](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs). Bronversie van de monorepo bij de controle: `e4d01aa65cdae5b471a95f085f8eebe94125f30a`.

Dit is een beheerdocument, geen gepubliceerde cursuspagina. De cursus blijft volledig samengesteld uit de monorepo.

## Selectie

| GitBook-onderdeel | Geselecteerde monorepo-inhoud |
| --- | --- |
| TypeScript en Node.js, waarom TypeScript | `nodejs-+-typescript/wat-is-nodejs`, `waarom-typescript` |
| Nieuw project, input lezen | `nodejs-+-typescript/projectmaken`, `input-lezen` |
| Typesysteem: basistypes, arrays, functies, classes, interfaces | De overeenkomstige pagina’s onder `nodejs-+-typescript/type-systeem` |
| Arraymethodes | Alle pagina’s onder `array-functions`: overzicht, `push/pop`, `shift/unshift`, `slice/splice`, `indexOf/lastIndexOf/includes`, `concat/join/reverse`, `forEach`, `find/findIndex`, `filter`, `map`, `reduce`, `every/some`, `sort` en chaining |
| Exceptions | `nodejs-+-typescript/exceptions` |
| Modules en npm | `modules-npm/modules`, `modules-npm/npm-packages` |
| Asynchroon programmeren, promises, async/await, fetch | De overeenkomstige pagina’s onder `asynchroon-programmeren` |
| JSON | Gedeeltelijk via interfaces en het inlezen van een JSON-bestand |
| Frontend, DOM, Vite, Surge | De vier pagina’s onder `frontend` |
| Express, basis, nodemon, statische bestanden | De overeenkomstige pagina’s onder `express.js`; nodemon is vervangen door `express.js/node-watch` |
| Requests, GET, POST, multipart, response, router | De overeenkomstige pagina’s onder `express.js` |
| MySQL | `mysql/nodejs` |
| Backend deployment | `express.js/deployment` (Render) |
| Full Stack: form naar database, CORS | `full-stack/vite-planeten`, `full-stack/cors`, ondersteund door `mysql/gebruik-in-express` en de passende API-endpoints uit `mysql/crud-api` |
| Labo’s en extra oefeningen | 59 oefenpagina’s uit de bron, na uitsluiting van de 10 EJS-gerelateerde oefeningen, expliciet opgenomen in `sidebars.ts`; koppeling per oefening in `config/exercise-sources.json` |

De volgorde van de hoofddelen en oefeningen volgt de bron. De lege GitBook-rubriek **6. TS: Herhaling** krijgt geen lege pagina. Bij Full Stack staan de serveronderdelen vóór het formulier, zodat de gebruikte API eerst beschikbaar is. Het algemene Webontwikkeling-project, de introductie met MongoDB/security en de bestaande bredere labo-overzichten worden niet meegenomen.

## Ontbrekend of gedeeltelijk aanwezig

| Onderdeel uit GitBook | Hiaat in de monorepo |
| --- | --- |
| [Wat is een tsconfig.json?](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/wat-is-een-tsconfig-json) | `tsc --init` en configuratievoorbeelden zijn aanwezig, maar geen afzonderlijke systematische uitleg van `target`, `module`, `strict`, `outDir`, `rootDir`, `include` en `exclude`. |
| [Conditionele blok](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/conditionele-blok) | Geen eigen theoriehoofdstuk over `if/else`, `switch/case` en logische operatoren. Deze constructies komen wel in voorbeelden voor. |
| [Loops](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/loops) | Geen eigen theoriehoofdstuk over `for`, `for...of`, `while`, `do...while` en oneindige lussen. |
| [Datum](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/type-systeem/datum) | Geen theoriehoofdstuk over `Date`, epoch, getters/setters en rekenen met datums. De timestamp- en Pokémon-array-oefeningen zijn wel opgenomen. |
| [Nieuw project](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/projectmaken) | De bron heeft een update over TSX. De gedeelde projectinstructies gebruiken nog `ts-node` en bevatten die installatie/update niet. |
| [Fetch](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/asynchroon-programmeren/fetch) | Het theorievoorbeeld met paging en het onderdeel over de structuur van fetch-code ontbreken. Paging wordt wel toegepast in de Pokémon-oefening. |
| [JSON](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/asynchroon-programmeren/json) | Interfaces en JSON importeren zijn aanwezig. De aparte inleiding over JSON, keys/values en JSON-objecten tegenover JSON-arrays ontbreekt. |
| [Interface](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/type-systeem/interfaces) | De expliciete uitleg over een class die een interface implementeert ontbreekt. |
| [Modules](https://apwt.gitbook.io/ba-web-programming-v24/cursus/wat-is-nodejs/modules) | De aparte uitleg over classes exporteren en SemVer ontbreekt. Classes worden wel geëxporteerd in de oefenoplossingen. |

Deze hiaten zijn niet opgevuld met alternatieve onderwerpen. Nieuw lesmateriaal hoort eerst in de monorepo en kan daarna aan deze selectie toegevoegd worden.

## Bewust buiten de selectie

Geen aparte hoofdstukken voor tooling/Git/bash/devcontainers, EJS, algemene middleware, Express-tests, MongoDB, security, cookies/sessies/tokens, projecten of presentaties. Geen oefeningen die niet in de bron staan.

Enkele gedeelde pagina’s bevatten extra secties. `config/content.ts` verwijdert voor deze cursus `create-clean-node`, het afzonderlijke `unknown`-onderdeel, Record-types, de afzonderlijke `as`-uitleg, de bijhorende brede quizzen, fetch-tests en mocking, en de PATCH-uitbreiding van de planeten-API. GET, POST en DELETE blijven behouden: die worden ook in de bronopgaven gebruikt. De eerder gevraagde TypeScript-access modifiers en de werkwijze met `database.ts`, `connect()` en `exit()` blijven behouden.

EJS-code in de theorie over requests blijft staan. Op verzoek zijn op 20 september 2026 deze EJS-gerelateerde labo’s verwijderd uit de selectie: Hello Query, Newspaper Route, Newspaper Search, Steam, Pet Shelter, Redirect Form, Contact Form, Router Combi, Twitter en Word Guess. De daardoor lege rubriek 12. Herhaling is ook verwijderd.

Hello Express, DadJoke en Math Service blijven behouden: deze opdrachten vereisen geen EJS. Math Service heeft wel een ongebruikte EJS-dependency in de gedeelde oplossing, maar de opdracht en code gebruiken uitsluitend JSON-responses.
