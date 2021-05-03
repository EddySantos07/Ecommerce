import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';
import ReviewListTile from './ReviewListTile.jsx';


let ReviewList = (props) => {
  const context = useContext(ProductContext);

  const [reviews, setReviews] = useState([]);
  const [numReviews, setnumReviews] = useState(2);

  useEffect(() => {
    const reviews = context.productReviews;
    setReviews(reviews);
    setnumReviews(2);
  }, [context.productReviews])

  const HandleClick = (e) => {
    setnumReviews(numReviews+2);
  }

  const HandleReviewClick = (e) => {
    props.setShowReviewForm(!props.showReview);
  }

  return (

    <div className='ReviewListandFooter'>

      <div className='ReviewList'>
        {reviews.slice(0, numReviews).map((review) => <ReviewListTile className='ReviewListTile' review={review} id={review.id}/>)}
      </div>

      <div className='ReviewListFooter'>
        {numReviews < reviews.length && <button onClick={HandleClick}>More Reviews</button>}
        <button className='addReview' onClick={HandleReviewClick}>Write Review</button>
      </div>

    </div>





  )


}

export default ReviewList;