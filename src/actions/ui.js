import { types } from "../types/types";

export const setLoginLoading = () => ({
	type: types.uiSetLoadingLogin
})
export const removeLoginLoading = () => ({
  type: types.uiRemoveLoadingLogin,
});

export const setLoadingTablero = () => ({
  type: types.uiSetLoadingTablero,
});
export const removeLoadingTablero = () => ({
  type: types.uiRemoveLoadingTablero,
});