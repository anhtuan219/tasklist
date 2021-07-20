import arrayTasks from "../data/tasksArray";
import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  // state
  const [tasks, setTasks] = useState(arrayTasks);
  // action
  const deleteHandler = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
    console.log(`Delete id ${id}`);
  };
  const completed = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, complete: !task.complete } : task;
      })
    );
    console.log(`complete of id ${id} has been change`);
  };

  return (
    <section className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              {...task}
              deleteHandler={deleteHandler}
              completed={completed}
            />
          );
        })
      ) : (
        <h2>No Task To Show</h2>
      )}
    </section>
  );
};

export default TaskList;
