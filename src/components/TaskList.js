import arrayTasks from "../data/tasksArray";
import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState(arrayTasks);
  const deleteHandler = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
    console.log(`Delete id ${id}`);
  };
  return (
    <section className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return <Task key={task.id} {...task} deleteHandler={deleteHandler} />;
        })
      ) : (
        <h2>No Task To Show</h2>
      )}
    </section>
  );
};

export default TaskList;
