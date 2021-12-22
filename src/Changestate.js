import React, { Component } from 'react'

export class Changestate extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: true
    }

    this.logIn = this.logIn.bind(this)
  }

  logIn() {
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.loggedIn ? "LogIn" : "LogOut";

    return (
      <>
        <button className="btn btn-primary" onClick={this.logIn}>{buttonText}</button>
      </>
    )
  }
}

export default Changestate
