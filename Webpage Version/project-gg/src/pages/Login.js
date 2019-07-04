import React, { Component } from "react"
import AccountSubmitButton from "../components/AccountSubmitButton"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import BackButton from "../components/BackButton"

import "../styles/matt.css"
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
        <div className="container">
          <form className="LoginWindow">
            <p className="LoginTitle">Login</p>
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
