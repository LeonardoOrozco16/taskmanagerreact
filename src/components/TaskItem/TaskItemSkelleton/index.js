import { IconComponent } from "../../layout/IconComponent";
function TaskItemSkelleton() {
  return (
    <li className={`task-item task-item--skelleton`}>
      <label>
        <input type="checkbox" />
        <div className="task-check">
          <div className="task-check-icon"></div>
        </div>
        <div className="task-description">
          <div className="task-item--skelleton_line line-large"></div>
          <div className="task-item--skelleton_line line-medium"></div>
          <div className="task-item--skelleton_line line-medium"></div>
          <div className="task-item--skelleton_line line-large"></div>
        </div>
      </label>
      <div className="task-delete">
        <IconComponent type={"delete"} />
      </div>
    </li>
  );
}
export { TaskItemSkelleton };
