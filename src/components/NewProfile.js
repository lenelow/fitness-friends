import React, { Component } from "react";
import "./NewProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";

class NewProfile extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      bio: "",
      image: "",
      preferences: [],
      redirect: false
    };

    this.handleNewProfile = this.handleNewProfile.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleNewProfile(e) {
    e.preventDefault();
    const profile = {
      username: this.state.username,
      bio: this.state.bio,
      image: this.state.image,
      preferences: this.state.preferences
    };
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://fitness-friends-api.herokuapp.com/api/user", user)
      .then(res => {
        console.log(res);
      });
    axios
      .post("http://fitness-friends-api.herokuapp.com/api/profile", profile)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      redirect: true
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="ProfileForm">
        <h1 className="createProfile">Profile Details:</h1>
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
            <label htmlFor="image">Profile Picture</label>
            <input
              className="signupInput"
              type="text"
              name="image"
              placeholder="image url"
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
          <div classname="preferenceList">
            <h3 className="preferences">Preferences:</h3>
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[biking]"
              value="true"
            />
            <label>Biking</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[running]"
              value="true"
            />
            <label>Running</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[swimming]"
              value="true"
            />
            <label>Swimming</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="activitiy[cycling]"
              value="true"
            />
            <label>Cycling</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[yoga]"
              value="true"
            />
            <label>Yoga</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[pilates]"
              value="true"
            />
            <label>Pilates</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[weightlifting]"
              value="true"
            />
            <label>Weightlifting</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[crossfit]"
              value="true"
            />
            <label>Crossfit</label>
            <br />
            <input
              className="checkbox"
              type="checkbox"
              name="preferences[solidcore]"
              value="true"
            />
            <label>Solidcore</label>
          </div>
          <Link to="/profile/:id">
            <button
              className="newProfileButton"
              value="create profile"
              type="submit"
              onClick={this.props.handleNewProfile}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NewProfile;
