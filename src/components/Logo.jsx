import React from 'react';
import "./styles/logo.css";
import logo from '../images/logo.webp';

function Logo() {
  return <img src={logo} alt="Logo" className='logo-header' />;
}

export default Logo;