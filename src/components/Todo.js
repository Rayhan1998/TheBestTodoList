import React from "react";

export default function Todo({ todo, todos, setTodos, text }) {
  // Events
  const deleteHandler = id => {
    setTodos(todos.filter(el => el.id !== id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id == todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={() => completeHandler(todo.id)}>
        <i className=" fas fa-check"></i>
      </button>
      <button
        className="complete-btn"
        onClick={() => {
          deleteHandler(todo.id);
        }}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
