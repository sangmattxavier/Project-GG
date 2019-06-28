import React, { Component } from "react"
import "./styles/component.css"
import { Switch, Route } from "react-router-dom";

//import Navbar from "./Navbar"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing";
import Login from "./pages/Login";

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="gradientBackground">
        <Switch>
          <Route exact path='/' component={Signup}></Route>
          <Route path='/home' component={Landing}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </div>
    )
  }
}
export default App
