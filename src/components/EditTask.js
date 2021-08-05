import { useState } from "react";

const EditTask = (props) => {
  const { ID, CONTENT, TIME, editHandlerTask, showEditTask } = props;
  //state
  const [id, setId] = useState(ID);
  const [content, setContent] = useState(CONTENT);
  const [time, setTime] = useState(TIME);

  return (
    <form className="form-edit">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="content">Task's content</label>
            </td>
            <td>
              <input
                type="text"
                id="content"
                placeholder="Edit task's content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="time">Task's start date</label>
            </td>
            <td>
              <input
                type="date"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="have-btn">
        <button
          type="button"
          className="btn-submit"
          onClick={() => {
            editHandlerTask({ content: content, time: time });
            showEditTask();
          }}
        >
          Confirm change
        </button>
      </div>
    </form>
  );
};

export default EditTask;
