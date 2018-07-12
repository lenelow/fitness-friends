import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";
import Profile from "./Profile";
import axios from "axios";

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

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
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
