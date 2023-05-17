import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider, ProductsProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {" "}
      <ProductsProvider>
        <DataProvider>
          <App />
        </DataProvider>{" "}
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
