import React from 'react';
import OptionCard from './OptionCard.jsx'
import _ from 'underscore';
import { Row, Container, Col } from 'reactstrap';

// clicking correct answer flips card
// timeout --> renders next question
// clicking wrong answer plays error sound
// timeout render next question


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: false,
      qData: {}
    }
    // this.shuffleCards = this.shuffleCards.bind(this);
  }

  componentDidMount() {
    this.setState({ qData: this.props.qData })
  }
  // shuffleCards(question) {
  //   let options = Object.entries(question);
  //   options.shift();
  //   return _.shuffle(options);
  // }

  render() {
    return (
      <div>
        <div className="text-center"><h1>{this.props.qData.question}</h1></div>
        <Container>
          <Row>
            {/* <OptionCard /> */}
            {this.props.qData.options.map(option => <OptionCard option=
              {option} />)}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Question;