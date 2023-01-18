import React from "react";

var isDone = false;

const strike = () => {
  document.getElementById("root").style.textDecoration = "line-through";
  // comment bellow line
  isDone = true;
};
const normal = () => {
  document.getElementById("root").style.textDecoration = null;
  // comment bellow line
  isDone = false;
};

const DeclarativeImperative = () => {
  return (
    <div>
      <p style={isDone === true ? { textDecoration: "line-through" } : null}>
        Buy milk
      </p>
      <button onClick={strike}>Strike Through</button>
      <button onClick={normal}>Strike normal</button>
    </div>
  );
};

export default DeclarativeImperative;
