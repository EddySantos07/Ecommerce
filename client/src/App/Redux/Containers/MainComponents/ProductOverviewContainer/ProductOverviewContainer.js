import { connect } from "react-redux";

import ProductOverview from "../../../../Components/ProductOverview/ProductOverview";
import CurrentStyleGalleryAction from '../../../Actions/CurrentStyleGalleryAction/CurrentStyleGalleryAction';

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
    ProductStyles: state.ProductStyles,
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeCurrentStyleGallery: (style) => {
      dispatch(CurrentStyleGalleryAction(style));
    }
  };
};

const ProductOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOverview);

export default ProductOverviewContainer;
