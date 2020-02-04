import React from "react";
import "./todo.css";

const Todo = ({ item, handleToggle }) => {
  return (
    <div
      onClick={event => handleToggle(item.id)}
      className={`item${item.completed ? " complete" : ""}`}
    >
      <p>{item.item}</p>
      <p>{item.completed}</p>
    </div>
  );
};

export default Todo;
