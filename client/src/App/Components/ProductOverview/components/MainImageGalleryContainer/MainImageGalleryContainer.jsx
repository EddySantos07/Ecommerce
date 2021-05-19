import { map } from "lodash";
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const MainGallery = (styles) => {
  let styleUrl = styles.photos[0].url;

  return (
    <>
      <div className="LeftArrow">left arrow</div>
      <div className="MainImg">
        {" "}
        <img src={styleUrl} />{" "}
      </div>
      <div className="ExpandButton"> expand </div>
      <div className="RightArrow"> right arrow </div>
    </>
  );
};

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
              <img className="MainThumbNails" src={element.thumbnail_url} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const MainImageGalleryContainer = (props) => {
  // console.log(props, 'props')

  if (
    Object.keys(props.ProductStyles).length === 0 ||
    Object.keys(props.CurrentStyleGallery).length === 0
  ) {
    return <div> Default Prop is active </div>;
  }

  let styles = props.ProductStyles.data.results;

  return (
    <div className="MainImageGalleryContainer">
      {MainImages(styles)}
      {MainGallery(props.CurrentStyleGallery)}
    </div>
  );
};

export default MainImageGalleryContainer;
