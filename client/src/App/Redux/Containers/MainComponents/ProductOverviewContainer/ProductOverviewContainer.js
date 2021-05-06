import { connect } from "react-redux";
import CurrentMainStyleAction from "../../../Actions/ProductOverviewActions/CurrentMainStylesAction";

import ProductOverview from "../../../../Components/ProductOverview/ProductOverview";

const mapStateToProps = (state) => {

    return {
        Products: state.Products
    }

};

const mapDispatchToProps = (dispatch) => {};

const ProductOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( ProductOverview );

export default ProductOverviewContainer;
