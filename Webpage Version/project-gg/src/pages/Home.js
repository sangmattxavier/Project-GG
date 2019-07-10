import React, { Component } from "react"

import Navbar from "../components/Navbar"
import LeftSideContent from "../components/LeftSideContent"
import SpicyPost from "../components/SpicyPost"
import NewPost from "../components/NewPost"
import NewsFeed from "../components/NewsFeed"

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div style={styles.homeContainer}>
        <Navbar />

        <div style={styles.homeContet}>
          <div style={styles.homeEventsAndGroupsColumn}>
            <LeftSideContent title="Events" />
            <LeftSideContent title="Groups" />
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
          <div style={styles.homeFriendsColumn}>Friends</div>
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
    justifyContent: "space-between"
  },
  homeEventsAndGroupsColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    width: "15%",
    boxSizing: "border-box"
  },
  leftSideContent: {},
  homeMainContentColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    width: "60%"
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
    marginTop: "100px",
    width: "15%",
    boxSizing: "border-box",

    height: "370px", //TEMPORARY
    border: "2px solid #a5a5a5" //TEMPORARY
  }
}
