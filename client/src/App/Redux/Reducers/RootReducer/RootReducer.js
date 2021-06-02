import { combineReducers } from "redux";

import FetchProductsReducer from "../FetchProductsReducer/FetchProductsReducer";
import ChangeCurrentProduct from '../ChangeCurrentProduct/ChangeCurrentProduct';
import FetchProductStylesReducer from '../FetchProductStylesReducer/FetchProductStylesReducer.';

import CurrentStyleGalleryReducer from '../CurrentStyleGalleryReducer/CurrentStyleGalleryReducer';

import SetMainStyleReducer from '../SetMainStyleReducer/SetMainStyleReducer';
const RootReducer = combineReducers({
  Products: FetchProductsReducer,
  ProductStyles: FetchProductStylesReducer,

  CurrentProductID: ChangeCurrentProduct,

  CurrentStyleGallery: CurrentStyleGalleryReducer,

  MainCurrentStyle: SetMainStyleReducer
});

/* CurrentStyleGalleryReducer  -- changes the style when on mount and on click for main gallery!! */

export default RootReducer;