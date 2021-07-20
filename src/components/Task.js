import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  const { id, content, time, deleteHandler } = props;
  return (
    <div className="task">
      <h2>
        {content}{" "}
        <FaTimes
          style={{ color: "red", float: "right" }}
          onClick={() => {
            deleteHandler(id);
          }}
        />
      </h2>
      <h4>
        <i>{time}</i>
      </h4>
    </div>
  );
};

export default Task;

Task.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  time: PropTypes.string,
};
