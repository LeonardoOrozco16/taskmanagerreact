import "./styles/TaskItem.css";
import { IconComponent } from "../layout/IconComponent";
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
            <IconComponent type={"check"} />
          </div>
        </div>
        <div className="task-description">{props.description}</div>
      </label>
      <div className="task-delete" onClick={props.onDelete}>
        <IconComponent type={"delete"} />
      </div>
    </li>
  );
}
export { TaskItem };
