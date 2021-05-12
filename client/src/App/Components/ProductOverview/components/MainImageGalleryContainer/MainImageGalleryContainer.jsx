import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const MainImages = (styles) => {
  let main = styles.filter((style) => {
    let _default = style["default?"];

    if (_default) {
      return style;
    }
  });

  console.log(main);
  return <div></div>;
};

const MainImageGalleryContainer = (props) => {

  if (props.DefaultProp) {
    return <div> Default Prop is active </div>
  }

  console.log(props)

  // let styles = props.ProductStyles.data.results || [];

  return (
    <div className="MainImageGalleryContainer">
      container
      {/* {MainImages(styles)} */}
      <div className="MainImageGallery"></div>
      <div></div>
    </div>
  );
};

export default MainImageGalleryContainer;
