import { connect } from "react-redux";

import ProductOverview from "../../../../Components/ProductOverview/ProductOverview";

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
  };
};

const mapDispatchToProps = (dispatch) => {};

const ProductOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOverview);

export default ProductOverviewContainer;
