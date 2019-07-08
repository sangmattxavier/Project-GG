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

            <ul>
              <li>- At least 8 characters</li>
              <li>- At least 1 number</li>
              <li>- At least 1 special character</li>
              <li>- No spaces</li>
            </ul>
          </div>
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <div>
          <Link className="link" to="/home">
            {""}
            <AccountSubmitButton label="Create" />
            {""}
          </Link>
        </div>
        <div className="AccountNoteSection">
          <p className="AccountNote">
            Existing User?
            <Link className="link" to="/login">
              {""}
              {" Sign in!"}
              {""}
            </Link>
          </p>
        </div>
      </form>
    )
  }
}
export default CreateAccountObject

var styles = {
  AccountWindow: {},
  AccountTitle: {}
}
