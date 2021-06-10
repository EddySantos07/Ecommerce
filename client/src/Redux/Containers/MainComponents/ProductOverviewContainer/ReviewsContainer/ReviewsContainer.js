import { connect } from "react-redux";

import ReviewsContainer from '../../../../../ProductOverview/components/ReviewsContainer/ReviewsContainer';

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
    ProductStyles: state.ProductStyles,
  };
};

// const mapDispatchToProps = (dispatch) => {};

const LinkReviewContainer = connect(
  mapStateToProps,
  null
)(ReviewsContainer);

export default LinkReviewContainer;