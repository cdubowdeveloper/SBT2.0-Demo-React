import PropTypes from "prop-types";
import "../styles/Portal.css";
import { loadJSFiles } from "../module";

function Portal({
  label,
  accountId,
  groupId,
  orgunitId,
  theme = "dark",
  handleClick,
}) {
  //loadJSFiles();
  //document.getElementsByTagName();
  switch (theme) {
    case "light":
      return (
        <div className="container-light">
          <div className="topBar"></div>
          <p className="title-light">{label}</p>
          <button onClick={handleClick}>Do Something</button>
        </div>
      );

    case "dark":
      return (
        <div className="container-dark">
          <div className="topBar"></div>
          <p className="title-dark">{label}</p>
          <button onClick={handleClick}>Do Something</button>
        </div>
      );
  }
}

Portal.propTypes = {
  label: PropTypes.string,
  accountId: PropTypes.string,
  groupId: PropTypes.string,
  orgunitId: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  handleClick: PropTypes.func,
};

export default Portal;
