import React, { Component } from "react"
import Searchbar from "./Searchbar"
import Logo from "./Logo"

class Navbar extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="navbar">
        <Searchbar />
        <Logo />
        this is the navbar container
      </div>
    )
  }
}
export default Navbar
