import React from "react";

export function useTaskProgress(tasks) {
  const completedTasks = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;
  const percentProgress =
    completedTasks === 0 ? 0 : Math.round((completedTasks * 100) / totalTasks);
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const inverval = setInterval(() => {
      setProgress((prev) => {
        if (prev === percentProgress) {
          clearInterval(inverval);
          return prev;
        } else if (percentProgress < prev) {
          return prev - 1;
        } else {
          return prev + 1;
        }
      });
    }, 10);
    return () => clearInterval(inverval);
  });

  return {
    completedTasks,
    totalTasks,
    progress,
  };
}
