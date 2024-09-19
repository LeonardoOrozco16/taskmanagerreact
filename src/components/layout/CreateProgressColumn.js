function CreateProgressColumn(props) {
  return (
    <aside id="task-info" className="content-block">
      {props.children}
    </aside>
  );
}
export { CreateProgressColumn };
