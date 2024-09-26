import React from "react";
import { TaskContext } from "../../hooks/taskContext";
import "./styles/TaskProgress.css";
function TaskProgress() {
  const {
    totalTasks: total,
    completedTasks: completed,
    loading,
    error,
    progress,
  } = React.useContext(TaskContext);

  return (
    <section id="tasks-progress">
      <h3>
        {loading && <p>Esperando la carga de tareas...</p>}
        {!loading && !error && (
          <p>
            {completed} Task Completed from: {total}
          </p>
        )}
      </h3>
      <div
        className="radial-progress"
        style={{
          background: `conic-gradient(var(--title-color) ${
            progress * 3.6
          }deg, var(--aside_bg) 0deg)`,
        }}
      >
        <div className="progress-caption">
          <span>{progress}%</span>
          <span>Completado</span>
        </div>
      </div>
    </section>
  );
}
export { TaskProgress };
