import React, { lazy, Suspense, useEffect, useState } from "react";
import Loading3dot from "./Loading3dot";
import LoadingSpinner from "./LoadingSpinner";

const AddTask = lazy(() => import("./AddTask"));
const Header = lazy(() => import("./Header"));
const Task = lazy(() => import("./Task"));

const urlBackend = "http://localhost:5000/";

const TaskList = () => {
  // state
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  //end state
  //effect
  useEffect(() => {
    //fetch data from json server
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${urlBackend}tasks`);
        if (res.ok) {
          const data = await res.json();
          setTasks(data);
        } else {
          const errMsg = `There was an error "${res.status} ${res.statusText}"`;
          throw new Error(errMsg);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, []);
  // action
  const deleteHandler = async (id) => {
    try {
      const res = await fetch(`${urlBackend}tasks/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const errMsg = `There was an error "${res.status} ${res.statusText}"`;
        throw new Error(errMsg);
      }
    } catch (error) {
      console.error(error);
    }
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
    console.log(`Deleted task with id ${id}`);
  };

  // get task with specified id
  const fetchTaskWithId = async (id) => {
    let data;
    try {
      const res = await fetch(`${urlBackend}tasks/${id}`);
      if (res.ok) {
        data = await res.json();
      } else {
        const errMsg = `There was an error "${res.status} ${res.statusText}"`;
        throw new Error(errMsg);
      }
    } catch (error) {
      console.error(error);
    }
    return data;
  };

  const toggleComplete = async (id) => {
    const taskToToggleComplete = await fetchTaskWithId(id);
    // toggle complete
    const taskUpdated = {
      ...taskToToggleComplete,
      complete: !taskToToggleComplete.complete,
    };
    // update json server
    try {
      const res = await fetch(`${urlBackend}tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskUpdated),
      });
      if (res.ok) {
        const data = await res.json();
        //update components
        setTasks(
          tasks.map((task) => {
            return task.id === id ? data : task;
          })
        );
        console.log(`Toggled complete of task with id ${id}`);
      } else {
        const errMsg = `There was an error "${res.status} ${res.statusText}"`;
        throw new Error(errMsg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await fetch(`${urlBackend}tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      if (res.ok) {
        const taskAddedFromServer = await res.json();
        setTasks([...tasks, taskAddedFromServer]);
        console.log(`Added task with id ${taskAddedFromServer.id}`);
      } else {
        const errMsg = `There was an error "${res.status} ${res.statusText}"`;
        throw new Error(errMsg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleIsShowAddForm = () => {
    setIsShowAddForm(!isShowAddForm);
  };

  const editHandler = async (id, taskUpdate) => {
    const taskToEdit = await fetchTaskWithId(id);
    // Edit task
    const taskUpdated = {
      ...taskToEdit,
      ...taskUpdate,
    };
    // update json server
    try {
      const res = await fetch(`${urlBackend}tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskUpdated),
      });
      if (res.ok) {
        const data = await res.json();
        //update components
        setTasks(
          tasks.map((task) => {
            return task.id === id ? data : task;
          })
        );
        console.log(`Edited task with id ${id}`);
      } else {
        const errMsg = `There was an error "${res.status} ${res.statusText}"`;
        throw new Error(errMsg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Suspense fallback={<Loading3dot />}>
      <div className="container">
        <Header
          title="Task List"
          isShowAddForm={isShowAddForm}
          toggleIsShowAddForm={toggleIsShowAddForm}
        />
        {isShowAddForm && (
          <AddTask
            addTask={addTask}
            toggleIsShowAddForm={toggleIsShowAddForm}
          />
        )}
        <div className="task-list">
          {isLoading ? (
            <LoadingSpinner />
          ) : tasks.length > 0 ? (
            <>
              <h6 style={{ fontStyle: "italic" }}>
                Hint: double click card task to toggle complete of task
              </h6>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  {...task}
                  deleteHandler={deleteHandler}
                  toggleComplete={toggleComplete}
                  editHandler={editHandler}
                />
              ))}
            </>
          ) : (
            <h2>No Task To Show</h2>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default TaskList;
