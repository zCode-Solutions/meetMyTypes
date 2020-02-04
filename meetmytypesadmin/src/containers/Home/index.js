import React, { Component, Fragment } from "react";
import Title from "../../components/Title";
import DashboardCard from "../../components/DashboardCard";
import "./style.css";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <Title
            title="Dashboard"
            detail="Welcome to your personal admin dashboard within that
              is customized to help you manage your users!"
          />
          <div className="container">
            <div className="row justify-content-around">
              <DashboardCard className="col-4" title="Total New Users" numOfUser="30"/>
              <DashboardCard className="col-4" title="Total Users" numOfUser="320"/>
            </div>
          </div>
          <div className="container-total-typy">
            
        </div>
        </div>
      </Fragment>
    );
  }
}
