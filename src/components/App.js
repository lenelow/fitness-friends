import React, { Component } from 'react'
import './App.css'
import Welcome from './Welcome'
import Profile from './Profile'
import Login from './Login'
import { Route, Link } from 'react-router-dom'
import SignUp from './SignUp'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleSingUp = this.handleLogOut.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp (e) {
    e.preventDefault()
    axios
      .post('http://localhost:3001/users/signup', {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({ isLoggedIn: true })
      })
      .catch(err => console.log(err))
  }

  handleLogOut () {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleLogIn (e) {
    e.preventDefault()
    axios
      .post('http://localhost:3001/users/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.token = res.data.token
        this.setState({ isLoggedIn: true })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='App'>
        <nav className='nav'>
          <Link to='/'><h1 className='logo'>Fitness Friends</h1></Link>
          <Link to='/profile/:id'><h1 className='navButton myProfile'>My Profile</h1></Link>
          <Link to='/login'><h1 className='navButton'>Logout</h1></Link>
        </nav>
        <main>
          <Route
            path='/'
            exact
            component={Welcome}
          />
          <Route
            path='/profile/:id'
            exact
            component={Profile}
          />
          <Route
            path='/login'
            exact
            component={Login}
          />
          <Route
            path='/signup'
            exact
            component={SignUp}
          />
        </main>
      </div>
    )
  }
}

export default App
