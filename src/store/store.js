import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productosReducer } from "../reducers/productosReducer";
import { authenticationReducer } from "./../reducers/authenticationReducer";
import { vendedoresReducer } from "./../reducers/vendedoresReducer";
import { uiReducer } from "./../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authenticationReducer,
  products: productosReducer,
  salespeople: vendedoresReducer,
  ui: uiReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
