import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context.jsx';
import ReviewList from './ReviewList.jsx';



let ReviewListDiv = (props) => {

  const context = useContext(ProductContext);

  //const [numReviews, setnumReviews] = useState(2);

  //const [reviews, setReviews] = useState([]);
  //const [sort, setSort] = useState('Relevant');
  //console.log(props);
  //console.log(props.reviews[0]);

  // useEffect(() => {
  //   const reviews = context.productReviews;
  //   setReviews(reviews);
  //   setnumReviews(2);
  // }, [context.productReviews])

  // const HandleClick = (e) => {
  //   setnumReviews(numReviews+2)
  // }

  // const HandleReviewClick = (e) => {
  //   props.setShowReviewForm(!props.showReview);
  // }

  //props are: props.setShowReviewForm={setShowReviewForm} props.showReview={showReviewForm}, currentSort


  const HandleSelectChange = (e) => {
    var sortedList = context.changeReviewSortBy(e.target.value);
    //console.log(e.target.value);
    //console.log('Reviews Before: ',context.productReviews);
    //context.productReviews = sortedList;
    //console.log('Reviews After: ', context.productReviews);
    //console.log("Select was clicked");
  }


  return (
    <div className='ReviewListContainer'>

      <div className='ReviewListHeader'>
        <div className='numReviews'>{context.productReviews.length} reviews, sorted by: </div>

        <label className='ReviewListSort'>
          <select className='RevSelectFilter' onChange={HandleSelectChange}>
            <option value='newest'>Newest</option>
            <option value='helpful'>Helpful</option>
            <option value='relevant'>Relevant</option>
          </select>
        </label>

      </div>

      <div className='ReviewListContainerElm'>
        <ReviewList setShowReviewForm={props.setShowReviewForm} showReview={props.showReviewForm}/>
      </div>

      {/* <div className='ReviewListFooter'>
        {numReviews < reviews.length && <button onClick={HandleClick}>More Reviews</button>}
        <button className='addReview' onClick={HandleReviewClick}>Write Review</button>
      </div> */}

    </div>
  )

//comment here


}

export default ReviewListDiv;