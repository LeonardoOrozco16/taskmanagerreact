import { AppUI } from "./AppUI.js";
// -- Global Components
import React from "react";
// -- Global Components
// -- Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";
// -- Hooks
//-- Styles
import "./styles/App.css";
// -- Styles

const TasksExample = [
  { description: "Task Example Item 1", completed: true },
  { description: "Task Example Item 2", completed: false },
  { description: "Task Example Item 3", completed: false },
  { description: "Task Example Item 4", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState(" ");
  /* Using Custom Hook */
  const [tasks, saveTasks] = useLocalStorage(
    "REACT_TASKS_V1",
    JSON.stringify(TasksExample)
  );
  /* Using Custom Hook */
  /* Progress Tasks States*/
  let completedTasks = tasks.filter((task) => !!task.completed).length;
  let totalTasks = tasks.length;
  let percentProgress =
    completedTasks === 0 ? 0 : Math.round((completedTasks * 100) / totalTasks);
  let degBarProgress = percentProgress * 3.6;
  /* Progress Tasks States*/
  /* Search Tasks */
  const searchedTask = tasks.filter((task) => {
    const taskDescription = task.description.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskDescription.includes(searchText);
  });
  /* Search Task */
  /* Complete Task */
  const completeTask = (description) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(
      (task) => task.description === description
    );
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
    saveTasks(updatedTasks);
  };
  /* Complete Task */
  /* Delete Task */
  const deleteTask = (description) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(
      (task) => task.description === description
    );
    updatedTasks.splice(taskIndex, 1);
    saveTasks(updatedTasks);
  };
  /* Delete Task */

  return (
    <AppUI
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      percentProgress={percentProgress}
      degBarProgress={degBarProgress}
      searchValue={searchValue}
      searchedTask={searchedTask}
      setSearchValue={setSearchValue}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  );
}
export default App;
