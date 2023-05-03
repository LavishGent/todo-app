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
      ],
      selectedTodo: null
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(todoObj) {
    const newTodo = JSON.parse(JSON.stringify(this.state.todos));
    newTodo.push(todoObj);
    return this.setState({
      todos: newTodo
    });
  }

  toggleEdit(todoItem) {
    this.setState({
      selectedTodo: todoItem
    });
  }

  editTodo(todoItem) {
    console.log("todoItem in editTodo", todoItem);
    const newTodo = JSON.parse(JSON.stringify(this.state.todos)).map((todo) => {
      if (todo.id === todoItem.id) {
        return todoItem;
      }
      return todo;
    });
    return this.setState({
      todos: newTodo,
      selectedTodo: null
    });
  }

  deleteTodo(todoItem) {
    const newTodo = JSON.parse(JSON.stringify(this.state.todos)).filter(
      (todo) => todo.id !== todoItem.id
    );
    return this.setState({
      todos: newTodo,
      selectedTodo: null
    });
  }

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
          toggleEdit={this.toggleEdit}
          handleDelete={this.deleteTodo}
          selectedTodo={this.state.selectedTodo}
          editTodo={this.editTodo}
        />
      </>
    );
  }
}

export default App;
