import React, { Component } from "react"
import CreateAccountObject from "../components/CreateAccountObject"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import BackButton from "../components/BackButton"

import "../styles/loginAndSignup.css"
//<Logo color={"white"} />
class Signup extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <img src={require("../Assets/BoyBand.png")} className="boyBandImage" />
        <Link to="/home">
          <BackButton />
        </Link>

        <img
          src={require("../Assets/Controller.png")}
          className="controllerImage"
        />

        <CreateAccountObject />
      </React.Fragment>
    )
  }
}
export default Signup
