import React, { useState } from "react";
import TodoHeading from "./TodoHeading";
import TodoInput from "./TodoInput";
import TodoItems from "./TodoItems";

const TodoAppVOne = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  /*  const arr = [2, 4, 5, "najaf", 1, "annus", "rayyan"];

  const stringArr = arr.filter((str) => typeof str === "string");
  alert(stringArr); */

  function handleChange(e) {
    const newValue = e.target.value;
    // console.log(newValue);
    setInputText(newValue);
  }

  /**
   * The addItem function takes the current state of the todos array and adds the inputText to it, then
   * returns the new array.
   */
  function addItem() {
    /* Taking the current state of the todos array and adding the inputText to it, then
     * returns the new array. */
    setTodos((prevTodo) => {
      return [...prevTodo, inputText];
    });
    setInputText("");
  }

  /**
   * The deleteItem function takes in an id as a parameter and then sets the todos state to the
   * previous items minus the item with the index that matches the id.
   */
  function deleteItem(id) {
    setTodos((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <TodoHeading />
      <TodoInput
        inputText={inputText}
        handleChange={handleChange}
        addItem={addItem}
      />
      <div>
        <ul>
          {todos.map((todoItem, index) => (
            <TodoItems
              todoItem={todoItem}
              key={index}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoAppVOne;
