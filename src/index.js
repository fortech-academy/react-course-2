import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const message = "Hello world!!!";

// const getMessage = () => {
//   return message;
// };

const isOk = true;

const obj = {
  name: "John",
  age: 32,
  location: {
    street: "Main",
  },
};

//JSX
root.render(
  <React.StrictMode>
    <App messages={message} isOk={isOk} person={obj}></App>
  </React.StrictMode>
);
