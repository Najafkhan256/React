import React from "react";
import Login from "./Login";

const userIsRegistered = false;

const Form = () => {
  return (
    <div>
      <Login userIsRegistered={userIsRegistered} />
    </div>
  );
};

export default Form;
