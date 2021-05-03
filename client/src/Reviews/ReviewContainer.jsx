import React, { useContext, useEffect, useState } from "react";
// import './styles/ReviewStyles.css';
import ReviewListDiv from "./ReviewListDiv.jsx";
import ProductContext from "../context.jsx";
import ReviewBreakdown from "./ReviewBreakdown.jsx";
import ReviewModal from "./ReviewModal";
import StarRating from "./Star-Rating.jsx";

let ReviewContainer = function (props) {
  const context = useContext(ProductContext);

  const [ReviewMeta, setReviewMeta] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const reviewMeta = context.productReviewsMetaData;
    setReviewMeta(reviewMeta);
  }, [context.productReviewsMetaData]);

  const closeForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  // console.log('METADATA: ', context.productReviewsMetaData);
  // console.log('Check if true: ', context.productReviewsMetaData.characteristics)

  return (
    <>
      <span id="review-container-span"></span>
      <div className="review-container">
        <h3>RATINGS & REVIEWS</h3>

        {context.productReviews && context.productReviews.length && (
          <ReviewListDiv
            setShowReviewForm={setShowReviewForm}
            showReview={showReviewForm}
            currentSort={props.reviewsSortBy}
          />
        )}

        {ReviewMeta && ReviewMeta.ratings && (
          <ReviewBreakdown data={ReviewMeta} />
        )}

        <ReviewModal open={showReviewForm} closeForm={closeForm} />
      </div>
    </>
  );
};

export default ReviewContainer;
