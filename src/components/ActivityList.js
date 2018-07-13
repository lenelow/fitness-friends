import React, { Component } from "react";
import Activity from "./Activity";
import "./ActivityList.css";
import axios from "axios";

class ActivityList extends Component {
  constructor() {
    super();

    this.state = {
      activities: []
    };
  }
  componentDidMount() {
    axios
      .get("http://fitness-friends-api.herokuapp.com/api/activity")
      .then(res => {
        console.log(res);
        this.setState({
          activities: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  } // closes component did mount

  render() {
    let table = this.state.activities.map((activity, idx) => {
      return (
        <section>
          <table class="activityTable">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{activity.name}</td>
                <td>{activity.location}</td>
                <td>{activity.date}</td>
                <td>{activity.time}</td>
                <td>{activity.description}</td>
                <td>{activity.idx}</td>
              </tr>
            </tbody>
          </table>
        </section>
      );
    });
    return <div>{table}</div>;
  }
}

export default ActivityList;
