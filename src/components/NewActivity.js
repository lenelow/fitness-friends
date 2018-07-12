import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
      return <Redirect to="/" />;
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
    let id;
    axios
      .post("https://fitness-friends-api.herokuapp.com/api/activity/", activity)
      .then(res => {
        console.log(res);
        console.log(res.data);
        id = res.data._id;
        this.setState({
          redirect: true
        });
      })
      .catch(err => {
        console.log(err);
      });
    let url =
      "https://fitness-friends-api.herokuapp.com/user/" + this.props.userId;
    axios
      .put(url, { itemid: id })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="new-activity">
        {this.renderRedirect()}
        <h1>New Activity: </h1>
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
          <textarea name="description" onChange={this.handleChange} />
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewActivity;
