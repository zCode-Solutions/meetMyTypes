import React, { Fragment } from "react";
import User from "../User";

export default props => {
  const user = props.users.map(user => {
    return <User key={user.id} user={user}/>;
  });
  return <Fragment>{user}</Fragment>;
};
