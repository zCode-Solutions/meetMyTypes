import React, { Fragment } from "react";

import "./style.css";

export default ({ title, numOfUser }) => {
  return (
    <Fragment>
      <div className="dach-card">
    <div className="total-number">
    {numOfUser}
    </div>
    <hr className="line"/>
        <div className="total-user">
          <h4>
            <b>{title}</b>
          </h4>
        </div>
      </div>
    </Fragment>
  );
};
