import PropTypes from "prop-types";

const Header = (props) => {
  const { title, setAdd, showAddTask } = props;
  return (
    <header className="header">
      <h2>{title}</h2>
      <div>
        <button
          type="button"
          className={setAdd ? "btn-close" : "btn-add"}
          onClick={showAddTask}
        >
          {setAdd ? "Close" : "Add"}
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
  setAdd: PropTypes.bool,
  showAddTask: PropTypes.func,
};

export default Header;
