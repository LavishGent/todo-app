import React from "react";

export class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.selectedTodo.description,
      title: this.props.selectedTodo.title,
      status: this.props.selectedTodo.status,
      id: this.props.selectedTodo.id
    };
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleStatusChange(e) {
    this.setState({ status: e.target.value });
  }

  handleUpdate(e) {
    e.preventDefault();
    const payload = {
      description: this.state.description,
      title: this.state.title,
      status: this.state.status,
      id: this.state.id
    };
    this.props.editTodo(payload);
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleTitleChange(e)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={(e) => this.handleDescriptionChange(e)}
        />
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
        <button onClick={(e) => this.handleUpdate(e)}>Update</button>
      </form>
    );
  }
}

export default EditComponent;
