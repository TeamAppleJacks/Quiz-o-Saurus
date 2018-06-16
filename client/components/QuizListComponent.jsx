import React from 'react';
import QuizListEntry from './QuizListEntry.jsx';
import Zoom from 'react-reveal/Zoom';
import _ from 'underscore';

class QuizListComponent extends React.Component {

constructor(props) {
  super(props);
  this.rightCount = 1;
  this.state = { show: true};
  this.changeQuestion = this.changeQuestion.bind(this);
  this.checkAnswer = this.checkAnswer.bind(this);
  this.count = 0;
  this.rightCount = 0
 
}

checkAnswer(option) {
  if(option === this.props.gameData[this.count].Answer){
    this.rightCount++;
    console.log(this.rightCount)
  } else {
    console.log("False");
  }
}

changeQuestion() {
  setTimeout(() => {
    this.setState({show: true});
  }, 0);
  this.setState({ show: false });
  this.count++;
}

render() {
  let gameOptions = [];
  gameOptions.push(this.props.gameData[this.count].Option1, this.props.gameData[this.count].Option2, this.props.gameData[this.count].Answer);
  let shuffledOptions = _.shuffle(gameOptions);
  
  let view = this.count <= 4 ? 
  <Zoom when={this.state.show}>
      <div className="quiz-list-container"> 
         <div className="quiz-list-display">{`Question number ${this.count + 1}`}</div>
         <div className="quiz-question-display">{this.props.gameData[this.count].Question}</div> 
         <div>
         {shuffledOptions.map((option, index) => {
           return <span key={index} className="quiz-options-display option-display option-focus" onClick={() => this.checkAnswer(option)}>
             {option}
           </span>
         })}
         </div>
         <button className="quiz-button-display click-press" onClick={() => this.changeQuestion()}>SUBMIT</button>
      </div>
  </Zoom> : 

  <div className="quiz-list-cont"> 
    YOU ANSWERED {this.rightCount} OF 5 QUESTION RIGHT
  </div>

  return (
    <div>
    {view}
    </div>
  );
}
}

export default QuizListComponent;
