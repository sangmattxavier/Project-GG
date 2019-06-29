import React, { Component } from "react"

class AccountSubmitButton extends Component {
  constructor(props) {
    super()
    this.state = {}
  }
  render() {
    return <button className="AccountSubmitButton">{this.props.label}</button>
  }
}
export default AccountSubmitButton
