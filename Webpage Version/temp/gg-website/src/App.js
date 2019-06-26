import React, { Component } from "react"
import "./styles/index.css"

import Navbar from "./Navbar"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}
export default App
