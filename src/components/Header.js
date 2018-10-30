import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <Link to="/">
            <h1 className="logo">Fitness Friends</h1>
          </Link>
          <Link to="/profile/5b47b3d9b971b10004e7c9b7">
            <h1 className="navButton myProfile">My Profile</h1>
          </Link>
          <Link to="/login">
            <h1 className="navButton">Logout</h1>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
