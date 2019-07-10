import React, { Component } from "react"

class AccountSubmitButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <button className="AccountSubmitButton" style={this.props.adjust}>
        {this.props.label}
      </button>
    )
  }
}
export default AccountSubmitButton
