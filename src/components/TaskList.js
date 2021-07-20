import arrayTasks from "../data/tasksArray";
import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState(arrayTasks);
  return (
    <section className="task-list">
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />;
      })}
    </section>
  );
};

export default TaskList;
