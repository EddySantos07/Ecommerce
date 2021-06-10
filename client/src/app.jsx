import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import ProductContext from './context.jsx';
import './styles/styles.css';

import fetchProductDetails from './FetchData/fetchProductDetails.js';
import fetchRelatedProducts from './FetchData/fetchRelatedProducts.js';
import fetchRelatedStyleData from './FetchData/fetchRelatedStyleData.js';
import fetchQA from './FetchData/fetchQA.js';
import fetchStyles from './FetchData/fetchStyles.js';
import fetchReviews from './FetchData/fetchReviews.js'
import fetchReviewsMetaData from './FetchData/fetchReviewsMetaData.js'

import ProductOverviewContainer from './Redux/Containers/MainComponents/ProductOverviewContainer/ProductOverviewContainer';
// import ProductContainer from './Product/ProductContainer.jsx's
import QAContainer from './QA/QAContainer.jsx'
import RelatedContainer from './Related/RelatedContainer.jsx'
import ReviewContainer from './Reviews/ReviewContainer.jsx'


import { Provider } from "react-redux";

import store from "./Redux/store";

let App = function(props) {

  // STATE HOOKS
  const [currentProductDetails, setCurrentProductDetails] = useState({});
  const [currentProduct, setProduct] = useState("11101"); //using 11101 as the default product
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedStyleData, setrelatedStyleData] = useState([]);
  const [productQA, setProductQA] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [productReviewsMetaData, setProductReviewsMetaData] = useState({});
  const [reviewsSortBy, setReviewsSortBy] = useState('newest'); //set the default reviews to sort by newest
  const [productName, setProductName] = useState("Product Name")


  var updateCurrentProduct = (newProductID) => {
    setProduct(newProductID)
  }


  var changeReviewSortBy = (sortBy) => {
    //sortBy should be a string containing
    //'newest', 'helpful', or 'relevant'
    //console.log('sortBy: ', sortBy)
    fetchReviews(currentProduct, sortBy)
    .then((data) => {
      setProductReviews(data);
    });
  }


  var fetchAPIData = () => {

    //current product details
    fetchProductDetails(currentProduct)
    .then((data) => {
      setProductName(data.name)
      setCurrentProductDetails(data);
    });

    // related products
    fetchRelatedProducts(currentProduct)
    .then((relatedItemsData) => {
      setRelatedItems(relatedItemsData);
    });

    //Questions and Answers
    fetchQA(currentProduct)
    .then((data) => {
      setProductQA(data)
    });

    //Product Styles
    fetchStyles(currentProduct)
    .then((data) => {
      setProductStyles(data)
    });

    //Product Reviews
    fetchReviews(currentProduct, reviewsSortBy)
    .then((data) => {
      setProductReviews(data);
    });

    //Product Reviews Meta Data
    fetchReviewsMetaData(currentProduct)
    .then((data) => {
      // console.log('product review meta data: ', data);
      setProductReviewsMetaData(data);
    });

  };


  useEffect(() => {
    fetchAPIData();
  }, [currentProduct]);


  // PROVIDER AND APP STRUCTURE (CONTAINERS)
  return (
    <ProductContext.Provider value={{
      currentProduct: currentProduct,
      currentProductDetails: currentProductDetails,
      relatedProducts: relatedItems,
      productQA: productQA,
      updateCurrentProduct: updateCurrentProduct,
      productStyles: productStyles,
      productReviews: productReviews,
      changeReviewSortBy: changeReviewSortBy,
      productName: productName,
      productReviewsMetaData: productReviewsMetaData
    }}>
      <div>
        <div id='header'><img id='header-logo'src='https://i.imgur.com/g8hJeOQ.png' alt='cream company logo'/></div>
        <ProductOverviewContainer />
        <RelatedContainer product={currentProductDetails} async/>
        <QAContainer currentProductId={currentProduct} />
        <ReviewContainer currentSort={reviewsSortBy}/>
      </div>
    </ProductContext.Provider>
  )
}


  //RENDER
ReactDOM.render(
  <Provider store={store}>
     <App />
   </Provider>,
  document.getElementById('app')
);