import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Dinosaur from "../database/exampleData.js";
import 'bootstrap/dist/css/bootstrap.css';


import QuizListComponent from "./components/QuizListComponent.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Root from "./components/Root.jsx";
import QuizSelected from "./components/QuizSelected.jsx";
import UserData from "./UserExampleData";
import Game from './components/Game.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "root",
      quizzes: [],
      currentQuiz: '',
      redirect: false
    };
    this.viewUpdate = this.viewUpdate.bind(this);
  }

  componentDidMount() {
    this.quizFetch();
  }

  //change the view of our website
  viewUpdate(newView) {
    this.setState({
      view: newView
    });
  }


  //ajax fetch our list of quizzes from the server
  ajaxQuizFetch(cb) {
    $.ajax({
      url: '/home/quizzes',
      method: 'GET',
      success: (data) => {
        cb(data);
      },
      err: (err) => {
        console.log('could not fetch', err);
      }
    })
  }

  //set the data of our quizzes from the server
  quizFetch() {
    this.ajaxQuizFetch((data) => this.setState({ quizzes: data }))
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
    }
    else if (this.state.view === "home") {
      return <QuizListComponent quizData={Dinosaur.quizzes} clickHandler={this.quizTaking.bind(this)} />;
    } else if (this.state.view === "quizMode") {
      return <QuizSelected questionsData={Dinosaur.quizzes} />;
    } else if (this.state.view === "leaderboard") {
      return <Leaderboard data={UserData} />;
    } else if (this.state.view === "game") {
      return <Game />
    }
  }

  //render our nav bar
  render() {
    return (
      <div>
        <div className="nav">
          <ul>
            <li className="logo">Quiz o' Saurus</li>
            <li
              className="nav-ui"
              onClick={() => {
                this.viewUpdate("home");
              }}
            >
              <a>Home</a>
            </li>
            <li
              className="nav-ui"
              onClick={() => {
                this.viewUpdate("leaderboard");
              }}
            >
              <a>Leaderboard</a>
            </li>
            <li
              className="nav-ui"
              onClick={() => {
                this.viewUpdate("game");
              }}
            >
              <a>Game</a>
            </li>
          </ul>
        </div>
        {this.currentPage()}
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));