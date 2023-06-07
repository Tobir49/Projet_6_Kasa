import React from "react";
import "./styles/banner.css";

function Banner(props) {
  return (
    <div className="div-banner">
      <img
        src={props.src}
        alt={props.alt}
        className={`${props.classHeight} banner`}
        //Possibilité d'ajouter une classe en props si l'on souhaite faire 2 composants avec un style différent
      />
      {props.title ? <p className="banner-title">{props.title}</p> : ""}
    </div>
  );
}

export default Banner;
