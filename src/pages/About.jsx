import React from "react";
import Banner from "../components/Banner";
import bannerabout from '../images/banner_about.jpg';


function About() {
  return (
    <div className="div-home">
      <Banner title="" src={bannerabout} alt="Bannière about"/>
    </div>
  );
};

export default About;