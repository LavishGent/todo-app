import React from "react";
import { TodoDisplay } from "./TodoDisplay";

export class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "40vw"
        }}
      >
        {this.props.todos.map((todo, i) => {
          return (
            <TodoDisplay
              key={i}
              title={todo.title}
              description={todo.description}
              status={todo.status}
              id={todo.id}
              toggleEdit={this.props.toggleEdit}
              editTodo={this.props.editTodo}
              handleDelete={this.props.handleDelete}
              selectedTodo={this.props.selectedTodo}
            />
          );
        })}
      </section>
    );
  }
}

export default TodoContainer;
