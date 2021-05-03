import React, { useContext, useState } from 'react';
import ProductContext from '../context.jsx';
import Moment from 'react-moment';
import StarRatings from 'react-star-ratings';

let ReviewListTile = (props) => {

  const context = useContext(ProductContext);

  //const [exampleData, setExampleData] = useState(context.productReviews);

  // console.log('ReviewTile Props: ', props);


  if (props.review) {
    return (
      <div className='ReviewListTile'>

        <div className='RevHeader'>
          <div className='Revstar'>
            <StarRatings rating={props.review.rating} starDimension='15px' starSpacing='3px' numberOfStars={5} starRatedColor='#F4ABAB'/>
          </div>
          {/* <div className='reviewer-name'>{props.review.reviewer_name},</div> */}
          <div className='Revdate'> {props.review.reviewer_name},
            <Moment format=' MMMM DD, YYYY'>
              {props.review.date}
            </Moment>
          </div>
        </div>

        <div className='RevMiddle'>
          <div className='Revsummary'>{props.review.summary}</div>

          <div className='Revbody'>{props.review.body}</div>


          {props.review.recommend &&
          <div>
            <span>&#10003; I recommend this product</span>
          </div>
          }
          <br></br>

          {props.review.response &&
          <div className='Revresponse'>Response:
            <br></br>
            <div>{props.review.response}</div>
          </div>
        }
        </div>
        <div className='RevFooter'>
          <span className='Revhelpfulness'>Helpful? Yes ({props.review.helpfulness})</span>
        </div>







        <br></br>
      </div>
    )
  } else {
    return (
      <div>Loading reviews...</div>
    )
  }
}

export default ReviewListTile;