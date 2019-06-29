import React, { Component } from "react"
import CreateAccountObject from "../components/CreateAccountObject"
import AccountSubmitButton from "../components/AccountSubmitButton"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import BackButton from "../components/BackButton"

import "../styles/loginAndSignup.css"
class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <div>
          <Logo color={"white"} />
        </div>
          <div>
          <form className="AccountObject">
            <p className="AccountTitle">Login</p>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <AccountSubmitButton label="Login" />
          </form>
        </div>
      </div>
    )
  }
}
export default Login
