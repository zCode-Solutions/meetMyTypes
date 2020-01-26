import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Title from '../../components/Title';
import UserCard from '../../components/UserCard';
import spinner from '../Spinner-1s-200px.svg';
import "./style.css";

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
        this.setState({ users: data });
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
          {this.state.loading ? (
            <div className="loading"><img src={spinner} alt="loading" /></div>
          ) : (
          <div className="user-cards">
            {this.state.users.map(user => (
              <Link to={"/edit-user/"+user.UID} key={user.UID}><UserCard
                name={user.Nickname}
                loveType={user.LoveType}
              /></Link>))}
          </div>)}
        </div>
      </Fragment>
    );
  }
}
