import React from "react";

const HandleThumbnailStyleChange = (
  MainCurrentStyleObj,
  SetMainCurrentStyle,
  index,
  ChangeCurrentStyleGallery
) => {
  MainCurrentStyleObj.CurrentIndex = index;

  let StartingPhoto = MainCurrentStyleObj.data.data.results[index].photos[0];

  ChangeCurrentStyleGallery({
    CurrentStyle: StartingPhoto,
    CurrentStyleIndex: 0,
    ...MainCurrentStyleObj.data.data.results[index],
  });

  SetMainCurrentStyle(MainCurrentStyleObj);
};

const StyleSelector = ({
  productInfo,
  ProductStyles,
  CurrentStyleGallery,
  ChangeCurrentStyleGallery,
  MainCurrentStyle,
  SetMainStyle,
}) => {
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
      {FilteredProductStyles.map((Style, index) => {
        let { thumbnail_url } = Style.photos[0];

        return (
          <div className="Select_ThumbNail_Styles_Div">
            <img
              className="Select_ThumbNail_Style_Img"
              src={thumbnail_url}
              onClick={() => {
                HandleThumbnailStyleChange(
                  MainCurrentStyle,
                  SetMainStyle,
                  index,
                  ChangeCurrentStyleGallery
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StyleSelector;
