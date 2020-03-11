import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo${props.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.task.id)}
    >
      <h3>{props.task}</h3>
    </div>
  );
};

export default Todo;
