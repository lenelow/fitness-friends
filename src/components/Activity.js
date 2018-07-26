import React, { Component } from "react";
import "./Activity.css";

const Activity = ({name, time, date, location, description}) => (
      <div classname="activityDetails">
        <h1 className="name">{name}</h1>
        <h2 className="dateAndTime">
          {date}, {time}
        </h2>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
      </div>
)

export default Activity;
