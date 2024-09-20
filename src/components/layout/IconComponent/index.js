import { CheckIcon } from "../icons/CheckIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { AddTaskIcon } from "../icons/AddTaskIcon";
function IconComponent(props) {
  const icon = {
    check: <CheckIcon />,
    delete: <DeleteIcon />,
    search: <SearchIcon />,
    addTask: <AddTaskIcon />,
  };
  return icon[props.type];
}
export { IconComponent };
