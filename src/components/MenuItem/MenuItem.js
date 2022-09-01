import "./MenuItem.scss";
import { Link } from "react-router-dom";
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuItem = ({ choice, icon, to, ...otherProps }) => {
  let Element = "div";

  const props = { to, ...otherProps };
  if (to) {
    Element = Link;
    props.to = to;
  }
  return (
    <div className="menu-item">
      <Element className="menu-content" {...props}>
        <FontAwesomeIcon className="menu-icon" icon={icon} />
        <p className="menu-choice">{choice}</p>
      </Element>
    </div>
  );
};

export default MenuItem;
