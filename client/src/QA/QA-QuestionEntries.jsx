import React, {useState, useEffect} from 'react'
import ProductContext from '../context.jsx'; //ACTION: Delete when refactored
// import QAstyles from './styles/QAstyles.css'
import AnswerEntries from './QA-AnswerEntries.jsx'
import AModal from './QA-AnswerModal.jsx'
import ReactModal from 'react-modal';

let QuestionEntries = function({body, asker, date, helpfulCount, reported, answers, qCount}) {
  const QAqentriesContext = React.useContext(ProductContext); // ACTION: Delete and pass product name as a prop when refactoring
  const [arrayOfAnswers, setArrayOfAnswers] = useState(answers)
  let aCount = arrayOfAnswers.length;

  //SORT THE ANSWERS BY SELLER AND HELPFULNESS COUNT
  const arrangeAnswers = (array) => {
    let sellerAnswers = [];
    let restOfAnswers = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].answerer_name === 'Seller') {
        sellerAnswers.push(array[i])
      } else {
        restOfAnswers.push(array[i])
      }
    }
    sellerAnswers.sort((a, b) => {
      return (a.helpfulness > b.helpfulness) ? -1: 1
    })

    restOfAnswers.sort((a, b) => {
      return (a.helpfulness > b.helpfulness) ? -1: 1
    })

    return sellerAnswers.concat(restOfAnswers)
  }

  let orderedAnswers = arrangeAnswers(arrayOfAnswers)

  //STATE HOOKS
  const [displayedAnswers, setDisplayedAnswers] = useState(orderedAnswers.slice(0,2))
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const [isFullyLoaded, setIsFullyLoaded] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const [showAModal, setShowAModal] = useState(false)
  const [markedQHelpful, setMarkedQHelpful] = useState(false)
  const [markedQReported, setMarkedQReported] = useState(false)

  //DISPLAY HELPER FUNCTION
  const renderAnswers = (index) => {
      setDisplayedAnswers(orderedAnswers.slice(0, index))
      setDisplayedIndex(index)
  }

  //CLICK HANDLERS
  const hideAnswersClickHandler = (e) => {
    setIsHidden(!isHidden)
  }

  const aModalClickHandler = (e) => {
    setShowAModal(!showAModal)
  }

  const loadClickHandler = (e) => {
    if (displayedIndex === aCount) {
      renderAnswers(aCount);
    } else if (displayedIndex >= aCount-2) {
      renderAnswers(aCount)
      setIsFullyLoaded(true);
    } else {
      renderAnswers(displayedIndex+2)
    }
  }

  const hideClickHandler = (e) => {
    if (displayedIndex > 2) {
      renderAnswers(displayedIndex-2);
    }
  }

  const collapseClickHandler = (e) => {
    renderAnswers(2)
    setIsFullyLoaded(false)
  }

  const toggleQHelpfulClickHandler = (e) => {
    setMarkedQHelpful(!markedQHelpful)
  }

  const toggleQReportedClickHandler = (e) => {
    setMarkedQReported(!markedQReported)
  }

  //USE EFFECT HOOK
  useEffect(() => {
    renderAnswers(2)
    }, [])

  return (
    <>
    <div className="QAqentries">
      <div className="QAqentries_metaContainer">
        {/* <span className="QAqentries_question">Q:</span> */}
        <span className="QAqentries_meta">From: {asker}</span>
        <span className="QAqentries_meta">{new Date(date).toLocaleString('default', {month: 'short', day:'numeric', year:'numeric'})}</span>
        {markedQHelpful ?
          <a className="QAqentries_meta" href="javascript:void();" onClick={toggleQHelpfulClickHandler}>Mark as Helpful ({helpfulCount+1})</a>
          :
          <a className="QAqentries_meta" href="javascript:void();" onClick={toggleQHelpfulClickHandler}>Mark as Helpful ({helpfulCount})</a>
        }
        {markedQReported ?
          <a className="QAqentries_meta" href="javascript:void();" onClick={toggleQReportedClickHandler}>Reported</a>
          :
          <a className="QAqentries_meta" href="javascript:void();" onClick={toggleQReportedClickHandler}>Report</a>
        }
      </div>
      <div className="QAqentries_questionBody"><b>Question:</b>
      <span className="QAqentries_questionCollpase" onClick={hideAnswersClickHandler}>V</span>
      <div>{body}</div>
      <div className="QAqentries_answers">
        1-{displayedIndex} of {aCount} Answers
        <button className="QAqentries_addButton" type="button" onClick={aModalClickHandler}>Add an answer</button>
      </div>
      </div>
    </div>

    {isHidden ?
        null
        :
        <div className="QAqentries_displayedAnswers">
          {displayedAnswers.map((answer) => {
            return (<AnswerEntries
              responder={answer.answerer_name}
              body={answer.body}
              date={answer.date}
              helpfulCount={answer.helpfulness}
              images={answer.photos}
              aCount={aCount}
              key={answer.id} />)
            })
          }
          <div>
            {/* Conditional render of Load more / Collapse buttons */}
            {isFullyLoaded ?
            <div className="QAqentries_collapse">
              <span className="QAqentries_displayCount">Answers 1-{aCount}</span>
              <button className="QAqentries_collapseButton" type="button" onClick={collapseClickHandler}>Collapse answers</button>
            </div>
            :
            <div className="QAqentries_loadMore">
              <div className="QAqentries_displayCount">Answers 1-{displayedIndex} of {aCount}</div>
            </div>
            }
            <div className="QAqentries_displayButtons">
              <button className="QAqentries_loadButton" type="button" value={displayedIndex} onClick={loadClickHandler}>Show more answers</button>
              <button className="QAqentries_loadButton" type="button" value={displayedIndex} onClick={hideClickHandler}>Show less answers</button>
            </div>
          </div>
        </div>
      }

    {/* Conditional rendering of Answer Modal */}
    {showAModal ?
    <ReactModal isOpen={showAModal} onRequestClose={aModalClickHandler} >
      <AModal
        arrayOfAnswers={arrayOfAnswers}
        setArrayOfAnswers={setArrayOfAnswers}
        setShowAModal={setShowAModal}
        productName={QAqentriesContext.productName} //ACTION: pass down prop when refactored
        displayedAnswers={displayedAnswers}
        body={body}/>
      </ReactModal>
    : null
    }
    </>
  )
}

export default QuestionEntries