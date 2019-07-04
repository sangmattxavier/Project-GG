import React, { Component } from "react"
import { Link } from "react-router-dom"

class AccountSubmitButton extends Component {
  constructor(props) {
    super()
    this.state = {}
  }
  render() {
    return (
      <Link to="/Home">
        {""}
        <button className="AccountSubmitButton">{this.props.label}</button>
        {""}
      </Link>
    )
  }
}
export default AccountSubmitButton
