import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import "./styles/home.css";
import banner from '../images/banner_mountain.jpg';

function Home() {
  return (
    <div className="div-home">
      <Banner title="Chez vous, partout et ailleurs" src={banner} alt="Bannière home"/>
      <Cards />
    </div>
  );
};

export default Home;