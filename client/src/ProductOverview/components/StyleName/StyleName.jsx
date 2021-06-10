import React from "react";

const StyleName = ({ productInfo }) => {
  if (productInfo === undefined) {
    return <div className="StyleNameContainer"></div>;
  }

//   console.log(productInfo[0]);
  return (
    <div className="StyleNameContainer">
      {" "}
      <h3> {productInfo[0].category} </h3>
      <h1>{productInfo[0].name}</h1>
    </div>
  );
};

export default StyleName;
