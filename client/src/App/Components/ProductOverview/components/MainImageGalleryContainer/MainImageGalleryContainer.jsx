import { map } from "lodash";
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const HandleStyleChange = (
  mainStyle,
  style_url_obj,
  ChangeCurrentStyle,
  CurrentStyleIndex
) => {
  // console.log(mainStyle, "you just clicked on a style!", style_url_obj);

  ChangeCurrentStyle({ photos: [style_url_obj], CurrentStyleIndex });
};

const HandleStyleSlideChange = (e) => {};

const MainGallery = (styles, CurrentStyleIndex) => {
  let styleUrl = styles.photos[0].url;

  return (
    <>
      <div
        className="LeftArrow"
        onClick={(styles) => {
          HandleStyleSlideChange(styles, CurrentStyleIndex);
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
          HandleStyleSlideChange(styles, CurrentStyleIndex);
        }}
      >
        right arrow
      </div>
    </>
  );
};

const MainImages = (styles, ChangeCurrentStyle, CurrentStyleIndex) => {
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
                  HandleStyleChange(
                    main,
                    element,
                    ChangeCurrentStyle,
                    CurrentStyleIndex
                  );
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

  let { ChangeCurrentStyleGallery, CurrentStyleGallery, CurrentStyleIndex } =
    props;

  // console.log(CurrentStyleGallery);

  return (
    <div className="MainImageGalleryContainer">
      {MainGallery(CurrentStyleGallery, CurrentStyleIndex)}
      {MainImages(styles, ChangeCurrentStyleGallery, CurrentStyleIndex)}
    </div>
  );
};

export default MainImageGalleryContainer;
