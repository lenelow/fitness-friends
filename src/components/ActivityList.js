import React, { Component } from "react";
import "./ActivityList.css";
import { fetchAndHandleActivities } from "../actions/activities";
import { connect } from "react-redux";

class ActivityList extends Component {
  constructor() {
    super();

    this.state = {
      activities: []
    };
  }
componentDidMount() {
  
};


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
    return <div className="activities-container">{table}</div>;
  }
}
const mapStateToProps = ({ activities, loading }) => ({
  activities,
  loading
}) 

const mapDistpatchToProps = dispatch => ({
  fetchAndHandleActivities: () => dispatch(fetchAndHandleActivities())
})

export default connect(ActivityList);
