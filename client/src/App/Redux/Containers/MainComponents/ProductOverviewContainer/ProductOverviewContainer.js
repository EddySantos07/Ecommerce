import { connect } from "react-redux";

import ProductOverview from "../../../../Components/ProductOverview/ProductOverview";

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
    ProductStyles: state.ProductStyles,
  };
};

// const mapDispatchToProps = (dispatch) => {};

const ProductOverviewContainer = connect(
  mapStateToProps,
  null
)(ProductOverview);

export default ProductOverviewContainer;
