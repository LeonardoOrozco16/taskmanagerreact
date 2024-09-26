import React from "react";
// -- Structure
import { AppLayout } from "../components/layout/AppLayout";
import { CreateProgressColumn } from "../components/layout/CreateProgressColumn";
import { SearchListColumn } from "../components/layout/SearchListColumn";
// -- Structure
// -- Components
import { CreateTask } from "../components/CreateTask";
import { TaskProgress } from "../components/TaskProgress";
import { TaskSearch } from "../components/TaskSearch";
import { TaskList } from "../components/TaskList";
import { TaskItem } from "../components/TaskItem";
import { Modal } from "../components/Modal";
// -- Components

//-- Context
import { TaskContext } from "../hooks/taskContext";
//-- Context
function AppUI() {
  const {
    loading,
    error,
    searchedTask,
    completeTask,
    deleteTask,
    openModal,
    totalTasks,
  } = React.useContext(TaskContext);
  return (
    <>
      <AppLayout>
        <CreateProgressColumn>
          <CreateTask />
          <TaskProgress />
        </CreateProgressColumn>
        <SearchListColumn>
          <TaskSearch />
          <TaskList>
            {loading && <p>Cargando Tareas...</p>}
            {error && <p>Ocurrio un error, intente de nuevo mas tarde </p>}
            {!loading && totalTasks === 0 && <p>Agrega tu primera tarea.</p>}
            {!loading && searchedTask.length === 0 && (
              <p>No se encontro ninguna tarea.</p>
            )}
            {searchedTask.map((task) => (
              <TaskItem
                key={task.content}
                content={task.content}
                completed={task.completed}
                onComplete={() => {
                  completeTask(task.content);
                }}
                onDelete={() => {
                  deleteTask(task.content);
                }}
              />
            ))}
          </TaskList>
        </SearchListColumn>
      </AppLayout>
      {openModal && <Modal>{<p>Ejemplo para portals</p>}</Modal>}
    </>
  );
}
export { AppUI };
// El modal solo debe verse si se cambia el estado manualmente en el contexto
