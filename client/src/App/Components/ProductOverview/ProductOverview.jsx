import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainImageGallery from "../../Redux/Containers/MainComponents/ProductOverviewContainer/CurrentStyleGalleryContainer/CurrentStyleGalleryContainer";
import LinkReviewsContainer from "../../Redux/Containers/MainComponents/ProductOverviewContainer/ReviewsContainer/ReviewsContainer";
import StyleName from "./components/StyleName/StyleName";
import PriceContainer from "./components/PriceContainer/PriceContainer";
import StyleSelector from "./components/StyleSelector/StyleSelector";

const filterProducts = (Products, ProductStyles) => {
  return Products.data.filter((Product) => {
    if (Number(ProductStyles.data.product_id) === Number(Product.id)) {
      return Product;
    }
  });
};

const ProductOverview = (props) => {
  let {
    Products,
    ProductStyles,
    ChangeCurrentStyleGallery,
    state,
    MainCurrentStyle,
  } = props;

  let productInfo;

  if (
    props.Products.data !== undefined &&
    props.ProductStyles.data !== undefined
  ) {
    productInfo = filterProducts(Products, ProductStyles);
  }

  if (Object.keys(ProductStyles).length == 0) {
    ProductStyles = {
      DefaultProp: true,
      ProductStyles: { data: { results: [false] } },
    };
  }

  let { CurrentStyleGallery } = props.state;

  console.log(ProductStyles, "product styles");

  return (
    <div className="ProductOverviewContainer">
      <MainImageGallery />

      <LinkReviewsContainer />

      <StyleName productInfo={productInfo} />

      <PriceContainer
        productInfo={productInfo}
        ProductStyles={ProductStyles}
        CurrentStyleGallery={CurrentStyleGallery}
      />

      <StyleSelector
        productInfo={productInfo}
        ProductStyles={ProductStyles}
        CurrentStyleGallery={CurrentStyleGallery}
        ChangeCurrentStyleGallery={ChangeCurrentStyleGallery}
        MainCurrentStyle={MainCurrentStyle}
      />
      <div className="SelectSizeContainer">SelectSizeContainer</div>
      <div className="AddToCartContainer">AddToCartContainer</div>
      <div className="StyleInfoContainer">StyleInfoContainer</div>
    </div>
  );
};

export default ProductOverview;
