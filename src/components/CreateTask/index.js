import React from "react";
import { TaskContext } from "../../hooks/taskContext";
import { CreateTaskButton } from "./CreateTaskButton";
import "./styles/CreateTask.css";

function CreateTask() {
  const { createTask } = React.useContext(TaskContext);
  const [newTask, setNewTask] = React.useState("");
  const checkTask = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <section id="create-task">
      <h3>Create Task</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createTask(newTask);
        }}
      >
        <input
          type="text"
          name="task-description"
          id="task-description"
          placeholder="Hacer el almuerzo"
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
