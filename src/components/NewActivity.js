import React, { Component } from "react";
import "./NewActivity.css";
import ActivityForm from "./ActivityForm";
import { handleCreateActivity } from "../actions/activities";
import { connect } from "react-redux";

class NewActivity extends Component {
  constructor() {
    super();
  }
 
  onSubmit = activity => {
    this.props.onSubmit(activity)
    this.props.history.push("/")
  }

  render() {
    return (
      <ActivityForm title='Add Activity' onSubmit={this.onSubmit}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (activity) => dispatch(handleCreateActivity(activity))
})

export default connect(undefined, mapDispatchToProps)(NewActivity);
