import React, { Component } from "react";
import Activity from "./Activity";

class ActivityList extends Component {
  constructor() {
    super();
    this.state = {
      activities: [
        {
          _id: "5b461dbddddc474f3e56beb2",
          name: "jogging",
          location: "Meridien Hill Park",
          date: "2018-07-13",
          time: 1700,
          description: "I'll be jogging around 5 miles at a 8:00 pace"
        },
        {
          _id: "5b461dbddddc474f3e56beb3",
          name: "kayaking",
          location: "Key Brigde Boathouse",
          date: "2018-07-20",
          time: 900,
          description: "I'll be kayaking for 1-2 hours"
        },
        {
          _id: "5b461dbddddc474f3e56beb4",
          name: "Soul Cycle",
          location: "Mount Vernon Soul Cycle",
          date: "2018-07-16",
          time: 700,
          description: "I'll be taking Gregg's 7:00am class!"
        }
      ]
    };
  }

  render() {
    let list = this.state.activities.map((activity, idx) => {
      return (
        <li>
          <Activity
            name={activity.name}
            location={activity.location}
            date={activity.date}
            time={activity.time}
            description={activity.description}
            idx={activity.idx}
          />
        </li>
      );
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default ActivityList;
