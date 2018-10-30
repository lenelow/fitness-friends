import React, { Component } from "react";
// import Link from "react-router-dom";

// class Activity extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <h3>
//           {this.props.date}, {this.props.time}
//         </h3>
//         <p>{this.props.location}</p>
//         <p>{this.props.description}</p>
//         <Link to={"/activity/" + this.props.id}>
//           <h3>Edit this activity</h3>
//         </Link>
//       </div>
//     );
//   }
// }
import "./Activity.css";

const Activity = ({ name, time, date, location, description }) => (
  <div classname="activityDetails">
    <h1 className="name">{name}</h1>
    <h2 className="dateAndTime">
      {date}, {time}
    </h2>
    <p className="location">{location}</p>
    <p className="description">{description}</p>
  </div>
);

export default Activity;
