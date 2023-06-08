import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data/logements.json";
import "./styles/logements.css";
import Error from "../pages/Error";
import PlaceTitle from "../components/PlaceTitle";
import PlaceTags from "../components/PlaceTags";
import PlaceHost from "../components/PlaceHost";
import Collapse from "../components/Collapse";
import PlaceRank from "../components/PlaceRank";
import Slideshow from "../components/Slideshow";
import Chevron from "../components/Chevron";

function Logements() {
  ////////DÉFINITIONS DE VARIABLES\\\\\\\\

  //Constante pour la route (url), appelée dans 'index.js'
  const { id } = useParams();

  //Constante qui sert à retrouver n'importe quel élément (objet) du 'data' selon l'id
  const place = data.find((place) => place.id === id);

  //Constante pour le rank
  const rankNumbers = [1, 2, 3, 4, 5];

  //Constantes pour le slideshow
  const [picture, setPicture] = useState(0);
  //La variable 'picture'=0 soit le premier élément du tableau
  //La variable 'setPicture' sert à modifier la valeur de 'picture'

  const nextPicture = () => {
    if (picture === place.pictures.length - 1) {
      setPicture(0);
    } else {
      setPicture(picture + 1);
      //On donne à 'picture' la src de l'image suivante à celle active dans le tableau
    }
  };
  const previousPicture = () => {
    if (picture === 0) {
      setPicture(place.pictures.length - 1);
    } else {
      setPicture(picture - 1);
      //On donne à 'picture' la src de l'image précédente à celle active dans le tableau
    }
  };

  ////////Si l'id n'est pas trouvé --> page d'erreur\\\\\\\\
  if (!place) {
    return <Error />;
  }

  ////////CODE DES LOGEMENTS\\\\\\\\
  return (
    <div className="width-all">
      <header>
        <div className="div-slideshow">
          <div>
            <Chevron
              classChevron={
                place.pictures.length > 1
                  ? "fa-solid fa-chevron-left arrow-left"
                  : null
                //Permet de ne pas afficher de flèche si 1 seule image dans le tableau 'pictures'
              }
              onClick={previousPicture}
            />
            <Chevron
              classChevron={
                place.pictures.length > 1
                  ? "fa-solid fa-chevron-right arrow-right"
                  : null
              }
              onClick={nextPicture}
            />
          </div>
          {place.pictures.map((element, index) => (
            <Slideshow
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
            {place.pictures.length > 1
              ? `${picture + 1}/${place.pictures.length}`
              : null}
            {/* Ajouter un compteur d'images s'il y a plusieurs images ou non */}
          </p>
        </div>
      </header>

      <div className="div-before-collapse">
        <div className="div-title-and-tags">
          <PlaceTitle title={place.title} location={place.location} />
          <div className="tags-div">
            {place.tags.map((tag) => (
              <PlaceTags key={tag} tags={tag} />
            ))}
            {/* Afficher autant de tags qu'il y en a dans le tableau */}
          </div>
        </div>
        <div className="host-and-rank">
          <PlaceHost host={place.host} />
          <div className="div-rank">
            {rankNumbers.map((element) => (
              <PlaceRank
                key={element}
                color={parseInt(place.rating) >= element ? "rank-colored" : " "}
              />
              //"rank-colored" est ajoutée si la valeur place.rating >= à l'élément actuel du tableau rankNumbers.
            ))}
          </div>
        </div>
      </div>

      <div className="div-collapse-places">
        <Collapse
          title="Description"
          text={place.description}
          classTitle="places-collapse-title"
          classText="places-collapse-text"
          classFlex="width-logement-collapse"
        />
        <Collapse
          title="Équipements"
          text={place.equipments}
          classTitle="places-collapse-title"
          classText="places-collapse-text"
          classFlex="width-logement-collapse"
          isList={true}
        ></Collapse>
      </div>
    </div>
  );
}

export default Logements;
