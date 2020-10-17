import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { Home } from "./../components/Home";
import { Login } from "./../components/Login";
import { AppContext } from "../contexts/AppContext";
export const AppRouter = () => {
  const {
    auth: [user]
  } = useContext(AppContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            path="/"
            component={Home}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
