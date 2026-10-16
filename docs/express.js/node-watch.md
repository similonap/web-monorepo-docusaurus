# node --watch

Tijdens het ontwikkelen van een Express-applicatie pas je voortdurend bestanden aan. Zonder hulp moet je de server na elke wijziging zelf stoppen (`CTRL+C`) en opnieuw starten. Node.js heeft daarvoor een ingebouwde optie: `--watch`. Daarmee herstart Node de server automatisch wanneer je een bestand opslaat. Je hoeft hiervoor niets extra te installeren.

## Gebruik via scripts (voorkeur)

Voeg in je `package.json` een `start`-script toe dat `node --watch` gebruikt:

```json title="package.json"
"scripts": {
    "typecheck": "tsc --noEmit",
    "start": "npm run typecheck && node --watch index.ts"
}
```

In dit voorbeeld wordt ervan uitgegaan dat de server file `index.ts` heet. Vervang dit door de naam van jouw server file. Het script controleert eerst de types met `tsc` en start daarna de server in watch mode. Je start de server met:

```bash
npm start
```

Node houdt `index.ts` en alle bestanden die het (rechtstreeks of onrechtstreeks) importeert in de gaten, ook geïmporteerde `.json`-bestanden. Sla je een van die bestanden op, dan wordt de server automatisch herstart.

:::info
De typecheck gebeurt enkel bij het opstarten. Typefouten die je later maakt zie je in je editor of met `npm run typecheck`. Node zelf voert TypeScript-code uit zonder de types te controleren.
:::

## Rechtstreeks in de terminal

Je kan `--watch` ook gewoon in de terminal gebruiken:

```bash
node --watch index.ts
```

## Extra mappen in de gaten houden

Standaard herstart Node enkel bij wijzigingen in bestanden die geïmporteerd worden. Wil je dat de server ook herstart wanneer andere bestanden veranderen (bv. een `.env`-bestand of een map met data), dan geef je die op met `--watch-path`:

```bash
node --watch-path=./src --watch-path=./data index.ts
```

Gebruik je `--watch-path`, dan worden enkel die paden in de gaten gehouden.

:::tip
EJS-templates in de map `views` hoeven niet in de gaten gehouden te worden: Express leest die bij elke request opnieuw in (zolang view caching uit staat tijdens het ontwikkelen). Een refresh in de browser volstaat.
:::
