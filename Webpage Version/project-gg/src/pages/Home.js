import React, { Component } from "react"
import "../styles/Home.css"

import Navbar from "../components/Navbar"
import LeftSideContent from "../components/LeftSideContent"
import SpicyPost from "../components/SpicyPost"

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
            <LeftSideContent />
            <LeftSideContent />
          </div>
          <div className="HomeMainContentColumn">
            <div className="HomeSpicyPostSection">
              <SpicyPost />
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
