import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import "./styles/Global.css"
import "./styles/ComponentVisuals.css"

import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Home from "./pages/Home"

const height = window.innerHeight
const width = window.innerWidth
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    )
  }
}
export default App
