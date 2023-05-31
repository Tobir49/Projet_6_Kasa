import React from "react";
import "./styles/placerank.css";

function PlaceRank(props) {
  return (
    <div>
      <i className={`fa-solid fa-star ranking ${props.color}`}></i>
    </div>
  );
}

export default PlaceRank;
