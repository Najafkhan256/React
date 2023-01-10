/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

// what is JSX

var React = require("react");
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
document.getElementById("root").appendChild(h1);
