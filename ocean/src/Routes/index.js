import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Events from "../pages/Events";
import Aquarium from "../pages/Aquarium";
import Friends from "../pages/Friends";

import history from "./history";
import RequireAuth from "./RequireAuth.js";

// TODO : add routes for forgot

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <RequireAuth>
        <Route exact path="/" component={Dashboard} />
        <Route path="/events" component={Events} />
        <Route path="/aquarium" component={Aquarium} />
        <Route path="/friends" component={Friends} />
      </RequireAuth>
    </Switch>
  </Router>
);

export default Routes;
