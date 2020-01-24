import React, { Component, Fragment } from 'react';
import Title from '../../components/Title';
import UserCard from '../../components/UserCard';

export default class extends Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    fetch(
      'https://qj87hoxzmk.execute-api.us-east-1.amazonaws.com/Dev/currentUsers'
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ users: data.Items });
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <div className="main">
          <Title
            title="Current Users"
            detail="Below is a list of current users"
          />
          <div className="user-cards">
            {!this.state.loading &&
              this.state.users.map(user => {
                console.dir(user);
                return (
                  <UserCard
                    key={user.UID}
                    name={user.Nickname}
                    loveType={user.LoveType}
                  />
                );
              })}
          </div>
        </div>
      </Fragment>
    );
  }
}
