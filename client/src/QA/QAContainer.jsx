import React, {useState} from 'react'
import ProductContext from '../context.jsx';
// import QAstyles from './styles/QAstyles.css'

import fetchProductDetails from '../FetchData/fetchProductDetails.js'

import QASearch from './QA-Search.jsx'
import QAList from './QA-List.jsx'
import QModal from './QA-QuestionModal'
import ReactModal from 'react-modal';

let QAContainer = function(props) {

  const QAContainerContext = React.useContext(ProductContext);
  const [showQModal, setShowQModal] = useState(false);
  const questions = QAContainerContext.productQA;


  const qModalClickHandler = (e) => {
    setShowQModal(!showQModal)
  }

  if (questions.length) {
    return (
      <div className="QAcontainer">
        <h1 className="QAcontainer_header">Customer Questions</h1>
        <h3 className="QAcontainer_subheader">{`Ask for information about ${QAContainerContext.currentProductDetails.name} from the customers who love it.`}</h3>
        <div className='ask-button-div'><input className="QAlist_askButton" type="button" value="Ask a question" onClick={qModalClickHandler} ></input></div>
        {showQModal ?
        <ReactModal isOpen={showQModal} onRequestClose={qModalClickHandler}>
          <QModal showQModal={showQModal} setShowQModal={setShowQModal} productName={QAContainerContext.productName} />
        </ReactModal>
        : null
        }
        <QASearch questions={questions} />
        <QAList questions={questions} />
      </div>
    )
  } else {
    return (<div> </div>)
  }
}

export default QAContainer