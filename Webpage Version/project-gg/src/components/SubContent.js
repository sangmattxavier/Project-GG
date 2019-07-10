import React, { Component } from "react"
import { Link } from "react-router-dom"

class SubContent extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="subContent">
        <form className="Post">
          <input type="text" placeholder="Post Here..." className="PostInput" />
        </form>
      </div>
    )
  }
}
export default SubContent
