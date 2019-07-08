import React, { Component } from "react"
import { Link } from "react-router-dom"

class SpicyPost extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <label className="spicyPostTitle">
          <img
            src={require("../Assets/icons/fire-100.png")}
            className="SpicyPostIconImage"
          />
          <p>Spiciest Posts of the Day!</p>
        </label>
        <div className="spicyPostContent">
          This is where we will put the spicy post content
        </div>
      </div>
    )
  }
}
export default SpicyPost
