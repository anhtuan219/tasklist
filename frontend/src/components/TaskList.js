import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import Task from "./Task";

const TaskList = () => {
  // state
  const [tasks, setTasks] = useState([]);
  // use setAdd to show AddTask form
  const [setAdd, setSetAdd] = useState(false);
  //end state
  //effect
  useEffect(() => {
    //fetch data from json server
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/tasks");
        if (res.ok) {
          const data = await res.json();
          setTasks(data);
        } else {
          const errMsg = `There was an error "${res.status} ${res.statusText}"`;
          throw new Error(errMsg);
        }
      } catch (error) {
        console.error(error);
      }
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

  const completed = async (id) => {
    // get task with specified id
    const fetchTasksWithId = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    };
    const taskToToggleComplete = await fetchTasksWithId(id);
    // toggle complete
    const taskUpdated = {
      ...taskToToggleComplete,
      complete: !taskToToggleComplete.complete,
    };
    // update json server
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskUpdated),
    });
    const data = await res.json();
    //update components
    setTasks(
      tasks.map((task) => {
        return task.id === id ? data : task;
      })
    );
    console.log(`Toggled complete of task with id ${id}`);
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const taskAddedFromServer = await res.json();
    setTasks([...tasks, taskAddedFromServer]);
    console.log(`Added task with id ${taskAddedFromServer.id}`);
  };

  const showAddTask = () => {
    setSetAdd(!setAdd);
  };

  const editHandler = async (id, taskUpdate) => {
    // get task with specified id
    const fetchTasksWithId = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      return data;
    };
    const taskToEdit = await fetchTasksWithId(id);
    // Edit task
    const taskUpdated = {
      ...taskToEdit,
      ...taskUpdate,
    };
    // update json server
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskUpdated),
    });
    const data = await res.json();
    //update components
    setTasks(
      tasks.map((task) => {
        return task.id === id ? data : task;
      })
    );
    console.log(`Edited task with id ${id}`);
  };

  return (
    <div className="container">
      <Header title="Task List" setAdd={setAdd} showAddTask={showAddTask} />
      {setAdd && <AddTask addTask={addTask} showAddTask={showAddTask} />}
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
