import React, { Component } from "react"

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <label className="subContentTitle" style={this.props.adjust}>
          <img src={require("../Assets/icons/post-96.png")} />
          <p>New Post</p>
        </label>
        <div className="subContent">
          <form className="post">
            <input
              type="text"
              placeholder="Post Here..."
              className="postInput"
            />
          </form>
        </div>
      </div>
    )
  }
}
export default NewPost
