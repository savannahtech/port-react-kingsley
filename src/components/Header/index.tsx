import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import CatalogLogo from "../../assets/CatalogLogo.svg";
import "./style.css";

export const Header: React.FC = () => {
  return (
    <header className="App-header" aria-labelledby="header-navigation">
      <nav>
        <div className="logo">
          <Link to="/" aria-label="Go to homepage">
            <img src={CatalogLogo} alt="Dog's Catalog Logo" />
          </Link>
        </div>
      </nav>
      <nav className="nav-container" id="header-navigation">
        <ul>
          <li>
            <Link to="/" aria-label="Go to Catalog">
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/manage" aria-label="Go to Manage Dogs">
              Manage
            </Link>
          </li>
          <li>
            <Link to="/about" aria-label="Go to About Us">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
