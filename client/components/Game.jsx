import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import Question from './Question.jsx';
import { } from 'reactstrap'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      username: '',
      startTime: '',
      qData: '',
      playerCount: 0
    }
    this.socket = io('localhost:3000')
    this.socket.on('q1', data => {
      console.log('q1 data recevied in game.jsx', data)
      this.setState({
        view: 'game',
        qData: data
      })
    })
    this.gameView = this.gameView.bind(this)
  }

  gameView() {
    if (this.state.view === 'game') {
      console.log('gameView', this.state.qData)
      return <Question qData={this.state.qData} />
    }
    return ':D'
  }

  componentDidMount() {
    /* User Authentication */
    // axios.get('/game')
    //   .then(response => {
    //     console.log('Game mounted - User authenticated')
    //     const socket = io('/game')
    //     this.setState({
    //       view: 'lobby',
    //       username: response.data,
    //       playerCount: socket.server.httpServer._connections
    //     });
    //   })
    //   .catch(err => console.log('get/game Error', err))
    // check when the game starts
    // console.log(socket.server.httpServer._connections)
  }
  render() {
    return (
      <div>
        {this.gameView()}
      </div>
    )
  }


}

export default Game;