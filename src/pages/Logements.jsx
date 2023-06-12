import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import "./styles/logements.css";
import Error from "../pages/Error";
import PlaceTitle from "../components/PlaceTitle";
import PlaceTags from "../components/PlaceTags";
import PlaceHost from "../components/PlaceHost";
import Collapse from "../components/Collapse";
import PlaceRank from "../components/PlaceRank";
import Slideshow from "../components/Slideshow";

function Logements() {
  ////////DÉFINITIONS DE VARIABLES\\\\\\\\

  //Constante pour la route (url), appelée dans 'index.js'
  const { id } = useParams();

  //Constante qui sert à retrouver n'importe quel élément (objet) du 'data' selon l'id
  const place = data.find((place) => place.id === id);

  //Constante pour le rank
  const rankNumbers = [1, 2, 3, 4, 5];

  ////////Si l'id n'est pas trouvé --> page d'erreur\\\\\\\\
  if (!place) {
    return <Error />;
  }

  ////////CODE DES LOGEMENTS\\\\\\\\
  return (
    <div className="width-all">
      <header>
        <Slideshow pictures={place.pictures} />
        {/* La prop = place.pictures */}
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
