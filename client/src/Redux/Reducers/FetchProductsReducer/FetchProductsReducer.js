import Redux from "redux";

const FetchProductsReducer = (state = { Products: {} }, action) => {
  switch (action.type) {
    case "PRODUCTS_SUCCESS":
      return { ...action.payload };
    case "PRODUCTS_FAILED":
      return { ...action.payload };
    default:
      return state;
  }
};

export default FetchProductsReducer;
