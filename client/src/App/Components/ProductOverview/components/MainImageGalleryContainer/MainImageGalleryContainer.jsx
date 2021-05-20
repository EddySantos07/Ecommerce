import { map } from "lodash";
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const HandleStyleChange = (mainStyle, style_url_obj, ChangeCurrentStyle) => {
  // console.log(mainStyle, "you just clicked on a style!", style_url_obj);

  ChangeCurrentStyle({ photos: [style_url_obj] });
};

const HandleStyleSlideChange = (e) => {
  
};

const MainGallery = (styles) => {
  let styleUrl = styles.photos[0].url;

  return (
    <>
      <div
        className="LeftArrow"
        onClick={(styles) => {
          HandleStyleSlideChange(e);
        }}
      >
        left arrow
      </div>
      <div className="MainImg">
        
        <img className="MainImg" src={styleUrl} />
      </div>
      <div className="ExpandButton"> expand </div>

      <div
        className="RightArrow"
        onClick={(styles) => {
          HandleStyleSlideChange(e);
        }}
      >
        right arrow
      </div>
    </>
  );
};

const MainImages = (styles, ChangeCurrentStyle) => {
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
        {photos.map((element, index) => {
          return (
            <div>
              <img
                key={index}
                className="MainThumbNails"
                src={element.thumbnail_url}
                onClick={() => {
                  HandleStyleChange(main, element, ChangeCurrentStyle);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const MainImageGalleryContainer = (props) => {
  if (
    Object.keys(props.ProductStyles).length === 0 ||
    Object.keys(props.CurrentStyleGallery).length === 0
  ) {
    return <div> Default Prop is active </div>;
  }

  let styles = props.ProductStyles.data.results;

  let { ChangeCurrentStyleGallery, CurrentStyleGallery } = props;

  return (
    <div className="MainImageGalleryContainer">
      {MainImages(styles, ChangeCurrentStyleGallery)}
      {MainGallery(CurrentStyleGallery)}
    </div>
  );
};

export default MainImageGalleryContainer;
