import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import QuizListComponent from "./components/QuizListComponent.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Root from "./components/Root.jsx";
import QuizSelected from "./components/QuizSelected.jsx";
import UserData from "./UserExampleData";
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "root",
      games: [],
      currentQuiz: '',
      redirect: false
    };
    this.viewUpdate = this.viewUpdate.bind(this);
    this.gameFetch = this.gameFetch.bind(this);
  }

  //change the view of our website
  viewUpdate(newView) {
    this.setState({
      view: newView
    });
  }

  componentDidMount() {

  }

  //set the data of our quizzes from the server
  gameFetch(view) {
    $.ajax({
      url: '/games',
      method: 'GET',
      success: (data) => {
        data = JSON.parse(data);
        this.setState({
          view: view,
          games: data,
        })
        
      },
      err: (err) => {
        console.log('could not fetch', err);
      }
    });
  }

  //send our user to the quiz taking page
  quizTaking(quiz) {
    // console.log(quiz)
    this.setState({
      currentQuiz: quiz,
      view: 'quizMode'
    })
  }

  //load different components depending on the website

  currentPage() {
    if (this.state.view === "root") {
      return <Root />
    } else if (this.state.view === "game") {
      return <QuizListComponent gameData={this.state.games}/>;
    } else if (this.state.view === "quizMode") {
      return <QuizSelected questionsData={Dinosaur.quizzes} />;
    } else if (this.state.view === "leaderboard") {
      return <Leaderboard data={UserData} />;
    }
  }

  //render our nav bar
  render() {
    return (
        <div className="nav">
          <ul>
            <li className="logo" onClick={() => this.viewUpdate('root')}>Quiz o' Saurus</li>
            <li
              className="nav-ui"
              onClick={() => {
                this.gameFetch("game");
              }}
            >
              <a>Games</a>
            </li>
            <li
              className="nav-ui"
              onClick={() => {
                this.viewUpdate("leaderboard");
              }}
            >
              <a>Leaderboard</a>
            </li>
          </ul>
          <div>
            <div className="pageRender">{this.currentPage()}</div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));