import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);

  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setMessage(name);
  }
  return (
    <div className="container">
      <h1>Hello {message}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="What's Your Name"
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
