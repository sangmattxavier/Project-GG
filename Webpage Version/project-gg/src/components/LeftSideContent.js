import React, { Component } from "react"

class LeftSideContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="leftSideContent" style={this.props.adjust}>
        <label className="leftSideContentTitle">
          <p>{this.props.title}</p>
          <img src={require("../Assets/icons/circus-100.png")} />
        </label>
        <ul className="leftSideContentList">
          <li>
            <label>Smash Tournament</label>
            <p>7.2.19</p>
          </li>
          <li>
            <label>CSGO Tournament</label>
            <p>7.2.19</p>
          </li>
          <li>
            <label>Smash Meetup</label>
            <p>7.2.19</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default LeftSideContent