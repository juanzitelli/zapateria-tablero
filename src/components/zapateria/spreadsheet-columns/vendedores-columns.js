import React from "react";

export const vendedoresColumns = [
  {
    title: () => "Vendedor",
    value: vendedor => {
      return <span>{vendedor.Vendedor}</span>;
    },
  },
  {
    title: () => "Ventas",
    value: vendedor => {
      return <span>{vendedor.Ventas}</span>;
    },
  }
  
];
