import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';

var StarRating = ({ratingsList, className, dimension}) => {

  //ratings list will be an object that looks like this: {2: '2', 5: '1'}
  //the keys represent the number of reviews of that key's value

  var calculateAverageRating = () => {
    var total = 0;
    var length = 0;

    for (var v in ratingsList) {
      total += (Number(v) * Number(ratingsList[v]));
      length += Number(ratingsList[v]);
    };

    var average = (total / length);
    return average
  }

  return (
    <StarRatings
      rating={calculateAverageRating(ratingsList) || 0}
      // starRatedColor="#735050"
      starRatedColor="#F4ABAB"
      numberOfStars={5}
      starDimension={dimension}
      name={className}
    />
  )
};

// class component as described in star rating docs  - https://www.npmjs.com/package/react-star-ratings
// class StarRating extends Component {
//   changeRating( newRating, name ) {
//     this.setState({
//       rating: newRating
//     });
//   }

//   render() {
//     // rating = 2;
//     return (
//       <StarRatings
//         rating={2}
//         starRatedColor="blue"
//         changeRating={this.changeRating}
//         numberOfStars={5}
//         name='rating'
//       />
//     );
//   }
// }


export default StarRating;