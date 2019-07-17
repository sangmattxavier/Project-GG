import React, { Component } from "react"
import onClickOutside from "react-onclickoutside"

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTextbox: true,
      numRows: 1,
      style: {
        boxShadow: "none",
        borderRadius: "0px",
        zIndex: 3,
        transform: "scale(1.00, 1.00)",
        transitionDuration: "0.25s"
      }
    }
  }
  handleClick = event => {
    this.setState({
      isTextbox: false,
      numRows: 5,
      style: styles.focusOnComponent
    })
  }
  handleClickOutside = event => {
    this.setState({
      style: styles.unfocusOnComponent,
      isTextbox: true,
      numRows: 1
    })
  }
  render() {
    return (
      <div style={styles.overlay}>
        <div id="page-mask" id="page-mask" />
        <div style={this.state.style}>
          <label className="subContentTitle" style={this.props.adjust}>
            <img src={require("../assets/icons/post-96.png")} />
            <p>New Post</p>
          </label>
          <div className="subContent">
            <form className="post">
              {this.state.isTextbox ? (
                <input
                  type="textbox"
                  placeholder="Post Here..."
                  className="postInput"
                  onClick={this.handleClick}
                />
              ) : (
                <textarea
                  class="postTextarea"
                  placeholder="Post Here..."
                  name="text"
                  value={this.setState.text}
                  onChange={this.handleChange}
                  rows={this.state.numRows}
                  autofocus="true"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default onClickOutside(NewPost)

const styles = {
  overlay: {
    "z-index": 1
  },
  focusOnComponent: {
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    marginTop: "-100px",
    "z-index": 3,
    transform: "scale(1.25, 1.25)",
    transitionDuration: "0.25s"
  },
  unfocusOnComponent: {
    boxShadow: "none",
    borderRadius: "0px",
    "z-index": 3,
    transform: "scale(1.00, 1.00)",
    transitionDuration: "0.25s"
  }
}
