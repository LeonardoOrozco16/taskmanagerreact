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
// -- Components
function AppUI({
  completedTasks,
  totalTasks,
  percentProgress,
  degBarProgress,
  searchValue,
  searchedTask,
  setSearchValue,
  completeTask,
  deleteTask,
}) {
  return (
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
export { AppUI };
