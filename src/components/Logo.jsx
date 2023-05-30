import React from "react";
import "./styles/logo.css";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/home">
      <img src={logo} alt="Logo" className="logo-header" />
    </Link>
  );
}

export default Logo;
