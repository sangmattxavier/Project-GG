import React, { Component } from "react"
import CreateAccountObject from "../components/CreateAccountObject"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import BackButton from "../components/BackButton"

import "../styles/loginAndSignup.css"
//<Logo color={"white"} />
//<img src={require("../Assets/BoyBand.png")} className="boyBandImage" />
//<img src={require("../Assets/Controller.png")} className="controllerImage" />
//    <Link to="/home"> <BackButton /> </Link>

class Signup extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <Logo color={"white"} />
        <div className="container">
          <CreateAccountObject />
        </div>
      </React.Fragment>
    )
  }
}
export default Signup
