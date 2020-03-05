import React, { Component, Fragment } from "react";
import Title from "../../components/Title";
import DashboardCard from "../../components/DashboardCard";
import LoveTypeChip from "../../components/LoveTypeChip";
import "./style.css";

export default class extends Component {
  state = {
    totalUsers: 0,
    new_user: 0,
    loveTypes:[]
  };
  componentDidMount() {
    const url1 = "https://8hz8yqsjgd.execute-api.us-east-1.amazonaws.com/mt-dev/dashboard";
    fetch(url1)
      .then(res => res.json())
      .then(data => this.setState({ totalUsers: data.Count })); 

    const url2 = "https://8hz8yqsjgd.execute-api.us-east-1.amazonaws.com/mt-dev/love-type";
      fetch(url2)
        .then(res => res.json())
        .then(data => this.setState( {loveTypes: data }));  

    const url3 = "https://8hz8yqsjgd.execute-api.us-east-1.amazonaws.com/mt-dev/new-user";
      fetch(url3)
        .then(res => res.json())
        .then(data => this.setState( {new_user: data }));  
  }


  render() {
    const loveType = Object.entries(this.state.loveTypes).map(([key, value]) => {
      return <LoveTypeChip key={key} loveType = {key} numOfType={value}/>;
    });
    return (
      <Fragment>
        <div className="main">
          <Title
            title="Dashboard"
            detail="Welcome to your personal admin dashboard within that
              is customized to help you manage your users!"
          />
          <div className="container">
          <button className="btn btn-primary" onClick={() => this.componentDidMount()}><span className="glyphicon glyphicon-refresh"></span> Refresh</button>
            <div className="row justify-content-around">
              <DashboardCard className="col-4" title="Total New Users" numOfUser={this.state.new_user}/>
              <DashboardCard className="col-4" title="Total Users" numOfUser={this.state.totalUsers}/>
            </div>
          </div>
          <div className="container-total-typy">
            <div className="row">{loveType}</div>
        </div>
        </div>
      </Fragment>
    );
  }
}
