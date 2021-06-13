import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div>
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>Home</li>
          </Link>
          <Link
            to="/listUsers"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>List of Users</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
