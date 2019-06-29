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
          <div>
            <p className="AccountTitle">Register</p>
          </div>
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
          <div>
            <AccountSubmitButton label="Create" />
          </div>
          <div className="AccountNote">
            <p className="AccountNoteLeft">Existing User?</p>
            <p className="AccountNoteRight">Sign in!</p>
          </div>
        </form>
      </div>
    )
  }
}
export default CreateAccountObject
