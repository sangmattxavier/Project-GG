import React, { Component } from "react"
import Logo from "../components/Logo"

class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <div>
          <Logo color={"white"} />
        </div>
        <div className="content">Login!</div>
      </div>
    )
  }
}
export default Login
