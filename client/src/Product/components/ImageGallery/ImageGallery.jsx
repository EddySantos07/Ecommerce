import React, { useState, useEffect } from "react";

const ImageGallery = ({ CurrentStyle, IncrementStyleIndex , DecrementStyleIndex , indexOfCurrentStyle }) => {
  // have a state for pop up modal

  // have some arrows to scroll through the other styles

  // have logic where the index to the next style in the arr is in main component!

  const prop = CurrentStyle.defaultProp;

  if (prop) {
    return <div> </div>;
  }

  const { url } = CurrentStyle.photos[0]; // url not thumbnail! 

  return (
    <>
      <div className="ImageGalleryContainer">
        <div
          className="leftArrow"
          onClick={() => {
            /* decrement index  */
            DecrementStyleIndex();
          }}
          
        >left arrow</div>

        <div className="MainStyleImg" >
          <img src={url} alt="main style image"/>
        </div>

        <div
          className="rightArrow"
          onClick={() => {
            /*  increment index */
            IncrementStyleIndex();
          }}
        >
          {" "}
          right arrow
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
