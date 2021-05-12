import { combineReducers } from "redux";

import FetchProductsReducer from "../FetchProductsReducer/FetchProductsReducer";
import ChangeCurrentProduct from '../ChangeCurrentProduct/ChangeCurrentProduct';
import FetchProductStylesReducer from '../FetchProductStylesReducer/FetchProductStylesReducer.';

const RootReducer = combineReducers({
  Products: FetchProductsReducer,
  ProductStyles: FetchProductStylesReducer,

  CurrentProductID: ChangeCurrentProduct,
});

export default RootReducer;