import React from "react";

const HandleThumbnailStyleChange = (  stylesObj, ChangeCurrentStyle) => {
  console.log(  stylesObj, ' style')

  let CurrentStyleIndex = 0; 

  stylesObj.CurrentStyleIndex = CurrentStyleIndex;
  stylesObj.CurrentStyle = stylesObj.photos[CurrentStyleIndex];

  ChangeCurrentStyle(stylesObj);

};

const StyleSelector = ({ productInfo, ProductStyles, CurrentStyleGallery, ChangeCurrentStyleGallery }) => {
  if (
    productInfo === undefined ||
    ProductStyles === undefined ||
    Object.keys(CurrentStyleGallery).length === 0
  ) {
    return (
      <div className="ThumbnailStyleSelectorContainer">
        ThumbnailStyleSelectorContainer
      </div>
    );
  }



  let FilteredProductStyles = ProductStyles.data.results.filter(
    (style, index) => {
      if (index !== 7) {
        return style;
      }
      return;
    }
  );

  return (
    <div className="ThumbnailStyleSelectorContainer Select_ThumbNail_Styles">
      {FilteredProductStyles.map((Style) => {
        let { thumbnail_url } = Style.photos[0];

        return (
          <div className="Select_ThumbNail_Styles_Div">
            <img
              className="Select_ThumbNail_Style_Img"
              src={thumbnail_url}
              onClick={() => {
                HandleThumbnailStyleChange(Style, ChangeCurrentStyleGallery);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StyleSelector;
