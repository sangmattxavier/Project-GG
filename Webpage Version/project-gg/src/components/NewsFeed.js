import React, { Component } from "react"

class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={this.props.adjust}>
        <label className="subContentTitle">
          <p>News Feed</p>
        </label>
      </div>
    )
  }
}
export default NewsFeed
