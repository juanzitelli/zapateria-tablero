import React from "react";

export const productosColumns = [
  {
    title: () => "Descripción",
    value: producto => {
      return <span>{producto.Descripcion}</span>;
    },
  },
  {
    title: () => "Precio",
    value: producto => {
      return <span>{producto.Precio}</span>;
    },
  },
  {
    title: () => "Talle",
    value: producto => {
      return <span>{producto.Talle}</span>;
    },
  },
  {
    title: () => "Categoria",
    value: producto => {
      return <span>{producto.Categoria}</span>;
    },
  },
  {
    title: () => "Marca",
    value: producto => {
      return <span>{producto.Marca}</span>;
    },
  },
  {
    title: () => "Género",
    value: producto => {
      return <span>{producto.Genero}</span>;
    },
  },
];

export const productosMasVendidosColumns = [
  {
    title: () => "Descripción",
    value: producto => {
      return <span>{producto.Nombre}</span>;
    },
  },
  {
    title: () => "Precio",
    value: producto => {
      return <span>{producto.Precio}</span>;
    },
  },
  {
    title: () => "Talle",
    value: producto => {
      return <span>{producto.Talle}</span>;
    },
  },
  {
    title: () => "Categoria",
    value: producto => {
      return <span>{producto.Categoria}</span>;
    },
  },
  {
    title: () => "Marca",
    value: producto => {
      return <span>{producto.Marca}</span>;
    },
  },
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
  }
];
