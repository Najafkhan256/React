import React, { Component } from "react";

export default class User extends Component {
  componentWillUnmount() {
    alert("User is deleted");
  }
  render() {
    return (
      <div>
        <h2>User Info</h2>
        <ul>
          <li>Name: Najaf khan</li>
          <li>Email: najafkhan@gmail.com</li>
          <li>contact: 0000000000000</li>
          <li>contact: 0000000000000</li>
        </ul>
      </div>
    );
  }
}
