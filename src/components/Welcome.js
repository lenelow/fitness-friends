import React, { Component } from "react";
import Profile from "./Profile";
import FriendList from "./FriendsList";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { fetchAndHandleProfile } from "../actions/profiles";
import { connect } from "react-redux";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAndHandleProfile("5b47b3d9b971b10004e7c9b7");
  }
  render() {
    return (
      <div>
        <h1 className="welcome">Welcome</h1>
        <FriendList />
      </div>
    );
  }
}

const mapStateToProps = ({ profiles, loading }) => ({
  profile: profiles.profile,
  loading: profiles.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleProfile: id => dispatch(fetchAndHandleProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
