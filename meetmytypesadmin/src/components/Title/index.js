import React, { Fragment } from "react";
import "./style.css";

export default ({ title, detail }) => {
  return (
    <Fragment>
      <div className="text-title my-2">{title}</div>
      <div className="text-detail">{detail}</div>
      <hr />
    </Fragment>
  );
};
