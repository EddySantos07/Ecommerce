import { combineReducers } from "redux";

import FetchProductsReducer from "../FetchProductsReducer/FetchProductsRecuer";

const RootReducer = combineReducers({
  Products: FetchProductsReducer,
});

export default RootReducer;