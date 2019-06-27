import React, { Component } from "react"
import "./styles/index.css"

//import Navbar from "./Navbar"
import LoginScreen from "./LoginScreen"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="gradientBackground">
        <LoginScreen />
      </div>
    )
  }
}
export default App
