// import { create } from 'eslint/lib/rules/*';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./Reducers/RootReducer/RootReducer";

let initialState = {
  CurrentProductID: '11001',
  Product: {},
  Products: {},
  ProductStyles: {},
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(
  RootReducer,
  initialState,
  applyMiddleware(thunk)
);

// persistedReducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

export default store;
