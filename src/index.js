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

// Challenge
// Create react app from scratch
// it should display h1 heading
// it should display an unordered list (bullet points)
// it should contain 3 list elements

import React from "react";
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
);
