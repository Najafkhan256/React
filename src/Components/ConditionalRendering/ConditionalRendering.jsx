import React from "react";
// import Login from "./Login";

// const isLoggedIn = true;

const hour = new Date(2023, 1, 13, 9).getHours();

const ConditionalRendering = () => {
  return (
    <div className="container">
      {/* Ternary Operator */}
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}
      {/* AND operator */}
      {hour > 12 && <h1>Why are you still working</h1>}
    </div>
  );
};
export default ConditionalRendering;
