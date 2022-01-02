import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./store/context";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </Router>,
  document.getElementById("root")
);
