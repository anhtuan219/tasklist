import { useState } from "react";

const AddTask = () => {
  //state
  const [content, setContent] = useState("");
  const [time, setTime] = useState("2020-09-18");
  const [complete, setComplete] = useState(false);
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
                value={complete}
                onChange={(e) => setComplete(e.currentTarget.checked)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="have-btn">
        <input type="submit" value="Add task" className="btn-submit" />
      </div>
    </form>
  );
};

export default AddTask;
