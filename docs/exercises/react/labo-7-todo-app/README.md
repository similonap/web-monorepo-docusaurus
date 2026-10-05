---
sidebar_label: "Todo App"
---

import ExercisePreview from '@site/src/components/ExercisePreview';
import SolutionPreview from './solution/src/App';

import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Todo App

Download het [starterproject](/exercise-files/react/labo-7-todo-app/starter.zip) en voer daarna `npm install` uit.


> 📂 **Naam project:** `lab-communication-todo-app`  
> 🔗 **Basis project:** n/a

We beginnen van een voorgemaakte Todo app. Deze app bevat een lijst van taken die je kan toevoegen en verwijderen. De app bevat ook een input veld waar je een nieuwe taak kan toevoegen. Kopieer deze code in een nieuw project en noem deze `lab-communication-todo-app`.

```typescript codesandbox={"template": "react", "filename": "src/App.tsx"}
import React, {useState} from "react";

interface TodoItem { 
    name: string;
    completed: boolean;
}

const App = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <div>
                <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                <button onClick={() => addTodo(todo)}>Add</button>
            </div>
            <div>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
                        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default App;
```

Herstructureer deze applicatie als volgt:
- Maak drie nieuwe componenten aan in een aparte map `components`:
    - `TodoList` bevat de lijst van taken
    - `TodoItem` bevat een enkele taak
    - `TodoInput` bevat het input veld en de knop om een taak toe te voegen
- Verplaats de logica van de `App` component naar de nieuwe componenten
- De state die de Todo's bevat moet in de `App` component blijven. 
- Je zal dus moeten gebruik maken van `props` om de state door te geven aan de nieuwe componenten. Je zal ook gebruik moeten maken van child-to-parent communicatie om de state te kunnen updaten.
- Zorg dat elk component in een aparte file staat.



## Live voorbeeld

<ExercisePreview component={SolutionPreview} />

### Oplossingsvideo

<YouTubeVideo src='https://youtu.be/RNC2X9D3XbI'/>
