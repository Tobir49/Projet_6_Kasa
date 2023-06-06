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
  //Constantes pour la route (url)
  const { id } = useParams();
  const place = data.find((place) => place.id === id); //Afficher une page tant qu'il y a un id différent dans le fichier json

  //Constante pour le rank
  const rankNumbers = [1, 2, 3, 4, 5];

  //Constantes pour le slideshow
  const [picture, setPicture] = useState(0);

  const nextPicture = () => {
    if (picture === place.pictures.length - 1) {
      setPicture(0);
    } else {
      setPicture(picture + 1);
    }
  };
  const previousPicture = () => {
    if (picture === 0) {
      setPicture(place.pictures.length - 1);
    } else {
      setPicture(picture - 1);
    }
  };

  //Important de l'écrire, car même si un id n'existe pas, une page d'erreur (react et non Error.jsx) s'affichera
  if (!place) {
    return <Error />;
  }

  return (
    <div className="width-all">
      <header>
        <div className="div-slideshow">
          <div>
            <Chevron
              classChevron="fa-solid fa-chevron-left"
              onClick={previousPicture}
            />
            <Chevron
              classChevron="fa-solid fa-chevron-right"
              onClick={nextPicture}
            />
          </div>
          {place.pictures.map((element, index) => (
            <Slideshow
              className={`picture-slideshow ${
                index === picture ? "visible-slideshow" : ""
              }`}
              key={index}
              src={element}
            />
          ))}
          <p>1/4</p>
        </div>
      </header>

      <div>
        <div className="div-title-and-tags">
          <PlaceTitle title={place.title} location={place.location} />
          <div className="tags-div">
            {place.tags.map((tag) => (
              <PlaceTags key={tag} tags={tag} />
            ))}
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
            ))}
          </div>
        </div>
      </div>

      <div className="div-collapse-places">
        <Collapse
          title="Description"
          text={place.description}
          classTitle="places-div-title-collapse"
          classText="places-collapse-text"
        />
        <Collapse
          title="Équipements"
          text={place.equipments}
          classTitle="places-div-title-collapse"
          classText="places-collapse-text"
          isList={true}
        ></Collapse>
      </div>
    </div>
  );
}

export default Logements;
