import PropTypes from "prop-types";

const Header = (props) => {
  const { title, isShowAddForm, toggleIsShowAddForm } = props;
  return (
    <header className="header">
      <h1
        className="title"
        style={{ color: "greenyellow", fontSize: "2.5rem" }}
      >
        {title}
      </h1>
      <div>
        <button
          type="button"
          className={isShowAddForm ? "btn-close" : "btn-add"}
          onClick={toggleIsShowAddForm}
        >
          {isShowAddForm ? "Close" : "Add"}
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
