import axios from 'axios';
import API_KEY from '../../../../../../config';

var fetchReviewsMetaData = (productID) => {
  //feel free to adjust the get request. You can change:
  //number of pages, number of results

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${productID}`,
  {
    headers: {
      Authorization: API_KEY
    }
  })
  .then((data) => {
    // console.log('review Metadata: ', data);
    return data.data
  })
  .catch((err) => {
    // console.log(err);
    return err;
  })

}

export default fetchReviewsMetaData;