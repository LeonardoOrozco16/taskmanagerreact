// -- Structure
import { AppLayout } from "./components/layout/AppLayout";
import { CreateProgressColumn } from "./components/layout/CreateProgressColumn";
import { SearchListColumn } from "./components/layout/SearchListColumn";
// -- Structure
// -- Components
import { CreateTask } from "./components/CreateTask";
import { TaskProgress } from "./components/TaskProgress";
import { TaskSearch } from "./components/TaskSearch";
import { TaskList } from "./components/TaskList";
import { TaskItem } from "./components/TaskItem";
// -- Components

// -- Global Components
import React from "react";
// -- Global Components
//-- Styles
import "./styles/App.css";
// -- Styles

const TasksExample = [
  { description: "Task Example Item 1", completed: true },
  { description: "Task Example Item 2", completed: true },
  { description: "Task Example Item 3", completed: false },
  { description: "Task Example Item 4", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState(" ");
  const [tasks, setTasks] = React.useState(TasksExample);
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
    setTasks(updatedTasks);
  };
  /* Complete Task */
  /* Delete Task */
  const deleteTask = (description) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(
      (task) => task.description === description
    );
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };
  /* Delete Task */
  return (
    //<div className="App">
    //El elemento html que encapsula los componentes puede ser sustituido
    // si se usa React.fragment y para ello se debe importar React from 'react'
    /*<React.Fragment>
      <TaskProgress completed={4} total={10} />
      <TaskSearch />
      <TaskList>
        {
          TasksExample.map(task => (
            <TaskItem
              key={task.description}
              description={task.description}
              completed={task.completed}
            />
          ))
        }
      </TaskList>
      <CreateTaskButton />
    </React.Fragment>*/
    //</div>
    <>
      <AppLayout>
        <CreateProgressColumn>
          <CreateTask />
          <TaskProgress
            completed={completedTasks}
            total={totalTasks}
            percentProgress={percentProgress}
            degBarProgress={degBarProgress}
          />
        </CreateProgressColumn>
        <SearchListColumn>
          <TaskSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TaskList>
            {searchedTask.map((task) => (
              <TaskItem
                key={task.description}
                description={task.description}
                completed={task.completed}
                onComplete={() => {
                  completeTask(task.description);
                }}
                onDelete={() => {
                  deleteTask(task.description);
                }}
              />
            ))}
          </TaskList>
        </SearchListColumn>
      </AppLayout>
    </>
  );
}
export default App;
