import React, { useState } from "react";

const HideAndShow = () => {
  const [show, setShow] = useState(true);

  /**
   * The function handleShow() is a function that sets the state of the show variable to the opposite of
   * what it was before.
   */
  //   METHOD 1
  /* function handleShow() {
    setShow((prevShow) => !prevShow);
  } */

  //   METHOD 2
  function handleShow() {
    setShow(!show);
  }
  return (
    <div>
      <h2>{show && "Hide And Show"}</h2>
      <button onClick={handleShow}>Toggle me</button>
    </div>
  );
};

export default HideAndShow;
