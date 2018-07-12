import React, { Component } from "react";
import Link from "react-router-dom";

class Activity extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>
          {this.props.date}, {this.props.time}
        </h3>
        <p>{this.props.location}</p>
        <p>{this.props.description}</p>
        <Link to={"/activity/" + this.props.id}>
          <h3>Edit this activity</h3>
        </Link>
      </div>
    );
  }
}

export default Activity;
