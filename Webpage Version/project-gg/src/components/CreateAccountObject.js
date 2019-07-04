import React, { Component } from "react"
import AccountSubmitButton from "../components/AccountSubmitButton"
import { Link } from "react-router-dom"

class CreateAccountObject extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <form className="AccountWindow">
        <div>
          <p className="AccountTitle">Register</p>
        </div>
        <div className="AccountFormSection">
          <input type="text" placeholder="Email" />
          <div className="AccountRequirements">
            <p>Password Requirements</p>

            <p>- At least 8 characters</p>
            <p>- At least 1 number</p>
            <p>- At least 1 special character</p>
            <p>- No spaces</p>
          </div>
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <div>
          <AccountSubmitButton label="Create" />
        </div>
        <div className="AccountNote">
          <p className="AccountNoteLeft">Existing User?</p>
          <Link to="/login">
            {""}
            <p className="AccountNoteRight">Sign in!</p>
            {""}
          </Link>
        </div>
      </form>
    )
  }
}
export default CreateAccountObject
