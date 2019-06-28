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
      <div className="createAccountWindow">
        <div>
          <Logo color={"white"} />
        </div>
        <div>
          <div>
            <div>
              <img
                src={require("./Assets/BoyBand.png")}
                className="boyBandImage"
              />
              <BackButton />
            </div>
            <div>
              <img
                src={require("./Assets/Controller.png")}
                className="controllerImage"
              />
            </div>
          </div>
          <div>
            <CreateAccountObject />
          </div>
        </div>
      </div>
    )
  }
}
export default CreateAccountScreen