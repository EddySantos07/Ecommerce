import { connect } from 'react-redux';

import FetchProducts from '../../../Components/FetchProducts/FetchProducts';

import FetchProductsAction from '../../Actions/FetchProductsAction/FetchProductsAction';

const mapDispatchToProps = (dispatch) => ({
    
    FetchProductsAPI: (ProductID) => {
        dispatch(FetchProductsAction(ProductID));
    }
});

const FetchProductsConnect = connect(null, mapDispatchToProps)(FetchProducts)

export default FetchProductsConnect;