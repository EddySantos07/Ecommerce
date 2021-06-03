import React, { useState, useEffect } from "react";

const HandleOpenDropDown = (open, arraySkus) => {
  if (!open) {
    arraySkus.map((sku, index) => {
      let key = Object.keys(sku);

      let { quantity, size } = sku[key];

      console.log(sku);

      return <div key={index}> {size} </div>;
      setCloseOrOpenDropDown(!open);
    });
  }
  return;
};

const SizeContainer = ({
  productInfo,
  ProductStyles,
  CurrentStyleGallery,
  MainCurrentStyle,
  DefaultProp,
}) => {
  // console.log(ProductStyles);
  // console.log(MainCurrentStyle, 'main current style');

  if (DefaultProp || Object.keys(MainCurrentStyle).length === 0) {
    return (
      <>
        <div className="SelectSizeContainer">
          <div></div>
        </div>
      </>
    );
  }

  let CurrentStyle =
    MainCurrentStyle.data.data.results[MainCurrentStyle.CurrentIndex];

  let { skus } = CurrentStyle;

  let arraySkus = [];

  for (let key in skus) {
    let newSkuObj = { [`${key}`]: skus[key] };

    arraySkus.push(newSkuObj);
  }

  // console.log(arraySkus)

  let [openOrCloseDropDown, setCloseOrOpenDropDown] = useState(false);

  return (
    <>
      <div className="SelectSizeContainer">
        Select Size:
        <button
          onClick={() => {
            HandleOpenDropDown(
              openOrCloseDropDown,
              arraySkus,
              setCloseOrOpenDropDown
            );
          }}
        ></button>

          

      </div>
    </>
  );
};

export default SizeContainer;
