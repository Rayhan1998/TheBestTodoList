import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <header>
        <h1>Rayhan Todo List </h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
      />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
