import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <h1 className="login">Log In</h1>
        <form>
          <input
            className="loginInfo"
            type="text"
            value="Email"
            onChange={this.props.handleInput}
          />
          <br />
          <input
            className="loginInfo"
            type="text"
            value="Password"
            onChange={this.props.handleInput}
          />
          <br />
          <button
            className="loginButton"
            type="Submit"
            value="Login"
            onClick={this.props.handleLogIn}
          >
            Submit
          </button>
        </form>
        <a href="/signup" id="signup">
          Don't have an account? Sign up here!
        </a>
      </div>
    );
  }
}

export default Login;
