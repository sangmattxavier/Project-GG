import React, { Component } from "react"
import { Link } from "react-router-dom"

class Navbar extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
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
            <img src={require("../Assets/icons/castle-90.png")} />
          </button>
          <button className="HomeNavButton">
            <img src={require("../Assets/icons/activity-100.png")} />
          </button>
          <button className="HomeNavButton">
            <img src={require("../Assets/icons/mailbox-100.png")} />
          </button>
          <button className="HomeNavButton">
            <img src={require("../Assets/icons/settings-100.png")} />
          </button>

          <button className="HomeNavButton">
            <Link className="link" to="/">
              {" "}
              <img src={require("../Assets/icons/logout-100.png")} />
            </Link>
          </button>
        </div>
      </div>
    )
  }
}
export default Navbar
