import React from "react";
import TodoInput from "./components/TodoInput";
import TodoContainer from "./components/TodoContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "First Todo Item",
          description: "just a description for sample purposes",
          status: "PENDING"
        }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todoObj) {
    const newTodo = JSON.parse(JSON.stringify(this.state.todos));
    newTodo.push(todoObj);
    return this.setState({
      todos: newTodo
    });
  }

  editTodo() {}

  deleteTodo() {}

  render() {
    return (
      <>
        <TodoInput
          todos={this.state.todos}
          todoAmount={this.state.todos.length}
          handleSaveClick={this.addTodo}
        />
        <TodoContainer
          todos={this.state.todos}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
