import React from "react";

export const generosMasVendidosColumns = [
  {
    title: () => "Género",
    value: producto => {
      return <span>{producto.Genero}</span>;
    },
  },
  {
    title: () => "Ventas",
    value: producto => {
      return <span>{producto.Ventas}</span>;
    },
  },
];
