import React, { Component } from "react"
import CreateAccountObject from "../components/CreateAccountObject"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import BackButton from "../components/BackButton"

import "../styles/SignupPage.css"
//<Logo color={"white"} />
//<img src={require("../Assets/BoyBand.png")} className="boyBandImage" />
//<img src={require("../Assets/Controller.png")} className="controllerImage" />
//    <Link to="/home"> <BackButton /> </Link>
const width = window.innerWidth
const height = window.innerHeight

class Signup extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="superContainer" style={{ width: width, height: height }}>
        <Link to="/">
          {""}
          <Logo color={"white"} />
          {""}
        </Link>

        <div className="container">
          <div className="leftUI">
            <div className="topUI">
              <img
                src={require("../Assets/BoyBand.png")}
                className="boyBandImage"
              />
              <Link to="/">
                {" "}
                <BackButton />{" "}
              </Link>
            </div>
            <div className="botUI">
              <img
                src={require("../Assets/Controller.png")}
                className="controllerImage"
              />
            </div>
          </div>
          <div className="rightUI">
            <CreateAccountObject />
          </div>
        </div>
      </div>
    )
  }
}
export default Signup
