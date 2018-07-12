import React, { Component } from 'react'
import './App.css'
// import SignUp from "./SignUp";
import Login from './Login'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Fitness Friends</h1>
        </header>
        <Login />
      </div>
    )
  }
}

export default App
