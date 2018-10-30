import React, { Component } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div>
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
            <div>
              <label htmlFor="image">Profile Picture</label>
              <input
                className="signupInput"
                type="text"
                name="image"
                onChange={this.props.handleInput}
              />
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <input
                className="signupInput"
                type="text"
                name="bio"
                placeholder="Tell us about yourself"
                onChange={this.props.handleInput}
              />
            </div>
          </div>
        </div>
        <div className="preferences">
          <h3 className="preferencesHeader">Preferences:</h3>
          <div className="preferenceCheckbox">
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[biking]"
              value="true"
            />
            <label>Solidcore</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[running]"
              value="true"
            />
            <label>Biking</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[swimming]"
              value="true"
            />
            <label>Running</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="activitiy[cycling]"
              value="true"
            />
            <label>Swimming</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[yoga]"
              value="true"
            />
            <label>Cycling</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[pilates]"
              value="true"
            />
            <label>Yoga</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[weightlifting]"
              value="true"
            />
            <label>Pilates</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[crossfit]"
              value="true"
            />
            <label>Weightlifting</label>
          </div>
          <div className="preferenceCheckbox">
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[solidcore]"
              value="true"
            />
            <label>Crossfit</label>
          </div>
        </div>
        <Link to="/profile/:id">
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
    );
  }
}

export default SignUp;
