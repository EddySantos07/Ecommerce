import React, { useState, useEffect } from "react";

const CheckSize = (sizes) => {
  if (sizes.length === 0) {
    sizes = [{ defaultProp: true, size: "defaultProp" }];
  }

  let { defaultProp } = sizes;

  if (defaultProp) {
    return;
  }

  let oneSize = sizes[0].size;

  if (oneSize === "One Size") {
    return;
  }

  // const [  ] useState()

  return (
    <>
      <select className="selectSizeButton">
        {sizes.map((style, index) => {
          // console.log(style, "styles ");
          let size = style.size;

          if (size === "One Size") {
            return;
          }
          return (
            <option className="SizeDropDownElement" key={index}>
              Size: {size}
            </option>
          );
        })}
      </select>

      <div className="quantityTextContainer"> Quantity </div>
    </>
  );
};


const CurrentProductDetails = ({ CurrentProductInfo, CurrentProductView }) => {
  if (CurrentProductInfo.defaultProp === true) {
    return <div></div>;
  }

  let product = CurrentProductInfo;
  let productStyle = CurrentProductView;

  if (productStyle.sale_price === undefined) {
    productStyle.sale_price = 0;
  }

  let sizes = [];

  if (productStyle.skus !== undefined) {
    for (let key in productStyle.skus) {
      sizes.push(productStyle.skus[key]);
      // console.log(productStyle.skus[key],'key!')
    }
  }

  return (
    <>
      <div className="ProductDetailContainer">
        <div className="readAllReviewsContainer">
          <a href="#review-container-span"> Read All Reviews! </a>
        </div>

        <div>
          <div className="categoryText">
            <h3> Category:</h3> {product.category}
          </div>
          <h1> Product Name: {product.name} </h1>
          <h2 className="priceText">
            {productStyle.sale_price === 0 ||
            productStyle.sale_price === undefined ||
            productStyle.sale_price === null ? (
              <div>
                {" "}
                ${productStyle.default_price ||
                  productStyle.original_price}{" "}
              </div>
            ) : (
              <div>
                {" "}
                <div className="saleNumber"> {productStyle.sale_price} </div>
                <div className="crossedOutOriginalPrice">
                  {" "}
                  {productStyle.original_price ||
                    productStyle.default_price}{" "}
                </div>
              </div>
            )}
          </h2>
          <h2 className="styleText">STYLE > {productStyle.name}</h2>
        </div>

        <div className="styleButtonsContainer">{CheckSize(sizes)}</div>
      </div>
    </>
  );
};




export default CurrentProductDetails;