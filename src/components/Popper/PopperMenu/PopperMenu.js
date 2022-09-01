import React from "react";
import "./PopperMenu.scss";
import Tippy from "@tippyjs/react/headless";
import { Popper as PopperWrapper } from "~/components/Popper";
import MenuItem from "~/components/MenuItem/MenuItem";
import {
  faKeyboard,
  faLanguage,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const PopperMenu = ({ children }) => {
  return (
    <Tippy
      interactive
      delay={[0, 450]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="popper-content" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <MenuItem icon={faLanguage} choice="English" />
            <MenuItem
              to="/feedback"
              icon={faQuestionCircle}
              choice="Feedback and help"
            />
            <MenuItem icon={faKeyboard} choice="Keyboard shortcuts" />
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default PopperMenu;
