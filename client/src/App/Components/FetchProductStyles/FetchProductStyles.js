import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

const FetchProductStyles = (props) => {

  // console.log(props)

  let { FetchProductsStylesAPI } = props
  let { CurrentProductID } = props;
 
  useEffect(() => {
    FetchProductsStylesAPI( CurrentProductID );
  },[]);
  return <div></div>;
};

export default FetchProductStyles;