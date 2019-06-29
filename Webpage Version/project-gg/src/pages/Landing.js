import React, { Component } from "react";
import Logo from "../components/Logo";
import ControlButton from "../components/ControlButton";
import "../styles/landing.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="landingPage">
        <div>
          <Logo color={"white"} />
          <div id="landHead">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="content">
          <ControlButton label="Register" id="register"/>
          <img src={require("../Assets/ControllerUncut@2x.png")} id="controller"/>
          <ControlButton label="Login" id="login"/>
        </div>
      </div>
    )
  }
}
export default Landing;
