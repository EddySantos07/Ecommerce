import { connect } from "react-redux";

import CurrentStyleGalleryAction from '../../../../Actions/CurrentStyleGalleryAction/CurrentStyleGalleryAction';

import MainImageGalleryContainer from '../../../../../Components/ProductOverview/components/MainImageGalleryContainer/MainImageGalleryContainer';

const mapStateToProps = (state) => {
  return  {
    CurrentStyleGallery: state.CurrentStyleGallery,
    ProductStyles: state.ProductStyles,
    MainCurrentStyle: state.MainCurrentStyle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeCurrentStyleGallery: (style) => {
      dispatch(CurrentStyleGalleryAction(style));
    }
  };
};

const MainImageGallery = connect(mapStateToProps, mapDispatchToProps)( MainImageGalleryContainer );

export default MainImageGallery;