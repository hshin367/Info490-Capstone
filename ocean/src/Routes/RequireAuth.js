import React from "react";
import history from "../Routes/history";
import { Redirect, Route, withRouter, useHistory } from "react-router-dom";

const RequireAuth = (props) => {
  const uToken = JSON.parse(localStorage.getItem("user-info"));

  if (uToken === null) {
    history.push({ pathname: "/login" });
    return null;
  } else {
    return <>{props.children}</>;
  }
};

export default withRouter(RequireAuth);
