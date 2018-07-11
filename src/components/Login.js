import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" value="Username" />
        <br />
        <input type="text" value="Password" />
        <br />
        <input type="Submit" value="Login" />
      </div>
    );
  }
}

export default Login;
