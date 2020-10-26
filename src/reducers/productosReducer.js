export const productosReducer = (state = {}, action) => {
  switch (action.type) {
    case "getAllProducts":
      return {
        ...state,
        productos: [...action.payload],
      };
    case "getMostSoldProducts":
      return {
        ...state,
        productosMasVendidos: [...action.payload],
      };
    case "getMostSoldBrands":
      return {
        ...state,
        marcasMasVendidas: [...action.payload],
      };
    case "getMostSoldCategories":
      return {
        ...state,
        categoriasMasVendidas: [...action.payload],
      };
    case "getMostSoldGenres":
      return {
        ...state,
        generosMasVendidos: [...action.payload],
      };
    default:
      return state;
  }
};
