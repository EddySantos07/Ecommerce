import React, {useContext, useState, useEffect} from 'react';
import ProductContext from '../context.jsx';
import RelatedModalWindow from './Related-Modal-Window.jsx';
import StarRating from '../Reviews/Star-Rating.jsx';


var RelatedListCard = ({product, setDisplayModal, setSharedFeatures, setModalProduct}) => {
  const context = useContext(ProductContext);

  const handleProductChange = () => {
    context.updateCurrentProduct(product.id)
  };

  //click handler for x in modal window
  //sets display modal to false and resets the shared features object.
  const handleModalClose = (e) => {
    setDisplayModal(false);
    setSharedFeatures({});
  }

  //creates an object that compares the current product
  //features to the former product features
  var compareProductFeatures = () => {
    var sharedFeatures = {};

    //looks through the features array of the product object (the related item)
    //the API data was incorrect - a value of null for the feature was implied to mean
    //the feature did have a true value
    product.features.forEach((feature) => {
      if (feature.value === null) {
        sharedFeatures[feature.feature] = {
          comparedProductValue: '✓'
        }
      } else {
        sharedFeatures[feature.feature] = {
          //comparedProduct = related product.
          //JSON parse use to remove the quotes around the string.
          comparedProductValue: JSON.parse(feature.value),
        };
      }
    });

    //looks through the feature array of the product currently displayed
    context.currentProductDetails.features.forEach((feature) => {
      if (feature.value === null) {
        sharedFeatures[feature.feature] = {
          currentProductValue: '✓'
        }
      } else {
        sharedFeatures[feature.feature] = {
          currentProductValue: JSON.parse(feature.value),
        };
      }
    })

    setSharedFeatures(sharedFeatures);
    setModalProduct(product);
    setDisplayModal(true);
  }

  const calculateSalePrice = () => {
    if (product.styles.salePrice) {
      return (
        <span className='related-card-sale-price'><strike>{`$${product.styles.price}`}</strike> {`$${product.styles.salePrice}`}</span>
      )
    } else {
      return (
        <div className='related-card-price'>{`$${product.styles.price}`}</div>
      )
    }
  };

  return (
    <div className='related-list-card'>
      <span className="fa fa-star checked" onClick={() => {
        compareProductFeatures();
      } }></span>
      <img className='related-list-card-img' alt='related-image' src={product.styles.photo}/>
      <h3 className='related-card-category'>{product.category}</h3>
      <h2 className='related-card-name' onClick={handleProductChange}>{product.name}</h2>
      {calculateSalePrice()}
      <StarRating
      ratingsList={product.ratings}
      class={'related-card-ratings'}
      dimension={'20px'}
      />
    </div>
  )
}

export default RelatedListCard;