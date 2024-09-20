import { IconComponent } from "../../layout/IconComponent";
function CreateTaskButton() {
  return (
    <button
      aria-label="Create Task"
      type="button"
      onClick={(event) => {
        let taskDescription = event.target
          .closest("form")
          .querySelector("input[type='text']").value;
      }}
    >
      <IconComponent type={"addTask"} />
    </button>
  );
}
export { CreateTaskButton };
