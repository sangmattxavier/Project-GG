import React, { Component } from "react"
import "../styles/Home.css"
import { Link } from "react-router-dom"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="HomeContainer">
        <div className="HomeNavBar">
          <Link className="link" to="/home">
            {" "}
            <p className="HomeLogoText">GG</p>{" "}
          </Link>
          <form>
            <input
              type="text"
              className="HomeSearchbar"
              placeholder="Explore..."
            />
          </form>
          <div className="HomeNavButtons">
            <button className="HomeNavProfile" />
            <button className="HomeNavButton">
              <img
                src={require("../Assets/icons/castle-90.png")}
                className="HomeIconImage"
              />
              <label>Home</label>
            </button>
            <button className="HomeNavButton">
              <img
                src={require("../Assets/icons/activity-100.png")}
                className="HomeIconImage"
              />
              <label>Activity</label>
            </button>
            <button className="HomeNavButton">
              <img
                src={require("../Assets/icons/mailbox-100.png")}
                className="HomeIconImage"
              />
              <label>Messages</label>
            </button>
            <button className="HomeNavButton">
              <img
                src={require("../Assets/icons/settings-100.png")}
                className="HomeIconImage"
              />
              <label>Settings</label>
            </button>

            <button className="HomeNavButton">
              <Link className="link" to="/">
                {" "}
                <img
                  src={require("../Assets/icons/logout-100.png")}
                  className="HomeIconImage"
                />
                <label>Logout</label>{" "}
              </Link>
            </button>
          </div>
        </div>

        <div className="HomeContent">
          <div className="HomeEventsAndGroupsColumn">
            <div className="HomeEvents">
              <label className="eventsTitle">
                <p>Events</p>
                <img
                  src={require("../Assets/icons/circus-100.png")}
                  className="HomeIconImage"
                />
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
                  <img
                    src={require("../Assets/icons/groups-48.png")}
                    className="HomeIconImage"
                  />
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
