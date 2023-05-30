import React from "react";
import "./styles/placetags.css";

function PlaceTags(props) {
  return <p className="place-tags">{props.tags}</p>;
}

export default PlaceTags;
