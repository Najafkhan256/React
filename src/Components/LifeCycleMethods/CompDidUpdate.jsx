import React, { Component } from "react";

export default class CompDidUpdate extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      favouriteColor: "yellow",
    };
    this.state = {
      active: null,
      who: null,
    };
  }
  // componentDidMount
  componentDidMount() {
    console.log("componentDidMount");
    // this.setState({ favouriteColor: "Blue" });
    /*  setInterval(() => {
    }, 2000); */
  }

  // componentDidUpdate() is invoked immediately after updating(setState) occurs. This method is not called for the initial render.You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition or you’ll cause an infinite loop
  componentDidUpdate() {
    console.warn("componentDidUpdate");
    if (this.state.who === null) {
      this.setState({ who: "Najaf khan" });
    }
    // document.getElementById(
    //   "updatedColor"
    // ).innerHTML = `this is updated color ${this.state.favouriteColor}`;
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>Component Did Update</h2>
        <p>my favourite color is {this.state.favouriteColor}</p>

        <p id="updatedColor"></p>
        <button onClick={() => this.setState({ favouriteColor: "BROWN" })}>
          Show my favourite Color
        </button>
        <p id="updatedColor">
          this is render due to component did update {this.state.who}
        </p>
        <button
          onClick={() => {
            this.setState({ active: "active" });
          }}
        >
          Activate
        </button>
      </div>
    );
  }
}
