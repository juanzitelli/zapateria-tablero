import React, { useEffect } from 'react';
import { useForm } from "../../hooks/useForm";
import { loginAction, startLoginAction } from '../../actions/auth'
import { useDispatch } from 'react-redux';
import validator from 'validator'
import Swal from 'sweetalert2'
export const Login = ({ history }) => {
  
  const dispatch = useDispatch();
  const [formValues, handleInputChange, resetForm] = useForm({
    username: "",
    password: ""
  });

  useEffect(() => {
    if(localStorage.getItem('usuario') != ""){
      dispatch(loginAction(localStorage.getItem('usuario')))
    }
  }, [dispatch])

  const { username, password } = formValues;

  const handleLogin = (event) => {
    event.preventDefault();
    const lastPath = localStorage.getItem('lastPath') || '/home';
    if (validator.isEmpty(username, { ignore_whitespace: false })) {
      return Swal.fire("Error", "El nombre de usuario es inválido", "error")
    }
    if (validator.isEmpty(password, { ignore_whitespace: false })) {
      return Swal.fire("Error", "La contraseña no puede estar vacía", "error");
    }
    history.replace(lastPath);
    dispatch(startLoginAction(username, password));
    resetForm({ username: "", password: "" });
  };


  
  return (
    <form className="form-login animate__animated animate__fadeIn" id="id-form-login" onSubmit={handleLogin}>
      <h1 className="h3 mb-3">Iniciá sesión</h1>

      <label htmlFor="inputEmail" className="sr-only">
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
      </button>
      {/* eslint-disable-next-line */}
      <p className="mt-5 mb-3 text-muted">Hecho con 💖 por <a rel="noopener noreferrer" href="https://github.com/juanzitelli" target="_blank">@juanzitelli</a></p>
    </form>
  );
};

