import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

const FetchProducts = (props) => {
  console.log(props,'fetch products')
  useEffect(() => {
   props.FetchProductsAPI(1);
  },[]);
  return <div></div>;
};

export default FetchProducts;
