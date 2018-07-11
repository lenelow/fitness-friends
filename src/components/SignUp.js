import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <input type="text" name="username" value="Username" />
        <input type="password" name="password" value="Password" />
        <input type="text" name="image" alt="Signup" />
        <textarea
          name="bio"
          Tell
          us
          about
          yourself
          and
          what
          sparks
          your
          love
          for
          fitness
        />
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
