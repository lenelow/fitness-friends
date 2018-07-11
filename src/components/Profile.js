import React, { Component } from 'react'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: 'Jimmy Byess',
      image: 'http://img2.timeinc.net/people/i/2015/cbb/blog/150518/jimmy-fallon-02-300x400.jpg',
      bio: 'I love to make bread and go running',
      preferences: ['running', 'biking', 'weightlifting']
    }
  }
  render () {
    return (
      <div>
        <h1>{this.state.user}'s Profile</h1>
        <img src={this.state.image} />
        <p>{this.state.bio}</p>
        <ul>
          <li>{this.state.preferences[0]}</li>
          <li>{this.state.preferences[1]}</li>
          <li>{this.state.preferences[2]}</li>
        </ul>
      </div>
    )
  }
}

export default Profile
