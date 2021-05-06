import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

const FetchProducts = (props) => {

  useEffect(() => {
   props.FetchProductsAPI(1);
  },[]);
  return <div></div>;
};

// class FetchProducts extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(this.props, "props", this.state, this);
//     return <div></div>;
//   }
// }

export default FetchProducts;
