import React from 'react';
import OptionCard from '../OptionCard'
import _ from 'underscore';

import { Row } from 'reactstrap';

// clicking correct answer flips card
// timeout --> renders next question
// clicking wrong answer plays error sound
// timeout render next question


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: false,
    }
    this.shuffleCards = this.shuffleCards.bind(this);
  }

  shuffleCards(question) {
    let options = Object.entries(question);
    shuffledOptionsArray.shift();
    return _.shuffle(options);
  }

  render() {
    return (
      <div>
        <h1>{props.question.question}</h1>
        <Row>
          {this.shuffleCards(this.props.question).map(option => {
            return
            <OptionCard option={option} />
          })}
        </Row>
      </div>
    )
  }
}