import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
const Button = ({
  type = "primary",
  disabled,
  to,
  href,
  children,
  onClick,
  ...otherProps
}) => {
  // Declare a default button
  let Comp = "button";
  const props = {
    onClick,
    ...otherProps,
  };

  //   let btnEl = document.getElementById("btnEl");

  //   // Logic to remove EventListener when btn is disabled
  //   if (btnEl.className.contains(disabled)) {
  //     {
  //       Object.keys(props).forEach((keyProp) => {
  //         if (keyProp.startsWith("on") || typeof props[keyProp] === "function") {
  //           delete props[keyProp];
  //         }
  //       });
  //     }

  //NOTE Logic for button
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp id="btnEl" className={`button ${type}`} {...props}>
      <span>{children}</span>
    </Comp>
  );
};
export default Button;
