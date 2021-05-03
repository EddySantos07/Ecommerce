import React, { useState, useEffect, useContext } from "react";

import ProductContext from "../context";

import DisplayCurrentProduct from "./components/DisplayCurrentProduct/DisplayCurrentProduct";
import DisplayProductPreview from "./components/DisplayProductPreview/DisplayProductPreview";

import ImageGallery from './components/ImageGallery/ImageGallery';
import CurrentProductDetails from "./components/CurrentProductDetails/CurrentProductDetails";
import SelectStyle from "./components/SelectStyle/SelectStyle";

// import "./styles/styles.css";

let ProductContainer = function (props) {
  const [CurrentProductInfo, setCurrentProductInfo] = useState({});

  const [CurrentStyles, setCurrentStyles] = useState(
    [{defaultProp: true}, {defaultProp: true, photos:[""]}]
  ); /* all the list of products for display */
  const [CurrentStyle, setCurrentStyle] = useState(
    undefined
  ); /* Current product when clicked on in CurrentProducts */

  const [CurrentStyleIndex, setCurrentStyleIndex] = useState(
    0
  ); /* always defaults to the first item/style */



  const context = useContext(ProductContext);

  useEffect(() => {
    /* on component mount will update all the current products and will update the current view / product */

    const currentStyles = context.productStyles;
    const currentProductInfo = context.currentProductDetails;

    console.log(currentStyles, "product details");

    currentStyles.length === 0 ? setCurrentStyles( [{defaultProp: true}, {defaultProp: true}])  : setCurrentStyles(currentStyles);
    // setCurrentStyles(currentStyles);
    setCurrentStyle(currentStyles[0]);

    setCurrentProductInfo(currentProductInfo);
  }, [context.productStyles, context.currentProductDetails]);

  const HandleStyleChange = (e, style, index) => {
    // console.log("you clicked on a style!", style);

    setCurrentStyleIndex(index);
    setCurrentStyle(style);
  };

  const IncrementStyleIndex = (  ) => {

    let Index_Is_Greater_Than_Styles = CurrentStyleIndex === CurrentStyles.length-1 

    if ( Index_Is_Greater_Than_Styles ) {
      return;
    }

    setCurrentStyle( context.productStyles[CurrentStyleIndex += 1] )
    setCurrentStyleIndex( CurrentStyleIndex += 1 );
  }

  const DecrementStyleIndex = () => {

    if (  CurrentStyleIndex === 0 ) {
      return;
    }

    setCurrentStyle( context.productStyles[CurrentStyleIndex -= 1] )
    setCurrentStyleIndex( CurrentStyleIndex -= 1 );
  }

  return (
    <>
      <div id="ProductContainer">
        {/* <DisplayProductPreview
          styles={CurrentProducts}
          changeView={HandleProductChange}
          currentProduct={
            CurrentProductView || { photos: [{ thumbnail_url: "" }] }
          }
        /> */}

        <ImageGallery CurrentStyle={CurrentStyle || {defaultProp: true}} IncrementStyleIndex={IncrementStyleIndex} DecrementStyleIndex={DecrementStyleIndex} indexOfCurrentStyle={CurrentStyleIndex} />

        <CurrentProductDetails
          CurrentProductInfo={
            CurrentProductInfo || {
              original_price: undefined,
              sale_price: undefined,
              default_price: undefined,
              defaultProp: true,
            }
          }
          CurrentProductView={CurrentStyle || { name: "", skus: [] }}
        />

        <SelectStyle CurrentStyles={ CurrentStyles ||  [{defaultProp: true}, {defaultProp: true, photos:[""]}]   } CurrentStyle={CurrentStyle} HandleStyleChange={HandleStyleChange}/>
      </div>
    </>
  );
};

export default ProductContainer;
