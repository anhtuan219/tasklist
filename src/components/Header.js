import PropTypes from "prop-types";

const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <h2>{title}</h2>
      <div>
        <button type="button" className="btn-add">
          Add
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
};

export default Header;
