import React, { Component } from "react"

class CreateAccountObject extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <form className="createAccountObject">
          <p>Create Account</p>
          <input type="text" placeholder="Email" />
          <p>Password Requirements</p>
          <ul>
            <li>At least 8 characters</li>
            <li>At least 1 number</li>
            <li>At least 1 special character</li>
            <li>No spaces</li>
          </ul>
        </form>
      </div>
    )
  }
}
export default CreateAccountObject
