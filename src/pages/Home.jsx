import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import "./styles/home.css";

const Home = () => {
    return (
      <div className="div-home">
        <Banner />
        <Cards />
      </div>
    );
  };
  
  export default Home;