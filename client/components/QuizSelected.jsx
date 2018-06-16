import React from 'react';
import QuizSelectedEntry from './QuizSelectedEntry.jsx'

const QuizSelected = (props) => {
  let score = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  }

  //patch to the user score googleId
  const updateUserScore = function(score) {
    $.ajax({
      url: 'home/111601961513247914448',
      method: "PATCH",
      data: {
        quizName: 'dinosaur',
        score: score
      }
    })
  }

  function scoreCounter (result) {
    let score = 0;

    for (let key in result) {
      if (result[key] === true) {
        score += 1;
      }
    }
    updateUserScore(score)
    alert('You got ' + score + ' right!');
  }

  const questionsEntries = props.questionsData[0].questions.map ((question, id) => {
    return <QuizSelectedEntry questions={question.text} selection={question.options} answer={question.correctAnswer} key={id} id={id} score={score}/>
  })

  return (
    <div className="quiz-selected-container">
      <div className="quiz-question-container">
        <ul>
          {questionsEntries}
          <div className="quiz-answer-submission">
            <button className="quiz-answer-confirmation" onClick={() => {scoreCounter(score)}}>Confirm Submission</button> 
          </div>
        </ul>
      </div>
    </div>
  )
}

export default QuizSelected;