import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default props => {
  const {id, first_name, date_added} = props.user;
  return (
    <Fragment>
      <div onClick={() => props.onUserId(id)}>
        <Link to="/edit_user">
          <div className="text-user my-2">
            Name: {first_name} Date added: {date_added}
          </div>
        </Link>
      </div>
      <hr />
    </Fragment>
  );
};
