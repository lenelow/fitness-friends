import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";
import Profile from "./Profile";

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fitness Friends</h1>
        </header>
        <Profile />
      </div>
    );
  }
}

export default App;
