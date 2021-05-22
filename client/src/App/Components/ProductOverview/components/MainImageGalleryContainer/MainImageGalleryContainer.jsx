import { map } from "lodash";
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const HandleStyleChange = (
  stylesObj,
  style_url_obj,
  ChangeCurrentStyle,
  CurrentStyleIndex
) => {
  // console.log(stylesObj.photos, CurrentStyleIndex,'?')

  stylesObj.CurrentStyleIndex = CurrentStyleIndex;
  stylesObj.CurrentStyle = stylesObj.photos[CurrentStyleIndex];

  ChangeCurrentStyle(stylesObj);
};

const HandleRightStyleSlideChange = (
  stylesObj,
  ChangeCurrentStyle
) => {
  console.log(stylesObj, ChangeCurrentStyle);
  if (stylesObj.CurrentStyleIndex + 1 > stylesObj.photos.length) {
    return;
  }

  stylesObj.CurrentStyleIndex = CurrentStyleIndex += 1;
  stylesObj.CurrentStyle = stylesObj.photos[CurrentStyleIndex];

  ChangeCurrentStyle();
};

const HandleLeftStyleSlideChange = (
  stylesObj,
  ChangeCurrentStyle
) => {
  if (stylesObj.CurrentStyleIndex - 1 < stylesObj.photos.length) {
    return;
  }

  stylesObj.CurrentStyleIndex = CurrentStyleIndex -= 1;
  stylesObj.CurrentStyle = stylesObj.photos[CurrentStyleIndex];

  ChangeCurrentStyle();
};

const MainGallery = (styles, ChangeCurrentStyleGallery, CurrentStyleIndex) => {
  let styleUrl = styles.photos[0].url;

  return (
    <>
      <div
        className="LeftArrow"
        onClick={() => {
          HandleLeftStyleSlideChange(
            styles,
            ChangeCurrentStyleGallery,
            CurrentStyleIndex
          );
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
        onClick={() => {
          HandleRightStyleSlideChange(
            styles,
            ChangeCurrentStyleGallery,
            CurrentStyleIndex
          );
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
            <div key={index}>
              <img
                key={index}
                className="MainThumbNails"
                src={element.thumbnail_url}
                onClick={() => {
                  HandleStyleChange(
                    main[0],
                    element,
                    ChangeCurrentStyle,
                    index
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

  let { ChangeCurrentStyleGallery, CurrentStyleGallery } = props;

  let { CurrentStyleIndex } = props.CurrentStyleGallery;

  console.log(props);

  return (
    <div className="MainImageGalleryContainer">
      {MainGallery(
        CurrentStyleGallery,
        ChangeCurrentStyleGallery,
        CurrentStyleIndex
      )}
      {MainImages(styles, ChangeCurrentStyleGallery, CurrentStyleIndex)}
    </div>
  );
};

export default MainImageGalleryContainer;
