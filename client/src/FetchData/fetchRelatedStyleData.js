import axios from 'axios';
import API_KEY from '../../../config.js';
import fetchStyles from './fetchStyles.js';


var fetchRelatedStyleData = (listOfProducts) => {
  var allThumbnails = [];

  listOfProducts.forEach((product) => {
    allThumbnails.push(fetchStyles(product.id))
  });

  return Promise.all(allThumbnails);

}

export default fetchRelatedStyleData;