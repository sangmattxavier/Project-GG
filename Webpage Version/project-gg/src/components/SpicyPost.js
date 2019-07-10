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
        <label className="subContentTitle">
          <img src={require("../Assets/icons/fire-100.png")} />
          <p>Spiciest Posts of the Day!</p>
        </label>
        <div className="subContent">
          This is where we will put the spicy post content
        </div>
      </div>
    )
  }
}
export default SpicyPost
