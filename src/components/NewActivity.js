import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import "./NewActivity.css";

class NewActivity extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      date: "",
      time: "",
      description: "",
      redirect: false
    };
  }

  handleChange = e => {
    // code this function to update the state with the inputs
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/profile/:id" />;
    }
    //change this redirect later
  };

  handleSubmit = e => {
    // code this function to send the create request to the api
    e.preventDefault();
    const activity = {
      name: this.state.name,
      location: this.state.location,
      date: this.state.date,
      time: this.state.time,
      description: this.state.description
    };
    let activityId;
    if (
      this.state.name &&
      this.state.location &&
      this.state.date &&
      this.state.time &&
      this.state.description
    ) {
      axios
        .post(
          "http://fitness-friends-api.herokuapp.com/api/activity/",
          activity
        )
        .then(res => {
          console.log(res);
          activityId = res.data._id;
          {
            let url =
              "http://fitness-friends-api.herokuapp.com/api/profile/" +
              this.props.userId;
            axios
              .put(url, { itemid: activityId })
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          }
          this.setState({
            redirect: true
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("make sure all fields are filled out and re-submit");
    }
  };

  render() {
    return (
      <div className="new-activity form">
        {this.renderRedirect()}
        <h1 className="newActivity">New Activity: </h1>
        <h2> </h2>
        <form>
          <label>Activity Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <br />
          <label>Location:</label>
          <input type="text" name="location" onChange={this.handleChange} />
          <br />
          <label>Date:</label>
          <input type="text" name="date" onChange={this.handleChange} />
          <br />
          <label>Time:</label>
          <input type="text" name="time" onChange={this.handleChange} />
          <br />
          <label>Description:</label>
          <div className="descriptionAndButton">
            <textarea
              className="newActivityDescription"
              name="description"
              onChange={this.handleChange}
            />
            <br />
            <Link to="/profile/:id">
              <button className="newActivityButton" onClick={this.handleSubmit}>
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NewActivity;
