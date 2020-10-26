import React from "react";

export const marcasMasVendidasColumns = [
  {
    title: () => "Marca",
    value: vendedor => {
      return <span>{vendedor.Marca}</span>;
    },
  },
  {
    title: () => "Ventas",
    value: vendedor => {
      return <span>{vendedor.Ventas}</span>;
    },
  },
];
