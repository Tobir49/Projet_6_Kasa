import React from "react";
import "./styles/placetitle.css";

function PlaceTitle(props) {
  return (
    <div>
      <h2 className="place-title">{props.title}</h2>
      <h3 className="place-location">{props.location}</h3>
    </div>
  );
}

export default PlaceTitle;
