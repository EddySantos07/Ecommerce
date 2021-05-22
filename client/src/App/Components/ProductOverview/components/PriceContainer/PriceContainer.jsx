import React from "react";

const filterPrice = ([ProductInfo], CurrentStyle) => {
  if (typeof CurrentStyle.sale_price === "number") {
    console.log(CurrentStyle.sale_price, "in if");
    return (
      <div>
        <h3> Sale Price: {CurrentStyle.sale_price} </h3>
        <h3>
          Regular Price:
          {CurrentStyle.original_price !== undefined ||
          CurrentStyle.original_price !== null
            ? CurrentStyle.original_price
            : ProductInfo.default_price}
        </h3>
      </div>
    );
  }

  return (
    <h3>
      $
      {CurrentStyle.original_price !== undefined ||
      CurrentStyle.original_price !== null
        ? CurrentStyle.original_price
        : ProductInfo.default_price}
    </h3>
  );
};

const PriceContainer = ({
  productInfo,
  ProductStyles,
  CurrentStyleGallery,
}) => {
  if (
    productInfo === undefined ||
    ProductStyles === undefined ||
    Object.keys(CurrentStyleGallery).length === 0
  ) {
    return <div className="PriceContainer">PriceContainer</div>;
  }

  return (
    <div className="PriceContainer">
      {" "}
      {filterPrice(productInfo, CurrentStyleGallery)}
    </div>
  );
};

export default PriceContainer;
