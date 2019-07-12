import React, { Component } from "react"
import { Link } from "react-router-dom"

function AccountNote(props) {
  return (
    <p className="accountNote">
      {props.staticText}
      <Link className="link" to={props.link}>
        {""}
        {props.linkText}
        {""}
      </Link>
    </p>
  )
}
export default AccountNote
