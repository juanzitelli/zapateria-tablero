import React from "react";
import { useSelector } from "react-redux";
export const Home = () => {
  const { usuario } = useSelector(state => state.auth)
  
  return (
    <div className="home__main">
      <div className="jumbotron container mt-5 animate__animated animate__fadeIn">
        <h1 className="display-4">¡Bienvenido, {usuario}!</h1>
        {/* eslint-disable-next-line */}
        <p className="lead"> Este es un tablero diseñado para mostrar información relevante con respecto a la "Zapatería Zitelli" 📚👠💻 </p>
        <hr className="my-4"></hr>
        <strong>Hacé clicks en los diferentes enlaces de la barra de navegación para ver dicha información. </strong>

      </div>
      
     </div>
  )
};
