import React, { Component } from "react"

const eventContent = {
  event1: {
    label: "Smash Tournament",
    subLabel: "7.20.19"
  },
  event2: {
    label: "CSGO Tournament",
    subLabel: "8.13.19"
  },
  event3: {
    label: "Smash Meetup",
    subLabel: "10.3.19"
  }
}
const groupContent = {
  group1: {
    label: "NJ Smash Group",
    subLabel: "Admin"
  },
  group2: {
    label: "CSGO West Coast",
    subLabel: "Member"
  },
  group3: {
    label: "College Gamers",
    subLabel: "Member"
  }
}
const content = []
class LeftSideContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="leftSideContent" style={this.props.adjust}>
        <label className="leftSideContentTitle">
          <p>{this.props.title}</p>
          <img src={this.props.require} />
        </label>
        <ul className="leftSideContentList">
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
