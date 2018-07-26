import React, { Component } from "react";
import "./FriendList.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAndHandleProfiles } from "../actions/profiles";

class FriendsList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAndHandleProfiles();
  }

  render() {
    let friendsList = this.props.profiles.map(user => (
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

const mapStateToProps = ({ profiles, loading }) => ({
  profiles: profiles.profiles,
  loading: profiles.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleProfiles: () => dispatch(fetchAndHandleProfiles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);
