import React from "react";
import "./style.css";

export const Footer: React.FC = () => {
  return (
    <footer className="App-footer" aria-labelledby="footer-text">
      <p id="footer-text">
        {new Date().getFullYear()} The Dog Catalog. All Rights Reserved.
      </p>
    </footer>
  );
};
