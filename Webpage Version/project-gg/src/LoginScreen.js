import React, { Component } from "react"
import LogoWhite from "./LogoWhite"
class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="LoginScreen">
        <LogoWhite />
        <img src={require("./Assets/BoyBand.png")} className="boyBandImage" />
        <div>
          <img
            src={require("./Assets/Controller.png")}
            className="controllerImage"
          />
        </div>
      </div>
    )
  }
}
export default LoginScreen
