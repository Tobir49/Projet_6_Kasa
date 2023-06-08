import React from "react";
import "./styles/nav.css";
import Logo from "./Logo";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <nav className="header-nav">
          <Logo />
          <ul className="ul-header">
            <li className="li-header">
              <Link to="/home" className="a-header">
                Accueil
              </Link>
            </li>
            <li className="li-header">
              <Link to="/about" className="a-header">
                À propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Nav;
