import React from "react";
import { v4 as uuidv4 } from "uuid";

import "../CSS/TodoInput.css";

export class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      title: "",
      status: "PENDING",
      id: uuidv4()
    };
  }

  resetState = () => {
    this.setState({
      description: "",
      title: "",
      statues: "PENDING",
      id: uuidv4()
    });
  };

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleStatusChange(e) {
    this.setState({ status: e.target.value });
  }

  handleSave(e) {
    e.preventDefault();
    const payload = {
      description: this.state.description,
      title: this.state.title,
      status: this.state.status,
      id: this.state.id
    };
    this.props.handleSaveClick(payload);
    this.resetState();
  }

  render() {
    return (
      <form>
        <section>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleTitleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleDescriptionChange(e)}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={this.state.value}
              onChange={(e) => this.handleStatusChange(e)}
            >
              <option value="PENDING">Pending</option>
              <option value="ACTIVE">Active</option>
              <option value="DONE">Done</option>
            </select>
          </div>
          <button onClick={(e) => this.handleSave(e)}>Add</button>
        </section>
      </form>
    );
  }
}

export default TodoInput;
