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
  const { id } = useParams();
  const place = data.find((place) => place.id === id); //Afficher une page tant qu'il y a un id différent dans le fichier json

  const rankNumbers = [1, 2, 3, 4, 5];

  //Important de l'écrire, car même si un id n'existe pas, une page d'erreur (react et non Error.jsx) s'affichera
  if (!place) {
    return <Error />;
  }

  return (
    <div className="width-all">
      <header>
        <Slideshow pictures={data.pictures} />
      </header>

      <div>
        <div className="title-and-tags"></div>
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
            {rankNumbers.map((e, data) => (
              <PlaceRank
                key={data}
                color={parseInt(place.rating) >= e ? "rank-colored" : " "}
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
          classFlex=""
        />
        <Collapse
          title="Équipements"
          text={place.equipments}
          classTitle="places-div-title-collapse"
          classText="places-collapse-text"
          classFlex=""
        />
      </div>
    </div>
  );
}

export default Logements;
