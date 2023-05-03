import React from "react";
import { TodoDisplay } from "./TodoDisplay";

export class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.todos.map((todo) => {
          console.log(todo);
          return (
            <TodoDisplay
              key={todo.id}
              title={todo.title}
              description={todo.description}
              status={todo.status}
              id={todo.id}
              handleEdit={this.props.handleEdit}
              handleDelete={this.props.handleDelete}
            />
          );
        })}
      </>
    );
  }
}

export default TodoContainer;
