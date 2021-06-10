import { connect } from "react-redux";

import ProductOverview from "../../../../ProductOverview/ProductOverview";
import CurrentStyleGalleryAction from '../../../Actions/CurrentStyleGalleryAction/CurrentStyleGalleryAction';
import SetMainStyleAction from '../../../Actions/SetMainStyleAction/SetMainStyleAction';

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
    ProductStyles: state.ProductStyles,
    state,
    MainCurrentStyle: state.MainCurrentStyle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeCurrentStyleGallery: (style) => {
      dispatch(CurrentStyleGalleryAction(style));
    },
    SetMainStyle: ( style ) => {
      dispatch(SetMainStyleAction(style));
    }
  };
};

const ProductOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOverview);

export default ProductOverviewContainer;
