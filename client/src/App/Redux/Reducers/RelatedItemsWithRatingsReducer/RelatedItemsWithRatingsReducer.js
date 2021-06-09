import Redux from "redux";

const RelatedItemsWithRatingsReducer = (state = { Products: {} }, action) => {
  switch (action.type) {
    case "RELATED_ITEMS_WITH_RATINGS":
      return { ...action.payload };
    case "RELATED_ITEMS_WITH_RATINGS_ERR":
      return { ...action.payload };
    default:
      return state;
  }
};

export default RelatedItemsWithRatingsReducer;
