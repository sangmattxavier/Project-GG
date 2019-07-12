import React, { Component } from "react"
import { Link } from "react-router-dom"

class AccountSubmitButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Link className="link" to={this.props.link}>
        {""}
        <button className="AccountSubmitButton" style={this.props.adjust}>
          {this.props.label}
        </button>
        {""}
      </Link>
    )
  }
}
export default AccountSubmitButton
