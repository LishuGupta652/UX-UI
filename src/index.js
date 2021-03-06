import React from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "./Context/ThemeContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById("root")
);
