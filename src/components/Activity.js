import React, { Component } from "react";
import "./Activity.css";

class Activity extends Component {
  render() {
    return (
      <div classname="activityDetails">
        <h1 className="name">{this.props.name}</h1>
        <h2 className="dateAndTime">
          {this.props.date}, {this.props.time}
        </h2>
        <p className="location">{this.props.location}</p>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default Activity;
