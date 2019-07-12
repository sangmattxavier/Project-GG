import React, { Component } from "react"
import NavBarIcon from "./NavBarIcon"

const FriendsList = [
  {
    displayName: "Nate789",
    tokenId: "7rCpeQgJIrKKo6gubCkMDK",
    status: "active"
  },
  {
    displayName: "Aria_1920",
    tokenId: "30DhU7BDmF4PH0JVhu8ZRg",
    status: "away"
  },
  {
    displayName: "MichaMicha",
    tokenId: "30DhU7BDmF4PH0JVhu8ZRg",
    status: "off"
  },
  {
    displayName: "ItsYaBoyJoeJoe",
    tokenId: "30DhU7BDmF4PH0JVhu8ZRg",
    status: "away"
  },
  {
    displayName: "YazzyYeezy",
    tokenId: "30DhU7BDmF4PH0JVhu8ZRg",
    status: "active"
  },
  {
    displayName: "MayaPapaya",
    tokenId: "30DhU7BDmF4PH0JVhu8ZRg",
    status: "active"
  }
]

const content = []
class Friends extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="friends" style={this.props.adjust}>
        <label className="friendsTitle">
          <p>Comrades</p>
          <img src={require("../Assets/icons/heart-50.png")} />
        </label>
        <ul className="friendsList">
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
          <li>
            <button className="friendsProfileSmall" style={styles.NavBarIcon}>
              <NavBarIcon link="/" style={styles.image} />
            </button>
            <label>DisplayName</label>
            <button className="statusIcon" />
          </li>
        </ul>
      </div>
    )
  }
}
export default Friends

const styles = {
  homeNavProfile: {
    width: "48px",
    height: "48px"
  },
  image: {
    border: "2px solid black"
  }
}
