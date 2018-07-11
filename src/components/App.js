import React, { Component } from 'react'
import './App.css'
import Profile from './Profile'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Fitness Friends</h1>
        </header>
        <a href='/signup' id='signup'>
          Don't have an account? Sign up here!
        </a>
        <Profile />
      </div>
    )
  }
}

export default App
