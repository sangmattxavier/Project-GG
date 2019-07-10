import React, { Component } from "react"
import { Link } from "react-router-dom"

class NewPost extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <label className="subContentTitle">
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
