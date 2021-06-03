import React, { useState, useEffect } from "react";

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
  let [CurrentSizeQuantity, setQuantity] = useState("Quantity");

  return (
    <>
      <div className="SelectSizeContainer">
        <button
          onClick={() => {
            setCloseOrOpenDropDown(!openOrCloseDropDown);
          }}
        >
          Select Size{" "}
        </button>

        {openOrCloseDropDown ? (
          arraySkus.map((sku, index) => {
            let key = Object.keys(sku);

            let { quantity, size } = sku[key];

            console.log(sku);

            return (
              <div
                key={index}
                onClick={() => {
                  setQuantity({
                    min: 0,
                    max: size,
                  });
                }}
              >
                {" "}
                {size}{" "}
              </div>
            );
          })
        ) : (
          <div> </div>
        )}

        <button>- {CurrentSizeQuantity}</button>
      </div>
    </>
  );
};

export default SizeContainer;
