import React from "react";


const filterPrice = ([ProductInfo], ProductStyles, CurrentStyle) => {


    console.log(ProductInfo, ProductStyles)

    let price = 0;

    return <h3> {price} </h3>

}

const PriceContainer = ({ productInfo, ProductStyles, CurrentStyleGallery }) => {
  if (productInfo === undefined || ProductStyles === undefined) {
    return <div className="PriceContainer">PriceContainer</div>
  }

//   console.log(productInfo[0]);
  return (
    <div className="PriceContainer">
      {" "}
      {filterPrice(productInfo, ProductStyles, CurrentStyleGallery)}
    </div>
  );
};

export default PriceContainer;
