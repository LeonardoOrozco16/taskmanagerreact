import "../styles/TaskItem.css";

function TaskItem(props) {
  let isChecked = props.completed ? true : false;
  return (
    <li className={`task-item ${props.completed && "task-item--completed"}`}>
      <label onClick={props.onComplete}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={props.onComplete}
        />
        <div className="task-check">
          <div className="task-check-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="m9.55 17.308l-4.97-4.97l.714-.713l4.256 4.256l9.156-9.156l.713.714z"
              />
            </svg>
          </div>
        </div>
        <div className="task-description">{props.description}</div>
      </label>
      <div className="task-delete" onClick={props.onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M12.012 2.004C6.492 2 2.013 6.474 2.01 11.994S6.48 21.993 12 21.996a9.996 9.996 0 0 0 10.002-9.99c.003-5.52-4.47-9.999-9.99-10.002m0 18.992A8.996 8.996 0 1 1 12 3.004a8.996 8.996 0 0 1 .012 17.992M12.707 12l3.182-3.182a.5.5 0 0 0-.707-.707L12 11.293L8.818 8.111a.5.5 0 0 0-.707.707L11.293 12l-3.182 3.182a.5.5 0 0 0 .707.707L12 12.707l3.182 3.182a.5.5 0 0 0 .707-.707z"
          />
        </svg>
      </div>
    </li>
  );
}
export { TaskItem };
