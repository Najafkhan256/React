import React from "react";
import { UserConsumer } from "./userContext";

const CompD = () => {
  return (
    <UserConsumer>
      {(userName) => {
        return <h3>Hello {userName}</h3>;
      }}
    </UserConsumer>
  );
};

export default CompD;
