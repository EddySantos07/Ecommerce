// import { create } from 'eslint/lib/rules/*';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./Reducers/RootReducer/RootReducer";

let initialState = {
  Product: {},
  Products: [],
  ProductStyles: {},
};

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;
