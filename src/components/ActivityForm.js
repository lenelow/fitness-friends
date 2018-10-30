import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NewActivity.css";

class NewActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      location: props.location || "",
      date: props.date || "",
      time: props.time || "",
      description: props.description || ""
    };
  }

  handleChange = e => {
    // code this function to update the state with the inputs
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
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
    this.props.onSubmit(activity);
  };

  validateState = () => {
    const nameState = this.state.name.length;
    const locationState = this.state.location.length;
    const dateState = this.state.date.length;
    const timeState = this.state.time.length;
    const descriptionState = this.state.description.length;

    if (
      nameState > 0 &&
      locationState > 0 &&
      dateState > 0 &&
      timeState > 0 &&
      descriptionState > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="new-activity form">
        <h1 className="newActivity">{this.props.title}</h1>
        <form>
          <label>Activity Name *</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />
          <label>Location *</label>
          <input
            type="text"
            name="location"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <br />
          <label>Date *</label>
          <input
            type="text"
            name="date"
            placeholder="01/01/2020"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <br />
          <label>Time *</label>
          <input
            type="text"
            name="time"
            placeholder="11:00 am"
            onChange={this.handleChange}
            value={this.state.time}
          />
          <br />
          <label>Description *</label>
          <div className="descriptionAndButton">
            <textarea
              className="newActivityDescription"
              name="description"
              placeholder="add some notes about your activity!"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <br />
            <Link to="/profile/:id">
              <button
                className="newActivityButton"
                onClick={this.handleSubmit}
                disabled={this.validateState()}
              >
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
