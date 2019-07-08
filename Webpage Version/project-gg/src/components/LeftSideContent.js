import React, { Component } from "react"
import { Link } from "react-router-dom"

class LeftSideContent extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="HomeEvents">
        <label className="eventsTitle">
          <p>Events</p>
          <img src={require("../Assets/icons/circus-100.png")} />
        </label>
        <ul className="eventsList">
          <li>
            <label>Smash Tournament</label>
            <p>7.2.19</p>
          </li>
          <li>
            <label>CSGO Tournament</label>
            <p>7.2.19</p>
          </li>
          <li>
            <label>Smash Meetup</label>
            <p>7.2.19</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default LeftSideContent
