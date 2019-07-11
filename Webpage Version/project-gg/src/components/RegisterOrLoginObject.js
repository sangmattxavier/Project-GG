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
      <form className="accountContainer" style={this.props.adjust}>
        <p className="accountTitle">{this.props.title}</p>

        <div className="accountFormSection">
          <input type="text" placeholder="Email" />
          {this.props.userRegister && (
            <div className="accountRequirements">
              <p>Password Requirements</p>

              <ul>
                <li>- At least 8 characters</li>
                <li>- At least 1 number</li>
                <li>- At least 1 special character</li>
                <li>- No spaces</li>
              </ul>
            </div>
          )}
          <input type="text" placeholder="Password" />
          {this.props.userRegister && (
            <input type="text" placeholder="Confirm Password" />
          )}
        </div>
        <div>
          <Link className="link" to="/home">
            {""}
            <AccountSubmitButton
              label={this.props.submitLabel}
              adjust={styles.AccountSubmitButton}
            />
            {""}
          </Link>
        </div>
        <div className="accountNoteSection">
          {this.props.userRegister ? (
            <p className="accountNote">
              Existing User?
              <Link className="link" to="/login">
                {""}
                {" Sign in!"}
                {""}
              </Link>
            </p>
          ) : (
            <div>
              <p className="accountNote">
                Forgot Password?
                <Link className="link" to="/">
                  {""}
                  {" Reset!"}
                  {""}
                </Link>
              </p>
              <p className="accountNote">
                New User?
                <Link className="link" to="/signup">
                  {""}
                  {" Sign up!"}
                  {""}
                </Link>
              </p>
            </div>
          )}
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
