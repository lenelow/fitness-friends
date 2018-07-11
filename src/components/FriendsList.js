import React, { Component } from 'react'
import data from './profile-data.json'
import './FriendList.css'

class FriendsList extends Component {
  render () {
    return (
      <div>
        <h1>Friend List</h1>
        <ul className='friendList'>
          {data.map(user => (
            <li>
              {user.username}
              <img src={user.image} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FriendsList
