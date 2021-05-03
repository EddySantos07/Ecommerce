import axios from 'axios';
import API_KEY from '../../../config.js';

var fetchProductDetails = (productID) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}`,
  {
    headers: {
      Authorization: API_KEY
    }
  })
  .then((data) => {
    // console.log(data, 'product');
    return data.data;
  })
  .catch((err) => {
    // console.log(err);
    return err;
  })

}

export default fetchProductDetails;