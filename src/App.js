import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <>
      <Header title="To do Task" />
      <AddTask />
      <TaskList />
    </>
  );
};

export default App;
