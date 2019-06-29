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
        <form className="AccountWindow">
          <p className="AccountTitle">Create Account</p>
          <div className="AccountFormSection">
            <input type="text" placeholder="Email" />
            <p className="AccountSubtitle">Password Requirements</p>
            <ul>
              <li>- At least 8 characters</li>
              <li>- At least 1 number</li>
              <li>- At least 1 special character</li>
              <li>- No spaces</li>
            </ul>
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
          </div>
          <AccountSubmitButton label="Create" />
        </form>
      </div>
    )
  }
}
export default CreateAccountObject
