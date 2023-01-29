import React, { Component } from "react";

export default class ValidationOne extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }
  valid() {
    if (!this.state.email.includes("@") && this.state.password.length < 5) {
      this.setState({
        emailError: "Email is empty",
        passwordError: "Password length should be greater then 5",
      });
    } else if (!this.state.email.includes("@")) {
      this.setState({
        emailError: "@ is not include",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password length should be greater then 5",
      });
    } else {
      return true;
    }
  }

  submit(e) {
    this.setState({
      emailError: "",
      passwordError: "",
    });
    if (this.valid()) {
      alert("submit");
    }
  }
  render() {
    return (
      <div>
        <h2>Form validation using class Component</h2>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        {this.valid ? <p>{this.state.emailError}</p> : ""}

        <input
          type="password"
          name="password"
          placeholder="Your Password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        {this.valid ? <p>{this.state.passwordError}</p> : ""}
        <button onClick={() => this.submit()}>Submit Form</button>
      </div>
    );
  }
}
