import React, { useState } from "react";

const EventHandling = () => {
  const [hading, setHading] = useState("Event Handling in React");
  const [isMouseOver, setMouseOver] = useState(false);
  function mouseClick(e) {
    e.preventDefault();
    setHading("Submitted");
  }

  function mouseOver() {
    // document.getElementById("submit").style.backgroundColor = "black";
    setMouseOver(true);
  }
  function mouseOut() {
    // document.getElementById("submit").style.backgroundColor = "white";
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{hading}</h1>
      <form>
        <input type="text" placeholder="What's Your Name" />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={mouseClick}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventHandling;
