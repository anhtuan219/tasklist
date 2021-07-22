import Task from "./Task";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Header from "./Header";

const TaskList = () => {
  // state
  const [tasks, setTasks] = useState([]);
  // use numTask for set id, prevent same id when add task using tasks.length
  const [numTask, setNumTask] = useState(0);
  // use setAdd to show AddTask form
  const [setAdd, setSetAdd] = useState(false);
  //end state
  //effect
  useEffect(() => {
    //fetch data from json server
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTasks(data);
      setNumTask(data.length);
    };
    fetchTasks();
  }, []);
  // action
  const deleteHandler = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
    console.log(`Deleted task with id ${id}`);
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

  const editHandler = (id, taskUpdate) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, ...taskUpdate } : task;
      })
    );
    console.log(`Edited task with id ${id}`);
  };

  return (
    <div className="container">
      <Header title="Task List" setAdd={setAdd} showAddTask={showAddTask} />
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
                editHandler={editHandler}
              />
            );
          })
        ) : (
          <h2>No Task To Show</h2>
        )}
      </div>
    </div>
  );
};

export default TaskList;
