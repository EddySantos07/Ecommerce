import { combineReducers } from "redux";

import FetchProductsReducer from "../FetchProductsReducer/FetchProductsReducer";

const RootReducer = combineReducers({
  Products: FetchProductsReducer,
});

export default RootReducer;