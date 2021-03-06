import React, { Component } from "react"
import AccountSubmitButton from "../components/AccountSubmitButton"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import HollowButton from "../components/HollowButton"

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
          <img
            src={require("../assets/images/Controller.png")}
            className="controllerImage"
            style={styles.controllerImage}
          />
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

var styles = {
  controllerImage: {
    alignSelf: "flex-end",
    marginTop: "24px"
    //position:
    // border: "2px solid #666666"
  }
}
