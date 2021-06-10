import { connect } from "react-redux";

import FetchProducts from "../../../Components/FetchProducts/FetchProducts";

import FetchProductsAction from "../../Actions/FetchProductsAction/FetchProductsAction";


const mapStateToProps = (state) => {
  return  {
    Products: state.Products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    FetchProductsAPI: (ProductID) => {
      dispatch(FetchProductsAction(ProductID));
    }
  };
};

const FetchProductsContainer = connect(mapStateToProps, mapDispatchToProps)( FetchProducts );

export default FetchProductsContainer;


