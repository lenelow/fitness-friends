<<<<<<< HEAD
import React, { Component } from 'react'
import './App.css'
import Profile from './Profile'
=======
import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
// import SignUp from "./SignUp";
import Welcome from "./Welcome";
>>>>>>> 233af6f4fc76bbc3428acd24794266a74cfac742

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
<<<<<<< HEAD
        <Profile />
=======
        {/* <SignUp /> */}
        <Welcome />
>>>>>>> 233af6f4fc76bbc3428acd24794266a74cfac742
      </div>
    )
  }
}

export default App
