import React, { Component } from 'react'
import Profile from './Profile'
import FriendList from './FriendsList'
import './Welcome.css'
import axios from 'axios'

class Welcome extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/profile/5b479ec5bd2ecb1843d9b595')
      .then((res) => {
        console.log(res)
        this.setState({
          name: res.data.username
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render () {
    return (
      <div>
        <h1 className='welcome'>Welcome, {this.state.name}</h1>
        <FriendList />
      </div>
    )
  }
}

export default Welcome
