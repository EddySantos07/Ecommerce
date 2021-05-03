import React, {useState} from 'react'
import ProductContext from '../context.jsx'
import ReactModal from 'react-modal';

let QuestionModal = function({showQModal, setShowQModal, productName}) {
  //VARIABLES
  const newQuestionObj = (name, body) => {
    return {
      answers: [],
      asker_name: name,
      question_body: body,
      question_date: new Date().toISOString(),
      question_helpfulness: 0,
      question_id: Math.floor(Math.random() * 1000000) + 2000000,
      reported: false
    }
  };

  //CLICK HANDLERS
  const closeQModalClickHandler = (e) => {
    setShowQModal(false)
  }


  return (
    <div className="QAqmodal">
      <span className="closeButton" onClick={closeQModalClickHandler}></span>
      <h3 className="QAqmodal_title">Ask Your Question</h3>
      <h5 className="QAqmodal_subtitle">About the {productName}</h5>
      <div className="QAqmodal_subscript">* - Indicates a mandatory field</div>
      <label className="QAqmodal_label">Display name*
        <input
          className="QAqmodal_inputField"
          id="questionerDisplayName"
          type="text"
          size="50"
          maxlenght="60"
          placeholder="username123"
          required>
        </input>
      </label>
      <div className="QAqmodal_subscript">For privacy reasons, do not use your full name or email address.</div>
      <label className="QAqmodal_label">Email*
        <input
          className="QAqmodal_inputField"
          id="questionerEmailAddress"
          type="email"
          size="50"
          maxLength="60"
          placeholder="account@email.com"
          required>
        </input>
      </label>
      <div className="QAqmodal_subscript">For authentication reasons, you will not be emailed.</div>
      <label className="QAqmodal_label">Question*
        <textarea
          className="QAqmodal_textareaField"
          id="newQuestionBody"
          rows="10"
          cols="50"
          maxLength="1000"
          minLength="2"
          required>
        </textarea>
      </label>
      <button
        className="QAqmodal_submitButton"
        type="submit"
        onClick={closeQModalClickHandler}
        id="questionModalSubmitButton">
          Submit
      </button>
    </div>

  )
}

export default QuestionModal