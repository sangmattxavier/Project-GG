import React, { Component } from "react"
import LogoWhite from "./LogoWhite"
class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <LogoWhite />
        <img src={require("./Assets/BoyBand.png")} className="boyBandImage" />
      </div>
    )
  }
}
export default LoginScreen
