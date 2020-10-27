import React from "react";
import { Redirect, Route } from "react-router";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  const lastPath = localStorage.getItem("lastPath") || "/home"
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to={lastPath} />
      }
    />
  );
};
