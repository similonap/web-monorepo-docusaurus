---
sidebar_label: "Wake up Neo"
---

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Wake up Neo

Download het [starterproject](/exercise-files/react/labo-8-wake-up-neo/starter.zip) en voer daarna `npm install` uit.

> 📂 **Naam project:** `lab-context-wake-up-neo`  
> 🔗 **Basis project:** n/a

Maak een nieuwe React applicatie aan en noem deze `lab-context-wake-up-neo`.

Begin van de volgende code:

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import { useState } from 'react'

interface LineProps {
  text: string
}
const FourthLine = ({text}: LineProps) => <><p>{text}</p></>;
const ThirdLine = ({text}: LineProps) => <><p>Follow the white rabbit.</p><FourthLine text={text}/></>;
const SecondLine = ({text}: LineProps) => <><p>The matrix has you...</p><ThirdLine text={text}/></>;
const FirstLine = ({text}: LineProps) => <><p>Wake Up, Neo...</p><SecondLine text={text}/></>

const App = () => {
  const [text, setText] = useState("Knock, Knock, Neo");
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <div style={{backgroundColor: "black", color: "#4AF626", display: "flex", flexDirection: "column", padding: 20}}> 
        <FirstLine text={text}/>
      </div>
    </>
  )
}

export default App
```

Pas deze helemaal aan zodat je gebruik maakt van Context. 

### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/lde14vFfBZU'/>
