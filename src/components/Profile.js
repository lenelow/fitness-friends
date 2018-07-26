import React, { Component } from "react";
import "./Profile.css";
import ActivityList from "./ActivityList";
import { Link } from "react-router-dom";
import NewActivity from "./NewActivity";
import { fetchAndHandleProfile } from "../actions/profiles";
import { connect } from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAndHandleProfile(this.props.match.params.id);
  }

  render() {
    return this.props.loading ? (
      <div>loading</div>
    ) : (
      <div>
        <h1 className="usersName">{this.props.user}'s Profile</h1>
        <div className="gridArea">
          <div className="leftColumn">
            <img src={this.props.image} height="200" width="150" />
            <br />
            <text className="aboutMe">About Me:</text>
            <p className="bio">{this.props.bio}</p>
            <ul className="interestList">
              <text className="title">My Interests: </text>
              {this.props.preferences.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div className="rightColumn">
            <div className="hideActivities">
              <h2 className="activitiesHeader">My Activities</h2>
              <ActivityList />
              <Link to="/add-activity">
                <button className="addActivityButton">Add Activity</button>
              </Link>
            </div>
            <div className="newActivity">
              <NewActivity userId="5b47b3d9b971b10004e7c9b7" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ profiles, loading }) => {
  if (profiles.profile.username) {
    return {
      user: profiles.profile.username,
      image: profiles.profile.image,
      bio: profiles.profile.bio,
      preferences: profiles.profile.preferenes,
      activityList: profiles.profile.activityList,
      loading: profiles.profile.loading
    };
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAndHandleProfile: id => dispatch(fetchAndHandleProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
