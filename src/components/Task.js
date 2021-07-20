import PropTypes from "prop-types";

const Task = (props) => {
  const { id, content, time } = props;
  return (
    <div>
      <h2>{content}</h2>
      <h4>{time}</h4>
    </div>
  );
};

export default Task;

Task.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  time: PropTypes.string,
};
