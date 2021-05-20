import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainImageGallery from "../../Redux/Containers/MainComponents/ProductOverviewContainer/CurrentStyleGalleryContainer/CurrentStyleGalleryContainer";

const ProductOverview = (props) => {
  let { Products } = props;
  let { ProductStyles } = props;

  if (Object.keys(ProductStyles).length == 0) {
    ProductStyles = {
      DefaultProp: true,
      ProductStyles: { data: { results: [false] } },
    };
  }

  return (
    <div className="ProductOverviewContainer">
      <MainImageGallery />

      <div className="LinkReviewsContainer">ReviewsContainer</div>
      <div className="StyleNameContainer">StyleNameContainer</div>
      <div className="PriceContainer">PriceContainer</div>
      <div className="ThumbnailStyleSelectorContainer">
        ThumbnailStyleSelectorContainer
      </div>
      <div className="SelectSizeContainer">SelectSizeContainer</div>
      <div className="AddToCartContainer">AddToCartContainer</div>
      <div className="StyleInfoContainer">StyleInfoContainer</div>
    </div>
  );
};

export default ProductOverview;
