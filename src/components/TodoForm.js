import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }

  handleChange = event => {
    this.setState({
      taskName: event.target.value
    });
  };

  handleAddTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.taskName);
    // clears input field after submission
    this.setState({
      taskName: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleAddTask}>
        <input type="text" name="task" value={this.state.taskName} onChange={this.handleChange} />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
