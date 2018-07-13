import React, { Component } from 'react'
import './SignUp.css'

class SignUp extends Component {
  render () {
    return (
      <div className='form'>
        <h1 className='createAccount'>Create An Account:</h1>
        <div className='inputForm'>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              className='signupInput'
              type='text'
              name='username'
              onChange={this.props.handleInput}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input className='signupInput' type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              className='signupInput'
              type='text'
              name='password'
              onChange={this.props.handleInput}
            />
          </div>
          <div>
            <label htmlFor='image'>Profile Picture</label>
            <input className='signupInput' type='text' name='image' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='bio'>Bio</label>
            <input
              className='signupInput'
              type='text'
              name='bio'
              placeholder='Tell us about yourself'
              onChange={this.props.handleInput}
            />
          </div>
        </div>
        <div>
          <h3 className='preferences'>Preferences:</h3>
          <input className='checkbox' type='checkbox' name='preferences[biking]' value='true' />
          <label>Biking</label>
          <br />
          <input className='checkbox' type='checkbox' name='preferences[running]' value='true' />
          <label>Running</label>
          <br />
          <input className='checkbox' type='checkbox' name='preferences[swimming]' value='true' />
          <label>Swimming</label>
          <br />
          <input className='checkbox' type='checkbox' name='activitiy[cycling]' value='true' />
          <label>Cycling</label>
          <br />
          <input className='checkbox' type='checkbox' name='preferences[yoga]' value='true' />
          <label>Yoga</label>
          <br />
          <input className='checkbox' type='checkbox' name='preferences[pilates]' value='true' />
          <label>Pilates</label>
          <br />
          <input className='checkbox' type='checkbox' name='preferences[weightlifting]' value='true' />
          <label>Weightlifting</label>
          <br />
          <input className='checkbox' type='checkbox' name='preferences[crossfit]' value='true' />
          <label>Crossfit</label>
          <br />
          <input className='checkbox' type='checkbox' name='preferences[solidcore]' value='true' />
          <label>Solidcore</label>
        </div>
        <button className='signupButton' value='signup' type='submit' onClick={this.props.handleSignUp}>Sign Up</button>
      </div>
    )
  }
}

export default SignUp
