import { map } from "lodash";
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const MainImages = (styles) => {
  let main = styles.filter((style) => {
    let _default = style["default?"];

    if (_default) {
      return style;
    }
  });

  let { photos } = main[0];

  return (
    <>
      <div className="thumbnail_url_container">
        {photos.map((element) => {
          return (
            <div>
              <img src={element.thumbnail_url}></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

const MainImageGalleryContainer = (props) => {
  // console.log(props, 'props')

  if (props.ProductStyles.DefaultProp) {
    return <div> Default Prop is active </div>;
  }

  let styles = props.ProductStyles.data.results;

  return (
    <div className="MainImageGalleryContainer">
      container
      {MainImages(styles)}
      <div className="MainImageGallery"></div>
      <div></div>
    </div>
  );
};

export default MainImageGalleryContainer;
