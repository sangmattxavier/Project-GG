import React, { Component } from "react"

class Searchbar extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <form>
        <input type="text" className="searchbar" placeholder="Explore..." />
      </form>
    )
  }
}
export default Searchbar
