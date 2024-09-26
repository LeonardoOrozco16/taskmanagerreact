import { IconComponent } from "../../layout/IconComponent";
function CreateTaskButton() {
  return (
    <button aria-label="Create Task" type="submit">
      <IconComponent type={"addTask"} />
    </button>
  );
}
export { CreateTaskButton };
