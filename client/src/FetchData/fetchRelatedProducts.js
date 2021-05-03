import axios from 'axios';
import API_KEY from '../../../config.js';
import fetchProductDetails from './fetchProductDetails.js';
import fetchStyles from './fetchStyles.js';
import fetchReviewsMetaData from './fetchReviewsMetaData.js';


var fetchRelatedProducts = (productID) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/related`,
  {
    headers: {
      Authorization: API_KEY
    }
  })
  .then((data) => {
    var allRelatedItems = [];

    data.data.forEach((item) => {
      allRelatedItems.push(fetchProductDetails(item))
    })

    return Promise.all(allRelatedItems);
  })
  .then((allRelatedItems) => {
    var itemsWithStyle = [];

    allRelatedItems.forEach((product) => {
      var p = new Promise((resolve, reject) => {
        fetchStyles(product.id)
        .then((styleList) => {
          product.styles = {
            photo: styleList[0].photos[0].url,
            price: styleList[0].original_price,
            salePrice: styleList[0].sale_price
          }
          resolve(product)
        })
      })

      itemsWithStyle.push(p);
    })

    return Promise.all(itemsWithStyle);

  })
  .then((allRelatedWithStyle) => {

    var relatedItemsWithRatings = [];

    allRelatedWithStyle.forEach((product) => {
      var p = new Promise((resolve, reject) => {
        fetchReviewsMetaData(product.id)
        .then((metaReviewList) => {
          product.ratings = metaReviewList.ratings
          resolve(product);
        })
      })
      relatedItemsWithRatings.push(p);
    })
    return Promise.all(relatedItemsWithRatings);

  })
  .catch((err) => {
    // console.warn(err);
    return err;
  })

}

export default fetchRelatedProducts;
