import React, { Component } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="form">
        <h1 className="createAccount">Create An Account:</h1>
        <div className="inputForm">
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="signupInput"
              type="text"
              name="username"
              onChange={this.props.handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="signupInput"
              type="text"
              name="email"
              onChange={this.props.handleInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="signupInput"
              type="text"
              name="password"
              onChange={this.props.handleInput}
            />
          </div>
          <Link to="/newprofile">
            <button
              className="signupButton"
              value="signup"
              type="submit"
              onClick={this.props.handleSignUp}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
