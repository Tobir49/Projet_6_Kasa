import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Error from "../pages/Error";
import PlaceTitle from "../components/PlaceTitle";
import PlaceTags from "../components/PlaceTags";
import PlaceHost from "../components/PlaceHost";

function Logements() {
  //Le useParams nous sera utile pour les routes dans le fichier index.js (ça nous permet de donner aux enfants(id) d'hériter des 
  // paramètres du parent (place))
  const {id} = useParams();
  const place = data.find((place) => place.id === id) //Afficher une page tant qu'il y a un id différent dans le fichier json

  //Important de l'écrire, car même si un id n'existe pas, une page s'affichera
  if (!place){
    return <Error/>
  }

  return (
    <div>
        <PlaceTitle title={place.title} location={place.location} />
        <div>
          <PlaceTags tags={place.tags}/>
          {/* < PlaceHost name={place.host.name} picture={place.host.picture}/> */}
        </div>
    </div>
    );
};
  
export default Logements;