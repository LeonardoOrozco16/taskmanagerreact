import "../styles/TaskList.css";
function TaskList(props) {
  return (
    <>
      <section id="task-list--inner">
        <h3>Task List</h3>
        <ul id="task-list">{props.children}</ul>
      </section>
    </>
  );
}
export { TaskList };
