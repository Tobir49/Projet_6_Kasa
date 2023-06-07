import React from "react";
import "./styles/slideshow.css";

function Slideshow(props) {
  //Le composant caroussel n'est qu'une simple balise <img> qui sera définie dans Logements.jsx
  return <img className={props.className} src={props.src} alt="slideshow" />;
}

export default Slideshow;
