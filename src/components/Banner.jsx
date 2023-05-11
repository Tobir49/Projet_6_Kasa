import React from 'react';
import banner from '../images/banner_mountain.jpg';
import "./banner.css";

function Logo() {
    return (
        <div className='div-banner'>
            <img src={banner} alt="Bannière Kasa" className='home-banner' />
            <p className='banner-title'>Chez vous, partout et ailleurs</p>
        </div>
    );
  }
  
  export default Logo;