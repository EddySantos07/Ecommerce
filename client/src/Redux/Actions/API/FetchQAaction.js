import axios from 'axios';
import API_KEY from '../../../../../../config';


var fetchQA = (productID) => {

  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=${productID}&count=10`, // ACTION: revisit the count parameter to get all questions in a single fetch
  {
    headers: {
      Authorization: API_KEY
    }
  })
  .then((payload) => {
    // console.log('payload', payload);
    var allQuestions = [];

    payload.data.results.forEach((question) => {
      // console.log('question: ', question);

      allQuestions.push(question)

    })

    return allQuestions
  })
  .catch((err) => {
    // console.log(err);
    return err;
  })

}

// var fetchAnswers = (questionID) => {

//     return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${questionID}/answers?count=10`, // ACTION: revisit the count parameter to get all answers in a single fetch
//     {
//       headers: {
//         Authorization: API_KEY
//       }
//     })
//     .then((payload) => {
//       // console.log('fetch answers data:', data)
//       // return data.data.results
//       return {
//         question_id: questionID,
//         answers: payload.data.results
//       }
//     })
// }

export default fetchQA;