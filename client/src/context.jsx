import React, {createContext} from 'react';

const ProductContext = React.createContext({
  currentProductDetails: {},
  updateCurrentProductDetails: (currentProductDetail) => {},
  currentProduct: 0,
  updateCurrentProduct: (newProductID) => {},
  relatedProducts: [],
  updateRelatedProducts: () => {},
  productQA: [],
  updateProductQA: () => {},
  productStyles: [],
  productReviews: [],
  changeReviewSortBy: (sortby) => {},
  productName: "",
  productReviewsMetaData: {}
});

export default ProductContext;