import { connect } from "react-redux";

import RelatedContainer from "../../../../Components/Related/RelatedContainer";

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const RelatedProductsContainer = connect(mapStateToProps,null)();

export default RelatedProductsContainer;
