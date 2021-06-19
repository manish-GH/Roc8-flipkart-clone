import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { DataProvider } from "./Contexts/data";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
