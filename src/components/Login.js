import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

class Login extends Component {
  render () {
    return (
      <div>
        <h1 className="loginForm">Log In</h1>
        <form>
          <input
            className='loginInfo'
            type='text'
            value='Email'
            onChange={this.props.handleInput}
          />
          <br />
          <input
            className='loginInfo'
            type='text'
            value='Password'
            onChange={this.props.handleInput}
          />
          <br />
          <Link to='/'>
            <button
              className='loginButton'
              type='Submit'
              value='Login'
              onClick={this.props.handleLogIn}
            >
              Submit
            </button>
          </Link>
        </form>
        <Link to='/signup' id='signup'>
          Don't have an account? Sign up here!
        </Link>
      </div>
    )
  }
}

export default Login
