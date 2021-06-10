import axios from "axios";
import API_KEY from "../../../../../../config";
import fetchProductDetails from "./FetchProductDetails";
import fetchStyles from "./fetchStyles.js";
import fetchReviewsMetaData from "./FetchReviewsMetaDataAction";

var fetchRelatedProducts = async (productID) => {
  return (dispatch) => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/related`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      .then((data) => {
        var allRelatedItemsArray = [];

        data.data.forEach((item) => {
          allRelatedItemsArray.push(fetchProductDetails(item));
        });

        return Promise.all(allRelatedItemsArray);
      })
      .then((allRelatedItems) => {
        var itemsWithStyle = [];

        allRelatedItems.forEach((product) => {
          var p = new Promise((resolve, reject) => {
            fetchStyles(product.id).then((styleList) => {
              product.styles = {
                photo: styleList[0].photos[0].url,
                price: styleList[0].original_price,
                salePrice: styleList[0].sale_price,
              };
              resolve(product);
            });
          });

          itemsWithStyle.push(p);
        });

        return Promise.all(itemsWithStyle);
      })
      .then((allRelatedWithStyle) => {
        var relatedItemsWithRatingsArr = [];

        allRelatedWithStyle.forEach((product) => {
          var p = new Promise((resolve, reject) => {
            fetchReviewsMetaData(product.id).then((metaReviewList) => {
              product.ratings = metaReviewList.ratings;
              resolve(product);
            });
          });
          relatedItemsWithRatingsArr.push(p);
        });

        let relatedItemsWithRatings = Promise.all(relatedItemsWithRatingsArr);

        dispatch({
          type: "RELATED_ITEMS_WITH_RATINGS",
          payload: relatedItemsWithRatings,
        });
      })
      .catch((err) => {
        dispatch({ payload: "RELATED_ITEMS_WITH_RATINGS_ERR", payload: err });
      });
  };
};

export default fetchRelatedProducts;
