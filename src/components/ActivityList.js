import React, { Component } from "react";
import "./ActivityList.css";
import { fetchAndHandleActivities } from "../actions/activities";
import { connect } from "react-redux";

class ActivityList extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       activities: [
  //         {
  //           _id: "5b461dbddddc474f3e56beb2",
  //           name: "jogging",
  //           location: "Meridien Hill Park",
  //           date: "7/13/2018",
  //           time: "5 pm",
  //           description: "I'll be jogging around 5 miles at a 8:00 pace"
  //         },
  //         {
  //           _id: "5b461dbddddc474f3e56beb3",
  //           name: "kayaking",
  //           location: "Key Brigde Boathouse",
  //           date: "7/20/2018",
  //           time: "9 am",
  //           description: "I'll be kayaking for 1-2 hours"
  //         },
  //         {
  //           _id: "5b461dbddddc474f3e56beb4",
  //           name: "Soul Cycle",
  //           location: "Mount Vernon Soul Cycle",
  //           date: "7/16/2018",
  //           time: "7 am",
  //           description: "I'll be taking Gregg's 7:00am class!"
  //         }
  //       ]
  //     };
  //   }

  //   render() {
  //     let list = this.state.activities.map((activity, idx) => {
  //       return (
  //         <li>
  //           <Activity
  //             id={activity._id}
  //             name={activity.name}
  //             location={activity.location}
  //             date={activity.date}
  //             time={activity.time}
  //             description={activity.description}
  //             idx={activity.idx}
  //           />
  //         </li>
  //       );
  //     });
  //     return (
  //       <div>
  //         <ul>{list}</ul>
  //       </div>
  //     );
  // xxxxxxxxxx
  // }
  componentDidMount() {
    this.props.fetchAndHandleActivities();
  }

  render() {
    let table = this.props.activities.map(activity => {
      return (
        <section key={activity._id}>
          <table className="activityTable">
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
  activities: activities.activities,
  loading: activities.loading
});

const mapDistpatchToProps = dispatch => ({
  fetchAndHandleActivities: () => dispatch(fetchAndHandleActivities())
});

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(ActivityList);
