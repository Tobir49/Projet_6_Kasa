import React from "react";
import "./styles/slideshow.css";

function Slideshow(props) {
  return <img className={props.className} src={props.src} alt="slideshow" />;
}

export default Slideshow;
