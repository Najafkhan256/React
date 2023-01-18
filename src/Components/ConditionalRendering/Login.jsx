import React from "react";
import Input from "./Input";

const Login = (props) => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {/* {props.userIsRegistered === false && (
        <Input type="password" placeholder="Confirm Password" />
      )} */}
      {!props.userIsRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.userIsRegistered === true ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default Login;
