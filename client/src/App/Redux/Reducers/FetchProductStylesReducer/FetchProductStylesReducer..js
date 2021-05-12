import Redux from "redux";

const FetchProductStylesReducer = (state = { Products: {} }, action) => {
  switch (action.type) {
    case "PRODUCTS_STYLE_SUCCESS":
      return { ...action.payload };
    case "PRODUCTS_STYLE_FAILED":
      return { ...action.payload };
    default:
      return state;
  }
};

export default FetchProductStylesReducer;