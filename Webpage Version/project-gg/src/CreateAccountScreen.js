import React, { Component } from "react"
import Logo from "./Logo"
import BackButton from "./BackButton"
import CreateAccountObject from "./CreateAccountObject"

class CreateAccountScreen extends Component {
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
              <BackButton />
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
export default CreateAccountScreen
