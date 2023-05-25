import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Error from "../pages/Error";

function Logements() {
  //Le useParams nous sera utile pour les routes dans le fichier index.js (ça nous permet de donner aux enfants(id) d'hériter des 
  // paramètres du parent (place))
  const {id} = useParams();
  const place = data.find((place) => place.id === id)

  //Important de l'écrire, sinon même si l'id n'existe pas, une page s'affichera
  if (!place){
    return <Error/>
  }

return (
  <h1>Logements</h1>
  );
};
  
export default Logements;