import React, { Component } from 'react'
import data from './profile-data.json'
import './FriendList.css'

class FriendsList extends Component {
  render () {
    return (
      <div>
        <h1 className='myFriends'>My Friends</h1>
        <ul className='friendList'>
          {data.map(user => (
            <li>
              <div className='friend'>
                <img src={user.image} height='150' width='150' />
                <h3>{user.username}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FriendsList
