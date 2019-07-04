import React, { Component } from "react"
import "../styles/Home.css"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="HomeContainer">
        <div className="HomeNavBar">My Nav Bar</div>
        <div className="HomeContent">
          <div className="HomeEventsAndGroupsColumn">
            <div className="HomeEvents">Events</div>
            <div className="HomeGroups">Groups</div>
          </div>
          <div className="HomeMainContentColumn">Main Content</div>
          <div className="HomeFriendsColumn">Friends</div>
        </div>
      </div>
    )
  }
}
export default Home
