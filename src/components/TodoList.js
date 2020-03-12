// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

// why is TodoList a function and not a class component?
const TodoList = props => {
  return (
    <div className="todos-list">
      {props.todos.map(
        item => (
          console.log("ys: TodoList.js: Todo ", item),
          (
            <Todo
              key={item.id}
              task={item.task}
              completed={item.completed}
              id={item.id}
              toggleCompleted={props.toggleCompleted}
            />
          )
        )
      )}
      <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
