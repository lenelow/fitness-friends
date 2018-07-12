import React, { Component } from 'react'
// import data from './profile-data.json'
import FriendList from './FriendsList'
import './Welcome.css'

class Welcome extends Component {
  render () {
    return (
      <div>
        <h1>Welcome, Jimmy Byess!</h1>
        <FriendList />
      </div>
    )
  }
}

export default Welcome

// the code that will go in the h1 tag once the db is seeded 
// is in the Welcome.css
