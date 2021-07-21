import PropTypes from "prop-types";

const Header = (props) => {
  const { title, showAddTask } = props;
  return (
    <header className="header">
      <h2>{title}</h2>
      <div>
        <button type="button" className="btn-add" onClick={showAddTask}>
          Add task
        </button>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Header",
};

Header.propTypes = {
  title: PropTypes.string,
  showAddTask: PropTypes.func,
};

export default Header;
