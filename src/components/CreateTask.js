import { CreateTaskButton } from "./CreateTaskButton";
import "../styles/CreateTask.css";

function CreateTask() {
  return (
    <section id="create-task">
      <h3>Create Task</h3>
      <form action="">
        <input
          type="text"
          name="task-description"
          id="task-description"
          placeholder="Hacer el almuerzo"
        />
        <CreateTaskButton />
      </form>
    </section>
  );
}

export { CreateTask };
