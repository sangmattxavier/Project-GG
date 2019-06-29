import React, { Component } from "react";

class ControlButton extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return <button className="ControlButton" id={this.props.id}>{this.props.label}</button>
  }
}
export default ControlButton;