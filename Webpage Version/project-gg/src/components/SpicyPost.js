import React, { Component } from "react"

class SpicyPost extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={this.props.adjust}>
        <label className="subContentTitle">
          <img src={require("../assets/icons/fire-100.png")} />
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
