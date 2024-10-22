import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root"); // check below was to cater for a non-null assertion linting fix

// Check if the root container exists, otherwise throw an error
if (!container) {
  throw new Error(
    "Root container not found. Please ensure the element with id 'root' exists in the HTML."
  );
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
