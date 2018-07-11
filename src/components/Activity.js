import React, { Component } from "react";

class Activity extends Component {
  render() {
    // let time = this.props.time.toString();

    // function insert(index, insert, string) {
    //   if (index > 0)
    //     return (
    //       string.substring(0, index) +
    //       insert +
    //       string.substring(index, this.length)
    //     );
    //   else return string + this;
    // }

    // let displayTime;
    // if (time <= 1200) {
    //   displayTime = insert(2, ":", time) + " AM";
    // } else {
    //   let pmTime = this.props.time - 1200;
    //   displayTime = insert(2, ":", pmTime.toString()) + " PM";
    // }

    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>
          {this.props.date}, {this.props.time}
        </h3>
        <p>{this.props.location}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Activity;
