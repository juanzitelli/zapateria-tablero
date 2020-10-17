import React, { useReducer, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";
import { AppRouter } from "./routers/AppRouter";
import { authenticationReducer } from "./reducers/authenticationReducer";
import "./styles.css";

const init = () => {
  return {
    username: "",
    logged: false
  };
};

export const App = () => {
  const auth = useReducer(authenticationReducer, { logged: false }, init);
  console.log(auth);
  return (
    <AppContext.Provider
      value={{
        auth
      }}
    >
      <AppRouter />
    </AppContext.Provider>
  );
};
