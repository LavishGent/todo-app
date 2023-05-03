import EditComponent from "./EditComponent";

export const TodoDisplay = (props) => {
  const { toggleEdit, handleDelete, selectedTodo, editTodo, ...restProps } =
    props;
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.status}</p>
      <button onClick={() => toggleEdit(restProps)}>Edit</button>
      <button onClick={() => handleDelete(restProps)}>Delete</button>
      {selectedTodo?.id === restProps.id && (
        <EditComponent selectedTodo={selectedTodo} editTodo={editTodo} />
      )}
    </>
  );
};
