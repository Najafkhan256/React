import React from "react";

const TodoInput = (props) => {
  return (
    <div className="form">
      <input
        type="text"
        value={props.inputText}
        onChange={props.handleChange}
      />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default TodoInput;
