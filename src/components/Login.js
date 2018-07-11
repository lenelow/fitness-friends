import React, { Component } from "react";
import './Login.css'

class Login extends Component {
  render() {
    return (
      <div>
        <h1 className="login">Login</h1>
        <input className="loginInfo" type="text" value="Username" />
        <br />
        <input className="loginInfo" type="text" value="Password" />
        <br />
        <button className="loginButton" type="Submit" value="Login">Submit</button>
      </div>
    )
  }
}

export default Login;
