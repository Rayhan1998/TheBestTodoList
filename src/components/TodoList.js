import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todos => {
          return <Todo key={todos.id} todo={todos.text} id={todos.id} />;
        })}
      </ul>
    </div>
  );
}
