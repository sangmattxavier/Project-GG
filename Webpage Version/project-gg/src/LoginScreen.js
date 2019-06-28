import React, { Component } from "react"
import Logo from "./Logo"
import BackButton from "./BackButton"

class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="LoginScreen">
        <div>
          <Logo color={"white"} />
        </div>
        <div>
          <img src={require("./Assets/BoyBand.png")} className="boyBandImage" />
          <BackButton />
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
