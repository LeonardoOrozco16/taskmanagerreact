function TaskItem(props) {
  return (
    <li className='task-item'>
      <span>V</span>
      <p className='task-description'>{props.description}</p>
      <span>&times;</span>
    </li>
  );
}
export { TaskItem };