import React, { useContext, useState, useEffect } from "react";
// import PropTypes from 'prop-types'
import ProductContext from "../context.jsx";
import Progress from "react-progressbar";
import Characteristic from "./Characteristic.jsx";
import StarRatings from "react-star-ratings";

let ReviewBreakdown = (props) => {
  const context = useContext(ProductContext);
  //props.data.
  const [ReviewMeta, setReviewMeta] = useState({});
  // const [(numTrue+numFalse), set(numTrue+numFalse)] = useState(0);
  const [FiveRatings, setFiveRatings] = useState(0);
  const [FourRatings, setFourRatings] = useState(0);
  const [ThreeRatings, setThreeRatings] = useState(0);
  const [TwoRatings, setTwoRatings] = useState(0);
  const [OneRatings, setOneRatings] = useState(0);
  // const [overallRating, setOverallRating] = useState(0);
  const [numTrue, setNumTrue] = useState(0);
  const [numFalse, setNumFalse] = useState(0);

  const updateTotals = (metaData) => {
    setFiveRatings(Number(metaData.ratings[5]));
    setFourRatings(Number(metaData.ratings[4]));
    setThreeRatings(Number(metaData.ratings[3]));
    setTwoRatings(Number(metaData.ratings[2]));
    setOneRatings(Number(metaData.ratings[1]));
    setNumTrue(Number(metaData.recommended.true));
    setNumFalse(Number(metaData.recommended.false));
  };

  const correctTotals = (metaData) => {
    if (metaData.ratings[5] === undefined) {
      setFiveRatings(0);
    }
    if (metaData.ratings[4] === undefined) {
      setFourRatings(0);
    }
    if (metaData.ratings[3] === undefined) {
      setThreeRatings(0);
    }
    if (metaData.ratings[2] === undefined) {
      setTwoRatings(0);
    }
    if (metaData.ratings[1] === undefined) {
      setOneRatings(0);
    }
    if (metaData.recommended.true === undefined) {
      setNumTrue(0);
    }
    if (metaData.recommended.false === undefined) {
      setNumFalse(0);
    }
  };

  useEffect(() => {
    const data = context.productReviewsMetaData;
    setReviewMeta(data);
    updateTotals(data);
    correctTotals(data);
  }, [context.productReviewsMetaData]);

  const overallRating = (
    Math.round(
      ((1 * OneRatings +
        2 * TwoRatings +
        3 * ThreeRatings +
        4 * FourRatings +
        5 * FiveRatings) /
        (numTrue + numFalse)) *
        10
    ) / 10
  ).toFixed(1);

  if (ReviewMeta.ratings) {
    return (
      <div className="ReviewBreakdown">
        <div className="BreakdownHeader">
          <div className="BreakdownStar">
            <StarRatings
              rating={Number(overallRating)}
              starDimension="30px"
              starSpacing="3px"
              numberOfStars={5}
              starRatedColor="#F4ABAB"
            />
          </div>
          <div className="revRating">{overallRating}</div>
        </div>

        <div className="BreakdownPercent">
          <div className="RevPercent">
            {Math.round((numTrue / (numTrue + numFalse)) * 100)}% of reviews
            recommend this product
          </div>
        </div>

        <div className="BreakdownBars">
          <div className="starbar5 starbar">
            <div className="starText">5 stars</div>
            <Progress
              className="RevProgress"
              completed={Math.round((FiveRatings / (numTrue + numFalse)) * 100)}
            />
            <div className="reviewCount">{FiveRatings}</div>
          </div>
          <div className="starbar4 starbar">
            <div className="starText">4 stars</div>
            <Progress
              className="RevProgress"
              completed={Math.round((FourRatings / (numTrue + numFalse)) * 100)}
            />
            <div className="reviewCount">{FourRatings}</div>
          </div>
          <div className="starbar3 starbar">
            <div className="starText">3 stars</div>
            <Progress
              className="RevProgress"
              completed={Math.round(
                (ThreeRatings / (numTrue + numFalse)) * 100
              )}
            />
            <div className="reviewCount">{ThreeRatings}</div>
          </div>
          <div className="starbar2 starbar">
            <div className="starText">2 stars</div>
            <Progress
              className="RevProgress"
              completed={Math.round((TwoRatings / (numTrue + numFalse)) * 100)}
            />
            <div className="reviewCount">{TwoRatings}</div>
          </div>
          <div className="starbar1 starbar">
            <div className="starText">1 stars</div>
            <Progress
              className="RevProgress"
              completed={Math.round((OneRatings / (numTrue + numFalse)) * 100)}
            />
            <div className="reviewCount">{OneRatings}</div>
          </div>
          <br></br>
        </div>

        <div className="BreakdownCharacteristics">
          {Object.keys(ReviewMeta.characteristics).map((key) => (
            <Characteristic
              charach={key}
              value={ReviewMeta.characteristics[key].value}
              key={ReviewMeta.characteristics[key].id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading Breakdown...</div>;
  }
};

export default ReviewBreakdown;
