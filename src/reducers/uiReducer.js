import { types } from "../types/types";
const initialState = {loading: false}
export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
    case types.uiSetLoadingLogin:
      return {
        ...state,
        loading: true,
      };
    case types.uiRemoveLoadingLogin:
      return {
        ...state,
        loading: false,
      };
    case types.uiSetLoadingTablero:
      return {
        ...state,
        loadingTablero: true,
      };
    case types.uiRemoveLoadingTablero:
      return {
        ...state,
        loadingTablero: false,
      };
    default:
      return state;
  }
}