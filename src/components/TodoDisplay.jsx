import EditComponent from "./EditComponent";

const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between"
  },
  actions: {
    display: "flex",
    alignItems: "center"
  }
};

export const TodoDisplay = (props) => {
  const { toggleEdit, handleDelete, selectedTodo, editTodo, ...restProps } =
    props;
  return (
    <div
      style={{ border: "2px solid black", marginTop: "1rem", padding: "5%" }}
    >
      <article style={styles.main}>
        <section>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>{props.status}</p>
        </section>
        <section style={styles.actions}>
          <button onClick={() => toggleEdit(restProps)}>Edit</button>
          <button onClick={() => handleDelete(restProps)}>Delete</button>
        </section>
      </article>
      {selectedTodo?.id === restProps.id && (
        <EditComponent selectedTodo={selectedTodo} editTodo={editTodo} />
      )}
    </div>
  );
};
