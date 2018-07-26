import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <h1 className="login">Log In</h1>
          <input
            className="loginInfo"
            type="text"
            placeholder="Email"
            onChange={this.props.handleInput}
          />
          <br />
          <input
            className="loginInfo"
            type="text"
            placeholder="Password"
            onChange={this.props.handleInput}
          />
          <br />
          <Link to="/">
            <button
              className="loginButton"
              type="Submit"
              placeholder="Login"
              onClick={this.props.handleLogIn}
            >
              Submit
            </button>
          </Link>
        </form>
        <Link to="/signup" id="signup">
          Don't have an account? Sign up here!
        </Link>
      </div>
    );
  }
}

export default Login;
