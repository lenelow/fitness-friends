import React, { Component } from 'react'
import './Login.css'
// import Signup from './SignUp'

class Login extends Component {
  render () {
    return (
      <div>
        <h1 className='login'>Log In</h1>
        <form>
          <input className='loginInfo' type='text' value='Username' />
          <br />
          <input className='loginInfo' type='text' value='Password' />
          <br />
          <button className='loginButton' type='Submit' value='Login'>Submit</button>
        </form>
        <a href='/signup' id='signup'>
          Don't have an account? Sign up here!
        </a>
      </div>
    )
  }
}

export default Login
