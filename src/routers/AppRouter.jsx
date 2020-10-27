import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "./../components/auth/Login";
import { DashboardRoutes } from "./DashboardRouter";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";

export const AppRouter = () => {

  const { logged } = useSelector(state => state.auth)

  return (

    <Router>
      <div className="main-container">
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={logged}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
