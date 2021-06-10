import Redux from "redux";

const ChangeCurrentProduct = (state = { Product: '11001' }, action) => {
  switch (action.type) {
    case "CHANGE_PRODUCT":
      return { ...action.payload };
    case "CHANGE_PRODUCT_ERR":
      return { ...action.payload };
    default:
      return state;
  }
};

export default ChangeCurrentProduct;