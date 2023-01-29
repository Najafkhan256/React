import React from "react";

class LifeCycleMethods extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    console.log("constructor");
  }
  componentDidMount() {
    // call your api here OR async call here
    this.setState({ data: "Najaf" });
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return <h2>Life Cycle Methods</h2>;
  }
}
export default LifeCycleMethods;
