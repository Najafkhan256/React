import React, { Component } from "react";
import User from "./User";

class CompWillUnmount extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }
  render() {
    return (
      <div>
        <h2>Component Will Unmount</h2>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Delete User
        </button>
        {this.state.toggle && <User />}
      </div>
    );
  }
}
export default CompWillUnmount;
