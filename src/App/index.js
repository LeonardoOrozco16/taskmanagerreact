// -- Global Components
import React from "react";
// -- Global Components
import { TaskProvider } from "../hooks/taskContext";
import { AppUI } from "./AppUI.js";

//-- Styles
import "./styles/App.css";
// -- Styles

/*const TasksExample = [
  { description: "Task Example Item 1", completed: true },
  { description: "Task Example Item 2", completed: false },
  { description: "Task Example Item 3", completed: false },
  { description: "Task Example Item 4", completed: false },
];*/

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}
export default App;
