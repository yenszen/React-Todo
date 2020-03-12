import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const data = [
  {
    task: "Learn setState()",
    id: Math.floor(Math.random() * 10000) + 1,
    completed: false
  },
  {
    task: "Style my todo list",
    id: Math.floor(Math.random() * 10000) + 1,
    completed: false
  },
  {
    task: "Learn react",
    id: Math.floor(Math.random() * 10000) + 1,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  toggleCompleted = itemId => {
    console.log("ys: App.js: toggleCompleted: itemId: ", itemId);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTask = taskName => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: taskName,
          id: Math.floor(Math.random() * 10000) + 1,
          completed: false
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("ys: App.js: clearCompleted");
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    })
  }

  componentWillMount() {
    localStorage.getItem("todos") && this.setState({
      todos: JSON.parse(localStorage.getItem("todos")),
      isLoading: false
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todos", JSON.stringify(nextState.todos));
    localStorage.setItem("todosDate", Date.now());
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
