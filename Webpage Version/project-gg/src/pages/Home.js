import React, { Component } from "react"
import "../styles/Home.css"

import Navbar from "../components/Navbar"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="HomeContainer">
        <Navbar />

        <div className="HomeContent">
          <div className="HomeEventsAndGroupsColumn">
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
            <div className="HomeGroups">
              <div className="HomeEvents">
                <label className="eventsTitle">
                  <p>Groups</p>
                  <img src={require("../Assets/icons/groups-48.png")} />
                </label>
                <ul className="eventsList">
                  <li>
                    <label>NJ Smash Group</label>
                    <p>Admin</p>
                  </li>
                  <li>
                    <label>CSGO West Coast</label>
                    <p>Member</p>
                  </li>
                  <li>
                    <label>College Gamers</label>
                    <p>Member</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="HomeMainContentColumn">
            <div className="HomeSpicyPostSection">
              <label className="spicyPostTitle">
                <img
                  src={require("../Assets/icons/fire-100.png")}
                  className="SpicyPostIconImage"
                />
                <p>Spiciest Posts of the Day!</p>
              </label>
              <div className="spicyPostContent">
                This is where we will put the spicy post content
              </div>
            </div>
            <div className="HomeSpicyPostSection">
              <label className="spicyPostTitle">
                <img
                  src={require("../Assets/icons/post-96.png")}
                  className="SpicyPostIconImage"
                />
                <p>New Post</p>
              </label>
              <div className="spicyPostContent">
                <form className="Post">
                  <input
                    type="text"
                    placeholder="Post Here..."
                    className="PostInput"
                  />
                </form>
              </div>
            </div>
            <div className="HomeSpicyPostSection">
              <label className="spicyPostTitle">
                <p>News Feed</p>
              </label>
            </div>
          </div>
          <div className="HomeFriendsColumn">Friends</div>
        </div>
      </div>
    )
  }
}
export default Home

var styles = {
  homeNavBar: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
}
