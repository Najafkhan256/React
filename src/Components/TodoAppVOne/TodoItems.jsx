// import React, { useState } from "react";
import React from "react";

const TodoItems = (props) => {
  //   const [isDone, setIsDone] = useState(false);

  /* function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  } */

  /* function handleClick() {
    setIsDone(!isDone);
  } */
  return (
    <li
      //   style={{ textDecoration: isDone ? "line-through" : "none" }}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.todoItem}
    </li>
  );
};

export default TodoItems;
