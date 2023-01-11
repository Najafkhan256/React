import "./index.css";
/* import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */

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

import React from "react";
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
    {/* <p>Current date {currentDate}</p> */}
    <p>day {day}</p>
    <p>day {date}</p>
  </div>,
  document.getElementById("root")
);
