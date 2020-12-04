import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              id={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
}
