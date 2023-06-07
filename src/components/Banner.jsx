import React from "react";
import "./styles/banner.css";

function Banner(props) {
  return (
    <div className="div-banner">
      <img
        src={props.src}
        alt={props.alt}
        className={`${props.classHeight} banner`}
        //Possibilité d'ajouter une classe en props. 'classHeight' n'est pas obligé d'être défini,
        //ce qui permet d'avoir un style différent pour un même composant
      />
      {props.title ? <p className="banner-title">{props.title}</p> : ""}
    </div>
  );
}

export default Banner;
