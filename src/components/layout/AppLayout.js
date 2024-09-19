function AppLayout(props) {
  return (
    <section id="task-manager">
      <header>
        <h2>Task Manager</h2>
      </header>
      <main id="task-manager-inner">{props.children}</main>
    </section>
  );
}
export { AppLayout };
