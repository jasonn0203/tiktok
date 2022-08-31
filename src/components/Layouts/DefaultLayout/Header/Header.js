import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import "./Header.scss";
import { Popper as PopperWrapper } from "~/components/Popper";
import { AccountItem } from "~/components/AccountItem";
import Button from "~/components/Button/Button";

const Header = () => {
  const [searchResults, setSearchResult] = useState([]);
  return (
    <header className="wrapper">
      <div className="header-container">
        <a href="#">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/500px-TikTok_logo.svg.png?20200415104610"
          />
        </a>

        <Tippy
          interactive="true"
          visible
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className="search-title">Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <form className="search-box">
            <input type="text" placeholder="Search accounts and videos" />
            <button className="btn btn-close">
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button className="btn btn-loading">
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <span className="search-right-border"></span>
            <button className="btn btn-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </Tippy>

        <div className="controls">
          <Button type="text" to="/">
            Upload
          </Button>
          <Button type="primary disabled" to="/following">
            Log in
          </Button>
          <Button type="rounded" to="/">
            Get the app
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
