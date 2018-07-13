import React, { Component } from "react";
import "./Profile.css";
import ActivityList from "./ActivityList";
import { Link } from "react-router-dom";
import NewActivity from "./NewActivity";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      image: "",
      bio: "",
      preferences: [],
      activities: []
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
          user: res.data.username,
          image: res.data.image,
          bio: res.data.bio,
          preferences: res.data.preferences,
          activitiylist: res.data.activities
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  toggleFormView = () => {
    document.getElementById("hideActivities").style.display = "none";
  };
  render() {
    let prefList = this.state.preferences.map(item => {
      return <li>{item}</li>;
    });
    return (
      <div>
        <h1 className="usersName">{this.state.user}'s Profile</h1>
        <div className="gridArea">
          <div className="leftColumn">
            <img src={this.state.image} height="200" width="150" />
            <br />
            <text className="aboutMe">About Me:</text>
            <p className="bio">{this.state.bio}</p>
            <ul className="interestList">
              <text className="title">My Interests: </text>
              {prefList}
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

export default Profile;
