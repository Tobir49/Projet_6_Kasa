import React from 'react';
import banner from '../images/banner_mountain.jpg';
import "./banner.css";

function Logo() {
    return <img src={banner} alt="Bannière Kasa" className='home-banner' />;
  }
  
  export default Logo;