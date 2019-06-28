import React, { Component } from "react"
import Logo from "./Logo"

class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="LoginScreen">
        <Logo color={"white"} />
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
