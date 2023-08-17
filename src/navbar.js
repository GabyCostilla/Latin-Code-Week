import React from "react";
import "./navbar.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/inversion">Inversion</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>);
}

export default Navbar;
