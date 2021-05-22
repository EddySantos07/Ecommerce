import axios from "axios";
import API_KEY from "../../../../../../config.js";

// /${11001}/styles

const FetchProductStylesAction = (productID) => {
  return (dispatch) => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11004/styles`, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((data) => {
        // console.log(data)
        dispatch({
          type: "PRODUCTS_STYLE_SUCCESS",
          payload: data,
        });
        // console.log(data)
        let initStyle = data.data.results.filter( style => {
          if (style["default?"] === true) {
            return style;
          }
        });

        initStyle[0].CurrentStyleIndex = 0;
        initStyle[0].CurrentStyle = initStyle[0].photos[0];

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