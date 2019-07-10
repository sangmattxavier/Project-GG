import React, { Component } from "react"
import { Link } from "react-router-dom"

import AccountSubmitButton from "./AccountSubmitButton"

class RegisterOrLoginObject extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <form style={this.props.adjust} className="accountContainer">
        <p className="accountTitle">Register</p>

        <div className="accountFormSection">
          <input type="text" placeholder="Email" />
          <div className="accountRequirements">
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
            <AccountSubmitButton
              label="Create"
              adjust={styles.AccountSubmitButton}
            />
            {""}
          </Link>
        </div>
        <div className="accountNoteSection">
          <p className="accountNote">
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
export default RegisterOrLoginObject

const styles = {
  AccountSubmitButton: {
    marginTop: "10px",
    marginBottom: "0px"
  }
}
