import React from "react";
import "./styles/banner.css";

function Banner(props) {
  return (
    <div className="div-banner">
      <img
        src={props.src}
        alt={props.alt}
        className={`${props.classHeight} banner`}
      />
      {props.title ? <p className="banner-title">{props.title}</p> : ""}
    </div>
  );
}

export default Banner;
