import React from "react";

export const categoriasMasVendidasColumns = [
  {
    title: () => "Categoría",
    value: producto => {
      return <span>{producto.Categoria}</span>;
    },
  },
  {
    title: () => "Ventas",
    value: producto => {
      return <span>{producto.Ventas}</span>;
    },
  }
];