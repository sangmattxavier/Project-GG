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
        <section className="window" id="top">
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
        </section>
        <section className="window" id="about">
          <div className="graphic"><img 
            src={require("../Assets/TwoPeopleHoldingControllers.png")}
            id="aboutPic"
            alt="Family"
          /></div>
          <div className="info">
            <div className="infoHead">What is GG?</div>
            <div className="infoDesc">
              GG is a social media platform where users can share video-game 
              related content to each other and earn experience for sharing that content.
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Landing
