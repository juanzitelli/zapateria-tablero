import React from "react";
/**
 * vendedores.nombre_completo as "Vendedor", 
			ventas.fecha as "Fecha",
  			productos.descripcion as "Producto",
  			lineas_productos.cantidad as "Cantidad"
 */
 export const ventasColumns = [
   {
     title: () => "Vendedor",
     value: vendedor => {
       return <span>{vendedor.Vendedor}</span>;
     },
   },
   {
     title: () => "Fecha",
     value: vendedor => {
       return <span>{vendedor.Fecha}</span>;
     },
   },
   {
     title: () => "Producto",
     value: vendedor => {
       return <span>{vendedor.Producto}</span>;
     },
   },
   {
     title: () => "Cantidad",
     value: vendedor => {
       return <span>{vendedor.Cantidad}</span>;
     },
   },
   
 ];
