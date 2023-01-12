import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 1- what is JSX
/* 
 if you want to write HTML code in Javascript this is called JSX (JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript
 XML))
*/

/* var React = require("react");
var ReactDOM = require("react-dom");
ReactDOM.render(
  <div>
    <h1>Hello G</h1>
    <p>This is our paragraph</p>
  </div>,
  document.getElementById("root")
);

var h1 = document.createElement("h1");
h1.innerHTML = "Hello G";
document.getElementById("root").appendChild(h1); */

// Challenge 1
// Create react app from scratch
// it should display h1 heading
// it should display an unordered list (bullet points)
// it should contain 3 list elements

/* import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>JSX Challenge</h1>
    <ul>
      <li>element 1</li>
      <li>element 2</li>
      <li>element 3</li>
    </ul>
  </div>,
  document.getElementById("root")
); */

// What is JavaScript Expressions
/* {
  Javascript 
  HTML
  Javascript
} */
// If you want to write JS code inside HTML(JSX) code this is called JavaScript Expressions.
// NOTE: we don't write JS conditions(Statement) e.g if else
/* import React from "react";
import ReactDOM from "react-dom";

const fName = "Najaf";
const lName = "Zaman";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>My Name is {`${fName} ${lName}`}</h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
); */

// Challenge 2
// Created by YOURNAME
// Copyright 2023

/* import React from "react";
import ReactDOM from "react-dom";

const fName = "Najaf";
const lName = "Zaman";

const currentDate = new Date();
const year = currentDate.getFullYear();
const day = currentDate.getDay();
const date = currentDate.getDate();

ReactDOM.render(
  <div>
    <p>Created by {`${fName} ${lName}`}</p>
    <p>Copyright {year}</p>
    { <p>Current date {currentDate}</p> }
    <p>day {day}</p>
    <p>day {date}</p>
  </div>,
  document.getElementById("root")
); */

// challenge 3
// JSX Attributes and styling
/* import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <div className="image-wrapper" contentEditable="false">
    <img
      src="https://www.halfbakedharvest.com/wp-content/uploads/2022/03/20-Minute-Red-Curry-Basil-Garlic-Oil-Noodles-1.jpg"
      alt="noodle 1"
    />
    <img
      src="https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg"
      alt="noodle 2"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoObXGpvT7mA3y1wWyESlTFkghcBTf6-ocBQ&usqp=CAU"
      alt="noodle 3"
    />
  </div>,
  document.getElementById("root")
); */

// Inline styling
/* import React from "react";
import ReactDOM from "react-dom";

const fName = "Najaf";
const lName = "Zaman";
const luckyNumber = 7;

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>My Name is {`${fName} ${lName}`}</h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
 */

// Challenge 4
/* import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();
var Greeting = ["Morning", "Afternoon", "Evening"];

const customStyle = {
  color: "",
};

if (hour < 12) {
  Greeting = `Good ${Greeting[0]}`;
  customStyle.color = "red";
} else if (hour < 18) {
  Greeting = `Good ${Greeting[1]}`;
  customStyle.color = "green";
} else {
  Greeting = `Good ${Greeting[2]}`;
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="greeting" style={customStyle}>
      {Greeting}
    </h1>
  </div>,
  document.getElementById("root")
); */
