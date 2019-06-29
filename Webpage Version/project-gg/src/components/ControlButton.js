import React, { Component } from "react";

class ControlButton extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return <button className="ControlButton">{this.props.label}</button>
  }
}
export default ControlButton;