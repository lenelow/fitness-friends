import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <input type="text" name="username" placeholder="Username" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <input type="text" name="image" placeholder="Image URL" alt="Signup" />
        <br />
        <textarea placeholder="Tell us about yourself" />
        <h3>preferences:</h3>
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
        <label>weightlifting</label>
        <br />
        <input type="checkbox" name="preferences[crossfit]" value="true" />
        <label>Crossfit</label>
        <br />
        <input type="checkbox" name="preferences[solidcore]" value="true" />
        <label>Solidcore</label>
      </div>
    );
  }
}

export default SignUp;
