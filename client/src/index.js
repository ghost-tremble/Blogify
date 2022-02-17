import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

const Blogify = () => {
  return <App />;
};

let render = document.getElementById("root");

ReactDOM.render(<Blogify />, render);
