import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(
          todos.filter(todo => {
            if (todo.completed == true) {
              return todo;
            }
          })
        );
        break;

      case "uncompleted":
        setFilteredTodos(
          todos.filter(function(todo) {
            if (todo.completed == false) {
              return todo;
            }
          })
        );
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status, todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  console.log(filterdTodos);
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
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filterdTodos={filterdTodos} />
    </>
  );
}

export default App;
