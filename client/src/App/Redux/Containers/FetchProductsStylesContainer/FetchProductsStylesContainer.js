import { connect } from "react-redux";


const mapStateToProps = (state) => {

    return {
        ProductStyles: state.ProductStyles
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        FetchProductsStylesContainer: 
    }
};

const FetchProductsStylesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( ProductOverview );

export default FetchProductsStylesContainer;