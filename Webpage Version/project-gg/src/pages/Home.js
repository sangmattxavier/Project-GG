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
          <p className="HomeLogoText">GG</p>
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
            </button>
            <button className="HomeNavButton">
              <img
                src={require("../Assets/icons/activity-100.png")}
                className="HomeIconImage"
              />
            </button>
            <button className="HomeNavButton">
              <img
                src={require("../Assets/icons/mailbox-100.png")}
                className="HomeIconImage"
              />
            </button>
            <button className="HomeNavButton">
              <img
                src={require("../Assets/icons/settings-100.png")}
                className="HomeIconImage"
              />
            </button>

            <button className="HomeNavButton">
              <Link to="/">
                {" "}
                <img
                  src={require("../Assets/icons/logout-100.png")}
                  className="HomeIconImage"
                />{" "}
              </Link>
            </button>
          </div>
        </div>

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
