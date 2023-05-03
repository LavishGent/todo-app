export const TodoDisplay = (props) => {
  console.log(props, "todoDisplay");
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.status}</p>
      <button onClick={() => console.log("Editing")}>Edit</button>
      <button onClick={() => console.log("Deleting")}>Delete</button>
    </>
  );
};
