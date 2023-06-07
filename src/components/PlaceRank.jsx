import React from "react";
import "./styles/placerank.css";

function PlaceRank(props) {
  return (
    <div>
      <i className={`fa-solid fa-star ranking ${props.color}`}></i>
      {/* Permet d'ajouter une classe aux éléments <i> qui devront être rouge (défini dans logements.jsx) */}
    </div>
  );
}

export default PlaceRank;
