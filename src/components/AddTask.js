import { useState } from "react";

const AddTask = (props) => {
  const d = new Date();
  //state
  const [content, setContent] = useState("");
  const [time, setTime] = useState(
    `${d.getFullYear()}-${
      d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
    }-${d.getDate()}`
  );
  //props action
  const { addTask } = props;
  //action
  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      alert("Please input task'content");
      return;
    }
    addTask({ content: content, time: time, complete: false });
    setContent("");
    let nd = new Date();
    setTime(
      `${nd.getFullYear()}-${
        nd.getMonth() + 1 < 10 ? "0" + (nd.getMonth() + 1) : nd.getMonth() + 1
      }-${nd.getDate()}`
    );
  };

  return (
    <form method="post" onSubmit={submitHandler}>
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
        </tbody>
      </table>
      <div className="have-btn">
        <input type="submit" className="btn-submit" value="Add task" />
      </div>
    </form>
  );
};

export default AddTask;
