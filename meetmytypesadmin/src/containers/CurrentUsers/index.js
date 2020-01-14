import React, { Component, Fragment } from "react";
import Title from "../../components/Title";
import UserCard from "../../components/UserCard";


export default class extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const url = "http://localhost:3004/users";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ users: data })); 
  }

  render() {
    const user = this.state.users.map(user => {
      return <UserCard key={user.id} user={user}/>;
    });
    return (
      <Fragment>
        <div className="main">
          <Title
            title="Current Users"
            detail="Below is a list of current users"
          />
          <div className="row">{user}</div>
        </div>
      </Fragment>
    );
  }
}
