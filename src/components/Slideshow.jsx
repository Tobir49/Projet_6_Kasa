import React from "react";
import Chevron from "./Chevron";
import "./styles/slideshow.css";
import { useState } from "react";

function Slideshow(props) {
  //Constantes pour le slideshow
  const [picture, setPicture] = useState(0);
  //La variable 'picture'=0 soit le premier élément du tableau
  //La variable 'setPicture' sert à modifier la valeur de 'picture'

  const nextPicture = () => {
    if (picture === props.pictures.length - 1) {
      setPicture(0);
    } else {
      setPicture(picture + 1);
      //On donne à 'picture' la src de l'image suivante à celle active dans le tableau
    }
  };
  const previousPicture = () => {
    if (picture === 0) {
      setPicture(props.pictures.length - 1);
    } else {
      setPicture(picture - 1);
      //On donne à 'picture' la src de l'image précédente à celle active dans le tableau
    }
  };

  return (
    <div className="div-slideshow">
      <div>
        <Chevron
          classChevron={
            props.pictures.length > 1
              ? "fa-solid fa-chevron-left arrow-left"
              : null
            //Permet de ne pas afficher de flèche si 1 seule image dans le tableau 'pictures'
          }
          onClick={previousPicture}
        />
        <Chevron
          classChevron={
            props.pictures.length > 1
              ? "fa-solid fa-chevron-right arrow-right"
              : null
          }
          onClick={nextPicture}
        />
      </div>
      {props.pictures.map((element, index) => (
        <img
          alt="caroussel"
          className={`picture-slideshow ${
            //(display:none)
            index === picture ? "visible-slideshow" : ""
            //Si index = valeur de picture, visible-slideshow est ajoutée (display:block), sinon, aucune classe (donc display:none).
          }`}
          key={index}
          src={element}
        />
      ))}
      <p className="number-total-slideshow">
        {props.pictures.length > 1
          ? `${picture + 1}/${props.pictures.length}`
          : null}
        {/* Ajouter un compteur d'images s'il y a plusieurs images ou non */}
      </p>
    </div>
  );
}

export default Slideshow;
