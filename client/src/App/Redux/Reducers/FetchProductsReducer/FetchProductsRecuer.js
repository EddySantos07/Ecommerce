function FetchProductsReducer(state = { Products: [] }, action) {
  switch (action.type) {
    case "PRODUCTS_SUCCESS":
      return { ...state };
    default:
      return state;
  }
}

export default FetchProductsReducer;
