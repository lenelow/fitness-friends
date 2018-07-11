import React, { Component } from 'react'

class Activity extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>
          {this.props.date}, {this.props.time}
        </h3>
        <p>{this.props.location}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Activity
