import React from "react";

export default function Todo() {
  return (
    <div className="todo">
      <li className="todo-item">Hey</li>
      <button className="complete-btn">
        <i className=" fas fa-check"></i>
      </button>
      <button className="complete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
