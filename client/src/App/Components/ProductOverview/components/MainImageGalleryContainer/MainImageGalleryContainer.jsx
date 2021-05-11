import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const MainImageGalleryContainer = ({ Products }) => {
    let products = Products.data || [];

    console.log(products)

  return (
    <div className="MainImageGalleryContainer">
      container
      <div className="MainImageGallery" ></div>
      <div></div>
    </div>
  );
};

export default MainImageGalleryContainer;
