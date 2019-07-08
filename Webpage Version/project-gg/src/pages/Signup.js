import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../styles/SignupPage.css"

import Logo from "../components/Logo"
import BackButton from "../components/BackButton"
import CreateAccountObject from "../components/CreateAccountObject"

class Signup extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div style={styles.superContainer}>
        <Link className="link" to="/">
          {""}
          <Logo color={"white"} />
          {""}
        </Link>

        <div style={styles.container}>
          <div style={styles.leftUI}>
            <div className="topUI">
              <img
                src={require("../Assets/BoyBand.png")}
                className="boyBandImage"
              />
              <Link className="link" to="/">
                {" "}
                <BackButton />{" "}
              </Link>
            </div>
            <div className="botUI">
              <img
                src={require("../Assets/Controller.png")}
                className="controllerImage"
                style={styles.controllerImage}
              />
            </div>
          </div>
          <div className="rightUI">
            <CreateAccountObject />
          </div>
        </div>
      </div>
    )
  }
}
export default Signup

var styles = {
  superContainer: {
    overflowy: "hidden",
    height: "100%",
    width: "100%",
    boxSizing: "border-box"

    // border: "2px solid #666666"
  },
  leftUI: {
    width: "80%",
    boxSizing: "border-box"

    // border: "2px solid #666666"
  },
  controllerImage: {
    alignSelf: "flex-end",
    marginTop: "24px"

    // border: "2px solid #666666"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box"

    // border: "2px solid #666666"
  }
}
