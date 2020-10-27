import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { startLoginAction } from '../../actions/auth';
import { useForm } from "../../hooks/useForm";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
export const Login = () => {

  const { loading } = useSelector(state => state.ui)


  const dispatch = useDispatch();
  const history = useHistory();
  const [formValues, handleInputChange, resetForm] = useForm({
    username: "",
    password: ""
  });

  const { username, password } = formValues;

  const handleLogin = (event) => {
    event.preventDefault();
    const lastPath = localStorage.getItem("lastPath")
    if (validator.isEmpty(username, { ignore_whitespace: false })) {
      return Swal.fire("Error", "El nombre de usuario es inválido", "error")
    }
    if (validator.isEmpty(password, { ignore_whitespace: false })) {
      return Swal.fire("Error", "La contraseña no puede estar vacía", "error");
    }

    try {
      dispatch(startLoginAction(username, password));
    } catch (error) {
      console.log(error)
    }
    finally {
      resetForm({ username: "", password: "" });
      history.replace(lastPath);
    }


  };



  return (


    <form className="form-login animate__animated animate__fadeIn" id="id-form-login" onSubmit={handleLogin}>
      <h1 className="h3 mb-3">{loading ? "Iniciando" :"Iniciá"} sesión</h1>

      {loading ? <PropagateLoader
        css={css}
        size={12}
        color={"#273043"}
        loading={loading}
      /> : (<><label htmlFor="inputEmail" className="sr-only">
        Nombre de usuario
      </label>

        <input
          name="username"
          onChange={handleInputChange}
          value={username}
          type="text"
          id="inputUsername"
          className="form-control"
          placeholder="Username"
          autoFocus="on"
        ></input>


        <label htmlFor="inputPassword" className="sr-only">
          Contraseña
      </label>
        <input
          name="password"
          value={password}
          onChange={handleInputChange}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
        ></input>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Ingresar
      </button></>)}
      {/* eslint-disable-next-line */}
      <p className="mt-5 mb-3 text-muted">Hecho con 💖 por <a rel="noopener noreferrer" href="https://github.com/juanzitelli" target="_blank">@juanzitelli</a></p>
    </form>
  );
};

