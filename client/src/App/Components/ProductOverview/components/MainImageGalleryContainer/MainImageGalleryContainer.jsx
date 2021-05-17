import { map } from "lodash";
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const MainGallery = () => {
  
}

const MainImages = (styles) => {
  let not_main = [];

  let main = styles.filter((style) => {
    let _default = style["default?"];

    if (_default) {
      return style;
    } else {
      not_main.push(style);
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
      {/* <div className="MainGalleryConatiner">
        {not_main.map((element) => {
          console.log(element)
          return (
            <div>
              <img className="MainGalleryThumbNail" src={element.url}/>
              
            </div>
          );
        })}
      </div> */}
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
      
    </div>
  );
};

export default MainImageGalleryContainer;
