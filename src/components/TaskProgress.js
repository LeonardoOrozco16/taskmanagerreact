import "../styles/TaskProgress.css";
function TaskProgress({ total, completed, percentProgress, degBarProgress }) {
  return (
    <section id="tasks-progress">
      <h3>
        {completed} Task Completed from: {total}
      </h3>
      <div
        className="radial-progress"
        style={{
          background: `conic-gradient(var(--title-color) ${degBarProgress}deg, var(--aside_bg) 0deg)`,
        }}
      >
        <div className="progress-caption">
          <span>{percentProgress}%</span>
          <span>Completado</span>
        </div>
      </div>
    </section>
  );
}
export { TaskProgress };
