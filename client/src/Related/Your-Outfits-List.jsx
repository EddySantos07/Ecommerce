import React, {useState, useContext, useEffect} from 'react';
import ProductContext from '../context.jsx';
import OutfitsCard from './Outfits-Card.jsx';
import Slider from "react-slick";

import '../styles/_slick.scss';
import '../styles/_slickTheme.scss';

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";


var YourOutfitsList = () => {
  const [outfitsList, setOutfitsList] = useState([]); //array containing all outfits selected by user
  const [outfitsListCache, setOutfitsListCache] = useState({11101: false}); //outfits cache object used to check for duplicate entries when adding to outfits list
  const [currentProductDetails, setCurrentProductDetails] = useState({}); //object storing the details of the currently displayed product
  const context = useContext(ProductContext);

  console.log('outfits list cache: ', outfitsListCache);
  console.log('current product: ', context.currentProductDetails);
  // console.warn('current product: ', currentProduct);

  //settings for React-Slick Image Carousel
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    arrows: false,
    // accessibility: true,
    draggable: true
  }

  //Combines the appropriate API data into a single object that is stored in local state
  //The results of three API calls for the current product are needed to create a single product object
  //that contains the details, styles, and ratings.
  useEffect(()=> {
    const currentProduct = context.currentProductDetails;
    const currentProductStyles = context.productStyles;
    const currentRatings = context.productReviewsMetaData.ratings;

    currentProduct.styles = {
      photo: currentProductStyles[0].photos[0].thumbnail_url,
      price: currentProductStyles[0].original_price,
      salePrice: currentProductStyles[0].sale_price,
    }

    currentProduct.ratings = currentRatings;
    setCurrentProductDetails(currentProduct);
  }, [outfitsListCache])


  const addNewOutfit = () => {
        
    //add new product id to cache
    const newOutfitCache = Object.assign({}, outfitsListCache);
    newOutfitCache[currentProductDetails.id] = true;

    setOutfitsListCache(newOutfitCache);

    //only update the outfits list if product id not in cache
    if (!outfitsListCache[currentProductDetails.id]) {
      setOutfitsList([...outfitsList, currentProductDetails])
    };


  };

  const removeOutfit = (product) => {

    //switch the cache value for product id to false so it can be added to the outfits list again later
    const newOutfitCache = Object.assign({}, outfitsListCache);
    newOutfitCache[product.id] = false;
    setOutfitsListCache(newOutfitCache);
    console.warn(outfitsList);

    //find the matching product id and remove it
    const updatedOutfitList = outfitsList.filter((o) => {
      return (
        o.id !== product.id
      )
    });

    setOutfitsList(updatedOutfitList);
  }


  return (
    <>
      <h1 className='outfits-list-title'>Your Outfits</h1>
      <div className='outfits-list'>
        <div className='outfits-list-card'>
          <h2>Add New Outfit</h2>
          <span className="fa fa-plus" onClick={addNewOutfit}></span><br></br>
        </div>
        <Slider {...sliderSettings}>
          {outfitsList.map((outfit) => {
            if (outfit.id !== 11101) {

              return (
                <div className='slick-outfits'>
                  {<OutfitsCard
                  key={outfit.id}
                  product={outfit}
                  removeOutfit={removeOutfit} />}
                </div>
              )
            }
          })}
        </Slider>
      </div>
    </>
  )

}

export default YourOutfitsList;