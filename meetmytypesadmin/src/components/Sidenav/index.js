import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import logo from '../../logo/meetmytypes-logo.png';
import "./style.css";

export default () => {
  return (
      <Fragment>
        <div className="sidenav">
        <Link className="btnn" to="/">
        <img alt = "logo" src={logo} width="100" height="100" />
        </Link>
        <Link  to="/new-user">NEW USER</Link>
        <Link  to="/current-users">CURRENT USERS</Link>
        <Link  to="/search">SEARCH</Link>
        <Link  to="/profile">PROFILE</Link>
        </div>
      </Fragment>
  );
};
