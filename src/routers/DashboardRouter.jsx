import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../components/Home";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="DashboardRoutesSwitchContainer">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
