import React, { Component } from "react";
import NewActivity from "./NewActivity";
import ActivityList from "./ActivityList";
import "./Profile.css";
import { Link } from "react-router-dom";
import { fetchAndHandleProfile } from "../actions/profiles";
import { connect } from "react-redux";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchAndHandleProfile(this.props.match.params.id);
  }
  render() {
    let prefList = "";
    if (this.props.profile) {
      prefList = this.props.profile.preferences.map((item, i) => {
        return <li key={i}>{item}</li>;
      });
    }
    if (!this.props.profile) {
      return <div>loading</div>;
    }
    return (
      <div>
        <h1 className="usersName">
          {this.props.profile.username}
          's Profile
        </h1>
        <div className="gridArea">
          <div className="leftColumn">
            <img
              src={this.props.profile.image}
              height="200"
              width="150"
              alt=""
            />
            <br />
            <text className="aboutMe">About Me:</text>
            <p className="bio">{this.props.profile.bio}</p>
            <ul>
              <text className="title">My Interests: </text>
              {prefList}
            </ul>
          </div>
          <div className="rightColumn">
            <h2 className="activitiesHeader">My Activities</h2>
            <ActivityList />
            <Link to="/add-activity">
              <button className="addActivityButton">Add Activity</button>
            </Link>
            <NewActivity userId="5b47b3d9b971b10004e7c9b7" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profiles, loading }) => ({
  profile: profiles.profile
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleProfile: id => dispatch(fetchAndHandleProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
