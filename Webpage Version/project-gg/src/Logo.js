import React, { Component } from "react"

function Logo(props) {
  let style = { color: props.color }
  return (
    <label>
      <p className="logoText" style={style}>
        GG
      </p>
    </label>
  )
}
export default Logo
