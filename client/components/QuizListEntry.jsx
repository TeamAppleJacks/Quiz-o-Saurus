import React from 'react';
import Flip from 'react-reveal/Flip';

class QuizListEntry extends React.Component {
//   function clicker(quiz) {
//     props.clickHandler(quiz)
//   }

//   return (
//     <li className="quiz-list-display" onClick={() => { clicker(props.quiz) }}>
//       <Flip>
//       <img src={props.quiz.imgUrl} className="quiz-list-image" />
//       <div className="quiz-list-title">{props.quiz.quizName}</div>
//     </li>
//   )
// }

constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Flip left when={this.state.show}>
          <h1>React Reveal</h1>
        </Flip>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}
        >
          { this.state.show ? 'Hide' : 'Show' } Message
        </button>
      </div>
    );
  }
}
export default QuizListEntry;