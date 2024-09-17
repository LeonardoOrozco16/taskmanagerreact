import { TaskProgress } from './components/TaskProgress';
import { TaskSearch } from './components/TaskSearch';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { CreateTaskButton } from './components/CreateTaskButton';
import React from 'react';
import './styles/App.css';
const TasksExample = [
  { description: "Task Example Item 1", completed: false },
  { description: "Task Example Item 2", completed: true },
  { description: "Task Example Item 3", completed: false },
  { description: "Task Example Item 4", completed: false },
  { description: "Task Example Item 5", completed: true },
];
function App() {
  return (
    //<div className="App">
    //El elemento html que encapsula los componentes puede ser sustituido
    // si se usa React.fragment y para ello se debe importar React from 'react'
    <React.Fragment>
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
    </React.Fragment>
    //</div>
  );
}
export default App;
