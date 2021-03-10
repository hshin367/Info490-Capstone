import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Events from "../pages/Events";

// TODO : add routes for forgot

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/events" component={Events} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      {/* CheckAuth and proceed */}
    </Switch>
  </Router>
);

export default Routes;
