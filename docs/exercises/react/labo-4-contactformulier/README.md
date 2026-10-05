---
sidebar_label: "Contactformulier"
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Contactformulier

Download het [starterproject](/exercise-files/react/labo-4-contactformulier/starter.zip) en voer daarna `npm install` uit.

Wanneer je klaar bent, kan je jouw uitwerking vergelijken met de [voorbeeldoplossing](/exercise-files/react/labo-4-contactformulier/solution.zip).

> 📂 **Naam project:** `lab-state-contact-form`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-state-contact-form`.

Maak een component `ContactForm` aan met de volgende functionaliteit:
- Het component bevat 3 `input` elementen met de volgende labels:
    - First name
    - Last name
    - Email
- Het component bevat een `textarea` met de label `Message`.
- Het component bevat een `button` met de tekst `Send`.
- Als je op de knop klikt, wordt de volgende tekst getoond: `Thanks {firstName} {lastName}! We will contact you at {email}.`
- De velden worden leeggemaakt na het versturen van het formulier.
- Zorg dat de button disabled is als de velden niet allemaal ingevuld zijn.
- Je hebt hier 5 states nodig:
    - `firstName` (bevat de waarde van het `input` element firstName)
    - `lastName` (bevat de waarde van het `input` element lastName)
    - `email` (bevat de waarde van het `input` element email)
    - `message` (bevat de waarde van het `textarea` element)
    - `confirmationText` (bevat de text die getoond wordt na het versturen van het formulier)

Gebruik deze component in de `App` component om de volgende pagina te maken:


#### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/og0BReQkfz8'/>
