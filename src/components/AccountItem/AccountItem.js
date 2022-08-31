import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import "./AccountItem.scss";

const AccountItem = () => {
  return (
    <div className="account">
      <div className="account-item">
        <img
          src="https://images.unsplash.com/photo-1661860872033-040b50bd39d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className="account-avatar"
        />
        <div className="account-content">
          <h4 className="account-name">
            <span>Jason</span>
            <FontAwesomeIcon className="account-verified" icon={faUserCheck} />
          </h4>
          <p className="account-desc">JSH</p>
        </div>
      </div>
    </div>
  );
};

export default AccountItem;
