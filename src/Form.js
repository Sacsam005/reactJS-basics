import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react'

export class Form extends Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      isChecked: false,
      favcolor: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {

    return (

      <div className="container my-5">
        <h2>Fill the form below</h2>
        <form >
          <label htmlFor="Firstname" />
          <input
            type="text"
            name="firstName"
            placeholder='first name'
            value={this.state.firstName}
            onChange={this.handleChange} />

          <br />
          <label htmlFor="LastName" />
          <input
            type="text"
            name="lastName"
            placeholder='last name'
            value={this.state.lastName}
            onChange={this.handleChange} />
          <br />

          <label htmlFor="Age" />
          <input
            type="number"
            name="age"
            placeholder='your age'
            value={this.state.age}
            onChange={this.handleChange} />
        </form>
        <br />
        <label >Gender: </label>
        <br />
        <label htmlFor="">
          <input type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange} />
          Male<t /></label> <t />
        <label htmlFor="">
          <input type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange} />
          Female <t /></label> <t />

        <label htmlFor="">
          <input type="radio"
            name="gender"
            value="Other"
            onChange={this.handleChange} />
          Other<t /></label>

        <br />
        <label ><b>Favorite Color:</b></label><br />
        <select name="favcolor"
          value={this.state.favcolor}
          onChange={this.handleChange}>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
        </select>
        <br />

        <h1>Entered Info</h1>
        <p>Your Name is: <b>{this.state.firstName} {this.state.lastName}</b></p>
        <p>You are <b>{this.state.age}</b> years old</p>
        <p>You are a <b>{this.state.gender}</b></p>
        <p>Your favorite color is: <b>{this.state.favcolor}</b></p>

        <input type="checkbox"
          name="isChecked"
          value={this.state.isChecked}
          onChange={this.handleChange}
        />
        <p style={{ textDecoration: this.state.isChecked ? "none" : "line-through" }}>Yes, I have confirmed my Choices</p>
      </div>
    )
  }
}

export default Form
