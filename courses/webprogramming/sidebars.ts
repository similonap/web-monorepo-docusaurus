import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Expliciete selectie: nieuwe monorepo-topics verschijnen hier nooit automatisch.
const sidebars: SidebarsConfig = {
  "theorieSidebar": [
    {
      "type": "category",
      "label": "TypeScript",
      "items": [
        {
          "type": "doc",
          "id": "nodejs-+-typescript/wat-is-nodejs",
          "label": "TypeScript en Node.js"
        },
        {
          "type": "doc",
          "id": "nodejs-+-typescript/waarom-typescript",
          "label": "Waarom TypeScript?"
        },
        {
          "type": "doc",
          "id": "nodejs-+-typescript/projectmaken",
          "label": "Nieuw project"
        },
        {
          "type": "doc",
          "id": "nodejs-+-typescript/input-lezen",
          "label": "Input lezen"
        },
        {
          "type": "category",
          "label": "Typesysteem",
          "items": [
            {
              "type": "doc",
              "id": "nodejs-+-typescript/type-systeem/basic-types",
              "label": "Basistypes"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/type-systeem/arrays",
              "label": "Arrays"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/type-systeem/functions",
              "label": "Functies"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/type-systeem/classes",
              "label": "Classes"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/type-systeem/interfaces",
              "label": "Interfaces en JSON"
            }
          ]
        },
        {
          "type": "category",
          "label": "Arraymethodes",
          "items": [
            {
              "type": "doc",
              "id": "nodejs-+-typescript/array-functions/index",
              "label": "Overzicht"
            },
            {
              "type": "category",
              "label": "Basismethodes",
              "collapsed": false,
              "items": [
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/push-pop",
                  "label": "push() en pop()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/shift-unshift",
                  "label": "shift() en unshift()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/slice-splice",
                  "label": "slice() en splice()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/indexof-includes",
                  "label": "indexOf() en includes()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/concat-join-reverse",
                  "label": "concat(), join(), reverse()"
                }
              ]
            },
            {
              "type": "category",
              "label": "Met een callback",
              "collapsed": false,
              "items": [
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/foreach",
                  "label": "forEach()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/find",
                  "label": "find() en findIndex()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/filter",
                  "label": "filter()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/map",
                  "label": "map()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/reduce",
                  "label": "reduce()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/every-some",
                  "label": "every() en some()"
                },
                {
                  "type": "doc",
                  "id": "nodejs-+-typescript/array-functions/sort",
                  "label": "sort()"
                }
              ]
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/array-functions/chaining",
              "label": "Chaining"
            }
          ]
        },
        {
          "type": "doc",
          "id": "nodejs-+-typescript/exceptions",
          "label": "Exceptions"
        },
        {
          "type": "category",
          "label": "Modules en npm",
          "items": [
            {
              "type": "doc",
              "id": "nodejs-+-typescript/modules-npm/modules",
              "label": "Modules"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/modules-npm/npm-packages",
              "label": "npm-packages"
            }
          ]
        },
        {
          "type": "category",
          "label": "Asynchroon programmeren",
          "items": [
            {
              "type": "doc",
              "id": "nodejs-+-typescript/asynchroon-programmeren/index",
              "label": "Inleiding"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/asynchroon-programmeren/promises",
              "label": "Promises"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/asynchroon-programmeren/async-await",
              "label": "Async/await"
            },
            {
              "type": "doc",
              "id": "nodejs-+-typescript/asynchroon-programmeren/fetch",
              "label": "Fetch"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Frontend",
      "items": [
        {
          "type": "doc",
          "id": "frontend/index",
          "label": "Inleiding"
        },
        {
          "type": "doc",
          "id": "frontend/dom-manipulatie",
          "label": "DOM-manipulatie"
        },
        {
          "type": "doc",
          "id": "frontend/vite",
          "label": "Vite"
        },
        {
          "type": "doc",
          "id": "frontend/deployment-met-surge",
          "label": "Deployment met Surge"
        }
      ]
    },
    {
      "type": "category",
      "label": "Backend",
      "items": [
        {
          "type": "category",
          "label": "Express.js",
          "items": [
            {
              "type": "doc",
              "id": "express.js/wat-is-een-backend-framework",
              "label": "Wat is Express.js?"
            },
            {
              "type": "doc",
              "id": "express.js/basis",
              "label": "Basis"
            },
            {
              "type": "doc",
              "id": "express.js/node-watch",
              "label": "node --watch"
            },
            {
              "type": "doc",
              "id": "express.js/statische-bestanden",
              "label": "Statische bestanden"
            },
            {
              "type": "category",
              "label": "Requests",
              "items": [
                {
                  "type": "doc",
                  "id": "express.js/requests/index",
                  "label": "Requests"
                },
                {
                  "type": "doc",
                  "id": "express.js/requests/get-request",
                  "label": "GET-request"
                },
                {
                  "type": "doc",
                  "id": "express.js/requests/post-request",
                  "label": "POST-request"
                },
                {
                  "type": "doc",
                  "id": "express.js/requests/multi-part-form-data",
                  "label": "Multipart form data"
                }
              ]
            },
            {
              "type": "doc",
              "id": "express.js/response",
              "label": "Response"
            },
            {
              "type": "doc",
              "id": "express.js/router",
              "label": "Router"
            }
          ]
        },
        {
          "type": "doc",
          "id": "mysql/nodejs",
          "label": "MySQL in Node.js"
        },
        {
          "type": "doc",
          "id": "express.js/deployment",
          "label": "Deployment"
        }
      ]
    },
    {
      "type": "category",
      "label": "Full Stack",
      "items": [
        {
          "type": "doc",
          "id": "mysql/gebruik-in-express",
          "label": "MySQL in Express.js"
        },
        {
          "type": "doc",
          "id": "mysql/crud-api",
          "label": "API-endpoints met MySQL"
        },
        {
          "type": "doc",
          "id": "full-stack/vite-planeten",
          "label": "Van form naar database"
        },
        {
          "type": "doc",
          "id": "full-stack/cors",
          "label": "CORS"
        }
      ]
    }
  ],
  "labosSidebar": [
    {
      "type": "category",
      "label": "1. TypeScript: basis",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/hello-name/README",
          "label": "Hello Name"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/bmi-calculator/README",
          "label": "BMI Calculator"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/interest-calculator/README",
          "label": "Interest Calculator"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/uren-en-minuten/README",
          "label": "Uren en Minuten"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/wisselgeld/README",
          "label": "Wisselgeld"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/name-from-email/README",
          "label": "Name from Email"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/text-box/README",
          "label": "Text Box"
        }
      ]
    },
    {
      "type": "category",
      "label": "2. TypeScript: arrays en functies",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/som-van-getallen/README",
          "label": "Som van getallen"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/math-fun/README",
          "label": "Math Fun"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/array-sum/README",
          "label": "Array Sum"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/puntenboek/README",
          "label": "Puntenboek"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/rot13/README",
          "label": "Rot13"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/pokemon-team/README",
          "label": "Pokemon Team"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/todo-list-string/README",
          "label": "Todo List String"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/tic-tac-toe/README",
          "label": "Tick Tac Toe"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/bmi-calculator-multi/README",
          "label": "BMI Calculator Multi"
        }
      ]
    },
    {
      "type": "category",
      "label": "3. TypeScript: interfaces en classes",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/recepten/README",
          "label": "Recepten"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/transportmiddelen/README",
          "label": "Transportmiddelen"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/movies-objects/README",
          "label": "Movies"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/filter-numbers/README",
          "label": "Filter Numbers"
        }
      ]
    },
    {
      "type": "category",
      "label": "4. TypeScript: arraymethodes",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/boodschappenlijst/README",
          "label": "Boodschappenlijst"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/getallen/README",
          "label": "Getallen"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/studentenlijst/README",
          "label": "Studentenlijst"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/winkelmandje/README",
          "label": "Winkelmandje"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/sorteren/README",
          "label": "Sorteren"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/filmlijst/README",
          "label": "Filmlijst"
        }
      ]
    },
    {
      "type": "category",
      "label": "5. TypeScript: async en fetch",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/fake-fetch/README",
          "label": "Fake Fetch"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/promise-all/README",
          "label": "Promise All"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/slow-sum/README",
          "label": "Slow Sum"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/cocktails-promise-all/README",
          "label": "Cocktails Promise All"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/bitcoin-api/README",
          "label": "Bitcoin API"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/joke-api/README",
          "label": "Joke API"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/school-api/README",
          "label": "School API"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/cocktails-api/README",
          "label": "Cocktails API"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/unix-timestamp-api/README",
          "label": "Unix Timestamp API"
        }
      ]
    },
    {
      "type": "category",
      "label": "6. TypeScript: modules en npm",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/math-module/README",
          "label": "Math Module"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/export-interfaces/README",
          "label": "Export Interfaces"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/cowsay-module/README",
          "label": "Cowsay Module"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/cat-gpt/README",
          "label": "Cat GPT"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/rainbow-chalk/README",
          "label": "Rainbow Chalk"
        }
      ]
    },
    {
      "type": "category",
      "label": "7. Frontend: Vite en DOM",
      "items": [
        {
          "type": "doc",
          "id": "exercises/frontend/verander-achtergrond/README",
          "label": "Verander achtergrond"
        },
        {
          "type": "doc",
          "id": "exercises/frontend/verander-tekst/README",
          "label": "Verander tekst"
        },
        {
          "type": "doc",
          "id": "exercises/frontend/verander-divs/README",
          "label": "Verander divs"
        },
        {
          "type": "doc",
          "id": "exercises/frontend/verander-kleuren/README",
          "label": "Verander kleuren"
        },
        {
          "type": "doc",
          "id": "exercises/frontend/verander-kleuren-random/README",
          "label": "Verander kleuren random"
        }
      ]
    },
    {
      "type": "category",
      "label": "8. Frontend: API’s en DOM",
      "items": [
        {
          "type": "doc",
          "id": "exercises/frontend/cocktail-api-met-vite/README",
          "label": "Cocktail API met Vite"
        },
        {
          "type": "doc",
          "id": "exercises/frontend/weather-api/README",
          "label": "Weather API"
        },
        {
          "type": "doc",
          "id": "exercises/frontend/uitvinders/README",
          "label": "Uitvinders"
        },
        {
          "type": "doc",
          "id": "exercises/frontend/rick-and-morty/README",
          "label": "Rick and Morty"
        }
      ]
    },
    {
      "type": "category",
      "label": "9. Backend: Express en requests",
      "items": [
        {
          "type": "doc",
          "id": "exercises/express/hello-express/README",
          "label": "Hello Express"
        },
        {
          "type": "doc",
          "id": "exercises/express/dadjoke-express/README",
          "label": "DadJoke Express"
        },
        {
          "type": "doc",
          "id": "exercises/express/math-service-express/README",
          "label": "Math Service"
        },
        {
          "type": "doc",
          "id": "exercises/express/reiskosten-server/README",
          "label": "Reiskosten server"
        }
      ]
    },
    {
      "type": "category",
      "label": "10. Backend: MySQL en routing",
      "items": [
        {
          "type": "doc",
          "id": "exercises/mysql/reiskosten-server/README",
          "label": "Reiskosten server"
        },
        {
          "type": "doc",
          "id": "exercises/mysql/taken-server/README",
          "label": "Taken server"
        },
        {
          "type": "doc",
          "id": "exercises/mysql/taken-server-met-prioriteit/README",
          "label": "Taken server met prioriteit"
        }
      ]
    },
    {
      "type": "category",
      "label": "11. Full Stack: forms, Express en MySQL",
      "items": [
        {
          "type": "doc",
          "id": "exercises/full-stack/reiskosten-app/README",
          "label": "Reiskosten app"
        },
        {
          "type": "doc",
          "id": "exercises/full-stack/taken-app/README",
          "label": "Taken app"
        },
        {
          "type": "doc",
          "id": "exercises/full-stack/pokemon-app/README",
          "label": "Pokémon app"
        }
      ]
    },
    {
      "type": "category",
      "label": "12. Full Stack: extra en datums",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/pokemon-array/README",
          "label": "Pokémon array"
        },
        {
          "type": "doc",
          "id": "exercises/full-stack/pokemon-app-bis/README",
          "label": "Full-Stack: Pokémon app (bis)"
        },
        {
          "type": "doc",
          "id": "exercises/full-stack/pizza-builder/README",
          "label": "Full-Stack: Pizza Builder"
        }
      ]
    },
    {
      "type": "category",
      "label": "Extra oefeningen",
      "items": [
        {
          "type": "doc",
          "id": "exercises/node-typescript/dna-match/README",
          "label": "DNA Match"
        },
        {
          "type": "doc",
          "id": "exercises/express/viewcounter/README",
          "label": "View Counter"
        },
        {
          "type": "doc",
          "id": "exercises/node-typescript/short-notation/README",
          "label": "Short Notation"
        }
      ]
    }
  ]
};

export default sidebars;
