import React, { Component } from "react"
import { Link } from "react-router-dom"

import NavBarIcon from "./NavBarIcon"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="HomeNavBar" style={this.props.adjust}>
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
          <NavBarIcon
            link="/"
            require={require("../Assets/icons/castle-90.png")}
          />
          <NavBarIcon
            link="/"
            require={require("../Assets/icons/activity-100.png")}
          />
          <NavBarIcon
            link="/"
            require={require("../Assets/icons/messages-90.png")}
          />
          <NavBarIcon
            link="/"
            require={require("../Assets/icons/settings-100.png")}
          />
          <NavBarIcon
            link="/"
            require={require("../Assets/icons/logout-100.png")}
          />
        </div>
      </div>
    )
  }
}
export default Navbar
