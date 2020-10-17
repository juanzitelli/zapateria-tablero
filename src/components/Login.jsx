import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useForm } from "./../hooks/useForm";
export const Login = () => {
  const {
    auth: [, dispatch]
  } = useContext(AppContext);

  const [formValues, handleInputChange, resetForm] = useForm({
    username: "",
    password: ""
  });

  const { username, password } = formValues;

  const loginAction = {
    type: "login",
    payload: {
      username,
      password
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("dispatch's type is", typeof dispatch);
    dispatch(loginAction);
    resetForm({ username: "", password: "" });
  };

  return (
    <form className="form-signin" style={formSignin} onSubmit={handleLogin}>
      <h1 className="h3 mb-3">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Username
      </label>
      <input
        name="username"
        onChange={handleInputChange}
        value={username}
        type="text"
        id="inputUsername"
        className="form-control"
        placeholder="Username"
        required=""
        autoFocus="on"
      ></input>
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        name="password"
        value={password}
        onChange={handleInputChange}
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required=""
      ></input>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
  );
};

const formSignin = {
  width: "100%",
  maxWidth: "70%",
  padding: "15px",
  margin: "20vh auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "80vh",
  maxHeight: "70vh",
  alignItems: "center"
};
