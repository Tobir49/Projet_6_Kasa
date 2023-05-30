import React from "react";
import "./styles/placehost.css";

function PlaceHost(props) {
  return (
    <div className="host">
      <p className="place-host-name">{props.host.name}</p>
      <img className="place-host-picture" src={props.host.picture} alt="host" />
    </div>
  );
}

export default PlaceHost;
