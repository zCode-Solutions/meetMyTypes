import React, { Component, Fragment } from "react";
import Title from "../../components/Title";
import NewUserList from "../../components/NewUsersList";
import "./style.css";

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
    return (
      <Fragment>
        <div className="main">
          <Title title="New User" detail="Below are the new users who have recently filled out" />
          <NewUserList users={this.state.users}/>
        </div>
      </Fragment>
    );
  }
}
