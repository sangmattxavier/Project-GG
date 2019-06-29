import React, { Component } from "react"
import AccountSubmitButton from "../components/AccountSubmitButton"

class CreateAccountObject extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <form className="AccountObject">
          <p className="AccountTitle">Create Account</p>
          <input type="text" placeholder="Email" />
          <p>Password Requirements</p>
          <ul>
            <li>- At least 8 characters</li>
            <li>- At least 1 number</li>
            <li>- At least 1 special character</li>
            <li>- No spaces</li>
          </ul>
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <AccountSubmitButton label="Create" />
        </form>
      </div>
    )
  }
}
export default CreateAccountObject
