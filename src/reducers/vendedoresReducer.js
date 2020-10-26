export const vendedoresReducer = (state = {}, action) => {
  switch (action.type) {
    case "getBestSalespeople":
      return {
        ...state,
        salespeople: [...action.payload],
      };
    case "getVentas":
      return {
        ...state,
        sales: [...action.payload],
      };
    default:
      return state;
  }
};
