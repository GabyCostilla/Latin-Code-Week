import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">Registrar</Link>
          </li>
          <li>
            <Link to="/inversion">Inversion</Link>
          </li>
          <li>
            <Link to="/news" className="nav-link">Noticias</Link>
          </li>
        </ul>
      </nav>
      <div className="outlet-content">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;