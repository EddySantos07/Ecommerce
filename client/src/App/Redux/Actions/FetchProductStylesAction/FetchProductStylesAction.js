import axios from "axios";
import API_KEY from "../../../../../../config.js";

// /${11001}/styles

const FetchProductStylesAction = (productID) => {
  return (dispatch) => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((data) => {
        dispatch({
          type: "PRODUCTS_STYLE_SUCCESS",
          payload: data,
        });

        let initStyle = data.data.results.filter( style => {
          if (style["default?"] === true) {
            return style;
          }
        })
        
        dispatch({
          type: "SWITCH_STYLE_GALLERY",
          payload: initStyle[0]
        })
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "PRODUCTS_STYLE_FAILED",
          payload: err,
        });
      });
  };
};

export default FetchProductStylesAction;