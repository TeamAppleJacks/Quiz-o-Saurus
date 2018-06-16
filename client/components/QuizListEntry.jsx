import React from 'react';

const QuizListEntry = (props) => {
  function clicker(quiz) {
    props.clickHandler(quiz)
  }

  return (
    <li className="quiz-list-display" onClick={() => { clicker(props.quiz) }}>
      <img src={props.quiz.imgUrl} className="quiz-list-image" />
      <div className="quiz-list-title">{props.quiz.quizName}</div>
    </li>
  )
}

export default QuizListEntry;