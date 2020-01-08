import React, { Fragment } from "react";
import "./style.css";

export default props => {
  return (
    <Fragment>
      <div className="text-user my-2">Name: {props.user.first_name} Date added: {props.user.date_added}</div>
      <hr />
    </Fragment>
  );
};
