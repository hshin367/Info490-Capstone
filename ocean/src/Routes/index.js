import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

// TODO : add routes for logout, in, signup, forgot, reset

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/events" component={Dashboard} />
      {/* CheckAuth and proceed */}
    </Switch>
  </Router>
);

export default Routes;
