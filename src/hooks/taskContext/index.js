import React from "react";
// -- Hooks
import { useLocalStorage } from "../useLocalStorage";
import { useTaskProgress } from "../useTaskProgress";
// -- Hooks
const TaskContext = React.createContext();

function TaskProvider({ children }) {
  const [searchValue, setSearchValue] = React.useState("");
  /* Using Custom Hook */
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("REACT_TASKS_V1", []);
  /* Using Custom Hook */

  /* Search Tasks */
  const searchedTask = tasks.filter((task) => {
    const taskDescription = task.content.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskDescription.includes(searchText);
  });
  /* Search Task */
  /* Add Task */

  const createTask = (description) => {
    description.toLowerCase();
    const newTasks = [...tasks];
    newTasks.push({ content: description, completed: false });
    saveTasks(newTasks);
  };
  /* Add Task */
  /* Complete Task */
  const completeTask = (description) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(
      (task) => task.content === description
    );
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
    saveTasks(updatedTasks);
  };
  /* Complete Task */
  /* Delete Task */
  const deleteTask = (description) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(
      (task) => task.content === description
    );
    updatedTasks.splice(taskIndex, 1);
    saveTasks(updatedTasks);
  };
  /* Delete Task */
  /* Progress Tasks States*/
  const { completedTasks, totalTasks, progress } = useTaskProgress(tasks);
  /* Progress Tasks States*/
  /*Portals EXample*/
  const [openModal, setOpenModal] = React.useState(false);
  /* Portals Example */
  return (
    <TaskContext.Provider
      value={{
        loading,
        error,
        completedTasks,
        totalTasks,
        searchValue,
        searchedTask,
        setSearchValue,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
        createTask,
        progress,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
