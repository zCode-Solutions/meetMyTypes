import React, { Component, Fragment } from "react";
import Title from "../../components/Title";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <Title
            title="Current Users"
            detail="Below is a list of current users"
          />
        </div>
      </Fragment>
    );
  }
}
