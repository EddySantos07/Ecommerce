import axios from 'axios';
import API_KEY from '../../../config.js';

var fetchReviews = (productID, sortBy) => {
  //feel free to adjust the get request. You can change:
  //number of pages, number of results

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${productID}&sort=${sortBy}&count=100`,
  {
    headers: {
      Authorization: API_KEY
    }
  })
  .then((data) => {
    // console.log('review data: ', data);
    return data.data.results
  })
  .catch((err) => {
    // console.log(err);
    return err;
  })

}

export default fetchReviews;