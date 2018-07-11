import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return 
    <div>
    <input type="text" value="Username"/>
    <input type="password" value="Password" />
    <input type="image" alt="Signup" />
    <h3>preferences:</h3>
    <input type="checkbox" name="biking" value="true">
    <label>Biking</label>
    <br />
    <input type="checkbox" name="running" value="true">
    <label>Running</label>
    <br />
    <input type="checkbox" name="swimming" value="true">
    <label>Swimming</label>
    <br />
    <input type="checkbox" name="cycling" value="true">
    <label>Cycling</label>
    <br />
    <input type="checkbox" name="yoga" value="true">
    <label>Yoga</label>
    <br />
    <input type="checkbox" name="pilates" value="true">
    <label>Pilates</label>
    <br />
    <input type="checkbox" name="weightlifting" value="true">
    <label>weightlifting</label>
    <br />
    <input type="checkbox" name="crossfit" value="true">
    <label>Crossfit</label>
    <br />
    <input type="checkbox" name="solidcore" value="true">
    <label>Solidcore</label>
    </div>
  }
}

export default SignUp;


User: username, email, password, profile picture
Profile: username, profile picture, preferences/interest, friendlist, schedule 
