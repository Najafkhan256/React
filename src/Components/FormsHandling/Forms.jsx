import React, { Component } from "react";

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
    };
  }
  submit() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h2>Forms</h2>
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
          value={this.state.user}
        />
        <input
          type="password"
          placeholder="user password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          value={this.state.password}
        />
        <button onClick={() => this.submit()}>submit</button>
      </div>
    );
  }
}
