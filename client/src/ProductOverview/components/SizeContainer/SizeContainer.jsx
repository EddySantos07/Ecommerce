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
  let [CurrentSizeQuantity, setQuantity] = useState("");
  let [trackCurrentSize, setSize] = useState(0);

  return (
    <>
      <div className="SelectSizeContainer">
        <button
          className="SelectSizeButton"
          onClick={() => {
            setCloseOrOpenDropDown(!openOrCloseDropDown);
          }}
        >
          Select Size{" "}
        </button>

        <div className="SizeContainer">
          {openOrCloseDropDown ? (
            arraySkus.map((sku, index) => {
              let key = Object.keys(sku);

              let { quantity, size } = sku[key];

              return (
                <div
                  key={index}
                  onClick={() => {
                    setQuantity({
                      min: 0,
                      max: quantity,
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
        </div>
        <div className="QuantityButton ">
          {" "}
          - Quantity{" "}
          {CurrentSizeQuantity.min >= CurrentSizeQuantity.max
            ? `max quantity - ${CurrentSizeQuantity.max}`
            : trackCurrentSize}
          <button
            onClick={() => {
              if (
                trackCurrentSize >= CurrentSizeQuantity.max ||
                CurrentSizeQuantity.max === undefined
              ) {
                return;
              }

              let incrementSize = (trackCurrentSize += 1);
              setSize(incrementSize);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (
                trackCurrentSize <= CurrentSizeQuantity.min ||
                CurrentSizeQuantity.max === undefined
              ) {
                return;
              }

              let incrementSize = (trackCurrentSize -= 1);
              setSize(incrementSize);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default SizeContainer;
