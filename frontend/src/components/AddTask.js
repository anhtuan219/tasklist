import { useState } from "react";

const AddTask = (props) => {
  const d = new Date();
  //state
  const [content, setContent] = useState("");
  const [date, setDate] = useState(
    `${d.getFullYear()}-${
      d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
    }-${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}`
  );
  const [complete, setComplete] = useState(false);
  //props action
  const { addTask, toggleIsShowAddForm } = props;

  return (
    <form
      className="form-add"
      onSubmit={() => {
        addTask({ content: content, time: date, complete: complete });
        setContent("");
        let nd = new Date();
        setDate(
          `${nd.getFullYear()}-${
            nd.getMonth() + 1 < 10
              ? "0" + (nd.getMonth() + 1)
              : nd.getMonth() + 1
          }-${nd.getDate()}`
        );
        setComplete(false);
        toggleIsShowAddForm();
      }}
    >
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
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="date">Task's start date</label>
            </td>
            <td>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
        <button type="submit" className="btn-submit">
          Submit task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
