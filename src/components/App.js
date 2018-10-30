import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Login from "./Login";
import { Route } from "react-router-dom";
import SignUp from "./SignUp";
import NewActivity from "./NewActivity";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route path="/" exact component={Welcome} />
            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/add-activity" exact component={NewActivity} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
