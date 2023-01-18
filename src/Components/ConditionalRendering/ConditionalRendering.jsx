import React from "react";
import Login from "./Login";

const userIsRegistered = false;

// const hour = new Date(2023, 1, 13, 18).getHours();

const ConditionalRendering = () => {
  return (
    <div className="container">
      <Login userIsRegistered={userIsRegistered} />
    </div>
  );
};
export default ConditionalRendering;
