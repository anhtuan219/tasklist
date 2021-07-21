import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import EditTask from "./EditTask";

const Task = (props) => {
  const { id, content, time, complete, deleteHandler, completed, editHandler } =
    props;
  // state
  const [ID, setID] = useState(id);
  const [CONTENT, setCONTENT] = useState(content);
  const [TIME, setTIME] = useState(time);
  // use state setEdit to show AddTask form
  const [setEdit, setSetEdit] = useState(false);
  // end state

  //actions
  const showEditTask = () => {
    setSetEdit(!setEdit);
  };
  const editHandlerTask = (taskUpdate) => {
    let { content, time } = taskUpdate;
    setCONTENT(content);
    setTIME(time);
    editHandler(ID, taskUpdate);
  };
  return (
    <div
      className={`task ${complete ? "completed" : ""}`}
      onDoubleClick={() => {
        completed(id);
      }}
    >
      <h2>
        {content}
        <FaTimes
          style={{ color: "red", float: "right" }}
          onClick={() => {
            deleteHandler(id);
          }}
        />
      </h2>
      <h4>
        <i>{time}</i>
        <button
          style={{ float: "right" }}
          className={setEdit ? "btn-close" : "btn-edit"}
          onClick={showEditTask}
        >
          {setEdit ? "Close" : "Edit"}
        </button>
      </h4>
      {setEdit && (
        <EditTask
          ID={ID}
          CONTENT={CONTENT}
          TIME={TIME}
          editHandlerTask={editHandlerTask}
          showEditTask={showEditTask}
        />
      )}
    </div>
  );
};

export default Task;

Task.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  time: PropTypes.string,
  complete: PropTypes.bool,
  deleteHandler: PropTypes.func,
  completed: PropTypes.func,
  editHandler: PropTypes.func,
};
