import PropTypes from "prop-types";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import EditTask from "./EditTask";

const Task = (props) => {
  const {
    id,
    content,
    time,
    complete,
    deleteHandler,
    toggleComplete,
    editHandler,
  } = props;
  // state
  const [CONTENT, setCONTENT] = useState(content);
  const [TIME, setTIME] = useState(time);
  const [isEdit, setIsEdit] = useState(false);
  // end state

  //actions
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const editHandlerTask = (taskUpdate) => {
    let { content, time } = taskUpdate;
    setCONTENT(content);
    setTIME(time);
    editHandler(id, taskUpdate);
  };
  return (
    <div
      className={`task ${complete ? "completed" : ""}`}
      onDoubleClick={() => {
        toggleComplete(id);
      }}
    >
      <h2>
        {content}
        <FaTimes
          style={{ color: "red", float: "right", cursor: "pointer" }}
          onClick={() => {
            deleteHandler(id);
          }}
        />
      </h2>
      <h4>
        <i>{time}</i>
        <button
          style={{ float: "right" }}
          className={isEdit ? "btn-close" : "btn-edit"}
          onClick={toggleIsEdit}
        >
          {isEdit ? "Close" : "Edit"}
        </button>
      </h4>
      {isEdit && (
        <EditTask
          ID={id}
          CONTENT={CONTENT}
          TIME={TIME}
          editHandlerTask={editHandlerTask}
          toggleIsEdit={toggleIsEdit}
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
