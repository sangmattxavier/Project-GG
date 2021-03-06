import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Animated } from "react-animated-css"

import Logo from "../components/Logo"
import HollowButton from "../components/HollowButton"
import RegisterOrLoginObject from "../components/RegisterOrLoginObject"

class Register extends Component {
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
            <div style={styles.leftTopUI}>
              <img
                src={require("../assets/images/BoyBand.png")}
                className="boyBandImage"
                style={styles.boyBandImage}
              />

              <Link className="link" to="/">
                {" "}
                <HollowButton
                  label="← Back"
                  adjust={styles.hollowButton}
                />{" "}
              </Link>
            </div>
            <div style={styles.leftBotUI}>
              <img
                src={require("../assets/images/Controller.png")}
                className="controllerImage"
                style={styles.controllerImage}
              />
            </div>
          </div>

          <div style={styles.rightUI}>
            <RegisterOrLoginObject
              adjust={styles.RegisterOrLoginObject}
              userRegister={true}
              title={"Register"}
              submitLabel="Create"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Register

const styles = {
  superContainer: {
    overflowy: "hidden",
    height: "100%",
    width: "100%",
    boxSizing: "border-box"

    // border: "2px solid #666666"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box"

    // border: "2px solid #666666"
  },
  leftUI: {
    width: "80%",
    boxSizing: "border-box"

    // border: "2px solid #666666"
  },
  leftTopUI: {
    display: "flex",
    flexDirection: "row",
    marginTop: "100px",
    justifyContent: "space-evenly"

    // border: "2px solid #666666"
  },
  boyBandImage: {},
  controllerImage: {
    alignSelf: "flex-end",
    marginTop: "24px"

    // border: "2px solid #666666"
  },
  hollowButton: {},
  leftBotUI: {
    display: "flex",
    alignContent: "flexEnd"

    // border: "2px solid #666666"
  },
  rightUI: {
    alignSelf: "center",
    marginRight: "80px"

    // border: "2px solid #666666"
  },
  RegisterOrLoginObject: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    boxSizing: "border-box",
    float: "right"
  }
}
