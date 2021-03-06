import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const HandleStyleChange = (
  stylesObj,
  style_url_obj,
  ChangeCurrentStyle,
  CurrentStyleIndex
) => {
  // console.log(stylesObj)

  stylesObj.CurrentStyleIndex = CurrentStyleIndex;
  stylesObj.CurrentStyle = stylesObj.photos[CurrentStyleIndex];

  ChangeCurrentStyle(stylesObj);
};

const HandleRightStyleSlideChange = (stylesObj, ChangeCurrentStyle) => {
  if (stylesObj.CurrentStyleIndex + 1 > stylesObj.photos.length - 1) {
    return;
  }

  stylesObj.CurrentStyleIndex = stylesObj.CurrentStyleIndex += 1;
  stylesObj.CurrentStyle = stylesObj.photos[stylesObj.CurrentStyleIndex];

  ChangeCurrentStyle(stylesObj);
};

const HandleLeftStyleSlideChange = (stylesObj, ChangeCurrentStyle) => {
  // console.log(stylesObj, stylesObj.CurrentStyleIndex - 1)
  if (stylesObj.CurrentStyleIndex - 1 < 0) {
    return;
  }

  stylesObj.CurrentStyleIndex = stylesObj.CurrentStyleIndex -= 1;
  stylesObj.CurrentStyle = stylesObj.photos[stylesObj.CurrentStyleIndex];

  ChangeCurrentStyle(stylesObj);
};

const MainGallery = (styles, ChangeCurrentStyleGallery, CurrentStyleIndex) => {
  let styleUrl = styles.CurrentStyle.url;

  return (
    <>
      <div className="LeftArrowContainer">
        <div
          className="arrow LeftArrow"
          onClick={() => {
            HandleLeftStyleSlideChange(
              styles,
              ChangeCurrentStyleGallery,
              CurrentStyleIndex
            );
          }}
        ></div>
      </div>
      <div className="MainImg">
        <img className="MainImg" src={styleUrl} />
      </div>
      <div className="ExpandButtonContainer">
        {" "}
        <div className="ExpandButton"> </div>{" "}
      </div>

      <div className="RightArrowContainer">
        <div
          className="arrow RightArrow"
          onClick={() => {
            HandleRightStyleSlideChange(
              styles,
              ChangeCurrentStyleGallery,
              CurrentStyleIndex
            );
          }}
        ></div>
      </div>
    </>
  );
};

const MainImages = (style, ChangeCurrentStyle, CurrentStyleIndex) => {
  return (
    <>
      <div className="thumbnail_url_container">
        {style.photos.map((element, index) => {
          return (
            <div key={index}>
              <img
                key={index}
                className="MainThumbNails"
                src={element.thumbnail_url}
                onClick={() => {
                  HandleStyleChange(style, element, ChangeCurrentStyle, index);
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

  let { ChangeCurrentStyleGallery, CurrentStyleGallery, MainCurrentStyle } =
    props;

  let { CurrentStyleIndex } = props.CurrentStyleGallery;

  useEffect(() => {}, [props.CurrentStyleGallery]);

  return (
    <div className="MainImageGalleryContainer">
      {MainGallery(
        CurrentStyleGallery,
        ChangeCurrentStyleGallery,
        CurrentStyleIndex
      )}
      {MainImages(
        CurrentStyleGallery,
        ChangeCurrentStyleGallery,
        CurrentStyleIndex
      )}
    </div>
  );
};

export default MainImageGalleryContainer;
