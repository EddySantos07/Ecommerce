import { connect } from "react-redux";
import FetchProductStylesAction from '../../Actions/FetchProductStylesAction/FetchProductStylesAction';

import FetchProductStyles from '../../../Components/FetchProductStyles/FetchProductStyles';

const mapStateToProps = (state) => {
   
    return {
        CurrentProductID: state.CurrentProductID
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        FetchProductsStylesAPI: (ProductID) => {
            dispatch(FetchProductStylesAction(ProductID));
        } 
    }
};

const FetchProductsStylesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( FetchProductStyles );

export default FetchProductsStylesContainer;