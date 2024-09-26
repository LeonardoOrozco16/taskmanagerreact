import React from "react";
import "./styles/TaskSearch.css";
import { IconComponent } from "../layout/IconComponent";
import { TaskContext } from "../../hooks/taskContext";
function TaskSearch() {
  const { searchValue, setSearchValue } = React.useContext(TaskContext);
  const searchTask = (event) => {
    let taskToFind = event.target.closest("input").value;
    setSearchValue(taskToFind);
  };
  return (
    <>
      <section id="task-search">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            value={searchValue}
            placeholder="Find Task..."
            onChange={(e) => {
              searchTask(e);
            }}
          />
          <button
            type="button"
            aria-label="Search Task"
            onClick={(e) => {
              searchTask(e);
            }}
          >
            <IconComponent type={"search"} />
          </button>
        </form>
        <div className="separator"></div>
      </section>
    </>
  );
}
export { TaskSearch };
