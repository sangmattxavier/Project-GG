import React, { Component } from "react"

class HollowButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <button className="hollowButton" style={this.props.adjust}>
        {this.props.label}
      </button>
    )
  }
}
export default HollowButton
