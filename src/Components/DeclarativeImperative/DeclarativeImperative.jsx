import React from "react";

const DeclarativeImperative = () => {
  var isDone = true;
  const lineThrough = { textDecoration: "line-through" };

  return (
    <div>
      <p style={isDone === true ? lineThrough : null}>Buy milk</p>
    </div>
  );
};

export default DeclarativeImperative;
