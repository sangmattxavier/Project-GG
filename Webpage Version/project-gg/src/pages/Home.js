import React, { Component } from "react"
import { Animated } from "react-animated-css"

import Navbar from "../components/Navbar"
import LeftSideContent from "../components/LeftSideContent"
import SpicyPost from "../components/SpicyPost"
import NewPost from "../components/NewPost"
import NewsFeed from "../components/NewsFeed"
import Friends from "../components/Friends"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div style={styles.homeContainer} className="toggleShadow">
        <Navbar />

        <div style={styles.homeContet}>
          <div style={styles.homeEventsAndGroupsColumn}>
            <LeftSideContent
              title="Events"
              isEvent={true}
              require={require("../assets/icons/circus-100.png")}
            />
            <LeftSideContent
              title="Groups"
              isEvent={false}
              require={require("../assets/icons/groups-48.png")}
            />
          </div>
          <div style={styles.homeMainContentColumn}>
            <div style={styles.homeSpicyPostSection}>
              <SpicyPost />
            </div>
            <div style={styles.homeNewPostSection}>
              <NewPost />
            </div>
            <div style={styles.homeNewsFeedSection}>
              <NewsFeed />
            </div>
          </div>
          <div style={styles.homeFriendsColumn}>
            <Friends />
          </div>
        </div>
      </div>
    )
  }
}
export default Home

const styles = {
  homeContainer: {
    width: "100%",
    color: "white",
    background: "none",
    backgroundColor: "#332f31"
  },
  homeContet: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    justifyContent: "space-evenly"
  },
  homeEventsAndGroupsColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    width: "12%",
    boxSizing: "border-box"
  },
  leftSideContent: {},
  homeMainContentColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    width: "50%"
  },
  homeSpicyPostSection: {
    height: "300px"
  },
  homeNewPostSection: {
    height: "300px"
  },
  homeNewsFeedSection: {
    height: "300px"
  },
  homeFriendsColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    width: "12%",
    boxSizing: "border-box"
  }
}
