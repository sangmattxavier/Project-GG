import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBarIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <button className="HomeNavButton">
        <Link className="link" to={this.props.link}>
          {" "}
          <img src={this.props.require} />{" "}
        </Link>
      </button>
    )
  }
}
export default NavBarIcon
