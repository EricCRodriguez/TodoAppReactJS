import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    " Walk the puppies",
    "Feed the puppies",
    "dont forget to fast at 6pm",
  ]);
  const [input, setInput] = useState("");
  console.log("console", input);

  const addTodo = (event) => {
    //this will fire off when we click the button
    console.log("console", "Im Working!!!");
    setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <h1>Yo</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
