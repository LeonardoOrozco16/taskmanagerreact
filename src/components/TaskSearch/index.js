import React from "react";
import "./styles/TaskSearch.css";
import { IconComponent } from "../layout/IconComponent";
import { TaskContext } from "../../hooks/taskContext";
function TaskSearch() {
  const { searchValue, setSearchValue } = React.useContext(TaskContext);
  const searchTask = (text) => {
    let taskToFind = text;

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
              searchTask(e.target.value);
            }}
          />
          <span className="input-search--icon">
            <IconComponent type={"search"} />
          </span>
        </form>
        <div className="separator"></div>
      </section>
    </>
  );
}
export { TaskSearch };
