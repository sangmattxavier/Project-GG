import React, { Component } from "react"
import Logo from "../components/Logo"
import ControlButton from "../components/ControlButton"
import { Link } from "react-router-dom"
import "../styles/landing.css"

class Landing extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div id="landingPage">
        <div id="landHeader">
          <Logo color={"white"} />
          <div id="headLinks">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <section className="window">
          <Link to="/register">
            <ControlButton label="Register" id="register" />
          </Link>
          <img
            src={require("../Assets/ControllerUncut@2x.png")}
            id="controller"
            alt="Controller"
          />
          <Link to="/login">
            <ControlButton label="Login" id="login" />
          </Link>
<<<<<<< HEAD
        </section>
        <section className="window">
          TEST
        </section>
=======
        </div>
        <div className="section">TEST</div>
>>>>>>> 63f867d5374b42cfd44829bc109d408dd4c8256b
      </div>
    )
  }
}
export default Landing
