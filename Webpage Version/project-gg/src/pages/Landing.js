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
          <a href="#top"><Logo color={"white"} /></a>
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
          <div className="graphic">
            <img 
              src={require("../Assets/TwoPeopleHoldingControllers.png")}
              id="aboutPic"
              alt="Family"
            />
          </div>
          <div className="info">
            <div className="infoHead">What is GG?</div>
            <div className="infoDesc">
              GG is a social media platform where users can share video-game 
              related content to each other and earn experience for sharing that content.
            </div>
          </div>
        </section>
        <section className="window" id="about2">
          <div className="graphic">
            <img
              src={require("../Assets/GamingEquipment.png")}
              id="about2Pic"
              alt="GamingEquipment"
            />
          </div>
          <div className="info">
            <div className="infoHead">Connect With Any User</div>
            <div className="infoDesc">
              Using our platform, you can share art, music, game information, and many more.
              You will connect to many users, and sometimes these users can be cool, but
              plenty of times, they will be racist, and sometimes that's life, and it's
              tough. Like really tough, but we will all get through it in the end my
              guy. Thank you for attending my sermon, that'll be $2000 dollars to my
              Venmo, @kinkywisetheclown.
            </div>
          </div>
        </section>
        <section className="window" id="faq">
          <div className="graphic">
            <img
              src={require("../Assets/GuyWithHeadset.png")}
              id="faqPic"
              alt="GuyWithHeadset"
            />
          </div>
          <div className="info">
            <div className="infoHead">FAQ</div>
            <div className="infoDesc">
              FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER
              FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER
              FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER
              FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER
              FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER FILLER
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Landing
