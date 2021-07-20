import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <Header title="To do Task" />
      <TaskList />
    </>
  );
};

export default App;
