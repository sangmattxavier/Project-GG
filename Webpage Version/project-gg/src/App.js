import React, { Component } from "react"
import "./styles/component.css"
import { Switch, Route } from "react-router-dom"

//import Navbar from "./Navbar"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
const height = window.innerHeight
const width = window.innerWidth
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="gradientBackground">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}
export default App
