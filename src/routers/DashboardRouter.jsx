import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "../components/ui/Footer";
import { Home } from "../components/ui/Home";
import { Navbar } from "../components/ui/Navbar";
import { Productos } from "../components/zapateria/Productos";
import { Vendedores } from "../components/zapateria/Vendedores";
import { Ventas } from "../components/zapateria/Ventas";
import { ProductosMasVendidos } from '../components/zapateria/ProductosMasVendidos'
import { MarcasMasVendidas } from "../components/zapateria/MarcasMasVendidas";
import { CategoriasMasVendidas } from "../components/zapateria/CategoriasMasVendidas";
import { GenerosMasVendidos } from "../components/zapateria/GenerosMasVendidos";

export const DashboardRoutes = () => {
  
  return (
    <>
      <Navbar />
      <div className="dashboard-routes-container">
        <Switch>
          <Route exact path="/vendedores" component={Vendedores} />
          <Route exact path="/vendedores/ventas" component={Ventas} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/productos/" component={Productos} />
          <Route exact path="/productos/mas-vendidos" component={ProductosMasVendidos} />
          <Route exact path="/productos/mas-vendidos-marca" component={MarcasMasVendidas} />
          <Route exact path="/productos/mas-vendidos-categoria" component={CategoriasMasVendidas} />
          
          <Route exact path="/productos/mas-vendidos-genero" component={GenerosMasVendidos} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};
