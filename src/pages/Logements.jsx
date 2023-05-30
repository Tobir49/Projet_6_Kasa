import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import "./styles/logements.css";
import Error from "../pages/Error";
import PlaceTitle from "../components/PlaceTitle";
import PlaceTags from "../components/PlaceTags";
import PlaceHost from "../components/PlaceHost";
import Collapse from "../components/Collapse";


function Logements() {
  const {id} = useParams();
  const place = data.find((place) => place.id === id) //Afficher une page tant qu'il y a un id différent dans le fichier json

  //Important de l'écrire, car même si un id n'existe pas, une page d'erreur (react et non Error.jsx) s'affichera
  if (!place){
    return <Error/>
  }

  return (
    <div>
      <PlaceTitle title={place.title} location={place.location} />

      <div>
        {place.tags.map(tag => <PlaceTags tags={tag} />)}

        <PlaceHost host ={place.host}/>
      </div>

      <div className="div-collapse-places">
        <Collapse title="Description"
        text={place.description}
        classTitle="places-div-title-collapse"
        classText="places-collapse-text"/>

        <Collapse title="Équipements"
        text={place.equipments}
        classTitle="places-div-title-collapse"
        classText="places-collapse-text"/>
      </div>
    </div>
    );
};
  
export default Logements;