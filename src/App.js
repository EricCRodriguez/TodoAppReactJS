import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

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
    event.preventDefault(); //will stop refresh
    console.log("console", "Im Working!!!");
    setTodos([...todos, input]);
    setInput(""); //clear input after hitting submit
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>

        {/* <button type="submit" onClick={addTodo}>
          Add Todo
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
