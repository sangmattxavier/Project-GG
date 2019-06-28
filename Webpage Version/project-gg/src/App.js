import React, { Component } from "react"
import "./styles/index.css"
import {BrowserRouter as Router, Route} from "react-router-dom";

//import Navbar from "./Navbar"
import SignupScreen from "./screens/SignupScreen"
import HomeScreen from "./screens/HomeScreen";

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="gradientBackground">
        <Router>
          <Route path='/' component={SignupScreen}></Route>
          <Route path='/home' component={HomeScreen}></Route>
        </Router>
      </div>
    )
  }
}
export default App
