import React from "react";
import { TaskContext } from "../../hooks/taskContext";
import { CreateTaskButton } from "./CreateTaskButton";
import "./styles/CreateTask.css";

function CreateTask() {
  const { createTask } = React.useContext(TaskContext);
  const [newTask, setNewTask] = React.useState("");
  const checkTask = (event) => {
    let taskContent = event.target.value;
    setNewTask(taskContent);
  };
  return (
    <section id="create-task">
      <h3>Create Task</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createTask(newTask);
          setNewTask("");
        }}
      >
        <input
          type="text"
          name="task-description"
          id="task-description"
          placeholder="Hacer el almuerzo"
          value={newTask}
          onChange={(event) => {
            checkTask(event);
          }}
        />
        <CreateTaskButton />
      </form>
    </section>
  );
}

export { CreateTask };
