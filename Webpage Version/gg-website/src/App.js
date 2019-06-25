import React, { Component } from "react"
import "./styles/index.css"

import Searchbar from "./Searchbar"
import Logo from "./Logo"
import Navbar from "./Navbar"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Searchbar />
        <Logo />
        <Navbar />
      </div>
    )
  }
}
export default App
