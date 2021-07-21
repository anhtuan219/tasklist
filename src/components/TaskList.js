import Task from "./Task";
import { useState } from "react";
import arrayTasks from "../data/tasksArray";
import AddTask from "./AddTask";
import Header from "./Header";

const TaskList = () => {
  // state
  const [tasks, setTasks] = useState(arrayTasks);
  // use numTask for set id, prevent same id when add task using tasks.length
  const [numTask, setNumTask] = useState(tasks.length);
  // use setAdd to show AddTask form
  const [setAdd, setSetAdd] = useState(false);
  //end state
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
  const addTask = (task) => {
    let idAddedTask = numTask + 1;
    setTasks([...tasks, { id: idAddedTask, ...task }]);
    setNumTask(idAddedTask);
    console.log(`Added task with id ${idAddedTask}`);
  };
  const showAddTask = () => {
    setSetAdd(!setAdd);
  };

  return (
    <section className="absolute">
      <Header title="To do Task" showAddTask={showAddTask} />
      {setAdd && <AddTask addTask={addTask} />}
      <div className="task-list">
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
      </div>
    </section>
  );
};

export default TaskList;
