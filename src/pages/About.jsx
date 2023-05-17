import React from "react";
import Banner from "../components/Banner";
import bannerabout from '../images/banner_about.jpg';
import Collapse from "../components/Collapse";


function About() {
  return (
    <div className="div-home">
      <Banner title="" src={bannerabout} alt="Bannière about"/>
      <Collapse title="Test" text="2e test"/>
    </div>
  );
};

export default About;