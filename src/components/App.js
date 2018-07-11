import React, { Component } from "react";
import "./App.css";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fitness Friends</h1>
        </header>
        <Login />
        <a href="/signup" id="signup">
          Don't have an account? Sign up here!
        </a>
      </div>
    );
  }
}

export default App;
