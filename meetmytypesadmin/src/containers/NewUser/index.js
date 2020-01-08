import React, { Component, Fragment} from "react";

import "./style.css";

export default class extends Component {
  state = {
    new_user :[]
  };
  render() {
    return (
      <Fragment >
      <div className="main"><h1>New User</h1></div>
      </Fragment>
    );
  }
}
