import { useState } from "react";

const AddTask = (props) => {
  //state
  const [content, setContent] = useState("");
  const [time, setTime] = useState("2020-09-18");
  const [complete, setComplete] = useState(false);
  //props action
  const { addTask } = props;

  return (
    <form>
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
                placeholder="Add task's content"
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
          <tr>
            <td>
              <label htmlFor="complete">Task's status</label>
            </td>
            <td>
              <input
                type="checkbox"
                id="complete"
                checked={complete}
                value={complete}
                onChange={(e) => setComplete(e.currentTarget.checked)}
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
            addTask({ content: content, time: time, complete: complete });
            setContent("");
            setTime("2020-09-18");
            setComplete(false);
          }}
        >
          Add task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
