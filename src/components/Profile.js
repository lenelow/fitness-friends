import React, { Component } from 'react'
import './Profile.css'
import ActivityList from './ActivityList'

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
        <h1 className='usersName'>{this.state.user}'s Profile</h1>
        <div className='gridArea'>
          <div className='leftColumn'>
            <img src={this.state.image} height='200' width='150' />
            <p><text>About Me:</text> {this.state.bio}</p>
            <ul>
              <text className='title'>My Interests: </text>
              <li>{this.state.preferences[0]},</li>
              <li>{this.state.preferences[1]},</li>
              <li>{this.state.preferences[2]}</li>
            </ul>
          </div>
          <div className='rightColumn'>
            <h2 className='activitiesHeader'>My Activities</h2>
            <ActivityList />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
