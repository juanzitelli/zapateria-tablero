import axios from "axios";
import Swal from "sweetalert2";
import { removeLoginLoading, setLoginLoading } from "./ui";

export const loginAction = usuario => ({
  type: "login",
  payload: {
    usuario,
  },
});

export const logoutAction = () => ({
  type: "logout",
});

export const startLoginAction = (usuario, contrasena) => dispatch => {
  dispatch(setLoginLoading())
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/usuarios/login/`
  //const devURL = `http://localhost:4000/usuarios/login/`;
  axios
    .post(prodURL, {
      usuario,
      contrasena,
    })
    .then(response => {
      if (response.data.error) {
        dispatch(removeLoginLoading());
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(loginAction(response.data.user.usuario));
      localStorage.setItem("usuario", response.data.user.usuario);
      dispatch(removeLoginLoading())
    })
    .catch(error => {
      console.error(error);
    });
};
