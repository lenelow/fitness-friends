import React, { Component } from 'react'
import Activity from './Activity'
import './ActivityList.css'

class ActivityList extends Component {
  constructor () {
    super()
    this.state = {
      activities: [
        {
          _id: '5b461dbddddc474f3e56beb2',
          name: 'jogging',
          location: 'Meridien Hill Park',
          date: '7/13/2018',
          time: '5 pm',
          description: "I'll be jogging around 5 miles at a 8:00 pace"
        },
        {
          _id: '5b461dbddddc474f3e56beb3',
          name: 'kayaking',
          location: 'Key Bridge Boathouse',
          date: '7/20/2018',
          time: '9 am',
          description: "I'll be kayaking for 1-2 hours"
        },
        {
          _id: '5b461dbddddc474f3e56beb4',
          name: 'Soul Cycle',
          location: 'Mount Vernon Soul Cycle',
          date: '7/16/2018',
          time: '7 am',
          description: "I'll be taking Gregg's 7:00am class!"
        }
      ]
    }
  }

  render () {
    let table = this.state.activities.map((activity, idx) => {
      return (
        <section>
          <table class='activityTable'>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Location</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{activity.name}</td>
                <td>{activity.location}</td>
                <td>{activity.date}</td>
                <td>{activity.time}</td>
                <td>{activity.description}</td>
                <td>{activity.idx}</td>
              </tr>
            </tbody>
          </table>
        </section>
      )
    })
    return (
      <div>
        {table}
      </div>
    )
  }
}

export default ActivityList
