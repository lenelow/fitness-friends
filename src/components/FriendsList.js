import React, { Component } from "react";
import "./FriendList.css";
import axios from "axios";
import { Link } from "react-router-dom";

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://fitness-friends-api.herokuapp.com/api/profile")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let friendsList = this.state.friends.map(user => (
      <li>
        <div className="friend">
          <img src={user.image} height="150" width="150" />
          <Link to={"/profile/" + user._id}>
            <h3>{user.username}</h3>
          </Link>
        </div>
      </li>
    ));
    return (
      <div>
        <h1 className="myFriends">My Friends</h1>
        <div className="friendList">
          <ul>{friendsList}</ul>
        </div>
      </div>
    );
  }
}

export default FriendsList;
