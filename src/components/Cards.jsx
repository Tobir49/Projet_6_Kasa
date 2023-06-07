import React from "react";
import Card from "./Card";
import data from "../data/logements.json";
import "./styles/card.css";

function Cards() {
  return (
    <div className="div-cards">
      {/* L'utilisation de .map est itéré sur chaque élément du tableau et exécute la fonction sur chacun d'entre eux. */}
      {data.map((e) => (
        <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
        // Ce composant est utlisé pour chaque élément du .map . Les propriétés key, id, title et cover sont transmises à <Card>.
      ))}
    </div>
  );
}

export default Cards;
