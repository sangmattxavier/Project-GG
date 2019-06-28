import React, { Component } from "react"
import "./styles/index.css"

//import Navbar from "./Navbar"
import CreateAccountScreen from "./CreateAccountScreen"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="gradientBackground">
        <CreateAccountScreen />
      </div>
    )
  }
}
export default App
