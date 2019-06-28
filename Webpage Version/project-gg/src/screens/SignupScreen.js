import React, { Component } from "react"
import Logo from "../components/Logo"
import BackButton from "../components/BackButton"
import CreateAccountObject from "../components/CreateAccountObject"
import {Link} from "react-router-dom";

class SignupScreen extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="createAccountScreen">
        <div className="createTopLayer">
          <Logo color={"white"} />
        </div>
        <div className="createBotLayer">
          <div className="createBotLayerLeftSide">
            <div className="createBotLayerLeftTopSide">
              <img
                src={require("./Assets/BoyBand.png")}
                className="boyBandImage"
              />
              <Link to="/home"><BackButton /></Link>
            </div>
            <div className="createBotLayerRightTopSide">
              <img
                src={require("./Assets/Controller.png")}
                className="controllerImage"
              />
            </div>
          </div>
          <div className="createBotLayerRightSide">
            <CreateAccountObject />
          </div>
        </div>
      </div>
    )
  }
}
export default SignupScreen
