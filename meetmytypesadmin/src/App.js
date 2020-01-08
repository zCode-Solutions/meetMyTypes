import React, { Fragment } from "react";
import { Switch, Route  } from "react-router-dom";

import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import NewUser from "./containers/NewUser";
import NotFoundPage from "./components/NotFoundPage";
import CurrentUsers from "./containers/CurrentUsers";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Sidenav/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/new-user" component={NewUser}/>
      <Route path="/current-users" component={CurrentUsers}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </Fragment>
  );
}

export default App;
