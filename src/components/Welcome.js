import React, { Component } from "react";
import Profile from "./Profile";
import FriendList from "./FriendsList";
import "./Welcome.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://fitness-friends-api.herokuapp.com/api/profile/5b47b3d9b971b10004e7c9b7"
      )
      .then(res => {
        console.log(res);
        this.setState({
          name: res.data.username
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1 className="welcome">Welcome, {this.state.name}</h1>
        <FriendList />
      </div>
    );
  }
}

export default Welcome;
