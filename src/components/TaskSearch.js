import React from "react";
import "../styles/TaskSearch.css";
function TaskSearch({ searchValue, setSearchValue }) {
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
              let taskToFind = e.target.closest("input").value;
              setSearchValue(taskToFind);
            }}
          />
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
            >
              <path
                fill="black"
                d="m11.271 11.978l3.872 3.873a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.708l-3.565-3.564c2.38-2.747 2.267-6.923-.342-9.532c-2.73-2.73-7.17-2.73-9.898 0s-2.728 7.17 0 9.9a6.96 6.96 0 0 0 4.949 2.05a.5.5 0 0 0 0-1a5.96 5.96 0 0 1-4.242-1.757a6.01 6.01 0 0 1 0-8.486a6.004 6.004 0 0 1 8.484 0a6.01 6.01 0 0 1 0 8.486a.5.5 0 0 0 .034.738"
              />
            </svg>
          </button>
        </form>
        <div className="separator"></div>
      </section>
    </>
  );
}
export { TaskSearch };
