import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {" "}
      <ProductsProvider>
        {" "}
        <App />
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
