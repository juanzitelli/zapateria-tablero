import React from "react";
import { Route, Redirect } from "react-router";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};
