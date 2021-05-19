import { combineReducers } from "redux";

import FetchProductsReducer from "../FetchProductsReducer/FetchProductsReducer";
import ChangeCurrentProduct from '../ChangeCurrentProduct/ChangeCurrentProduct';
import FetchProductStylesReducer from '../FetchProductStylesReducer/FetchProductStylesReducer.';

import CurrentStyleGalleryReducer from '../CurrentStyleGalleryReducer/CurrentStyleGalleryReducer';

const RootReducer = combineReducers({
  Products: FetchProductsReducer,
  ProductStyles: FetchProductStylesReducer,

  CurrentProductID: ChangeCurrentProduct,

  CurrentStyleGallery: CurrentStyleGalleryReducer
});

export default RootReducer;