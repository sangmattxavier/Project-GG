import React, { Component } from "react"
import { Link } from "react-router-dom"

import AccountSubmitButton from "./AccountSubmitButton"
import AccountNote from "./AccountNote"

const requirementsList = [
  "- At least 8 characters",
  "- At least 1 number",
  "- At least 1 special character",
  "- No spaces"
]

class RegisterOrLoginObject extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const requirementsComponent = requirementsList.map(function(item) {
      console.log("test")
      return <li>{item}</li>
    })
    return (
      <div className="accountContainer" style={this.props.adjust}>
        {/* ACCOUNT FORM SECTION */}
        <form className="accountFormSection">
          <p className="accountTitle">{this.props.title}</p>
          <input type="text" placeholder="Email" />
          {this.props.userRegister && (
            <div className="accountRequirements">
              <p>Password Requirements</p>
              <ul>{requirementsComponent}</ul>
            </div>
          )}
          <input type="password" placeholder="Password" />
          {this.props.userRegister && (
            <input type="password" placeholder="Confirm Password" />
          )}
        </form>

        {/* ACCOUNT SUBMIT BUTTON */}
        <AccountSubmitButton
          label={this.props.submitLabel}
          adjust={styles.AccountSubmitButton}
          link="/home"
        />

        {/* ACCOUNT NOTES SECTION */}
        <div className="accountNoteSection">
          {this.props.userRegister ? (
            <AccountNote
              staticText="Existing User?"
              linkText=" Sign in!"
              link="/login"
            />
          ) : (
            <div>
              <AccountNote
                staticText="Forgot Password?"
                linkText=" Reset!"
                link="/"
              />
              <AccountNote
                staticText="New User?"
                linkText=" Sign up!"
                link="/register"
              />
            </div>
          )}
        </div>
      </div>
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
