import React, { Component } from 'react'
import './App.css'
import Welcome from './Welcome'
import Profile from './Profile'
import Login from './Login'
import { Route, Link } from 'react-router-dom'

class App extends Component {
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
        </main>
      </div>
    )
  }
}

export default App
