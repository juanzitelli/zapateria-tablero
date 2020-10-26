import React from "react";
import { NavLink, Link, useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logoutAction } from './../../actions/auth'
export const Navbar = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    history.replace('/login');
    localStorage.setItem("usuario", "")
    dispatch(logoutAction())
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/home" className="navbar-brand mb-0 h1">Zapatería Zitelli</Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <div className="nav-item dropdown">
            <span
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              activeClassName="active"
              className="nav-item nav-link dropdown-toggle"
            >Vendedores</span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink
                className="dropdown-item"
                exact
                to="/vendedores" >
                Todos los vendedores
          </NavLink>
              <NavLink className="dropdown-item" to="/vendedores/ventas">Vendedores y sus ventas</NavLink>
            </div>
          </div>

          <div className="nav-item dropdown">
            <span
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              activeClassName="active"
              className="nav-item nav-link dropdown-toggle"
            >Productos</span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink
                className="dropdown-item"
                exact
                to="/productos" >
                Todos los productos
          </NavLink>
              <NavLink className="dropdown-item" to="/productos/mas-vendidos">Más vendidos</NavLink>
              <NavLink className="dropdown-item" to="/productos/mas-vendidos-marca">Más vendidos por marca</NavLink>
              <NavLink className="dropdown-item" to="/productos/mas-vendidos-genero">Más vendidos por género</NavLink>
              <NavLink className="dropdown-item" to="/productos/mas-vendidos-categoria">Más vendidos por categoría</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 my-lg-0">

        <div className="btn btn-outline-danger" onClick={handleLogout}> Logout</div>

      </div>
    </nav>
  );
};
