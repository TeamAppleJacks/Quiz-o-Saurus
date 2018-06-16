import React from 'react';
import QuizListEntry from './QuizListEntry.jsx';

const QuizListComponent = (props) => {
  const quizEntries = props.quizData.map ((quiz, id) => {
    return <QuizListEntry quiz={quiz} key={id} clickHandler={props.clickHandler} />
  })

  return (
    <div className="quiz-list-container">
      <ul>
        {quizEntries}
      </ul>
    </div>
  );
}

export default QuizListComponent;
