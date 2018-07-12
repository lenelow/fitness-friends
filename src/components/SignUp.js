import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return;
    <div className="form">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={this.props.handleInput} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={this.props.handleInput} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" onChange={this.props.handleInput} />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" onChange={this.props.handleInput} />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <input type="text" name="bio" placeholder="Tell us about yourself" onChange={this.props.handleInput}/>
      <div>
       <div> 
        <h3>Preferences:</h3>
        <input type="checkbox" name="preferences[biking]" value="true" />
        <label>Biking</label>
        <br />
        <input type="checkbox" name="preferences[running]" value="true" />
        <label>Running</label>
        <br />
        <input type="checkbox" name="preferences[swimming]" value="true" />
        <label>Swimming</label>
        <br />
        <input type="checkbox" name="activitiy[cycling]" value="true" />
        <label>Cycling</label>
        <br />
        <input type="checkbox" name="preferences[yoga]" value="true" />
        <label>Yoga</label>
        <br />
        <input type="checkbox" name="preferences[pilates]" value="true" />
        <label>Pilates</label>
        <br />
        <input type="checkbox" name="preferences[weightlifting]" value="true" />
        <label>Weightlifting</label>
        <br />
        <input type="checkbox" name="preferences[crossfit]" value="true" />
        <label>Crossfit</label>
        <br />
        <input type="checkbox" name="preferences[solidcore]" value="true" />
        <label>Solidcore</label> */}
    </div>
    <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
  </div>;
  }
}

export default SignUp;
