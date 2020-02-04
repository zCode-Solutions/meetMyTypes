import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";

import Sidenav from "./components/Sidenav";
import Home from "./containers/Home";
import NewUser from "./containers/NewUser";
import NotFoundPage from "./components/NotFoundPage";
import CurrentUsers from "./containers/CurrentUsers";
import Search from "./containers/Search";
import EditUser from "./containers/EditUser";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    user_id: 0
  };

  handleUserId = id => {
    console.log(id);
    this.setState({ user_id: id });
  };

  render() {
    return (
      <Fragment>
        <Sidenav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/new-user"
            render={props => (
              <NewUser {...props} onUserId={this.handleUserId} />
            )}
          />
          <Route path="/current-users" component={CurrentUsers} />
          <Route path="/search" component={Search} />
          <Route path="/edit_user" component={EditUser} />
          <Route component={NotFoundPage} />
        </Switch>
      </Fragment>
    );
  }
}
