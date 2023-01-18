import React from "react";
import User from "./User";

const LiftingStateUp = () => {
  function parentAlert(userName) {
    return alert(userName);
  }
  return (
    <div>
      <h2>Lifting State Up</h2>
      <p>How to pass props from child to parents?</p>

      <User parentAlert={parentAlert} />
    </div>
  );
};

export default LiftingStateUp;
