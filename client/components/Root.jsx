import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
  }

  render() {
    if (this.state.redirect || sessionStorage.getItem("userData")) {
      return <Redirect to={"/home/leaderboard/"} />;
    }

    return (
      <div className="rootContainer">
        <div className="loginButton">
          <button><a href="/auth/google/">Login with Google</a></button>
          <img src={"https://cdn130.picsart.com/238899884057212.png?r1024x1024"} />
        </div>
        <div className="dino-view">
          <b>Learn your dino facts here!</b>
          <img
            src={
              "https://content.mycutegraphics.com/graphics/chalkboard/dinosaur-chalkboard.png"
            }
            className="dino-img"
          />
        </div>
      </div>
    );
  }
}

export default Root;